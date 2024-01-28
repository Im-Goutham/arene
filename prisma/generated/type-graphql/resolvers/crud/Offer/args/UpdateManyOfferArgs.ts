import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferUpdateManyMutationInput } from "../../../inputs/OfferUpdateManyMutationInput";
import { OfferWhereInput } from "../../../inputs/OfferWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOfferArgs {
  @TypeGraphQL.Field(_type => OfferUpdateManyMutationInput, {
    nullable: false
  })
  data!: OfferUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  where?: OfferWhereInput | undefined;
}
