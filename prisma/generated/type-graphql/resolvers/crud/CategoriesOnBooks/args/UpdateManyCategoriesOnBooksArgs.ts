import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksUpdateManyMutationInput } from "../../../inputs/CategoriesOnBooksUpdateManyMutationInput";
import { CategoriesOnBooksWhereInput } from "../../../inputs/CategoriesOnBooksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => CategoriesOnBooksUpdateManyMutationInput, {
    nullable: false
  })
  data!: CategoriesOnBooksUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  where?: CategoriesOnBooksWhereInput | undefined;
}
