import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Author } from "../models/Author";
import { CategoriesOnBooks } from "../models/CategoriesOnBooks";
import { BookCount } from "../resolvers/outputs/BookCount";

@TypeGraphQL.ObjectType("Book", {
  isAbstract: true
})
export class Book {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imageThumbnail!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  languageName!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPublished!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isDeleted!: boolean;

  author?: Author | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  authorId?: number | null;

  categories?: CategoriesOnBooks[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => BookCount, {
    nullable: true
  })
  _count?: BookCount | null;
}
