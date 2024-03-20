import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { PrismaContext } from "../utils/prisma-client";
import { Variation } from "../../prisma/generated/type-graphql";


@Resolver(of => Variation)
export class AdminCommonResolver {

}


