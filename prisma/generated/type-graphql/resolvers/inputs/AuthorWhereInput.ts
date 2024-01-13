import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorWhereInput", {
  isAbstract: true
})
export class AuthorWhereInput {
  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  AND?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  OR?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  NOT?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookListRelationFilter, {
    nullable: true
  })
  book?: BookListRelationFilter | undefined;
}
