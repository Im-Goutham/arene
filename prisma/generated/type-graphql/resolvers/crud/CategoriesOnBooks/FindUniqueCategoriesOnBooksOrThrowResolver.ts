import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCategoriesOnBooksOrThrowArgs } from "./args/FindUniqueCategoriesOnBooksOrThrowArgs";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class FindUniqueCategoriesOnBooksOrThrowResolver {
  @TypeGraphQL.Query(_returns => CategoriesOnBooks, {
    nullable: true
  })
  async findUniqueCategoriesOnBooksOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoriesOnBooksOrThrowArgs): Promise<CategoriesOnBooks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
