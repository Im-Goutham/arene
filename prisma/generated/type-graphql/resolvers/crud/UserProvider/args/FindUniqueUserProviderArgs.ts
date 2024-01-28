import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderWhereUniqueInput } from "../../../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: false
  })
  where!: UserProviderWhereUniqueInput;
}
