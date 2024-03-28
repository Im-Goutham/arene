import { Resolver, Mutation,Query, Arg, Ctx, InputType, Field, ObjectType } from "type-graphql";
import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
import { PrismaContext } from "../utils/prisma-client";
import { User } from "../../prisma/generated/type-graphql";


const JWT_SECRET= process.env.JWT_SECRET;

@InputType()
export class SignUpInput {
  @Field({ nullable: false })
      user_name: string;

  @Field({ nullable: false })
      phone_number: string;

  @Field({ nullable: false }) 
      email: string;

  @Field({ nullable: false })
      password: string;
}


@InputType()
export class LoginInput {
  @Field({ nullable: false })
      email: string;

  @Field({ nullable: false })
      password: string;
}

@ObjectType()
export class LoginResponse {
  @Field()
      token: string;
}


@Resolver()
export class AuthResolver {
  @Mutation(() => User)
    async signUp(
    @Arg("data") data: SignUpInput, // Use the input type
    @Ctx() { prisma }: PrismaContext
    ): Promise<User> {
        const { email, user_name, password , phone_number } = data;
        // Check if email or phone number already exists
        const userWithEmail = await prisma.user.findUnique({ where: { email } });
        const userWithPhone = await prisma.user.findUnique({ where: { phone_number } });

        if (userWithEmail) {
            throw new Error("Email already exists");
        }

        if (userWithPhone) {
            throw new Error("Phone number already exists");
        }
    
        const hashedPassword = await hash(password, 12); // Hash the password
        return await prisma.user.create({ data:{ user_name,email, phone_number, password: hashedPassword } });
    }

    
    @Mutation(() => LoginResponse)
  async login(
      @Arg("data") data: LoginInput, // Use the input type
      @Ctx() { prisma }: PrismaContext
  ): Promise<{ token: string}> {
      const { email, password } = data; 
      // Find the user by email
      const user: User| null = await prisma.user.findUnique({ where: { email } });
      if (!user || !user.password) {
          throw new Error("User not found");
      }
  
      // Verify the password
      const isValidPassword = await compare(password, user.password);
      if (!isValidPassword) {
          throw new Error("Invalid credentials");
      }

      if(!JWT_SECRET){
          throw new Error("JWT_SECRET is not available");
      }
      // Create JWT token
      const token = sign({ id:user.id, email, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

     
      return { token };
  }


  @Query(returns =>User)
    async getUser(
        @Ctx() { prisma }: PrismaContext,
        @Arg("token") token: string,
    ): Promise<User| null> {
        if(!JWT_SECRET){
            throw new Error("JWT_SECRET is not available");
        }
        const decoded = verify(token, JWT_SECRET) as {id:string};
        if(!decoded || !decoded?.id) {
            throw new Error("Invalid credentials");
        }
        
        return await prisma.user.findUnique({ where:{
            id: decoded.id
        } });
    }
}
