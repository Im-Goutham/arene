import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  UserProvider: crudResolvers.UserProviderCrudResolver,
  Product: crudResolvers.ProductCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Order: crudResolvers.OrderCrudResolver,
  OrderItem: crudResolvers.OrderItemCrudResolver,
  Offer: crudResolvers.OfferCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  UserProvider: {
    aggregateUserProvider: actionResolvers.AggregateUserProviderResolver,
    createManyUserProvider: actionResolvers.CreateManyUserProviderResolver,
    createOneUserProvider: actionResolvers.CreateOneUserProviderResolver,
    deleteManyUserProvider: actionResolvers.DeleteManyUserProviderResolver,
    deleteOneUserProvider: actionResolvers.DeleteOneUserProviderResolver,
    findFirstUserProvider: actionResolvers.FindFirstUserProviderResolver,
    findFirstUserProviderOrThrow: actionResolvers.FindFirstUserProviderOrThrowResolver,
    userProviders: actionResolvers.FindManyUserProviderResolver,
    userProvider: actionResolvers.FindUniqueUserProviderResolver,
    getUserProvider: actionResolvers.FindUniqueUserProviderOrThrowResolver,
    groupByUserProvider: actionResolvers.GroupByUserProviderResolver,
    updateManyUserProvider: actionResolvers.UpdateManyUserProviderResolver,
    updateOneUserProvider: actionResolvers.UpdateOneUserProviderResolver,
    upsertOneUserProvider: actionResolvers.UpsertOneUserProviderResolver
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
  Category: {
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    createOneCategory: actionResolvers.CreateOneCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    category: actionResolvers.FindUniqueCategoryResolver,
    getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
    upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
  },
  Order: {
    aggregateOrder: actionResolvers.AggregateOrderResolver,
    createManyOrder: actionResolvers.CreateManyOrderResolver,
    createOneOrder: actionResolvers.CreateOneOrderResolver,
    deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
    deleteOneOrder: actionResolvers.DeleteOneOrderResolver,
    findFirstOrder: actionResolvers.FindFirstOrderResolver,
    findFirstOrderOrThrow: actionResolvers.FindFirstOrderOrThrowResolver,
    orders: actionResolvers.FindManyOrderResolver,
    order: actionResolvers.FindUniqueOrderResolver,
    getOrder: actionResolvers.FindUniqueOrderOrThrowResolver,
    groupByOrder: actionResolvers.GroupByOrderResolver,
    updateManyOrder: actionResolvers.UpdateManyOrderResolver,
    updateOneOrder: actionResolvers.UpdateOneOrderResolver,
    upsertOneOrder: actionResolvers.UpsertOneOrderResolver
  },
  OrderItem: {
    aggregateOrderItem: actionResolvers.AggregateOrderItemResolver,
    createManyOrderItem: actionResolvers.CreateManyOrderItemResolver,
    createOneOrderItem: actionResolvers.CreateOneOrderItemResolver,
    deleteManyOrderItem: actionResolvers.DeleteManyOrderItemResolver,
    deleteOneOrderItem: actionResolvers.DeleteOneOrderItemResolver,
    findFirstOrderItem: actionResolvers.FindFirstOrderItemResolver,
    findFirstOrderItemOrThrow: actionResolvers.FindFirstOrderItemOrThrowResolver,
    orderItems: actionResolvers.FindManyOrderItemResolver,
    orderItem: actionResolvers.FindUniqueOrderItemResolver,
    getOrderItem: actionResolvers.FindUniqueOrderItemOrThrowResolver,
    groupByOrderItem: actionResolvers.GroupByOrderItemResolver,
    updateManyOrderItem: actionResolvers.UpdateManyOrderItemResolver,
    updateOneOrderItem: actionResolvers.UpdateOneOrderItemResolver,
    upsertOneOrderItem: actionResolvers.UpsertOneOrderItemResolver
  },
  Offer: {
    aggregateOffer: actionResolvers.AggregateOfferResolver,
    createManyOffer: actionResolvers.CreateManyOfferResolver,
    createOneOffer: actionResolvers.CreateOneOfferResolver,
    deleteManyOffer: actionResolvers.DeleteManyOfferResolver,
    deleteOneOffer: actionResolvers.DeleteOneOfferResolver,
    findFirstOffer: actionResolvers.FindFirstOfferResolver,
    findFirstOfferOrThrow: actionResolvers.FindFirstOfferOrThrowResolver,
    offers: actionResolvers.FindManyOfferResolver,
    offer: actionResolvers.FindUniqueOfferResolver,
    getOffer: actionResolvers.FindUniqueOfferOrThrowResolver,
    groupByOffer: actionResolvers.GroupByOfferResolver,
    updateManyOffer: actionResolvers.UpdateManyOfferResolver,
    updateOneOffer: actionResolvers.UpdateOneOfferResolver,
    upsertOneOffer: actionResolvers.UpsertOneOfferResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  UserProvider: ["aggregateUserProvider", "createManyUserProvider", "createOneUserProvider", "deleteManyUserProvider", "deleteOneUserProvider", "findFirstUserProvider", "findFirstUserProviderOrThrow", "userProviders", "userProvider", "getUserProvider", "groupByUserProvider", "updateManyUserProvider", "updateOneUserProvider", "upsertOneUserProvider"],
  Product: ["aggregateProduct", "createManyProduct", "createOneProduct", "deleteManyProduct", "deleteOneProduct", "findFirstProduct", "findFirstProductOrThrow", "products", "product", "getProduct", "groupByProduct", "updateManyProduct", "updateOneProduct", "upsertOneProduct"],
  Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  Order: ["aggregateOrder", "createManyOrder", "createOneOrder", "deleteManyOrder", "deleteOneOrder", "findFirstOrder", "findFirstOrderOrThrow", "orders", "order", "getOrder", "groupByOrder", "updateManyOrder", "updateOneOrder", "upsertOneOrder"],
  OrderItem: ["aggregateOrderItem", "createManyOrderItem", "createOneOrderItem", "deleteManyOrderItem", "deleteOneOrderItem", "findFirstOrderItem", "findFirstOrderItemOrThrow", "orderItems", "orderItem", "getOrderItem", "groupByOrderItem", "updateManyOrderItem", "updateOneOrderItem", "upsertOneOrderItem"],
  Offer: ["aggregateOffer", "createManyOffer", "createOneOffer", "deleteManyOffer", "deleteOneOffer", "findFirstOffer", "findFirstOfferOrThrow", "offers", "offer", "getOffer", "groupByOffer", "updateManyOffer", "updateOneOffer", "upsertOneOffer"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateUserProviderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserProviderArgs: ["data", "skipDuplicates"],
  CreateOneUserProviderArgs: ["data"],
  DeleteManyUserProviderArgs: ["where"],
  DeleteOneUserProviderArgs: ["where"],
  FindFirstUserProviderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserProviderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserProviderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserProviderArgs: ["where"],
  FindUniqueUserProviderOrThrowArgs: ["where"],
  GroupByUserProviderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserProviderArgs: ["data", "where"],
  UpdateOneUserProviderArgs: ["data", "where"],
  UpsertOneUserProviderArgs: ["where", "create", "update"],
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
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  CreateOneCategoryArgs: ["data"],
  DeleteManyCategoryArgs: ["where"],
  DeleteOneCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoryArgs: ["where"],
  FindUniqueCategoryOrThrowArgs: ["where"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpdateOneCategoryArgs: ["data", "where"],
  UpsertOneCategoryArgs: ["where", "create", "update"],
  AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrderArgs: ["data", "skipDuplicates"],
  CreateOneOrderArgs: ["data"],
  DeleteManyOrderArgs: ["where"],
  DeleteOneOrderArgs: ["where"],
  FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOrderOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrderArgs: ["where"],
  FindUniqueOrderOrThrowArgs: ["where"],
  GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrderArgs: ["data", "where"],
  UpdateOneOrderArgs: ["data", "where"],
  UpsertOneOrderArgs: ["where", "create", "update"],
  AggregateOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrderItemArgs: ["data", "skipDuplicates"],
  CreateOneOrderItemArgs: ["data"],
  DeleteManyOrderItemArgs: ["where"],
  DeleteOneOrderItemArgs: ["where"],
  FindFirstOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOrderItemOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrderItemArgs: ["where"],
  FindUniqueOrderItemOrThrowArgs: ["where"],
  GroupByOrderItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrderItemArgs: ["data", "where"],
  UpdateOneOrderItemArgs: ["data", "where"],
  UpsertOneOrderItemArgs: ["where", "create", "update"],
  AggregateOfferArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOfferArgs: ["data", "skipDuplicates"],
  CreateOneOfferArgs: ["data"],
  DeleteManyOfferArgs: ["where"],
  DeleteOneOfferArgs: ["where"],
  FindFirstOfferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOfferOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOfferArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOfferArgs: ["where"],
  FindUniqueOfferOrThrowArgs: ["where"],
  GroupByOfferArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOfferArgs: ["data", "where"],
  UpdateOneOfferArgs: ["data", "where"],
  UpsertOneOfferArgs: ["where", "create", "update"]
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

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  UserProvider: relationResolvers.UserProviderRelationsResolver,
  Product: relationResolvers.ProductRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  Order: relationResolvers.OrderRelationsResolver,
  OrderItem: relationResolvers.OrderItemRelationsResolver,
  Offer: relationResolvers.OfferRelationsResolver
};
const relationResolversInfo = {
  User: ["providers", "orders"],
  UserProvider: ["user"],
  Product: ["category", "offers", "orders"],
  Category: ["parent", "children", "products"],
  Order: ["user", "items"],
  OrderItem: ["order", "product"],
  Offer: ["product"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
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
  User: ["id", "email", "password", "firstName", "lastName"],
  UserProvider: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  Product: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  Category: ["id", "name", "parentId"],
  Order: ["id", "userId", "total", "createdAt"],
  OrderItem: ["id", "orderId", "productId", "quantity", "price"],
  Offer: ["id", "productId", "type", "code", "discount", "startDate", "endDate"]
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
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "password", "firstName", "lastName", "_count", "_min", "_max"],
  AggregateUserProvider: ["_count", "_min", "_max"],
  UserProviderGroupBy: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail", "_count", "_min", "_max"],
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "name", "sku", "price", "image", "stock", "categoryId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_min", "_max"],
  CategoryGroupBy: ["id", "name", "parentId", "_count", "_min", "_max"],
  AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderGroupBy: ["id", "userId", "total", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrderItem: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderItemGroupBy: ["id", "orderId", "productId", "quantity", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOffer: ["_count", "_avg", "_sum", "_min", "_max"],
  OfferGroupBy: ["id", "productId", "type", "code", "discount", "startDate", "endDate", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["providers", "orders"],
  UserCountAggregate: ["id", "email", "password", "firstName", "lastName", "_all"],
  UserMinAggregate: ["id", "email", "password", "firstName", "lastName"],
  UserMaxAggregate: ["id", "email", "password", "firstName", "lastName"],
  UserProviderCountAggregate: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail", "_all"],
  UserProviderMinAggregate: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderMaxAggregate: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  ProductCount: ["offers", "orders"],
  ProductCountAggregate: ["id", "name", "sku", "price", "image", "stock", "categoryId", "_all"],
  ProductAvgAggregate: ["price", "stock"],
  ProductSumAggregate: ["price", "stock"],
  ProductMinAggregate: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  ProductMaxAggregate: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  CategoryCount: ["children", "products"],
  CategoryCountAggregate: ["id", "name", "parentId", "_all"],
  CategoryMinAggregate: ["id", "name", "parentId"],
  CategoryMaxAggregate: ["id", "name", "parentId"],
  OrderCount: ["items"],
  OrderCountAggregate: ["id", "userId", "total", "createdAt", "_all"],
  OrderAvgAggregate: ["total"],
  OrderSumAggregate: ["total"],
  OrderMinAggregate: ["id", "userId", "total", "createdAt"],
  OrderMaxAggregate: ["id", "userId", "total", "createdAt"],
  OrderItemCountAggregate: ["id", "orderId", "productId", "quantity", "price", "_all"],
  OrderItemAvgAggregate: ["quantity", "price"],
  OrderItemSumAggregate: ["quantity", "price"],
  OrderItemMinAggregate: ["id", "orderId", "productId", "quantity", "price"],
  OrderItemMaxAggregate: ["id", "orderId", "productId", "quantity", "price"],
  OfferCountAggregate: ["id", "productId", "type", "code", "discount", "startDate", "endDate", "_all"],
  OfferAvgAggregate: ["discount"],
  OfferSumAggregate: ["discount"],
  OfferMinAggregate: ["id", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferMaxAggregate: ["id", "productId", "type", "code", "discount", "startDate", "endDate"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "firstName", "lastName", "providers", "orders"],
  UserOrderByWithRelationInput: ["id", "email", "password", "firstName", "lastName", "providers", "orders"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "firstName", "lastName", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "firstName", "lastName"],
  UserProviderWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderOrderByWithRelationInput: ["id", "userId", "user", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderWhereUniqueInput: ["id"],
  UserProviderOrderByWithAggregationInput: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail", "_count", "_max", "_min"],
  UserProviderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  ProductWhereInput: ["AND", "OR", "NOT", "id", "name", "sku", "price", "image", "stock", "category", "categoryId", "offers", "orders"],
  ProductOrderByWithRelationInput: ["id", "name", "sku", "price", "image", "stock", "category", "categoryId", "offers", "orders"],
  ProductWhereUniqueInput: ["id", "sku"],
  ProductOrderByWithAggregationInput: ["id", "name", "sku", "price", "image", "stock", "categoryId", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "sku", "price", "image", "stock", "categoryId"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "parent", "parentId", "children", "products"],
  CategoryOrderByWithRelationInput: ["id", "name", "parent", "parentId", "children", "products"],
  CategoryWhereUniqueInput: ["id"],
  CategoryOrderByWithAggregationInput: ["id", "name", "parentId", "_count", "_max", "_min"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "parentId"],
  OrderWhereInput: ["AND", "OR", "NOT", "id", "userId", "user", "total", "createdAt", "items"],
  OrderOrderByWithRelationInput: ["id", "userId", "user", "total", "createdAt", "items"],
  OrderWhereUniqueInput: ["id"],
  OrderOrderByWithAggregationInput: ["id", "userId", "total", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "total", "createdAt"],
  OrderItemWhereInput: ["AND", "OR", "NOT", "id", "orderId", "order", "productId", "product", "quantity", "price"],
  OrderItemOrderByWithRelationInput: ["id", "orderId", "order", "productId", "product", "quantity", "price"],
  OrderItemWhereUniqueInput: ["id"],
  OrderItemOrderByWithAggregationInput: ["id", "orderId", "productId", "quantity", "price", "_count", "_avg", "_max", "_min", "_sum"],
  OrderItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "orderId", "productId", "quantity", "price"],
  OfferWhereInput: ["AND", "OR", "NOT", "id", "product", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferOrderByWithRelationInput: ["id", "product", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferWhereUniqueInput: ["id"],
  OfferOrderByWithAggregationInput: ["id", "productId", "type", "code", "discount", "startDate", "endDate", "_count", "_avg", "_max", "_min", "_sum"],
  OfferScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "productId", "type", "code", "discount", "startDate", "endDate"],
  UserCreateInput: ["id", "email", "password", "firstName", "lastName", "providers", "orders"],
  UserUpdateInput: ["id", "email", "password", "firstName", "lastName", "providers", "orders"],
  UserCreateManyInput: ["id", "email", "password", "firstName", "lastName"],
  UserUpdateManyMutationInput: ["id", "email", "password", "firstName", "lastName"],
  UserProviderCreateInput: ["id", "user", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderUpdateInput: ["id", "user", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderCreateManyInput: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderUpdateManyMutationInput: ["id", "provider", "providerId", "facebookToken", "facebookEmail"],
  ProductCreateInput: ["id", "name", "sku", "price", "image", "stock", "category", "offers", "orders"],
  ProductUpdateInput: ["id", "name", "sku", "price", "image", "stock", "category", "offers", "orders"],
  ProductCreateManyInput: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  ProductUpdateManyMutationInput: ["id", "name", "sku", "price", "image", "stock"],
  CategoryCreateInput: ["id", "name", "parent", "children", "products"],
  CategoryUpdateInput: ["id", "name", "parent", "children", "products"],
  CategoryCreateManyInput: ["id", "name", "parentId"],
  CategoryUpdateManyMutationInput: ["id", "name"],
  OrderCreateInput: ["id", "user", "total", "createdAt", "items"],
  OrderUpdateInput: ["id", "user", "total", "createdAt", "items"],
  OrderCreateManyInput: ["id", "userId", "total", "createdAt"],
  OrderUpdateManyMutationInput: ["id", "total", "createdAt"],
  OrderItemCreateInput: ["id", "order", "product", "quantity", "price"],
  OrderItemUpdateInput: ["id", "order", "product", "quantity", "price"],
  OrderItemCreateManyInput: ["id", "orderId", "productId", "quantity", "price"],
  OrderItemUpdateManyMutationInput: ["id", "quantity", "price"],
  OfferCreateInput: ["id", "product", "type", "code", "discount", "startDate", "endDate"],
  OfferUpdateInput: ["id", "product", "type", "code", "discount", "startDate", "endDate"],
  OfferCreateManyInput: ["id", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferUpdateManyMutationInput: ["id", "type", "code", "discount", "startDate", "endDate"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  UserProviderListRelationFilter: ["every", "some", "none"],
  OrderListRelationFilter: ["every", "some", "none"],
  UserProviderOrderByRelationAggregateInput: ["_count"],
  OrderOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "password", "firstName", "lastName"],
  UserMaxOrderByAggregateInput: ["id", "email", "password", "firstName", "lastName"],
  UserMinOrderByAggregateInput: ["id", "email", "password", "firstName", "lastName"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  UserProviderCountOrderByAggregateInput: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderMaxOrderByAggregateInput: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderMinOrderByAggregateInput: ["id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CategoryRelationFilter: ["is", "isNot"],
  OfferListRelationFilter: ["every", "some", "none"],
  OrderItemListRelationFilter: ["every", "some", "none"],
  OfferOrderByRelationAggregateInput: ["_count"],
  OrderItemOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  ProductAvgOrderByAggregateInput: ["price", "stock"],
  ProductMaxOrderByAggregateInput: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  ProductMinOrderByAggregateInput: ["id", "name", "sku", "price", "image", "stock", "categoryId"],
  ProductSumOrderByAggregateInput: ["price", "stock"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CategoryListRelationFilter: ["every", "some", "none"],
  ProductListRelationFilter: ["every", "some", "none"],
  CategoryOrderByRelationAggregateInput: ["_count"],
  ProductOrderByRelationAggregateInput: ["_count"],
  CategoryCountOrderByAggregateInput: ["id", "name", "parentId"],
  CategoryMaxOrderByAggregateInput: ["id", "name", "parentId"],
  CategoryMinOrderByAggregateInput: ["id", "name", "parentId"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OrderCountOrderByAggregateInput: ["id", "userId", "total", "createdAt"],
  OrderAvgOrderByAggregateInput: ["total"],
  OrderMaxOrderByAggregateInput: ["id", "userId", "total", "createdAt"],
  OrderMinOrderByAggregateInput: ["id", "userId", "total", "createdAt"],
  OrderSumOrderByAggregateInput: ["total"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  OrderRelationFilter: ["is", "isNot"],
  ProductRelationFilter: ["is", "isNot"],
  OrderItemCountOrderByAggregateInput: ["id", "orderId", "productId", "quantity", "price"],
  OrderItemAvgOrderByAggregateInput: ["quantity", "price"],
  OrderItemMaxOrderByAggregateInput: ["id", "orderId", "productId", "quantity", "price"],
  OrderItemMinOrderByAggregateInput: ["id", "orderId", "productId", "quantity", "price"],
  OrderItemSumOrderByAggregateInput: ["quantity", "price"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OfferCountOrderByAggregateInput: ["id", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferAvgOrderByAggregateInput: ["discount"],
  OfferMaxOrderByAggregateInput: ["id", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferMinOrderByAggregateInput: ["id", "productId", "type", "code", "discount", "startDate", "endDate"],
  OfferSumOrderByAggregateInput: ["discount"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserProviderCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserProviderUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutProvidersInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutProvidersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CategoryCreateNestedOneWithoutProductsInput: ["create", "connectOrCreate", "connect"],
  OfferCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderItemCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CategoryUpdateOneRequiredWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OfferUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderItemUpdateManyWithoutProductNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
  CategoryCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoryUpdateOneWithoutChildrenNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CategoryUpdateManyWithoutParentNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductUpdateManyWithoutCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  OrderItemCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  OrderItemUpdateManyWithoutOrderNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderCreateNestedOneWithoutItemsInput: ["create", "connectOrCreate", "connect"],
  ProductCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  OrderUpdateOneRequiredWithoutItemsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductUpdateOneRequiredWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductCreateNestedOneWithoutOffersInput: ["create", "connectOrCreate", "connect"],
  ProductUpdateOneRequiredWithoutOffersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UserProviderCreateWithoutUserInput: ["id", "provider", "providerId", "facebookToken", "facebookEmail"],
  UserProviderCreateOrConnectWithoutUserInput: ["where", "create"],
  UserProviderCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutUserInput: ["id", "total", "createdAt", "items"],
  OrderCreateOrConnectWithoutUserInput: ["where", "create"],
  OrderCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  UserProviderUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  UserProviderUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  UserProviderUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  UserProviderScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "provider", "providerId", "facebookToken", "facebookEmail"],
  OrderUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "total", "createdAt"],
  UserCreateWithoutProvidersInput: ["id", "email", "password", "firstName", "lastName", "orders"],
  UserCreateOrConnectWithoutProvidersInput: ["where", "create"],
  UserUpsertWithoutProvidersInput: ["update", "create"],
  UserUpdateWithoutProvidersInput: ["id", "email", "password", "firstName", "lastName", "orders"],
  CategoryCreateWithoutProductsInput: ["id", "name", "parent", "children"],
  CategoryCreateOrConnectWithoutProductsInput: ["where", "create"],
  OfferCreateWithoutProductInput: ["id", "type", "code", "discount", "startDate", "endDate"],
  OfferCreateOrConnectWithoutProductInput: ["where", "create"],
  OfferCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  OrderItemCreateWithoutProductInput: ["id", "order", "quantity", "price"],
  OrderItemCreateOrConnectWithoutProductInput: ["where", "create"],
  OrderItemCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  CategoryUpsertWithoutProductsInput: ["update", "create"],
  CategoryUpdateWithoutProductsInput: ["id", "name", "parent", "children"],
  OfferUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  OfferUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  OfferUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  OfferScalarWhereInput: ["AND", "OR", "NOT", "id", "productId", "type", "code", "discount", "startDate", "endDate"],
  OrderItemUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  OrderItemUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  OrderItemUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  OrderItemScalarWhereInput: ["AND", "OR", "NOT", "id", "orderId", "productId", "quantity", "price"],
  CategoryCreateWithoutChildrenInput: ["id", "name", "parent", "products"],
  CategoryCreateOrConnectWithoutChildrenInput: ["where", "create"],
  CategoryCreateWithoutParentInput: ["id", "name", "children", "products"],
  CategoryCreateOrConnectWithoutParentInput: ["where", "create"],
  CategoryCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  ProductCreateWithoutCategoryInput: ["id", "name", "sku", "price", "image", "stock", "offers", "orders"],
  ProductCreateOrConnectWithoutCategoryInput: ["where", "create"],
  ProductCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  CategoryUpsertWithoutChildrenInput: ["update", "create"],
  CategoryUpdateWithoutChildrenInput: ["id", "name", "parent", "products"],
  CategoryUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  CategoryUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  CategoryUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  CategoryScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "parentId"],
  ProductUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  ProductUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  ProductUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  ProductScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "sku", "price", "image", "stock", "categoryId"],
  UserCreateWithoutOrdersInput: ["id", "email", "password", "firstName", "lastName", "providers"],
  UserCreateOrConnectWithoutOrdersInput: ["where", "create"],
  OrderItemCreateWithoutOrderInput: ["id", "product", "quantity", "price"],
  OrderItemCreateOrConnectWithoutOrderInput: ["where", "create"],
  OrderItemCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutOrdersInput: ["update", "create"],
  UserUpdateWithoutOrdersInput: ["id", "email", "password", "firstName", "lastName", "providers"],
  OrderItemUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
  OrderItemUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
  OrderItemUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
  OrderCreateWithoutItemsInput: ["id", "user", "total", "createdAt"],
  OrderCreateOrConnectWithoutItemsInput: ["where", "create"],
  ProductCreateWithoutOrdersInput: ["id", "name", "sku", "price", "image", "stock", "category", "offers"],
  ProductCreateOrConnectWithoutOrdersInput: ["where", "create"],
  OrderUpsertWithoutItemsInput: ["update", "create"],
  OrderUpdateWithoutItemsInput: ["id", "user", "total", "createdAt"],
  ProductUpsertWithoutOrdersInput: ["update", "create"],
  ProductUpdateWithoutOrdersInput: ["id", "name", "sku", "price", "image", "stock", "category", "offers"],
  ProductCreateWithoutOffersInput: ["id", "name", "sku", "price", "image", "stock", "category", "orders"],
  ProductCreateOrConnectWithoutOffersInput: ["where", "create"],
  ProductUpsertWithoutOffersInput: ["update", "create"],
  ProductUpdateWithoutOffersInput: ["id", "name", "sku", "price", "image", "stock", "category", "orders"],
  UserProviderCreateManyUserInput: ["id", "provider", "providerId", "facebookToken", "facebookEmail"],
  OrderCreateManyUserInput: ["id", "total", "createdAt"],
  UserProviderUpdateWithoutUserInput: ["id", "provider", "providerId", "facebookToken", "facebookEmail"],
  OrderUpdateWithoutUserInput: ["id", "total", "createdAt", "items"],
  OfferCreateManyProductInput: ["id", "type", "code", "discount", "startDate", "endDate"],
  OrderItemCreateManyProductInput: ["id", "orderId", "quantity", "price"],
  OfferUpdateWithoutProductInput: ["id", "type", "code", "discount", "startDate", "endDate"],
  OrderItemUpdateWithoutProductInput: ["id", "order", "quantity", "price"],
  CategoryCreateManyParentInput: ["id", "name"],
  ProductCreateManyCategoryInput: ["id", "name", "sku", "price", "image", "stock"],
  CategoryUpdateWithoutParentInput: ["id", "name", "children", "products"],
  ProductUpdateWithoutCategoryInput: ["id", "name", "sku", "price", "image", "stock", "offers", "orders"],
  OrderItemCreateManyOrderInput: ["id", "productId", "quantity", "price"],
  OrderItemUpdateWithoutOrderInput: ["id", "product", "quantity", "price"]
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

