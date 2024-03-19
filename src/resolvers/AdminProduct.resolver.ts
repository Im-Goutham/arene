import { Arg, Ctx, Field, ID, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";
import { Length, MaxLength } from "class-validator";


@InputType()
class CreateProductInput {
  @Field()
  @MaxLength(30)
      name: string;

  @Field({ nullable: true })
  @Length(30, 255)
      description?: string;

  @Field({ nullable: true })
      product_image?: string;

      
  @Field(() => [ProductItemInput]) // Specify array of ProductInput type
      product_items: ProductItemInput[];
    
     
  @Field(type => ID)
      category_id: string; 

  @Field()
      is_deleted: boolean;

}


@InputType()
export class UpdateProductInput {
    @Field()
    @MaxLength(30)
        name: string;
  
    @Field({ nullable: true })
    @Length(30, 255)
        description?: string;
  
    @Field({ nullable: true })
        product_image?: string;
      
        
    @Field(type => ID)
        category_id: string; 

    @Field(() => [ProductItemInput]) // Specify array of ProductInput type
        product_items: ProductItemInput[];
        
        
    @Field()
        is_trending: boolean;
  
    @Field()
        is_deleted: boolean;
}

@InputType() // Define VariationInput as a separate InputType
class ProductItemInput {
    @Field()
        id?: string;
    
    @Field()
        sku: string;

    @Field()
        qty_in_stock: number;

    @Field()
        price:number;

    @Field(() => [ProductConfigurationInput]) // Specify array of ProductInput type
        product_configurations: ProductConfigurationInput[];
    
}

@InputType() // Define VariationInput as a separate InputType
class ProductConfigurationInput {
    @Field()
        variation_option_id: string;
}

// @InputType() // Define VariationOptionInput as a separate InputType
// class VariationOptionInput {
//   @Field()
//       value: string;
// }


@Resolver(of => Product)
export class AdminProductResolver {
    // Query to fetch all products
    @Query(returns => [Product])
    async getAllAdminProducts(
    @Ctx() { prisma }: PrismaContext,
    @Arg("category_id") category_id: string,
    @Arg("take") take?: number, // Optional take for results
    @Arg("skip") skip?: number, // Optional offset for pagination
    @Arg("is_trending") is_trending?: boolean,
    @Arg("is_deleted") is_deleted?: boolean,
    ): Promise<Product[]> {
        const baseQuery:any = { where:{} };
  
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

        if (typeof is_deleted === "boolean") {
            baseQuery.where= { ...baseQuery.where, is_deleted };
        }
     
  
        return await prisma.product.findMany(baseQuery);
    }

  // Query to fetch a product by ID
  @Query(returns => Product, { nullable: true })
    async getAdminProductById(@Arg("id") id: string, @Ctx() { prisma }: PrismaContext): Promise<Product | null> {
        return await prisma.product.findFirst({ where: { id } });
    }

  // Mutation to create a new product
   @Mutation(returns => Product)
  async createAdminProduct(
      @Arg("data") data: CreateProductInput, // Use the input type
      @Ctx() { prisma }: PrismaContext
  ): Promise<Product | null > {
      try {
          const { product_items, ...productData } = data;
          const createdProduct = await prisma.product.create({
              data: {
                  //   category: { connect: { id: data.category_id } }, // Connect to category
                  ...productData, // Spread the input data
              },
          });

          product_items.map(async (d)=>{ 
              const { product_configurations, ...itemData } =d;
              const createdProductItem = await prisma.productItem.create({
                  data: { product: { connect: {
                      id:   createdProduct?.id,
                  } ,
                  } ,...itemData }
              });
         
              await Promise.allSettled(product_configurations.map(async (config) => {
                  return prisma.productConfiguration.create({ data:{ variationOption:{
                      connect:{ id: config.variation_option_id }
                  }, productItem:{
                      connect:{ id: createdProductItem.id }
                  } } });
              }));

             
          });
        
          return createdProduct;
      } catch (error) {
          console.log("There is an error ", error);
          throw error;
      }
  }
  
    // Mutation to update an existing product
    @Mutation(returns => Product, { nullable: true })
   async updateAdminProduct(
      @Arg("id") id: string,
      @Arg("data") data: UpdateProductInput, // Use the input type
      @Ctx() { prisma }: PrismaContext
   ): Promise<Product | null> {
       try {
           const { product_items, ...productData } = data;
           const updatedProduct = await prisma.product.update({
               where: { id },
               data: {
                   ...productData,
               },
           });


           product_items.map(async (d)=>{ 
               const { product_configurations,id: product_item_id, ...itemData } =d;
               const createdProductItem = await prisma.productItem.upsert({
                   where: {
                       id: product_item_id,
                   },
                   update: {
                       ...itemData
                   },
                   create: {
                       ...itemData,
                       product:{
                           connect:{
                               id: id
                           }
                       }
                   },


               });

               await prisma.productConfiguration.deleteMany({ where:{ product_item_id: product_item_id } });
       
               await Promise.allSettled(product_configurations.map(async (config) => {
                   return prisma.productConfiguration.create({ data:{ variationOption:{
                       connect:{ id: config.variation_option_id }
                   }, productItem:{
                       connect:{ id: createdProductItem.id }
                   } } });
               }));
           
           });
        
           return updatedProduct;
       } catch (error) {
           console.log("There is an error ", error);
           throw error;
       }
   }
  
}
