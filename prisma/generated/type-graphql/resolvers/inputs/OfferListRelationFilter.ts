import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferWhereInput } from "../inputs/OfferWhereInput";

@TypeGraphQL.InputType("OfferListRelationFilter", {
  isAbstract: true
})
export class OfferListRelationFilter {
  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  every?: OfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  some?: OfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  none?: OfferWhereInput | undefined;
}
