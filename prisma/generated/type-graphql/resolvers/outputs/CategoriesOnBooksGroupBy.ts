import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesOnBooksAvgAggregate } from "../outputs/CategoriesOnBooksAvgAggregate";
import { CategoriesOnBooksCountAggregate } from "../outputs/CategoriesOnBooksCountAggregate";
import { CategoriesOnBooksMaxAggregate } from "../outputs/CategoriesOnBooksMaxAggregate";
import { CategoriesOnBooksMinAggregate } from "../outputs/CategoriesOnBooksMinAggregate";
import { CategoriesOnBooksSumAggregate } from "../outputs/CategoriesOnBooksSumAggregate";

@TypeGraphQL.ObjectType("CategoriesOnBooksGroupBy", {
  isAbstract: true
})
export class CategoriesOnBooksGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  categoryId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  bookId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => CategoriesOnBooksCountAggregate, {
    nullable: true
  })
  _count!: CategoriesOnBooksCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesOnBooksAvgAggregate, {
    nullable: true
  })
  _avg!: CategoriesOnBooksAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesOnBooksSumAggregate, {
    nullable: true
  })
  _sum!: CategoriesOnBooksSumAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesOnBooksMinAggregate, {
    nullable: true
  })
  _min!: CategoriesOnBooksMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoriesOnBooksMaxAggregate, {
    nullable: true
  })
  _max!: CategoriesOnBooksMaxAggregate | null;
}
