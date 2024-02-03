import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Country: crudResolvers.CountryCrudResolver,
  Address: crudResolvers.AddressCrudResolver,
  SiteUser: crudResolvers.SiteUserCrudResolver,
  UserAddress: crudResolvers.UserAddressCrudResolver,
  ProductCategory: crudResolvers.ProductCategoryCrudResolver,
  Promotion: crudResolvers.PromotionCrudResolver,
  PromotionCategory: crudResolvers.PromotionCategoryCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  ProductItem: crudResolvers.ProductItemCrudResolver,
  Variation: crudResolvers.VariationCrudResolver,
  VariationOption: crudResolvers.VariationOptionCrudResolver,
  ProductConfiguration: crudResolvers.ProductConfigurationCrudResolver,
  PaymentType: crudResolvers.PaymentTypeCrudResolver,
  UserPaymentMethod: crudResolvers.UserPaymentMethodCrudResolver,
  ShoppingCart: crudResolvers.ShoppingCartCrudResolver,
  ShoppingCartItem: crudResolvers.ShoppingCartItemCrudResolver,
  ShippingMethod: crudResolvers.ShippingMethodCrudResolver,
  OrderStatus: crudResolvers.OrderStatusCrudResolver,
  ShopOrder: crudResolvers.ShopOrderCrudResolver,
  OrderLine: crudResolvers.OrderLineCrudResolver,
  UserReview: crudResolvers.UserReviewCrudResolver
};
const actionResolversMap = {
  Country: {
    aggregateCountry: actionResolvers.AggregateCountryResolver,
    createManyCountry: actionResolvers.CreateManyCountryResolver,
    createOneCountry: actionResolvers.CreateOneCountryResolver,
    deleteManyCountry: actionResolvers.DeleteManyCountryResolver,
    deleteOneCountry: actionResolvers.DeleteOneCountryResolver,
    findFirstCountry: actionResolvers.FindFirstCountryResolver,
    findFirstCountryOrThrow: actionResolvers.FindFirstCountryOrThrowResolver,
    countries: actionResolvers.FindManyCountryResolver,
    country: actionResolvers.FindUniqueCountryResolver,
    getCountry: actionResolvers.FindUniqueCountryOrThrowResolver,
    groupByCountry: actionResolvers.GroupByCountryResolver,
    updateManyCountry: actionResolvers.UpdateManyCountryResolver,
    updateOneCountry: actionResolvers.UpdateOneCountryResolver,
    upsertOneCountry: actionResolvers.UpsertOneCountryResolver
  },
  Address: {
    aggregateAddress: actionResolvers.AggregateAddressResolver,
    createManyAddress: actionResolvers.CreateManyAddressResolver,
    createOneAddress: actionResolvers.CreateOneAddressResolver,
    deleteManyAddress: actionResolvers.DeleteManyAddressResolver,
    deleteOneAddress: actionResolvers.DeleteOneAddressResolver,
    findFirstAddress: actionResolvers.FindFirstAddressResolver,
    findFirstAddressOrThrow: actionResolvers.FindFirstAddressOrThrowResolver,
    addresses: actionResolvers.FindManyAddressResolver,
    address: actionResolvers.FindUniqueAddressResolver,
    getAddress: actionResolvers.FindUniqueAddressOrThrowResolver,
    groupByAddress: actionResolvers.GroupByAddressResolver,
    updateManyAddress: actionResolvers.UpdateManyAddressResolver,
    updateOneAddress: actionResolvers.UpdateOneAddressResolver,
    upsertOneAddress: actionResolvers.UpsertOneAddressResolver
  },
  SiteUser: {
    aggregateSiteUser: actionResolvers.AggregateSiteUserResolver,
    createManySiteUser: actionResolvers.CreateManySiteUserResolver,
    createOneSiteUser: actionResolvers.CreateOneSiteUserResolver,
    deleteManySiteUser: actionResolvers.DeleteManySiteUserResolver,
    deleteOneSiteUser: actionResolvers.DeleteOneSiteUserResolver,
    findFirstSiteUser: actionResolvers.FindFirstSiteUserResolver,
    findFirstSiteUserOrThrow: actionResolvers.FindFirstSiteUserOrThrowResolver,
    siteUsers: actionResolvers.FindManySiteUserResolver,
    siteUser: actionResolvers.FindUniqueSiteUserResolver,
    getSiteUser: actionResolvers.FindUniqueSiteUserOrThrowResolver,
    groupBySiteUser: actionResolvers.GroupBySiteUserResolver,
    updateManySiteUser: actionResolvers.UpdateManySiteUserResolver,
    updateOneSiteUser: actionResolvers.UpdateOneSiteUserResolver,
    upsertOneSiteUser: actionResolvers.UpsertOneSiteUserResolver
  },
  UserAddress: {
    aggregateUserAddress: actionResolvers.AggregateUserAddressResolver,
    createManyUserAddress: actionResolvers.CreateManyUserAddressResolver,
    createOneUserAddress: actionResolvers.CreateOneUserAddressResolver,
    deleteManyUserAddress: actionResolvers.DeleteManyUserAddressResolver,
    deleteOneUserAddress: actionResolvers.DeleteOneUserAddressResolver,
    findFirstUserAddress: actionResolvers.FindFirstUserAddressResolver,
    findFirstUserAddressOrThrow: actionResolvers.FindFirstUserAddressOrThrowResolver,
    userAddresses: actionResolvers.FindManyUserAddressResolver,
    userAddress: actionResolvers.FindUniqueUserAddressResolver,
    getUserAddress: actionResolvers.FindUniqueUserAddressOrThrowResolver,
    groupByUserAddress: actionResolvers.GroupByUserAddressResolver,
    updateManyUserAddress: actionResolvers.UpdateManyUserAddressResolver,
    updateOneUserAddress: actionResolvers.UpdateOneUserAddressResolver,
    upsertOneUserAddress: actionResolvers.UpsertOneUserAddressResolver
  },
  ProductCategory: {
    aggregateProductCategory: actionResolvers.AggregateProductCategoryResolver,
    createManyProductCategory: actionResolvers.CreateManyProductCategoryResolver,
    createOneProductCategory: actionResolvers.CreateOneProductCategoryResolver,
    deleteManyProductCategory: actionResolvers.DeleteManyProductCategoryResolver,
    deleteOneProductCategory: actionResolvers.DeleteOneProductCategoryResolver,
    findFirstProductCategory: actionResolvers.FindFirstProductCategoryResolver,
    findFirstProductCategoryOrThrow: actionResolvers.FindFirstProductCategoryOrThrowResolver,
    productCategories: actionResolvers.FindManyProductCategoryResolver,
    productCategory: actionResolvers.FindUniqueProductCategoryResolver,
    getProductCategory: actionResolvers.FindUniqueProductCategoryOrThrowResolver,
    groupByProductCategory: actionResolvers.GroupByProductCategoryResolver,
    updateManyProductCategory: actionResolvers.UpdateManyProductCategoryResolver,
    updateOneProductCategory: actionResolvers.UpdateOneProductCategoryResolver,
    upsertOneProductCategory: actionResolvers.UpsertOneProductCategoryResolver
  },
  Promotion: {
    aggregatePromotion: actionResolvers.AggregatePromotionResolver,
    createManyPromotion: actionResolvers.CreateManyPromotionResolver,
    createOnePromotion: actionResolvers.CreateOnePromotionResolver,
    deleteManyPromotion: actionResolvers.DeleteManyPromotionResolver,
    deleteOnePromotion: actionResolvers.DeleteOnePromotionResolver,
    findFirstPromotion: actionResolvers.FindFirstPromotionResolver,
    findFirstPromotionOrThrow: actionResolvers.FindFirstPromotionOrThrowResolver,
    promotions: actionResolvers.FindManyPromotionResolver,
    promotion: actionResolvers.FindUniquePromotionResolver,
    getPromotion: actionResolvers.FindUniquePromotionOrThrowResolver,
    groupByPromotion: actionResolvers.GroupByPromotionResolver,
    updateManyPromotion: actionResolvers.UpdateManyPromotionResolver,
    updateOnePromotion: actionResolvers.UpdateOnePromotionResolver,
    upsertOnePromotion: actionResolvers.UpsertOnePromotionResolver
  },
  PromotionCategory: {
    aggregatePromotionCategory: actionResolvers.AggregatePromotionCategoryResolver,
    createManyPromotionCategory: actionResolvers.CreateManyPromotionCategoryResolver,
    createOnePromotionCategory: actionResolvers.CreateOnePromotionCategoryResolver,
    deleteManyPromotionCategory: actionResolvers.DeleteManyPromotionCategoryResolver,
    deleteOnePromotionCategory: actionResolvers.DeleteOnePromotionCategoryResolver,
    findFirstPromotionCategory: actionResolvers.FindFirstPromotionCategoryResolver,
    findFirstPromotionCategoryOrThrow: actionResolvers.FindFirstPromotionCategoryOrThrowResolver,
    promotionCategories: actionResolvers.FindManyPromotionCategoryResolver,
    promotionCategory: actionResolvers.FindUniquePromotionCategoryResolver,
    getPromotionCategory: actionResolvers.FindUniquePromotionCategoryOrThrowResolver,
    groupByPromotionCategory: actionResolvers.GroupByPromotionCategoryResolver,
    updateManyPromotionCategory: actionResolvers.UpdateManyPromotionCategoryResolver,
    updateOnePromotionCategory: actionResolvers.UpdateOnePromotionCategoryResolver,
    upsertOnePromotionCategory: actionResolvers.UpsertOnePromotionCategoryResolver
  },
  Product: {
    aggregateProduct: actionResolvers.AggregateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    createOneProduct: actionResolvers.CreateOneProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    deleteOneProduct: actionResolvers.DeleteOneProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    findFirstProductOrThrow: actionResolvers.FindFirstProductOrThrowResolver,
    products: actionResolvers.FindManyProductResolver,
    product: actionResolvers.FindUniqueProductResolver,
    getProduct: actionResolvers.FindUniqueProductOrThrowResolver,
    groupByProduct: actionResolvers.GroupByProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    updateOneProduct: actionResolvers.UpdateOneProductResolver,
    upsertOneProduct: actionResolvers.UpsertOneProductResolver
  },
  ProductItem: {
    aggregateProductItem: actionResolvers.AggregateProductItemResolver,
    createManyProductItem: actionResolvers.CreateManyProductItemResolver,
    createOneProductItem: actionResolvers.CreateOneProductItemResolver,
    deleteManyProductItem: actionResolvers.DeleteManyProductItemResolver,
    deleteOneProductItem: actionResolvers.DeleteOneProductItemResolver,
    findFirstProductItem: actionResolvers.FindFirstProductItemResolver,
    findFirstProductItemOrThrow: actionResolvers.FindFirstProductItemOrThrowResolver,
    productItems: actionResolvers.FindManyProductItemResolver,
    productItem: actionResolvers.FindUniqueProductItemResolver,
    getProductItem: actionResolvers.FindUniqueProductItemOrThrowResolver,
    groupByProductItem: actionResolvers.GroupByProductItemResolver,
    updateManyProductItem: actionResolvers.UpdateManyProductItemResolver,
    updateOneProductItem: actionResolvers.UpdateOneProductItemResolver,
    upsertOneProductItem: actionResolvers.UpsertOneProductItemResolver
  },
  Variation: {
    aggregateVariation: actionResolvers.AggregateVariationResolver,
    createManyVariation: actionResolvers.CreateManyVariationResolver,
    createOneVariation: actionResolvers.CreateOneVariationResolver,
    deleteManyVariation: actionResolvers.DeleteManyVariationResolver,
    deleteOneVariation: actionResolvers.DeleteOneVariationResolver,
    findFirstVariation: actionResolvers.FindFirstVariationResolver,
    findFirstVariationOrThrow: actionResolvers.FindFirstVariationOrThrowResolver,
    variations: actionResolvers.FindManyVariationResolver,
    variation: actionResolvers.FindUniqueVariationResolver,
    getVariation: actionResolvers.FindUniqueVariationOrThrowResolver,
    groupByVariation: actionResolvers.GroupByVariationResolver,
    updateManyVariation: actionResolvers.UpdateManyVariationResolver,
    updateOneVariation: actionResolvers.UpdateOneVariationResolver,
    upsertOneVariation: actionResolvers.UpsertOneVariationResolver
  },
  VariationOption: {
    aggregateVariationOption: actionResolvers.AggregateVariationOptionResolver,
    createManyVariationOption: actionResolvers.CreateManyVariationOptionResolver,
    createOneVariationOption: actionResolvers.CreateOneVariationOptionResolver,
    deleteManyVariationOption: actionResolvers.DeleteManyVariationOptionResolver,
    deleteOneVariationOption: actionResolvers.DeleteOneVariationOptionResolver,
    findFirstVariationOption: actionResolvers.FindFirstVariationOptionResolver,
    findFirstVariationOptionOrThrow: actionResolvers.FindFirstVariationOptionOrThrowResolver,
    variationOptions: actionResolvers.FindManyVariationOptionResolver,
    variationOption: actionResolvers.FindUniqueVariationOptionResolver,
    getVariationOption: actionResolvers.FindUniqueVariationOptionOrThrowResolver,
    groupByVariationOption: actionResolvers.GroupByVariationOptionResolver,
    updateManyVariationOption: actionResolvers.UpdateManyVariationOptionResolver,
    updateOneVariationOption: actionResolvers.UpdateOneVariationOptionResolver,
    upsertOneVariationOption: actionResolvers.UpsertOneVariationOptionResolver
  },
  ProductConfiguration: {
    aggregateProductConfiguration: actionResolvers.AggregateProductConfigurationResolver,
    createManyProductConfiguration: actionResolvers.CreateManyProductConfigurationResolver,
    createOneProductConfiguration: actionResolvers.CreateOneProductConfigurationResolver,
    deleteManyProductConfiguration: actionResolvers.DeleteManyProductConfigurationResolver,
    deleteOneProductConfiguration: actionResolvers.DeleteOneProductConfigurationResolver,
    findFirstProductConfiguration: actionResolvers.FindFirstProductConfigurationResolver,
    findFirstProductConfigurationOrThrow: actionResolvers.FindFirstProductConfigurationOrThrowResolver,
    productConfigurations: actionResolvers.FindManyProductConfigurationResolver,
    productConfiguration: actionResolvers.FindUniqueProductConfigurationResolver,
    getProductConfiguration: actionResolvers.FindUniqueProductConfigurationOrThrowResolver,
    groupByProductConfiguration: actionResolvers.GroupByProductConfigurationResolver,
    updateManyProductConfiguration: actionResolvers.UpdateManyProductConfigurationResolver,
    updateOneProductConfiguration: actionResolvers.UpdateOneProductConfigurationResolver,
    upsertOneProductConfiguration: actionResolvers.UpsertOneProductConfigurationResolver
  },
  PaymentType: {
    aggregatePaymentType: actionResolvers.AggregatePaymentTypeResolver,
    createManyPaymentType: actionResolvers.CreateManyPaymentTypeResolver,
    createOnePaymentType: actionResolvers.CreateOnePaymentTypeResolver,
    deleteManyPaymentType: actionResolvers.DeleteManyPaymentTypeResolver,
    deleteOnePaymentType: actionResolvers.DeleteOnePaymentTypeResolver,
    findFirstPaymentType: actionResolvers.FindFirstPaymentTypeResolver,
    findFirstPaymentTypeOrThrow: actionResolvers.FindFirstPaymentTypeOrThrowResolver,
    paymentTypes: actionResolvers.FindManyPaymentTypeResolver,
    paymentType: actionResolvers.FindUniquePaymentTypeResolver,
    getPaymentType: actionResolvers.FindUniquePaymentTypeOrThrowResolver,
    groupByPaymentType: actionResolvers.GroupByPaymentTypeResolver,
    updateManyPaymentType: actionResolvers.UpdateManyPaymentTypeResolver,
    updateOnePaymentType: actionResolvers.UpdateOnePaymentTypeResolver,
    upsertOnePaymentType: actionResolvers.UpsertOnePaymentTypeResolver
  },
  UserPaymentMethod: {
    aggregateUserPaymentMethod: actionResolvers.AggregateUserPaymentMethodResolver,
    createManyUserPaymentMethod: actionResolvers.CreateManyUserPaymentMethodResolver,
    createOneUserPaymentMethod: actionResolvers.CreateOneUserPaymentMethodResolver,
    deleteManyUserPaymentMethod: actionResolvers.DeleteManyUserPaymentMethodResolver,
    deleteOneUserPaymentMethod: actionResolvers.DeleteOneUserPaymentMethodResolver,
    findFirstUserPaymentMethod: actionResolvers.FindFirstUserPaymentMethodResolver,
    findFirstUserPaymentMethodOrThrow: actionResolvers.FindFirstUserPaymentMethodOrThrowResolver,
    userPaymentMethods: actionResolvers.FindManyUserPaymentMethodResolver,
    userPaymentMethod: actionResolvers.FindUniqueUserPaymentMethodResolver,
    getUserPaymentMethod: actionResolvers.FindUniqueUserPaymentMethodOrThrowResolver,
    groupByUserPaymentMethod: actionResolvers.GroupByUserPaymentMethodResolver,
    updateManyUserPaymentMethod: actionResolvers.UpdateManyUserPaymentMethodResolver,
    updateOneUserPaymentMethod: actionResolvers.UpdateOneUserPaymentMethodResolver,
    upsertOneUserPaymentMethod: actionResolvers.UpsertOneUserPaymentMethodResolver
  },
  ShoppingCart: {
    aggregateShoppingCart: actionResolvers.AggregateShoppingCartResolver,
    createManyShoppingCart: actionResolvers.CreateManyShoppingCartResolver,
    createOneShoppingCart: actionResolvers.CreateOneShoppingCartResolver,
    deleteManyShoppingCart: actionResolvers.DeleteManyShoppingCartResolver,
    deleteOneShoppingCart: actionResolvers.DeleteOneShoppingCartResolver,
    findFirstShoppingCart: actionResolvers.FindFirstShoppingCartResolver,
    findFirstShoppingCartOrThrow: actionResolvers.FindFirstShoppingCartOrThrowResolver,
    shoppingCarts: actionResolvers.FindManyShoppingCartResolver,
    shoppingCart: actionResolvers.FindUniqueShoppingCartResolver,
    getShoppingCart: actionResolvers.FindUniqueShoppingCartOrThrowResolver,
    groupByShoppingCart: actionResolvers.GroupByShoppingCartResolver,
    updateManyShoppingCart: actionResolvers.UpdateManyShoppingCartResolver,
    updateOneShoppingCart: actionResolvers.UpdateOneShoppingCartResolver,
    upsertOneShoppingCart: actionResolvers.UpsertOneShoppingCartResolver
  },
  ShoppingCartItem: {
    aggregateShoppingCartItem: actionResolvers.AggregateShoppingCartItemResolver,
    createManyShoppingCartItem: actionResolvers.CreateManyShoppingCartItemResolver,
    createOneShoppingCartItem: actionResolvers.CreateOneShoppingCartItemResolver,
    deleteManyShoppingCartItem: actionResolvers.DeleteManyShoppingCartItemResolver,
    deleteOneShoppingCartItem: actionResolvers.DeleteOneShoppingCartItemResolver,
    findFirstShoppingCartItem: actionResolvers.FindFirstShoppingCartItemResolver,
    findFirstShoppingCartItemOrThrow: actionResolvers.FindFirstShoppingCartItemOrThrowResolver,
    shoppingCartItems: actionResolvers.FindManyShoppingCartItemResolver,
    shoppingCartItem: actionResolvers.FindUniqueShoppingCartItemResolver,
    getShoppingCartItem: actionResolvers.FindUniqueShoppingCartItemOrThrowResolver,
    groupByShoppingCartItem: actionResolvers.GroupByShoppingCartItemResolver,
    updateManyShoppingCartItem: actionResolvers.UpdateManyShoppingCartItemResolver,
    updateOneShoppingCartItem: actionResolvers.UpdateOneShoppingCartItemResolver,
    upsertOneShoppingCartItem: actionResolvers.UpsertOneShoppingCartItemResolver
  },
  ShippingMethod: {
    aggregateShippingMethod: actionResolvers.AggregateShippingMethodResolver,
    createManyShippingMethod: actionResolvers.CreateManyShippingMethodResolver,
    createOneShippingMethod: actionResolvers.CreateOneShippingMethodResolver,
    deleteManyShippingMethod: actionResolvers.DeleteManyShippingMethodResolver,
    deleteOneShippingMethod: actionResolvers.DeleteOneShippingMethodResolver,
    findFirstShippingMethod: actionResolvers.FindFirstShippingMethodResolver,
    findFirstShippingMethodOrThrow: actionResolvers.FindFirstShippingMethodOrThrowResolver,
    shippingMethods: actionResolvers.FindManyShippingMethodResolver,
    shippingMethod: actionResolvers.FindUniqueShippingMethodResolver,
    getShippingMethod: actionResolvers.FindUniqueShippingMethodOrThrowResolver,
    groupByShippingMethod: actionResolvers.GroupByShippingMethodResolver,
    updateManyShippingMethod: actionResolvers.UpdateManyShippingMethodResolver,
    updateOneShippingMethod: actionResolvers.UpdateOneShippingMethodResolver,
    upsertOneShippingMethod: actionResolvers.UpsertOneShippingMethodResolver
  },
  OrderStatus: {
    aggregateOrderStatus: actionResolvers.AggregateOrderStatusResolver,
    createManyOrderStatus: actionResolvers.CreateManyOrderStatusResolver,
    createOneOrderStatus: actionResolvers.CreateOneOrderStatusResolver,
    deleteManyOrderStatus: actionResolvers.DeleteManyOrderStatusResolver,
    deleteOneOrderStatus: actionResolvers.DeleteOneOrderStatusResolver,
    findFirstOrderStatus: actionResolvers.FindFirstOrderStatusResolver,
    findFirstOrderStatusOrThrow: actionResolvers.FindFirstOrderStatusOrThrowResolver,
    orderStatuses: actionResolvers.FindManyOrderStatusResolver,
    orderStatus: actionResolvers.FindUniqueOrderStatusResolver,
    getOrderStatus: actionResolvers.FindUniqueOrderStatusOrThrowResolver,
    groupByOrderStatus: actionResolvers.GroupByOrderStatusResolver,
    updateManyOrderStatus: actionResolvers.UpdateManyOrderStatusResolver,
    updateOneOrderStatus: actionResolvers.UpdateOneOrderStatusResolver,
    upsertOneOrderStatus: actionResolvers.UpsertOneOrderStatusResolver
  },
  ShopOrder: {
    aggregateShopOrder: actionResolvers.AggregateShopOrderResolver,
    createManyShopOrder: actionResolvers.CreateManyShopOrderResolver,
    createOneShopOrder: actionResolvers.CreateOneShopOrderResolver,
    deleteManyShopOrder: actionResolvers.DeleteManyShopOrderResolver,
    deleteOneShopOrder: actionResolvers.DeleteOneShopOrderResolver,
    findFirstShopOrder: actionResolvers.FindFirstShopOrderResolver,
    findFirstShopOrderOrThrow: actionResolvers.FindFirstShopOrderOrThrowResolver,
    shopOrders: actionResolvers.FindManyShopOrderResolver,
    shopOrder: actionResolvers.FindUniqueShopOrderResolver,
    getShopOrder: actionResolvers.FindUniqueShopOrderOrThrowResolver,
    groupByShopOrder: actionResolvers.GroupByShopOrderResolver,
    updateManyShopOrder: actionResolvers.UpdateManyShopOrderResolver,
    updateOneShopOrder: actionResolvers.UpdateOneShopOrderResolver,
    upsertOneShopOrder: actionResolvers.UpsertOneShopOrderResolver
  },
  OrderLine: {
    aggregateOrderLine: actionResolvers.AggregateOrderLineResolver,
    createManyOrderLine: actionResolvers.CreateManyOrderLineResolver,
    createOneOrderLine: actionResolvers.CreateOneOrderLineResolver,
    deleteManyOrderLine: actionResolvers.DeleteManyOrderLineResolver,
    deleteOneOrderLine: actionResolvers.DeleteOneOrderLineResolver,
    findFirstOrderLine: actionResolvers.FindFirstOrderLineResolver,
    findFirstOrderLineOrThrow: actionResolvers.FindFirstOrderLineOrThrowResolver,
    orderLines: actionResolvers.FindManyOrderLineResolver,
    orderLine: actionResolvers.FindUniqueOrderLineResolver,
    getOrderLine: actionResolvers.FindUniqueOrderLineOrThrowResolver,
    groupByOrderLine: actionResolvers.GroupByOrderLineResolver,
    updateManyOrderLine: actionResolvers.UpdateManyOrderLineResolver,
    updateOneOrderLine: actionResolvers.UpdateOneOrderLineResolver,
    upsertOneOrderLine: actionResolvers.UpsertOneOrderLineResolver
  },
  UserReview: {
    aggregateUserReview: actionResolvers.AggregateUserReviewResolver,
    createManyUserReview: actionResolvers.CreateManyUserReviewResolver,
    createOneUserReview: actionResolvers.CreateOneUserReviewResolver,
    deleteManyUserReview: actionResolvers.DeleteManyUserReviewResolver,
    deleteOneUserReview: actionResolvers.DeleteOneUserReviewResolver,
    findFirstUserReview: actionResolvers.FindFirstUserReviewResolver,
    findFirstUserReviewOrThrow: actionResolvers.FindFirstUserReviewOrThrowResolver,
    userReviews: actionResolvers.FindManyUserReviewResolver,
    userReview: actionResolvers.FindUniqueUserReviewResolver,
    getUserReview: actionResolvers.FindUniqueUserReviewOrThrowResolver,
    groupByUserReview: actionResolvers.GroupByUserReviewResolver,
    updateManyUserReview: actionResolvers.UpdateManyUserReviewResolver,
    updateOneUserReview: actionResolvers.UpdateOneUserReviewResolver,
    upsertOneUserReview: actionResolvers.UpsertOneUserReviewResolver
  }
};
const crudResolversInfo = {
  Country: ["aggregateCountry", "createManyCountry", "createOneCountry", "deleteManyCountry", "deleteOneCountry", "findFirstCountry", "findFirstCountryOrThrow", "countries", "country", "getCountry", "groupByCountry", "updateManyCountry", "updateOneCountry", "upsertOneCountry"],
  Address: ["aggregateAddress", "createManyAddress", "createOneAddress", "deleteManyAddress", "deleteOneAddress", "findFirstAddress", "findFirstAddressOrThrow", "addresses", "address", "getAddress", "groupByAddress", "updateManyAddress", "updateOneAddress", "upsertOneAddress"],
  SiteUser: ["aggregateSiteUser", "createManySiteUser", "createOneSiteUser", "deleteManySiteUser", "deleteOneSiteUser", "findFirstSiteUser", "findFirstSiteUserOrThrow", "siteUsers", "siteUser", "getSiteUser", "groupBySiteUser", "updateManySiteUser", "updateOneSiteUser", "upsertOneSiteUser"],
  UserAddress: ["aggregateUserAddress", "createManyUserAddress", "createOneUserAddress", "deleteManyUserAddress", "deleteOneUserAddress", "findFirstUserAddress", "findFirstUserAddressOrThrow", "userAddresses", "userAddress", "getUserAddress", "groupByUserAddress", "updateManyUserAddress", "updateOneUserAddress", "upsertOneUserAddress"],
  ProductCategory: ["aggregateProductCategory", "createManyProductCategory", "createOneProductCategory", "deleteManyProductCategory", "deleteOneProductCategory", "findFirstProductCategory", "findFirstProductCategoryOrThrow", "productCategories", "productCategory", "getProductCategory", "groupByProductCategory", "updateManyProductCategory", "updateOneProductCategory", "upsertOneProductCategory"],
  Promotion: ["aggregatePromotion", "createManyPromotion", "createOnePromotion", "deleteManyPromotion", "deleteOnePromotion", "findFirstPromotion", "findFirstPromotionOrThrow", "promotions", "promotion", "getPromotion", "groupByPromotion", "updateManyPromotion", "updateOnePromotion", "upsertOnePromotion"],
  PromotionCategory: ["aggregatePromotionCategory", "createManyPromotionCategory", "createOnePromotionCategory", "deleteManyPromotionCategory", "deleteOnePromotionCategory", "findFirstPromotionCategory", "findFirstPromotionCategoryOrThrow", "promotionCategories", "promotionCategory", "getPromotionCategory", "groupByPromotionCategory", "updateManyPromotionCategory", "updateOnePromotionCategory", "upsertOnePromotionCategory"],
  Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
  ProductItem: ["aggregateProductItem", "createManyProductItem", "createOneProductItem", "deleteManyProductItem", "deleteOneProductItem", "findFirstProductItem", "findFirstProductItemOrThrow", "productItems", "productItem", "getProductItem", "groupByProductItem", "updateManyProductItem", "updateOneProductItem", "upsertOneProductItem"],
  Variation: ["aggregateVariation", "createManyVariation", "createOneVariation", "deleteManyVariation", "deleteOneVariation", "findFirstVariation", "findFirstVariationOrThrow", "variations", "variation", "getVariation", "groupByVariation", "updateManyVariation", "updateOneVariation", "upsertOneVariation"],
  VariationOption: ["aggregateVariationOption", "createManyVariationOption", "createOneVariationOption", "deleteManyVariationOption", "deleteOneVariationOption", "findFirstVariationOption", "findFirstVariationOptionOrThrow", "variationOptions", "variationOption", "getVariationOption", "groupByVariationOption", "updateManyVariationOption", "updateOneVariationOption", "upsertOneVariationOption"],
  ProductConfiguration: ["aggregateProductConfiguration", "createManyProductConfiguration", "createOneProductConfiguration", "deleteManyProductConfiguration", "deleteOneProductConfiguration", "findFirstProductConfiguration", "findFirstProductConfigurationOrThrow", "productConfigurations", "productConfiguration", "getProductConfiguration", "groupByProductConfiguration", "updateManyProductConfiguration", "updateOneProductConfiguration", "upsertOneProductConfiguration"],
  PaymentType: ["aggregatePaymentType", "createManyPaymentType", "createOnePaymentType", "deleteManyPaymentType", "deleteOnePaymentType", "findFirstPaymentType", "findFirstPaymentTypeOrThrow", "paymentTypes", "paymentType", "getPaymentType", "groupByPaymentType", "updateManyPaymentType", "updateOnePaymentType", "upsertOnePaymentType"],
  UserPaymentMethod: ["aggregateUserPaymentMethod", "createManyUserPaymentMethod", "createOneUserPaymentMethod", "deleteManyUserPaymentMethod", "deleteOneUserPaymentMethod", "findFirstUserPaymentMethod", "findFirstUserPaymentMethodOrThrow", "userPaymentMethods", "userPaymentMethod", "getUserPaymentMethod", "groupByUserPaymentMethod", "updateManyUserPaymentMethod", "updateOneUserPaymentMethod", "upsertOneUserPaymentMethod"],
  ShoppingCart: ["aggregateShoppingCart", "createManyShoppingCart", "createOneShoppingCart", "deleteManyShoppingCart", "deleteOneShoppingCart", "findFirstShoppingCart", "findFirstShoppingCartOrThrow", "shoppingCarts", "shoppingCart", "getShoppingCart", "groupByShoppingCart", "updateManyShoppingCart", "updateOneShoppingCart", "upsertOneShoppingCart"],
  ShoppingCartItem: ["aggregateShoppingCartItem", "createManyShoppingCartItem", "createOneShoppingCartItem", "deleteManyShoppingCartItem", "deleteOneShoppingCartItem", "findFirstShoppingCartItem", "findFirstShoppingCartItemOrThrow", "shoppingCartItems", "shoppingCartItem", "getShoppingCartItem", "groupByShoppingCartItem", "updateManyShoppingCartItem", "updateOneShoppingCartItem", "upsertOneShoppingCartItem"],
  ShippingMethod: ["aggregateShippingMethod", "createManyShippingMethod", "createOneShippingMethod", "deleteManyShippingMethod", "deleteOneShippingMethod", "findFirstShippingMethod", "findFirstShippingMethodOrThrow", "shippingMethods", "shippingMethod", "getShippingMethod", "groupByShippingMethod", "updateManyShippingMethod", "updateOneShippingMethod", "upsertOneShippingMethod"],
  OrderStatus: ["aggregateOrderStatus", "createManyOrderStatus", "createOneOrderStatus", "deleteManyOrderStatus", "deleteOneOrderStatus", "findFirstOrderStatus", "findFirstOrderStatusOrThrow", "orderStatuses", "orderStatus", "getOrderStatus", "groupByOrderStatus", "updateManyOrderStatus", "updateOneOrderStatus", "upsertOneOrderStatus"],
  ShopOrder: ["aggregateShopOrder", "createManyShopOrder", "createOneShopOrder", "deleteManyShopOrder", "deleteOneShopOrder", "findFirstShopOrder", "findFirstShopOrderOrThrow", "shopOrders", "shopOrder", "getShopOrder", "groupByShopOrder", "updateManyShopOrder", "updateOneShopOrder", "upsertOneShopOrder"],
  OrderLine: ["aggregateOrderLine", "createManyOrderLine", "createOneOrderLine", "deleteManyOrderLine", "deleteOneOrderLine", "findFirstOrderLine", "findFirstOrderLineOrThrow", "orderLines", "orderLine", "getOrderLine", "groupByOrderLine", "updateManyOrderLine", "updateOneOrderLine", "upsertOneOrderLine"],
  UserReview: ["aggregateUserReview", "createManyUserReview", "createOneUserReview", "deleteManyUserReview", "deleteOneUserReview", "findFirstUserReview", "findFirstUserReviewOrThrow", "userReviews", "userReview", "getUserReview", "groupByUserReview", "updateManyUserReview", "updateOneUserReview", "upsertOneUserReview"]
};
const argsInfo = {
  AggregateCountryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCountryArgs: ["data", "skipDuplicates"],
  CreateOneCountryArgs: ["data"],
  DeleteManyCountryArgs: ["where"],
  DeleteOneCountryArgs: ["where"],
  FindFirstCountryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCountryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCountryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCountryArgs: ["where"],
  FindUniqueCountryOrThrowArgs: ["where"],
  GroupByCountryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCountryArgs: ["data", "where"],
  UpdateOneCountryArgs: ["data", "where"],
  UpsertOneCountryArgs: ["where", "create", "update"],
  AggregateAddressArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAddressArgs: ["data", "skipDuplicates"],
  CreateOneAddressArgs: ["data"],
  DeleteManyAddressArgs: ["where"],
  DeleteOneAddressArgs: ["where"],
  FindFirstAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAddressOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAddressArgs: ["where"],
  FindUniqueAddressOrThrowArgs: ["where"],
  GroupByAddressArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAddressArgs: ["data", "where"],
  UpdateOneAddressArgs: ["data", "where"],
  UpsertOneAddressArgs: ["where", "create", "update"],
  AggregateSiteUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySiteUserArgs: ["data", "skipDuplicates"],
  CreateOneSiteUserArgs: ["data"],
  DeleteManySiteUserArgs: ["where"],
  DeleteOneSiteUserArgs: ["where"],
  FindFirstSiteUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSiteUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySiteUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSiteUserArgs: ["where"],
  FindUniqueSiteUserOrThrowArgs: ["where"],
  GroupBySiteUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySiteUserArgs: ["data", "where"],
  UpdateOneSiteUserArgs: ["data", "where"],
  UpsertOneSiteUserArgs: ["where", "create", "update"],
  AggregateUserAddressArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserAddressArgs: ["data", "skipDuplicates"],
  CreateOneUserAddressArgs: ["data"],
  DeleteManyUserAddressArgs: ["where"],
  DeleteOneUserAddressArgs: ["where"],
  FindFirstUserAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserAddressOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserAddressArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserAddressArgs: ["where"],
  FindUniqueUserAddressOrThrowArgs: ["where"],
  GroupByUserAddressArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserAddressArgs: ["data", "where"],
  UpdateOneUserAddressArgs: ["data", "where"],
  UpsertOneUserAddressArgs: ["where", "create", "update"],
  AggregateProductCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductCategoryArgs: ["data", "skipDuplicates"],
  CreateOneProductCategoryArgs: ["data"],
  DeleteManyProductCategoryArgs: ["where"],
  DeleteOneProductCategoryArgs: ["where"],
  FindFirstProductCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductCategoryArgs: ["where"],
  FindUniqueProductCategoryOrThrowArgs: ["where"],
  GroupByProductCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductCategoryArgs: ["data", "where"],
  UpdateOneProductCategoryArgs: ["data", "where"],
  UpsertOneProductCategoryArgs: ["where", "create", "update"],
  AggregatePromotionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPromotionArgs: ["data", "skipDuplicates"],
  CreateOnePromotionArgs: ["data"],
  DeleteManyPromotionArgs: ["where"],
  DeleteOnePromotionArgs: ["where"],
  FindFirstPromotionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPromotionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPromotionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePromotionArgs: ["where"],
  FindUniquePromotionOrThrowArgs: ["where"],
  GroupByPromotionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPromotionArgs: ["data", "where"],
  UpdateOnePromotionArgs: ["data", "where"],
  UpsertOnePromotionArgs: ["where", "create", "update"],
  AggregatePromotionCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPromotionCategoryArgs: ["data", "skipDuplicates"],
  CreateOnePromotionCategoryArgs: ["data"],
  DeleteManyPromotionCategoryArgs: ["where"],
  DeleteOnePromotionCategoryArgs: ["where"],
  FindFirstPromotionCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPromotionCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPromotionCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePromotionCategoryArgs: ["where"],
  FindUniquePromotionCategoryOrThrowArgs: ["where"],
  GroupByPromotionCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPromotionCategoryArgs: ["data", "where"],
  UpdateOnePromotionCategoryArgs: ["data", "where"],
  UpsertOnePromotionCategoryArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  CreateOneProductArgs: ["data"],
  DeleteManyProductArgs: ["where"],
  DeleteOneProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductArgs: ["where"],
  FindUniqueProductOrThrowArgs: ["where"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductArgs: ["data", "where"],
  UpdateOneProductArgs: ["data", "where"],
  UpsertOneProductArgs: ["where", "create", "update"],
  AggregateProductItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductItemArgs: ["data", "skipDuplicates"],
  CreateOneProductItemArgs: ["data"],
  DeleteManyProductItemArgs: ["where"],
  DeleteOneProductItemArgs: ["where"],
  FindFirstProductItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductItemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductItemArgs: ["where"],
  FindUniqueProductItemOrThrowArgs: ["where"],
  GroupByProductItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductItemArgs: ["data", "where"],
  UpdateOneProductItemArgs: ["data", "where"],
  UpsertOneProductItemArgs: ["where", "create", "update"],
  AggregateVariationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVariationArgs: ["data", "skipDuplicates"],
  CreateOneVariationArgs: ["data"],
  DeleteManyVariationArgs: ["where"],
  DeleteOneVariationArgs: ["where"],
  FindFirstVariationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVariationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVariationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVariationArgs: ["where"],
  FindUniqueVariationOrThrowArgs: ["where"],
  GroupByVariationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVariationArgs: ["data", "where"],
  UpdateOneVariationArgs: ["data", "where"],
  UpsertOneVariationArgs: ["where", "create", "update"],
  AggregateVariationOptionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyVariationOptionArgs: ["data", "skipDuplicates"],
  CreateOneVariationOptionArgs: ["data"],
  DeleteManyVariationOptionArgs: ["where"],
  DeleteOneVariationOptionArgs: ["where"],
  FindFirstVariationOptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstVariationOptionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyVariationOptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueVariationOptionArgs: ["where"],
  FindUniqueVariationOptionOrThrowArgs: ["where"],
  GroupByVariationOptionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyVariationOptionArgs: ["data", "where"],
  UpdateOneVariationOptionArgs: ["data", "where"],
  UpsertOneVariationOptionArgs: ["where", "create", "update"],
  AggregateProductConfigurationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductConfigurationArgs: ["data", "skipDuplicates"],
  CreateOneProductConfigurationArgs: ["data"],
  DeleteManyProductConfigurationArgs: ["where"],
  DeleteOneProductConfigurationArgs: ["where"],
  FindFirstProductConfigurationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProductConfigurationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductConfigurationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductConfigurationArgs: ["where"],
  FindUniqueProductConfigurationOrThrowArgs: ["where"],
  GroupByProductConfigurationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductConfigurationArgs: ["data", "where"],
  UpdateOneProductConfigurationArgs: ["data", "where"],
  UpsertOneProductConfigurationArgs: ["where", "create", "update"],
  AggregatePaymentTypeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPaymentTypeArgs: ["data", "skipDuplicates"],
  CreateOnePaymentTypeArgs: ["data"],
  DeleteManyPaymentTypeArgs: ["where"],
  DeleteOnePaymentTypeArgs: ["where"],
  FindFirstPaymentTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPaymentTypeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPaymentTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePaymentTypeArgs: ["where"],
  FindUniquePaymentTypeOrThrowArgs: ["where"],
  GroupByPaymentTypeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPaymentTypeArgs: ["data", "where"],
  UpdateOnePaymentTypeArgs: ["data", "where"],
  UpsertOnePaymentTypeArgs: ["where", "create", "update"],
  AggregateUserPaymentMethodArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserPaymentMethodArgs: ["data", "skipDuplicates"],
  CreateOneUserPaymentMethodArgs: ["data"],
  DeleteManyUserPaymentMethodArgs: ["where"],
  DeleteOneUserPaymentMethodArgs: ["where"],
  FindFirstUserPaymentMethodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserPaymentMethodOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserPaymentMethodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserPaymentMethodArgs: ["where"],
  FindUniqueUserPaymentMethodOrThrowArgs: ["where"],
  GroupByUserPaymentMethodArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserPaymentMethodArgs: ["data", "where"],
  UpdateOneUserPaymentMethodArgs: ["data", "where"],
  UpsertOneUserPaymentMethodArgs: ["where", "create", "update"],
  AggregateShoppingCartArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShoppingCartArgs: ["data", "skipDuplicates"],
  CreateOneShoppingCartArgs: ["data"],
  DeleteManyShoppingCartArgs: ["where"],
  DeleteOneShoppingCartArgs: ["where"],
  FindFirstShoppingCartArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstShoppingCartOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShoppingCartArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShoppingCartArgs: ["where"],
  FindUniqueShoppingCartOrThrowArgs: ["where"],
  GroupByShoppingCartArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShoppingCartArgs: ["data", "where"],
  UpdateOneShoppingCartArgs: ["data", "where"],
  UpsertOneShoppingCartArgs: ["where", "create", "update"],
  AggregateShoppingCartItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShoppingCartItemArgs: ["data", "skipDuplicates"],
  CreateOneShoppingCartItemArgs: ["data"],
  DeleteManyShoppingCartItemArgs: ["where"],
  DeleteOneShoppingCartItemArgs: ["where"],
  FindFirstShoppingCartItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstShoppingCartItemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShoppingCartItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShoppingCartItemArgs: ["where"],
  FindUniqueShoppingCartItemOrThrowArgs: ["where"],
  GroupByShoppingCartItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShoppingCartItemArgs: ["data", "where"],
  UpdateOneShoppingCartItemArgs: ["data", "where"],
  UpsertOneShoppingCartItemArgs: ["where", "create", "update"],
  AggregateShippingMethodArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShippingMethodArgs: ["data", "skipDuplicates"],
  CreateOneShippingMethodArgs: ["data"],
  DeleteManyShippingMethodArgs: ["where"],
  DeleteOneShippingMethodArgs: ["where"],
  FindFirstShippingMethodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstShippingMethodOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShippingMethodArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShippingMethodArgs: ["where"],
  FindUniqueShippingMethodOrThrowArgs: ["where"],
  GroupByShippingMethodArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShippingMethodArgs: ["data", "where"],
  UpdateOneShippingMethodArgs: ["data", "where"],
  UpsertOneShippingMethodArgs: ["where", "create", "update"],
  AggregateOrderStatusArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrderStatusArgs: ["data", "skipDuplicates"],
  CreateOneOrderStatusArgs: ["data"],
  DeleteManyOrderStatusArgs: ["where"],
  DeleteOneOrderStatusArgs: ["where"],
  FindFirstOrderStatusArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOrderStatusOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderStatusArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrderStatusArgs: ["where"],
  FindUniqueOrderStatusOrThrowArgs: ["where"],
  GroupByOrderStatusArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrderStatusArgs: ["data", "where"],
  UpdateOneOrderStatusArgs: ["data", "where"],
  UpsertOneOrderStatusArgs: ["where", "create", "update"],
  AggregateShopOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShopOrderArgs: ["data", "skipDuplicates"],
  CreateOneShopOrderArgs: ["data"],
  DeleteManyShopOrderArgs: ["where"],
  DeleteOneShopOrderArgs: ["where"],
  FindFirstShopOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstShopOrderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShopOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShopOrderArgs: ["where"],
  FindUniqueShopOrderOrThrowArgs: ["where"],
  GroupByShopOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShopOrderArgs: ["data", "where"],
  UpdateOneShopOrderArgs: ["data", "where"],
  UpsertOneShopOrderArgs: ["where", "create", "update"],
  AggregateOrderLineArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrderLineArgs: ["data", "skipDuplicates"],
  CreateOneOrderLineArgs: ["data"],
  DeleteManyOrderLineArgs: ["where"],
  DeleteOneOrderLineArgs: ["where"],
  FindFirstOrderLineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOrderLineOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderLineArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrderLineArgs: ["where"],
  FindUniqueOrderLineOrThrowArgs: ["where"],
  GroupByOrderLineArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrderLineArgs: ["data", "where"],
  UpdateOneOrderLineArgs: ["data", "where"],
  UpsertOneOrderLineArgs: ["where", "create", "update"],
  AggregateUserReviewArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserReviewArgs: ["data", "skipDuplicates"],
  CreateOneUserReviewArgs: ["data"],
  DeleteManyUserReviewArgs: ["where"],
  DeleteOneUserReviewArgs: ["where"],
  FindFirstUserReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserReviewOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserReviewArgs: ["where"],
  FindUniqueUserReviewOrThrowArgs: ["where"],
  GroupByUserReviewArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserReviewArgs: ["data", "where"],
  UpdateOneUserReviewArgs: ["data", "where"],
  UpsertOneUserReviewArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Country: ["id", "country_name"],
  Address: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  SiteUser: ["id", "email_address", "phone_number", "password"],
  UserAddress: ["user_id", "address_id", "is_default"],
  ProductCategory: ["id", "parent_category_id", "category_name"],
  Promotion: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionCategory: ["category_id", "promotion_id"],
  Product: ["id", "category_id", "name", "description", "product_image"],
  ProductItem: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  Variation: ["id", "category_id", "name"],
  VariationOption: ["id", "variation_id", "value"],
  ProductConfiguration: ["product_item_id", "variation_option_id"],
  PaymentType: ["id", "value"],
  UserPaymentMethod: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  ShoppingCart: ["id", "user_id"],
  ShoppingCartItem: ["id", "cart_id", "product_item_id", "qty"],
  ShippingMethod: ["id", "name", "price"],
  OrderStatus: ["id", "status"],
  ShopOrder: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  OrderLine: ["id", "product_item_id", "order_id", "qty", "price"],
  UserReview: ["id", "user_id", "ordered_product_id", "rating_value", "comment"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCountry: ["_count", "_min", "_max"],
  CountryGroupBy: ["id", "country_name", "_count", "_min", "_max"],
  AggregateAddress: ["_count", "_min", "_max"],
  AddressGroupBy: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id", "_count", "_min", "_max"],
  AggregateSiteUser: ["_count", "_min", "_max"],
  SiteUserGroupBy: ["id", "email_address", "phone_number", "password", "_count", "_min", "_max"],
  AggregateUserAddress: ["_count", "_avg", "_sum", "_min", "_max"],
  UserAddressGroupBy: ["user_id", "address_id", "is_default", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProductCategory: ["_count", "_min", "_max"],
  ProductCategoryGroupBy: ["id", "parent_category_id", "category_name", "_count", "_min", "_max"],
  AggregatePromotion: ["_count", "_avg", "_sum", "_min", "_max"],
  PromotionGroupBy: ["id", "name", "description", "discount_rate", "start_date", "end_date", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePromotionCategory: ["_count", "_min", "_max"],
  PromotionCategoryGroupBy: ["category_id", "promotion_id", "_count", "_min", "_max"],
  AggregateProduct: ["_count", "_min", "_max"],
  ProductGroupBy: ["id", "category_id", "name", "description", "product_image", "_count", "_min", "_max"],
  AggregateProductItem: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductItemGroupBy: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateVariation: ["_count", "_min", "_max"],
  VariationGroupBy: ["id", "category_id", "name", "_count", "_min", "_max"],
  AggregateVariationOption: ["_count", "_min", "_max"],
  VariationOptionGroupBy: ["id", "variation_id", "value", "_count", "_min", "_max"],
  AggregateProductConfiguration: ["_count", "_min", "_max"],
  ProductConfigurationGroupBy: ["product_item_id", "variation_option_id", "_count", "_min", "_max"],
  AggregatePaymentType: ["_count", "_min", "_max"],
  PaymentTypeGroupBy: ["id", "value", "_count", "_min", "_max"],
  AggregateUserPaymentMethod: ["_count", "_avg", "_sum", "_min", "_max"],
  UserPaymentMethodGroupBy: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateShoppingCart: ["_count", "_min", "_max"],
  ShoppingCartGroupBy: ["id", "user_id", "_count", "_min", "_max"],
  AggregateShoppingCartItem: ["_count", "_avg", "_sum", "_min", "_max"],
  ShoppingCartItemGroupBy: ["id", "cart_id", "product_item_id", "qty", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateShippingMethod: ["_count", "_avg", "_sum", "_min", "_max"],
  ShippingMethodGroupBy: ["id", "name", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrderStatus: ["_count", "_min", "_max"],
  OrderStatusGroupBy: ["id", "status", "_count", "_min", "_max"],
  AggregateShopOrder: ["_count", "_avg", "_sum", "_min", "_max"],
  ShopOrderGroupBy: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrderLine: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderLineGroupBy: ["id", "product_item_id", "order_id", "qty", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUserReview: ["_count", "_avg", "_sum", "_min", "_max"],
  UserReviewGroupBy: ["id", "user_id", "ordered_product_id", "rating_value", "comment", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CountryCountAggregate: ["id", "country_name", "_all"],
  CountryMinAggregate: ["id", "country_name"],
  CountryMaxAggregate: ["id", "country_name"],
  AddressCountAggregate: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id", "_all"],
  AddressMinAggregate: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressMaxAggregate: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  SiteUserCountAggregate: ["id", "email_address", "phone_number", "password", "_all"],
  SiteUserMinAggregate: ["id", "email_address", "phone_number", "password"],
  SiteUserMaxAggregate: ["id", "email_address", "phone_number", "password"],
  UserAddressCountAggregate: ["user_id", "address_id", "is_default", "_all"],
  UserAddressAvgAggregate: ["is_default"],
  UserAddressSumAggregate: ["is_default"],
  UserAddressMinAggregate: ["user_id", "address_id", "is_default"],
  UserAddressMaxAggregate: ["user_id", "address_id", "is_default"],
  ProductCategoryCountAggregate: ["id", "parent_category_id", "category_name", "_all"],
  ProductCategoryMinAggregate: ["id", "parent_category_id", "category_name"],
  ProductCategoryMaxAggregate: ["id", "parent_category_id", "category_name"],
  PromotionCountAggregate: ["id", "name", "description", "discount_rate", "start_date", "end_date", "_all"],
  PromotionAvgAggregate: ["discount_rate"],
  PromotionSumAggregate: ["discount_rate"],
  PromotionMinAggregate: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionMaxAggregate: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionCategoryCountAggregate: ["category_id", "promotion_id", "_all"],
  PromotionCategoryMinAggregate: ["category_id", "promotion_id"],
  PromotionCategoryMaxAggregate: ["category_id", "promotion_id"],
  ProductCountAggregate: ["id", "category_id", "name", "description", "product_image", "_all"],
  ProductMinAggregate: ["id", "category_id", "name", "description", "product_image"],
  ProductMaxAggregate: ["id", "category_id", "name", "description", "product_image"],
  ProductItemCountAggregate: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price", "_all"],
  ProductItemAvgAggregate: ["qty_in_stock", "price"],
  ProductItemSumAggregate: ["qty_in_stock", "price"],
  ProductItemMinAggregate: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemMaxAggregate: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  VariationCountAggregate: ["id", "category_id", "name", "_all"],
  VariationMinAggregate: ["id", "category_id", "name"],
  VariationMaxAggregate: ["id", "category_id", "name"],
  VariationOptionCountAggregate: ["id", "variation_id", "value", "_all"],
  VariationOptionMinAggregate: ["id", "variation_id", "value"],
  VariationOptionMaxAggregate: ["id", "variation_id", "value"],
  ProductConfigurationCountAggregate: ["product_item_id", "variation_option_id", "_all"],
  ProductConfigurationMinAggregate: ["product_item_id", "variation_option_id"],
  ProductConfigurationMaxAggregate: ["product_item_id", "variation_option_id"],
  PaymentTypeCountAggregate: ["id", "value", "_all"],
  PaymentTypeMinAggregate: ["id", "value"],
  PaymentTypeMaxAggregate: ["id", "value"],
  UserPaymentMethodCountAggregate: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default", "_all"],
  UserPaymentMethodAvgAggregate: ["is_default"],
  UserPaymentMethodSumAggregate: ["is_default"],
  UserPaymentMethodMinAggregate: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodMaxAggregate: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  ShoppingCartCountAggregate: ["id", "user_id", "_all"],
  ShoppingCartMinAggregate: ["id", "user_id"],
  ShoppingCartMaxAggregate: ["id", "user_id"],
  ShoppingCartItemCountAggregate: ["id", "cart_id", "product_item_id", "qty", "_all"],
  ShoppingCartItemAvgAggregate: ["qty"],
  ShoppingCartItemSumAggregate: ["qty"],
  ShoppingCartItemMinAggregate: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemMaxAggregate: ["id", "cart_id", "product_item_id", "qty"],
  ShippingMethodCountAggregate: ["id", "name", "price", "_all"],
  ShippingMethodAvgAggregate: ["price"],
  ShippingMethodSumAggregate: ["price"],
  ShippingMethodMinAggregate: ["id", "name", "price"],
  ShippingMethodMaxAggregate: ["id", "name", "price"],
  OrderStatusCountAggregate: ["id", "status", "_all"],
  OrderStatusMinAggregate: ["id", "status"],
  OrderStatusMaxAggregate: ["id", "status"],
  ShopOrderCountAggregate: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status", "_all"],
  ShopOrderAvgAggregate: ["shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderSumAggregate: ["shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderMinAggregate: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderMaxAggregate: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  OrderLineCountAggregate: ["id", "product_item_id", "order_id", "qty", "price", "_all"],
  OrderLineAvgAggregate: ["qty", "price"],
  OrderLineSumAggregate: ["qty", "price"],
  OrderLineMinAggregate: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineMaxAggregate: ["id", "product_item_id", "order_id", "qty", "price"],
  UserReviewCountAggregate: ["id", "user_id", "ordered_product_id", "rating_value", "comment", "_all"],
  UserReviewAvgAggregate: ["rating_value"],
  UserReviewSumAggregate: ["rating_value"],
  UserReviewMinAggregate: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewMaxAggregate: ["id", "user_id", "ordered_product_id", "rating_value", "comment"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CountryWhereInput: ["AND", "OR", "NOT", "id", "country_name"],
  CountryOrderByWithRelationInput: ["id", "country_name"],
  CountryWhereUniqueInput: ["id"],
  CountryOrderByWithAggregationInput: ["id", "country_name", "_count", "_max", "_min"],
  CountryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "country_name"],
  AddressWhereInput: ["AND", "OR", "NOT", "id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressOrderByWithRelationInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressWhereUniqueInput: ["id"],
  AddressOrderByWithAggregationInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id", "_count", "_max", "_min"],
  AddressScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  SiteUserWhereInput: ["AND", "OR", "NOT", "id", "email_address", "phone_number", "password"],
  SiteUserOrderByWithRelationInput: ["id", "email_address", "phone_number", "password"],
  SiteUserWhereUniqueInput: ["id"],
  SiteUserOrderByWithAggregationInput: ["id", "email_address", "phone_number", "password", "_count", "_max", "_min"],
  SiteUserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email_address", "phone_number", "password"],
  UserAddressWhereInput: ["AND", "OR", "NOT", "user_id", "address_id", "is_default"],
  UserAddressOrderByWithRelationInput: ["user_id", "address_id", "is_default"],
  UserAddressWhereUniqueInput: ["user_id_address_id"],
  UserAddressOrderByWithAggregationInput: ["user_id", "address_id", "is_default", "_count", "_avg", "_max", "_min", "_sum"],
  UserAddressScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "user_id", "address_id", "is_default"],
  ProductCategoryWhereInput: ["AND", "OR", "NOT", "id", "parent_category_id", "category_name"],
  ProductCategoryOrderByWithRelationInput: ["id", "parent_category_id", "category_name"],
  ProductCategoryWhereUniqueInput: ["id"],
  ProductCategoryOrderByWithAggregationInput: ["id", "parent_category_id", "category_name", "_count", "_max", "_min"],
  ProductCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "parent_category_id", "category_name"],
  PromotionWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionOrderByWithRelationInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionWhereUniqueInput: ["id"],
  PromotionOrderByWithAggregationInput: ["id", "name", "description", "discount_rate", "start_date", "end_date", "_count", "_avg", "_max", "_min", "_sum"],
  PromotionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionCategoryWhereInput: ["AND", "OR", "NOT", "category_id", "promotion_id"],
  PromotionCategoryOrderByWithRelationInput: ["category_id", "promotion_id"],
  PromotionCategoryWhereUniqueInput: ["category_id_promotion_id"],
  PromotionCategoryOrderByWithAggregationInput: ["category_id", "promotion_id", "_count", "_max", "_min"],
  PromotionCategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "category_id", "promotion_id"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "category_id", "name", "description", "product_image"],
  ProductOrderByWithRelationInput: ["id", "category_id", "name", "description", "product_image"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "category_id", "name", "description", "product_image", "_count", "_max", "_min"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "category_id", "name", "description", "product_image"],
  ProductItemWhereInput: ["AND", "OR", "NOT", "id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemOrderByWithRelationInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemWhereUniqueInput: ["id"],
  ProductItemOrderByWithAggregationInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price", "_count", "_avg", "_max", "_min", "_sum"],
  ProductItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  VariationWhereInput: ["AND", "OR", "NOT", "id", "category_id", "name"],
  VariationOrderByWithRelationInput: ["id", "category_id", "name"],
  VariationWhereUniqueInput: ["id"],
  VariationOrderByWithAggregationInput: ["id", "category_id", "name", "_count", "_max", "_min"],
  VariationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "category_id", "name"],
  VariationOptionWhereInput: ["AND", "OR", "NOT", "id", "variation_id", "value"],
  VariationOptionOrderByWithRelationInput: ["id", "variation_id", "value"],
  VariationOptionWhereUniqueInput: ["id"],
  VariationOptionOrderByWithAggregationInput: ["id", "variation_id", "value", "_count", "_max", "_min"],
  VariationOptionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "variation_id", "value"],
  ProductConfigurationWhereInput: ["AND", "OR", "NOT", "product_item_id", "variation_option_id"],
  ProductConfigurationOrderByWithRelationInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationWhereUniqueInput: ["product_item_id_variation_option_id"],
  ProductConfigurationOrderByWithAggregationInput: ["product_item_id", "variation_option_id", "_count", "_max", "_min"],
  ProductConfigurationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "product_item_id", "variation_option_id"],
  PaymentTypeWhereInput: ["AND", "OR", "NOT", "id", "value"],
  PaymentTypeOrderByWithRelationInput: ["id", "value"],
  PaymentTypeWhereUniqueInput: ["id"],
  PaymentTypeOrderByWithAggregationInput: ["id", "value", "_count", "_max", "_min"],
  PaymentTypeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "value"],
  UserPaymentMethodWhereInput: ["AND", "OR", "NOT", "id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodOrderByWithRelationInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodWhereUniqueInput: ["id"],
  UserPaymentMethodOrderByWithAggregationInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default", "_count", "_avg", "_max", "_min", "_sum"],
  UserPaymentMethodScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  ShoppingCartWhereInput: ["AND", "OR", "NOT", "id", "user_id"],
  ShoppingCartOrderByWithRelationInput: ["id", "user_id"],
  ShoppingCartWhereUniqueInput: ["id"],
  ShoppingCartOrderByWithAggregationInput: ["id", "user_id", "_count", "_max", "_min"],
  ShoppingCartScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id"],
  ShoppingCartItemWhereInput: ["AND", "OR", "NOT", "id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemOrderByWithRelationInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemWhereUniqueInput: ["id"],
  ShoppingCartItemOrderByWithAggregationInput: ["id", "cart_id", "product_item_id", "qty", "_count", "_avg", "_max", "_min", "_sum"],
  ShoppingCartItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "cart_id", "product_item_id", "qty"],
  ShippingMethodWhereInput: ["AND", "OR", "NOT", "id", "name", "price"],
  ShippingMethodOrderByWithRelationInput: ["id", "name", "price"],
  ShippingMethodWhereUniqueInput: ["id"],
  ShippingMethodOrderByWithAggregationInput: ["id", "name", "price", "_count", "_avg", "_max", "_min", "_sum"],
  ShippingMethodScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "price"],
  OrderStatusWhereInput: ["AND", "OR", "NOT", "id", "status"],
  OrderStatusOrderByWithRelationInput: ["id", "status"],
  OrderStatusWhereUniqueInput: ["id"],
  OrderStatusOrderByWithAggregationInput: ["id", "status", "_count", "_max", "_min"],
  OrderStatusScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "status"],
  ShopOrderWhereInput: ["AND", "OR", "NOT", "id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderOrderByWithRelationInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderWhereUniqueInput: ["id"],
  ShopOrderOrderByWithAggregationInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status", "_count", "_avg", "_max", "_min", "_sum"],
  ShopOrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  OrderLineWhereInput: ["AND", "OR", "NOT", "id", "product_item_id", "order_id", "qty", "price"],
  OrderLineOrderByWithRelationInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineWhereUniqueInput: ["id"],
  OrderLineOrderByWithAggregationInput: ["id", "product_item_id", "order_id", "qty", "price", "_count", "_avg", "_max", "_min", "_sum"],
  OrderLineScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "product_item_id", "order_id", "qty", "price"],
  UserReviewWhereInput: ["AND", "OR", "NOT", "id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewOrderByWithRelationInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewWhereUniqueInput: ["id"],
  UserReviewOrderByWithAggregationInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment", "_count", "_avg", "_max", "_min", "_sum"],
  UserReviewScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_id", "ordered_product_id", "rating_value", "comment"],
  CountryCreateInput: ["id", "country_name"],
  CountryUpdateInput: ["id", "country_name"],
  CountryCreateManyInput: ["id", "country_name"],
  CountryUpdateManyMutationInput: ["id", "country_name"],
  AddressCreateInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressUpdateInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressCreateManyInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressUpdateManyMutationInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  SiteUserCreateInput: ["id", "email_address", "phone_number", "password"],
  SiteUserUpdateInput: ["id", "email_address", "phone_number", "password"],
  SiteUserCreateManyInput: ["id", "email_address", "phone_number", "password"],
  SiteUserUpdateManyMutationInput: ["id", "email_address", "phone_number", "password"],
  UserAddressCreateInput: ["user_id", "address_id", "is_default"],
  UserAddressUpdateInput: ["user_id", "address_id", "is_default"],
  UserAddressCreateManyInput: ["user_id", "address_id", "is_default"],
  UserAddressUpdateManyMutationInput: ["user_id", "address_id", "is_default"],
  ProductCategoryCreateInput: ["id", "parent_category_id", "category_name"],
  ProductCategoryUpdateInput: ["id", "parent_category_id", "category_name"],
  ProductCategoryCreateManyInput: ["id", "parent_category_id", "category_name"],
  ProductCategoryUpdateManyMutationInput: ["id", "parent_category_id", "category_name"],
  PromotionCreateInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionUpdateInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionCreateManyInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionUpdateManyMutationInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionCategoryCreateInput: ["category_id", "promotion_id"],
  PromotionCategoryUpdateInput: ["category_id", "promotion_id"],
  PromotionCategoryCreateManyInput: ["category_id", "promotion_id"],
  PromotionCategoryUpdateManyMutationInput: ["category_id", "promotion_id"],
  ProductCreateInput: ["id", "category_id", "name", "description", "product_image"],
  ProductUpdateInput: ["id", "category_id", "name", "description", "product_image"],
  ProductCreateManyInput: ["id", "category_id", "name", "description", "product_image"],
  ProductUpdateManyMutationInput: ["id", "category_id", "name", "description", "product_image"],
  ProductItemCreateInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemUpdateInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemCreateManyInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemUpdateManyMutationInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  VariationCreateInput: ["id", "category_id", "name"],
  VariationUpdateInput: ["id", "category_id", "name"],
  VariationCreateManyInput: ["id", "category_id", "name"],
  VariationUpdateManyMutationInput: ["id", "category_id", "name"],
  VariationOptionCreateInput: ["id", "variation_id", "value"],
  VariationOptionUpdateInput: ["id", "variation_id", "value"],
  VariationOptionCreateManyInput: ["id", "variation_id", "value"],
  VariationOptionUpdateManyMutationInput: ["id", "variation_id", "value"],
  ProductConfigurationCreateInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationUpdateInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationCreateManyInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationUpdateManyMutationInput: ["product_item_id", "variation_option_id"],
  PaymentTypeCreateInput: ["id", "value"],
  PaymentTypeUpdateInput: ["id", "value"],
  PaymentTypeCreateManyInput: ["id", "value"],
  PaymentTypeUpdateManyMutationInput: ["id", "value"],
  UserPaymentMethodCreateInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodUpdateInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodCreateManyInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodUpdateManyMutationInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  ShoppingCartCreateInput: ["id", "user_id"],
  ShoppingCartUpdateInput: ["id", "user_id"],
  ShoppingCartCreateManyInput: ["id", "user_id"],
  ShoppingCartUpdateManyMutationInput: ["id", "user_id"],
  ShoppingCartItemCreateInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemUpdateInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemCreateManyInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemUpdateManyMutationInput: ["id", "cart_id", "product_item_id", "qty"],
  ShippingMethodCreateInput: ["id", "name", "price"],
  ShippingMethodUpdateInput: ["id", "name", "price"],
  ShippingMethodCreateManyInput: ["id", "name", "price"],
  ShippingMethodUpdateManyMutationInput: ["id", "name", "price"],
  OrderStatusCreateInput: ["id", "status"],
  OrderStatusUpdateInput: ["id", "status"],
  OrderStatusCreateManyInput: ["id", "status"],
  OrderStatusUpdateManyMutationInput: ["id", "status"],
  ShopOrderCreateInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderUpdateInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderCreateManyInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderUpdateManyMutationInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  OrderLineCreateInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineUpdateInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineCreateManyInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineUpdateManyMutationInput: ["id", "product_item_id", "order_id", "qty", "price"],
  UserReviewCreateInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewUpdateInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewCreateManyInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewUpdateManyMutationInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  CountryCountOrderByAggregateInput: ["id", "country_name"],
  CountryMaxOrderByAggregateInput: ["id", "country_name"],
  CountryMinOrderByAggregateInput: ["id", "country_name"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  AddressCountOrderByAggregateInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressMaxOrderByAggregateInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  AddressMinOrderByAggregateInput: ["id", "unit_number", "street_number", "address_line1", "address_line2", "city", "region", "postal_code", "country_id"],
  SiteUserCountOrderByAggregateInput: ["id", "email_address", "phone_number", "password"],
  SiteUserMaxOrderByAggregateInput: ["id", "email_address", "phone_number", "password"],
  SiteUserMinOrderByAggregateInput: ["id", "email_address", "phone_number", "password"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserAddressUser_idAddress_idCompoundUniqueInput: ["user_id", "address_id"],
  UserAddressCountOrderByAggregateInput: ["user_id", "address_id", "is_default"],
  UserAddressAvgOrderByAggregateInput: ["is_default"],
  UserAddressMaxOrderByAggregateInput: ["user_id", "address_id", "is_default"],
  UserAddressMinOrderByAggregateInput: ["user_id", "address_id", "is_default"],
  UserAddressSumOrderByAggregateInput: ["is_default"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProductCategoryCountOrderByAggregateInput: ["id", "parent_category_id", "category_name"],
  ProductCategoryMaxOrderByAggregateInput: ["id", "parent_category_id", "category_name"],
  ProductCategoryMinOrderByAggregateInput: ["id", "parent_category_id", "category_name"],
  PromotionCountOrderByAggregateInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionAvgOrderByAggregateInput: ["discount_rate"],
  PromotionMaxOrderByAggregateInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionMinOrderByAggregateInput: ["id", "name", "description", "discount_rate", "start_date", "end_date"],
  PromotionSumOrderByAggregateInput: ["discount_rate"],
  PromotionCategoryCategory_idPromotion_idCompoundUniqueInput: ["category_id", "promotion_id"],
  PromotionCategoryCountOrderByAggregateInput: ["category_id", "promotion_id"],
  PromotionCategoryMaxOrderByAggregateInput: ["category_id", "promotion_id"],
  PromotionCategoryMinOrderByAggregateInput: ["category_id", "promotion_id"],
  ProductCountOrderByAggregateInput: ["id", "category_id", "name", "description", "product_image"],
  ProductMaxOrderByAggregateInput: ["id", "category_id", "name", "description", "product_image"],
  ProductMinOrderByAggregateInput: ["id", "category_id", "name", "description", "product_image"],
  ProductItemCountOrderByAggregateInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemAvgOrderByAggregateInput: ["qty_in_stock", "price"],
  ProductItemMaxOrderByAggregateInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemMinOrderByAggregateInput: ["id", "product_id", "sku", "qty_in_stock", "product_image", "price"],
  ProductItemSumOrderByAggregateInput: ["qty_in_stock", "price"],
  VariationCountOrderByAggregateInput: ["id", "category_id", "name"],
  VariationMaxOrderByAggregateInput: ["id", "category_id", "name"],
  VariationMinOrderByAggregateInput: ["id", "category_id", "name"],
  VariationOptionCountOrderByAggregateInput: ["id", "variation_id", "value"],
  VariationOptionMaxOrderByAggregateInput: ["id", "variation_id", "value"],
  VariationOptionMinOrderByAggregateInput: ["id", "variation_id", "value"],
  ProductConfigurationProduct_item_idVariation_option_idCompoundUniqueInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationCountOrderByAggregateInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationMaxOrderByAggregateInput: ["product_item_id", "variation_option_id"],
  ProductConfigurationMinOrderByAggregateInput: ["product_item_id", "variation_option_id"],
  PaymentTypeCountOrderByAggregateInput: ["id", "value"],
  PaymentTypeMaxOrderByAggregateInput: ["id", "value"],
  PaymentTypeMinOrderByAggregateInput: ["id", "value"],
  UserPaymentMethodCountOrderByAggregateInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodAvgOrderByAggregateInput: ["is_default"],
  UserPaymentMethodMaxOrderByAggregateInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodMinOrderByAggregateInput: ["id", "user_id", "payment_type_id", "provider", "account_number", "is_default"],
  UserPaymentMethodSumOrderByAggregateInput: ["is_default"],
  ShoppingCartCountOrderByAggregateInput: ["id", "user_id"],
  ShoppingCartMaxOrderByAggregateInput: ["id", "user_id"],
  ShoppingCartMinOrderByAggregateInput: ["id", "user_id"],
  ShoppingCartItemCountOrderByAggregateInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemAvgOrderByAggregateInput: ["qty"],
  ShoppingCartItemMaxOrderByAggregateInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemMinOrderByAggregateInput: ["id", "cart_id", "product_item_id", "qty"],
  ShoppingCartItemSumOrderByAggregateInput: ["qty"],
  ShippingMethodCountOrderByAggregateInput: ["id", "name", "price"],
  ShippingMethodAvgOrderByAggregateInput: ["price"],
  ShippingMethodMaxOrderByAggregateInput: ["id", "name", "price"],
  ShippingMethodMinOrderByAggregateInput: ["id", "name", "price"],
  ShippingMethodSumOrderByAggregateInput: ["price"],
  OrderStatusCountOrderByAggregateInput: ["id", "status"],
  OrderStatusMaxOrderByAggregateInput: ["id", "status"],
  OrderStatusMinOrderByAggregateInput: ["id", "status"],
  ShopOrderCountOrderByAggregateInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderAvgOrderByAggregateInput: ["shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderMaxOrderByAggregateInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderMinOrderByAggregateInput: ["id", "user_id", "order_date", "payment_method_id", "shipping_address", "shipping_method", "order_total", "order_status"],
  ShopOrderSumOrderByAggregateInput: ["shipping_address", "shipping_method", "order_total", "order_status"],
  OrderLineCountOrderByAggregateInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineAvgOrderByAggregateInput: ["qty", "price"],
  OrderLineMaxOrderByAggregateInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineMinOrderByAggregateInput: ["id", "product_item_id", "order_id", "qty", "price"],
  OrderLineSumOrderByAggregateInput: ["qty", "price"],
  UserReviewCountOrderByAggregateInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewAvgOrderByAggregateInput: ["rating_value"],
  UserReviewMaxOrderByAggregateInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewMinOrderByAggregateInput: ["id", "user_id", "ordered_product_id", "rating_value", "comment"],
  UserReviewSumOrderByAggregateInput: ["rating_value"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

