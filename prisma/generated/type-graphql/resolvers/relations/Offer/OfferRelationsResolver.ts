import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Offer } from "../../../models/Offer";
import { Product } from "../../../models/Product";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Offer)
export class OfferRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: false
  })
  async product(@TypeGraphQL.Root() offer: Offer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Product> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).offer.findUnique({
      where: {
        id: offer.id,
      },
    }).product({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
