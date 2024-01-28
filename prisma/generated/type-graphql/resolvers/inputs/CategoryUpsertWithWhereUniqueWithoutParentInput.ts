import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutParentInput } from "../inputs/CategoryCreateWithoutParentInput";
import { CategoryUpdateWithoutParentInput } from "../inputs/CategoryUpdateWithoutParentInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutParentInput", {
  isAbstract: true
})
export class CategoryUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutParentInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutParentInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutParentInput;
}
