import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksOrderByWithRelationInput } from "../../../inputs/CategoriesOnBooksOrderByWithRelationInput";
import { CategoriesOnBooksWhereInput } from "../../../inputs/CategoriesOnBooksWhereInput";
import { CategoriesOnBooksWhereUniqueInput } from "../../../inputs/CategoriesOnBooksWhereUniqueInput";
import { CategoriesOnBooksScalarFieldEnum } from "../../../../enums/CategoriesOnBooksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class BookCategoriesArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  where?: CategoriesOnBooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CategoriesOnBooksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: true
  })
  cursor?: CategoriesOnBooksWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"categoryId" | "bookId" | "created_at" | "updated_at"> | undefined;
}
