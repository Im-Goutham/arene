import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutItemsInput } from "../inputs/OrderCreateOrConnectWithoutItemsInput";
import { OrderCreateWithoutItemsInput } from "../inputs/OrderCreateWithoutItemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutItemsInput", {
  isAbstract: true
})
export class OrderCreateNestedOneWithoutItemsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
