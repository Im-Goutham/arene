import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { Category } from "../models/Category";

@TypeGraphQL.ObjectType("CategoriesOnBooks", {
  isAbstract: true
})
export class CategoriesOnBooks {
  category?: Category;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoryId!: number;

  book?: Book;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  bookId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;
}
