import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateWithoutCategoriesOnBooksInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCategoriesOnBooksInput", {
  isAbstract: true
})
export class CategoryCreateOrConnectWithoutCategoriesOnBooksInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategoriesOnBooksInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategoriesOnBooksInput;
}
