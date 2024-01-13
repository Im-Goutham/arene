import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateNestedManyWithoutAuthorInput } from "../inputs/BookCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("AuthorCreateInput", {
  isAbstract: true
})
export class AuthorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => BookCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  book?: BookCreateNestedManyWithoutAuthorInput | undefined;
}
