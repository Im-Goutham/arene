import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { OrderItem } from "../models/OrderItem";
import { User } from "../models/User";
import { OrderCount } from "../resolvers/outputs/OrderCount";

@TypeGraphQL.ObjectType("Order", {
  isAbstract: true
})
export class Order {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  total!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  items?: OrderItem[];

  @TypeGraphQL.Field(_type => OrderCount, {
    nullable: true
  })
  _count?: OrderCount | null;
}
