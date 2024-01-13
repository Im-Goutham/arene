import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorWhereInput } from "../inputs/AuthorWhereInput";

@TypeGraphQL.InputType("AuthorRelationFilter", {
  isAbstract: true
})
export class AuthorRelationFilter {
  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  is?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  isNot?: AuthorWhereInput | undefined;
}
