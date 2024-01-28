import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { User, Order } from "../../prisma/generated/type-graphql";
import { PrismaContext } from "../utils/prisma-client";

@Resolver(of => User)
export default class UserResolver {
  // Query to fetch all users
  @Query(returns => [User])
  async allUsers(@Ctx() { prisma }: PrismaContext): Promise<User[]> {
    return await prisma.user.findMany();
  }

  // Query to fetch a user by ID
  @Query(returns => User, { nullable: true })
  async userById(@Root() user: User,@Ctx() { prisma }: PrismaContext): Promise<User | null> {
    return await prisma.user.findFirst({ where: { id:user.id } });
  }

  // Field resolver for user's orders
  @FieldResolver(type => [Order])
  async orders(@Root() user: User, @Ctx() { prisma }: PrismaContext): Promise<Order[]> {
    return await prisma.order.findMany({ where: { userId: user.id } });
  }

}
