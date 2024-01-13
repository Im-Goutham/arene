import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateNestedOneWithoutCategoriesOnBooksInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateWithoutBookInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateWithoutBookInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutCategoriesOnBooksInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutCategoriesOnBooksInput;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
