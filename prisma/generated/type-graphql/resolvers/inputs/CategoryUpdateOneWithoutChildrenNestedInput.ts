import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutChildrenInput } from "../inputs/CategoryCreateOrConnectWithoutChildrenInput";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryUpdateWithoutChildrenInput } from "../inputs/CategoryUpdateWithoutChildrenInput";
import { CategoryUpsertWithoutChildrenInput } from "../inputs/CategoryUpsertWithoutChildrenInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneWithoutChildrenNestedInput", {
  isAbstract: true
})
export class CategoryUpdateOneWithoutChildrenNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutChildrenInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutChildrenInput, {
    nullable: true
  })
  update?: CategoryUpdateWithoutChildrenInput | undefined;
}
