import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCountAggregate } from "../outputs/UserProviderCountAggregate";
import { UserProviderMaxAggregate } from "../outputs/UserProviderMaxAggregate";
import { UserProviderMinAggregate } from "../outputs/UserProviderMinAggregate";

@TypeGraphQL.ObjectType("AggregateUserProvider", {
  isAbstract: true
})
export class AggregateUserProvider {
  @TypeGraphQL.Field(_type => UserProviderCountAggregate, {
    nullable: true
  })
  _count!: UserProviderCountAggregate | null;

  @TypeGraphQL.Field(_type => UserProviderMinAggregate, {
    nullable: true
  })
  _min!: UserProviderMinAggregate | null;

  @TypeGraphQL.Field(_type => UserProviderMaxAggregate, {
    nullable: true
  })
  _max!: UserProviderMaxAggregate | null;
}
