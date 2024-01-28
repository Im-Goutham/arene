import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferUpdateInput } from "../../../inputs/OfferUpdateInput";
import { OfferWhereUniqueInput } from "../../../inputs/OfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOfferArgs {
  @TypeGraphQL.Field(_type => OfferUpdateInput, {
    nullable: false
  })
  data!: OfferUpdateInput;

  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: false
  })
  where!: OfferWhereUniqueInput;
}
