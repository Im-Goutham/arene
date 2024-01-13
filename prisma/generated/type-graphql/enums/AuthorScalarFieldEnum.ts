import * as TypeGraphQL from "type-graphql";

export enum AuthorScalarFieldEnum {
  id = "id",
  name = "name",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(AuthorScalarFieldEnum, {
  name: "AuthorScalarFieldEnum",
  description: undefined,
});
