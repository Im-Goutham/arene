import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOffersInput } from "../inputs/ProductCreateOrConnectWithoutOffersInput";
import { ProductCreateWithoutOffersInput } from "../inputs/ProductCreateWithoutOffersInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutOffersInput", {
  isAbstract: true
})
export class ProductCreateNestedOneWithoutOffersInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOffersInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOffersInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOffersInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
