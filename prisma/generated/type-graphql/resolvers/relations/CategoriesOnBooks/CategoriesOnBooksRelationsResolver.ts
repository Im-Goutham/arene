import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Book } from "../../../models/Book";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { Category } from "../../../models/Category";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class CategoriesOnBooksRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Category, {
    nullable: false
  })
  async category(@TypeGraphQL.Root() categoriesOnBooks: CategoriesOnBooks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findUnique({
      where: {
        categoryId_bookId: {
          categoryId: categoriesOnBooks.categoryId,
          bookId: categoriesOnBooks.bookId,
        },
      },
    }).category({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Book, {
    nullable: false
  })
  async book(@TypeGraphQL.Root() categoriesOnBooks: CategoriesOnBooks, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Book> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findUnique({
      where: {
        categoryId_bookId: {
          categoryId: categoriesOnBooks.categoryId,
          bookId: categoriesOnBooks.bookId,
        },
      },
    }).book({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
