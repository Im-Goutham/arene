import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCategoriesOnBooksArgs } from "./args/DeleteOneCategoriesOnBooksArgs";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class DeleteOneCategoriesOnBooksResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnBooks, {
    nullable: true
  })
  async deleteOneCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneCategoriesOnBooksArgs): Promise<CategoriesOnBooks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
