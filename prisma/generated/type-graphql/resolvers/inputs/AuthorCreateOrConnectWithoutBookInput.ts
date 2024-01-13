import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateWithoutBookInput } from "../inputs/AuthorCreateWithoutBookInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorCreateOrConnectWithoutBookInput", {
  isAbstract: true
})
export class AuthorCreateOrConnectWithoutBookInput {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutBookInput, {
    nullable: false
  })
  create!: AuthorCreateWithoutBookInput;
}
