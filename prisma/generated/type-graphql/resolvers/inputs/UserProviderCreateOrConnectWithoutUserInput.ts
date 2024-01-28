import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCreateWithoutUserInput } from "../inputs/UserProviderCreateWithoutUserInput";
import { UserProviderWhereUniqueInput } from "../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.InputType("UserProviderCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class UserProviderCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: false
  })
  where!: UserProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProviderCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserProviderCreateWithoutUserInput;
}
