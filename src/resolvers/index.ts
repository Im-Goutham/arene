import { NonEmptyArray } from "type-graphql";

// Admin
import { AdminUserResolver } from "./AdminUser.resolver";
import { AdminCategoryResolver } from "./AdminCategory.resolver";
import { AdminProductResolver } from "./AdminProduct.resolver";

// User
import { UserResolver } from "./User.resolver";
import { CategoryResolver } from "./Category.resolver";
import { ProductResolver } from "./Product.resolver";
import { AdminCommonResolver } from "./AdminCommon.resolver";
import { AuthResolver } from "./AuthResolver.resolver";


// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [
    //Admin
    AdminUserResolver, 
    AdminCategoryResolver,
    AdminProductResolver,
    AdminCommonResolver,
    // User
    AuthResolver,
    UserResolver,
    CategoryResolver,
    ProductResolver];
export default resolvers;