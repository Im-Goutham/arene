import * as TypeGraphQL from "type-graphql";

export enum Role {
  admin = "admin",
  editor = "editor"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
