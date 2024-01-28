import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferOrderByWithRelationInput } from "../../../inputs/OfferOrderByWithRelationInput";
import { OfferWhereInput } from "../../../inputs/OfferWhereInput";
import { OfferWhereUniqueInput } from "../../../inputs/OfferWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOfferArgs {
  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  where?: OfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfferOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OfferOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OfferWhereUniqueInput, {
    nullable: true
  })
  cursor?: OfferWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
