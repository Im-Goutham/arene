import * as TypeGraphQL from "type-graphql";

export enum BookScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  imageThumbnail = "imageThumbnail",
  languageName = "languageName",
  isPublished = "isPublished",
  isDeleted = "isDeleted",
  authorId = "authorId",
  published_at = "published_at",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(BookScalarFieldEnum, {
  name: "BookScalarFieldEnum",
  description: undefined,
});
