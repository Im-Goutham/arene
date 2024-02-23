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
  
    @Field()
        is_deleted: boolean;
}


@Resolver(of => Product)
export class AdminProductResolver {
  // Query to fetch all products
  @Query(returns => [Product])
    async getAllAdminProducts(@Arg("category_id") category_id: string,@Ctx() { prisma }: PrismaContext): Promise<Product[]> {
        return await prisma.product.findMany({ where: { category_id: category_id || undefined }
        });
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
          const createdProduct = await prisma.product.create({
              data: {
                  //   category: { connect: { id: data.category_id } }, // Connect to category
                  ...data, // Spread the input data
                  productItem: {
                      connect: []
                  }
              },
          });
          console.log("createdProduct ---- ", createdProduct);
          return createdProduct;
      } catch (error) {
     
          console.log("There is an error ", error);
          return null;
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
           const updatedProduct = await prisma.product.update({
               where: { id },
               data: {
                   ...data, // Spread the input data
                   //  category: { connect: { id: data.category_id } }, // Connect or update category
               },
           });
           return updatedProduct;
       } catch (error) {
           console.log("There is an error ", error);
           return null;
       }
   }
  
}
