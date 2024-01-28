import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateNestedManyWithoutProductInput } from "../inputs/OfferCreateNestedManyWithoutProductInput";
import { OrderItemCreateNestedManyWithoutProductInput } from "../inputs/OrderItemCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateWithoutCategoryInput", {
  isAbstract: true
})
export class ProductCreateWithoutCategoryInput {
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

  @TypeGraphQL.Field(_type => OfferCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  offers?: OfferCreateNestedManyWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => OrderItemCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  orders?: OrderItemCreateNestedManyWithoutProductInput | undefined;
}
