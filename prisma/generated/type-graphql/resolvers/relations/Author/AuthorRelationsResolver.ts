import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { Book } from "../../../models/Book";
import { AuthorBookArgs } from "./args/AuthorBookArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Author)
export class AuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Book], {
    nullable: false
  })
  async book(@TypeGraphQL.Root() author: Author, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AuthorBookArgs): Promise<Book[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).author.findUnique({
      where: {
        id: author.id,
      },
    }).book({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
