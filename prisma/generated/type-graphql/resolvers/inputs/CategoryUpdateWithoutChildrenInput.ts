import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneWithoutChildrenNestedInput } from "../inputs/CategoryUpdateOneWithoutChildrenNestedInput";
import { ProductUpdateManyWithoutCategoryNestedInput } from "../inputs/ProductUpdateManyWithoutCategoryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryUpdateWithoutChildrenInput", {
  isAbstract: true
})
export class CategoryUpdateWithoutChildrenInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneWithoutChildrenNestedInput, {
    nullable: true
  })
  parent?: CategoryUpdateOneWithoutChildrenNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutCategoryNestedInput, {
    nullable: true
  })
  products?: ProductUpdateManyWithoutCategoryNestedInput | undefined;
}
