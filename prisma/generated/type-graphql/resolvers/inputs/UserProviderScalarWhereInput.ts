import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserProviderScalarWhereInput", {
  isAbstract: true
})
export class UserProviderScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserProviderScalarWhereInput], {
    nullable: true
  })
  AND?: UserProviderScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarWhereInput], {
    nullable: true
  })
  OR?: UserProviderScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarWhereInput], {
    nullable: true
  })
  NOT?: UserProviderScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  provider?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  providerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  facebookToken?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  facebookEmail?: StringNullableFilter | undefined;
}
