import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferUpdateWithoutProductInput } from "../inputs/OfferUpdateWithoutProductInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateWithWhereUniqueWithoutProductInput", {
  isAbstract: true
})
export class OfferUpdateWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferUpdateWithoutProductInput, {
    nullable: false
  })
  data!: OfferUpdateWithoutProductInput;
}
