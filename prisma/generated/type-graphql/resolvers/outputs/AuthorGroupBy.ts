import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorAvgAggregate } from "../outputs/AuthorAvgAggregate";
import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";
import { AuthorSumAggregate } from "../outputs/AuthorSumAggregate";

@TypeGraphQL.ObjectType("AuthorGroupBy", {
  isAbstract: true
})
export class AuthorGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at!: Date | null;

  @TypeGraphQL.Field(_type => AuthorCountAggregate, {
    nullable: true
  })
  _count!: AuthorCountAggregate | null;

  @TypeGraphQL.Field(_type => AuthorAvgAggregate, {
    nullable: true
  })
  _avg!: AuthorAvgAggregate | null;

  @TypeGraphQL.Field(_type => AuthorSumAggregate, {
    nullable: true
  })
  _sum!: AuthorSumAggregate | null;

  @TypeGraphQL.Field(_type => AuthorMinAggregate, {
    nullable: true
  })
  _min!: AuthorMinAggregate | null;

  @TypeGraphQL.Field(_type => AuthorMaxAggregate, {
    nullable: true
  })
  _max!: AuthorMaxAggregate | null;
}
