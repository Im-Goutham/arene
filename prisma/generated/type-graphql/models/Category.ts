import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CategoriesOnBooks } from "../models/CategoriesOnBooks";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";

@TypeGraphQL.ObjectType("Category", {
  isAbstract: true
})
export class Category {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayName!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  created_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  categoriesOnBooks?: CategoriesOnBooks[];

  @TypeGraphQL.Field(_type => CategoryCount, {
    nullable: true
  })
  _count?: CategoryCount | null;
}
