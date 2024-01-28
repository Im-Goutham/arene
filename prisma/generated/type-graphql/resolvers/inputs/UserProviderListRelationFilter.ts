import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderWhereInput } from "../inputs/UserProviderWhereInput";

@TypeGraphQL.InputType("UserProviderListRelationFilter", {
  isAbstract: true
})
export class UserProviderListRelationFilter {
  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  every?: UserProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  some?: UserProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  none?: UserProviderWhereInput | undefined;
}
