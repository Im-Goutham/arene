import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { Category } from "../../../models/Category";
import { CategoryCategoriesOnBooksArgs } from "./args/CategoryCategoriesOnBooksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class CategoryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CategoriesOnBooks], {
    nullable: false
  })
  async categoriesOnBooks(@TypeGraphQL.Root() category: Category, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CategoryCategoriesOnBooksArgs): Promise<CategoriesOnBooks[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).category.findUnique({
      where: {
        id: category.id,
      },
    }).categoriesOnBooks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
