import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { ProductCategory, } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => ProductCategory)
export class ProductCategoryResolver {
  // Query to fetch all product categories
  @Query(returns => [ProductCategory])
    async allProductCategories(@Ctx() { prisma }: PrismaContext): Promise<ProductCategory[]> {
        return await prisma.productCategory.findMany();
    }

  // Query to fetch a product category by ID
  @Query(returns => ProductCategory, { nullable: true })
  async productCategoryById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<ProductCategory | null> {
      return await prisma.productCategory.findFirst({ where: { id } });
  }
 
}
