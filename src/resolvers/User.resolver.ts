import { Resolver, Query, Mutation, Arg, ObjectType, Field, InputType } from "type-graphql";
import { SiteUser, SiteUserCreateInput, SiteUserUpdateInput } from "../../prisma/generated/type-graphql";
import { PrismaClient } from "@prisma/client";

// Initialize PrismaClient
const prisma = new PrismaClient();


// SiteUser Resolver
@Resolver()
export class SiteUserResolver {
  // Query to get all site users
  @Query(() => [SiteUser])
    async siteUsers(): Promise<SiteUser[]> {
        return prisma.siteUser.findMany();
    }

  // Query to get a specific site user by ID
  @Query(() => SiteUser, { nullable: true })
  async siteUser(@Arg("id") id: string): Promise<SiteUser | null> {
      return prisma.siteUser.findUnique({ where: { id } });
  }

  // Mutation to create a new site user
  @Mutation(() => SiteUser)
  async createSiteUser(@Arg("data") data: SiteUserCreateInput): Promise<SiteUser> {
      return prisma.siteUser.create({ data });
  }

  // Mutation to update a site user
  @Mutation(() => SiteUser, { nullable: true })
  async updateSiteUser(
    @Arg("id") id: string,
    @Arg("data") data: SiteUserUpdateInput
  ): Promise<SiteUser | null> {
      return prisma.siteUser.update({ where: { id }, data });
  }

  // Mutation to delete a site user
  @Mutation(() => SiteUser, { nullable: true })
  async deleteSiteUser(@Arg("id") id: string): Promise<SiteUser | null> {
      return prisma.siteUser.delete({ where: { id } });
  }
}
