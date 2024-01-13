import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksCreateInput } from "../../../inputs/CategoriesOnBooksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateInput, {
    nullable: false
  })
  data!: CategoriesOnBooksCreateInput;
}
