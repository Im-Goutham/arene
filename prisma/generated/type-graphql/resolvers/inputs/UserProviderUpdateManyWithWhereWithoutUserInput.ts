import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderScalarWhereInput } from "../inputs/UserProviderScalarWhereInput";
import { UserProviderUpdateManyMutationInput } from "../inputs/UserProviderUpdateManyMutationInput";

@TypeGraphQL.InputType("UserProviderUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class UserProviderUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => UserProviderScalarWhereInput, {
    nullable: false
  })
  where!: UserProviderScalarWhereInput;

  @TypeGraphQL.Field(_type => UserProviderUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserProviderUpdateManyMutationInput;
}
