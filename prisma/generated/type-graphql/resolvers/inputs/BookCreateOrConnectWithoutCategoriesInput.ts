import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutCategoriesInput } from "../inputs/BookCreateWithoutCategoriesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutCategoriesInput", {
  isAbstract: true
})
export class BookCreateOrConnectWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: BookCreateWithoutCategoriesInput;
}
