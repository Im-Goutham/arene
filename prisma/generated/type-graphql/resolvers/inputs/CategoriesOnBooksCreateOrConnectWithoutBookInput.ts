import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateWithoutBookInput } from "../inputs/CategoriesOnBooksCreateWithoutBookInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => CategoriesOnBooksWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesOnBooksWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateWithoutBookInput, {
    nullable: false
  })
  create!: CategoriesOnBooksCreateWithoutBookInput;
}
