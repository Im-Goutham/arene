import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyProductInputEnvelope } from "../inputs/OfferCreateManyProductInputEnvelope";
import { OfferCreateOrConnectWithoutProductInput } from "../inputs/OfferCreateOrConnectWithoutProductInput";
import { OfferCreateWithoutProductInput } from "../inputs/OfferCreateWithoutProductInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateNestedManyWithoutProductInput", {
  isAbstract: true
})
export class OfferCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutProductInput], {
    nullable: true
  })
  create?: OfferCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferWhereUniqueInput[] | undefined;
}
