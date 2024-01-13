import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("CategoriesOnBooksWhereInput", {
  isAbstract: true
})
export class CategoriesOnBooksWhereInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereInput], {
    nullable: true
  })
  AND?: CategoriesOnBooksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereInput], {
    nullable: true
  })
  OR?: CategoriesOnBooksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereInput], {
    nullable: true
  })
  NOT?: CategoriesOnBooksWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryRelationFilter, {
    nullable: true
  })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  categoryId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BookRelationFilter, {
    nullable: true
  })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  bookId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
