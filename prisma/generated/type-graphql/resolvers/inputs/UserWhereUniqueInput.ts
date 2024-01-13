import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUser_nameEmailCompoundUniqueInput } from "../inputs/UserUser_nameEmailCompoundUniqueInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {
  isAbstract: true
})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => UserUser_nameEmailCompoundUniqueInput, {
    nullable: true
  })
  user_name_email?: UserUser_nameEmailCompoundUniqueInput | undefined;
}
