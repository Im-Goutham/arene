import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateWithoutBookInput } from "../inputs/CategoriesOnBooksCreateWithoutBookInput";
import { CategoriesOnBooksUpdateWithoutBookInput } from "../inputs/CategoriesOnBooksUpdateWithoutBookInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateWithoutBookInput, {
    nullable: false
  })
  update!: CategoriesOnBooksUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateWithoutBookInput, {
    nullable: false
  })
  create!: CategoriesOnBooksCreateWithoutBookInput;
}
