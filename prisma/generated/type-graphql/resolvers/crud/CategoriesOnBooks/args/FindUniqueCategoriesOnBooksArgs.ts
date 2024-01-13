import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksWhereUniqueInput } from "../../../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;
}
