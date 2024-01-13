import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateWithoutCategoryInput";
import { CategoriesOnBooksUpdateWithoutCategoryInput } from "../inputs/CategoriesOnBooksUpdateWithoutCategoryInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: CategoriesOnBooksUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: CategoriesOnBooksCreateWithoutCategoryInput;
}
