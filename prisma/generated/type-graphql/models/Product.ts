import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { ProductItem } from "../models/ProductItem";
import { ProductCount } from "../resolvers/outputs/ProductCount";

@TypeGraphQL.ObjectType("Product", {
  isAbstract: true
})
export class Product {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  category_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_image?: string | null;

  category?: Category;

  productItem?: ProductItem[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_deleted!: boolean;

  @TypeGraphQL.Field(_type => ProductCount, {
    nullable: true
  })
  _count?: ProductCount | null;
}
