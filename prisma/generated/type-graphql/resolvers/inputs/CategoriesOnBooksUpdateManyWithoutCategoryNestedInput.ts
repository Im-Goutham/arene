import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateManyCategoryInputEnvelope } from "../inputs/CategoriesOnBooksCreateManyCategoryInputEnvelope";
import { CategoriesOnBooksCreateOrConnectWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateOrConnectWithoutCategoryInput";
import { CategoriesOnBooksCreateWithoutCategoryInput } from "../inputs/CategoriesOnBooksCreateWithoutCategoryInput";
import { CategoriesOnBooksScalarWhereInput } from "../inputs/CategoriesOnBooksScalarWhereInput";
import { CategoriesOnBooksUpdateManyWithWhereWithoutCategoryInput } from "../inputs/CategoriesOnBooksUpdateManyWithWhereWithoutCategoryInput";
import { CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput";
import { CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpdateManyWithoutCategoryNestedInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateWithoutCategoryInput], {
    nullable: true
  })
  create?: CategoriesOnBooksCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateOrConnectWithoutCategoryInput], {
    nullable: true
  })
  connectOrCreate?: CategoriesOnBooksCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  upsert?: CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateManyCategoryInputEnvelope, {
    nullable: true
  })
  createMany?: CategoriesOnBooksCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereUniqueInput], {
    nullable: true
  })
  set?: CategoriesOnBooksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoriesOnBooksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoriesOnBooksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoriesOnBooksWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput], {
    nullable: true
  })
  update?: CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksUpdateManyWithWhereWithoutCategoryInput], {
    nullable: true
  })
  updateMany?: CategoriesOnBooksUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoriesOnBooksScalarWhereInput[] | undefined;
}
