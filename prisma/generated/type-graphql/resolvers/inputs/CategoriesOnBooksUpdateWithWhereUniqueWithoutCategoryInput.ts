import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksUpdateWithoutCategoryInput } from "../inputs/CategoriesOnBooksUpdateWithoutCategoryInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: CategoriesOnBooksUpdateWithoutCategoryInput;
}
