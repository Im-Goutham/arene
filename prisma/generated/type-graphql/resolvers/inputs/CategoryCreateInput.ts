import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateNestedManyWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateInput", {
  isAbstract: true
})
export class CategoryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayName!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  categoriesOnBooks?: CategoriesOnBooksCreateNestedManyWithoutCategoryInput | undefined;
}
