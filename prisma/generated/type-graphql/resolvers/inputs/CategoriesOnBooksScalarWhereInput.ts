import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("CategoriesOnBooksScalarWhereInput", {
  isAbstract: true
})
export class CategoriesOnBooksScalarWhereInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereInput], {
    nullable: true
  })
  AND?: CategoriesOnBooksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereInput], {
    nullable: true
  })
  OR?: CategoriesOnBooksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereInput], {
    nullable: true
  })
  NOT?: CategoriesOnBooksScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  categoryId?: IntFilter | undefined;

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
