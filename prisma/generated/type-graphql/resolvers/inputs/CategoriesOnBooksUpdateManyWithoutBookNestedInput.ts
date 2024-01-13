import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateManyBookInputEnvelope } from "../inputs/CategoriesOnBooksCreateManyBookInputEnvelope";
import { CategoriesOnBooksCreateOrConnectWithoutBookInput } from "../inputs/CategoriesOnBooksCreateOrConnectWithoutBookInput";
import { CategoriesOnBooksCreateWithoutBookInput } from "../inputs/CategoriesOnBooksCreateWithoutBookInput";
import { CategoriesOnBooksScalarWhereInput } from "../inputs/CategoriesOnBooksScalarWhereInput";
import { CategoriesOnBooksUpdateManyWithWhereWithoutBookInput } from "../inputs/CategoriesOnBooksUpdateManyWithWhereWithoutBookInput";
import { CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput } from "../inputs/CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput";
import { CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput } from "../inputs/CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpdateManyWithoutBookNestedInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpdateManyWithoutBookNestedInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateWithoutBookInput], {
    nullable: true
  })
  create?: CategoriesOnBooksCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: CategoriesOnBooksCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  upsert?: CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: CategoriesOnBooksCreateManyBookInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput], {
    nullable: true
  })
  update?: CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksUpdateManyWithWhereWithoutBookInput], {
    nullable: true
  })
  updateMany?: CategoriesOnBooksUpdateManyWithWhereWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoriesOnBooksScalarWhereInput[] | undefined;
}
