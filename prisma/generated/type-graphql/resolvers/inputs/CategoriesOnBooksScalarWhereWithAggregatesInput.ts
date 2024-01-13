import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CategoriesOnBooksScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CategoriesOnBooksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CategoriesOnBooksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CategoriesOnBooksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CategoriesOnBooksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  categoryId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  bookId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  created_at?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableWithAggregatesFilter | undefined;
}
