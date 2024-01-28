import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateOfferArgs } from "./args/AggregateOfferArgs";
import { Offer } from "../../../models/Offer";
import { AggregateOffer } from "../../outputs/AggregateOffer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Offer)
export class AggregateOfferResolver {
  @TypeGraphQL.Query(_returns => AggregateOffer, {
    nullable: false
  })
  async aggregateOffer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOfferArgs): Promise<AggregateOffer> {
    return getPrismaFromContext(ctx).offer.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
