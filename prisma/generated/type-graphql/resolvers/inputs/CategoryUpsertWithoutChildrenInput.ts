import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryUpdateWithoutChildrenInput } from "../inputs/CategoryUpdateWithoutChildrenInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutChildrenInput", {
  isAbstract: true
})
export class CategoryUpsertWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CategoryUpdateWithoutChildrenInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutChildrenInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutChildrenInput;
}
