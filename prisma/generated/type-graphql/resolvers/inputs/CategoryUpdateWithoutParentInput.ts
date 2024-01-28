import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateManyWithoutParentNestedInput } from "../inputs/CategoryUpdateManyWithoutParentNestedInput";
import { ProductUpdateManyWithoutCategoryNestedInput } from "../inputs/ProductUpdateManyWithoutCategoryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryUpdateWithoutParentInput", {
  isAbstract: true
})
export class CategoryUpdateWithoutParentInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  children?: CategoryUpdateManyWithoutParentNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  products?: ProductUpdateManyWithoutCategoryNestedInput | undefined;
}
