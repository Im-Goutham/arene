import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCountOrderByAggregateInput } from "../inputs/ProductCountOrderByAggregateInput";
import { ProductMaxOrderByAggregateInput } from "../inputs/ProductMaxOrderByAggregateInput";
import { ProductMinOrderByAggregateInput } from "../inputs/ProductMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductOrderByWithAggregationInput", {
  isAbstract: true
})
export class ProductOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_deleted?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProductCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProductMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProductMinOrderByAggregateInput | undefined;
}
