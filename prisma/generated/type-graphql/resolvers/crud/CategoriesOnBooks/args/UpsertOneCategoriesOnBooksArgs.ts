import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksCreateInput } from "../../../inputs/CategoriesOnBooksCreateInput";
import { CategoriesOnBooksUpdateInput } from "../../../inputs/CategoriesOnBooksUpdateInput";
import { CategoriesOnBooksWhereUniqueInput } from "../../../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateInput, {
    nullable: false
  })
  create!: CategoriesOnBooksCreateInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateInput, {
    nullable: false
  })
  update!: CategoriesOnBooksUpdateInput;
}
