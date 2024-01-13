import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateManyCategoryInputEnvelope } from "../inputs/CategoriesOnBooksCreateManyCategoryInputEnvelope";
import { CategoriesOnBooksCreateOrConnectWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateOrConnectWithoutCategoryInput";
import { CategoriesOnBooksCreateWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateWithoutCategoryInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateNestedManyWithoutCategoryInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: CategoriesOnBooksCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: CategoriesOnBooksCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: CategoriesOnBooksCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoriesOnBooksWhereUniqueInput[] | undefined;
}
