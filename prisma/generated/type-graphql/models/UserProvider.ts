import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("UserProvider", {
  isAbstract: true
})
export class UserProvider {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  provider!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  providerId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebookToken?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebookEmail?: string | null;
}
