import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Product, } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => Product)
export class AdminProductResolver {
  // Query to fetch all products
  @Query(returns => [Product])
    async getAllAdminProducts(@Arg("categoryId") categoryId: string,@Ctx() { prisma }: PrismaContext): Promise<Product[]> {
        console.log("called ---- ");
        return await prisma.product.findMany({ where: { category_id: categoryId || undefined } });
    }

  // Query to fetch a product by ID
  @Query(returns => Product, { nullable: true })
  async getAdminProductById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Product | null> {
      return await prisma.product.findFirst({ where: { id } });
  }
 
}
