import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCreateManyUserInputEnvelope } from "../inputs/UserProviderCreateManyUserInputEnvelope";
import { UserProviderCreateOrConnectWithoutUserInput } from "../inputs/UserProviderCreateOrConnectWithoutUserInput";
import { UserProviderCreateWithoutUserInput } from "../inputs/UserProviderCreateWithoutUserInput";
import { UserProviderWhereUniqueInput } from "../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.InputType("UserProviderCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class UserProviderCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserProviderCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserProviderCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProviderCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserProviderCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProviderWhereUniqueInput[] | undefined;
}
