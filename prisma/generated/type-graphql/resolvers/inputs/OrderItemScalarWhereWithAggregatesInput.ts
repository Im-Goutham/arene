import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OrderItemScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OrderItemScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrderItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrderItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrderItemScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  orderId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  productId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  price?: FloatWithAggregatesFilter | undefined;
}
