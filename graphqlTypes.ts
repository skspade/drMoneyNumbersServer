type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
  saveTransaction?: Maybe<Transaction>,
};


export type MutationSaveTransactionArgs = {
  transaction?: Maybe<TransactionInput>
};

export type Query = {
  getTransactions?: Maybe<Array<Maybe<Transaction>>>,
  getCategories?: Maybe<Array<Maybe<Transaction>>>,
};


export type QueryGetTransactionsArgs = {
  accountId: Scalars['ID']
};


export type QueryGetCategoriesArgs = {
  accountId: Scalars['ID']
};

export type Transaction = {
  date?: Maybe<Scalars['String']>,
  payee?: Maybe<Scalars['String']>,
  category?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  outflow?: Maybe<Scalars['Float']>,
  inflow?: Maybe<Scalars['Float']>,
  cleared?: Maybe<Scalars['Boolean']>,
  flagged?: Maybe<Scalars['String']>,
};

export type TransactionInput = {
  date: Scalars['String'],
  payee: Scalars['String'],
  category: Scalars['String'],
  description: Scalars['String'],
  outflow: Scalars['Float'],
  inflow: Scalars['Float'],
  cleared: Scalars['Boolean'],
  flagged: Scalars['String'],
};


import { GraphQLResolveInfo } from 'graphql';

export type ArrayOrIterable<T> = Array<T> | Iterable<T>;



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface ISubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type MutationResolvers<Context = any, ParentType = Mutation> = {
  saveTransaction?: Resolver<Maybe<Transaction>, ParentType, Context, MutationSaveTransactionArgs>,
};

export type QueryResolvers<Context = any, ParentType = Query> = {
  getTransactions?: Resolver<Maybe<ArrayOrIterable<Maybe<Transaction>>>, ParentType, Context, QueryGetTransactionsArgs>,
  getCategories?: Resolver<Maybe<ArrayOrIterable<Maybe<Transaction>>>, ParentType, Context, QueryGetCategoriesArgs>,
};

export type TransactionResolvers<Context = any, ParentType = Transaction> = {
  date?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  payee?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  category?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  description?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  outflow?: Resolver<Maybe<Scalars['Float']>, ParentType, Context>,
  inflow?: Resolver<Maybe<Scalars['Float']>, ParentType, Context>,
  cleared?: Resolver<Maybe<Scalars['Boolean']>, ParentType, Context>,
  flagged?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
};

export type IResolvers<Context = any> = {
  Mutation?: MutationResolvers<Context>,
  Query?: QueryResolvers<Context>,
  Transaction?: TransactionResolvers<Context>,
};

export type IDirectiveResolvers<Context = any> = {};
