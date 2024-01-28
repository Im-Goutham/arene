import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("OrderScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class OrderScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [OrderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: OrderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: OrderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: OrderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  total?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
