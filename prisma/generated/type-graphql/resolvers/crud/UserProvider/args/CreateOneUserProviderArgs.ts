import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderCreateInput } from "../../../inputs/UserProviderCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderCreateInput, {
    nullable: false
  })
  data!: UserProviderCreateInput;
}
