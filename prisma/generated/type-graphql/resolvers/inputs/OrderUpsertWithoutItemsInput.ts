import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutItemsInput } from "../inputs/OrderCreateWithoutItemsInput";
import { OrderUpdateWithoutItemsInput } from "../inputs/OrderUpdateWithoutItemsInput";

@TypeGraphQL.InputType("OrderUpsertWithoutItemsInput", {
  isAbstract: true
})
export class OrderUpsertWithoutItemsInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutItemsInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutItemsInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput, {
    nullable: false
  })
  create!: OrderCreateWithoutItemsInput;
}
