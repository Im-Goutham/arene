import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class OrderItemCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemCreateWithoutProductInput, {
    nullable: false
  })
  create!: OrderItemCreateWithoutProductInput;
}
