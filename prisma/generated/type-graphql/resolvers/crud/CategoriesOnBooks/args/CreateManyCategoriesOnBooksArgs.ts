import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoriesOnBooksCreateManyInput } from "../../../inputs/CategoriesOnBooksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoriesOnBooksArgs {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateManyInput], {
    nullable: false
  })
  data!: CategoriesOnBooksCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
