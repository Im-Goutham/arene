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
  Author: crudResolvers.AuthorCrudResolver,
  Book: crudResolvers.BookCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  CategoriesOnBooks: crudResolvers.CategoriesOnBooksCrudResolver
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
  Author: {
    aggregateAuthor: actionResolvers.AggregateAuthorResolver,
    createManyAuthor: actionResolvers.CreateManyAuthorResolver,
    createOneAuthor: actionResolvers.CreateOneAuthorResolver,
    deleteManyAuthor: actionResolvers.DeleteManyAuthorResolver,
    deleteOneAuthor: actionResolvers.DeleteOneAuthorResolver,
    findFirstAuthor: actionResolvers.FindFirstAuthorResolver,
    findFirstAuthorOrThrow: actionResolvers.FindFirstAuthorOrThrowResolver,
    authors: actionResolvers.FindManyAuthorResolver,
    author: actionResolvers.FindUniqueAuthorResolver,
    getAuthor: actionResolvers.FindUniqueAuthorOrThrowResolver,
    groupByAuthor: actionResolvers.GroupByAuthorResolver,
    updateManyAuthor: actionResolvers.UpdateManyAuthorResolver,
    updateOneAuthor: actionResolvers.UpdateOneAuthorResolver,
    upsertOneAuthor: actionResolvers.UpsertOneAuthorResolver
  },
  Book: {
    aggregateBook: actionResolvers.AggregateBookResolver,
    createManyBook: actionResolvers.CreateManyBookResolver,
    createOneBook: actionResolvers.CreateOneBookResolver,
    deleteManyBook: actionResolvers.DeleteManyBookResolver,
    deleteOneBook: actionResolvers.DeleteOneBookResolver,
    findFirstBook: actionResolvers.FindFirstBookResolver,
    findFirstBookOrThrow: actionResolvers.FindFirstBookOrThrowResolver,
    books: actionResolvers.FindManyBookResolver,
    book: actionResolvers.FindUniqueBookResolver,
    getBook: actionResolvers.FindUniqueBookOrThrowResolver,
    groupByBook: actionResolvers.GroupByBookResolver,
    updateManyBook: actionResolvers.UpdateManyBookResolver,
    updateOneBook: actionResolvers.UpdateOneBookResolver,
    upsertOneBook: actionResolvers.UpsertOneBookResolver
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
  CategoriesOnBooks: {
    aggregateCategoriesOnBooks: actionResolvers.AggregateCategoriesOnBooksResolver,
    createManyCategoriesOnBooks: actionResolvers.CreateManyCategoriesOnBooksResolver,
    createOneCategoriesOnBooks: actionResolvers.CreateOneCategoriesOnBooksResolver,
    deleteManyCategoriesOnBooks: actionResolvers.DeleteManyCategoriesOnBooksResolver,
    deleteOneCategoriesOnBooks: actionResolvers.DeleteOneCategoriesOnBooksResolver,
    findFirstCategoriesOnBooks: actionResolvers.FindFirstCategoriesOnBooksResolver,
    findFirstCategoriesOnBooksOrThrow: actionResolvers.FindFirstCategoriesOnBooksOrThrowResolver,
    findManyCategoriesOnBooks: actionResolvers.FindManyCategoriesOnBooksResolver,
    findUniqueCategoriesOnBooks: actionResolvers.FindUniqueCategoriesOnBooksResolver,
    findUniqueCategoriesOnBooksOrThrow: actionResolvers.FindUniqueCategoriesOnBooksOrThrowResolver,
    groupByCategoriesOnBooks: actionResolvers.GroupByCategoriesOnBooksResolver,
    updateManyCategoriesOnBooks: actionResolvers.UpdateManyCategoriesOnBooksResolver,
    updateOneCategoriesOnBooks: actionResolvers.UpdateOneCategoriesOnBooksResolver,
    upsertOneCategoriesOnBooks: actionResolvers.UpsertOneCategoriesOnBooksResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Author: ["aggregateAuthor", "createManyAuthor", "createOneAuthor", "deleteManyAuthor", "deleteOneAuthor", "findFirstAuthor", "findFirstAuthorOrThrow", "authors", "author", "getAuthor", "groupByAuthor", "updateManyAuthor", "updateOneAuthor", "upsertOneAuthor"],
  Book: ["aggregateBook", "createManyBook", "createOneBook", "deleteManyBook", "deleteOneBook", "findFirstBook", "findFirstBookOrThrow", "books", "book", "getBook", "groupByBook", "updateManyBook", "updateOneBook", "upsertOneBook"],
  Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  CategoriesOnBooks: ["aggregateCategoriesOnBooks", "createManyCategoriesOnBooks", "createOneCategoriesOnBooks", "deleteManyCategoriesOnBooks", "deleteOneCategoriesOnBooks", "findFirstCategoriesOnBooks", "findFirstCategoriesOnBooksOrThrow", "findManyCategoriesOnBooks", "findUniqueCategoriesOnBooks", "findUniqueCategoriesOnBooksOrThrow", "groupByCategoriesOnBooks", "updateManyCategoriesOnBooks", "updateOneCategoriesOnBooks", "upsertOneCategoriesOnBooks"]
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
  AggregateAuthorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAuthorArgs: ["data", "skipDuplicates"],
  CreateOneAuthorArgs: ["data"],
  DeleteManyAuthorArgs: ["where"],
  DeleteOneAuthorArgs: ["where"],
  FindFirstAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAuthorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAuthorArgs: ["where"],
  FindUniqueAuthorOrThrowArgs: ["where"],
  GroupByAuthorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAuthorArgs: ["data", "where"],
  UpdateOneAuthorArgs: ["data", "where"],
  UpsertOneAuthorArgs: ["where", "create", "update"],
  AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyBookArgs: ["data", "skipDuplicates"],
  CreateOneBookArgs: ["data"],
  DeleteManyBookArgs: ["where"],
  DeleteOneBookArgs: ["where"],
  FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstBookOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueBookArgs: ["where"],
  FindUniqueBookOrThrowArgs: ["where"],
  GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyBookArgs: ["data", "where"],
  UpdateOneBookArgs: ["data", "where"],
  UpsertOneBookArgs: ["where", "create", "update"],
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
  AggregateCategoriesOnBooksArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCategoriesOnBooksArgs: ["data", "skipDuplicates"],
  CreateOneCategoriesOnBooksArgs: ["data"],
  DeleteManyCategoriesOnBooksArgs: ["where"],
  DeleteOneCategoriesOnBooksArgs: ["where"],
  FindFirstCategoriesOnBooksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCategoriesOnBooksOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoriesOnBooksArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoriesOnBooksArgs: ["where"],
  FindUniqueCategoriesOnBooksOrThrowArgs: ["where"],
  GroupByCategoriesOnBooksArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoriesOnBooksArgs: ["data", "where"],
  UpdateOneCategoriesOnBooksArgs: ["data", "where"],
  UpsertOneCategoriesOnBooksArgs: ["where", "create", "update"]
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
  Author: relationResolvers.AuthorRelationsResolver,
  Book: relationResolvers.BookRelationsResolver,
  Category: relationResolvers.CategoryRelationsResolver,
  CategoriesOnBooks: relationResolvers.CategoriesOnBooksRelationsResolver
};
const relationResolversInfo = {
  Author: ["book"],
  Book: ["author", "categories"],
  Category: ["categoriesOnBooks"],
  CategoriesOnBooks: ["category", "book"]
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
  User: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  Author: ["id", "name", "created_at", "updated_at"],
  Book: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  Category: ["id", "name", "displayName", "created_at", "updated_at"],
  CategoriesOnBooks: ["categoryId", "bookId", "created_at", "updated_at"]
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
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "user_name", "email", "password", "role", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAuthor: ["_count", "_avg", "_sum", "_min", "_max"],
  AuthorGroupBy: ["id", "name", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
  BookGroupBy: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoryGroupBy: ["id", "name", "displayName", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategoriesOnBooks: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoriesOnBooksGroupBy: ["categoryId", "bookId", "created_at", "updated_at", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "user_name", "email", "password", "role", "created_at", "updated_at", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserMaxAggregate: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  AuthorCount: ["book"],
  AuthorCountAggregate: ["id", "name", "created_at", "updated_at", "_all"],
  AuthorAvgAggregate: ["id"],
  AuthorSumAggregate: ["id"],
  AuthorMinAggregate: ["id", "name", "created_at", "updated_at"],
  AuthorMaxAggregate: ["id", "name", "created_at", "updated_at"],
  BookCount: ["categories"],
  BookCountAggregate: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at", "_all"],
  BookAvgAggregate: ["id", "authorId"],
  BookSumAggregate: ["id", "authorId"],
  BookMinAggregate: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  BookMaxAggregate: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  CategoryCount: ["categoriesOnBooks"],
  CategoryCountAggregate: ["id", "name", "displayName", "created_at", "updated_at", "_all"],
  CategoryAvgAggregate: ["id"],
  CategorySumAggregate: ["id"],
  CategoryMinAggregate: ["id", "name", "displayName", "created_at", "updated_at"],
  CategoryMaxAggregate: ["id", "name", "displayName", "created_at", "updated_at"],
  CategoriesOnBooksCountAggregate: ["categoryId", "bookId", "created_at", "updated_at", "_all"],
  CategoriesOnBooksAvgAggregate: ["categoryId", "bookId"],
  CategoriesOnBooksSumAggregate: ["categoryId", "bookId"],
  CategoriesOnBooksMinAggregate: ["categoryId", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksMaxAggregate: ["categoryId", "bookId", "created_at", "updated_at"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserOrderByWithRelationInput: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserWhereUniqueInput: ["id", "user_name_email"],
  UserOrderByWithAggregationInput: ["id", "user_name", "email", "password", "role", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  AuthorWhereInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at", "book"],
  AuthorOrderByWithRelationInput: ["id", "name", "created_at", "updated_at", "book"],
  AuthorWhereUniqueInput: ["id", "name"],
  AuthorOrderByWithAggregationInput: ["id", "name", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  AuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "created_at", "updated_at"],
  BookWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "author", "authorId", "categories", "published_at", "created_at", "updated_at"],
  BookOrderByWithRelationInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "author", "authorId", "categories", "published_at", "created_at", "updated_at"],
  BookWhereUniqueInput: ["id"],
  BookOrderByWithAggregationInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "name", "displayName", "created_at", "updated_at", "categoriesOnBooks"],
  CategoryOrderByWithRelationInput: ["id", "name", "displayName", "created_at", "updated_at", "categoriesOnBooks"],
  CategoryWhereUniqueInput: ["id", "name"],
  CategoryOrderByWithAggregationInput: ["id", "name", "displayName", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "displayName", "created_at", "updated_at"],
  CategoriesOnBooksWhereInput: ["AND", "OR", "NOT", "category", "categoryId", "book", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksOrderByWithRelationInput: ["category", "categoryId", "book", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksWhereUniqueInput: ["categoryId_bookId"],
  CategoriesOnBooksOrderByWithAggregationInput: ["categoryId", "bookId", "created_at", "updated_at", "_count", "_avg", "_max", "_min", "_sum"],
  CategoriesOnBooksScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "categoryId", "bookId", "created_at", "updated_at"],
  UserCreateInput: ["user_name", "email", "password", "role", "created_at", "updated_at"],
  UserUpdateInput: ["user_name", "email", "password", "role", "created_at", "updated_at"],
  UserCreateManyInput: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserUpdateManyMutationInput: ["user_name", "email", "password", "role", "created_at", "updated_at"],
  AuthorCreateInput: ["name", "created_at", "updated_at", "book"],
  AuthorUpdateInput: ["name", "created_at", "updated_at", "book"],
  AuthorCreateManyInput: ["id", "name", "created_at", "updated_at"],
  AuthorUpdateManyMutationInput: ["name", "created_at", "updated_at"],
  BookCreateInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "author", "categories", "published_at", "created_at", "updated_at"],
  BookUpdateInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "author", "categories", "published_at", "created_at", "updated_at"],
  BookCreateManyInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  BookUpdateManyMutationInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "published_at", "created_at", "updated_at"],
  CategoryCreateInput: ["name", "displayName", "created_at", "updated_at", "categoriesOnBooks"],
  CategoryUpdateInput: ["name", "displayName", "created_at", "updated_at", "categoriesOnBooks"],
  CategoryCreateManyInput: ["id", "name", "displayName", "created_at", "updated_at"],
  CategoryUpdateManyMutationInput: ["name", "displayName", "created_at", "updated_at"],
  CategoriesOnBooksCreateInput: ["category", "book", "created_at", "updated_at"],
  CategoriesOnBooksUpdateInput: ["category", "book", "created_at", "updated_at"],
  CategoriesOnBooksCreateManyInput: ["categoryId", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksUpdateManyMutationInput: ["created_at", "updated_at"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserUser_nameEmailCompoundUniqueInput: ["user_name", "email"],
  UserCountOrderByAggregateInput: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserMinOrderByAggregateInput: ["id", "user_name", "email", "password", "role", "created_at", "updated_at"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BookListRelationFilter: ["every", "some", "none"],
  BookOrderByRelationAggregateInput: ["_count"],
  AuthorCountOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  AuthorAvgOrderByAggregateInput: ["id"],
  AuthorMaxOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  AuthorMinOrderByAggregateInput: ["id", "name", "created_at", "updated_at"],
  AuthorSumOrderByAggregateInput: ["id"],
  BoolFilter: ["equals", "not"],
  AuthorRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CategoriesOnBooksListRelationFilter: ["every", "some", "none"],
  CategoriesOnBooksOrderByRelationAggregateInput: ["_count"],
  BookCountOrderByAggregateInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  BookAvgOrderByAggregateInput: ["id", "authorId"],
  BookMaxOrderByAggregateInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  BookMinOrderByAggregateInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  BookSumOrderByAggregateInput: ["id", "authorId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  CategoryCountOrderByAggregateInput: ["id", "name", "displayName", "created_at", "updated_at"],
  CategoryAvgOrderByAggregateInput: ["id"],
  CategoryMaxOrderByAggregateInput: ["id", "name", "displayName", "created_at", "updated_at"],
  CategoryMinOrderByAggregateInput: ["id", "name", "displayName", "created_at", "updated_at"],
  CategorySumOrderByAggregateInput: ["id"],
  CategoryRelationFilter: ["is", "isNot"],
  BookRelationFilter: ["is", "isNot"],
  CategoriesOnBooksCategoryIdBookIdCompoundUniqueInput: ["categoryId", "bookId"],
  CategoriesOnBooksCountOrderByAggregateInput: ["categoryId", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksAvgOrderByAggregateInput: ["categoryId", "bookId"],
  CategoriesOnBooksMaxOrderByAggregateInput: ["categoryId", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksMinOrderByAggregateInput: ["categoryId", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksSumOrderByAggregateInput: ["categoryId", "bookId"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BookCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookUpdateManyWithoutAuthorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AuthorCreateNestedOneWithoutBookInput: ["create", "connectOrCreate", "connect"],
  CategoriesOnBooksCreateNestedManyWithoutBookInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  AuthorUpdateOneWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CategoriesOnBooksUpdateManyWithoutBookNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CategoriesOnBooksCreateNestedManyWithoutCategoryInput: ["create", "connectOrCreate", "createMany", "connect"],
  CategoriesOnBooksUpdateManyWithoutCategoryNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoryCreateNestedOneWithoutCategoriesOnBooksInput: ["create", "connectOrCreate", "connect"],
  BookCreateNestedOneWithoutCategoriesInput: ["create", "connectOrCreate", "connect"],
  CategoryUpdateOneRequiredWithoutCategoriesOnBooksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  BookUpdateOneRequiredWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BookCreateWithoutAuthorInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "categories", "published_at", "created_at", "updated_at"],
  BookCreateOrConnectWithoutAuthorInput: ["where", "create"],
  BookCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  BookUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "authorId", "published_at", "created_at", "updated_at"],
  AuthorCreateWithoutBookInput: ["name", "created_at", "updated_at"],
  AuthorCreateOrConnectWithoutBookInput: ["where", "create"],
  CategoriesOnBooksCreateWithoutBookInput: ["category", "created_at", "updated_at"],
  CategoriesOnBooksCreateOrConnectWithoutBookInput: ["where", "create"],
  CategoriesOnBooksCreateManyBookInputEnvelope: ["data", "skipDuplicates"],
  AuthorUpsertWithoutBookInput: ["update", "create"],
  AuthorUpdateWithoutBookInput: ["name", "created_at", "updated_at"],
  CategoriesOnBooksUpsertWithWhereUniqueWithoutBookInput: ["where", "update", "create"],
  CategoriesOnBooksUpdateWithWhereUniqueWithoutBookInput: ["where", "data"],
  CategoriesOnBooksUpdateManyWithWhereWithoutBookInput: ["where", "data"],
  CategoriesOnBooksScalarWhereInput: ["AND", "OR", "NOT", "categoryId", "bookId", "created_at", "updated_at"],
  CategoriesOnBooksCreateWithoutCategoryInput: ["book", "created_at", "updated_at"],
  CategoriesOnBooksCreateOrConnectWithoutCategoryInput: ["where", "create"],
  CategoriesOnBooksCreateManyCategoryInputEnvelope: ["data", "skipDuplicates"],
  CategoriesOnBooksUpsertWithWhereUniqueWithoutCategoryInput: ["where", "update", "create"],
  CategoriesOnBooksUpdateWithWhereUniqueWithoutCategoryInput: ["where", "data"],
  CategoriesOnBooksUpdateManyWithWhereWithoutCategoryInput: ["where", "data"],
  CategoryCreateWithoutCategoriesOnBooksInput: ["name", "displayName", "created_at", "updated_at"],
  CategoryCreateOrConnectWithoutCategoriesOnBooksInput: ["where", "create"],
  BookCreateWithoutCategoriesInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "author", "published_at", "created_at", "updated_at"],
  BookCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  CategoryUpsertWithoutCategoriesOnBooksInput: ["update", "create"],
  CategoryUpdateWithoutCategoriesOnBooksInput: ["name", "displayName", "created_at", "updated_at"],
  BookUpsertWithoutCategoriesInput: ["update", "create"],
  BookUpdateWithoutCategoriesInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "author", "published_at", "created_at", "updated_at"],
  BookCreateManyAuthorInput: ["id", "title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "published_at", "created_at", "updated_at"],
  BookUpdateWithoutAuthorInput: ["title", "description", "imageThumbnail", "languageName", "isPublished", "isDeleted", "categories", "published_at", "created_at", "updated_at"],
  CategoriesOnBooksCreateManyBookInput: ["categoryId", "created_at", "updated_at"],
  CategoriesOnBooksUpdateWithoutBookInput: ["category", "created_at", "updated_at"],
  CategoriesOnBooksCreateManyCategoryInput: ["bookId", "created_at", "updated_at"],
  CategoriesOnBooksUpdateWithoutCategoryInput: ["book", "created_at", "updated_at"]
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

