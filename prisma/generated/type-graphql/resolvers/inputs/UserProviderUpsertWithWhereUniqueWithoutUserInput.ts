import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCreateWithoutUserInput } from "../inputs/UserProviderCreateWithoutUserInput";
import { UserProviderUpdateWithoutUserInput } from "../inputs/UserProviderUpdateWithoutUserInput";
import { UserProviderWhereUniqueInput } from "../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.InputType("UserProviderUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class UserProviderUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: false
  })
  where!: UserProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProviderUpdateWithoutUserInput, {
    nullable: false
  })
  update!: UserProviderUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => UserProviderCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserProviderCreateWithoutUserInput;
}
