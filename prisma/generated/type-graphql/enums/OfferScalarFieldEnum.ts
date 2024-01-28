import * as TypeGraphQL from "type-graphql";

export enum OfferScalarFieldEnum {
  id = "id",
  productId = "productId",
  type = "type",
  code = "code",
  discount = "discount",
  startDate = "startDate",
  endDate = "endDate"
}
TypeGraphQL.registerEnumType(OfferScalarFieldEnum, {
  name: "OfferScalarFieldEnum",
  description: undefined,
});
