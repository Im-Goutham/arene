import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateWithoutCategoriesOnBooksInput";
import { CategoryUpdateWithoutCategoriesOnBooksInput } from "../inputs/CategoryUpdateWithoutCategoriesOnBooksInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutCategoriesOnBooksInput", {
  isAbstract: true
})
export class CategoryUpsertWithoutCategoriesOnBooksInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategoriesOnBooksInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutCategoriesOnBooksInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategoriesOnBooksInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategoriesOnBooksInput;
}
