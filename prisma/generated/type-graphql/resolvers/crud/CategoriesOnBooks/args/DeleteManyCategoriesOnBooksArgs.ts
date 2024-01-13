import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksWhereInput } from "../../../inputs/CategoriesOnBooksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  where?: CategoriesOnBooksWhereInput | undefined;
}
