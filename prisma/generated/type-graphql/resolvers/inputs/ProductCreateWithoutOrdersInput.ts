import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutProductsInput } from "../inputs/CategoryCreateNestedOneWithoutProductsInput";
import { OfferCreateNestedManyWithoutProductInput } from "../inputs/OfferCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateWithoutOrdersInput", {
  isAbstract: true
})
export class ProductCreateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sku!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  image!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  stock!: number;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductsInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutProductsInput;

  @TypeGraphQL.Field(_type => OfferCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  offers?: OfferCreateNestedManyWithoutProductInput | undefined;
}
