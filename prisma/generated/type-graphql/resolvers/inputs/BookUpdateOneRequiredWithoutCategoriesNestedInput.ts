import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateOrConnectWithoutCategoriesInput } from "../inputs/BookCreateOrConnectWithoutCategoriesInput";
import { BookCreateWithoutCategoriesInput } from "../inputs/BookCreateWithoutCategoriesInput";
import { BookUpdateWithoutCategoriesInput } from "../inputs/BookUpdateWithoutCategoriesInput";
import { BookUpsertWithoutCategoriesInput } from "../inputs/BookUpsertWithoutCategoriesInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookUpdateOneRequiredWithoutCategoriesNestedInput", {
  isAbstract: true
})
export class BookUpdateOneRequiredWithoutCategoriesNestedInput {
  @TypeGraphQL.Field(_type => BookCreateWithoutCategoriesInput, {
    nullable: true
  })
  create?: BookCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => BookCreateOrConnectWithoutCategoriesInput, {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => BookUpsertWithoutCategoriesInput, {
    nullable: true
  })
  upsert?: BookUpsertWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: true
  })
  connect?: BookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => BookUpdateWithoutCategoriesInput, {
    nullable: true
  })
  update?: BookUpdateWithoutCategoriesInput | undefined;
}
