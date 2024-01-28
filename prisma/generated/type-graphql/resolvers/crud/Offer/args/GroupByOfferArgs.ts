import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferOrderByWithAggregationInput } from "../../../inputs/OfferOrderByWithAggregationInput";
import { OfferScalarWhereWithAggregatesInput } from "../../../inputs/OfferScalarWhereWithAggregatesInput";
import { OfferWhereInput } from "../../../inputs/OfferWhereInput";
import { OfferScalarFieldEnum } from "../../../../enums/OfferScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOfferArgs {
  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  where?: OfferWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OfferOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OfferOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OfferScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "productId" | "type" | "code" | "discount" | "startDate" | "endDate">;

  @TypeGraphQL.Field(_type => OfferScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OfferScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
