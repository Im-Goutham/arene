import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferAvgAggregate } from "../outputs/OfferAvgAggregate";
import { OfferCountAggregate } from "../outputs/OfferCountAggregate";
import { OfferMaxAggregate } from "../outputs/OfferMaxAggregate";
import { OfferMinAggregate } from "../outputs/OfferMinAggregate";
import { OfferSumAggregate } from "../outputs/OfferSumAggregate";

@TypeGraphQL.ObjectType("OfferGroupBy", {
  isAbstract: true
})
export class OfferGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  discount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

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
