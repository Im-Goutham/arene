import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateManyWithoutParentNestedInput } from "../inputs/CategoryUpdateManyWithoutParentNestedInput";
import { CategoryUpdateOneWithoutChildrenNestedInput } from "../inputs/CategoryUpdateOneWithoutChildrenNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoryUpdateWithoutProductsInput", {
  isAbstract: true
})
export class CategoryUpdateWithoutProductsInput {
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

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutParentNestedInput, {
    nullable: true
  })
  children?: CategoryUpdateManyWithoutParentNestedInput | undefined;
}
