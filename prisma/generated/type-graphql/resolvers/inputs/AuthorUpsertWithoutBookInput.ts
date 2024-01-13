import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateWithoutBookInput } from "../inputs/AuthorCreateWithoutBookInput";
import { AuthorUpdateWithoutBookInput } from "../inputs/AuthorUpdateWithoutBookInput";

@TypeGraphQL.InputType("AuthorUpsertWithoutBookInput", {
  isAbstract: true
})
export class AuthorUpsertWithoutBookInput {
  @TypeGraphQL.Field(_type => AuthorUpdateWithoutBookInput, {
    nullable: false
  })
  update!: AuthorUpdateWithoutBookInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutBookInput, {
    nullable: false
  })
  create!: AuthorCreateWithoutBookInput;
}
