import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoryOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  parentId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoryMinOrderByAggregateInput | undefined;
}
