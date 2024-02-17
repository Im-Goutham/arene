import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCountAggregate } from "../outputs/ProductCountAggregate";
import { ProductMaxAggregate } from "../outputs/ProductMaxAggregate";
import { ProductMinAggregate } from "../outputs/ProductMinAggregate";

@TypeGraphQL.ObjectType("ProductGroupBy", {
  isAbstract: true
})
export class ProductGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  category_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  product_image!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_deleted!: boolean;

  @TypeGraphQL.Field(_type => ProductCountAggregate, {
    nullable: true
  })
  _count!: ProductCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductMinAggregate, {
    nullable: true
  })
  _min!: ProductMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductMaxAggregate, {
    nullable: true
  })
  _max!: ProductMaxAggregate | null;
}
