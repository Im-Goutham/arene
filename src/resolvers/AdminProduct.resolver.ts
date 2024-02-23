import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
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
      productImage?: string;
     
  @Field()
      categoryId: string; 

  @Field()
      is_deleted: boolean;

}


@InputType()
export class UpdateProductInput {
    @Field()
        id: string;

    @Field()
    @MaxLength(30)
        name: string;
  
    @Field({ nullable: true })
    @Length(30, 255)
        description?: string;
  
    @Field({ nullable: true })
        productImage?: string;
       
    @Field()
        categoryId: string; 
  
    @Field()
        is_deleted: boolean;
}


@Resolver(of => Product)
export class AdminProductResolver {
  // Query to fetch all products
  @Query(returns => [Product])
    async getAllAdminProducts(@Arg("categoryId") categoryId: string,@Ctx() { prisma }: PrismaContext): Promise<Product[]> {
        return await prisma.product.findMany({ where: { category_id: categoryId || undefined }
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
                  ...data, // Spread the input data
                  category: { connect: { id: data.categoryId } }, // Connect to category
              },
          });
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
                   category: { connect: { id: data.categoryId } }, // Connect or update category
               },
           });
           return updatedProduct;
       } catch (error) {
           console.log("There is an error ", error);
           return null;
       }
   }
  
}
