import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyProductInputEnvelope } from "../inputs/OfferCreateManyProductInputEnvelope";
import { OfferCreateOrConnectWithoutProductInput } from "../inputs/OfferCreateOrConnectWithoutProductInput";
import { OfferCreateWithoutProductInput } from "../inputs/OfferCreateWithoutProductInput";
import { OfferScalarWhereInput } from "../inputs/OfferScalarWhereInput";
import { OfferUpdateManyWithWhereWithoutProductInput } from "../inputs/OfferUpdateManyWithWhereWithoutProductInput";
import { OfferUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OfferUpdateWithWhereUniqueWithoutProductInput";
import { OfferUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OfferUpsertWithWhereUniqueWithoutProductInput";
import { OfferWhereUniqueInput } from "../inputs/OfferWhereUniqueInput";

@TypeGraphQL.InputType("OfferUpdateManyWithoutProductNestedInput", {
  isAbstract: true
})
export class OfferUpdateManyWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => [OfferCreateWithoutProductInput], {
    nullable: true
  })
  create?: OfferCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: OfferCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: OfferUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: OfferCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  set?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  delete?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferWhereUniqueInput], {
    nullable: true
  })
  connect?: OfferWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: OfferUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: OfferUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OfferScalarWhereInput[] | undefined;
}
