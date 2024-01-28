import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCreateManyUserInputEnvelope } from "../inputs/UserProviderCreateManyUserInputEnvelope";
import { UserProviderCreateOrConnectWithoutUserInput } from "../inputs/UserProviderCreateOrConnectWithoutUserInput";
import { UserProviderCreateWithoutUserInput } from "../inputs/UserProviderCreateWithoutUserInput";
import { UserProviderScalarWhereInput } from "../inputs/UserProviderScalarWhereInput";
import { UserProviderUpdateManyWithWhereWithoutUserInput } from "../inputs/UserProviderUpdateManyWithWhereWithoutUserInput";
import { UserProviderUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserProviderUpdateWithWhereUniqueWithoutUserInput";
import { UserProviderUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserProviderUpsertWithWhereUniqueWithoutUserInput";
import { UserProviderWhereUniqueInput } from "../inputs/UserProviderWhereUniqueInput";

@TypeGraphQL.InputType("UserProviderUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class UserProviderUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [UserProviderCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserProviderCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserProviderCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserProviderUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProviderCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserProviderCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereUniqueInput], {
    nullable: true
  })
  set?: UserProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereUniqueInput], {
    nullable: true
  })
  delete?: UserProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderWhereUniqueInput], {
    nullable: true
  })
  connect?: UserProviderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserProviderUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserProviderUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserProviderScalarWhereInput[] | undefined;
}
