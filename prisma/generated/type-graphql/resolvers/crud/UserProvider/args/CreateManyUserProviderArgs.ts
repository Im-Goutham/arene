import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderCreateManyInput } from "../../../inputs/UserProviderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserProviderArgs {
  @TypeGraphQL.Field(_type => [UserProviderCreateManyInput], {
    nullable: false
  })
  data!: UserProviderCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
