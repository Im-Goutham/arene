import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderOrderByWithAggregationInput } from "../../../inputs/UserProviderOrderByWithAggregationInput";
import { UserProviderScalarWhereWithAggregatesInput } from "../../../inputs/UserProviderScalarWhereWithAggregatesInput";
import { UserProviderWhereInput } from "../../../inputs/UserProviderWhereInput";
import { UserProviderScalarFieldEnum } from "../../../../enums/UserProviderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserProviderArgs {
  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  where?: UserProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProviderOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserProviderOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "provider" | "providerId" | "facebookToken" | "facebookEmail">;

  @TypeGraphQL.Field(_type => UserProviderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserProviderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
