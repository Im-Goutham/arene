import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksUpdateInput } from "../../../inputs/CategoriesOnBooksUpdateInput";
import { CategoriesOnBooksWhereUniqueInput } from "../../../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateInput, {
    nullable: false
  })
  data!: CategoriesOnBooksUpdateInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;
}
