import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrdersInput } from "../inputs/ProductCreateOrConnectWithoutOrdersInput";
import { ProductCreateWithoutOrdersInput } from "../inputs/ProductCreateWithoutOrdersInput";
import { ProductUpdateWithoutOrdersInput } from "../inputs/ProductUpdateWithoutOrdersInput";
import { ProductUpsertWithoutOrdersInput } from "../inputs/ProductUpsertWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutOrdersNestedInput", {
  isAbstract: true
})
export class ProductUpdateOneRequiredWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutOrdersInput | undefined;
}
