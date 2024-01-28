import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutProductsInput } from "../inputs/CategoryCreateWithoutProductsInput";
import { CategoryUpdateWithoutProductsInput } from "../inputs/CategoryUpdateWithoutProductsInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutProductsInput", {
  isAbstract: true
})
export class CategoryUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutProductsInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutProductsInput;
}
