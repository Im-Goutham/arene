import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Product, } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => Product)
export class ProductResolver {
    // Query to fetch all products
    @Query(returns => [Product])
    async getAllProducts(
    @Ctx() { prisma }: PrismaContext,
    @Arg("category_id") category_id: string,
    @Arg("take") take?: number, // Optional take for results
    @Arg("skip") skip?: number, // Optional offset for pagination
    @Arg("is_trending") is_trending?: boolean,
    ): Promise<Product[]> {
        const baseQuery:any = { where:{ is_deleted:false } };
  
        if (take) {
            baseQuery.take = take;
        }
  
        if (skip) {
            baseQuery.skip = skip;
           
        }
     

        if (category_id) {
            baseQuery.where = { ... baseQuery.where,category_id };
        }

        if (typeof is_trending === "boolean") {
            baseQuery.where = { ...baseQuery.where, is_trending };
        }
  
        return await prisma.product.findMany(baseQuery);
    }

  // Query to fetch a product by ID
  @Query(returns => Product, { nullable: true })
    async productById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Product | null> {
        return await prisma.product.findFirst({ where: { id, is_deleted:false } });
    }
 
}
