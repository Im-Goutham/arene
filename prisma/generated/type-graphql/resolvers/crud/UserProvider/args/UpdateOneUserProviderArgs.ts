import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderUpdateInput } from "../../../inputs/UserProviderUpdateInput";
import { UserProviderWhereUniqueInput } from "../../../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderUpdateInput, {
    nullable: false
  })
  data!: UserProviderUpdateInput;

  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: false
  })
  where!: UserProviderWhereUniqueInput;
}
