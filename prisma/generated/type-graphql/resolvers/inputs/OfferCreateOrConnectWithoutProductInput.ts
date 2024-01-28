import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateWithoutProductInput } from "../inputs/OfferCreateWithoutProductInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferCreateOrConnectWithoutProductInput", {
  isAbstract: true
})
export class OfferCreateOrConnectWithoutProductInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferCreateWithoutProductInput, {
    nullable: false
  })
  create!: OfferCreateWithoutProductInput;
}
