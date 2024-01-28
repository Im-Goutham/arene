import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCreateManyUserInput } from "../inputs/UserProviderCreateManyUserInput";

@TypeGraphQL.InputType("UserProviderCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class UserProviderCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [UserProviderCreateManyUserInput], {
    nullable: false
  })
  data!: UserProviderCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
