import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemUpdateWithoutProductInput } from "../inputs/OrderItemUpdateWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class OrderItemUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderItemUpdateWithoutProductInput, {
    nullable: false
  })
  data!: OrderItemUpdateWithoutProductInput;
}
