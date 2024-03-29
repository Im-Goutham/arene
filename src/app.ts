import express, { Application } from "express";
import cors from "cors";
import { crossOriginOpenerPolicy, crossOriginResourcePolicy, dnsPrefetchControl, expectCt, frameguard, hidePoweredBy, hsts, ieNoOpen, noSniff, originAgentCluster, permittedCrossDomainPolicies, referrerPolicy, xssFilter } from "helmet";
import morgan from "morgan";
import actuator from "express-actuator";
import { graphqlHTTP } from "express-graphql";
import { verify } from "jsonwebtoken"; 
import { GraphQLError,
    //  GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLString
} from "graphql";
import queryComplexity, {
    simpleEstimator,
    fieldExtensionsEstimator,
} from "graphql-query-complexity";
import { buildSchema } from "type-graphql";
import { resolvers } from "../prisma/generated/type-graphql";
import path from "path";
import customResolvers from "./resolvers";
import expressPlayground from "graphql-playground-middleware-express";
import multer from "multer";
import AWS from "aws-sdk";


const JWT_SECRET= process.env.JWT_SECRET ;


// Express App
const app: Application = express();
  

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION // Optional: Set your S3 bucket's region
});

const s3 = new AWS.S3();
  
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // limit file size to 5MB
    },
});
  
  
// Serve uploaded files
app.use("/files", express.static("uploads"));


// * Route Files
import prisma from "./utils/prisma-client";

// * Logging (Development)
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


//  * Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ! Helmet
// app.use(helmet()); // not work with graphiql use alias instead
// app.use(contentSecurityPolicy()); // not work with graphiql
// app.use(crossOriginEmbedderPolicy()); // not work with graphiql
app.use(crossOriginOpenerPolicy());
app.use(crossOriginResourcePolicy());
app.use(dnsPrefetchControl());
app.use(expectCt());
app.use(frameguard());
app.use(hidePoweredBy());
app.use(hsts());
app.use(ieNoOpen());
app.use(noSniff());
app.use(originAgentCluster());
app.use(permittedCrossDomainPolicies());
app.use(referrerPolicy());
app.use(xssFilter());

// ! Cors
app.use(cors({ origin: true }));

// ! Health check
app.use(actuator());


app.post("/upload", upload.single("file"), async (req: any, res) => {
    console.log("req --- ", req.file);
    const params: any = {
        Bucket:  process.env.AWS_BUCKET_NAME,
        Key: req.file.originalname,
        Body: req.file.buffer,
    };

    s3.upload(params, (err: Error, data: {Location:string}) => {
        if (err) {
            res.status(500).json({ error:"Error -> " + err });
        }
     
        res.json({ message: "File uploaded successfully","filename": 
        req.file.originalname, "location": data.Location });
    });
   
    return; 
});


// const a = customResolvers;
const appConfig = async (): Promise<Application> => {
    const schema = await buildSchema({
        
        // resolvers, // only resolvers generate by type-graphql
        // resolvers: ["./node_modules/@generated/type-graphql", __dirname + "/resolvers/**/*.resolver.{ts,js}"],
        resolvers:[...customResolvers, 
            ...resolvers
        ],
        nullableByDefault: true,
        validate: false,
        emitSchemaFile: path.resolve(__dirname, "../prisma/snapshots/schema", "schema.gql"),
        authChecker: async ({ context: { req } }, allowedRoles) => {
            // Extract the JWT token from the request header
         
            const authorization = req.headers["authorization"];

            if (!authorization?.startsWith("Bearer ")) {
                throw new Error("Unauthorized");
            }
        
            const token = authorization.split(" ")[1];
            console.log("token --- ", token);
            // Replace 'YOUR_SECRET_KEY' with your actual JWT secret key
            try {
                if(!JWT_SECRET){
                    throw new Error("JWT_SECRET is not available");
                }
                const decoded = verify(token, JWT_SECRET) as {role:string};
                if(!decoded || !decoded?.role) {
                    return false;
                }
                console.log("allowedRoles ---- ",allowedRoles);
                if(!(allowedRoles.findIndex((role) => decoded.role === role)> -1)){
                    return false; 
                }
                // You can access user information from the decoded token object
        
                // Check user roles based on decoded information (optional)
                // if (decoded.role === 'ADMIN') {
                //   return true; // User has admin role
                // } else {
                //   return false; // User doesn't have admin role
                // }
        
                return true; // User is authenticated (role check can be done within resolvers)
            } catch (err) {
                throw new Error("Invalid token");
            }
        },
    });

  
    app.use(
        "/graphql",
        graphqlHTTP(async (req, res, params) => ({
            schema,
            context: { req, prisma },
           
            validationRules: [
                /**
           * This provides GraphQL query analysis to reject complex queries to your GraphQL server.
           * This can be used to protect your GraphQL servers
           * against resource exhaustion and DoS attacks.
           * More documentation can be found (here)[https://github.com/ivome/graphql-query-complexity]
           */
                queryComplexity({
                    // The maximum allowed query complexity, queries above this threshold will be rejected
                    maximumComplexity: 40,
                    // The query variables. This is needed because the variables are not available
                    // in the visitor of the graphql-js library
                    variables: params?.variables || undefined,
                    // Optional callback function to retrieve the determined query complexity
                    // Will be invoked weather the query is rejected or not
                    // This can be used for logging or to implement rate limiting
                    onComplete: (complexity: number) => {
                        // tslint:disable-next-line: no-console
                        console.log("Determined query complexity: ", complexity);
                    },
                    createError: (max: number, actual: number) => {
                        return new GraphQLError(
                            `Query is too complex: ${actual}. Maximum allowed complexity: ${max}`,
                        );
                    },
                    // Add any number of estimators. The estimators are invoked in order, the first
                    // numeric value that is being returned by an estimator is used as the field complexity.
                    // If no estimator returns a value, an exception is raised.
                    estimators: [
                        // fieldConfigEstimator(),
                        fieldExtensionsEstimator(),
                        // Add more estimators here...
                        // This will assign each field a complexity of 1 if no other estimator
                        // returned a value.
                        simpleEstimator({
                            defaultComplexity: 1,
                        }),
                    ],
                }),
            ],
        })),
    );
  
    app.get("/playground", expressPlayground({ endpoint: "/graphql" }));
    
    return app;
};
  
export default appConfig;
