import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("UserProviderMinAggregate", {
  isAbstract: true
})
export class UserProviderMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  provider!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  providerId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebookToken!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  facebookEmail!: string | null;
}
