import { NonEmptyArray } from "type-graphql";
import { SiteUserResolver } from "./SiteUser.resolver";
import { ProductCategoryResolver } from "./ProductCategory.resolver";
import { ProductResolver } from "./Product.resolver";
// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [SiteUserResolver, ProductCategoryResolver, ProductResolver];
export default resolvers;