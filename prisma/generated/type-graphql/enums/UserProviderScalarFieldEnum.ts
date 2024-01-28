import * as TypeGraphQL from "type-graphql";

export enum UserProviderScalarFieldEnum {
  id = "id",
  userId = "userId",
  provider = "provider",
  providerId = "providerId",
  facebookToken = "facebookToken",
  facebookEmail = "facebookEmail"
}
TypeGraphQL.registerEnumType(UserProviderScalarFieldEnum, {
  name: "UserProviderScalarFieldEnum",
  description: undefined,
});
