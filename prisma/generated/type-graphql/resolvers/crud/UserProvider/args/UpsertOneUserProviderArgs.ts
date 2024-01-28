import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderCreateInput } from "../../../inputs/UserProviderCreateInput";
import { UserProviderUpdateInput } from "../../../inputs/UserProviderUpdateInput";
import { UserProviderWhereUniqueInput } from "../../../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: false
  })
  where!: UserProviderWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserProviderCreateInput, {
    nullable: false
  })
  create!: UserProviderCreateInput;

  @TypeGraphQL.Field(_type => UserProviderUpdateInput, {
    nullable: false
  })
  update!: UserProviderUpdateInput;
}
