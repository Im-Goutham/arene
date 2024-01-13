import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksCreateManyBookInputEnvelope } from "../inputs/CategoriesOnBooksCreateManyBookInputEnvelope";
import { CategoriesOnBooksCreateOrConnectWithoutBookInput } from "../inputs/CategoriesOnBooksCreateOrConnectWithoutBookInput";
import { CategoriesOnBooksCreateWithoutBookInput } from "../inputs/CategoriesOnBooksCreateWithoutBookInput";
import { CategoriesOnBooksWhereUniqueInput } from "../inputs/CategoriesOnBooksWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesOnBooksCreateNestedManyWithoutBookInput", {
  isAbstract: true
})
export class CategoriesOnBooksCreateNestedManyWithoutBookInput {
  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateWithoutBookInput], {
    nullable: true
  })
  create?: CategoriesOnBooksCreateWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksCreateOrConnectWithoutBookInput], {
    nullable: true
  })
  connectOrCreate?: CategoriesOnBooksCreateOrConnectWithoutBookInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCreateManyBookInputEnvelope, {
    nullable: true
  })
  createMany?: CategoriesOnBooksCreateManyBookInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoriesOnBooksWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoriesOnBooksWhereUniqueInput[] | undefined;
}
