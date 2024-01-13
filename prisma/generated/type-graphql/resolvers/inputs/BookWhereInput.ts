import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategoriesOnBooksListRelationFilter } from "../inputs/CategoriesOnBooksListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BookWhereInput", {
  isAbstract: true
})
export class BookWhereInput {
  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  AND?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  OR?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  NOT?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  imageThumbnail?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  languageName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isPublished?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isDeleted?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorRelationFilter, {
    nullable: true
  })
  author?: AuthorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  authorId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksListRelationFilter, {
    nullable: true
  })
  categories?: CategoriesOnBooksListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  published_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
