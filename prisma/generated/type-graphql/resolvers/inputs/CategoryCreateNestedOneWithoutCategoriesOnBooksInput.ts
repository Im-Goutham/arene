import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateOrConnectWithoutCategoriesOnBooksInput";
import { CategoryCreateWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateWithoutCategoriesOnBooksInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutCategoriesOnBooksInput", {
  isAbstract: true
})
export class CategoryCreateNestedOneWithoutCategoriesOnBooksInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategoriesOnBooksInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutCategoriesOnBooksInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutCategoriesOnBooksInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategoriesOnBooksInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
