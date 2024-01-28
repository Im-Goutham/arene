import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { Offer } from "../models/Offer";
import { OrderItem } from "../models/OrderItem";
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
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sku!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stock!: number;

  category?: Category;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  categoryId!: string;

  offers?: Offer[];

  orders?: OrderItem[];

  @TypeGraphQL.Field(_type => ProductCount, {
    nullable: true
  })
  _count?: ProductCount | null;
}
