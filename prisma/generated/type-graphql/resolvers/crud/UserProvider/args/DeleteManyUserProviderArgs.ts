import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderWhereInput } from "../../../inputs/UserProviderWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  where?: UserProviderWhereInput | undefined;
}
