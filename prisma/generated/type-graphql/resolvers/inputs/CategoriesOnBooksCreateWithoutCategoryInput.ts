import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedOneWithoutCategoriesInput } from "../inputs/BookCreateNestedOneWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateWithoutCategoryInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateWithoutCategoryInput {
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
