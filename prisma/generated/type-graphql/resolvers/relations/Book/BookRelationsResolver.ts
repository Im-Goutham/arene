import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { Book } from "../../../models/Book";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { BookCategoriesArgs } from "./args/BookCategoriesArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Author, {
    nullable: true
  })
  async author(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Author | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).author({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [CategoriesOnBooks], {
    nullable: false
  })
  async categories(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: BookCategoriesArgs): Promise<CategoriesOnBooks[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).categories({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
