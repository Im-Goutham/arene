import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyParentInput } from "../inputs/CategoryCreateManyParentInput";

@TypeGraphQL.InputType("CategoryCreateManyParentInputEnvelope", {
  isAbstract: true
})
export class CategoryCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [CategoryCreateManyParentInput], {
    nullable: false
  })
  data!: CategoryCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
