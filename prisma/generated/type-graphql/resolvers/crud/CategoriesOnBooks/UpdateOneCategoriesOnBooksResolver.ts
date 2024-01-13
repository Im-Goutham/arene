import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCategoriesOnBooksArgs } from "./args/UpdateOneCategoriesOnBooksArgs";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class UpdateOneCategoriesOnBooksResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnBooks, {
    nullable: true
  })
  async updateOneCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneCategoriesOnBooksArgs): Promise<CategoriesOnBooks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
