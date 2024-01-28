import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyParentInputEnvelope } from "../inputs/CategoryCreateManyParentInputEnvelope";
import { CategoryCreateOrConnectWithoutParentInput } from "../inputs/CategoryCreateOrConnectWithoutParentInput";
import { CategoryCreateWithoutParentInput } from "../inputs/CategoryCreateWithoutParentInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutParentInput } from "../inputs/CategoryUpdateManyWithWhereWithoutParentInput";
import { CategoryUpdateWithWhereUniqueWithoutParentInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutParentInput";
import { CategoryUpsertWithWhereUniqueWithoutParentInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutParentInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutParentNestedInput", {
  isAbstract: true
})
export class CategoryUpdateManyWithoutParentNestedInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutParentInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: CategoryUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
