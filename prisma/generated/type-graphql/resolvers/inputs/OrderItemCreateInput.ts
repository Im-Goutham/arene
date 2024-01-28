import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { ProductCreateNestedOneWithoutOrdersInput } from "../inputs/ProductCreateNestedOneWithoutOrdersInput";

@TypeGraphQL.InputType("OrderItemCreateInput", {
  isAbstract: true
})
export class OrderItemCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutItemsInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutItemsInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrdersInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutOrdersInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  quantity!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;
}
