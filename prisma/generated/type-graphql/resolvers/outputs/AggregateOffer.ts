import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferAvgAggregate } from "../outputs/OfferAvgAggregate";
import { OfferCountAggregate } from "../outputs/OfferCountAggregate";
import { OfferMaxAggregate } from "../outputs/OfferMaxAggregate";
import { OfferMinAggregate } from "../outputs/OfferMinAggregate";
import { OfferSumAggregate } from "../outputs/OfferSumAggregate";

@TypeGraphQL.ObjectType("AggregateOffer", {
  isAbstract: true
})
export class AggregateOffer {
  @TypeGraphQL.Field(_type => OfferCountAggregate, {
    nullable: true
  })
  _count!: OfferCountAggregate | null;

  @TypeGraphQL.Field(_type => OfferAvgAggregate, {
    nullable: true
  })
  _avg!: OfferAvgAggregate | null;

  @TypeGraphQL.Field(_type => OfferSumAggregate, {
    nullable: true
  })
  _sum!: OfferSumAggregate | null;

  @TypeGraphQL.Field(_type => OfferMinAggregate, {
    nullable: true
  })
  _min!: OfferMinAggregate | null;

  @TypeGraphQL.Field(_type => OfferMaxAggregate, {
    nullable: true
  })
  _max!: OfferMaxAggregate | null;
}
