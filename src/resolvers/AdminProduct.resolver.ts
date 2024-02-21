import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Product, } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => Product)
export class AdminProductResolver {
  // Query to fetch all products
  @Query(returns => [Product])
    async getAllAdminProducts(@Ctx() { prisma }: PrismaContext): Promise<Product[]> {
        return await prisma.product.findMany();
    }

  // Query to fetch a product by ID
  @Query(returns => Product, { nullable: true })
  async getAdminProductById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Product | null> {
      return await prisma.product.findFirst({ where: { id } });
  }
 
}
