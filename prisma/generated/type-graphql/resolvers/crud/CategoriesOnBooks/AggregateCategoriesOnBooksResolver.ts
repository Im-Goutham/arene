import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriesOnBooksArgs } from "./args/AggregateCategoriesOnBooksArgs";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { AggregateCategoriesOnBooks } from "../../outputs/AggregateCategoriesOnBooks";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class AggregateCategoriesOnBooksResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoriesOnBooks, {
    nullable: false
  })
  async aggregateCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoriesOnBooksArgs): Promise<AggregateCategoriesOnBooks> {
    return getPrismaFromContext(ctx).categoriesOnBooks.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
