import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutChildrenInput } from "../inputs/CategoryCreateWithoutChildrenInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutChildrenInput", {
  isAbstract: true
})
export class CategoryCreateOrConnectWithoutChildrenInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutChildrenInput;
}
