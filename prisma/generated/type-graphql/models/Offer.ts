import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";

@TypeGraphQL.ObjectType("Offer", {
  isAbstract: true
})
export class Offer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  product?: Product;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  productId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  code?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  discount!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | null;
}
