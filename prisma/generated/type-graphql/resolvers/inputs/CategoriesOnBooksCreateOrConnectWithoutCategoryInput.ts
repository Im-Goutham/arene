import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateWithoutCategoryInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateOrConnectWithoutCategoryInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: CategoriesOnBooksCreateWithoutCategoryInput;
}
