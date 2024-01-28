import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCountOrderByAggregateInput } from "../inputs/UserProviderCountOrderByAggregateInput";
import { UserProviderMaxOrderByAggregateInput } from "../inputs/UserProviderMaxOrderByAggregateInput";
import { UserProviderMinOrderByAggregateInput } from "../inputs/UserProviderMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserProviderOrderByWithAggregationInput", {
  isAbstract: true
})
export class UserProviderOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  provider?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  providerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  facebookToken?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  facebookEmail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UserProviderCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UserProviderCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProviderMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UserProviderMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserProviderMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UserProviderMinOrderByAggregateInput | undefined;
}
