import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateWithoutOrdersInput } from "../inputs/ProductUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("ProductUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class ProductUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOrdersInput;
}
