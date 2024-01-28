import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferCreateInput } from "../../../inputs/OfferCreateInput";
import { OfferUpdateInput } from "../../../inputs/OfferUpdateInput";
import { OfferWhereUniqueInput } from "../../../inputs/OfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOfferArgs {
  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;

  @TypeGraphQL.Field(_type => OfferCreateInput, {
    nullable: false
  })
  create!: OfferCreateInput;

  @TypeGraphQL.Field(_type => OfferUpdateInput, {
    nullable: false
  })
  update!: OfferUpdateInput;
}
