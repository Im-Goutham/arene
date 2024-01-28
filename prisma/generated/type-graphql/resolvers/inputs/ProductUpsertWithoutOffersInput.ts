import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOffersInput } from "../inputs/ProductCreateWithoutOffersInput";
import { ProductUpdateWithoutOffersInput } from "../inputs/ProductUpdateWithoutOffersInput";

@TypeGraphQL.InputType("ProductUpsertWithoutOffersInput", {
  isAbstract: true
})
export class ProductUpsertWithoutOffersInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutOffersInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOffersInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOffersInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOffersInput;
}
