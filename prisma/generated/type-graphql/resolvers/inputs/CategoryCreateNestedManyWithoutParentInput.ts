import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyParentInputEnvelope } from "../inputs/CategoryCreateManyParentInputEnvelope";
import { CategoryCreateOrConnectWithoutParentInput } from "../inputs/CategoryCreateOrConnectWithoutParentInput";
import { CategoryCreateWithoutParentInput } from "../inputs/CategoryCreateWithoutParentInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutParentInput", {
  isAbstract: true
})
export class CategoryCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutParentInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
