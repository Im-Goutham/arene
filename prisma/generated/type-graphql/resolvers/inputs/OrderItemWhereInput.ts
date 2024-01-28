import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { ProductRelationFilter } from "../inputs/ProductRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("OrderItemWhereInput", {
  isAbstract: true
})
export class OrderItemWhereInput {
  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true
  })
  AND?: OrderItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true
  })
  OR?: OrderItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemWhereInput], {
    nullable: true
  })
  NOT?: OrderItemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  orderId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  productId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => ProductRelationFilter, {
    nullable: true
  })
  product?: ProductRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;
}
