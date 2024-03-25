import { Arg, Args, ArgsType, Ctx, Field, Query, Resolver } from "type-graphql";
import { Product, } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@ArgsType()
class GetProductsArgs {
  @Field({ nullable: true })
      category_id?: string;

  @Field({ nullable: true })
      category_type?: string;

  @Field({ nullable: true })
      take?: number;

  @Field({ nullable: true })
      skip?: number;

  @Field({ nullable: true })
      is_trending?: boolean;   

  @Field(() => [String], { nullable: true })
      variation_option_id?: string[];
}


@Resolver(of => Product)
export class ProductResolver {
    // Query to fetch all products
    @Query(returns => [Product])
    async getAllProducts(
    @Ctx() { prisma }: PrismaContext,
    @Args() { category_id, category_type,take, skip, is_trending, variation_option_id }: GetProductsArgs
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

        if(category_type){
            baseQuery.where = { ... baseQuery.where, category:{ categoryType:{
                name: category_type
            } } };
        }

        if(variation_option_id){
            baseQuery.where = { ... baseQuery.where, 
                productItem:{
                    some:{
                        productConfiguration:{
                            some:{
                                variation_option_id:{
                                    in: variation_option_id
                                }
                            }
                        }
                    }
                }
            };
        }
  
        return await prisma.product.findMany({ ...baseQuery });
    }

  // Query to fetch a product by ID
  @Query(returns => Product, { nullable: true })
    async getProductById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Product | null> {
        return await prisma.product.findFirst({ where: { id, is_deleted:false } });
    }
 
}
