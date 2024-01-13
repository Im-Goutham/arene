import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCategoriesOnBooksArgs } from "./args/CreateOneCategoriesOnBooksArgs";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class CreateOneCategoriesOnBooksResolver {
  @TypeGraphQL.Mutation(_returns => CategoriesOnBooks, {
    nullable: false
  })
  async createOneCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneCategoriesOnBooksArgs): Promise<CategoriesOnBooks> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
