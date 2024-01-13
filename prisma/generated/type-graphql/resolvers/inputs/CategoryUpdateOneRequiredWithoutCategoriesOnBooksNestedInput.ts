import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateOrConnectWithoutCategoriesOnBooksInput";
import { CategoryCreateWithoutCategoriesOnBooksInput } from "../inputs/CategoryCreateWithoutCategoriesOnBooksInput";
import { CategoryUpdateWithoutCategoriesOnBooksInput } from "../inputs/CategoryUpdateWithoutCategoriesOnBooksInput";
import { CategoryUpsertWithoutCategoriesOnBooksInput } from "../inputs/CategoryUpsertWithoutCategoriesOnBooksInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput", {
  isAbstract: true
})
export class CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategoriesOnBooksInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutCategoriesOnBooksInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutCategoriesOnBooksInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategoriesOnBooksInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutCategoriesOnBooksInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutCategoriesOnBooksInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCategoriesOnBooksInput, {
    nullable: true
  })
  update?: CategoryUpdateWithoutCategoriesOnBooksInput | undefined;
}
