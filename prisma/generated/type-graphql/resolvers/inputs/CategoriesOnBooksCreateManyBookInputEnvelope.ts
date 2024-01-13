import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateManyBookInput } from "../inputs/CategoriesOnBooksCreateManyBookInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateManyBookInputEnvelope", {
  isAbstract: true
})
export class CategoriesOnBooksCreateManyBookInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateManyBookInput], {
    nullable: false
  })
  data!: CategoriesOnBooksCreateManyBookInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
