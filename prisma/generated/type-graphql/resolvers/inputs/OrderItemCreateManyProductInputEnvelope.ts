import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateManyProductInput } from "../inputs/OrderItemCreateManyProductInput";

@TypeGraphQL.InputType("OrderItemCreateManyProductInputEnvelope", {
  isAbstract: true
})
export class OrderItemCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderItemCreateManyProductInput], {
    nullable: false
  })
  data!: OrderItemCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
