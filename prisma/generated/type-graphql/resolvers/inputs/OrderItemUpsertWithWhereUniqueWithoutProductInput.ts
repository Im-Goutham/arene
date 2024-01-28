import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemUpdateWithoutProductInput } from "../inputs/OrderItemUpdateWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class OrderItemUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutProductInput, {
    nullable: false
  })
  update!: OrderItemUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => OrderItemCreateWithoutProductInput, {
    nullable: false
  })
  create!: OrderItemCreateWithoutProductInput;
}
