import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutCategoriesInput } from "../inputs/BookCreateWithoutCategoriesInput";
import { BookUpdateWithoutCategoriesInput } from "../inputs/BookUpdateWithoutCategoriesInput";

@TypeGraphQL.InputType("BookUpsertWithoutCategoriesInput", {
  isAbstract: true
})
export class BookUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => BookUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: BookUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: BookCreateWithoutCategoriesInput;
}
