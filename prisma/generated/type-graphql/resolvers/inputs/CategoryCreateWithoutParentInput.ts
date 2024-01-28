import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedManyWithoutParentInput } from "../inputs/CategoryCreateNestedManyWithoutParentInput";
import { ProductCreateNestedManyWithoutCategoryInput } from "../inputs/ProductCreateNestedManyWithoutCategoryInput";

@TypeGraphQL.InputType("CategoryCreateWithoutParentInput", {
  isAbstract: true
})
export class CategoryCreateWithoutParentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => CategoryCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  children?: CategoryCreateNestedManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutCategoryInput, {
    nullable: true
  })
  products?: ProductCreateNestedManyWithoutCategoryInput | undefined;
}
