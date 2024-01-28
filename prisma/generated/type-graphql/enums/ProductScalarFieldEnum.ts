import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  name = "name",
  sku = "sku",
  price = "price",
  image = "image",
  stock = "stock",
  categoryId = "categoryId"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
