import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneUserProviderArgs } from "./args/DeleteOneUserProviderArgs";
import { UserProvider } from "../../../models/UserProvider";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserProvider)
export class DeleteOneUserProviderResolver {
  @TypeGraphQL.Mutation(_returns => UserProvider, {
    nullable: true
  })
  async deleteOneUserProvider(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneUserProviderArgs): Promise<UserProvider | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userProvider.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
