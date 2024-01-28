import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutProvidersInput } from "../inputs/UserCreateNestedOneWithoutProvidersInput";

@TypeGraphQL.InputType("UserProviderCreateInput", {
  isAbstract: true
})
export class UserProviderCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProvidersInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProvidersInput;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebookToken?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebookEmail?: string | undefined;
}
