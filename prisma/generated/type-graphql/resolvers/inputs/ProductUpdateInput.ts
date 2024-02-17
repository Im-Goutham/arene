import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryUpdateOneRequiredWithoutProductNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProductNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductItemUpdateManyWithoutProductNestedInput } from "../inputs/ProductItemUpdateManyWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProductUpdateInput", {
  isAbstract: true
})
export class ProductUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  product_image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProductNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductItemUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  productItem?: ProductItemUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  is_deleted?: BoolFieldUpdateOperationsInput | undefined;
}
