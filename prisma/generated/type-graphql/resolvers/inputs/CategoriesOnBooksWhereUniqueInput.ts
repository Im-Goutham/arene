import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCategoryIdBookIdCompoundUniqueInput } from "../inputs/CategoriesOnBooksCategoryIdBookIdCompoundUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksWhereUniqueInput", {
  isAbstract: true
})
export class CategoriesOnBooksWhereUniqueInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksCategoryIdBookIdCompoundUniqueInput, {
    nullable: true
  })
  categoryId_bookId?: CategoriesOnBooksCategoryIdBookIdCompoundUniqueInput | undefined;
}
