import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateManyCategoryInput } from "../inputs/CategoriesOnBooksCreateManyCategoryInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateManyCategoryInputEnvelope", {
  isAbstract: true
})
export class CategoriesOnBooksCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateManyCategoryInput], {
    nullable: false
  })
  data!: CategoriesOnBooksCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
