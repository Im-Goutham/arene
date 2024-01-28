import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserProviderScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UserProviderScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserProviderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserProviderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserProviderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserProviderScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  provider?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  providerId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  facebookToken?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  facebookEmail?: StringNullableWithAggregatesFilter | undefined;
}
