import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("AuthorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AuthorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
