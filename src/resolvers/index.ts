import { NonEmptyArray } from "type-graphql";
import UserResolver from "./User.resolver";
import CategoryResolver from "./Category.resolver";
import { ProductResolver } from "./Product.resolver";
// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [UserResolver, CategoryResolver, ProductResolver];
export default resolvers;