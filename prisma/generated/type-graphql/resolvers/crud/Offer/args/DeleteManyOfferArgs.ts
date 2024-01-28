import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferWhereInput } from "../../../inputs/OfferWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOfferArgs {
  @TypeGraphQL.Field(_type => OfferWhereInput, {
    nullable: true
  })
  where?: OfferWhereInput | undefined;
}
