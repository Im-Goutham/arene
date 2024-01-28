import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("UserProviderWhereInput", {
  isAbstract: true
})
export class UserProviderWhereInput {
  @TypeGraphQL.Field(_type => [UserProviderWhereInput], {
    nullable: true
  })
  AND?: UserProviderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereInput], {
    nullable: true
  })
  OR?: UserProviderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereInput], {
    nullable: true
  })
  NOT?: UserProviderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

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
