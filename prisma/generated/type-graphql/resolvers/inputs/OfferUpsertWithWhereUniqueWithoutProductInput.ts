import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutProductInput } from "../inputs/OfferCreateWithoutProductInput";
import { OfferUpdateWithoutProductInput } from "../inputs/OfferUpdateWithoutProductInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpsertWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class OfferUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutProductInput, {
    nullable: false
  })
  update!: OfferUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutProductInput, {
    nullable: false
  })
  create!: OfferCreateWithoutProductInput;
}
