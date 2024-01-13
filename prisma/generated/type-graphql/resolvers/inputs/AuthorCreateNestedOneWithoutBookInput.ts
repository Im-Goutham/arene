import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateOrConnectWithoutBookInput } from "../inputs/AuthorCreateOrConnectWithoutBookInput";
import { AuthorCreateWithoutBookInput } from "../inputs/AuthorCreateWithoutBookInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorCreateNestedOneWithoutBookInput", {
  isAbstract: true
})
export class AuthorCreateNestedOneWithoutBookInput {
  @TypeGraphQL.Field(_type => AuthorCreateWithoutBookInput, {
    nullable: true
  })
  create?: AuthorCreateWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => AuthorCreateOrConnectWithoutBookInput, {
    nullable: true
  })
  connectOrCreate?: AuthorCreateOrConnectWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: true
  })
  connect?: AuthorWhereUniqueInput | undefined;
}
