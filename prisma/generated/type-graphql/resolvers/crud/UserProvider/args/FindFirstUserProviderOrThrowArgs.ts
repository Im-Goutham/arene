import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserProviderOrderByWithRelationInput } from "../../../inputs/UserProviderOrderByWithRelationInput";
import { UserProviderWhereInput } from "../../../inputs/UserProviderWhereInput";
import { UserProviderWhereUniqueInput } from "../../../inputs/UserProviderWhereUniqueInput";
import { UserProviderScalarFieldEnum } from "../../../../enums/UserProviderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUserProviderOrThrowArgs {
  @TypeGraphQL.Field(_type => UserProviderWhereInput, {
    nullable: true
  })
  where?: UserProviderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserProviderOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UserProviderOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserProviderWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserProviderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserProviderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "provider" | "providerId" | "facebookToken" | "facebookEmail"> | undefined;
}
