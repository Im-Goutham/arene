import * as TypeGraphQL from "type-graphql";

export enum ProductScalarFieldEnum {
  id = "id",
  category_id = "category_id",
  name = "name",
  description = "description",
  product_image = "product_image",
  is_deleted = "is_deleted"
}
TypeGraphQL.registerEnumType(ProductScalarFieldEnum, {
  name: "ProductScalarFieldEnum",
  description: undefined,
});
