import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateOrConnectWithoutBookInput } from "../inputs/AuthorCreateOrConnectWithoutBookInput";
import { AuthorCreateWithoutBookInput } from "../inputs/AuthorCreateWithoutBookInput";
import { AuthorUpdateWithoutBookInput } from "../inputs/AuthorUpdateWithoutBookInput";
import { AuthorUpsertWithoutBookInput } from "../inputs/AuthorUpsertWithoutBookInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorUpdateOneWithoutBookNestedInput", {
  isAbstract: true
})
export class AuthorUpdateOneWithoutBookNestedInput {
  @TypeGraphQL.Field(_type => AuthorCreateWithoutBookInput, {
    nullable: true
  })
  create?: AuthorCreateWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => AuthorCreateOrConnectWithoutBookInput, {
    nullable: true
  })
  connectOrCreate?: AuthorCreateOrConnectWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpsertWithoutBookInput, {
    nullable: true
  })
  upsert?: AuthorUpsertWithoutBookInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: true
  })
  connect?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateWithoutBookInput, {
    nullable: true
  })
  update?: AuthorUpdateWithoutBookInput | undefined;
}
