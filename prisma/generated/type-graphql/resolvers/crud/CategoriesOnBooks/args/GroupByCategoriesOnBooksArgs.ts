import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksOrderByWithAggregationInput } from "../../../inputs/CategoriesOnBooksOrderByWithAggregationInput";
import { CategoriesOnBooksScalarWhereWithAggregatesInput } from "../../../inputs/CategoriesOnBooksScalarWhereWithAggregatesInput";
import { CategoriesOnBooksWhereInput } from "../../../inputs/CategoriesOnBooksWhereInput";
import { CategoriesOnBooksScalarFieldEnum } from "../../../../enums/CategoriesOnBooksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  where?: CategoriesOnBooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CategoriesOnBooksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"categoryId" | "bookId" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => CategoriesOnBooksScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CategoriesOnBooksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
