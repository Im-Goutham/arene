import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksAvgOrderByAggregateInput } from "../inputs/CategoriesOnBooksAvgOrderByAggregateInput";
import { CategoriesOnBooksCountOrderByAggregateInput } from "../inputs/CategoriesOnBooksCountOrderByAggregateInput";
import { CategoriesOnBooksMaxOrderByAggregateInput } from "../inputs/CategoriesOnBooksMaxOrderByAggregateInput";
import { CategoriesOnBooksMinOrderByAggregateInput } from "../inputs/CategoriesOnBooksMinOrderByAggregateInput";
import { CategoriesOnBooksSumOrderByAggregateInput } from "../inputs/CategoriesOnBooksSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriesOnBooksOrderByWithAggregationInput", {
  isAbstract: true
})
export class CategoriesOnBooksOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  bookId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updated_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CategoriesOnBooksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CategoriesOnBooksAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CategoriesOnBooksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CategoriesOnBooksMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CategoriesOnBooksSumOrderByAggregateInput | undefined;
}
