import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneUserProviderArgs } from "./args/UpdateOneUserProviderArgs";
import { UserProvider } from "../../../models/UserProvider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProvider)
export class UpdateOneUserProviderResolver {
  @TypeGraphQL.Mutation(_returns => UserProvider, {
    nullable: true
  })
  async updateOneUserProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneUserProviderArgs): Promise<UserProvider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userProvider.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
