import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksScalarWhereInput } from "../inputs/CategoriesOnBooksScalarWhereInput";
import { CategoriesOnBooksUpdateManyMutationInput } from "../inputs/CategoriesOnBooksUpdateManyMutationInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpdateManyWithWhereWithoutBookInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpdateManyWithWhereWithoutBookInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksScalarWhereInput, {
    nullable: false
  })
  where!: CategoriesOnBooksScalarWhereInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoriesOnBooksUpdateManyMutationInput;
}
