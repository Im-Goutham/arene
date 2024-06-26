import { Arg, Ctx, Query, Resolver , Mutation, Field , InputType, ObjectType, Authorized } from "type-graphql";
import { PrismaContext } from "../utils/prisma-client";
import { Length, MaxLength } from "class-validator";
import { Category,CategoryType, VariationOption } from "../../prisma/generated/type-graphql";


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

  @Field()
      category_type_id: string; 

}

@InputType()
export class UpdateCategoryInput {
  @Field({ nullable: true })
      name: string;

  @Field({ nullable: true })
      description?: string;

  @Field({ nullable: true })
      parent_category_id?: string;

  @Field(type => String)
      category_type_id: string; 
}


@Resolver(of => Category)
export class AdminCategoryResolver {
  // Query to fetch all product categories
  @Authorized("admin") 
  @Query(returns => [Category])
    async getAllAdminCategories(
    @Ctx() { prisma }: PrismaContext,
    @Arg("take") take?: number, // Optional take for results
    @Arg("skip") skip?: number, // Optional offset for pagination
    @Arg("category_type_id") category_type_id?: string,
    @Arg("is_deleted") is_deleted?: boolean,
    ): Promise<Category[]> {
        const baseQuery:any = { where:{}, include: {
            _count: {
                select: { product: true },
            },
        }, };
  
        if (take) {
            baseQuery.take = take;
        }
  
        if (skip) {
            baseQuery.skip = skip;
           
        }
   
        if (category_type_id) {
            baseQuery.where = { ... baseQuery.where,category_type_id };
        }
  
        if (typeof is_deleted === "boolean") {
            baseQuery.where = { ...baseQuery.where, is_deleted };
        }   
  
        return await prisma.category.findMany(baseQuery);
    }
  
  // Query to fetch a product category by ID
  @Authorized("admin") 
  @Query(returns => Category, { nullable: true })
  async getAdminCategoryById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Category | null> {
      return await prisma.category.findFirst({ where: { id } });
  }


  // Mutation to create a new category
  @Authorized("admin") 
  @Mutation(returns => Category)
  async createAdminCategory(
    @Arg("data") data: CreateCategoryInput, // Use the input type
    @Ctx() { prisma }: PrismaContext
  ): Promise<Category| null> {
      try {
          const createdCategory = await prisma.category.create({
              data: {
                  name: data.name,
                  parent_category_id: data.parent_category_id,
                  description: data.description,
                  categoryType:{
                      connect:{
                          id: data.category_type_id
                      }
                  },
              },
          });

          return createdCategory;
      } catch (error) {
          console.log("There is an error ", error);
          throw error;
      }
  }

  // Mutation to update an existing category
  @Authorized("admin") 
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
          throw error;
      }
  }

  @Authorized("admin") 
  @Query(returns => [Category])
  async getAllAdminCategoryTypes(@Ctx() { prisma }: PrismaContext): Promise<CategoryType[]> {
      return await prisma.categoryType.findMany();
  }

  @Authorized("admin") 
  @Query(returns => [VariationOption])
  async getAllAdminCategoryVariationOptions(@Ctx() { prisma }: PrismaContext, @Arg("category_id") category_id: string): Promise<VariationOption[]> {
      return await prisma.variationOption.findMany({ where:{ variation:{
          category_id
      } } });
  }
}


