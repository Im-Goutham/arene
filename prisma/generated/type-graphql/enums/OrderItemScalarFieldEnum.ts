import * as TypeGraphQL from "type-graphql";

export enum OrderItemScalarFieldEnum {
  id = "id",
  orderId = "orderId",
  productId = "productId",
  quantity = "quantity",
  price = "price"
}
TypeGraphQL.registerEnumType(OrderItemScalarFieldEnum, {
  name: "OrderItemScalarFieldEnum",
  description: undefined,
});
