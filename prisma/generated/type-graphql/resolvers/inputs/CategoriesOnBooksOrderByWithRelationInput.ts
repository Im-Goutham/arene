import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookOrderByWithRelationInput } from "../inputs/BookOrderByWithRelationInput";
import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CategoriesOnBooksOrderByWithRelationInput", {
  isAbstract: true
})
export class CategoriesOnBooksOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => CategoryOrderByWithRelationInput, {
    nullable: true
  })
  category?: CategoryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  categoryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => BookOrderByWithRelationInput, {
    nullable: true
  })
  book?: BookOrderByWithRelationInput | undefined;

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
}
