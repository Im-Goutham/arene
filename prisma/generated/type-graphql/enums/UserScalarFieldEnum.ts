import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  user_name = "user_name",
  email = "email",
  password = "password",
  role = "role",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
