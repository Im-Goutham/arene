import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutCategoriesInput } from "../inputs/BookCreateOrConnectWithoutCategoriesInput";
import { BookCreateWithoutCategoriesInput } from "../inputs/BookCreateWithoutCategoriesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateNestedOneWithoutCategoriesInput", {
  isAbstract: true
})
export class BookCreateNestedOneWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutCategoriesInput, {
    nullable: true
  })
  create?: BookCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutCategoriesInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;
}
