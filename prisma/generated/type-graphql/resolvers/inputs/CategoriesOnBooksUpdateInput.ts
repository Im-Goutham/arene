import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookUpdateOneRequiredWithoutCategoriesNestedInput } from "../inputs/BookUpdateOneRequiredWithoutCategoriesNestedInput";
import { CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CategoriesOnBooksUpdateInput", {
  isAbstract: true
})
export class CategoriesOnBooksUpdateInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateOneRequiredWithoutCategoriesNestedInput, {
    nullable: true
  })
  book?: BookUpdateOneRequiredWithoutCategoriesNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  created_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updated_at?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
