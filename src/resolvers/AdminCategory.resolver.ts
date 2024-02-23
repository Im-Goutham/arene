import { Arg, Ctx, Query, Resolver , Mutation, Field , InputType } from "type-graphql";
import { Category, Product } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";
import { Length, MaxLength } from "class-validator";


@InputType()
class CreateCategoryInput {
  @Field()
  @MaxLength(30)
      name: string;

  @Field({ nullable: true })
  @Length(30, 255)
      description?: string;

  @Field({ nullable: true })
      parent_category_id?: string; 
}


@InputType()
export class UpdateCategoryInput {
  @Field({ nullable: true })
      name: string;

  @Field({ nullable: true })
      description?: string;

  @Field({ nullable: true })
      parent_category_id?: string;
}


@Resolver(of => Category)
export class AdminCategoryResolver {
  // Query to fetch all product categories
  @Query(returns => [Category])
    async getAllAdminCategories(@Ctx() { prisma }: PrismaContext): Promise<Category[]> {
        return await prisma.category.findMany();
    }

  // Query to fetch a product category by ID
  @Query(returns => Category, { nullable: true })
  async getAdminCategoryById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Category | null> {
      return await prisma.category.findFirst({ where: { id } });
  }


  // Mutation to create a new category
  @Mutation(returns => Category)
  async createAdminCategory(
    @Arg("data") data: CreateCategoryInput, // Use the input type
    @Ctx() { prisma }: PrismaContext
  ): Promise<Category| null> {
      try {
          const createdCategory = await prisma.category.create({
              data: {
                  ...data, // Spread the input data 
              },
          });
          return createdCategory;
      } catch (error) {
          console.log("There is an error ", error);
          return null;
      }
  }

  // Mutation to update an existing category
  @Mutation(returns => Category, { nullable: true })
  async updateAdminCategory(
    @Arg("id") id: string,
    @Arg("data") data: UpdateCategoryInput, // Use the input type
    @Ctx() { prisma }: PrismaContext
  ): Promise<Category | null> {
      try {
          const updatedCategory = await prisma.category.update({
              where: { id },
              data: {
                  ...data, // Spread the input data
              },
          });
          return updatedCategory;
      } catch (error) {
          console.log("There is an error ", error);
          return null;
      }
  }
}


