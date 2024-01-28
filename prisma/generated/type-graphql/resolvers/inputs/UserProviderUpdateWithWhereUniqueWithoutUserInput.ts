import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderUpdateWithoutUserInput } from "../inputs/UserProviderUpdateWithoutUserInput";
import { UserProviderWhereUniqueInput } from "../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.InputType("UserProviderUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserProviderUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: false
  })
  where!: UserProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProviderUpdateWithoutUserInput, {
    nullable: false
  })
  data!: UserProviderUpdateWithoutUserInput;
}
