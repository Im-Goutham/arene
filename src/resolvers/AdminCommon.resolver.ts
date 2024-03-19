import { Ctx, Query, Resolver } from "type-graphql";
import { PrismaContext } from "../utils/prisma-client";
import { VariationOption } from "../../prisma/generated/type-graphql";


@Resolver(of => VariationOption)
export class AdminCommonResolver {
  @Query(returns => [VariationOption])
    async getAllAdminVariationOptions(@Ctx() { prisma }: PrismaContext): Promise<VariationOption[]> {
        return await prisma.variationOption.findMany();
    }
}


