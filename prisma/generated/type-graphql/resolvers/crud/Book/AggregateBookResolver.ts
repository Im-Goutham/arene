import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateBookArgs } from "./args/AggregateBookArgs";
import { Book } from "../../../models/Book";
import { AggregateBook } from "../../outputs/AggregateBook";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class AggregateBookResolver {
  @TypeGraphQL.Query(_returns => AggregateBook, {
    nullable: false
  })
  async aggregateBook(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateBookArgs): Promise<AggregateBook> {
    return getPrismaFromContext(ctx).book.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
