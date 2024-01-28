import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfferCreateManyProductInput } from "../inputs/OfferCreateManyProductInput";

@TypeGraphQL.InputType("OfferCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class OfferCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [OfferCreateManyProductInput], {
    nullable: false
  })
  data!: OfferCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
