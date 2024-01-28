import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutChildrenInput } from "../inputs/CategoryCreateOrConnectWithoutChildrenInput";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutChildrenInput", {
  isAbstract: true
})
export class CategoryCreateNestedOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
