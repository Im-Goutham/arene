import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OrderItemScalarWhereInput", {
  isAbstract: true
})
export class OrderItemScalarWhereInput {
  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  AND?: OrderItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  OR?: OrderItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereInput], {
    nullable: true
  })
  NOT?: OrderItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orderId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;
}
