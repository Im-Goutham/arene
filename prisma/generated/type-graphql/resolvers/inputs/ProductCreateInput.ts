import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutProductInput } from "../inputs/CategoryCreateNestedOneWithoutProductInput";
import { ProductItemCreateNestedManyWithoutProductInput } from "../inputs/ProductItemCreateNestedManyWithoutProductInput";

@TypeGraphQL.InputType("ProductCreateInput", {
  isAbstract: true
})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_image?: string | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProductInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutProductInput;

  @TypeGraphQL.Field(_type => ProductItemCreateNestedManyWithoutProductInput, {
    nullable: true
  })
  ProductItem?: ProductItemCreateNestedManyWithoutProductInput | undefined;
}
