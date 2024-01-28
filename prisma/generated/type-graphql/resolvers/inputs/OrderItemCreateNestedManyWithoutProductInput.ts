import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateManyProductInputEnvelope } from "../inputs/OrderItemCreateManyProductInputEnvelope";
import { OrderItemCreateOrConnectWithoutProductInput } from "../inputs/OrderItemCreateOrConnectWithoutProductInput";
import { OrderItemCreateWithoutProductInput } from "../inputs/OrderItemCreateWithoutProductInput";
import { OrderItemWhereUniqueInput } from "../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.InputType("OrderItemCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class OrderItemCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [OrderItemCreateWithoutProductInput], {
    nullable: true
  })
  create?: OrderItemCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderItemCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: OrderItemCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderItemWhereUniqueInput[] | undefined;
}
