import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OfferUpdateManyWithoutProductNestedInput } from "../inputs/OfferUpdateManyWithoutProductNestedInput";
import { OrderItemUpdateManyWithoutProductNestedInput } from "../inputs/OrderItemUpdateManyWithoutProductNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ProductUpdateWithoutCategoryInput", {
  isAbstract: true
})
export class ProductUpdateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sku?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: FloatFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  image?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  stock?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OfferUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  offers?: OfferUpdateManyWithoutProductNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemUpdateManyWithoutProductNestedInput, {
    nullable: true
  })
  orders?: OrderItemUpdateManyWithoutProductNestedInput | undefined;
}
