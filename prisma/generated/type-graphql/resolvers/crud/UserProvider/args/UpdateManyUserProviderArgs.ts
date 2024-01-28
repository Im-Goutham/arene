import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderUpdateManyMutationInput } from "../../../inputs/UserProviderUpdateManyMutationInput";
import { UserProviderWhereInput } from "../../../inputs/UserProviderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserProviderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  where?: UserProviderWhereInput | undefined;
}
