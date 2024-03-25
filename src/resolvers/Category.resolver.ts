import { Arg, Args, ArgsType, Ctx, Field, Int, Query, Resolver } from "type-graphql";
import { Category, Variation } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";


@ArgsType()
class GetCategoryVariationsArgs {
  @Field({ nullable: true })
      category_id?: string;

  @Field({ nullable: true })
      category_type?: string;
}

@Resolver(of => Category)
export class CategoryResolver {
  // Query to fetch all product categories
  @Query(returns => [Category])
    async getAllCategories(@Ctx() { prisma }: PrismaContext): Promise<Category[]> {
        return await prisma.category.findMany({ where: { is_deleted: false } });
    }

  // Query to fetch a product category by ID
  @Query(returns => Category, { nullable: true })
  async getCategoryById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Category | null> {
      return await prisma.category.findFirst({ where: { id, is_deleted: false } });
  }

  @Query(returns => [Variation])
  async getAllCategoryVariations(@Ctx() { prisma }: PrismaContext, @Args() { category_id, category_type }: GetCategoryVariationsArgs): Promise<Variation[]> {
      const whereInput = {
          where: {}
      };

      if(category_id){
          whereInput.where = { ...whereInput.where, category_id : category_id };
        
      }
      if(category_type){
          whereInput.where = { ...whereInput.where, category: {
              categoryType: {
                  name: category_type
              }
          } };
      }
      console.log("where ---- ", whereInput);
      return await prisma.variation.findMany({
          ...whereInput
      });
  }

}
