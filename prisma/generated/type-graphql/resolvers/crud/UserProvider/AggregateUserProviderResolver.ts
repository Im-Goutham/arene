import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUserProviderArgs } from "./args/AggregateUserProviderArgs";
import { UserProvider } from "../../../models/UserProvider";
import { AggregateUserProvider } from "../../outputs/AggregateUserProvider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProvider)
export class AggregateUserProviderResolver {
  @TypeGraphQL.Query(_returns => AggregateUserProvider, {
    nullable: false
  })
  async aggregateUserProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserProviderArgs): Promise<AggregateUserProvider> {
    return getPrismaFromContext(ctx).userProvider.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
