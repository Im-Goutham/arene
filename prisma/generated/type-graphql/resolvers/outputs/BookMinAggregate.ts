import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("BookMinAggregate", {
  isAbstract: true
})
export class BookMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageThumbnail!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  languageName!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isPublished!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  authorId!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;
}
