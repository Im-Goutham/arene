import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCategoriesOnBooksArgs } from "./args/AggregateCategoriesOnBooksArgs";
import { CreateManyCategoriesOnBooksArgs } from "./args/CreateManyCategoriesOnBooksArgs";
import { CreateOneCategoriesOnBooksArgs } from "./args/CreateOneCategoriesOnBooksArgs";
import { DeleteManyCategoriesOnBooksArgs } from "./args/DeleteManyCategoriesOnBooksArgs";
import { DeleteOneCategoriesOnBooksArgs } from "./args/DeleteOneCategoriesOnBooksArgs";
import { FindFirstCategoriesOnBooksArgs } from "./args/FindFirstCategoriesOnBooksArgs";
import { FindFirstCategoriesOnBooksOrThrowArgs } from "./args/FindFirstCategoriesOnBooksOrThrowArgs";
import { FindManyCategoriesOnBooksArgs } from "./args/FindManyCategoriesOnBooksArgs";
import { FindUniqueCategoriesOnBooksArgs } from "./args/FindUniqueCategoriesOnBooksArgs";
import { FindUniqueCategoriesOnBooksOrThrowArgs } from "./args/FindUniqueCategoriesOnBooksOrThrowArgs";
import { GroupByCategoriesOnBooksArgs } from "./args/GroupByCategoriesOnBooksArgs";
import { UpdateManyCategoriesOnBooksArgs } from "./args/UpdateManyCategoriesOnBooksArgs";
import { UpdateOneCategoriesOnBooksArgs } from "./args/UpdateOneCategoriesOnBooksArgs";
import { UpsertOneCategoriesOnBooksArgs } from "./args/UpsertOneCategoriesOnBooksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { CategoriesOnBooks } from "../../../models/CategoriesOnBooks";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategoriesOnBooks } from "../../outputs/AggregateCategoriesOnBooks";
import { CategoriesOnBooksGroupBy } from "../../outputs/CategoriesOnBooksGroupBy";

@TypeGraphQL.Resolver(_of => CategoriesOnBooks)
export class CategoriesOnBooksCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateCategoriesOnBooks, {
    nullable: false
  })
  async aggregateCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCategoriesOnBooksArgs): Promise<AggregateCategoriesOnBooks> {
    return getPrismaFromContext(ctx).categoriesOnBooks.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyCategoriesOnBooksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyCategoriesOnBooksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => CategoriesOnBooks, {
    nullable: true
  })
  async findFirstCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCategoriesOnBooksArgs): Promise<CategoriesOnBooks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoriesOnBooks, {
    nullable: true
  })
  async findFirstCategoriesOnBooksOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstCategoriesOnBooksOrThrowArgs): Promise<CategoriesOnBooks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [CategoriesOnBooks], {
    nullable: false
  })
  async findManyCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyCategoriesOnBooksArgs): Promise<CategoriesOnBooks[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => CategoriesOnBooks, {
    nullable: true
  })
  async findUniqueCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueCategoriesOnBooksArgs): Promise<CategoriesOnBooks | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => [CategoriesOnBooksGroupBy], {
    nullable: false
  })
  async groupByCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByCategoriesOnBooksArgs): Promise<CategoriesOnBooksGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyCategoriesOnBooksArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation(_returns => CategoriesOnBooks, {
    nullable: false
  })
  async upsertOneCategoriesOnBooks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneCategoriesOnBooksArgs): Promise<CategoriesOnBooks> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).categoriesOnBooks.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
