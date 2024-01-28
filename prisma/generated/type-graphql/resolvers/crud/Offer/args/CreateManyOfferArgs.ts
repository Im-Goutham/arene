import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OfferCreateManyInput } from "../../../inputs/OfferCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOfferArgs {
  @TypeGraphQL.Field(_type => [OfferCreateManyInput], {
    nullable: false
  })
  data!: OfferCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
