import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutChildrenInput } from "../inputs/CategoryCreateNestedOneWithoutChildrenInput";
import { ProductCreateNestedManyWithoutCategoryInput } from "../inputs/ProductCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateWithoutChildrenInput", {
  isAbstract: true
})
export class CategoryCreateWithoutChildrenInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutChildrenInput, {
    nullable: true
  })
  parent?: CategoryCreateNestedOneWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutCategoryInput | undefined;
}
