import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksWhereInput } from "../inputs/CategoriesOnBooksWhereInput";

@TypeGraphQL.InputType("CategoriesOnBooksListRelationFilter", {
  isAbstract: true
})
export class CategoriesOnBooksListRelationFilter {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  every?: CategoriesOnBooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  some?: CategoriesOnBooksWhereInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereInput, {
    nullable: true
  })
  none?: CategoriesOnBooksWhereInput | undefined;
}
