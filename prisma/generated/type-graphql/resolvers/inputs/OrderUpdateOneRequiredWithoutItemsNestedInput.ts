import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutItemsInput } from "../inputs/OrderCreateOrConnectWithoutItemsInput";
import { OrderCreateWithoutItemsInput } from "../inputs/OrderCreateWithoutItemsInput";
import { OrderUpdateWithoutItemsInput } from "../inputs/OrderUpdateWithoutItemsInput";
import { OrderUpsertWithoutItemsInput } from "../inputs/OrderUpsertWithoutItemsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateOneRequiredWithoutItemsNestedInput", {
  isAbstract: true
})
export class OrderUpdateOneRequiredWithoutItemsNestedInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutItemsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutItemsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutItemsInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutItemsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutItemsInput, {
    nullable: true
  })
  update?: OrderUpdateWithoutItemsInput | undefined;
}
