import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order } from "../models/Order";
import { Product } from "../models/Product";

@TypeGraphQL.ObjectType("OrderItem", {
  isAbstract: true
})
export class OrderItem {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderId!: string;

  order?: Order;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productId!: string;

  product?: Product;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;
}
