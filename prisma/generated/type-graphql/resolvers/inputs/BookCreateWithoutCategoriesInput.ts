import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutBookInput } from "../inputs/AuthorCreateNestedOneWithoutBookInput";

@TypeGraphQL.InputType("BookCreateWithoutCategoriesInput", {
  isAbstract: true
})
export class BookCreateWithoutCategoriesInput {
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
    nullable: true
  })
  isPublished?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isDeleted?: boolean | undefined;

  @TypeGraphQL.Field(_type => AuthorCreateNestedOneWithoutBookInput, {
    nullable: true
  })
  author?: AuthorCreateNestedOneWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  published_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
