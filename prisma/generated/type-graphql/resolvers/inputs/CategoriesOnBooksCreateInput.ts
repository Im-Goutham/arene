import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutCategoriesInput } from "../inputs/BookCreateNestedOneWithoutCategoriesInput";
import { CategoryCreateNestedOneWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateNestedOneWithoutCategoriesOnBooksInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutCategoriesOnBooksInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutCategoriesOnBooksInput;

  @TypeGraphQL.Field(_type => BookCreateNestedOneWithoutCategoriesInput, {
    nullable: false
  })
  book!: BookCreateNestedOneWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
