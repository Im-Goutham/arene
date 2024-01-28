import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Product, Category, Offer } from "../../prisma/generated/type-graphql";
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

  // Field resolver for the product's category
  @FieldResolver(type => Category)
  async category(@Root() product: Product, @Ctx() { prisma }: PrismaContext): Promise<Category | null> {
      return await prisma.category.findFirst({ where: { id: product.categoryId } });
  }

  // Field resolver for the product's offers
  @FieldResolver(type => [Offer])
  async offers(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Offer[]> {
      return await prisma.offer.findMany({ where: { productId: id } });
  }

    // Add more fields/queries as needed, e.g.,
    // - productsByCategory
    // - searchProducts
    // - bestSellingProducts
    // - etc.
}
