import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOffersInput } from "../inputs/ProductCreateOrConnectWithoutOffersInput";
import { ProductCreateWithoutOffersInput } from "../inputs/ProductCreateWithoutOffersInput";
import { ProductUpdateWithoutOffersInput } from "../inputs/ProductUpdateWithoutOffersInput";
import { ProductUpsertWithoutOffersInput } from "../inputs/ProductUpsertWithoutOffersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateOneRequiredWithoutOffersNestedInput", {
  isAbstract: true
})
export class ProductUpdateOneRequiredWithoutOffersNestedInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOffersInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutOffersInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOffersInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutOffersInput | undefined;
}
