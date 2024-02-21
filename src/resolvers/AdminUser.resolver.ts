import { Resolver, Query, Mutation, Arg, ObjectType, Field, InputType } from "type-graphql";

import { PrismaClient } from "@prisma/client";

import { User } from "../../prisma/generated/type-graphql";
// Initialize PrismaClient
const prisma = new PrismaClient();


// User Resolver
@Resolver()
export class AdminUserResolver {
  // Query to get all site users
  @Query(() => [User])
    async getAdminUsers(): Promise<User[]> {
        return prisma.user.findMany();
    }

  // Query to get a specific site user by ID
  @Query(() => User, { nullable: true })
  async getAdminUserById(@Arg("id") id: string): Promise<User | null> {
      return prisma.user.findUnique({ where: { id } });
  }

  // // Mutation to create a new site user
  // @Mutation(() => User)
  // async createUser(@Arg("data") data: UserCreateArgs): Promise<User> {
  //     return prisma.user.create({ data });
  // }

  // Mutation to update a site user
  // @Mutation(() => User, { nullable: true })
  // async updateUser(
  //   @Arg("id") id: string,
  //   @Arg("data") data: UserUpdateInput
  // ): Promise<User | null> {
  //     return prisma.user.update({ where: { id }, data });
  // }

  // Mutation to delete a site user
  @Mutation(() => User, { nullable: true })
  async adminDeleteUserById(@Arg("id") id: string): Promise<User | null> {
      return prisma.user.delete({ where: { id } });
  }
}
