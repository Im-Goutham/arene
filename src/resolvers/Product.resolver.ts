import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Product, } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => Product)
export class ProductResolver {
  // Query to fetch all products
  @Query(returns => [Product])
    async allProducts(@Ctx() { prisma }: PrismaContext): Promise<Product[]> {
        return await prisma.product.findMany();
    }

  // Query to fetch a product by ID
  @Query(returns => Product, { nullable: true })
  async productById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Product | null> {
      return await prisma.product.findFirst({ where: { id } });
  }
 
}
