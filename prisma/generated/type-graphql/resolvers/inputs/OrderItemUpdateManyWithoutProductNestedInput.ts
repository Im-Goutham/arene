import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateManyProductInputEnvelope } from "../inputs/OrderItemCreateManyProductInputEnvelope";
import { OrderItemCreateOrConnectWithoutProductInput } from "../inputs/OrderItemCreateOrConnectWithoutProductInput";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemScalarWhereInput } from "../inputs/OrderItemScalarWhereInput";
import { OrderItemUpdateManyWithWhereWithoutProductInput } from "../inputs/OrderItemUpdateManyWithWhereWithoutProductInput";
import { OrderItemUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OrderItemUpdateWithWhereUniqueWithoutProductInput";
import { OrderItemUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OrderItemUpsertWithWhereUniqueWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemUpdateManyWithoutProductNestedInput", {
  isAbstract: true
})
export class OrderItemUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput], {
    nullable: true
  })
  create?: OrderItemCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderItemCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: OrderItemCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  set?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: OrderItemUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderItemScalarWhereInput[] | undefined;
}
