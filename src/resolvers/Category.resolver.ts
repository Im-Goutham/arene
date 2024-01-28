import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Category, Product } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";
import { Int } from "type-graphql";

@Resolver(of => Category)
export default class CategoryResolver {
  // Query to fetch all categories
  @Query(returns => [Category])
  async allCategories(@Ctx() { prisma }: PrismaContext): Promise<Category[]> {
    return await prisma.category.findMany();
  }

// Query to fetch a category by ID
@Query(returns => Category, { nullable: true })
async categoryById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Category | null> { // Use Int as a type
  return await prisma.category.findFirst({ where: { id } });
}

  // Field resolver for products within a category
  @FieldResolver(type => [Product])
  async products(@Root() category: Category, @Ctx() { prisma }: PrismaContext): Promise<Product[]> {
    return await prisma.product.findMany({ where: { categoryId: category.id } });
  }

  // Field resolver for parent category
  @FieldResolver(type => Category)
  async parentCategory(@Root() category: Category, @Ctx() { prisma }: PrismaContext): Promise<Category | null> {
    return await prisma.category.findFirst({ where: { id: category.parentId|| "" } });
  }

  // Field resolver for child categories
  @FieldResolver(type => [Category])
  async childCategories(@Root() category: Category, @Ctx() { prisma }: PrismaContext): Promise<Category[]> {
    return await prisma.category.findMany({ where: { parentId: category.id } });
  }
}
