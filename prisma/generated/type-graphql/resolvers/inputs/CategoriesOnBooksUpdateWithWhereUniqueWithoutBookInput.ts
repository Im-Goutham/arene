import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksUpdateWithoutBookInput } from "../inputs/CategoriesOnBooksUpdateWithoutBookInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateWithoutBookInput, {
    nullable: false
  })
  data!: CategoriesOnBooksUpdateWithoutBookInput;
}
