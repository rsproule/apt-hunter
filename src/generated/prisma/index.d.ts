
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Scrape
 * 
 */
export type Scrape = $Result.DefaultSelection<Prisma.$ScrapePayload>
/**
 * Model Listing
 * 
 */
export type Listing = $Result.DefaultSelection<Prisma.$ListingPayload>
/**
 * Model ScrapeListing
 * 
 */
export type ScrapeListing = $Result.DefaultSelection<Prisma.$ScrapeListingPayload>
/**
 * Model Enhancement
 * 
 */
export type Enhancement = $Result.DefaultSelection<Prisma.$EnhancementPayload>
/**
 * Model EnhancementColumn
 * 
 */
export type EnhancementColumn = $Result.DefaultSelection<Prisma.$EnhancementColumnPayload>
/**
 * Model EnhancementResult
 * 
 */
export type EnhancementResult = $Result.DefaultSelection<Prisma.$EnhancementResultPayload>
/**
 * Model EnhancementValue
 * 
 */
export type EnhancementValue = $Result.DefaultSelection<Prisma.$EnhancementValuePayload>
/**
 * Model SavedQuery
 * 
 */
export type SavedQuery = $Result.DefaultSelection<Prisma.$SavedQueryPayload>
/**
 * Model UserListingResponse
 * 
 */
export type UserListingResponse = $Result.DefaultSelection<Prisma.$UserListingResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Scrapes
 * const scrapes = await prisma.scrape.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Scrapes
   * const scrapes = await prisma.scrape.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.scrape`: Exposes CRUD operations for the **Scrape** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scrapes
    * const scrapes = await prisma.scrape.findMany()
    * ```
    */
  get scrape(): Prisma.ScrapeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listing`: Exposes CRUD operations for the **Listing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listings
    * const listings = await prisma.listing.findMany()
    * ```
    */
  get listing(): Prisma.ListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapeListing`: Exposes CRUD operations for the **ScrapeListing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScrapeListings
    * const scrapeListings = await prisma.scrapeListing.findMany()
    * ```
    */
  get scrapeListing(): Prisma.ScrapeListingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enhancement`: Exposes CRUD operations for the **Enhancement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enhancements
    * const enhancements = await prisma.enhancement.findMany()
    * ```
    */
  get enhancement(): Prisma.EnhancementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enhancementColumn`: Exposes CRUD operations for the **EnhancementColumn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnhancementColumns
    * const enhancementColumns = await prisma.enhancementColumn.findMany()
    * ```
    */
  get enhancementColumn(): Prisma.EnhancementColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enhancementResult`: Exposes CRUD operations for the **EnhancementResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnhancementResults
    * const enhancementResults = await prisma.enhancementResult.findMany()
    * ```
    */
  get enhancementResult(): Prisma.EnhancementResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enhancementValue`: Exposes CRUD operations for the **EnhancementValue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnhancementValues
    * const enhancementValues = await prisma.enhancementValue.findMany()
    * ```
    */
  get enhancementValue(): Prisma.EnhancementValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedQuery`: Exposes CRUD operations for the **SavedQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedQueries
    * const savedQueries = await prisma.savedQuery.findMany()
    * ```
    */
  get savedQuery(): Prisma.SavedQueryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userListingResponse`: Exposes CRUD operations for the **UserListingResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserListingResponses
    * const userListingResponses = await prisma.userListingResponse.findMany()
    * ```
    */
  get userListingResponse(): Prisma.UserListingResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Scrape: 'Scrape',
    Listing: 'Listing',
    ScrapeListing: 'ScrapeListing',
    Enhancement: 'Enhancement',
    EnhancementColumn: 'EnhancementColumn',
    EnhancementResult: 'EnhancementResult',
    EnhancementValue: 'EnhancementValue',
    SavedQuery: 'SavedQuery',
    UserListingResponse: 'UserListingResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "scrape" | "listing" | "scrapeListing" | "enhancement" | "enhancementColumn" | "enhancementResult" | "enhancementValue" | "savedQuery" | "userListingResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Scrape: {
        payload: Prisma.$ScrapePayload<ExtArgs>
        fields: Prisma.ScrapeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>
          }
          findFirst: {
            args: Prisma.ScrapeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>
          }
          findMany: {
            args: Prisma.ScrapeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>[]
          }
          create: {
            args: Prisma.ScrapeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>
          }
          createMany: {
            args: Prisma.ScrapeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>[]
          }
          delete: {
            args: Prisma.ScrapeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>
          }
          update: {
            args: Prisma.ScrapeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>
          }
          deleteMany: {
            args: Prisma.ScrapeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>[]
          }
          upsert: {
            args: Prisma.ScrapeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapePayload>
          }
          aggregate: {
            args: Prisma.ScrapeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrape>
          }
          groupBy: {
            args: Prisma.ScrapeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeCountAggregateOutputType> | number
          }
        }
      }
      Listing: {
        payload: Prisma.$ListingPayload<ExtArgs>
        fields: Prisma.ListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findFirst: {
            args: Prisma.ListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          findMany: {
            args: Prisma.ListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          create: {
            args: Prisma.ListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          createMany: {
            args: Prisma.ListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          delete: {
            args: Prisma.ListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          update: {
            args: Prisma.ListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          deleteMany: {
            args: Prisma.ListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>[]
          }
          upsert: {
            args: Prisma.ListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListingPayload>
          }
          aggregate: {
            args: Prisma.ListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListing>
          }
          groupBy: {
            args: Prisma.ListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListingCountArgs<ExtArgs>
            result: $Utils.Optional<ListingCountAggregateOutputType> | number
          }
        }
      }
      ScrapeListing: {
        payload: Prisma.$ScrapeListingPayload<ExtArgs>
        fields: Prisma.ScrapeListingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScrapeListingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScrapeListingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>
          }
          findFirst: {
            args: Prisma.ScrapeListingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScrapeListingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>
          }
          findMany: {
            args: Prisma.ScrapeListingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>[]
          }
          create: {
            args: Prisma.ScrapeListingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>
          }
          createMany: {
            args: Prisma.ScrapeListingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScrapeListingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>[]
          }
          delete: {
            args: Prisma.ScrapeListingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>
          }
          update: {
            args: Prisma.ScrapeListingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>
          }
          deleteMany: {
            args: Prisma.ScrapeListingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScrapeListingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScrapeListingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>[]
          }
          upsert: {
            args: Prisma.ScrapeListingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScrapeListingPayload>
          }
          aggregate: {
            args: Prisma.ScrapeListingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapeListing>
          }
          groupBy: {
            args: Prisma.ScrapeListingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapeListingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScrapeListingCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapeListingCountAggregateOutputType> | number
          }
        }
      }
      Enhancement: {
        payload: Prisma.$EnhancementPayload<ExtArgs>
        fields: Prisma.EnhancementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnhancementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnhancementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>
          }
          findFirst: {
            args: Prisma.EnhancementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnhancementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>
          }
          findMany: {
            args: Prisma.EnhancementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>[]
          }
          create: {
            args: Prisma.EnhancementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>
          }
          createMany: {
            args: Prisma.EnhancementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnhancementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>[]
          }
          delete: {
            args: Prisma.EnhancementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>
          }
          update: {
            args: Prisma.EnhancementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>
          }
          deleteMany: {
            args: Prisma.EnhancementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnhancementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnhancementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>[]
          }
          upsert: {
            args: Prisma.EnhancementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementPayload>
          }
          aggregate: {
            args: Prisma.EnhancementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnhancement>
          }
          groupBy: {
            args: Prisma.EnhancementGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnhancementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnhancementCountArgs<ExtArgs>
            result: $Utils.Optional<EnhancementCountAggregateOutputType> | number
          }
        }
      }
      EnhancementColumn: {
        payload: Prisma.$EnhancementColumnPayload<ExtArgs>
        fields: Prisma.EnhancementColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnhancementColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnhancementColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>
          }
          findFirst: {
            args: Prisma.EnhancementColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnhancementColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>
          }
          findMany: {
            args: Prisma.EnhancementColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>[]
          }
          create: {
            args: Prisma.EnhancementColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>
          }
          createMany: {
            args: Prisma.EnhancementColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnhancementColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>[]
          }
          delete: {
            args: Prisma.EnhancementColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>
          }
          update: {
            args: Prisma.EnhancementColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>
          }
          deleteMany: {
            args: Prisma.EnhancementColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnhancementColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnhancementColumnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>[]
          }
          upsert: {
            args: Prisma.EnhancementColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementColumnPayload>
          }
          aggregate: {
            args: Prisma.EnhancementColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnhancementColumn>
          }
          groupBy: {
            args: Prisma.EnhancementColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnhancementColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnhancementColumnCountArgs<ExtArgs>
            result: $Utils.Optional<EnhancementColumnCountAggregateOutputType> | number
          }
        }
      }
      EnhancementResult: {
        payload: Prisma.$EnhancementResultPayload<ExtArgs>
        fields: Prisma.EnhancementResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnhancementResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnhancementResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>
          }
          findFirst: {
            args: Prisma.EnhancementResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnhancementResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>
          }
          findMany: {
            args: Prisma.EnhancementResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>[]
          }
          create: {
            args: Prisma.EnhancementResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>
          }
          createMany: {
            args: Prisma.EnhancementResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnhancementResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>[]
          }
          delete: {
            args: Prisma.EnhancementResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>
          }
          update: {
            args: Prisma.EnhancementResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>
          }
          deleteMany: {
            args: Prisma.EnhancementResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnhancementResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnhancementResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>[]
          }
          upsert: {
            args: Prisma.EnhancementResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementResultPayload>
          }
          aggregate: {
            args: Prisma.EnhancementResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnhancementResult>
          }
          groupBy: {
            args: Prisma.EnhancementResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnhancementResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnhancementResultCountArgs<ExtArgs>
            result: $Utils.Optional<EnhancementResultCountAggregateOutputType> | number
          }
        }
      }
      EnhancementValue: {
        payload: Prisma.$EnhancementValuePayload<ExtArgs>
        fields: Prisma.EnhancementValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnhancementValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnhancementValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>
          }
          findFirst: {
            args: Prisma.EnhancementValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnhancementValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>
          }
          findMany: {
            args: Prisma.EnhancementValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>[]
          }
          create: {
            args: Prisma.EnhancementValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>
          }
          createMany: {
            args: Prisma.EnhancementValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnhancementValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>[]
          }
          delete: {
            args: Prisma.EnhancementValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>
          }
          update: {
            args: Prisma.EnhancementValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>
          }
          deleteMany: {
            args: Prisma.EnhancementValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnhancementValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnhancementValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>[]
          }
          upsert: {
            args: Prisma.EnhancementValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnhancementValuePayload>
          }
          aggregate: {
            args: Prisma.EnhancementValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnhancementValue>
          }
          groupBy: {
            args: Prisma.EnhancementValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnhancementValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnhancementValueCountArgs<ExtArgs>
            result: $Utils.Optional<EnhancementValueCountAggregateOutputType> | number
          }
        }
      }
      SavedQuery: {
        payload: Prisma.$SavedQueryPayload<ExtArgs>
        fields: Prisma.SavedQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>
          }
          findFirst: {
            args: Prisma.SavedQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>
          }
          findMany: {
            args: Prisma.SavedQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>[]
          }
          create: {
            args: Prisma.SavedQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>
          }
          createMany: {
            args: Prisma.SavedQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SavedQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>[]
          }
          delete: {
            args: Prisma.SavedQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>
          }
          update: {
            args: Prisma.SavedQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>
          }
          deleteMany: {
            args: Prisma.SavedQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SavedQueryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>[]
          }
          upsert: {
            args: Prisma.SavedQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedQueryPayload>
          }
          aggregate: {
            args: Prisma.SavedQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedQuery>
          }
          groupBy: {
            args: Prisma.SavedQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedQueryCountArgs<ExtArgs>
            result: $Utils.Optional<SavedQueryCountAggregateOutputType> | number
          }
        }
      }
      UserListingResponse: {
        payload: Prisma.$UserListingResponsePayload<ExtArgs>
        fields: Prisma.UserListingResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserListingResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserListingResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>
          }
          findFirst: {
            args: Prisma.UserListingResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserListingResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>
          }
          findMany: {
            args: Prisma.UserListingResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>[]
          }
          create: {
            args: Prisma.UserListingResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>
          }
          createMany: {
            args: Prisma.UserListingResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserListingResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>[]
          }
          delete: {
            args: Prisma.UserListingResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>
          }
          update: {
            args: Prisma.UserListingResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>
          }
          deleteMany: {
            args: Prisma.UserListingResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserListingResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserListingResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>[]
          }
          upsert: {
            args: Prisma.UserListingResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserListingResponsePayload>
          }
          aggregate: {
            args: Prisma.UserListingResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserListingResponse>
          }
          groupBy: {
            args: Prisma.UserListingResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserListingResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserListingResponseCountArgs<ExtArgs>
            result: $Utils.Optional<UserListingResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    scrape?: ScrapeOmit
    listing?: ListingOmit
    scrapeListing?: ScrapeListingOmit
    enhancement?: EnhancementOmit
    enhancementColumn?: EnhancementColumnOmit
    enhancementResult?: EnhancementResultOmit
    enhancementValue?: EnhancementValueOmit
    savedQuery?: SavedQueryOmit
    userListingResponse?: UserListingResponseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScrapeCountOutputType
   */

  export type ScrapeCountOutputType = {
    listings: number
    enhancements: number
  }

  export type ScrapeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | ScrapeCountOutputTypeCountListingsArgs
    enhancements?: boolean | ScrapeCountOutputTypeCountEnhancementsArgs
  }

  // Custom InputTypes
  /**
   * ScrapeCountOutputType without action
   */
  export type ScrapeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeCountOutputType
     */
    select?: ScrapeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScrapeCountOutputType without action
   */
  export type ScrapeCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeListingWhereInput
  }

  /**
   * ScrapeCountOutputType without action
   */
  export type ScrapeCountOutputTypeCountEnhancementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementWhereInput
  }


  /**
   * Count Type ListingCountOutputType
   */

  export type ListingCountOutputType = {
    scrapes: number
    enhancementResults: number
    userResponses: number
  }

  export type ListingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapes?: boolean | ListingCountOutputTypeCountScrapesArgs
    enhancementResults?: boolean | ListingCountOutputTypeCountEnhancementResultsArgs
    userResponses?: boolean | ListingCountOutputTypeCountUserResponsesArgs
  }

  // Custom InputTypes
  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListingCountOutputType
     */
    select?: ListingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountScrapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeListingWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountEnhancementResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementResultWhereInput
  }

  /**
   * ListingCountOutputType without action
   */
  export type ListingCountOutputTypeCountUserResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListingResponseWhereInput
  }


  /**
   * Count Type EnhancementCountOutputType
   */

  export type EnhancementCountOutputType = {
    columns: number
    results: number
  }

  export type EnhancementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | EnhancementCountOutputTypeCountColumnsArgs
    results?: boolean | EnhancementCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * EnhancementCountOutputType without action
   */
  export type EnhancementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementCountOutputType
     */
    select?: EnhancementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnhancementCountOutputType without action
   */
  export type EnhancementCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementColumnWhereInput
  }

  /**
   * EnhancementCountOutputType without action
   */
  export type EnhancementCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementResultWhereInput
  }


  /**
   * Count Type EnhancementColumnCountOutputType
   */

  export type EnhancementColumnCountOutputType = {
    values: number
  }

  export type EnhancementColumnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    values?: boolean | EnhancementColumnCountOutputTypeCountValuesArgs
  }

  // Custom InputTypes
  /**
   * EnhancementColumnCountOutputType without action
   */
  export type EnhancementColumnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumnCountOutputType
     */
    select?: EnhancementColumnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnhancementColumnCountOutputType without action
   */
  export type EnhancementColumnCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementValueWhereInput
  }


  /**
   * Count Type EnhancementResultCountOutputType
   */

  export type EnhancementResultCountOutputType = {
    individualValues: number
  }

  export type EnhancementResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    individualValues?: boolean | EnhancementResultCountOutputTypeCountIndividualValuesArgs
  }

  // Custom InputTypes
  /**
   * EnhancementResultCountOutputType without action
   */
  export type EnhancementResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResultCountOutputType
     */
    select?: EnhancementResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EnhancementResultCountOutputType without action
   */
  export type EnhancementResultCountOutputTypeCountIndividualValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementValueWhereInput
  }


  /**
   * Count Type SavedQueryCountOutputType
   */

  export type SavedQueryCountOutputType = {
    responses: number
  }

  export type SavedQueryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | SavedQueryCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * SavedQueryCountOutputType without action
   */
  export type SavedQueryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQueryCountOutputType
     */
    select?: SavedQueryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SavedQueryCountOutputType without action
   */
  export type SavedQueryCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListingResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Scrape
   */

  export type AggregateScrape = {
    _count: ScrapeCountAggregateOutputType | null
    _avg: ScrapeAvgAggregateOutputType | null
    _sum: ScrapeSumAggregateOutputType | null
    _min: ScrapeMinAggregateOutputType | null
    _max: ScrapeMaxAggregateOutputType | null
  }

  export type ScrapeAvgAggregateOutputType = {
    durationMs: number | null
    listingsCount: number | null
  }

  export type ScrapeSumAggregateOutputType = {
    durationMs: number | null
    listingsCount: number | null
  }

  export type ScrapeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    name: string | null
    searchType: string | null
    apifyRunId: string | null
    taskId: string | null
    status: string | null
    error: string | null
    completedAt: Date | null
    durationMs: number | null
    listingsCount: number | null
  }

  export type ScrapeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    name: string | null
    searchType: string | null
    apifyRunId: string | null
    taskId: string | null
    status: string | null
    error: string | null
    completedAt: Date | null
    durationMs: number | null
    listingsCount: number | null
  }

  export type ScrapeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    name: number
    searchType: number
    searchQuery: number
    apifyRunId: number
    taskId: number
    status: number
    error: number
    completedAt: number
    durationMs: number
    listingsCount: number
    _all: number
  }


  export type ScrapeAvgAggregateInputType = {
    durationMs?: true
    listingsCount?: true
  }

  export type ScrapeSumAggregateInputType = {
    durationMs?: true
    listingsCount?: true
  }

  export type ScrapeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    searchType?: true
    apifyRunId?: true
    taskId?: true
    status?: true
    error?: true
    completedAt?: true
    durationMs?: true
    listingsCount?: true
  }

  export type ScrapeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    searchType?: true
    apifyRunId?: true
    taskId?: true
    status?: true
    error?: true
    completedAt?: true
    durationMs?: true
    listingsCount?: true
  }

  export type ScrapeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    searchType?: true
    searchQuery?: true
    apifyRunId?: true
    taskId?: true
    status?: true
    error?: true
    completedAt?: true
    durationMs?: true
    listingsCount?: true
    _all?: true
  }

  export type ScrapeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scrape to aggregate.
     */
    where?: ScrapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrapes to fetch.
     */
    orderBy?: ScrapeOrderByWithRelationInput | ScrapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scrapes
    **/
    _count?: true | ScrapeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeMaxAggregateInputType
  }

  export type GetScrapeAggregateType<T extends ScrapeAggregateArgs> = {
        [P in keyof T & keyof AggregateScrape]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrape[P]>
      : GetScalarType<T[P], AggregateScrape[P]>
  }




  export type ScrapeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeWhereInput
    orderBy?: ScrapeOrderByWithAggregationInput | ScrapeOrderByWithAggregationInput[]
    by: ScrapeScalarFieldEnum[] | ScrapeScalarFieldEnum
    having?: ScrapeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeCountAggregateInputType | true
    _avg?: ScrapeAvgAggregateInputType
    _sum?: ScrapeSumAggregateInputType
    _min?: ScrapeMinAggregateInputType
    _max?: ScrapeMaxAggregateInputType
  }

  export type ScrapeGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    name: string | null
    searchType: string
    searchQuery: JsonValue
    apifyRunId: string
    taskId: string | null
    status: string
    error: string | null
    completedAt: Date | null
    durationMs: number | null
    listingsCount: number
    _count: ScrapeCountAggregateOutputType | null
    _avg: ScrapeAvgAggregateOutputType | null
    _sum: ScrapeSumAggregateOutputType | null
    _min: ScrapeMinAggregateOutputType | null
    _max: ScrapeMaxAggregateOutputType | null
  }

  type GetScrapeGroupByPayload<T extends ScrapeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    searchType?: boolean
    searchQuery?: boolean
    apifyRunId?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    durationMs?: boolean
    listingsCount?: boolean
    listings?: boolean | Scrape$listingsArgs<ExtArgs>
    enhancements?: boolean | Scrape$enhancementsArgs<ExtArgs>
    _count?: boolean | ScrapeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrape"]>

  export type ScrapeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    searchType?: boolean
    searchQuery?: boolean
    apifyRunId?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    durationMs?: boolean
    listingsCount?: boolean
  }, ExtArgs["result"]["scrape"]>

  export type ScrapeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    searchType?: boolean
    searchQuery?: boolean
    apifyRunId?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    durationMs?: boolean
    listingsCount?: boolean
  }, ExtArgs["result"]["scrape"]>

  export type ScrapeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    searchType?: boolean
    searchQuery?: boolean
    apifyRunId?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    durationMs?: boolean
    listingsCount?: boolean
  }

  export type ScrapeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "name" | "searchType" | "searchQuery" | "apifyRunId" | "taskId" | "status" | "error" | "completedAt" | "durationMs" | "listingsCount", ExtArgs["result"]["scrape"]>
  export type ScrapeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | Scrape$listingsArgs<ExtArgs>
    enhancements?: boolean | Scrape$enhancementsArgs<ExtArgs>
    _count?: boolean | ScrapeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScrapeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScrapeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScrapePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scrape"
    objects: {
      listings: Prisma.$ScrapeListingPayload<ExtArgs>[]
      enhancements: Prisma.$EnhancementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      name: string | null
      searchType: string
      searchQuery: Prisma.JsonValue
      apifyRunId: string
      taskId: string | null
      status: string
      error: string | null
      completedAt: Date | null
      durationMs: number | null
      listingsCount: number
    }, ExtArgs["result"]["scrape"]>
    composites: {}
  }

  type ScrapeGetPayload<S extends boolean | null | undefined | ScrapeDefaultArgs> = $Result.GetResult<Prisma.$ScrapePayload, S>

  type ScrapeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeCountAggregateInputType | true
    }

  export interface ScrapeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scrape'], meta: { name: 'Scrape' } }
    /**
     * Find zero or one Scrape that matches the filter.
     * @param {ScrapeFindUniqueArgs} args - Arguments to find a Scrape
     * @example
     * // Get one Scrape
     * const scrape = await prisma.scrape.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeFindUniqueArgs>(args: SelectSubset<T, ScrapeFindUniqueArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scrape that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeFindUniqueOrThrowArgs} args - Arguments to find a Scrape
     * @example
     * // Get one Scrape
     * const scrape = await prisma.scrape.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scrape that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFindFirstArgs} args - Arguments to find a Scrape
     * @example
     * // Get one Scrape
     * const scrape = await prisma.scrape.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeFindFirstArgs>(args?: SelectSubset<T, ScrapeFindFirstArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scrape that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFindFirstOrThrowArgs} args - Arguments to find a Scrape
     * @example
     * // Get one Scrape
     * const scrape = await prisma.scrape.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scrapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scrapes
     * const scrapes = await prisma.scrape.findMany()
     * 
     * // Get first 10 Scrapes
     * const scrapes = await prisma.scrape.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapeWithIdOnly = await prisma.scrape.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScrapeFindManyArgs>(args?: SelectSubset<T, ScrapeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scrape.
     * @param {ScrapeCreateArgs} args - Arguments to create a Scrape.
     * @example
     * // Create one Scrape
     * const Scrape = await prisma.scrape.create({
     *   data: {
     *     // ... data to create a Scrape
     *   }
     * })
     * 
     */
    create<T extends ScrapeCreateArgs>(args: SelectSubset<T, ScrapeCreateArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scrapes.
     * @param {ScrapeCreateManyArgs} args - Arguments to create many Scrapes.
     * @example
     * // Create many Scrapes
     * const scrape = await prisma.scrape.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeCreateManyArgs>(args?: SelectSubset<T, ScrapeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scrapes and returns the data saved in the database.
     * @param {ScrapeCreateManyAndReturnArgs} args - Arguments to create many Scrapes.
     * @example
     * // Create many Scrapes
     * const scrape = await prisma.scrape.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scrapes and only return the `id`
     * const scrapeWithIdOnly = await prisma.scrape.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scrape.
     * @param {ScrapeDeleteArgs} args - Arguments to delete one Scrape.
     * @example
     * // Delete one Scrape
     * const Scrape = await prisma.scrape.delete({
     *   where: {
     *     // ... filter to delete one Scrape
     *   }
     * })
     * 
     */
    delete<T extends ScrapeDeleteArgs>(args: SelectSubset<T, ScrapeDeleteArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scrape.
     * @param {ScrapeUpdateArgs} args - Arguments to update one Scrape.
     * @example
     * // Update one Scrape
     * const scrape = await prisma.scrape.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeUpdateArgs>(args: SelectSubset<T, ScrapeUpdateArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scrapes.
     * @param {ScrapeDeleteManyArgs} args - Arguments to filter Scrapes to delete.
     * @example
     * // Delete a few Scrapes
     * const { count } = await prisma.scrape.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeDeleteManyArgs>(args?: SelectSubset<T, ScrapeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scrapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scrapes
     * const scrape = await prisma.scrape.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeUpdateManyArgs>(args: SelectSubset<T, ScrapeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scrapes and returns the data updated in the database.
     * @param {ScrapeUpdateManyAndReturnArgs} args - Arguments to update many Scrapes.
     * @example
     * // Update many Scrapes
     * const scrape = await prisma.scrape.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scrapes and only return the `id`
     * const scrapeWithIdOnly = await prisma.scrape.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapeUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scrape.
     * @param {ScrapeUpsertArgs} args - Arguments to update or create a Scrape.
     * @example
     * // Update or create a Scrape
     * const scrape = await prisma.scrape.upsert({
     *   create: {
     *     // ... data to create a Scrape
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scrape we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeUpsertArgs>(args: SelectSubset<T, ScrapeUpsertArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scrapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeCountArgs} args - Arguments to filter Scrapes to count.
     * @example
     * // Count the number of Scrapes
     * const count = await prisma.scrape.count({
     *   where: {
     *     // ... the filter for the Scrapes we want to count
     *   }
     * })
    **/
    count<T extends ScrapeCountArgs>(
      args?: Subset<T, ScrapeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scrape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeAggregateArgs>(args: Subset<T, ScrapeAggregateArgs>): Prisma.PrismaPromise<GetScrapeAggregateType<T>>

    /**
     * Group by Scrape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scrape model
   */
  readonly fields: ScrapeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scrape.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listings<T extends Scrape$listingsArgs<ExtArgs> = {}>(args?: Subset<T, Scrape$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enhancements<T extends Scrape$enhancementsArgs<ExtArgs> = {}>(args?: Subset<T, Scrape$enhancementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scrape model
   */
  interface ScrapeFieldRefs {
    readonly id: FieldRef<"Scrape", 'String'>
    readonly createdAt: FieldRef<"Scrape", 'DateTime'>
    readonly updatedAt: FieldRef<"Scrape", 'DateTime'>
    readonly userId: FieldRef<"Scrape", 'String'>
    readonly name: FieldRef<"Scrape", 'String'>
    readonly searchType: FieldRef<"Scrape", 'String'>
    readonly searchQuery: FieldRef<"Scrape", 'Json'>
    readonly apifyRunId: FieldRef<"Scrape", 'String'>
    readonly taskId: FieldRef<"Scrape", 'String'>
    readonly status: FieldRef<"Scrape", 'String'>
    readonly error: FieldRef<"Scrape", 'String'>
    readonly completedAt: FieldRef<"Scrape", 'DateTime'>
    readonly durationMs: FieldRef<"Scrape", 'Int'>
    readonly listingsCount: FieldRef<"Scrape", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Scrape findUnique
   */
  export type ScrapeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * Filter, which Scrape to fetch.
     */
    where: ScrapeWhereUniqueInput
  }

  /**
   * Scrape findUniqueOrThrow
   */
  export type ScrapeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * Filter, which Scrape to fetch.
     */
    where: ScrapeWhereUniqueInput
  }

  /**
   * Scrape findFirst
   */
  export type ScrapeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * Filter, which Scrape to fetch.
     */
    where?: ScrapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrapes to fetch.
     */
    orderBy?: ScrapeOrderByWithRelationInput | ScrapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scrapes.
     */
    cursor?: ScrapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scrapes.
     */
    distinct?: ScrapeScalarFieldEnum | ScrapeScalarFieldEnum[]
  }

  /**
   * Scrape findFirstOrThrow
   */
  export type ScrapeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * Filter, which Scrape to fetch.
     */
    where?: ScrapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrapes to fetch.
     */
    orderBy?: ScrapeOrderByWithRelationInput | ScrapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scrapes.
     */
    cursor?: ScrapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scrapes.
     */
    distinct?: ScrapeScalarFieldEnum | ScrapeScalarFieldEnum[]
  }

  /**
   * Scrape findMany
   */
  export type ScrapeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * Filter, which Scrapes to fetch.
     */
    where?: ScrapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scrapes to fetch.
     */
    orderBy?: ScrapeOrderByWithRelationInput | ScrapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scrapes.
     */
    cursor?: ScrapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scrapes.
     */
    skip?: number
    distinct?: ScrapeScalarFieldEnum | ScrapeScalarFieldEnum[]
  }

  /**
   * Scrape create
   */
  export type ScrapeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * The data needed to create a Scrape.
     */
    data: XOR<ScrapeCreateInput, ScrapeUncheckedCreateInput>
  }

  /**
   * Scrape createMany
   */
  export type ScrapeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scrapes.
     */
    data: ScrapeCreateManyInput | ScrapeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scrape createManyAndReturn
   */
  export type ScrapeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * The data used to create many Scrapes.
     */
    data: ScrapeCreateManyInput | ScrapeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scrape update
   */
  export type ScrapeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * The data needed to update a Scrape.
     */
    data: XOR<ScrapeUpdateInput, ScrapeUncheckedUpdateInput>
    /**
     * Choose, which Scrape to update.
     */
    where: ScrapeWhereUniqueInput
  }

  /**
   * Scrape updateMany
   */
  export type ScrapeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scrapes.
     */
    data: XOR<ScrapeUpdateManyMutationInput, ScrapeUncheckedUpdateManyInput>
    /**
     * Filter which Scrapes to update
     */
    where?: ScrapeWhereInput
    /**
     * Limit how many Scrapes to update.
     */
    limit?: number
  }

  /**
   * Scrape updateManyAndReturn
   */
  export type ScrapeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * The data used to update Scrapes.
     */
    data: XOR<ScrapeUpdateManyMutationInput, ScrapeUncheckedUpdateManyInput>
    /**
     * Filter which Scrapes to update
     */
    where?: ScrapeWhereInput
    /**
     * Limit how many Scrapes to update.
     */
    limit?: number
  }

  /**
   * Scrape upsert
   */
  export type ScrapeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * The filter to search for the Scrape to update in case it exists.
     */
    where: ScrapeWhereUniqueInput
    /**
     * In case the Scrape found by the `where` argument doesn't exist, create a new Scrape with this data.
     */
    create: XOR<ScrapeCreateInput, ScrapeUncheckedCreateInput>
    /**
     * In case the Scrape was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeUpdateInput, ScrapeUncheckedUpdateInput>
  }

  /**
   * Scrape delete
   */
  export type ScrapeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
    /**
     * Filter which Scrape to delete.
     */
    where: ScrapeWhereUniqueInput
  }

  /**
   * Scrape deleteMany
   */
  export type ScrapeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scrapes to delete
     */
    where?: ScrapeWhereInput
    /**
     * Limit how many Scrapes to delete.
     */
    limit?: number
  }

  /**
   * Scrape.listings
   */
  export type Scrape$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    where?: ScrapeListingWhereInput
    orderBy?: ScrapeListingOrderByWithRelationInput | ScrapeListingOrderByWithRelationInput[]
    cursor?: ScrapeListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapeListingScalarFieldEnum | ScrapeListingScalarFieldEnum[]
  }

  /**
   * Scrape.enhancements
   */
  export type Scrape$enhancementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    where?: EnhancementWhereInput
    orderBy?: EnhancementOrderByWithRelationInput | EnhancementOrderByWithRelationInput[]
    cursor?: EnhancementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnhancementScalarFieldEnum | EnhancementScalarFieldEnum[]
  }

  /**
   * Scrape without action
   */
  export type ScrapeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scrape
     */
    select?: ScrapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scrape
     */
    omit?: ScrapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeInclude<ExtArgs> | null
  }


  /**
   * Model Listing
   */

  export type AggregateListing = {
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  export type ListingAvgAggregateOutputType = {
    price: number | null
    latitude: number | null
    longitude: number | null
    beds: number | null
    baths: number | null
    area: number | null
    zestimate: number | null
    rentZestimate: number | null
  }

  export type ListingSumAggregateOutputType = {
    price: number | null
    latitude: number | null
    longitude: number | null
    beds: number | null
    baths: number | null
    area: number | null
    zestimate: number | null
    rentZestimate: number | null
  }

  export type ListingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    zpid: string | null
    detailUrl: string | null
    imgSrc: string | null
    hasImage: boolean | null
    has3DModel: boolean | null
    hasVideo: boolean | null
    statusType: string | null
    statusText: string | null
    price: number | null
    priceFormatted: string | null
    currency: string | null
    address: string | null
    addressStreet: string | null
    addressCity: string | null
    addressState: string | null
    addressZipcode: string | null
    latitude: number | null
    longitude: number | null
    beds: number | null
    baths: number | null
    area: number | null
    homeType: string | null
    availabilityDate: Date | null
    scrapedAt: Date | null
    brokerName: string | null
    zestimate: number | null
    rentZestimate: number | null
    isFeaturedListing: boolean | null
  }

  export type ListingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    zpid: string | null
    detailUrl: string | null
    imgSrc: string | null
    hasImage: boolean | null
    has3DModel: boolean | null
    hasVideo: boolean | null
    statusType: string | null
    statusText: string | null
    price: number | null
    priceFormatted: string | null
    currency: string | null
    address: string | null
    addressStreet: string | null
    addressCity: string | null
    addressState: string | null
    addressZipcode: string | null
    latitude: number | null
    longitude: number | null
    beds: number | null
    baths: number | null
    area: number | null
    homeType: string | null
    availabilityDate: Date | null
    scrapedAt: Date | null
    brokerName: string | null
    zestimate: number | null
    rentZestimate: number | null
    isFeaturedListing: boolean | null
  }

  export type ListingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    zpid: number
    detailUrl: number
    imgSrc: number
    photos: number
    hasImage: number
    has3DModel: number
    hasVideo: number
    statusType: number
    statusText: number
    price: number
    priceFormatted: number
    currency: number
    address: number
    addressStreet: number
    addressCity: number
    addressState: number
    addressZipcode: number
    latitude: number
    longitude: number
    beds: number
    baths: number
    area: number
    homeType: number
    availabilityDate: number
    scrapedAt: number
    brokerName: number
    zestimate: number
    rentZestimate: number
    isFeaturedListing: number
    rawData: number
    _all: number
  }


  export type ListingAvgAggregateInputType = {
    price?: true
    latitude?: true
    longitude?: true
    beds?: true
    baths?: true
    area?: true
    zestimate?: true
    rentZestimate?: true
  }

  export type ListingSumAggregateInputType = {
    price?: true
    latitude?: true
    longitude?: true
    beds?: true
    baths?: true
    area?: true
    zestimate?: true
    rentZestimate?: true
  }

  export type ListingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    zpid?: true
    detailUrl?: true
    imgSrc?: true
    hasImage?: true
    has3DModel?: true
    hasVideo?: true
    statusType?: true
    statusText?: true
    price?: true
    priceFormatted?: true
    currency?: true
    address?: true
    addressStreet?: true
    addressCity?: true
    addressState?: true
    addressZipcode?: true
    latitude?: true
    longitude?: true
    beds?: true
    baths?: true
    area?: true
    homeType?: true
    availabilityDate?: true
    scrapedAt?: true
    brokerName?: true
    zestimate?: true
    rentZestimate?: true
    isFeaturedListing?: true
  }

  export type ListingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    zpid?: true
    detailUrl?: true
    imgSrc?: true
    hasImage?: true
    has3DModel?: true
    hasVideo?: true
    statusType?: true
    statusText?: true
    price?: true
    priceFormatted?: true
    currency?: true
    address?: true
    addressStreet?: true
    addressCity?: true
    addressState?: true
    addressZipcode?: true
    latitude?: true
    longitude?: true
    beds?: true
    baths?: true
    area?: true
    homeType?: true
    availabilityDate?: true
    scrapedAt?: true
    brokerName?: true
    zestimate?: true
    rentZestimate?: true
    isFeaturedListing?: true
  }

  export type ListingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    zpid?: true
    detailUrl?: true
    imgSrc?: true
    photos?: true
    hasImage?: true
    has3DModel?: true
    hasVideo?: true
    statusType?: true
    statusText?: true
    price?: true
    priceFormatted?: true
    currency?: true
    address?: true
    addressStreet?: true
    addressCity?: true
    addressState?: true
    addressZipcode?: true
    latitude?: true
    longitude?: true
    beds?: true
    baths?: true
    area?: true
    homeType?: true
    availabilityDate?: true
    scrapedAt?: true
    brokerName?: true
    zestimate?: true
    rentZestimate?: true
    isFeaturedListing?: true
    rawData?: true
    _all?: true
  }

  export type ListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listing to aggregate.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listings
    **/
    _count?: true | ListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListingMaxAggregateInputType
  }

  export type GetListingAggregateType<T extends ListingAggregateArgs> = {
        [P in keyof T & keyof AggregateListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListing[P]>
      : GetScalarType<T[P], AggregateListing[P]>
  }




  export type ListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListingWhereInput
    orderBy?: ListingOrderByWithAggregationInput | ListingOrderByWithAggregationInput[]
    by: ListingScalarFieldEnum[] | ListingScalarFieldEnum
    having?: ListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListingCountAggregateInputType | true
    _avg?: ListingAvgAggregateInputType
    _sum?: ListingSumAggregateInputType
    _min?: ListingMinAggregateInputType
    _max?: ListingMaxAggregateInputType
  }

  export type ListingGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    zpid: string
    detailUrl: string
    imgSrc: string | null
    photos: string[]
    hasImage: boolean
    has3DModel: boolean
    hasVideo: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted: string | null
    currency: string
    address: string
    addressStreet: string | null
    addressCity: string | null
    addressState: string | null
    addressZipcode: string | null
    latitude: number | null
    longitude: number | null
    beds: number | null
    baths: number | null
    area: number | null
    homeType: string | null
    availabilityDate: Date | null
    scrapedAt: Date
    brokerName: string | null
    zestimate: number | null
    rentZestimate: number | null
    isFeaturedListing: boolean
    rawData: JsonValue
    _count: ListingCountAggregateOutputType | null
    _avg: ListingAvgAggregateOutputType | null
    _sum: ListingSumAggregateOutputType | null
    _min: ListingMinAggregateOutputType | null
    _max: ListingMaxAggregateOutputType | null
  }

  type GetListingGroupByPayload<T extends ListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListingGroupByOutputType[P]>
            : GetScalarType<T[P], ListingGroupByOutputType[P]>
        }
      >
    >


  export type ListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zpid?: boolean
    detailUrl?: boolean
    imgSrc?: boolean
    photos?: boolean
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType?: boolean
    statusText?: boolean
    price?: boolean
    priceFormatted?: boolean
    currency?: boolean
    address?: boolean
    addressStreet?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZipcode?: boolean
    latitude?: boolean
    longitude?: boolean
    beds?: boolean
    baths?: boolean
    area?: boolean
    homeType?: boolean
    availabilityDate?: boolean
    scrapedAt?: boolean
    brokerName?: boolean
    zestimate?: boolean
    rentZestimate?: boolean
    isFeaturedListing?: boolean
    rawData?: boolean
    scrapes?: boolean | Listing$scrapesArgs<ExtArgs>
    enhancementResults?: boolean | Listing$enhancementResultsArgs<ExtArgs>
    userResponses?: boolean | Listing$userResponsesArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zpid?: boolean
    detailUrl?: boolean
    imgSrc?: boolean
    photos?: boolean
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType?: boolean
    statusText?: boolean
    price?: boolean
    priceFormatted?: boolean
    currency?: boolean
    address?: boolean
    addressStreet?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZipcode?: boolean
    latitude?: boolean
    longitude?: boolean
    beds?: boolean
    baths?: boolean
    area?: boolean
    homeType?: boolean
    availabilityDate?: boolean
    scrapedAt?: boolean
    brokerName?: boolean
    zestimate?: boolean
    rentZestimate?: boolean
    isFeaturedListing?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zpid?: boolean
    detailUrl?: boolean
    imgSrc?: boolean
    photos?: boolean
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType?: boolean
    statusText?: boolean
    price?: boolean
    priceFormatted?: boolean
    currency?: boolean
    address?: boolean
    addressStreet?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZipcode?: boolean
    latitude?: boolean
    longitude?: boolean
    beds?: boolean
    baths?: boolean
    area?: boolean
    homeType?: boolean
    availabilityDate?: boolean
    scrapedAt?: boolean
    brokerName?: boolean
    zestimate?: boolean
    rentZestimate?: boolean
    isFeaturedListing?: boolean
    rawData?: boolean
  }, ExtArgs["result"]["listing"]>

  export type ListingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    zpid?: boolean
    detailUrl?: boolean
    imgSrc?: boolean
    photos?: boolean
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType?: boolean
    statusText?: boolean
    price?: boolean
    priceFormatted?: boolean
    currency?: boolean
    address?: boolean
    addressStreet?: boolean
    addressCity?: boolean
    addressState?: boolean
    addressZipcode?: boolean
    latitude?: boolean
    longitude?: boolean
    beds?: boolean
    baths?: boolean
    area?: boolean
    homeType?: boolean
    availabilityDate?: boolean
    scrapedAt?: boolean
    brokerName?: boolean
    zestimate?: boolean
    rentZestimate?: boolean
    isFeaturedListing?: boolean
    rawData?: boolean
  }

  export type ListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "zpid" | "detailUrl" | "imgSrc" | "photos" | "hasImage" | "has3DModel" | "hasVideo" | "statusType" | "statusText" | "price" | "priceFormatted" | "currency" | "address" | "addressStreet" | "addressCity" | "addressState" | "addressZipcode" | "latitude" | "longitude" | "beds" | "baths" | "area" | "homeType" | "availabilityDate" | "scrapedAt" | "brokerName" | "zestimate" | "rentZestimate" | "isFeaturedListing" | "rawData", ExtArgs["result"]["listing"]>
  export type ListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapes?: boolean | Listing$scrapesArgs<ExtArgs>
    enhancementResults?: boolean | Listing$enhancementResultsArgs<ExtArgs>
    userResponses?: boolean | Listing$userResponsesArgs<ExtArgs>
    _count?: boolean | ListingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listing"
    objects: {
      scrapes: Prisma.$ScrapeListingPayload<ExtArgs>[]
      enhancementResults: Prisma.$EnhancementResultPayload<ExtArgs>[]
      userResponses: Prisma.$UserListingResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      zpid: string
      detailUrl: string
      imgSrc: string | null
      photos: string[]
      hasImage: boolean
      has3DModel: boolean
      hasVideo: boolean
      statusType: string
      statusText: string
      price: number
      priceFormatted: string | null
      currency: string
      address: string
      addressStreet: string | null
      addressCity: string | null
      addressState: string | null
      addressZipcode: string | null
      latitude: number | null
      longitude: number | null
      beds: number | null
      baths: number | null
      area: number | null
      homeType: string | null
      availabilityDate: Date | null
      scrapedAt: Date
      brokerName: string | null
      zestimate: number | null
      rentZestimate: number | null
      isFeaturedListing: boolean
      rawData: Prisma.JsonValue
    }, ExtArgs["result"]["listing"]>
    composites: {}
  }

  type ListingGetPayload<S extends boolean | null | undefined | ListingDefaultArgs> = $Result.GetResult<Prisma.$ListingPayload, S>

  type ListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListingCountAggregateInputType | true
    }

  export interface ListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listing'], meta: { name: 'Listing' } }
    /**
     * Find zero or one Listing that matches the filter.
     * @param {ListingFindUniqueArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListingFindUniqueArgs>(args: SelectSubset<T, ListingFindUniqueArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListingFindUniqueOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListingFindFirstArgs>(args?: SelectSubset<T, ListingFindFirstArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindFirstOrThrowArgs} args - Arguments to find a Listing
     * @example
     * // Get one Listing
     * const listing = await prisma.listing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listings
     * const listings = await prisma.listing.findMany()
     * 
     * // Get first 10 Listings
     * const listings = await prisma.listing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listingWithIdOnly = await prisma.listing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListingFindManyArgs>(args?: SelectSubset<T, ListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listing.
     * @param {ListingCreateArgs} args - Arguments to create a Listing.
     * @example
     * // Create one Listing
     * const Listing = await prisma.listing.create({
     *   data: {
     *     // ... data to create a Listing
     *   }
     * })
     * 
     */
    create<T extends ListingCreateArgs>(args: SelectSubset<T, ListingCreateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listings.
     * @param {ListingCreateManyArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListingCreateManyArgs>(args?: SelectSubset<T, ListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listings and returns the data saved in the database.
     * @param {ListingCreateManyAndReturnArgs} args - Arguments to create many Listings.
     * @example
     * // Create many Listings
     * const listing = await prisma.listing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listing.
     * @param {ListingDeleteArgs} args - Arguments to delete one Listing.
     * @example
     * // Delete one Listing
     * const Listing = await prisma.listing.delete({
     *   where: {
     *     // ... filter to delete one Listing
     *   }
     * })
     * 
     */
    delete<T extends ListingDeleteArgs>(args: SelectSubset<T, ListingDeleteArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listing.
     * @param {ListingUpdateArgs} args - Arguments to update one Listing.
     * @example
     * // Update one Listing
     * const listing = await prisma.listing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListingUpdateArgs>(args: SelectSubset<T, ListingUpdateArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listings.
     * @param {ListingDeleteManyArgs} args - Arguments to filter Listings to delete.
     * @example
     * // Delete a few Listings
     * const { count } = await prisma.listing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListingDeleteManyArgs>(args?: SelectSubset<T, ListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListingUpdateManyArgs>(args: SelectSubset<T, ListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listings and returns the data updated in the database.
     * @param {ListingUpdateManyAndReturnArgs} args - Arguments to update many Listings.
     * @example
     * // Update many Listings
     * const listing = await prisma.listing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listings and only return the `id`
     * const listingWithIdOnly = await prisma.listing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listing.
     * @param {ListingUpsertArgs} args - Arguments to update or create a Listing.
     * @example
     * // Update or create a Listing
     * const listing = await prisma.listing.upsert({
     *   create: {
     *     // ... data to create a Listing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listing we want to update
     *   }
     * })
     */
    upsert<T extends ListingUpsertArgs>(args: SelectSubset<T, ListingUpsertArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingCountArgs} args - Arguments to filter Listings to count.
     * @example
     * // Count the number of Listings
     * const count = await prisma.listing.count({
     *   where: {
     *     // ... the filter for the Listings we want to count
     *   }
     * })
    **/
    count<T extends ListingCountArgs>(
      args?: Subset<T, ListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListingAggregateArgs>(args: Subset<T, ListingAggregateArgs>): Prisma.PrismaPromise<GetListingAggregateType<T>>

    /**
     * Group by Listing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListingGroupByArgs['orderBy'] }
        : { orderBy?: ListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listing model
   */
  readonly fields: ListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrapes<T extends Listing$scrapesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$scrapesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enhancementResults<T extends Listing$enhancementResultsArgs<ExtArgs> = {}>(args?: Subset<T, Listing$enhancementResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userResponses<T extends Listing$userResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Listing$userResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listing model
   */
  interface ListingFieldRefs {
    readonly id: FieldRef<"Listing", 'String'>
    readonly createdAt: FieldRef<"Listing", 'DateTime'>
    readonly updatedAt: FieldRef<"Listing", 'DateTime'>
    readonly zpid: FieldRef<"Listing", 'String'>
    readonly detailUrl: FieldRef<"Listing", 'String'>
    readonly imgSrc: FieldRef<"Listing", 'String'>
    readonly photos: FieldRef<"Listing", 'String[]'>
    readonly hasImage: FieldRef<"Listing", 'Boolean'>
    readonly has3DModel: FieldRef<"Listing", 'Boolean'>
    readonly hasVideo: FieldRef<"Listing", 'Boolean'>
    readonly statusType: FieldRef<"Listing", 'String'>
    readonly statusText: FieldRef<"Listing", 'String'>
    readonly price: FieldRef<"Listing", 'Int'>
    readonly priceFormatted: FieldRef<"Listing", 'String'>
    readonly currency: FieldRef<"Listing", 'String'>
    readonly address: FieldRef<"Listing", 'String'>
    readonly addressStreet: FieldRef<"Listing", 'String'>
    readonly addressCity: FieldRef<"Listing", 'String'>
    readonly addressState: FieldRef<"Listing", 'String'>
    readonly addressZipcode: FieldRef<"Listing", 'String'>
    readonly latitude: FieldRef<"Listing", 'Float'>
    readonly longitude: FieldRef<"Listing", 'Float'>
    readonly beds: FieldRef<"Listing", 'Int'>
    readonly baths: FieldRef<"Listing", 'Float'>
    readonly area: FieldRef<"Listing", 'Int'>
    readonly homeType: FieldRef<"Listing", 'String'>
    readonly availabilityDate: FieldRef<"Listing", 'DateTime'>
    readonly scrapedAt: FieldRef<"Listing", 'DateTime'>
    readonly brokerName: FieldRef<"Listing", 'String'>
    readonly zestimate: FieldRef<"Listing", 'Int'>
    readonly rentZestimate: FieldRef<"Listing", 'Int'>
    readonly isFeaturedListing: FieldRef<"Listing", 'Boolean'>
    readonly rawData: FieldRef<"Listing", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Listing findUnique
   */
  export type ListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findUniqueOrThrow
   */
  export type ListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing findFirst
   */
  export type ListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findFirstOrThrow
   */
  export type ListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listing to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listings.
     */
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing findMany
   */
  export type ListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter, which Listings to fetch.
     */
    where?: ListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listings to fetch.
     */
    orderBy?: ListingOrderByWithRelationInput | ListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listings.
     */
    cursor?: ListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listings.
     */
    skip?: number
    distinct?: ListingScalarFieldEnum | ListingScalarFieldEnum[]
  }

  /**
   * Listing create
   */
  export type ListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to create a Listing.
     */
    data: XOR<ListingCreateInput, ListingUncheckedCreateInput>
  }

  /**
   * Listing createMany
   */
  export type ListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing createManyAndReturn
   */
  export type ListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to create many Listings.
     */
    data: ListingCreateManyInput | ListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listing update
   */
  export type ListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The data needed to update a Listing.
     */
    data: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
    /**
     * Choose, which Listing to update.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing updateMany
   */
  export type ListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing updateManyAndReturn
   */
  export type ListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * The data used to update Listings.
     */
    data: XOR<ListingUpdateManyMutationInput, ListingUncheckedUpdateManyInput>
    /**
     * Filter which Listings to update
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to update.
     */
    limit?: number
  }

  /**
   * Listing upsert
   */
  export type ListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * The filter to search for the Listing to update in case it exists.
     */
    where: ListingWhereUniqueInput
    /**
     * In case the Listing found by the `where` argument doesn't exist, create a new Listing with this data.
     */
    create: XOR<ListingCreateInput, ListingUncheckedCreateInput>
    /**
     * In case the Listing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListingUpdateInput, ListingUncheckedUpdateInput>
  }

  /**
   * Listing delete
   */
  export type ListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
    /**
     * Filter which Listing to delete.
     */
    where: ListingWhereUniqueInput
  }

  /**
   * Listing deleteMany
   */
  export type ListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listings to delete
     */
    where?: ListingWhereInput
    /**
     * Limit how many Listings to delete.
     */
    limit?: number
  }

  /**
   * Listing.scrapes
   */
  export type Listing$scrapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    where?: ScrapeListingWhereInput
    orderBy?: ScrapeListingOrderByWithRelationInput | ScrapeListingOrderByWithRelationInput[]
    cursor?: ScrapeListingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapeListingScalarFieldEnum | ScrapeListingScalarFieldEnum[]
  }

  /**
   * Listing.enhancementResults
   */
  export type Listing$enhancementResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    where?: EnhancementResultWhereInput
    orderBy?: EnhancementResultOrderByWithRelationInput | EnhancementResultOrderByWithRelationInput[]
    cursor?: EnhancementResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnhancementResultScalarFieldEnum | EnhancementResultScalarFieldEnum[]
  }

  /**
   * Listing.userResponses
   */
  export type Listing$userResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    where?: UserListingResponseWhereInput
    orderBy?: UserListingResponseOrderByWithRelationInput | UserListingResponseOrderByWithRelationInput[]
    cursor?: UserListingResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserListingResponseScalarFieldEnum | UserListingResponseScalarFieldEnum[]
  }

  /**
   * Listing without action
   */
  export type ListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listing
     */
    select?: ListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listing
     */
    omit?: ListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListingInclude<ExtArgs> | null
  }


  /**
   * Model ScrapeListing
   */

  export type AggregateScrapeListing = {
    _count: ScrapeListingCountAggregateOutputType | null
    _min: ScrapeListingMinAggregateOutputType | null
    _max: ScrapeListingMaxAggregateOutputType | null
  }

  export type ScrapeListingMinAggregateOutputType = {
    scrapeId: string | null
    listingId: string | null
    foundAt: Date | null
  }

  export type ScrapeListingMaxAggregateOutputType = {
    scrapeId: string | null
    listingId: string | null
    foundAt: Date | null
  }

  export type ScrapeListingCountAggregateOutputType = {
    scrapeId: number
    listingId: number
    foundAt: number
    _all: number
  }


  export type ScrapeListingMinAggregateInputType = {
    scrapeId?: true
    listingId?: true
    foundAt?: true
  }

  export type ScrapeListingMaxAggregateInputType = {
    scrapeId?: true
    listingId?: true
    foundAt?: true
  }

  export type ScrapeListingCountAggregateInputType = {
    scrapeId?: true
    listingId?: true
    foundAt?: true
    _all?: true
  }

  export type ScrapeListingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeListing to aggregate.
     */
    where?: ScrapeListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeListings to fetch.
     */
    orderBy?: ScrapeListingOrderByWithRelationInput | ScrapeListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScrapeListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScrapeListings
    **/
    _count?: true | ScrapeListingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapeListingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapeListingMaxAggregateInputType
  }

  export type GetScrapeListingAggregateType<T extends ScrapeListingAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapeListing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapeListing[P]>
      : GetScalarType<T[P], AggregateScrapeListing[P]>
  }




  export type ScrapeListingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScrapeListingWhereInput
    orderBy?: ScrapeListingOrderByWithAggregationInput | ScrapeListingOrderByWithAggregationInput[]
    by: ScrapeListingScalarFieldEnum[] | ScrapeListingScalarFieldEnum
    having?: ScrapeListingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapeListingCountAggregateInputType | true
    _min?: ScrapeListingMinAggregateInputType
    _max?: ScrapeListingMaxAggregateInputType
  }

  export type ScrapeListingGroupByOutputType = {
    scrapeId: string
    listingId: string
    foundAt: Date
    _count: ScrapeListingCountAggregateOutputType | null
    _min: ScrapeListingMinAggregateOutputType | null
    _max: ScrapeListingMaxAggregateOutputType | null
  }

  type GetScrapeListingGroupByPayload<T extends ScrapeListingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapeListingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapeListingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapeListingGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapeListingGroupByOutputType[P]>
        }
      >
    >


  export type ScrapeListingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scrapeId?: boolean
    listingId?: boolean
    foundAt?: boolean
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeListing"]>

  export type ScrapeListingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scrapeId?: boolean
    listingId?: boolean
    foundAt?: boolean
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeListing"]>

  export type ScrapeListingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    scrapeId?: boolean
    listingId?: boolean
    foundAt?: boolean
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scrapeListing"]>

  export type ScrapeListingSelectScalar = {
    scrapeId?: boolean
    listingId?: boolean
    foundAt?: boolean
  }

  export type ScrapeListingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"scrapeId" | "listingId" | "foundAt", ExtArgs["result"]["scrapeListing"]>
  export type ScrapeListingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type ScrapeListingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type ScrapeListingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $ScrapeListingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScrapeListing"
    objects: {
      scrape: Prisma.$ScrapePayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      scrapeId: string
      listingId: string
      foundAt: Date
    }, ExtArgs["result"]["scrapeListing"]>
    composites: {}
  }

  type ScrapeListingGetPayload<S extends boolean | null | undefined | ScrapeListingDefaultArgs> = $Result.GetResult<Prisma.$ScrapeListingPayload, S>

  type ScrapeListingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScrapeListingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapeListingCountAggregateInputType | true
    }

  export interface ScrapeListingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScrapeListing'], meta: { name: 'ScrapeListing' } }
    /**
     * Find zero or one ScrapeListing that matches the filter.
     * @param {ScrapeListingFindUniqueArgs} args - Arguments to find a ScrapeListing
     * @example
     * // Get one ScrapeListing
     * const scrapeListing = await prisma.scrapeListing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScrapeListingFindUniqueArgs>(args: SelectSubset<T, ScrapeListingFindUniqueArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScrapeListing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScrapeListingFindUniqueOrThrowArgs} args - Arguments to find a ScrapeListing
     * @example
     * // Get one ScrapeListing
     * const scrapeListing = await prisma.scrapeListing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScrapeListingFindUniqueOrThrowArgs>(args: SelectSubset<T, ScrapeListingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeListing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingFindFirstArgs} args - Arguments to find a ScrapeListing
     * @example
     * // Get one ScrapeListing
     * const scrapeListing = await prisma.scrapeListing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScrapeListingFindFirstArgs>(args?: SelectSubset<T, ScrapeListingFindFirstArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScrapeListing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingFindFirstOrThrowArgs} args - Arguments to find a ScrapeListing
     * @example
     * // Get one ScrapeListing
     * const scrapeListing = await prisma.scrapeListing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScrapeListingFindFirstOrThrowArgs>(args?: SelectSubset<T, ScrapeListingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScrapeListings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScrapeListings
     * const scrapeListings = await prisma.scrapeListing.findMany()
     * 
     * // Get first 10 ScrapeListings
     * const scrapeListings = await prisma.scrapeListing.findMany({ take: 10 })
     * 
     * // Only select the `scrapeId`
     * const scrapeListingWithScrapeIdOnly = await prisma.scrapeListing.findMany({ select: { scrapeId: true } })
     * 
     */
    findMany<T extends ScrapeListingFindManyArgs>(args?: SelectSubset<T, ScrapeListingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScrapeListing.
     * @param {ScrapeListingCreateArgs} args - Arguments to create a ScrapeListing.
     * @example
     * // Create one ScrapeListing
     * const ScrapeListing = await prisma.scrapeListing.create({
     *   data: {
     *     // ... data to create a ScrapeListing
     *   }
     * })
     * 
     */
    create<T extends ScrapeListingCreateArgs>(args: SelectSubset<T, ScrapeListingCreateArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScrapeListings.
     * @param {ScrapeListingCreateManyArgs} args - Arguments to create many ScrapeListings.
     * @example
     * // Create many ScrapeListings
     * const scrapeListing = await prisma.scrapeListing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScrapeListingCreateManyArgs>(args?: SelectSubset<T, ScrapeListingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScrapeListings and returns the data saved in the database.
     * @param {ScrapeListingCreateManyAndReturnArgs} args - Arguments to create many ScrapeListings.
     * @example
     * // Create many ScrapeListings
     * const scrapeListing = await prisma.scrapeListing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScrapeListings and only return the `scrapeId`
     * const scrapeListingWithScrapeIdOnly = await prisma.scrapeListing.createManyAndReturn({
     *   select: { scrapeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScrapeListingCreateManyAndReturnArgs>(args?: SelectSubset<T, ScrapeListingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScrapeListing.
     * @param {ScrapeListingDeleteArgs} args - Arguments to delete one ScrapeListing.
     * @example
     * // Delete one ScrapeListing
     * const ScrapeListing = await prisma.scrapeListing.delete({
     *   where: {
     *     // ... filter to delete one ScrapeListing
     *   }
     * })
     * 
     */
    delete<T extends ScrapeListingDeleteArgs>(args: SelectSubset<T, ScrapeListingDeleteArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScrapeListing.
     * @param {ScrapeListingUpdateArgs} args - Arguments to update one ScrapeListing.
     * @example
     * // Update one ScrapeListing
     * const scrapeListing = await prisma.scrapeListing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScrapeListingUpdateArgs>(args: SelectSubset<T, ScrapeListingUpdateArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScrapeListings.
     * @param {ScrapeListingDeleteManyArgs} args - Arguments to filter ScrapeListings to delete.
     * @example
     * // Delete a few ScrapeListings
     * const { count } = await prisma.scrapeListing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScrapeListingDeleteManyArgs>(args?: SelectSubset<T, ScrapeListingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScrapeListings
     * const scrapeListing = await prisma.scrapeListing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScrapeListingUpdateManyArgs>(args: SelectSubset<T, ScrapeListingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScrapeListings and returns the data updated in the database.
     * @param {ScrapeListingUpdateManyAndReturnArgs} args - Arguments to update many ScrapeListings.
     * @example
     * // Update many ScrapeListings
     * const scrapeListing = await prisma.scrapeListing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScrapeListings and only return the `scrapeId`
     * const scrapeListingWithScrapeIdOnly = await prisma.scrapeListing.updateManyAndReturn({
     *   select: { scrapeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScrapeListingUpdateManyAndReturnArgs>(args: SelectSubset<T, ScrapeListingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScrapeListing.
     * @param {ScrapeListingUpsertArgs} args - Arguments to update or create a ScrapeListing.
     * @example
     * // Update or create a ScrapeListing
     * const scrapeListing = await prisma.scrapeListing.upsert({
     *   create: {
     *     // ... data to create a ScrapeListing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScrapeListing we want to update
     *   }
     * })
     */
    upsert<T extends ScrapeListingUpsertArgs>(args: SelectSubset<T, ScrapeListingUpsertArgs<ExtArgs>>): Prisma__ScrapeListingClient<$Result.GetResult<Prisma.$ScrapeListingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScrapeListings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingCountArgs} args - Arguments to filter ScrapeListings to count.
     * @example
     * // Count the number of ScrapeListings
     * const count = await prisma.scrapeListing.count({
     *   where: {
     *     // ... the filter for the ScrapeListings we want to count
     *   }
     * })
    **/
    count<T extends ScrapeListingCountArgs>(
      args?: Subset<T, ScrapeListingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapeListingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScrapeListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapeListingAggregateArgs>(args: Subset<T, ScrapeListingAggregateArgs>): Prisma.PrismaPromise<GetScrapeListingAggregateType<T>>

    /**
     * Group by ScrapeListing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapeListingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScrapeListingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScrapeListingGroupByArgs['orderBy'] }
        : { orderBy?: ScrapeListingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScrapeListingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapeListingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScrapeListing model
   */
  readonly fields: ScrapeListingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScrapeListing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScrapeListingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrape<T extends ScrapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScrapeDefaultArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScrapeListing model
   */
  interface ScrapeListingFieldRefs {
    readonly scrapeId: FieldRef<"ScrapeListing", 'String'>
    readonly listingId: FieldRef<"ScrapeListing", 'String'>
    readonly foundAt: FieldRef<"ScrapeListing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScrapeListing findUnique
   */
  export type ScrapeListingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeListing to fetch.
     */
    where: ScrapeListingWhereUniqueInput
  }

  /**
   * ScrapeListing findUniqueOrThrow
   */
  export type ScrapeListingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeListing to fetch.
     */
    where: ScrapeListingWhereUniqueInput
  }

  /**
   * ScrapeListing findFirst
   */
  export type ScrapeListingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeListing to fetch.
     */
    where?: ScrapeListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeListings to fetch.
     */
    orderBy?: ScrapeListingOrderByWithRelationInput | ScrapeListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeListings.
     */
    cursor?: ScrapeListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeListings.
     */
    distinct?: ScrapeListingScalarFieldEnum | ScrapeListingScalarFieldEnum[]
  }

  /**
   * ScrapeListing findFirstOrThrow
   */
  export type ScrapeListingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeListing to fetch.
     */
    where?: ScrapeListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeListings to fetch.
     */
    orderBy?: ScrapeListingOrderByWithRelationInput | ScrapeListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScrapeListings.
     */
    cursor?: ScrapeListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeListings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScrapeListings.
     */
    distinct?: ScrapeListingScalarFieldEnum | ScrapeListingScalarFieldEnum[]
  }

  /**
   * ScrapeListing findMany
   */
  export type ScrapeListingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * Filter, which ScrapeListings to fetch.
     */
    where?: ScrapeListingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScrapeListings to fetch.
     */
    orderBy?: ScrapeListingOrderByWithRelationInput | ScrapeListingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScrapeListings.
     */
    cursor?: ScrapeListingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScrapeListings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScrapeListings.
     */
    skip?: number
    distinct?: ScrapeListingScalarFieldEnum | ScrapeListingScalarFieldEnum[]
  }

  /**
   * ScrapeListing create
   */
  export type ScrapeListingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * The data needed to create a ScrapeListing.
     */
    data: XOR<ScrapeListingCreateInput, ScrapeListingUncheckedCreateInput>
  }

  /**
   * ScrapeListing createMany
   */
  export type ScrapeListingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScrapeListings.
     */
    data: ScrapeListingCreateManyInput | ScrapeListingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScrapeListing createManyAndReturn
   */
  export type ScrapeListingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * The data used to create many ScrapeListings.
     */
    data: ScrapeListingCreateManyInput | ScrapeListingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapeListing update
   */
  export type ScrapeListingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * The data needed to update a ScrapeListing.
     */
    data: XOR<ScrapeListingUpdateInput, ScrapeListingUncheckedUpdateInput>
    /**
     * Choose, which ScrapeListing to update.
     */
    where: ScrapeListingWhereUniqueInput
  }

  /**
   * ScrapeListing updateMany
   */
  export type ScrapeListingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScrapeListings.
     */
    data: XOR<ScrapeListingUpdateManyMutationInput, ScrapeListingUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeListings to update
     */
    where?: ScrapeListingWhereInput
    /**
     * Limit how many ScrapeListings to update.
     */
    limit?: number
  }

  /**
   * ScrapeListing updateManyAndReturn
   */
  export type ScrapeListingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * The data used to update ScrapeListings.
     */
    data: XOR<ScrapeListingUpdateManyMutationInput, ScrapeListingUncheckedUpdateManyInput>
    /**
     * Filter which ScrapeListings to update
     */
    where?: ScrapeListingWhereInput
    /**
     * Limit how many ScrapeListings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScrapeListing upsert
   */
  export type ScrapeListingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * The filter to search for the ScrapeListing to update in case it exists.
     */
    where: ScrapeListingWhereUniqueInput
    /**
     * In case the ScrapeListing found by the `where` argument doesn't exist, create a new ScrapeListing with this data.
     */
    create: XOR<ScrapeListingCreateInput, ScrapeListingUncheckedCreateInput>
    /**
     * In case the ScrapeListing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScrapeListingUpdateInput, ScrapeListingUncheckedUpdateInput>
  }

  /**
   * ScrapeListing delete
   */
  export type ScrapeListingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
    /**
     * Filter which ScrapeListing to delete.
     */
    where: ScrapeListingWhereUniqueInput
  }

  /**
   * ScrapeListing deleteMany
   */
  export type ScrapeListingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScrapeListings to delete
     */
    where?: ScrapeListingWhereInput
    /**
     * Limit how many ScrapeListings to delete.
     */
    limit?: number
  }

  /**
   * ScrapeListing without action
   */
  export type ScrapeListingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScrapeListing
     */
    select?: ScrapeListingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScrapeListing
     */
    omit?: ScrapeListingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScrapeListingInclude<ExtArgs> | null
  }


  /**
   * Model Enhancement
   */

  export type AggregateEnhancement = {
    _count: EnhancementCountAggregateOutputType | null
    _avg: EnhancementAvgAggregateOutputType | null
    _sum: EnhancementSumAggregateOutputType | null
    _min: EnhancementMinAggregateOutputType | null
    _max: EnhancementMaxAggregateOutputType | null
  }

  export type EnhancementAvgAggregateOutputType = {
    processedCount: number | null
    totalCount: number | null
  }

  export type EnhancementSumAggregateOutputType = {
    processedCount: number | null
    totalCount: number | null
  }

  export type EnhancementMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    scrapeId: string | null
    userId: string | null
    query: string | null
    taskId: string | null
    status: string | null
    error: string | null
    completedAt: Date | null
    processedCount: number | null
    totalCount: number | null
  }

  export type EnhancementMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    scrapeId: string | null
    userId: string | null
    query: string | null
    taskId: string | null
    status: string | null
    error: string | null
    completedAt: Date | null
    processedCount: number | null
    totalCount: number | null
  }

  export type EnhancementCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    scrapeId: number
    userId: number
    query: number
    taskId: number
    status: number
    error: number
    completedAt: number
    processedCount: number
    totalCount: number
    _all: number
  }


  export type EnhancementAvgAggregateInputType = {
    processedCount?: true
    totalCount?: true
  }

  export type EnhancementSumAggregateInputType = {
    processedCount?: true
    totalCount?: true
  }

  export type EnhancementMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    scrapeId?: true
    userId?: true
    query?: true
    taskId?: true
    status?: true
    error?: true
    completedAt?: true
    processedCount?: true
    totalCount?: true
  }

  export type EnhancementMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    scrapeId?: true
    userId?: true
    query?: true
    taskId?: true
    status?: true
    error?: true
    completedAt?: true
    processedCount?: true
    totalCount?: true
  }

  export type EnhancementCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    scrapeId?: true
    userId?: true
    query?: true
    taskId?: true
    status?: true
    error?: true
    completedAt?: true
    processedCount?: true
    totalCount?: true
    _all?: true
  }

  export type EnhancementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enhancement to aggregate.
     */
    where?: EnhancementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enhancements to fetch.
     */
    orderBy?: EnhancementOrderByWithRelationInput | EnhancementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnhancementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enhancements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enhancements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enhancements
    **/
    _count?: true | EnhancementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnhancementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnhancementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnhancementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnhancementMaxAggregateInputType
  }

  export type GetEnhancementAggregateType<T extends EnhancementAggregateArgs> = {
        [P in keyof T & keyof AggregateEnhancement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnhancement[P]>
      : GetScalarType<T[P], AggregateEnhancement[P]>
  }




  export type EnhancementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementWhereInput
    orderBy?: EnhancementOrderByWithAggregationInput | EnhancementOrderByWithAggregationInput[]
    by: EnhancementScalarFieldEnum[] | EnhancementScalarFieldEnum
    having?: EnhancementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnhancementCountAggregateInputType | true
    _avg?: EnhancementAvgAggregateInputType
    _sum?: EnhancementSumAggregateInputType
    _min?: EnhancementMinAggregateInputType
    _max?: EnhancementMaxAggregateInputType
  }

  export type EnhancementGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    scrapeId: string
    userId: string
    query: string
    taskId: string | null
    status: string
    error: string | null
    completedAt: Date | null
    processedCount: number
    totalCount: number
    _count: EnhancementCountAggregateOutputType | null
    _avg: EnhancementAvgAggregateOutputType | null
    _sum: EnhancementSumAggregateOutputType | null
    _min: EnhancementMinAggregateOutputType | null
    _max: EnhancementMaxAggregateOutputType | null
  }

  type GetEnhancementGroupByPayload<T extends EnhancementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnhancementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnhancementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnhancementGroupByOutputType[P]>
            : GetScalarType<T[P], EnhancementGroupByOutputType[P]>
        }
      >
    >


  export type EnhancementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scrapeId?: boolean
    userId?: boolean
    query?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    processedCount?: boolean
    totalCount?: boolean
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    columns?: boolean | Enhancement$columnsArgs<ExtArgs>
    results?: boolean | Enhancement$resultsArgs<ExtArgs>
    _count?: boolean | EnhancementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancement"]>

  export type EnhancementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scrapeId?: boolean
    userId?: boolean
    query?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    processedCount?: boolean
    totalCount?: boolean
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancement"]>

  export type EnhancementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scrapeId?: boolean
    userId?: boolean
    query?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    processedCount?: boolean
    totalCount?: boolean
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancement"]>

  export type EnhancementSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    scrapeId?: boolean
    userId?: boolean
    query?: boolean
    taskId?: boolean
    status?: boolean
    error?: boolean
    completedAt?: boolean
    processedCount?: boolean
    totalCount?: boolean
  }

  export type EnhancementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "scrapeId" | "userId" | "query" | "taskId" | "status" | "error" | "completedAt" | "processedCount" | "totalCount", ExtArgs["result"]["enhancement"]>
  export type EnhancementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
    columns?: boolean | Enhancement$columnsArgs<ExtArgs>
    results?: boolean | Enhancement$resultsArgs<ExtArgs>
    _count?: boolean | EnhancementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnhancementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
  }
  export type EnhancementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrape?: boolean | ScrapeDefaultArgs<ExtArgs>
  }

  export type $EnhancementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enhancement"
    objects: {
      scrape: Prisma.$ScrapePayload<ExtArgs>
      columns: Prisma.$EnhancementColumnPayload<ExtArgs>[]
      results: Prisma.$EnhancementResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      scrapeId: string
      userId: string
      query: string
      taskId: string | null
      status: string
      error: string | null
      completedAt: Date | null
      processedCount: number
      totalCount: number
    }, ExtArgs["result"]["enhancement"]>
    composites: {}
  }

  type EnhancementGetPayload<S extends boolean | null | undefined | EnhancementDefaultArgs> = $Result.GetResult<Prisma.$EnhancementPayload, S>

  type EnhancementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnhancementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnhancementCountAggregateInputType | true
    }

  export interface EnhancementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enhancement'], meta: { name: 'Enhancement' } }
    /**
     * Find zero or one Enhancement that matches the filter.
     * @param {EnhancementFindUniqueArgs} args - Arguments to find a Enhancement
     * @example
     * // Get one Enhancement
     * const enhancement = await prisma.enhancement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnhancementFindUniqueArgs>(args: SelectSubset<T, EnhancementFindUniqueArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enhancement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnhancementFindUniqueOrThrowArgs} args - Arguments to find a Enhancement
     * @example
     * // Get one Enhancement
     * const enhancement = await prisma.enhancement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnhancementFindUniqueOrThrowArgs>(args: SelectSubset<T, EnhancementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enhancement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementFindFirstArgs} args - Arguments to find a Enhancement
     * @example
     * // Get one Enhancement
     * const enhancement = await prisma.enhancement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnhancementFindFirstArgs>(args?: SelectSubset<T, EnhancementFindFirstArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enhancement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementFindFirstOrThrowArgs} args - Arguments to find a Enhancement
     * @example
     * // Get one Enhancement
     * const enhancement = await prisma.enhancement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnhancementFindFirstOrThrowArgs>(args?: SelectSubset<T, EnhancementFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enhancements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enhancements
     * const enhancements = await prisma.enhancement.findMany()
     * 
     * // Get first 10 Enhancements
     * const enhancements = await prisma.enhancement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enhancementWithIdOnly = await prisma.enhancement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnhancementFindManyArgs>(args?: SelectSubset<T, EnhancementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enhancement.
     * @param {EnhancementCreateArgs} args - Arguments to create a Enhancement.
     * @example
     * // Create one Enhancement
     * const Enhancement = await prisma.enhancement.create({
     *   data: {
     *     // ... data to create a Enhancement
     *   }
     * })
     * 
     */
    create<T extends EnhancementCreateArgs>(args: SelectSubset<T, EnhancementCreateArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enhancements.
     * @param {EnhancementCreateManyArgs} args - Arguments to create many Enhancements.
     * @example
     * // Create many Enhancements
     * const enhancement = await prisma.enhancement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnhancementCreateManyArgs>(args?: SelectSubset<T, EnhancementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enhancements and returns the data saved in the database.
     * @param {EnhancementCreateManyAndReturnArgs} args - Arguments to create many Enhancements.
     * @example
     * // Create many Enhancements
     * const enhancement = await prisma.enhancement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enhancements and only return the `id`
     * const enhancementWithIdOnly = await prisma.enhancement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnhancementCreateManyAndReturnArgs>(args?: SelectSubset<T, EnhancementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enhancement.
     * @param {EnhancementDeleteArgs} args - Arguments to delete one Enhancement.
     * @example
     * // Delete one Enhancement
     * const Enhancement = await prisma.enhancement.delete({
     *   where: {
     *     // ... filter to delete one Enhancement
     *   }
     * })
     * 
     */
    delete<T extends EnhancementDeleteArgs>(args: SelectSubset<T, EnhancementDeleteArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enhancement.
     * @param {EnhancementUpdateArgs} args - Arguments to update one Enhancement.
     * @example
     * // Update one Enhancement
     * const enhancement = await prisma.enhancement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnhancementUpdateArgs>(args: SelectSubset<T, EnhancementUpdateArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enhancements.
     * @param {EnhancementDeleteManyArgs} args - Arguments to filter Enhancements to delete.
     * @example
     * // Delete a few Enhancements
     * const { count } = await prisma.enhancement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnhancementDeleteManyArgs>(args?: SelectSubset<T, EnhancementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enhancements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enhancements
     * const enhancement = await prisma.enhancement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnhancementUpdateManyArgs>(args: SelectSubset<T, EnhancementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enhancements and returns the data updated in the database.
     * @param {EnhancementUpdateManyAndReturnArgs} args - Arguments to update many Enhancements.
     * @example
     * // Update many Enhancements
     * const enhancement = await prisma.enhancement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enhancements and only return the `id`
     * const enhancementWithIdOnly = await prisma.enhancement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnhancementUpdateManyAndReturnArgs>(args: SelectSubset<T, EnhancementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enhancement.
     * @param {EnhancementUpsertArgs} args - Arguments to update or create a Enhancement.
     * @example
     * // Update or create a Enhancement
     * const enhancement = await prisma.enhancement.upsert({
     *   create: {
     *     // ... data to create a Enhancement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enhancement we want to update
     *   }
     * })
     */
    upsert<T extends EnhancementUpsertArgs>(args: SelectSubset<T, EnhancementUpsertArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enhancements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementCountArgs} args - Arguments to filter Enhancements to count.
     * @example
     * // Count the number of Enhancements
     * const count = await prisma.enhancement.count({
     *   where: {
     *     // ... the filter for the Enhancements we want to count
     *   }
     * })
    **/
    count<T extends EnhancementCountArgs>(
      args?: Subset<T, EnhancementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnhancementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enhancement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnhancementAggregateArgs>(args: Subset<T, EnhancementAggregateArgs>): Prisma.PrismaPromise<GetEnhancementAggregateType<T>>

    /**
     * Group by Enhancement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnhancementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnhancementGroupByArgs['orderBy'] }
        : { orderBy?: EnhancementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnhancementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnhancementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enhancement model
   */
  readonly fields: EnhancementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enhancement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnhancementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrape<T extends ScrapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScrapeDefaultArgs<ExtArgs>>): Prisma__ScrapeClient<$Result.GetResult<Prisma.$ScrapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    columns<T extends Enhancement$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Enhancement$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Enhancement$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Enhancement$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enhancement model
   */
  interface EnhancementFieldRefs {
    readonly id: FieldRef<"Enhancement", 'String'>
    readonly createdAt: FieldRef<"Enhancement", 'DateTime'>
    readonly updatedAt: FieldRef<"Enhancement", 'DateTime'>
    readonly scrapeId: FieldRef<"Enhancement", 'String'>
    readonly userId: FieldRef<"Enhancement", 'String'>
    readonly query: FieldRef<"Enhancement", 'String'>
    readonly taskId: FieldRef<"Enhancement", 'String'>
    readonly status: FieldRef<"Enhancement", 'String'>
    readonly error: FieldRef<"Enhancement", 'String'>
    readonly completedAt: FieldRef<"Enhancement", 'DateTime'>
    readonly processedCount: FieldRef<"Enhancement", 'Int'>
    readonly totalCount: FieldRef<"Enhancement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Enhancement findUnique
   */
  export type EnhancementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * Filter, which Enhancement to fetch.
     */
    where: EnhancementWhereUniqueInput
  }

  /**
   * Enhancement findUniqueOrThrow
   */
  export type EnhancementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * Filter, which Enhancement to fetch.
     */
    where: EnhancementWhereUniqueInput
  }

  /**
   * Enhancement findFirst
   */
  export type EnhancementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * Filter, which Enhancement to fetch.
     */
    where?: EnhancementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enhancements to fetch.
     */
    orderBy?: EnhancementOrderByWithRelationInput | EnhancementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enhancements.
     */
    cursor?: EnhancementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enhancements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enhancements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enhancements.
     */
    distinct?: EnhancementScalarFieldEnum | EnhancementScalarFieldEnum[]
  }

  /**
   * Enhancement findFirstOrThrow
   */
  export type EnhancementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * Filter, which Enhancement to fetch.
     */
    where?: EnhancementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enhancements to fetch.
     */
    orderBy?: EnhancementOrderByWithRelationInput | EnhancementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enhancements.
     */
    cursor?: EnhancementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enhancements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enhancements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enhancements.
     */
    distinct?: EnhancementScalarFieldEnum | EnhancementScalarFieldEnum[]
  }

  /**
   * Enhancement findMany
   */
  export type EnhancementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * Filter, which Enhancements to fetch.
     */
    where?: EnhancementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enhancements to fetch.
     */
    orderBy?: EnhancementOrderByWithRelationInput | EnhancementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enhancements.
     */
    cursor?: EnhancementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enhancements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enhancements.
     */
    skip?: number
    distinct?: EnhancementScalarFieldEnum | EnhancementScalarFieldEnum[]
  }

  /**
   * Enhancement create
   */
  export type EnhancementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * The data needed to create a Enhancement.
     */
    data: XOR<EnhancementCreateInput, EnhancementUncheckedCreateInput>
  }

  /**
   * Enhancement createMany
   */
  export type EnhancementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enhancements.
     */
    data: EnhancementCreateManyInput | EnhancementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enhancement createManyAndReturn
   */
  export type EnhancementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * The data used to create many Enhancements.
     */
    data: EnhancementCreateManyInput | EnhancementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enhancement update
   */
  export type EnhancementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * The data needed to update a Enhancement.
     */
    data: XOR<EnhancementUpdateInput, EnhancementUncheckedUpdateInput>
    /**
     * Choose, which Enhancement to update.
     */
    where: EnhancementWhereUniqueInput
  }

  /**
   * Enhancement updateMany
   */
  export type EnhancementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enhancements.
     */
    data: XOR<EnhancementUpdateManyMutationInput, EnhancementUncheckedUpdateManyInput>
    /**
     * Filter which Enhancements to update
     */
    where?: EnhancementWhereInput
    /**
     * Limit how many Enhancements to update.
     */
    limit?: number
  }

  /**
   * Enhancement updateManyAndReturn
   */
  export type EnhancementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * The data used to update Enhancements.
     */
    data: XOR<EnhancementUpdateManyMutationInput, EnhancementUncheckedUpdateManyInput>
    /**
     * Filter which Enhancements to update
     */
    where?: EnhancementWhereInput
    /**
     * Limit how many Enhancements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enhancement upsert
   */
  export type EnhancementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * The filter to search for the Enhancement to update in case it exists.
     */
    where: EnhancementWhereUniqueInput
    /**
     * In case the Enhancement found by the `where` argument doesn't exist, create a new Enhancement with this data.
     */
    create: XOR<EnhancementCreateInput, EnhancementUncheckedCreateInput>
    /**
     * In case the Enhancement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnhancementUpdateInput, EnhancementUncheckedUpdateInput>
  }

  /**
   * Enhancement delete
   */
  export type EnhancementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
    /**
     * Filter which Enhancement to delete.
     */
    where: EnhancementWhereUniqueInput
  }

  /**
   * Enhancement deleteMany
   */
  export type EnhancementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enhancements to delete
     */
    where?: EnhancementWhereInput
    /**
     * Limit how many Enhancements to delete.
     */
    limit?: number
  }

  /**
   * Enhancement.columns
   */
  export type Enhancement$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    where?: EnhancementColumnWhereInput
    orderBy?: EnhancementColumnOrderByWithRelationInput | EnhancementColumnOrderByWithRelationInput[]
    cursor?: EnhancementColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnhancementColumnScalarFieldEnum | EnhancementColumnScalarFieldEnum[]
  }

  /**
   * Enhancement.results
   */
  export type Enhancement$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    where?: EnhancementResultWhereInput
    orderBy?: EnhancementResultOrderByWithRelationInput | EnhancementResultOrderByWithRelationInput[]
    cursor?: EnhancementResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnhancementResultScalarFieldEnum | EnhancementResultScalarFieldEnum[]
  }

  /**
   * Enhancement without action
   */
  export type EnhancementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enhancement
     */
    select?: EnhancementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enhancement
     */
    omit?: EnhancementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementInclude<ExtArgs> | null
  }


  /**
   * Model EnhancementColumn
   */

  export type AggregateEnhancementColumn = {
    _count: EnhancementColumnCountAggregateOutputType | null
    _avg: EnhancementColumnAvgAggregateOutputType | null
    _sum: EnhancementColumnSumAggregateOutputType | null
    _min: EnhancementColumnMinAggregateOutputType | null
    _max: EnhancementColumnMaxAggregateOutputType | null
  }

  export type EnhancementColumnAvgAggregateOutputType = {
    weight: number | null
    order: number | null
  }

  export type EnhancementColumnSumAggregateOutputType = {
    weight: number | null
    order: number | null
  }

  export type EnhancementColumnMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    enhancementId: string | null
    name: string | null
    type: string | null
    description: string | null
    weight: number | null
    order: number | null
  }

  export type EnhancementColumnMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    enhancementId: string | null
    name: string | null
    type: string | null
    description: string | null
    weight: number | null
    order: number | null
  }

  export type EnhancementColumnCountAggregateOutputType = {
    id: number
    createdAt: number
    enhancementId: number
    name: number
    type: number
    description: number
    weight: number
    order: number
    _all: number
  }


  export type EnhancementColumnAvgAggregateInputType = {
    weight?: true
    order?: true
  }

  export type EnhancementColumnSumAggregateInputType = {
    weight?: true
    order?: true
  }

  export type EnhancementColumnMinAggregateInputType = {
    id?: true
    createdAt?: true
    enhancementId?: true
    name?: true
    type?: true
    description?: true
    weight?: true
    order?: true
  }

  export type EnhancementColumnMaxAggregateInputType = {
    id?: true
    createdAt?: true
    enhancementId?: true
    name?: true
    type?: true
    description?: true
    weight?: true
    order?: true
  }

  export type EnhancementColumnCountAggregateInputType = {
    id?: true
    createdAt?: true
    enhancementId?: true
    name?: true
    type?: true
    description?: true
    weight?: true
    order?: true
    _all?: true
  }

  export type EnhancementColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnhancementColumn to aggregate.
     */
    where?: EnhancementColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementColumns to fetch.
     */
    orderBy?: EnhancementColumnOrderByWithRelationInput | EnhancementColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnhancementColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnhancementColumns
    **/
    _count?: true | EnhancementColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnhancementColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnhancementColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnhancementColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnhancementColumnMaxAggregateInputType
  }

  export type GetEnhancementColumnAggregateType<T extends EnhancementColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateEnhancementColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnhancementColumn[P]>
      : GetScalarType<T[P], AggregateEnhancementColumn[P]>
  }




  export type EnhancementColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementColumnWhereInput
    orderBy?: EnhancementColumnOrderByWithAggregationInput | EnhancementColumnOrderByWithAggregationInput[]
    by: EnhancementColumnScalarFieldEnum[] | EnhancementColumnScalarFieldEnum
    having?: EnhancementColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnhancementColumnCountAggregateInputType | true
    _avg?: EnhancementColumnAvgAggregateInputType
    _sum?: EnhancementColumnSumAggregateInputType
    _min?: EnhancementColumnMinAggregateInputType
    _max?: EnhancementColumnMaxAggregateInputType
  }

  export type EnhancementColumnGroupByOutputType = {
    id: string
    createdAt: Date
    enhancementId: string
    name: string
    type: string
    description: string
    weight: number
    order: number
    _count: EnhancementColumnCountAggregateOutputType | null
    _avg: EnhancementColumnAvgAggregateOutputType | null
    _sum: EnhancementColumnSumAggregateOutputType | null
    _min: EnhancementColumnMinAggregateOutputType | null
    _max: EnhancementColumnMaxAggregateOutputType | null
  }

  type GetEnhancementColumnGroupByPayload<T extends EnhancementColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnhancementColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnhancementColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnhancementColumnGroupByOutputType[P]>
            : GetScalarType<T[P], EnhancementColumnGroupByOutputType[P]>
        }
      >
    >


  export type EnhancementColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    enhancementId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    order?: boolean
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    values?: boolean | EnhancementColumn$valuesArgs<ExtArgs>
    _count?: boolean | EnhancementColumnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementColumn"]>

  export type EnhancementColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    enhancementId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    order?: boolean
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementColumn"]>

  export type EnhancementColumnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    enhancementId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    order?: boolean
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementColumn"]>

  export type EnhancementColumnSelectScalar = {
    id?: boolean
    createdAt?: boolean
    enhancementId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    weight?: boolean
    order?: boolean
  }

  export type EnhancementColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "enhancementId" | "name" | "type" | "description" | "weight" | "order", ExtArgs["result"]["enhancementColumn"]>
  export type EnhancementColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    values?: boolean | EnhancementColumn$valuesArgs<ExtArgs>
    _count?: boolean | EnhancementColumnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnhancementColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
  }
  export type EnhancementColumnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
  }

  export type $EnhancementColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnhancementColumn"
    objects: {
      enhancement: Prisma.$EnhancementPayload<ExtArgs>
      values: Prisma.$EnhancementValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      enhancementId: string
      name: string
      type: string
      description: string
      weight: number
      order: number
    }, ExtArgs["result"]["enhancementColumn"]>
    composites: {}
  }

  type EnhancementColumnGetPayload<S extends boolean | null | undefined | EnhancementColumnDefaultArgs> = $Result.GetResult<Prisma.$EnhancementColumnPayload, S>

  type EnhancementColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnhancementColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnhancementColumnCountAggregateInputType | true
    }

  export interface EnhancementColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnhancementColumn'], meta: { name: 'EnhancementColumn' } }
    /**
     * Find zero or one EnhancementColumn that matches the filter.
     * @param {EnhancementColumnFindUniqueArgs} args - Arguments to find a EnhancementColumn
     * @example
     * // Get one EnhancementColumn
     * const enhancementColumn = await prisma.enhancementColumn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnhancementColumnFindUniqueArgs>(args: SelectSubset<T, EnhancementColumnFindUniqueArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnhancementColumn that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnhancementColumnFindUniqueOrThrowArgs} args - Arguments to find a EnhancementColumn
     * @example
     * // Get one EnhancementColumn
     * const enhancementColumn = await prisma.enhancementColumn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnhancementColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, EnhancementColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnhancementColumn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnFindFirstArgs} args - Arguments to find a EnhancementColumn
     * @example
     * // Get one EnhancementColumn
     * const enhancementColumn = await prisma.enhancementColumn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnhancementColumnFindFirstArgs>(args?: SelectSubset<T, EnhancementColumnFindFirstArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnhancementColumn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnFindFirstOrThrowArgs} args - Arguments to find a EnhancementColumn
     * @example
     * // Get one EnhancementColumn
     * const enhancementColumn = await prisma.enhancementColumn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnhancementColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, EnhancementColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnhancementColumns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnhancementColumns
     * const enhancementColumns = await prisma.enhancementColumn.findMany()
     * 
     * // Get first 10 EnhancementColumns
     * const enhancementColumns = await prisma.enhancementColumn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enhancementColumnWithIdOnly = await prisma.enhancementColumn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnhancementColumnFindManyArgs>(args?: SelectSubset<T, EnhancementColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnhancementColumn.
     * @param {EnhancementColumnCreateArgs} args - Arguments to create a EnhancementColumn.
     * @example
     * // Create one EnhancementColumn
     * const EnhancementColumn = await prisma.enhancementColumn.create({
     *   data: {
     *     // ... data to create a EnhancementColumn
     *   }
     * })
     * 
     */
    create<T extends EnhancementColumnCreateArgs>(args: SelectSubset<T, EnhancementColumnCreateArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnhancementColumns.
     * @param {EnhancementColumnCreateManyArgs} args - Arguments to create many EnhancementColumns.
     * @example
     * // Create many EnhancementColumns
     * const enhancementColumn = await prisma.enhancementColumn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnhancementColumnCreateManyArgs>(args?: SelectSubset<T, EnhancementColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnhancementColumns and returns the data saved in the database.
     * @param {EnhancementColumnCreateManyAndReturnArgs} args - Arguments to create many EnhancementColumns.
     * @example
     * // Create many EnhancementColumns
     * const enhancementColumn = await prisma.enhancementColumn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnhancementColumns and only return the `id`
     * const enhancementColumnWithIdOnly = await prisma.enhancementColumn.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnhancementColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, EnhancementColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnhancementColumn.
     * @param {EnhancementColumnDeleteArgs} args - Arguments to delete one EnhancementColumn.
     * @example
     * // Delete one EnhancementColumn
     * const EnhancementColumn = await prisma.enhancementColumn.delete({
     *   where: {
     *     // ... filter to delete one EnhancementColumn
     *   }
     * })
     * 
     */
    delete<T extends EnhancementColumnDeleteArgs>(args: SelectSubset<T, EnhancementColumnDeleteArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnhancementColumn.
     * @param {EnhancementColumnUpdateArgs} args - Arguments to update one EnhancementColumn.
     * @example
     * // Update one EnhancementColumn
     * const enhancementColumn = await prisma.enhancementColumn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnhancementColumnUpdateArgs>(args: SelectSubset<T, EnhancementColumnUpdateArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnhancementColumns.
     * @param {EnhancementColumnDeleteManyArgs} args - Arguments to filter EnhancementColumns to delete.
     * @example
     * // Delete a few EnhancementColumns
     * const { count } = await prisma.enhancementColumn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnhancementColumnDeleteManyArgs>(args?: SelectSubset<T, EnhancementColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnhancementColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnhancementColumns
     * const enhancementColumn = await prisma.enhancementColumn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnhancementColumnUpdateManyArgs>(args: SelectSubset<T, EnhancementColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnhancementColumns and returns the data updated in the database.
     * @param {EnhancementColumnUpdateManyAndReturnArgs} args - Arguments to update many EnhancementColumns.
     * @example
     * // Update many EnhancementColumns
     * const enhancementColumn = await prisma.enhancementColumn.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnhancementColumns and only return the `id`
     * const enhancementColumnWithIdOnly = await prisma.enhancementColumn.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnhancementColumnUpdateManyAndReturnArgs>(args: SelectSubset<T, EnhancementColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnhancementColumn.
     * @param {EnhancementColumnUpsertArgs} args - Arguments to update or create a EnhancementColumn.
     * @example
     * // Update or create a EnhancementColumn
     * const enhancementColumn = await prisma.enhancementColumn.upsert({
     *   create: {
     *     // ... data to create a EnhancementColumn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnhancementColumn we want to update
     *   }
     * })
     */
    upsert<T extends EnhancementColumnUpsertArgs>(args: SelectSubset<T, EnhancementColumnUpsertArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnhancementColumns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnCountArgs} args - Arguments to filter EnhancementColumns to count.
     * @example
     * // Count the number of EnhancementColumns
     * const count = await prisma.enhancementColumn.count({
     *   where: {
     *     // ... the filter for the EnhancementColumns we want to count
     *   }
     * })
    **/
    count<T extends EnhancementColumnCountArgs>(
      args?: Subset<T, EnhancementColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnhancementColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnhancementColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnhancementColumnAggregateArgs>(args: Subset<T, EnhancementColumnAggregateArgs>): Prisma.PrismaPromise<GetEnhancementColumnAggregateType<T>>

    /**
     * Group by EnhancementColumn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementColumnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnhancementColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnhancementColumnGroupByArgs['orderBy'] }
        : { orderBy?: EnhancementColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnhancementColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnhancementColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnhancementColumn model
   */
  readonly fields: EnhancementColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnhancementColumn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnhancementColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enhancement<T extends EnhancementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnhancementDefaultArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    values<T extends EnhancementColumn$valuesArgs<ExtArgs> = {}>(args?: Subset<T, EnhancementColumn$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnhancementColumn model
   */
  interface EnhancementColumnFieldRefs {
    readonly id: FieldRef<"EnhancementColumn", 'String'>
    readonly createdAt: FieldRef<"EnhancementColumn", 'DateTime'>
    readonly enhancementId: FieldRef<"EnhancementColumn", 'String'>
    readonly name: FieldRef<"EnhancementColumn", 'String'>
    readonly type: FieldRef<"EnhancementColumn", 'String'>
    readonly description: FieldRef<"EnhancementColumn", 'String'>
    readonly weight: FieldRef<"EnhancementColumn", 'Float'>
    readonly order: FieldRef<"EnhancementColumn", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EnhancementColumn findUnique
   */
  export type EnhancementColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementColumn to fetch.
     */
    where: EnhancementColumnWhereUniqueInput
  }

  /**
   * EnhancementColumn findUniqueOrThrow
   */
  export type EnhancementColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementColumn to fetch.
     */
    where: EnhancementColumnWhereUniqueInput
  }

  /**
   * EnhancementColumn findFirst
   */
  export type EnhancementColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementColumn to fetch.
     */
    where?: EnhancementColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementColumns to fetch.
     */
    orderBy?: EnhancementColumnOrderByWithRelationInput | EnhancementColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnhancementColumns.
     */
    cursor?: EnhancementColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnhancementColumns.
     */
    distinct?: EnhancementColumnScalarFieldEnum | EnhancementColumnScalarFieldEnum[]
  }

  /**
   * EnhancementColumn findFirstOrThrow
   */
  export type EnhancementColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementColumn to fetch.
     */
    where?: EnhancementColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementColumns to fetch.
     */
    orderBy?: EnhancementColumnOrderByWithRelationInput | EnhancementColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnhancementColumns.
     */
    cursor?: EnhancementColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementColumns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnhancementColumns.
     */
    distinct?: EnhancementColumnScalarFieldEnum | EnhancementColumnScalarFieldEnum[]
  }

  /**
   * EnhancementColumn findMany
   */
  export type EnhancementColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementColumns to fetch.
     */
    where?: EnhancementColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementColumns to fetch.
     */
    orderBy?: EnhancementColumnOrderByWithRelationInput | EnhancementColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnhancementColumns.
     */
    cursor?: EnhancementColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementColumns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementColumns.
     */
    skip?: number
    distinct?: EnhancementColumnScalarFieldEnum | EnhancementColumnScalarFieldEnum[]
  }

  /**
   * EnhancementColumn create
   */
  export type EnhancementColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a EnhancementColumn.
     */
    data: XOR<EnhancementColumnCreateInput, EnhancementColumnUncheckedCreateInput>
  }

  /**
   * EnhancementColumn createMany
   */
  export type EnhancementColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnhancementColumns.
     */
    data: EnhancementColumnCreateManyInput | EnhancementColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnhancementColumn createManyAndReturn
   */
  export type EnhancementColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * The data used to create many EnhancementColumns.
     */
    data: EnhancementColumnCreateManyInput | EnhancementColumnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnhancementColumn update
   */
  export type EnhancementColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a EnhancementColumn.
     */
    data: XOR<EnhancementColumnUpdateInput, EnhancementColumnUncheckedUpdateInput>
    /**
     * Choose, which EnhancementColumn to update.
     */
    where: EnhancementColumnWhereUniqueInput
  }

  /**
   * EnhancementColumn updateMany
   */
  export type EnhancementColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnhancementColumns.
     */
    data: XOR<EnhancementColumnUpdateManyMutationInput, EnhancementColumnUncheckedUpdateManyInput>
    /**
     * Filter which EnhancementColumns to update
     */
    where?: EnhancementColumnWhereInput
    /**
     * Limit how many EnhancementColumns to update.
     */
    limit?: number
  }

  /**
   * EnhancementColumn updateManyAndReturn
   */
  export type EnhancementColumnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * The data used to update EnhancementColumns.
     */
    data: XOR<EnhancementColumnUpdateManyMutationInput, EnhancementColumnUncheckedUpdateManyInput>
    /**
     * Filter which EnhancementColumns to update
     */
    where?: EnhancementColumnWhereInput
    /**
     * Limit how many EnhancementColumns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnhancementColumn upsert
   */
  export type EnhancementColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the EnhancementColumn to update in case it exists.
     */
    where: EnhancementColumnWhereUniqueInput
    /**
     * In case the EnhancementColumn found by the `where` argument doesn't exist, create a new EnhancementColumn with this data.
     */
    create: XOR<EnhancementColumnCreateInput, EnhancementColumnUncheckedCreateInput>
    /**
     * In case the EnhancementColumn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnhancementColumnUpdateInput, EnhancementColumnUncheckedUpdateInput>
  }

  /**
   * EnhancementColumn delete
   */
  export type EnhancementColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
    /**
     * Filter which EnhancementColumn to delete.
     */
    where: EnhancementColumnWhereUniqueInput
  }

  /**
   * EnhancementColumn deleteMany
   */
  export type EnhancementColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnhancementColumns to delete
     */
    where?: EnhancementColumnWhereInput
    /**
     * Limit how many EnhancementColumns to delete.
     */
    limit?: number
  }

  /**
   * EnhancementColumn.values
   */
  export type EnhancementColumn$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    where?: EnhancementValueWhereInput
    orderBy?: EnhancementValueOrderByWithRelationInput | EnhancementValueOrderByWithRelationInput[]
    cursor?: EnhancementValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnhancementValueScalarFieldEnum | EnhancementValueScalarFieldEnum[]
  }

  /**
   * EnhancementColumn without action
   */
  export type EnhancementColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementColumn
     */
    select?: EnhancementColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementColumn
     */
    omit?: EnhancementColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementColumnInclude<ExtArgs> | null
  }


  /**
   * Model EnhancementResult
   */

  export type AggregateEnhancementResult = {
    _count: EnhancementResultCountAggregateOutputType | null
    _avg: EnhancementResultAvgAggregateOutputType | null
    _sum: EnhancementResultSumAggregateOutputType | null
    _min: EnhancementResultMinAggregateOutputType | null
    _max: EnhancementResultMaxAggregateOutputType | null
  }

  export type EnhancementResultAvgAggregateOutputType = {
    compositeScore: number | null
  }

  export type EnhancementResultSumAggregateOutputType = {
    compositeScore: number | null
  }

  export type EnhancementResultMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    enhancementId: string | null
    listingId: string | null
    compositeScore: number | null
    status: string | null
    error: string | null
  }

  export type EnhancementResultMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    enhancementId: string | null
    listingId: string | null
    compositeScore: number | null
    status: string | null
    error: string | null
  }

  export type EnhancementResultCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    enhancementId: number
    listingId: number
    values: number
    compositeScore: number
    status: number
    error: number
    _all: number
  }


  export type EnhancementResultAvgAggregateInputType = {
    compositeScore?: true
  }

  export type EnhancementResultSumAggregateInputType = {
    compositeScore?: true
  }

  export type EnhancementResultMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    enhancementId?: true
    listingId?: true
    compositeScore?: true
    status?: true
    error?: true
  }

  export type EnhancementResultMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    enhancementId?: true
    listingId?: true
    compositeScore?: true
    status?: true
    error?: true
  }

  export type EnhancementResultCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    enhancementId?: true
    listingId?: true
    values?: true
    compositeScore?: true
    status?: true
    error?: true
    _all?: true
  }

  export type EnhancementResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnhancementResult to aggregate.
     */
    where?: EnhancementResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementResults to fetch.
     */
    orderBy?: EnhancementResultOrderByWithRelationInput | EnhancementResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnhancementResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnhancementResults
    **/
    _count?: true | EnhancementResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnhancementResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnhancementResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnhancementResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnhancementResultMaxAggregateInputType
  }

  export type GetEnhancementResultAggregateType<T extends EnhancementResultAggregateArgs> = {
        [P in keyof T & keyof AggregateEnhancementResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnhancementResult[P]>
      : GetScalarType<T[P], AggregateEnhancementResult[P]>
  }




  export type EnhancementResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementResultWhereInput
    orderBy?: EnhancementResultOrderByWithAggregationInput | EnhancementResultOrderByWithAggregationInput[]
    by: EnhancementResultScalarFieldEnum[] | EnhancementResultScalarFieldEnum
    having?: EnhancementResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnhancementResultCountAggregateInputType | true
    _avg?: EnhancementResultAvgAggregateInputType
    _sum?: EnhancementResultSumAggregateInputType
    _min?: EnhancementResultMinAggregateInputType
    _max?: EnhancementResultMaxAggregateInputType
  }

  export type EnhancementResultGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    enhancementId: string
    listingId: string
    values: JsonValue
    compositeScore: number
    status: string
    error: string | null
    _count: EnhancementResultCountAggregateOutputType | null
    _avg: EnhancementResultAvgAggregateOutputType | null
    _sum: EnhancementResultSumAggregateOutputType | null
    _min: EnhancementResultMinAggregateOutputType | null
    _max: EnhancementResultMaxAggregateOutputType | null
  }

  type GetEnhancementResultGroupByPayload<T extends EnhancementResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnhancementResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnhancementResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnhancementResultGroupByOutputType[P]>
            : GetScalarType<T[P], EnhancementResultGroupByOutputType[P]>
        }
      >
    >


  export type EnhancementResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enhancementId?: boolean
    listingId?: boolean
    values?: boolean
    compositeScore?: boolean
    status?: boolean
    error?: boolean
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    individualValues?: boolean | EnhancementResult$individualValuesArgs<ExtArgs>
    _count?: boolean | EnhancementResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementResult"]>

  export type EnhancementResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enhancementId?: boolean
    listingId?: boolean
    values?: boolean
    compositeScore?: boolean
    status?: boolean
    error?: boolean
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementResult"]>

  export type EnhancementResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enhancementId?: boolean
    listingId?: boolean
    values?: boolean
    compositeScore?: boolean
    status?: boolean
    error?: boolean
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementResult"]>

  export type EnhancementResultSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enhancementId?: boolean
    listingId?: boolean
    values?: boolean
    compositeScore?: boolean
    status?: boolean
    error?: boolean
  }

  export type EnhancementResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "enhancementId" | "listingId" | "values" | "compositeScore" | "status" | "error", ExtArgs["result"]["enhancementResult"]>
  export type EnhancementResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
    individualValues?: boolean | EnhancementResult$individualValuesArgs<ExtArgs>
    _count?: boolean | EnhancementResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EnhancementResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type EnhancementResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enhancement?: boolean | EnhancementDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $EnhancementResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnhancementResult"
    objects: {
      enhancement: Prisma.$EnhancementPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
      individualValues: Prisma.$EnhancementValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      enhancementId: string
      listingId: string
      values: Prisma.JsonValue
      compositeScore: number
      status: string
      error: string | null
    }, ExtArgs["result"]["enhancementResult"]>
    composites: {}
  }

  type EnhancementResultGetPayload<S extends boolean | null | undefined | EnhancementResultDefaultArgs> = $Result.GetResult<Prisma.$EnhancementResultPayload, S>

  type EnhancementResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnhancementResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnhancementResultCountAggregateInputType | true
    }

  export interface EnhancementResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnhancementResult'], meta: { name: 'EnhancementResult' } }
    /**
     * Find zero or one EnhancementResult that matches the filter.
     * @param {EnhancementResultFindUniqueArgs} args - Arguments to find a EnhancementResult
     * @example
     * // Get one EnhancementResult
     * const enhancementResult = await prisma.enhancementResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnhancementResultFindUniqueArgs>(args: SelectSubset<T, EnhancementResultFindUniqueArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnhancementResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnhancementResultFindUniqueOrThrowArgs} args - Arguments to find a EnhancementResult
     * @example
     * // Get one EnhancementResult
     * const enhancementResult = await prisma.enhancementResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnhancementResultFindUniqueOrThrowArgs>(args: SelectSubset<T, EnhancementResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnhancementResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultFindFirstArgs} args - Arguments to find a EnhancementResult
     * @example
     * // Get one EnhancementResult
     * const enhancementResult = await prisma.enhancementResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnhancementResultFindFirstArgs>(args?: SelectSubset<T, EnhancementResultFindFirstArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnhancementResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultFindFirstOrThrowArgs} args - Arguments to find a EnhancementResult
     * @example
     * // Get one EnhancementResult
     * const enhancementResult = await prisma.enhancementResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnhancementResultFindFirstOrThrowArgs>(args?: SelectSubset<T, EnhancementResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnhancementResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnhancementResults
     * const enhancementResults = await prisma.enhancementResult.findMany()
     * 
     * // Get first 10 EnhancementResults
     * const enhancementResults = await prisma.enhancementResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enhancementResultWithIdOnly = await prisma.enhancementResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnhancementResultFindManyArgs>(args?: SelectSubset<T, EnhancementResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnhancementResult.
     * @param {EnhancementResultCreateArgs} args - Arguments to create a EnhancementResult.
     * @example
     * // Create one EnhancementResult
     * const EnhancementResult = await prisma.enhancementResult.create({
     *   data: {
     *     // ... data to create a EnhancementResult
     *   }
     * })
     * 
     */
    create<T extends EnhancementResultCreateArgs>(args: SelectSubset<T, EnhancementResultCreateArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnhancementResults.
     * @param {EnhancementResultCreateManyArgs} args - Arguments to create many EnhancementResults.
     * @example
     * // Create many EnhancementResults
     * const enhancementResult = await prisma.enhancementResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnhancementResultCreateManyArgs>(args?: SelectSubset<T, EnhancementResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnhancementResults and returns the data saved in the database.
     * @param {EnhancementResultCreateManyAndReturnArgs} args - Arguments to create many EnhancementResults.
     * @example
     * // Create many EnhancementResults
     * const enhancementResult = await prisma.enhancementResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnhancementResults and only return the `id`
     * const enhancementResultWithIdOnly = await prisma.enhancementResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnhancementResultCreateManyAndReturnArgs>(args?: SelectSubset<T, EnhancementResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnhancementResult.
     * @param {EnhancementResultDeleteArgs} args - Arguments to delete one EnhancementResult.
     * @example
     * // Delete one EnhancementResult
     * const EnhancementResult = await prisma.enhancementResult.delete({
     *   where: {
     *     // ... filter to delete one EnhancementResult
     *   }
     * })
     * 
     */
    delete<T extends EnhancementResultDeleteArgs>(args: SelectSubset<T, EnhancementResultDeleteArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnhancementResult.
     * @param {EnhancementResultUpdateArgs} args - Arguments to update one EnhancementResult.
     * @example
     * // Update one EnhancementResult
     * const enhancementResult = await prisma.enhancementResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnhancementResultUpdateArgs>(args: SelectSubset<T, EnhancementResultUpdateArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnhancementResults.
     * @param {EnhancementResultDeleteManyArgs} args - Arguments to filter EnhancementResults to delete.
     * @example
     * // Delete a few EnhancementResults
     * const { count } = await prisma.enhancementResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnhancementResultDeleteManyArgs>(args?: SelectSubset<T, EnhancementResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnhancementResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnhancementResults
     * const enhancementResult = await prisma.enhancementResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnhancementResultUpdateManyArgs>(args: SelectSubset<T, EnhancementResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnhancementResults and returns the data updated in the database.
     * @param {EnhancementResultUpdateManyAndReturnArgs} args - Arguments to update many EnhancementResults.
     * @example
     * // Update many EnhancementResults
     * const enhancementResult = await prisma.enhancementResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnhancementResults and only return the `id`
     * const enhancementResultWithIdOnly = await prisma.enhancementResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnhancementResultUpdateManyAndReturnArgs>(args: SelectSubset<T, EnhancementResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnhancementResult.
     * @param {EnhancementResultUpsertArgs} args - Arguments to update or create a EnhancementResult.
     * @example
     * // Update or create a EnhancementResult
     * const enhancementResult = await prisma.enhancementResult.upsert({
     *   create: {
     *     // ... data to create a EnhancementResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnhancementResult we want to update
     *   }
     * })
     */
    upsert<T extends EnhancementResultUpsertArgs>(args: SelectSubset<T, EnhancementResultUpsertArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnhancementResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultCountArgs} args - Arguments to filter EnhancementResults to count.
     * @example
     * // Count the number of EnhancementResults
     * const count = await prisma.enhancementResult.count({
     *   where: {
     *     // ... the filter for the EnhancementResults we want to count
     *   }
     * })
    **/
    count<T extends EnhancementResultCountArgs>(
      args?: Subset<T, EnhancementResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnhancementResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnhancementResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnhancementResultAggregateArgs>(args: Subset<T, EnhancementResultAggregateArgs>): Prisma.PrismaPromise<GetEnhancementResultAggregateType<T>>

    /**
     * Group by EnhancementResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnhancementResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnhancementResultGroupByArgs['orderBy'] }
        : { orderBy?: EnhancementResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnhancementResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnhancementResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnhancementResult model
   */
  readonly fields: EnhancementResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnhancementResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnhancementResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enhancement<T extends EnhancementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnhancementDefaultArgs<ExtArgs>>): Prisma__EnhancementClient<$Result.GetResult<Prisma.$EnhancementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    individualValues<T extends EnhancementResult$individualValuesArgs<ExtArgs> = {}>(args?: Subset<T, EnhancementResult$individualValuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnhancementResult model
   */
  interface EnhancementResultFieldRefs {
    readonly id: FieldRef<"EnhancementResult", 'String'>
    readonly createdAt: FieldRef<"EnhancementResult", 'DateTime'>
    readonly updatedAt: FieldRef<"EnhancementResult", 'DateTime'>
    readonly enhancementId: FieldRef<"EnhancementResult", 'String'>
    readonly listingId: FieldRef<"EnhancementResult", 'String'>
    readonly values: FieldRef<"EnhancementResult", 'Json'>
    readonly compositeScore: FieldRef<"EnhancementResult", 'Float'>
    readonly status: FieldRef<"EnhancementResult", 'String'>
    readonly error: FieldRef<"EnhancementResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EnhancementResult findUnique
   */
  export type EnhancementResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementResult to fetch.
     */
    where: EnhancementResultWhereUniqueInput
  }

  /**
   * EnhancementResult findUniqueOrThrow
   */
  export type EnhancementResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementResult to fetch.
     */
    where: EnhancementResultWhereUniqueInput
  }

  /**
   * EnhancementResult findFirst
   */
  export type EnhancementResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementResult to fetch.
     */
    where?: EnhancementResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementResults to fetch.
     */
    orderBy?: EnhancementResultOrderByWithRelationInput | EnhancementResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnhancementResults.
     */
    cursor?: EnhancementResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnhancementResults.
     */
    distinct?: EnhancementResultScalarFieldEnum | EnhancementResultScalarFieldEnum[]
  }

  /**
   * EnhancementResult findFirstOrThrow
   */
  export type EnhancementResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementResult to fetch.
     */
    where?: EnhancementResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementResults to fetch.
     */
    orderBy?: EnhancementResultOrderByWithRelationInput | EnhancementResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnhancementResults.
     */
    cursor?: EnhancementResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnhancementResults.
     */
    distinct?: EnhancementResultScalarFieldEnum | EnhancementResultScalarFieldEnum[]
  }

  /**
   * EnhancementResult findMany
   */
  export type EnhancementResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementResults to fetch.
     */
    where?: EnhancementResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementResults to fetch.
     */
    orderBy?: EnhancementResultOrderByWithRelationInput | EnhancementResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnhancementResults.
     */
    cursor?: EnhancementResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementResults.
     */
    skip?: number
    distinct?: EnhancementResultScalarFieldEnum | EnhancementResultScalarFieldEnum[]
  }

  /**
   * EnhancementResult create
   */
  export type EnhancementResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * The data needed to create a EnhancementResult.
     */
    data: XOR<EnhancementResultCreateInput, EnhancementResultUncheckedCreateInput>
  }

  /**
   * EnhancementResult createMany
   */
  export type EnhancementResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnhancementResults.
     */
    data: EnhancementResultCreateManyInput | EnhancementResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnhancementResult createManyAndReturn
   */
  export type EnhancementResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * The data used to create many EnhancementResults.
     */
    data: EnhancementResultCreateManyInput | EnhancementResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnhancementResult update
   */
  export type EnhancementResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * The data needed to update a EnhancementResult.
     */
    data: XOR<EnhancementResultUpdateInput, EnhancementResultUncheckedUpdateInput>
    /**
     * Choose, which EnhancementResult to update.
     */
    where: EnhancementResultWhereUniqueInput
  }

  /**
   * EnhancementResult updateMany
   */
  export type EnhancementResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnhancementResults.
     */
    data: XOR<EnhancementResultUpdateManyMutationInput, EnhancementResultUncheckedUpdateManyInput>
    /**
     * Filter which EnhancementResults to update
     */
    where?: EnhancementResultWhereInput
    /**
     * Limit how many EnhancementResults to update.
     */
    limit?: number
  }

  /**
   * EnhancementResult updateManyAndReturn
   */
  export type EnhancementResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * The data used to update EnhancementResults.
     */
    data: XOR<EnhancementResultUpdateManyMutationInput, EnhancementResultUncheckedUpdateManyInput>
    /**
     * Filter which EnhancementResults to update
     */
    where?: EnhancementResultWhereInput
    /**
     * Limit how many EnhancementResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnhancementResult upsert
   */
  export type EnhancementResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * The filter to search for the EnhancementResult to update in case it exists.
     */
    where: EnhancementResultWhereUniqueInput
    /**
     * In case the EnhancementResult found by the `where` argument doesn't exist, create a new EnhancementResult with this data.
     */
    create: XOR<EnhancementResultCreateInput, EnhancementResultUncheckedCreateInput>
    /**
     * In case the EnhancementResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnhancementResultUpdateInput, EnhancementResultUncheckedUpdateInput>
  }

  /**
   * EnhancementResult delete
   */
  export type EnhancementResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
    /**
     * Filter which EnhancementResult to delete.
     */
    where: EnhancementResultWhereUniqueInput
  }

  /**
   * EnhancementResult deleteMany
   */
  export type EnhancementResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnhancementResults to delete
     */
    where?: EnhancementResultWhereInput
    /**
     * Limit how many EnhancementResults to delete.
     */
    limit?: number
  }

  /**
   * EnhancementResult.individualValues
   */
  export type EnhancementResult$individualValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    where?: EnhancementValueWhereInput
    orderBy?: EnhancementValueOrderByWithRelationInput | EnhancementValueOrderByWithRelationInput[]
    cursor?: EnhancementValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnhancementValueScalarFieldEnum | EnhancementValueScalarFieldEnum[]
  }

  /**
   * EnhancementResult without action
   */
  export type EnhancementResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementResult
     */
    select?: EnhancementResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementResult
     */
    omit?: EnhancementResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementResultInclude<ExtArgs> | null
  }


  /**
   * Model EnhancementValue
   */

  export type AggregateEnhancementValue = {
    _count: EnhancementValueCountAggregateOutputType | null
    _avg: EnhancementValueAvgAggregateOutputType | null
    _sum: EnhancementValueSumAggregateOutputType | null
    _min: EnhancementValueMinAggregateOutputType | null
    _max: EnhancementValueMaxAggregateOutputType | null
  }

  export type EnhancementValueAvgAggregateOutputType = {
    normalizedValue: number | null
  }

  export type EnhancementValueSumAggregateOutputType = {
    normalizedValue: number | null
  }

  export type EnhancementValueMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    resultId: string | null
    columnId: string | null
    enhancementId: string | null
    listingId: string | null
    normalizedValue: number | null
  }

  export type EnhancementValueMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    resultId: string | null
    columnId: string | null
    enhancementId: string | null
    listingId: string | null
    normalizedValue: number | null
  }

  export type EnhancementValueCountAggregateOutputType = {
    id: number
    createdAt: number
    resultId: number
    columnId: number
    enhancementId: number
    listingId: number
    normalizedValue: number
    _all: number
  }


  export type EnhancementValueAvgAggregateInputType = {
    normalizedValue?: true
  }

  export type EnhancementValueSumAggregateInputType = {
    normalizedValue?: true
  }

  export type EnhancementValueMinAggregateInputType = {
    id?: true
    createdAt?: true
    resultId?: true
    columnId?: true
    enhancementId?: true
    listingId?: true
    normalizedValue?: true
  }

  export type EnhancementValueMaxAggregateInputType = {
    id?: true
    createdAt?: true
    resultId?: true
    columnId?: true
    enhancementId?: true
    listingId?: true
    normalizedValue?: true
  }

  export type EnhancementValueCountAggregateInputType = {
    id?: true
    createdAt?: true
    resultId?: true
    columnId?: true
    enhancementId?: true
    listingId?: true
    normalizedValue?: true
    _all?: true
  }

  export type EnhancementValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnhancementValue to aggregate.
     */
    where?: EnhancementValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementValues to fetch.
     */
    orderBy?: EnhancementValueOrderByWithRelationInput | EnhancementValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnhancementValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnhancementValues
    **/
    _count?: true | EnhancementValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnhancementValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnhancementValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnhancementValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnhancementValueMaxAggregateInputType
  }

  export type GetEnhancementValueAggregateType<T extends EnhancementValueAggregateArgs> = {
        [P in keyof T & keyof AggregateEnhancementValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnhancementValue[P]>
      : GetScalarType<T[P], AggregateEnhancementValue[P]>
  }




  export type EnhancementValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnhancementValueWhereInput
    orderBy?: EnhancementValueOrderByWithAggregationInput | EnhancementValueOrderByWithAggregationInput[]
    by: EnhancementValueScalarFieldEnum[] | EnhancementValueScalarFieldEnum
    having?: EnhancementValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnhancementValueCountAggregateInputType | true
    _avg?: EnhancementValueAvgAggregateInputType
    _sum?: EnhancementValueSumAggregateInputType
    _min?: EnhancementValueMinAggregateInputType
    _max?: EnhancementValueMaxAggregateInputType
  }

  export type EnhancementValueGroupByOutputType = {
    id: string
    createdAt: Date
    resultId: string
    columnId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
    _count: EnhancementValueCountAggregateOutputType | null
    _avg: EnhancementValueAvgAggregateOutputType | null
    _sum: EnhancementValueSumAggregateOutputType | null
    _min: EnhancementValueMinAggregateOutputType | null
    _max: EnhancementValueMaxAggregateOutputType | null
  }

  type GetEnhancementValueGroupByPayload<T extends EnhancementValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnhancementValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnhancementValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnhancementValueGroupByOutputType[P]>
            : GetScalarType<T[P], EnhancementValueGroupByOutputType[P]>
        }
      >
    >


  export type EnhancementValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    resultId?: boolean
    columnId?: boolean
    enhancementId?: boolean
    listingId?: boolean
    normalizedValue?: boolean
    result?: boolean | EnhancementResultDefaultArgs<ExtArgs>
    column?: boolean | EnhancementColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementValue"]>

  export type EnhancementValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    resultId?: boolean
    columnId?: boolean
    enhancementId?: boolean
    listingId?: boolean
    normalizedValue?: boolean
    result?: boolean | EnhancementResultDefaultArgs<ExtArgs>
    column?: boolean | EnhancementColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementValue"]>

  export type EnhancementValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    resultId?: boolean
    columnId?: boolean
    enhancementId?: boolean
    listingId?: boolean
    normalizedValue?: boolean
    result?: boolean | EnhancementResultDefaultArgs<ExtArgs>
    column?: boolean | EnhancementColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enhancementValue"]>

  export type EnhancementValueSelectScalar = {
    id?: boolean
    createdAt?: boolean
    resultId?: boolean
    columnId?: boolean
    enhancementId?: boolean
    listingId?: boolean
    normalizedValue?: boolean
  }

  export type EnhancementValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "resultId" | "columnId" | "enhancementId" | "listingId" | "normalizedValue", ExtArgs["result"]["enhancementValue"]>
  export type EnhancementValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | EnhancementResultDefaultArgs<ExtArgs>
    column?: boolean | EnhancementColumnDefaultArgs<ExtArgs>
  }
  export type EnhancementValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | EnhancementResultDefaultArgs<ExtArgs>
    column?: boolean | EnhancementColumnDefaultArgs<ExtArgs>
  }
  export type EnhancementValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | EnhancementResultDefaultArgs<ExtArgs>
    column?: boolean | EnhancementColumnDefaultArgs<ExtArgs>
  }

  export type $EnhancementValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnhancementValue"
    objects: {
      result: Prisma.$EnhancementResultPayload<ExtArgs>
      column: Prisma.$EnhancementColumnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      resultId: string
      columnId: string
      enhancementId: string
      listingId: string
      normalizedValue: number
    }, ExtArgs["result"]["enhancementValue"]>
    composites: {}
  }

  type EnhancementValueGetPayload<S extends boolean | null | undefined | EnhancementValueDefaultArgs> = $Result.GetResult<Prisma.$EnhancementValuePayload, S>

  type EnhancementValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnhancementValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnhancementValueCountAggregateInputType | true
    }

  export interface EnhancementValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnhancementValue'], meta: { name: 'EnhancementValue' } }
    /**
     * Find zero or one EnhancementValue that matches the filter.
     * @param {EnhancementValueFindUniqueArgs} args - Arguments to find a EnhancementValue
     * @example
     * // Get one EnhancementValue
     * const enhancementValue = await prisma.enhancementValue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnhancementValueFindUniqueArgs>(args: SelectSubset<T, EnhancementValueFindUniqueArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnhancementValue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnhancementValueFindUniqueOrThrowArgs} args - Arguments to find a EnhancementValue
     * @example
     * // Get one EnhancementValue
     * const enhancementValue = await prisma.enhancementValue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnhancementValueFindUniqueOrThrowArgs>(args: SelectSubset<T, EnhancementValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnhancementValue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueFindFirstArgs} args - Arguments to find a EnhancementValue
     * @example
     * // Get one EnhancementValue
     * const enhancementValue = await prisma.enhancementValue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnhancementValueFindFirstArgs>(args?: SelectSubset<T, EnhancementValueFindFirstArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnhancementValue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueFindFirstOrThrowArgs} args - Arguments to find a EnhancementValue
     * @example
     * // Get one EnhancementValue
     * const enhancementValue = await prisma.enhancementValue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnhancementValueFindFirstOrThrowArgs>(args?: SelectSubset<T, EnhancementValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnhancementValues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnhancementValues
     * const enhancementValues = await prisma.enhancementValue.findMany()
     * 
     * // Get first 10 EnhancementValues
     * const enhancementValues = await prisma.enhancementValue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enhancementValueWithIdOnly = await prisma.enhancementValue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnhancementValueFindManyArgs>(args?: SelectSubset<T, EnhancementValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnhancementValue.
     * @param {EnhancementValueCreateArgs} args - Arguments to create a EnhancementValue.
     * @example
     * // Create one EnhancementValue
     * const EnhancementValue = await prisma.enhancementValue.create({
     *   data: {
     *     // ... data to create a EnhancementValue
     *   }
     * })
     * 
     */
    create<T extends EnhancementValueCreateArgs>(args: SelectSubset<T, EnhancementValueCreateArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnhancementValues.
     * @param {EnhancementValueCreateManyArgs} args - Arguments to create many EnhancementValues.
     * @example
     * // Create many EnhancementValues
     * const enhancementValue = await prisma.enhancementValue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnhancementValueCreateManyArgs>(args?: SelectSubset<T, EnhancementValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnhancementValues and returns the data saved in the database.
     * @param {EnhancementValueCreateManyAndReturnArgs} args - Arguments to create many EnhancementValues.
     * @example
     * // Create many EnhancementValues
     * const enhancementValue = await prisma.enhancementValue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnhancementValues and only return the `id`
     * const enhancementValueWithIdOnly = await prisma.enhancementValue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnhancementValueCreateManyAndReturnArgs>(args?: SelectSubset<T, EnhancementValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnhancementValue.
     * @param {EnhancementValueDeleteArgs} args - Arguments to delete one EnhancementValue.
     * @example
     * // Delete one EnhancementValue
     * const EnhancementValue = await prisma.enhancementValue.delete({
     *   where: {
     *     // ... filter to delete one EnhancementValue
     *   }
     * })
     * 
     */
    delete<T extends EnhancementValueDeleteArgs>(args: SelectSubset<T, EnhancementValueDeleteArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnhancementValue.
     * @param {EnhancementValueUpdateArgs} args - Arguments to update one EnhancementValue.
     * @example
     * // Update one EnhancementValue
     * const enhancementValue = await prisma.enhancementValue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnhancementValueUpdateArgs>(args: SelectSubset<T, EnhancementValueUpdateArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnhancementValues.
     * @param {EnhancementValueDeleteManyArgs} args - Arguments to filter EnhancementValues to delete.
     * @example
     * // Delete a few EnhancementValues
     * const { count } = await prisma.enhancementValue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnhancementValueDeleteManyArgs>(args?: SelectSubset<T, EnhancementValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnhancementValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnhancementValues
     * const enhancementValue = await prisma.enhancementValue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnhancementValueUpdateManyArgs>(args: SelectSubset<T, EnhancementValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnhancementValues and returns the data updated in the database.
     * @param {EnhancementValueUpdateManyAndReturnArgs} args - Arguments to update many EnhancementValues.
     * @example
     * // Update many EnhancementValues
     * const enhancementValue = await prisma.enhancementValue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnhancementValues and only return the `id`
     * const enhancementValueWithIdOnly = await prisma.enhancementValue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnhancementValueUpdateManyAndReturnArgs>(args: SelectSubset<T, EnhancementValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnhancementValue.
     * @param {EnhancementValueUpsertArgs} args - Arguments to update or create a EnhancementValue.
     * @example
     * // Update or create a EnhancementValue
     * const enhancementValue = await prisma.enhancementValue.upsert({
     *   create: {
     *     // ... data to create a EnhancementValue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnhancementValue we want to update
     *   }
     * })
     */
    upsert<T extends EnhancementValueUpsertArgs>(args: SelectSubset<T, EnhancementValueUpsertArgs<ExtArgs>>): Prisma__EnhancementValueClient<$Result.GetResult<Prisma.$EnhancementValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnhancementValues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueCountArgs} args - Arguments to filter EnhancementValues to count.
     * @example
     * // Count the number of EnhancementValues
     * const count = await prisma.enhancementValue.count({
     *   where: {
     *     // ... the filter for the EnhancementValues we want to count
     *   }
     * })
    **/
    count<T extends EnhancementValueCountArgs>(
      args?: Subset<T, EnhancementValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnhancementValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnhancementValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnhancementValueAggregateArgs>(args: Subset<T, EnhancementValueAggregateArgs>): Prisma.PrismaPromise<GetEnhancementValueAggregateType<T>>

    /**
     * Group by EnhancementValue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnhancementValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnhancementValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnhancementValueGroupByArgs['orderBy'] }
        : { orderBy?: EnhancementValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnhancementValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnhancementValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnhancementValue model
   */
  readonly fields: EnhancementValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnhancementValue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnhancementValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    result<T extends EnhancementResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnhancementResultDefaultArgs<ExtArgs>>): Prisma__EnhancementResultClient<$Result.GetResult<Prisma.$EnhancementResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    column<T extends EnhancementColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EnhancementColumnDefaultArgs<ExtArgs>>): Prisma__EnhancementColumnClient<$Result.GetResult<Prisma.$EnhancementColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnhancementValue model
   */
  interface EnhancementValueFieldRefs {
    readonly id: FieldRef<"EnhancementValue", 'String'>
    readonly createdAt: FieldRef<"EnhancementValue", 'DateTime'>
    readonly resultId: FieldRef<"EnhancementValue", 'String'>
    readonly columnId: FieldRef<"EnhancementValue", 'String'>
    readonly enhancementId: FieldRef<"EnhancementValue", 'String'>
    readonly listingId: FieldRef<"EnhancementValue", 'String'>
    readonly normalizedValue: FieldRef<"EnhancementValue", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * EnhancementValue findUnique
   */
  export type EnhancementValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementValue to fetch.
     */
    where: EnhancementValueWhereUniqueInput
  }

  /**
   * EnhancementValue findUniqueOrThrow
   */
  export type EnhancementValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementValue to fetch.
     */
    where: EnhancementValueWhereUniqueInput
  }

  /**
   * EnhancementValue findFirst
   */
  export type EnhancementValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementValue to fetch.
     */
    where?: EnhancementValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementValues to fetch.
     */
    orderBy?: EnhancementValueOrderByWithRelationInput | EnhancementValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnhancementValues.
     */
    cursor?: EnhancementValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnhancementValues.
     */
    distinct?: EnhancementValueScalarFieldEnum | EnhancementValueScalarFieldEnum[]
  }

  /**
   * EnhancementValue findFirstOrThrow
   */
  export type EnhancementValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementValue to fetch.
     */
    where?: EnhancementValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementValues to fetch.
     */
    orderBy?: EnhancementValueOrderByWithRelationInput | EnhancementValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnhancementValues.
     */
    cursor?: EnhancementValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementValues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnhancementValues.
     */
    distinct?: EnhancementValueScalarFieldEnum | EnhancementValueScalarFieldEnum[]
  }

  /**
   * EnhancementValue findMany
   */
  export type EnhancementValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * Filter, which EnhancementValues to fetch.
     */
    where?: EnhancementValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnhancementValues to fetch.
     */
    orderBy?: EnhancementValueOrderByWithRelationInput | EnhancementValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnhancementValues.
     */
    cursor?: EnhancementValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnhancementValues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnhancementValues.
     */
    skip?: number
    distinct?: EnhancementValueScalarFieldEnum | EnhancementValueScalarFieldEnum[]
  }

  /**
   * EnhancementValue create
   */
  export type EnhancementValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * The data needed to create a EnhancementValue.
     */
    data: XOR<EnhancementValueCreateInput, EnhancementValueUncheckedCreateInput>
  }

  /**
   * EnhancementValue createMany
   */
  export type EnhancementValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnhancementValues.
     */
    data: EnhancementValueCreateManyInput | EnhancementValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnhancementValue createManyAndReturn
   */
  export type EnhancementValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * The data used to create many EnhancementValues.
     */
    data: EnhancementValueCreateManyInput | EnhancementValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnhancementValue update
   */
  export type EnhancementValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * The data needed to update a EnhancementValue.
     */
    data: XOR<EnhancementValueUpdateInput, EnhancementValueUncheckedUpdateInput>
    /**
     * Choose, which EnhancementValue to update.
     */
    where: EnhancementValueWhereUniqueInput
  }

  /**
   * EnhancementValue updateMany
   */
  export type EnhancementValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnhancementValues.
     */
    data: XOR<EnhancementValueUpdateManyMutationInput, EnhancementValueUncheckedUpdateManyInput>
    /**
     * Filter which EnhancementValues to update
     */
    where?: EnhancementValueWhereInput
    /**
     * Limit how many EnhancementValues to update.
     */
    limit?: number
  }

  /**
   * EnhancementValue updateManyAndReturn
   */
  export type EnhancementValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * The data used to update EnhancementValues.
     */
    data: XOR<EnhancementValueUpdateManyMutationInput, EnhancementValueUncheckedUpdateManyInput>
    /**
     * Filter which EnhancementValues to update
     */
    where?: EnhancementValueWhereInput
    /**
     * Limit how many EnhancementValues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnhancementValue upsert
   */
  export type EnhancementValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * The filter to search for the EnhancementValue to update in case it exists.
     */
    where: EnhancementValueWhereUniqueInput
    /**
     * In case the EnhancementValue found by the `where` argument doesn't exist, create a new EnhancementValue with this data.
     */
    create: XOR<EnhancementValueCreateInput, EnhancementValueUncheckedCreateInput>
    /**
     * In case the EnhancementValue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnhancementValueUpdateInput, EnhancementValueUncheckedUpdateInput>
  }

  /**
   * EnhancementValue delete
   */
  export type EnhancementValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
    /**
     * Filter which EnhancementValue to delete.
     */
    where: EnhancementValueWhereUniqueInput
  }

  /**
   * EnhancementValue deleteMany
   */
  export type EnhancementValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnhancementValues to delete
     */
    where?: EnhancementValueWhereInput
    /**
     * Limit how many EnhancementValues to delete.
     */
    limit?: number
  }

  /**
   * EnhancementValue without action
   */
  export type EnhancementValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnhancementValue
     */
    select?: EnhancementValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnhancementValue
     */
    omit?: EnhancementValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnhancementValueInclude<ExtArgs> | null
  }


  /**
   * Model SavedQuery
   */

  export type AggregateSavedQuery = {
    _count: SavedQueryCountAggregateOutputType | null
    _min: SavedQueryMinAggregateOutputType | null
    _max: SavedQueryMaxAggregateOutputType | null
  }

  export type SavedQueryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    name: string | null
    description: string | null
    searchType: string | null
    enhancementQuery: string | null
    lastRunAt: Date | null
    lastScrapeId: string | null
  }

  export type SavedQueryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    name: string | null
    description: string | null
    searchType: string | null
    enhancementQuery: string | null
    lastRunAt: Date | null
    lastScrapeId: string | null
  }

  export type SavedQueryCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    name: number
    description: number
    searchType: number
    searchQuery: number
    enhancementQuery: number
    columnWeights: number
    lastRunAt: number
    lastScrapeId: number
    _all: number
  }


  export type SavedQueryMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    description?: true
    searchType?: true
    enhancementQuery?: true
    lastRunAt?: true
    lastScrapeId?: true
  }

  export type SavedQueryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    description?: true
    searchType?: true
    enhancementQuery?: true
    lastRunAt?: true
    lastScrapeId?: true
  }

  export type SavedQueryCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    name?: true
    description?: true
    searchType?: true
    searchQuery?: true
    enhancementQuery?: true
    columnWeights?: true
    lastRunAt?: true
    lastScrapeId?: true
    _all?: true
  }

  export type SavedQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedQuery to aggregate.
     */
    where?: SavedQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedQueries to fetch.
     */
    orderBy?: SavedQueryOrderByWithRelationInput | SavedQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedQueries
    **/
    _count?: true | SavedQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedQueryMaxAggregateInputType
  }

  export type GetSavedQueryAggregateType<T extends SavedQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedQuery[P]>
      : GetScalarType<T[P], AggregateSavedQuery[P]>
  }




  export type SavedQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedQueryWhereInput
    orderBy?: SavedQueryOrderByWithAggregationInput | SavedQueryOrderByWithAggregationInput[]
    by: SavedQueryScalarFieldEnum[] | SavedQueryScalarFieldEnum
    having?: SavedQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedQueryCountAggregateInputType | true
    _min?: SavedQueryMinAggregateInputType
    _max?: SavedQueryMaxAggregateInputType
  }

  export type SavedQueryGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    name: string
    description: string | null
    searchType: string
    searchQuery: JsonValue
    enhancementQuery: string
    columnWeights: JsonValue
    lastRunAt: Date | null
    lastScrapeId: string | null
    _count: SavedQueryCountAggregateOutputType | null
    _min: SavedQueryMinAggregateOutputType | null
    _max: SavedQueryMaxAggregateOutputType | null
  }

  type GetSavedQueryGroupByPayload<T extends SavedQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedQueryGroupByOutputType[P]>
            : GetScalarType<T[P], SavedQueryGroupByOutputType[P]>
        }
      >
    >


  export type SavedQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    searchType?: boolean
    searchQuery?: boolean
    enhancementQuery?: boolean
    columnWeights?: boolean
    lastRunAt?: boolean
    lastScrapeId?: boolean
    responses?: boolean | SavedQuery$responsesArgs<ExtArgs>
    _count?: boolean | SavedQueryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedQuery"]>

  export type SavedQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    searchType?: boolean
    searchQuery?: boolean
    enhancementQuery?: boolean
    columnWeights?: boolean
    lastRunAt?: boolean
    lastScrapeId?: boolean
  }, ExtArgs["result"]["savedQuery"]>

  export type SavedQuerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    searchType?: boolean
    searchQuery?: boolean
    enhancementQuery?: boolean
    columnWeights?: boolean
    lastRunAt?: boolean
    lastScrapeId?: boolean
  }, ExtArgs["result"]["savedQuery"]>

  export type SavedQuerySelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    searchType?: boolean
    searchQuery?: boolean
    enhancementQuery?: boolean
    columnWeights?: boolean
    lastRunAt?: boolean
    lastScrapeId?: boolean
  }

  export type SavedQueryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "name" | "description" | "searchType" | "searchQuery" | "enhancementQuery" | "columnWeights" | "lastRunAt" | "lastScrapeId", ExtArgs["result"]["savedQuery"]>
  export type SavedQueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | SavedQuery$responsesArgs<ExtArgs>
    _count?: boolean | SavedQueryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SavedQueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SavedQueryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SavedQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedQuery"
    objects: {
      responses: Prisma.$UserListingResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      name: string
      description: string | null
      searchType: string
      searchQuery: Prisma.JsonValue
      enhancementQuery: string
      columnWeights: Prisma.JsonValue
      lastRunAt: Date | null
      lastScrapeId: string | null
    }, ExtArgs["result"]["savedQuery"]>
    composites: {}
  }

  type SavedQueryGetPayload<S extends boolean | null | undefined | SavedQueryDefaultArgs> = $Result.GetResult<Prisma.$SavedQueryPayload, S>

  type SavedQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedQueryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedQueryCountAggregateInputType | true
    }

  export interface SavedQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedQuery'], meta: { name: 'SavedQuery' } }
    /**
     * Find zero or one SavedQuery that matches the filter.
     * @param {SavedQueryFindUniqueArgs} args - Arguments to find a SavedQuery
     * @example
     * // Get one SavedQuery
     * const savedQuery = await prisma.savedQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedQueryFindUniqueArgs>(args: SelectSubset<T, SavedQueryFindUniqueArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedQuery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedQueryFindUniqueOrThrowArgs} args - Arguments to find a SavedQuery
     * @example
     * // Get one SavedQuery
     * const savedQuery = await prisma.savedQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryFindFirstArgs} args - Arguments to find a SavedQuery
     * @example
     * // Get one SavedQuery
     * const savedQuery = await prisma.savedQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedQueryFindFirstArgs>(args?: SelectSubset<T, SavedQueryFindFirstArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryFindFirstOrThrowArgs} args - Arguments to find a SavedQuery
     * @example
     * // Get one SavedQuery
     * const savedQuery = await prisma.savedQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedQueries
     * const savedQueries = await prisma.savedQuery.findMany()
     * 
     * // Get first 10 SavedQueries
     * const savedQueries = await prisma.savedQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedQueryWithIdOnly = await prisma.savedQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedQueryFindManyArgs>(args?: SelectSubset<T, SavedQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedQuery.
     * @param {SavedQueryCreateArgs} args - Arguments to create a SavedQuery.
     * @example
     * // Create one SavedQuery
     * const SavedQuery = await prisma.savedQuery.create({
     *   data: {
     *     // ... data to create a SavedQuery
     *   }
     * })
     * 
     */
    create<T extends SavedQueryCreateArgs>(args: SelectSubset<T, SavedQueryCreateArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedQueries.
     * @param {SavedQueryCreateManyArgs} args - Arguments to create many SavedQueries.
     * @example
     * // Create many SavedQueries
     * const savedQuery = await prisma.savedQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedQueryCreateManyArgs>(args?: SelectSubset<T, SavedQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SavedQueries and returns the data saved in the database.
     * @param {SavedQueryCreateManyAndReturnArgs} args - Arguments to create many SavedQueries.
     * @example
     * // Create many SavedQueries
     * const savedQuery = await prisma.savedQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SavedQueries and only return the `id`
     * const savedQueryWithIdOnly = await prisma.savedQuery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SavedQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, SavedQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SavedQuery.
     * @param {SavedQueryDeleteArgs} args - Arguments to delete one SavedQuery.
     * @example
     * // Delete one SavedQuery
     * const SavedQuery = await prisma.savedQuery.delete({
     *   where: {
     *     // ... filter to delete one SavedQuery
     *   }
     * })
     * 
     */
    delete<T extends SavedQueryDeleteArgs>(args: SelectSubset<T, SavedQueryDeleteArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedQuery.
     * @param {SavedQueryUpdateArgs} args - Arguments to update one SavedQuery.
     * @example
     * // Update one SavedQuery
     * const savedQuery = await prisma.savedQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedQueryUpdateArgs>(args: SelectSubset<T, SavedQueryUpdateArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedQueries.
     * @param {SavedQueryDeleteManyArgs} args - Arguments to filter SavedQueries to delete.
     * @example
     * // Delete a few SavedQueries
     * const { count } = await prisma.savedQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedQueryDeleteManyArgs>(args?: SelectSubset<T, SavedQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedQueries
     * const savedQuery = await prisma.savedQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedQueryUpdateManyArgs>(args: SelectSubset<T, SavedQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedQueries and returns the data updated in the database.
     * @param {SavedQueryUpdateManyAndReturnArgs} args - Arguments to update many SavedQueries.
     * @example
     * // Update many SavedQueries
     * const savedQuery = await prisma.savedQuery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SavedQueries and only return the `id`
     * const savedQueryWithIdOnly = await prisma.savedQuery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SavedQueryUpdateManyAndReturnArgs>(args: SelectSubset<T, SavedQueryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SavedQuery.
     * @param {SavedQueryUpsertArgs} args - Arguments to update or create a SavedQuery.
     * @example
     * // Update or create a SavedQuery
     * const savedQuery = await prisma.savedQuery.upsert({
     *   create: {
     *     // ... data to create a SavedQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedQuery we want to update
     *   }
     * })
     */
    upsert<T extends SavedQueryUpsertArgs>(args: SelectSubset<T, SavedQueryUpsertArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryCountArgs} args - Arguments to filter SavedQueries to count.
     * @example
     * // Count the number of SavedQueries
     * const count = await prisma.savedQuery.count({
     *   where: {
     *     // ... the filter for the SavedQueries we want to count
     *   }
     * })
    **/
    count<T extends SavedQueryCountArgs>(
      args?: Subset<T, SavedQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SavedQueryAggregateArgs>(args: Subset<T, SavedQueryAggregateArgs>): Prisma.PrismaPromise<GetSavedQueryAggregateType<T>>

    /**
     * Group by SavedQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedQueryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SavedQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedQueryGroupByArgs['orderBy'] }
        : { orderBy?: SavedQueryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SavedQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedQuery model
   */
  readonly fields: SavedQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responses<T extends SavedQuery$responsesArgs<ExtArgs> = {}>(args?: Subset<T, SavedQuery$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SavedQuery model
   */
  interface SavedQueryFieldRefs {
    readonly id: FieldRef<"SavedQuery", 'String'>
    readonly createdAt: FieldRef<"SavedQuery", 'DateTime'>
    readonly updatedAt: FieldRef<"SavedQuery", 'DateTime'>
    readonly userId: FieldRef<"SavedQuery", 'String'>
    readonly name: FieldRef<"SavedQuery", 'String'>
    readonly description: FieldRef<"SavedQuery", 'String'>
    readonly searchType: FieldRef<"SavedQuery", 'String'>
    readonly searchQuery: FieldRef<"SavedQuery", 'Json'>
    readonly enhancementQuery: FieldRef<"SavedQuery", 'String'>
    readonly columnWeights: FieldRef<"SavedQuery", 'Json'>
    readonly lastRunAt: FieldRef<"SavedQuery", 'DateTime'>
    readonly lastScrapeId: FieldRef<"SavedQuery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SavedQuery findUnique
   */
  export type SavedQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * Filter, which SavedQuery to fetch.
     */
    where: SavedQueryWhereUniqueInput
  }

  /**
   * SavedQuery findUniqueOrThrow
   */
  export type SavedQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * Filter, which SavedQuery to fetch.
     */
    where: SavedQueryWhereUniqueInput
  }

  /**
   * SavedQuery findFirst
   */
  export type SavedQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * Filter, which SavedQuery to fetch.
     */
    where?: SavedQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedQueries to fetch.
     */
    orderBy?: SavedQueryOrderByWithRelationInput | SavedQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedQueries.
     */
    cursor?: SavedQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedQueries.
     */
    distinct?: SavedQueryScalarFieldEnum | SavedQueryScalarFieldEnum[]
  }

  /**
   * SavedQuery findFirstOrThrow
   */
  export type SavedQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * Filter, which SavedQuery to fetch.
     */
    where?: SavedQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedQueries to fetch.
     */
    orderBy?: SavedQueryOrderByWithRelationInput | SavedQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedQueries.
     */
    cursor?: SavedQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedQueries.
     */
    distinct?: SavedQueryScalarFieldEnum | SavedQueryScalarFieldEnum[]
  }

  /**
   * SavedQuery findMany
   */
  export type SavedQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * Filter, which SavedQueries to fetch.
     */
    where?: SavedQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedQueries to fetch.
     */
    orderBy?: SavedQueryOrderByWithRelationInput | SavedQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedQueries.
     */
    cursor?: SavedQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedQueries.
     */
    skip?: number
    distinct?: SavedQueryScalarFieldEnum | SavedQueryScalarFieldEnum[]
  }

  /**
   * SavedQuery create
   */
  export type SavedQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedQuery.
     */
    data: XOR<SavedQueryCreateInput, SavedQueryUncheckedCreateInput>
  }

  /**
   * SavedQuery createMany
   */
  export type SavedQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedQueries.
     */
    data: SavedQueryCreateManyInput | SavedQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedQuery createManyAndReturn
   */
  export type SavedQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * The data used to create many SavedQueries.
     */
    data: SavedQueryCreateManyInput | SavedQueryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedQuery update
   */
  export type SavedQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedQuery.
     */
    data: XOR<SavedQueryUpdateInput, SavedQueryUncheckedUpdateInput>
    /**
     * Choose, which SavedQuery to update.
     */
    where: SavedQueryWhereUniqueInput
  }

  /**
   * SavedQuery updateMany
   */
  export type SavedQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedQueries.
     */
    data: XOR<SavedQueryUpdateManyMutationInput, SavedQueryUncheckedUpdateManyInput>
    /**
     * Filter which SavedQueries to update
     */
    where?: SavedQueryWhereInput
    /**
     * Limit how many SavedQueries to update.
     */
    limit?: number
  }

  /**
   * SavedQuery updateManyAndReturn
   */
  export type SavedQueryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * The data used to update SavedQueries.
     */
    data: XOR<SavedQueryUpdateManyMutationInput, SavedQueryUncheckedUpdateManyInput>
    /**
     * Filter which SavedQueries to update
     */
    where?: SavedQueryWhereInput
    /**
     * Limit how many SavedQueries to update.
     */
    limit?: number
  }

  /**
   * SavedQuery upsert
   */
  export type SavedQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedQuery to update in case it exists.
     */
    where: SavedQueryWhereUniqueInput
    /**
     * In case the SavedQuery found by the `where` argument doesn't exist, create a new SavedQuery with this data.
     */
    create: XOR<SavedQueryCreateInput, SavedQueryUncheckedCreateInput>
    /**
     * In case the SavedQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedQueryUpdateInput, SavedQueryUncheckedUpdateInput>
  }

  /**
   * SavedQuery delete
   */
  export type SavedQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
    /**
     * Filter which SavedQuery to delete.
     */
    where: SavedQueryWhereUniqueInput
  }

  /**
   * SavedQuery deleteMany
   */
  export type SavedQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedQueries to delete
     */
    where?: SavedQueryWhereInput
    /**
     * Limit how many SavedQueries to delete.
     */
    limit?: number
  }

  /**
   * SavedQuery.responses
   */
  export type SavedQuery$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    where?: UserListingResponseWhereInput
    orderBy?: UserListingResponseOrderByWithRelationInput | UserListingResponseOrderByWithRelationInput[]
    cursor?: UserListingResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserListingResponseScalarFieldEnum | UserListingResponseScalarFieldEnum[]
  }

  /**
   * SavedQuery without action
   */
  export type SavedQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedQuery
     */
    select?: SavedQuerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedQuery
     */
    omit?: SavedQueryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedQueryInclude<ExtArgs> | null
  }


  /**
   * Model UserListingResponse
   */

  export type AggregateUserListingResponse = {
    _count: UserListingResponseCountAggregateOutputType | null
    _min: UserListingResponseMinAggregateOutputType | null
    _max: UserListingResponseMaxAggregateOutputType | null
  }

  export type UserListingResponseMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    savedQueryId: string | null
    listingId: string | null
    response: string | null
    notes: string | null
  }

  export type UserListingResponseMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    savedQueryId: string | null
    listingId: string | null
    response: string | null
    notes: string | null
  }

  export type UserListingResponseCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    savedQueryId: number
    listingId: number
    response: number
    notes: number
    _all: number
  }


  export type UserListingResponseMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    savedQueryId?: true
    listingId?: true
    response?: true
    notes?: true
  }

  export type UserListingResponseMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    savedQueryId?: true
    listingId?: true
    response?: true
    notes?: true
  }

  export type UserListingResponseCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    savedQueryId?: true
    listingId?: true
    response?: true
    notes?: true
    _all?: true
  }

  export type UserListingResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserListingResponse to aggregate.
     */
    where?: UserListingResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListingResponses to fetch.
     */
    orderBy?: UserListingResponseOrderByWithRelationInput | UserListingResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserListingResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListingResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListingResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserListingResponses
    **/
    _count?: true | UserListingResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserListingResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserListingResponseMaxAggregateInputType
  }

  export type GetUserListingResponseAggregateType<T extends UserListingResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserListingResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserListingResponse[P]>
      : GetScalarType<T[P], AggregateUserListingResponse[P]>
  }




  export type UserListingResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserListingResponseWhereInput
    orderBy?: UserListingResponseOrderByWithAggregationInput | UserListingResponseOrderByWithAggregationInput[]
    by: UserListingResponseScalarFieldEnum[] | UserListingResponseScalarFieldEnum
    having?: UserListingResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserListingResponseCountAggregateInputType | true
    _min?: UserListingResponseMinAggregateInputType
    _max?: UserListingResponseMaxAggregateInputType
  }

  export type UserListingResponseGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    savedQueryId: string
    listingId: string
    response: string
    notes: string | null
    _count: UserListingResponseCountAggregateOutputType | null
    _min: UserListingResponseMinAggregateOutputType | null
    _max: UserListingResponseMaxAggregateOutputType | null
  }

  type GetUserListingResponseGroupByPayload<T extends UserListingResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserListingResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserListingResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserListingResponseGroupByOutputType[P]>
            : GetScalarType<T[P], UserListingResponseGroupByOutputType[P]>
        }
      >
    >


  export type UserListingResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    savedQueryId?: boolean
    listingId?: boolean
    response?: boolean
    notes?: boolean
    savedQuery?: boolean | SavedQueryDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userListingResponse"]>

  export type UserListingResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    savedQueryId?: boolean
    listingId?: boolean
    response?: boolean
    notes?: boolean
    savedQuery?: boolean | SavedQueryDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userListingResponse"]>

  export type UserListingResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    savedQueryId?: boolean
    listingId?: boolean
    response?: boolean
    notes?: boolean
    savedQuery?: boolean | SavedQueryDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userListingResponse"]>

  export type UserListingResponseSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    savedQueryId?: boolean
    listingId?: boolean
    response?: boolean
    notes?: boolean
  }

  export type UserListingResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "savedQueryId" | "listingId" | "response" | "notes", ExtArgs["result"]["userListingResponse"]>
  export type UserListingResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedQuery?: boolean | SavedQueryDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type UserListingResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedQuery?: boolean | SavedQueryDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }
  export type UserListingResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedQuery?: boolean | SavedQueryDefaultArgs<ExtArgs>
    listing?: boolean | ListingDefaultArgs<ExtArgs>
  }

  export type $UserListingResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserListingResponse"
    objects: {
      savedQuery: Prisma.$SavedQueryPayload<ExtArgs>
      listing: Prisma.$ListingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      savedQueryId: string
      listingId: string
      response: string
      notes: string | null
    }, ExtArgs["result"]["userListingResponse"]>
    composites: {}
  }

  type UserListingResponseGetPayload<S extends boolean | null | undefined | UserListingResponseDefaultArgs> = $Result.GetResult<Prisma.$UserListingResponsePayload, S>

  type UserListingResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserListingResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserListingResponseCountAggregateInputType | true
    }

  export interface UserListingResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserListingResponse'], meta: { name: 'UserListingResponse' } }
    /**
     * Find zero or one UserListingResponse that matches the filter.
     * @param {UserListingResponseFindUniqueArgs} args - Arguments to find a UserListingResponse
     * @example
     * // Get one UserListingResponse
     * const userListingResponse = await prisma.userListingResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserListingResponseFindUniqueArgs>(args: SelectSubset<T, UserListingResponseFindUniqueArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserListingResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserListingResponseFindUniqueOrThrowArgs} args - Arguments to find a UserListingResponse
     * @example
     * // Get one UserListingResponse
     * const userListingResponse = await prisma.userListingResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserListingResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserListingResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserListingResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseFindFirstArgs} args - Arguments to find a UserListingResponse
     * @example
     * // Get one UserListingResponse
     * const userListingResponse = await prisma.userListingResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserListingResponseFindFirstArgs>(args?: SelectSubset<T, UserListingResponseFindFirstArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserListingResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseFindFirstOrThrowArgs} args - Arguments to find a UserListingResponse
     * @example
     * // Get one UserListingResponse
     * const userListingResponse = await prisma.userListingResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserListingResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserListingResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserListingResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserListingResponses
     * const userListingResponses = await prisma.userListingResponse.findMany()
     * 
     * // Get first 10 UserListingResponses
     * const userListingResponses = await prisma.userListingResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userListingResponseWithIdOnly = await prisma.userListingResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserListingResponseFindManyArgs>(args?: SelectSubset<T, UserListingResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserListingResponse.
     * @param {UserListingResponseCreateArgs} args - Arguments to create a UserListingResponse.
     * @example
     * // Create one UserListingResponse
     * const UserListingResponse = await prisma.userListingResponse.create({
     *   data: {
     *     // ... data to create a UserListingResponse
     *   }
     * })
     * 
     */
    create<T extends UserListingResponseCreateArgs>(args: SelectSubset<T, UserListingResponseCreateArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserListingResponses.
     * @param {UserListingResponseCreateManyArgs} args - Arguments to create many UserListingResponses.
     * @example
     * // Create many UserListingResponses
     * const userListingResponse = await prisma.userListingResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserListingResponseCreateManyArgs>(args?: SelectSubset<T, UserListingResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserListingResponses and returns the data saved in the database.
     * @param {UserListingResponseCreateManyAndReturnArgs} args - Arguments to create many UserListingResponses.
     * @example
     * // Create many UserListingResponses
     * const userListingResponse = await prisma.userListingResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserListingResponses and only return the `id`
     * const userListingResponseWithIdOnly = await prisma.userListingResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserListingResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserListingResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserListingResponse.
     * @param {UserListingResponseDeleteArgs} args - Arguments to delete one UserListingResponse.
     * @example
     * // Delete one UserListingResponse
     * const UserListingResponse = await prisma.userListingResponse.delete({
     *   where: {
     *     // ... filter to delete one UserListingResponse
     *   }
     * })
     * 
     */
    delete<T extends UserListingResponseDeleteArgs>(args: SelectSubset<T, UserListingResponseDeleteArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserListingResponse.
     * @param {UserListingResponseUpdateArgs} args - Arguments to update one UserListingResponse.
     * @example
     * // Update one UserListingResponse
     * const userListingResponse = await prisma.userListingResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserListingResponseUpdateArgs>(args: SelectSubset<T, UserListingResponseUpdateArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserListingResponses.
     * @param {UserListingResponseDeleteManyArgs} args - Arguments to filter UserListingResponses to delete.
     * @example
     * // Delete a few UserListingResponses
     * const { count } = await prisma.userListingResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserListingResponseDeleteManyArgs>(args?: SelectSubset<T, UserListingResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserListingResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserListingResponses
     * const userListingResponse = await prisma.userListingResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserListingResponseUpdateManyArgs>(args: SelectSubset<T, UserListingResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserListingResponses and returns the data updated in the database.
     * @param {UserListingResponseUpdateManyAndReturnArgs} args - Arguments to update many UserListingResponses.
     * @example
     * // Update many UserListingResponses
     * const userListingResponse = await prisma.userListingResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserListingResponses and only return the `id`
     * const userListingResponseWithIdOnly = await prisma.userListingResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserListingResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserListingResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserListingResponse.
     * @param {UserListingResponseUpsertArgs} args - Arguments to update or create a UserListingResponse.
     * @example
     * // Update or create a UserListingResponse
     * const userListingResponse = await prisma.userListingResponse.upsert({
     *   create: {
     *     // ... data to create a UserListingResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserListingResponse we want to update
     *   }
     * })
     */
    upsert<T extends UserListingResponseUpsertArgs>(args: SelectSubset<T, UserListingResponseUpsertArgs<ExtArgs>>): Prisma__UserListingResponseClient<$Result.GetResult<Prisma.$UserListingResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserListingResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseCountArgs} args - Arguments to filter UserListingResponses to count.
     * @example
     * // Count the number of UserListingResponses
     * const count = await prisma.userListingResponse.count({
     *   where: {
     *     // ... the filter for the UserListingResponses we want to count
     *   }
     * })
    **/
    count<T extends UserListingResponseCountArgs>(
      args?: Subset<T, UserListingResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserListingResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserListingResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserListingResponseAggregateArgs>(args: Subset<T, UserListingResponseAggregateArgs>): Prisma.PrismaPromise<GetUserListingResponseAggregateType<T>>

    /**
     * Group by UserListingResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserListingResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserListingResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserListingResponseGroupByArgs['orderBy'] }
        : { orderBy?: UserListingResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserListingResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserListingResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserListingResponse model
   */
  readonly fields: UserListingResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserListingResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserListingResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedQuery<T extends SavedQueryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SavedQueryDefaultArgs<ExtArgs>>): Prisma__SavedQueryClient<$Result.GetResult<Prisma.$SavedQueryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    listing<T extends ListingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListingDefaultArgs<ExtArgs>>): Prisma__ListingClient<$Result.GetResult<Prisma.$ListingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserListingResponse model
   */
  interface UserListingResponseFieldRefs {
    readonly id: FieldRef<"UserListingResponse", 'String'>
    readonly createdAt: FieldRef<"UserListingResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"UserListingResponse", 'DateTime'>
    readonly userId: FieldRef<"UserListingResponse", 'String'>
    readonly savedQueryId: FieldRef<"UserListingResponse", 'String'>
    readonly listingId: FieldRef<"UserListingResponse", 'String'>
    readonly response: FieldRef<"UserListingResponse", 'String'>
    readonly notes: FieldRef<"UserListingResponse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserListingResponse findUnique
   */
  export type UserListingResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserListingResponse to fetch.
     */
    where: UserListingResponseWhereUniqueInput
  }

  /**
   * UserListingResponse findUniqueOrThrow
   */
  export type UserListingResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserListingResponse to fetch.
     */
    where: UserListingResponseWhereUniqueInput
  }

  /**
   * UserListingResponse findFirst
   */
  export type UserListingResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserListingResponse to fetch.
     */
    where?: UserListingResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListingResponses to fetch.
     */
    orderBy?: UserListingResponseOrderByWithRelationInput | UserListingResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserListingResponses.
     */
    cursor?: UserListingResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListingResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListingResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserListingResponses.
     */
    distinct?: UserListingResponseScalarFieldEnum | UserListingResponseScalarFieldEnum[]
  }

  /**
   * UserListingResponse findFirstOrThrow
   */
  export type UserListingResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserListingResponse to fetch.
     */
    where?: UserListingResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListingResponses to fetch.
     */
    orderBy?: UserListingResponseOrderByWithRelationInput | UserListingResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserListingResponses.
     */
    cursor?: UserListingResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListingResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListingResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserListingResponses.
     */
    distinct?: UserListingResponseScalarFieldEnum | UserListingResponseScalarFieldEnum[]
  }

  /**
   * UserListingResponse findMany
   */
  export type UserListingResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * Filter, which UserListingResponses to fetch.
     */
    where?: UserListingResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserListingResponses to fetch.
     */
    orderBy?: UserListingResponseOrderByWithRelationInput | UserListingResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserListingResponses.
     */
    cursor?: UserListingResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserListingResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserListingResponses.
     */
    skip?: number
    distinct?: UserListingResponseScalarFieldEnum | UserListingResponseScalarFieldEnum[]
  }

  /**
   * UserListingResponse create
   */
  export type UserListingResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserListingResponse.
     */
    data: XOR<UserListingResponseCreateInput, UserListingResponseUncheckedCreateInput>
  }

  /**
   * UserListingResponse createMany
   */
  export type UserListingResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserListingResponses.
     */
    data: UserListingResponseCreateManyInput | UserListingResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserListingResponse createManyAndReturn
   */
  export type UserListingResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * The data used to create many UserListingResponses.
     */
    data: UserListingResponseCreateManyInput | UserListingResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserListingResponse update
   */
  export type UserListingResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserListingResponse.
     */
    data: XOR<UserListingResponseUpdateInput, UserListingResponseUncheckedUpdateInput>
    /**
     * Choose, which UserListingResponse to update.
     */
    where: UserListingResponseWhereUniqueInput
  }

  /**
   * UserListingResponse updateMany
   */
  export type UserListingResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserListingResponses.
     */
    data: XOR<UserListingResponseUpdateManyMutationInput, UserListingResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserListingResponses to update
     */
    where?: UserListingResponseWhereInput
    /**
     * Limit how many UserListingResponses to update.
     */
    limit?: number
  }

  /**
   * UserListingResponse updateManyAndReturn
   */
  export type UserListingResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * The data used to update UserListingResponses.
     */
    data: XOR<UserListingResponseUpdateManyMutationInput, UserListingResponseUncheckedUpdateManyInput>
    /**
     * Filter which UserListingResponses to update
     */
    where?: UserListingResponseWhereInput
    /**
     * Limit how many UserListingResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserListingResponse upsert
   */
  export type UserListingResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserListingResponse to update in case it exists.
     */
    where: UserListingResponseWhereUniqueInput
    /**
     * In case the UserListingResponse found by the `where` argument doesn't exist, create a new UserListingResponse with this data.
     */
    create: XOR<UserListingResponseCreateInput, UserListingResponseUncheckedCreateInput>
    /**
     * In case the UserListingResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserListingResponseUpdateInput, UserListingResponseUncheckedUpdateInput>
  }

  /**
   * UserListingResponse delete
   */
  export type UserListingResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
    /**
     * Filter which UserListingResponse to delete.
     */
    where: UserListingResponseWhereUniqueInput
  }

  /**
   * UserListingResponse deleteMany
   */
  export type UserListingResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserListingResponses to delete
     */
    where?: UserListingResponseWhereInput
    /**
     * Limit how many UserListingResponses to delete.
     */
    limit?: number
  }

  /**
   * UserListingResponse without action
   */
  export type UserListingResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserListingResponse
     */
    select?: UserListingResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserListingResponse
     */
    omit?: UserListingResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserListingResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScrapeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    name: 'name',
    searchType: 'searchType',
    searchQuery: 'searchQuery',
    apifyRunId: 'apifyRunId',
    taskId: 'taskId',
    status: 'status',
    error: 'error',
    completedAt: 'completedAt',
    durationMs: 'durationMs',
    listingsCount: 'listingsCount'
  };

  export type ScrapeScalarFieldEnum = (typeof ScrapeScalarFieldEnum)[keyof typeof ScrapeScalarFieldEnum]


  export const ListingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    zpid: 'zpid',
    detailUrl: 'detailUrl',
    imgSrc: 'imgSrc',
    photos: 'photos',
    hasImage: 'hasImage',
    has3DModel: 'has3DModel',
    hasVideo: 'hasVideo',
    statusType: 'statusType',
    statusText: 'statusText',
    price: 'price',
    priceFormatted: 'priceFormatted',
    currency: 'currency',
    address: 'address',
    addressStreet: 'addressStreet',
    addressCity: 'addressCity',
    addressState: 'addressState',
    addressZipcode: 'addressZipcode',
    latitude: 'latitude',
    longitude: 'longitude',
    beds: 'beds',
    baths: 'baths',
    area: 'area',
    homeType: 'homeType',
    availabilityDate: 'availabilityDate',
    scrapedAt: 'scrapedAt',
    brokerName: 'brokerName',
    zestimate: 'zestimate',
    rentZestimate: 'rentZestimate',
    isFeaturedListing: 'isFeaturedListing',
    rawData: 'rawData'
  };

  export type ListingScalarFieldEnum = (typeof ListingScalarFieldEnum)[keyof typeof ListingScalarFieldEnum]


  export const ScrapeListingScalarFieldEnum: {
    scrapeId: 'scrapeId',
    listingId: 'listingId',
    foundAt: 'foundAt'
  };

  export type ScrapeListingScalarFieldEnum = (typeof ScrapeListingScalarFieldEnum)[keyof typeof ScrapeListingScalarFieldEnum]


  export const EnhancementScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    scrapeId: 'scrapeId',
    userId: 'userId',
    query: 'query',
    taskId: 'taskId',
    status: 'status',
    error: 'error',
    completedAt: 'completedAt',
    processedCount: 'processedCount',
    totalCount: 'totalCount'
  };

  export type EnhancementScalarFieldEnum = (typeof EnhancementScalarFieldEnum)[keyof typeof EnhancementScalarFieldEnum]


  export const EnhancementColumnScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    enhancementId: 'enhancementId',
    name: 'name',
    type: 'type',
    description: 'description',
    weight: 'weight',
    order: 'order'
  };

  export type EnhancementColumnScalarFieldEnum = (typeof EnhancementColumnScalarFieldEnum)[keyof typeof EnhancementColumnScalarFieldEnum]


  export const EnhancementResultScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    enhancementId: 'enhancementId',
    listingId: 'listingId',
    values: 'values',
    compositeScore: 'compositeScore',
    status: 'status',
    error: 'error'
  };

  export type EnhancementResultScalarFieldEnum = (typeof EnhancementResultScalarFieldEnum)[keyof typeof EnhancementResultScalarFieldEnum]


  export const EnhancementValueScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    resultId: 'resultId',
    columnId: 'columnId',
    enhancementId: 'enhancementId',
    listingId: 'listingId',
    normalizedValue: 'normalizedValue'
  };

  export type EnhancementValueScalarFieldEnum = (typeof EnhancementValueScalarFieldEnum)[keyof typeof EnhancementValueScalarFieldEnum]


  export const SavedQueryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    name: 'name',
    description: 'description',
    searchType: 'searchType',
    searchQuery: 'searchQuery',
    enhancementQuery: 'enhancementQuery',
    columnWeights: 'columnWeights',
    lastRunAt: 'lastRunAt',
    lastScrapeId: 'lastScrapeId'
  };

  export type SavedQueryScalarFieldEnum = (typeof SavedQueryScalarFieldEnum)[keyof typeof SavedQueryScalarFieldEnum]


  export const UserListingResponseScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    savedQueryId: 'savedQueryId',
    listingId: 'listingId',
    response: 'response',
    notes: 'notes'
  };

  export type UserListingResponseScalarFieldEnum = (typeof UserListingResponseScalarFieldEnum)[keyof typeof UserListingResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScrapeWhereInput = {
    AND?: ScrapeWhereInput | ScrapeWhereInput[]
    OR?: ScrapeWhereInput[]
    NOT?: ScrapeWhereInput | ScrapeWhereInput[]
    id?: StringFilter<"Scrape"> | string
    createdAt?: DateTimeFilter<"Scrape"> | Date | string
    updatedAt?: DateTimeFilter<"Scrape"> | Date | string
    userId?: StringFilter<"Scrape"> | string
    name?: StringNullableFilter<"Scrape"> | string | null
    searchType?: StringFilter<"Scrape"> | string
    searchQuery?: JsonFilter<"Scrape">
    apifyRunId?: StringFilter<"Scrape"> | string
    taskId?: StringNullableFilter<"Scrape"> | string | null
    status?: StringFilter<"Scrape"> | string
    error?: StringNullableFilter<"Scrape"> | string | null
    completedAt?: DateTimeNullableFilter<"Scrape"> | Date | string | null
    durationMs?: IntNullableFilter<"Scrape"> | number | null
    listingsCount?: IntFilter<"Scrape"> | number
    listings?: ScrapeListingListRelationFilter
    enhancements?: EnhancementListRelationFilter
  }

  export type ScrapeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    searchType?: SortOrder
    searchQuery?: SortOrder
    apifyRunId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    listingsCount?: SortOrder
    listings?: ScrapeListingOrderByRelationAggregateInput
    enhancements?: EnhancementOrderByRelationAggregateInput
  }

  export type ScrapeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apifyRunId?: string
    AND?: ScrapeWhereInput | ScrapeWhereInput[]
    OR?: ScrapeWhereInput[]
    NOT?: ScrapeWhereInput | ScrapeWhereInput[]
    createdAt?: DateTimeFilter<"Scrape"> | Date | string
    updatedAt?: DateTimeFilter<"Scrape"> | Date | string
    userId?: StringFilter<"Scrape"> | string
    name?: StringNullableFilter<"Scrape"> | string | null
    searchType?: StringFilter<"Scrape"> | string
    searchQuery?: JsonFilter<"Scrape">
    taskId?: StringNullableFilter<"Scrape"> | string | null
    status?: StringFilter<"Scrape"> | string
    error?: StringNullableFilter<"Scrape"> | string | null
    completedAt?: DateTimeNullableFilter<"Scrape"> | Date | string | null
    durationMs?: IntNullableFilter<"Scrape"> | number | null
    listingsCount?: IntFilter<"Scrape"> | number
    listings?: ScrapeListingListRelationFilter
    enhancements?: EnhancementListRelationFilter
  }, "id" | "apifyRunId">

  export type ScrapeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    searchType?: SortOrder
    searchQuery?: SortOrder
    apifyRunId?: SortOrder
    taskId?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    listingsCount?: SortOrder
    _count?: ScrapeCountOrderByAggregateInput
    _avg?: ScrapeAvgOrderByAggregateInput
    _max?: ScrapeMaxOrderByAggregateInput
    _min?: ScrapeMinOrderByAggregateInput
    _sum?: ScrapeSumOrderByAggregateInput
  }

  export type ScrapeScalarWhereWithAggregatesInput = {
    AND?: ScrapeScalarWhereWithAggregatesInput | ScrapeScalarWhereWithAggregatesInput[]
    OR?: ScrapeScalarWhereWithAggregatesInput[]
    NOT?: ScrapeScalarWhereWithAggregatesInput | ScrapeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scrape"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Scrape"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Scrape"> | Date | string
    userId?: StringWithAggregatesFilter<"Scrape"> | string
    name?: StringNullableWithAggregatesFilter<"Scrape"> | string | null
    searchType?: StringWithAggregatesFilter<"Scrape"> | string
    searchQuery?: JsonWithAggregatesFilter<"Scrape">
    apifyRunId?: StringWithAggregatesFilter<"Scrape"> | string
    taskId?: StringNullableWithAggregatesFilter<"Scrape"> | string | null
    status?: StringWithAggregatesFilter<"Scrape"> | string
    error?: StringNullableWithAggregatesFilter<"Scrape"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Scrape"> | Date | string | null
    durationMs?: IntNullableWithAggregatesFilter<"Scrape"> | number | null
    listingsCount?: IntWithAggregatesFilter<"Scrape"> | number
  }

  export type ListingWhereInput = {
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    id?: StringFilter<"Listing"> | string
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    zpid?: StringFilter<"Listing"> | string
    detailUrl?: StringFilter<"Listing"> | string
    imgSrc?: StringNullableFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    hasImage?: BoolFilter<"Listing"> | boolean
    has3DModel?: BoolFilter<"Listing"> | boolean
    hasVideo?: BoolFilter<"Listing"> | boolean
    statusType?: StringFilter<"Listing"> | string
    statusText?: StringFilter<"Listing"> | string
    price?: IntFilter<"Listing"> | number
    priceFormatted?: StringNullableFilter<"Listing"> | string | null
    currency?: StringFilter<"Listing"> | string
    address?: StringFilter<"Listing"> | string
    addressStreet?: StringNullableFilter<"Listing"> | string | null
    addressCity?: StringNullableFilter<"Listing"> | string | null
    addressState?: StringNullableFilter<"Listing"> | string | null
    addressZipcode?: StringNullableFilter<"Listing"> | string | null
    latitude?: FloatNullableFilter<"Listing"> | number | null
    longitude?: FloatNullableFilter<"Listing"> | number | null
    beds?: IntNullableFilter<"Listing"> | number | null
    baths?: FloatNullableFilter<"Listing"> | number | null
    area?: IntNullableFilter<"Listing"> | number | null
    homeType?: StringNullableFilter<"Listing"> | string | null
    availabilityDate?: DateTimeNullableFilter<"Listing"> | Date | string | null
    scrapedAt?: DateTimeFilter<"Listing"> | Date | string
    brokerName?: StringNullableFilter<"Listing"> | string | null
    zestimate?: IntNullableFilter<"Listing"> | number | null
    rentZestimate?: IntNullableFilter<"Listing"> | number | null
    isFeaturedListing?: BoolFilter<"Listing"> | boolean
    rawData?: JsonFilter<"Listing">
    scrapes?: ScrapeListingListRelationFilter
    enhancementResults?: EnhancementResultListRelationFilter
    userResponses?: UserListingResponseListRelationFilter
  }

  export type ListingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zpid?: SortOrder
    detailUrl?: SortOrder
    imgSrc?: SortOrderInput | SortOrder
    photos?: SortOrder
    hasImage?: SortOrder
    has3DModel?: SortOrder
    hasVideo?: SortOrder
    statusType?: SortOrder
    statusText?: SortOrder
    price?: SortOrder
    priceFormatted?: SortOrderInput | SortOrder
    currency?: SortOrder
    address?: SortOrder
    addressStreet?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressState?: SortOrderInput | SortOrder
    addressZipcode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    beds?: SortOrderInput | SortOrder
    baths?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    homeType?: SortOrderInput | SortOrder
    availabilityDate?: SortOrderInput | SortOrder
    scrapedAt?: SortOrder
    brokerName?: SortOrderInput | SortOrder
    zestimate?: SortOrderInput | SortOrder
    rentZestimate?: SortOrderInput | SortOrder
    isFeaturedListing?: SortOrder
    rawData?: SortOrder
    scrapes?: ScrapeListingOrderByRelationAggregateInput
    enhancementResults?: EnhancementResultOrderByRelationAggregateInput
    userResponses?: UserListingResponseOrderByRelationAggregateInput
  }

  export type ListingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    zpid?: string
    AND?: ListingWhereInput | ListingWhereInput[]
    OR?: ListingWhereInput[]
    NOT?: ListingWhereInput | ListingWhereInput[]
    createdAt?: DateTimeFilter<"Listing"> | Date | string
    updatedAt?: DateTimeFilter<"Listing"> | Date | string
    detailUrl?: StringFilter<"Listing"> | string
    imgSrc?: StringNullableFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    hasImage?: BoolFilter<"Listing"> | boolean
    has3DModel?: BoolFilter<"Listing"> | boolean
    hasVideo?: BoolFilter<"Listing"> | boolean
    statusType?: StringFilter<"Listing"> | string
    statusText?: StringFilter<"Listing"> | string
    price?: IntFilter<"Listing"> | number
    priceFormatted?: StringNullableFilter<"Listing"> | string | null
    currency?: StringFilter<"Listing"> | string
    address?: StringFilter<"Listing"> | string
    addressStreet?: StringNullableFilter<"Listing"> | string | null
    addressCity?: StringNullableFilter<"Listing"> | string | null
    addressState?: StringNullableFilter<"Listing"> | string | null
    addressZipcode?: StringNullableFilter<"Listing"> | string | null
    latitude?: FloatNullableFilter<"Listing"> | number | null
    longitude?: FloatNullableFilter<"Listing"> | number | null
    beds?: IntNullableFilter<"Listing"> | number | null
    baths?: FloatNullableFilter<"Listing"> | number | null
    area?: IntNullableFilter<"Listing"> | number | null
    homeType?: StringNullableFilter<"Listing"> | string | null
    availabilityDate?: DateTimeNullableFilter<"Listing"> | Date | string | null
    scrapedAt?: DateTimeFilter<"Listing"> | Date | string
    brokerName?: StringNullableFilter<"Listing"> | string | null
    zestimate?: IntNullableFilter<"Listing"> | number | null
    rentZestimate?: IntNullableFilter<"Listing"> | number | null
    isFeaturedListing?: BoolFilter<"Listing"> | boolean
    rawData?: JsonFilter<"Listing">
    scrapes?: ScrapeListingListRelationFilter
    enhancementResults?: EnhancementResultListRelationFilter
    userResponses?: UserListingResponseListRelationFilter
  }, "id" | "zpid">

  export type ListingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zpid?: SortOrder
    detailUrl?: SortOrder
    imgSrc?: SortOrderInput | SortOrder
    photos?: SortOrder
    hasImage?: SortOrder
    has3DModel?: SortOrder
    hasVideo?: SortOrder
    statusType?: SortOrder
    statusText?: SortOrder
    price?: SortOrder
    priceFormatted?: SortOrderInput | SortOrder
    currency?: SortOrder
    address?: SortOrder
    addressStreet?: SortOrderInput | SortOrder
    addressCity?: SortOrderInput | SortOrder
    addressState?: SortOrderInput | SortOrder
    addressZipcode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    beds?: SortOrderInput | SortOrder
    baths?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    homeType?: SortOrderInput | SortOrder
    availabilityDate?: SortOrderInput | SortOrder
    scrapedAt?: SortOrder
    brokerName?: SortOrderInput | SortOrder
    zestimate?: SortOrderInput | SortOrder
    rentZestimate?: SortOrderInput | SortOrder
    isFeaturedListing?: SortOrder
    rawData?: SortOrder
    _count?: ListingCountOrderByAggregateInput
    _avg?: ListingAvgOrderByAggregateInput
    _max?: ListingMaxOrderByAggregateInput
    _min?: ListingMinOrderByAggregateInput
    _sum?: ListingSumOrderByAggregateInput
  }

  export type ListingScalarWhereWithAggregatesInput = {
    AND?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    OR?: ListingScalarWhereWithAggregatesInput[]
    NOT?: ListingScalarWhereWithAggregatesInput | ListingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    zpid?: StringWithAggregatesFilter<"Listing"> | string
    detailUrl?: StringWithAggregatesFilter<"Listing"> | string
    imgSrc?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    photos?: StringNullableListFilter<"Listing">
    hasImage?: BoolWithAggregatesFilter<"Listing"> | boolean
    has3DModel?: BoolWithAggregatesFilter<"Listing"> | boolean
    hasVideo?: BoolWithAggregatesFilter<"Listing"> | boolean
    statusType?: StringWithAggregatesFilter<"Listing"> | string
    statusText?: StringWithAggregatesFilter<"Listing"> | string
    price?: IntWithAggregatesFilter<"Listing"> | number
    priceFormatted?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    currency?: StringWithAggregatesFilter<"Listing"> | string
    address?: StringWithAggregatesFilter<"Listing"> | string
    addressStreet?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    addressCity?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    addressState?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    addressZipcode?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    beds?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    baths?: FloatNullableWithAggregatesFilter<"Listing"> | number | null
    area?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    homeType?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    availabilityDate?: DateTimeNullableWithAggregatesFilter<"Listing"> | Date | string | null
    scrapedAt?: DateTimeWithAggregatesFilter<"Listing"> | Date | string
    brokerName?: StringNullableWithAggregatesFilter<"Listing"> | string | null
    zestimate?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    rentZestimate?: IntNullableWithAggregatesFilter<"Listing"> | number | null
    isFeaturedListing?: BoolWithAggregatesFilter<"Listing"> | boolean
    rawData?: JsonWithAggregatesFilter<"Listing">
  }

  export type ScrapeListingWhereInput = {
    AND?: ScrapeListingWhereInput | ScrapeListingWhereInput[]
    OR?: ScrapeListingWhereInput[]
    NOT?: ScrapeListingWhereInput | ScrapeListingWhereInput[]
    scrapeId?: StringFilter<"ScrapeListing"> | string
    listingId?: StringFilter<"ScrapeListing"> | string
    foundAt?: DateTimeFilter<"ScrapeListing"> | Date | string
    scrape?: XOR<ScrapeScalarRelationFilter, ScrapeWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type ScrapeListingOrderByWithRelationInput = {
    scrapeId?: SortOrder
    listingId?: SortOrder
    foundAt?: SortOrder
    scrape?: ScrapeOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type ScrapeListingWhereUniqueInput = Prisma.AtLeast<{
    scrapeId_listingId?: ScrapeListingScrapeIdListingIdCompoundUniqueInput
    AND?: ScrapeListingWhereInput | ScrapeListingWhereInput[]
    OR?: ScrapeListingWhereInput[]
    NOT?: ScrapeListingWhereInput | ScrapeListingWhereInput[]
    scrapeId?: StringFilter<"ScrapeListing"> | string
    listingId?: StringFilter<"ScrapeListing"> | string
    foundAt?: DateTimeFilter<"ScrapeListing"> | Date | string
    scrape?: XOR<ScrapeScalarRelationFilter, ScrapeWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "scrapeId_listingId">

  export type ScrapeListingOrderByWithAggregationInput = {
    scrapeId?: SortOrder
    listingId?: SortOrder
    foundAt?: SortOrder
    _count?: ScrapeListingCountOrderByAggregateInput
    _max?: ScrapeListingMaxOrderByAggregateInput
    _min?: ScrapeListingMinOrderByAggregateInput
  }

  export type ScrapeListingScalarWhereWithAggregatesInput = {
    AND?: ScrapeListingScalarWhereWithAggregatesInput | ScrapeListingScalarWhereWithAggregatesInput[]
    OR?: ScrapeListingScalarWhereWithAggregatesInput[]
    NOT?: ScrapeListingScalarWhereWithAggregatesInput | ScrapeListingScalarWhereWithAggregatesInput[]
    scrapeId?: StringWithAggregatesFilter<"ScrapeListing"> | string
    listingId?: StringWithAggregatesFilter<"ScrapeListing"> | string
    foundAt?: DateTimeWithAggregatesFilter<"ScrapeListing"> | Date | string
  }

  export type EnhancementWhereInput = {
    AND?: EnhancementWhereInput | EnhancementWhereInput[]
    OR?: EnhancementWhereInput[]
    NOT?: EnhancementWhereInput | EnhancementWhereInput[]
    id?: StringFilter<"Enhancement"> | string
    createdAt?: DateTimeFilter<"Enhancement"> | Date | string
    updatedAt?: DateTimeFilter<"Enhancement"> | Date | string
    scrapeId?: StringFilter<"Enhancement"> | string
    userId?: StringFilter<"Enhancement"> | string
    query?: StringFilter<"Enhancement"> | string
    taskId?: StringNullableFilter<"Enhancement"> | string | null
    status?: StringFilter<"Enhancement"> | string
    error?: StringNullableFilter<"Enhancement"> | string | null
    completedAt?: DateTimeNullableFilter<"Enhancement"> | Date | string | null
    processedCount?: IntFilter<"Enhancement"> | number
    totalCount?: IntFilter<"Enhancement"> | number
    scrape?: XOR<ScrapeScalarRelationFilter, ScrapeWhereInput>
    columns?: EnhancementColumnListRelationFilter
    results?: EnhancementResultListRelationFilter
  }

  export type EnhancementOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scrapeId?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    taskId?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    scrape?: ScrapeOrderByWithRelationInput
    columns?: EnhancementColumnOrderByRelationAggregateInput
    results?: EnhancementResultOrderByRelationAggregateInput
  }

  export type EnhancementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnhancementWhereInput | EnhancementWhereInput[]
    OR?: EnhancementWhereInput[]
    NOT?: EnhancementWhereInput | EnhancementWhereInput[]
    createdAt?: DateTimeFilter<"Enhancement"> | Date | string
    updatedAt?: DateTimeFilter<"Enhancement"> | Date | string
    scrapeId?: StringFilter<"Enhancement"> | string
    userId?: StringFilter<"Enhancement"> | string
    query?: StringFilter<"Enhancement"> | string
    taskId?: StringNullableFilter<"Enhancement"> | string | null
    status?: StringFilter<"Enhancement"> | string
    error?: StringNullableFilter<"Enhancement"> | string | null
    completedAt?: DateTimeNullableFilter<"Enhancement"> | Date | string | null
    processedCount?: IntFilter<"Enhancement"> | number
    totalCount?: IntFilter<"Enhancement"> | number
    scrape?: XOR<ScrapeScalarRelationFilter, ScrapeWhereInput>
    columns?: EnhancementColumnListRelationFilter
    results?: EnhancementResultListRelationFilter
  }, "id">

  export type EnhancementOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scrapeId?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    taskId?: SortOrderInput | SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
    _count?: EnhancementCountOrderByAggregateInput
    _avg?: EnhancementAvgOrderByAggregateInput
    _max?: EnhancementMaxOrderByAggregateInput
    _min?: EnhancementMinOrderByAggregateInput
    _sum?: EnhancementSumOrderByAggregateInput
  }

  export type EnhancementScalarWhereWithAggregatesInput = {
    AND?: EnhancementScalarWhereWithAggregatesInput | EnhancementScalarWhereWithAggregatesInput[]
    OR?: EnhancementScalarWhereWithAggregatesInput[]
    NOT?: EnhancementScalarWhereWithAggregatesInput | EnhancementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enhancement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enhancement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enhancement"> | Date | string
    scrapeId?: StringWithAggregatesFilter<"Enhancement"> | string
    userId?: StringWithAggregatesFilter<"Enhancement"> | string
    query?: StringWithAggregatesFilter<"Enhancement"> | string
    taskId?: StringNullableWithAggregatesFilter<"Enhancement"> | string | null
    status?: StringWithAggregatesFilter<"Enhancement"> | string
    error?: StringNullableWithAggregatesFilter<"Enhancement"> | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Enhancement"> | Date | string | null
    processedCount?: IntWithAggregatesFilter<"Enhancement"> | number
    totalCount?: IntWithAggregatesFilter<"Enhancement"> | number
  }

  export type EnhancementColumnWhereInput = {
    AND?: EnhancementColumnWhereInput | EnhancementColumnWhereInput[]
    OR?: EnhancementColumnWhereInput[]
    NOT?: EnhancementColumnWhereInput | EnhancementColumnWhereInput[]
    id?: StringFilter<"EnhancementColumn"> | string
    createdAt?: DateTimeFilter<"EnhancementColumn"> | Date | string
    enhancementId?: StringFilter<"EnhancementColumn"> | string
    name?: StringFilter<"EnhancementColumn"> | string
    type?: StringFilter<"EnhancementColumn"> | string
    description?: StringFilter<"EnhancementColumn"> | string
    weight?: FloatFilter<"EnhancementColumn"> | number
    order?: IntFilter<"EnhancementColumn"> | number
    enhancement?: XOR<EnhancementScalarRelationFilter, EnhancementWhereInput>
    values?: EnhancementValueListRelationFilter
  }

  export type EnhancementColumnOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enhancementId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    order?: SortOrder
    enhancement?: EnhancementOrderByWithRelationInput
    values?: EnhancementValueOrderByRelationAggregateInput
  }

  export type EnhancementColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnhancementColumnWhereInput | EnhancementColumnWhereInput[]
    OR?: EnhancementColumnWhereInput[]
    NOT?: EnhancementColumnWhereInput | EnhancementColumnWhereInput[]
    createdAt?: DateTimeFilter<"EnhancementColumn"> | Date | string
    enhancementId?: StringFilter<"EnhancementColumn"> | string
    name?: StringFilter<"EnhancementColumn"> | string
    type?: StringFilter<"EnhancementColumn"> | string
    description?: StringFilter<"EnhancementColumn"> | string
    weight?: FloatFilter<"EnhancementColumn"> | number
    order?: IntFilter<"EnhancementColumn"> | number
    enhancement?: XOR<EnhancementScalarRelationFilter, EnhancementWhereInput>
    values?: EnhancementValueListRelationFilter
  }, "id">

  export type EnhancementColumnOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enhancementId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    order?: SortOrder
    _count?: EnhancementColumnCountOrderByAggregateInput
    _avg?: EnhancementColumnAvgOrderByAggregateInput
    _max?: EnhancementColumnMaxOrderByAggregateInput
    _min?: EnhancementColumnMinOrderByAggregateInput
    _sum?: EnhancementColumnSumOrderByAggregateInput
  }

  export type EnhancementColumnScalarWhereWithAggregatesInput = {
    AND?: EnhancementColumnScalarWhereWithAggregatesInput | EnhancementColumnScalarWhereWithAggregatesInput[]
    OR?: EnhancementColumnScalarWhereWithAggregatesInput[]
    NOT?: EnhancementColumnScalarWhereWithAggregatesInput | EnhancementColumnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnhancementColumn"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EnhancementColumn"> | Date | string
    enhancementId?: StringWithAggregatesFilter<"EnhancementColumn"> | string
    name?: StringWithAggregatesFilter<"EnhancementColumn"> | string
    type?: StringWithAggregatesFilter<"EnhancementColumn"> | string
    description?: StringWithAggregatesFilter<"EnhancementColumn"> | string
    weight?: FloatWithAggregatesFilter<"EnhancementColumn"> | number
    order?: IntWithAggregatesFilter<"EnhancementColumn"> | number
  }

  export type EnhancementResultWhereInput = {
    AND?: EnhancementResultWhereInput | EnhancementResultWhereInput[]
    OR?: EnhancementResultWhereInput[]
    NOT?: EnhancementResultWhereInput | EnhancementResultWhereInput[]
    id?: StringFilter<"EnhancementResult"> | string
    createdAt?: DateTimeFilter<"EnhancementResult"> | Date | string
    updatedAt?: DateTimeFilter<"EnhancementResult"> | Date | string
    enhancementId?: StringFilter<"EnhancementResult"> | string
    listingId?: StringFilter<"EnhancementResult"> | string
    values?: JsonFilter<"EnhancementResult">
    compositeScore?: FloatFilter<"EnhancementResult"> | number
    status?: StringFilter<"EnhancementResult"> | string
    error?: StringNullableFilter<"EnhancementResult"> | string | null
    enhancement?: XOR<EnhancementScalarRelationFilter, EnhancementWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    individualValues?: EnhancementValueListRelationFilter
  }

  export type EnhancementResultOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    values?: SortOrder
    compositeScore?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    enhancement?: EnhancementOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
    individualValues?: EnhancementValueOrderByRelationAggregateInput
  }

  export type EnhancementResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    enhancementId_listingId?: EnhancementResultEnhancementIdListingIdCompoundUniqueInput
    AND?: EnhancementResultWhereInput | EnhancementResultWhereInput[]
    OR?: EnhancementResultWhereInput[]
    NOT?: EnhancementResultWhereInput | EnhancementResultWhereInput[]
    createdAt?: DateTimeFilter<"EnhancementResult"> | Date | string
    updatedAt?: DateTimeFilter<"EnhancementResult"> | Date | string
    enhancementId?: StringFilter<"EnhancementResult"> | string
    listingId?: StringFilter<"EnhancementResult"> | string
    values?: JsonFilter<"EnhancementResult">
    compositeScore?: FloatFilter<"EnhancementResult"> | number
    status?: StringFilter<"EnhancementResult"> | string
    error?: StringNullableFilter<"EnhancementResult"> | string | null
    enhancement?: XOR<EnhancementScalarRelationFilter, EnhancementWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
    individualValues?: EnhancementValueListRelationFilter
  }, "id" | "enhancementId_listingId">

  export type EnhancementResultOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    values?: SortOrder
    compositeScore?: SortOrder
    status?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: EnhancementResultCountOrderByAggregateInput
    _avg?: EnhancementResultAvgOrderByAggregateInput
    _max?: EnhancementResultMaxOrderByAggregateInput
    _min?: EnhancementResultMinOrderByAggregateInput
    _sum?: EnhancementResultSumOrderByAggregateInput
  }

  export type EnhancementResultScalarWhereWithAggregatesInput = {
    AND?: EnhancementResultScalarWhereWithAggregatesInput | EnhancementResultScalarWhereWithAggregatesInput[]
    OR?: EnhancementResultScalarWhereWithAggregatesInput[]
    NOT?: EnhancementResultScalarWhereWithAggregatesInput | EnhancementResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnhancementResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EnhancementResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnhancementResult"> | Date | string
    enhancementId?: StringWithAggregatesFilter<"EnhancementResult"> | string
    listingId?: StringWithAggregatesFilter<"EnhancementResult"> | string
    values?: JsonWithAggregatesFilter<"EnhancementResult">
    compositeScore?: FloatWithAggregatesFilter<"EnhancementResult"> | number
    status?: StringWithAggregatesFilter<"EnhancementResult"> | string
    error?: StringNullableWithAggregatesFilter<"EnhancementResult"> | string | null
  }

  export type EnhancementValueWhereInput = {
    AND?: EnhancementValueWhereInput | EnhancementValueWhereInput[]
    OR?: EnhancementValueWhereInput[]
    NOT?: EnhancementValueWhereInput | EnhancementValueWhereInput[]
    id?: StringFilter<"EnhancementValue"> | string
    createdAt?: DateTimeFilter<"EnhancementValue"> | Date | string
    resultId?: StringFilter<"EnhancementValue"> | string
    columnId?: StringFilter<"EnhancementValue"> | string
    enhancementId?: StringFilter<"EnhancementValue"> | string
    listingId?: StringFilter<"EnhancementValue"> | string
    normalizedValue?: FloatFilter<"EnhancementValue"> | number
    result?: XOR<EnhancementResultScalarRelationFilter, EnhancementResultWhereInput>
    column?: XOR<EnhancementColumnScalarRelationFilter, EnhancementColumnWhereInput>
  }

  export type EnhancementValueOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    resultId?: SortOrder
    columnId?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    normalizedValue?: SortOrder
    result?: EnhancementResultOrderByWithRelationInput
    column?: EnhancementColumnOrderByWithRelationInput
  }

  export type EnhancementValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    resultId_columnId?: EnhancementValueResultIdColumnIdCompoundUniqueInput
    AND?: EnhancementValueWhereInput | EnhancementValueWhereInput[]
    OR?: EnhancementValueWhereInput[]
    NOT?: EnhancementValueWhereInput | EnhancementValueWhereInput[]
    createdAt?: DateTimeFilter<"EnhancementValue"> | Date | string
    resultId?: StringFilter<"EnhancementValue"> | string
    columnId?: StringFilter<"EnhancementValue"> | string
    enhancementId?: StringFilter<"EnhancementValue"> | string
    listingId?: StringFilter<"EnhancementValue"> | string
    normalizedValue?: FloatFilter<"EnhancementValue"> | number
    result?: XOR<EnhancementResultScalarRelationFilter, EnhancementResultWhereInput>
    column?: XOR<EnhancementColumnScalarRelationFilter, EnhancementColumnWhereInput>
  }, "id" | "resultId_columnId">

  export type EnhancementValueOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    resultId?: SortOrder
    columnId?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    normalizedValue?: SortOrder
    _count?: EnhancementValueCountOrderByAggregateInput
    _avg?: EnhancementValueAvgOrderByAggregateInput
    _max?: EnhancementValueMaxOrderByAggregateInput
    _min?: EnhancementValueMinOrderByAggregateInput
    _sum?: EnhancementValueSumOrderByAggregateInput
  }

  export type EnhancementValueScalarWhereWithAggregatesInput = {
    AND?: EnhancementValueScalarWhereWithAggregatesInput | EnhancementValueScalarWhereWithAggregatesInput[]
    OR?: EnhancementValueScalarWhereWithAggregatesInput[]
    NOT?: EnhancementValueScalarWhereWithAggregatesInput | EnhancementValueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnhancementValue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EnhancementValue"> | Date | string
    resultId?: StringWithAggregatesFilter<"EnhancementValue"> | string
    columnId?: StringWithAggregatesFilter<"EnhancementValue"> | string
    enhancementId?: StringWithAggregatesFilter<"EnhancementValue"> | string
    listingId?: StringWithAggregatesFilter<"EnhancementValue"> | string
    normalizedValue?: FloatWithAggregatesFilter<"EnhancementValue"> | number
  }

  export type SavedQueryWhereInput = {
    AND?: SavedQueryWhereInput | SavedQueryWhereInput[]
    OR?: SavedQueryWhereInput[]
    NOT?: SavedQueryWhereInput | SavedQueryWhereInput[]
    id?: StringFilter<"SavedQuery"> | string
    createdAt?: DateTimeFilter<"SavedQuery"> | Date | string
    updatedAt?: DateTimeFilter<"SavedQuery"> | Date | string
    userId?: StringFilter<"SavedQuery"> | string
    name?: StringFilter<"SavedQuery"> | string
    description?: StringNullableFilter<"SavedQuery"> | string | null
    searchType?: StringFilter<"SavedQuery"> | string
    searchQuery?: JsonFilter<"SavedQuery">
    enhancementQuery?: StringFilter<"SavedQuery"> | string
    columnWeights?: JsonFilter<"SavedQuery">
    lastRunAt?: DateTimeNullableFilter<"SavedQuery"> | Date | string | null
    lastScrapeId?: StringNullableFilter<"SavedQuery"> | string | null
    responses?: UserListingResponseListRelationFilter
  }

  export type SavedQueryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    searchType?: SortOrder
    searchQuery?: SortOrder
    enhancementQuery?: SortOrder
    columnWeights?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastScrapeId?: SortOrderInput | SortOrder
    responses?: UserListingResponseOrderByRelationAggregateInput
  }

  export type SavedQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SavedQueryWhereInput | SavedQueryWhereInput[]
    OR?: SavedQueryWhereInput[]
    NOT?: SavedQueryWhereInput | SavedQueryWhereInput[]
    createdAt?: DateTimeFilter<"SavedQuery"> | Date | string
    updatedAt?: DateTimeFilter<"SavedQuery"> | Date | string
    userId?: StringFilter<"SavedQuery"> | string
    name?: StringFilter<"SavedQuery"> | string
    description?: StringNullableFilter<"SavedQuery"> | string | null
    searchType?: StringFilter<"SavedQuery"> | string
    searchQuery?: JsonFilter<"SavedQuery">
    enhancementQuery?: StringFilter<"SavedQuery"> | string
    columnWeights?: JsonFilter<"SavedQuery">
    lastRunAt?: DateTimeNullableFilter<"SavedQuery"> | Date | string | null
    lastScrapeId?: StringNullableFilter<"SavedQuery"> | string | null
    responses?: UserListingResponseListRelationFilter
  }, "id">

  export type SavedQueryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    searchType?: SortOrder
    searchQuery?: SortOrder
    enhancementQuery?: SortOrder
    columnWeights?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    lastScrapeId?: SortOrderInput | SortOrder
    _count?: SavedQueryCountOrderByAggregateInput
    _max?: SavedQueryMaxOrderByAggregateInput
    _min?: SavedQueryMinOrderByAggregateInput
  }

  export type SavedQueryScalarWhereWithAggregatesInput = {
    AND?: SavedQueryScalarWhereWithAggregatesInput | SavedQueryScalarWhereWithAggregatesInput[]
    OR?: SavedQueryScalarWhereWithAggregatesInput[]
    NOT?: SavedQueryScalarWhereWithAggregatesInput | SavedQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedQuery"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SavedQuery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SavedQuery"> | Date | string
    userId?: StringWithAggregatesFilter<"SavedQuery"> | string
    name?: StringWithAggregatesFilter<"SavedQuery"> | string
    description?: StringNullableWithAggregatesFilter<"SavedQuery"> | string | null
    searchType?: StringWithAggregatesFilter<"SavedQuery"> | string
    searchQuery?: JsonWithAggregatesFilter<"SavedQuery">
    enhancementQuery?: StringWithAggregatesFilter<"SavedQuery"> | string
    columnWeights?: JsonWithAggregatesFilter<"SavedQuery">
    lastRunAt?: DateTimeNullableWithAggregatesFilter<"SavedQuery"> | Date | string | null
    lastScrapeId?: StringNullableWithAggregatesFilter<"SavedQuery"> | string | null
  }

  export type UserListingResponseWhereInput = {
    AND?: UserListingResponseWhereInput | UserListingResponseWhereInput[]
    OR?: UserListingResponseWhereInput[]
    NOT?: UserListingResponseWhereInput | UserListingResponseWhereInput[]
    id?: StringFilter<"UserListingResponse"> | string
    createdAt?: DateTimeFilter<"UserListingResponse"> | Date | string
    updatedAt?: DateTimeFilter<"UserListingResponse"> | Date | string
    userId?: StringFilter<"UserListingResponse"> | string
    savedQueryId?: StringFilter<"UserListingResponse"> | string
    listingId?: StringFilter<"UserListingResponse"> | string
    response?: StringFilter<"UserListingResponse"> | string
    notes?: StringNullableFilter<"UserListingResponse"> | string | null
    savedQuery?: XOR<SavedQueryScalarRelationFilter, SavedQueryWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }

  export type UserListingResponseOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    savedQueryId?: SortOrder
    listingId?: SortOrder
    response?: SortOrder
    notes?: SortOrderInput | SortOrder
    savedQuery?: SavedQueryOrderByWithRelationInput
    listing?: ListingOrderByWithRelationInput
  }

  export type UserListingResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    savedQueryId_listingId?: UserListingResponseSavedQueryIdListingIdCompoundUniqueInput
    AND?: UserListingResponseWhereInput | UserListingResponseWhereInput[]
    OR?: UserListingResponseWhereInput[]
    NOT?: UserListingResponseWhereInput | UserListingResponseWhereInput[]
    createdAt?: DateTimeFilter<"UserListingResponse"> | Date | string
    updatedAt?: DateTimeFilter<"UserListingResponse"> | Date | string
    userId?: StringFilter<"UserListingResponse"> | string
    savedQueryId?: StringFilter<"UserListingResponse"> | string
    listingId?: StringFilter<"UserListingResponse"> | string
    response?: StringFilter<"UserListingResponse"> | string
    notes?: StringNullableFilter<"UserListingResponse"> | string | null
    savedQuery?: XOR<SavedQueryScalarRelationFilter, SavedQueryWhereInput>
    listing?: XOR<ListingScalarRelationFilter, ListingWhereInput>
  }, "id" | "savedQueryId_listingId">

  export type UserListingResponseOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    savedQueryId?: SortOrder
    listingId?: SortOrder
    response?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: UserListingResponseCountOrderByAggregateInput
    _max?: UserListingResponseMaxOrderByAggregateInput
    _min?: UserListingResponseMinOrderByAggregateInput
  }

  export type UserListingResponseScalarWhereWithAggregatesInput = {
    AND?: UserListingResponseScalarWhereWithAggregatesInput | UserListingResponseScalarWhereWithAggregatesInput[]
    OR?: UserListingResponseScalarWhereWithAggregatesInput[]
    NOT?: UserListingResponseScalarWhereWithAggregatesInput | UserListingResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserListingResponse"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserListingResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserListingResponse"> | Date | string
    userId?: StringWithAggregatesFilter<"UserListingResponse"> | string
    savedQueryId?: StringWithAggregatesFilter<"UserListingResponse"> | string
    listingId?: StringWithAggregatesFilter<"UserListingResponse"> | string
    response?: StringWithAggregatesFilter<"UserListingResponse"> | string
    notes?: StringNullableWithAggregatesFilter<"UserListingResponse"> | string | null
  }

  export type ScrapeCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
    listings?: ScrapeListingCreateNestedManyWithoutScrapeInput
    enhancements?: EnhancementCreateNestedManyWithoutScrapeInput
  }

  export type ScrapeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
    listings?: ScrapeListingUncheckedCreateNestedManyWithoutScrapeInput
    enhancements?: EnhancementUncheckedCreateNestedManyWithoutScrapeInput
  }

  export type ScrapeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
    listings?: ScrapeListingUpdateManyWithoutScrapeNestedInput
    enhancements?: EnhancementUpdateManyWithoutScrapeNestedInput
  }

  export type ScrapeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
    listings?: ScrapeListingUncheckedUpdateManyWithoutScrapeNestedInput
    enhancements?: EnhancementUncheckedUpdateManyWithoutScrapeNestedInput
  }

  export type ScrapeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
  }

  export type ScrapeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
  }

  export type ScrapeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingCreateNestedManyWithoutListingInput
    enhancementResults?: EnhancementResultCreateNestedManyWithoutListingInput
    userResponses?: UserListingResponseCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUncheckedCreateNestedManyWithoutListingInput
    enhancementResults?: EnhancementResultUncheckedCreateNestedManyWithoutListingInput
    userResponses?: UserListingResponseUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUpdateManyWithoutListingNestedInput
    enhancementResults?: EnhancementResultUpdateManyWithoutListingNestedInput
    userResponses?: UserListingResponseUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUncheckedUpdateManyWithoutListingNestedInput
    enhancementResults?: EnhancementResultUncheckedUpdateManyWithoutListingNestedInput
    userResponses?: UserListingResponseUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ListingCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
  }

  export type ListingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
  }

  export type ListingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
  }

  export type ScrapeListingCreateInput = {
    foundAt?: Date | string
    scrape: ScrapeCreateNestedOneWithoutListingsInput
    listing: ListingCreateNestedOneWithoutScrapesInput
  }

  export type ScrapeListingUncheckedCreateInput = {
    scrapeId: string
    listingId: string
    foundAt?: Date | string
  }

  export type ScrapeListingUpdateInput = {
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrape?: ScrapeUpdateOneRequiredWithoutListingsNestedInput
    listing?: ListingUpdateOneRequiredWithoutScrapesNestedInput
  }

  export type ScrapeListingUncheckedUpdateInput = {
    scrapeId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeListingCreateManyInput = {
    scrapeId: string
    listingId: string
    foundAt?: Date | string
  }

  export type ScrapeListingUpdateManyMutationInput = {
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeListingUncheckedUpdateManyInput = {
    scrapeId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnhancementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    scrape: ScrapeCreateNestedOneWithoutEnhancementsInput
    columns?: EnhancementColumnCreateNestedManyWithoutEnhancementInput
    results?: EnhancementResultCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scrapeId: string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    columns?: EnhancementColumnUncheckedCreateNestedManyWithoutEnhancementInput
    results?: EnhancementResultUncheckedCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    scrape?: ScrapeUpdateOneRequiredWithoutEnhancementsNestedInput
    columns?: EnhancementColumnUpdateManyWithoutEnhancementNestedInput
    results?: EnhancementResultUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrapeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    columns?: EnhancementColumnUncheckedUpdateManyWithoutEnhancementNestedInput
    results?: EnhancementResultUncheckedUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scrapeId: string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
  }

  export type EnhancementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
  }

  export type EnhancementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrapeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
  }

  export type EnhancementColumnCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
    enhancement: EnhancementCreateNestedOneWithoutColumnsInput
    values?: EnhancementValueCreateNestedManyWithoutColumnInput
  }

  export type EnhancementColumnUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    enhancementId: string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
    values?: EnhancementValueUncheckedCreateNestedManyWithoutColumnInput
  }

  export type EnhancementColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    enhancement?: EnhancementUpdateOneRequiredWithoutColumnsNestedInput
    values?: EnhancementValueUpdateManyWithoutColumnNestedInput
  }

  export type EnhancementColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    values?: EnhancementValueUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type EnhancementColumnCreateManyInput = {
    id?: string
    createdAt?: Date | string
    enhancementId: string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
  }

  export type EnhancementColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type EnhancementColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type EnhancementResultCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    enhancement: EnhancementCreateNestedOneWithoutResultsInput
    listing: ListingCreateNestedOneWithoutEnhancementResultsInput
    individualValues?: EnhancementValueCreateNestedManyWithoutResultInput
  }

  export type EnhancementResultUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enhancementId: string
    listingId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    individualValues?: EnhancementValueUncheckedCreateNestedManyWithoutResultInput
  }

  export type EnhancementResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    enhancement?: EnhancementUpdateOneRequiredWithoutResultsNestedInput
    listing?: ListingUpdateOneRequiredWithoutEnhancementResultsNestedInput
    individualValues?: EnhancementValueUpdateManyWithoutResultNestedInput
  }

  export type EnhancementResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    individualValues?: EnhancementValueUncheckedUpdateManyWithoutResultNestedInput
  }

  export type EnhancementResultCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enhancementId: string
    listingId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
  }

  export type EnhancementResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnhancementResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnhancementValueCreateInput = {
    id?: string
    createdAt?: Date | string
    enhancementId: string
    listingId: string
    normalizedValue: number
    result: EnhancementResultCreateNestedOneWithoutIndividualValuesInput
    column: EnhancementColumnCreateNestedOneWithoutValuesInput
  }

  export type EnhancementValueUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    resultId: string
    columnId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
  }

  export type EnhancementValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
    result?: EnhancementResultUpdateOneRequiredWithoutIndividualValuesNestedInput
    column?: EnhancementColumnUpdateOneRequiredWithoutValuesNestedInput
  }

  export type EnhancementValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultId?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type EnhancementValueCreateManyInput = {
    id?: string
    createdAt?: Date | string
    resultId: string
    columnId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
  }

  export type EnhancementValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type EnhancementValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultId?: StringFieldUpdateOperationsInput | string
    columnId?: StringFieldUpdateOperationsInput | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type SavedQueryCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name: string
    description?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    enhancementQuery: string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: Date | string | null
    lastScrapeId?: string | null
    responses?: UserListingResponseCreateNestedManyWithoutSavedQueryInput
  }

  export type SavedQueryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name: string
    description?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    enhancementQuery: string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: Date | string | null
    lastScrapeId?: string | null
    responses?: UserListingResponseUncheckedCreateNestedManyWithoutSavedQueryInput
  }

  export type SavedQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    enhancementQuery?: StringFieldUpdateOperationsInput | string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScrapeId?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: UserListingResponseUpdateManyWithoutSavedQueryNestedInput
  }

  export type SavedQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    enhancementQuery?: StringFieldUpdateOperationsInput | string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScrapeId?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: UserListingResponseUncheckedUpdateManyWithoutSavedQueryNestedInput
  }

  export type SavedQueryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name: string
    description?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    enhancementQuery: string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: Date | string | null
    lastScrapeId?: string | null
  }

  export type SavedQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    enhancementQuery?: StringFieldUpdateOperationsInput | string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScrapeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    enhancementQuery?: StringFieldUpdateOperationsInput | string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScrapeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserListingResponseCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    response: string
    notes?: string | null
    savedQuery: SavedQueryCreateNestedOneWithoutResponsesInput
    listing: ListingCreateNestedOneWithoutUserResponsesInput
  }

  export type UserListingResponseUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    savedQueryId: string
    listingId: string
    response: string
    notes?: string | null
  }

  export type UserListingResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    savedQuery?: SavedQueryUpdateOneRequiredWithoutResponsesNestedInput
    listing?: ListingUpdateOneRequiredWithoutUserResponsesNestedInput
  }

  export type UserListingResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    savedQueryId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserListingResponseCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    savedQueryId: string
    listingId: string
    response: string
    notes?: string | null
  }

  export type UserListingResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserListingResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    savedQueryId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ScrapeListingListRelationFilter = {
    every?: ScrapeListingWhereInput
    some?: ScrapeListingWhereInput
    none?: ScrapeListingWhereInput
  }

  export type EnhancementListRelationFilter = {
    every?: EnhancementWhereInput
    some?: EnhancementWhereInput
    none?: EnhancementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScrapeListingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnhancementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScrapeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    searchType?: SortOrder
    searchQuery?: SortOrder
    apifyRunId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
    listingsCount?: SortOrder
  }

  export type ScrapeAvgOrderByAggregateInput = {
    durationMs?: SortOrder
    listingsCount?: SortOrder
  }

  export type ScrapeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    searchType?: SortOrder
    apifyRunId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
    listingsCount?: SortOrder
  }

  export type ScrapeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    searchType?: SortOrder
    apifyRunId?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    completedAt?: SortOrder
    durationMs?: SortOrder
    listingsCount?: SortOrder
  }

  export type ScrapeSumOrderByAggregateInput = {
    durationMs?: SortOrder
    listingsCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnhancementResultListRelationFilter = {
    every?: EnhancementResultWhereInput
    some?: EnhancementResultWhereInput
    none?: EnhancementResultWhereInput
  }

  export type UserListingResponseListRelationFilter = {
    every?: UserListingResponseWhereInput
    some?: UserListingResponseWhereInput
    none?: UserListingResponseWhereInput
  }

  export type EnhancementResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserListingResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zpid?: SortOrder
    detailUrl?: SortOrder
    imgSrc?: SortOrder
    photos?: SortOrder
    hasImage?: SortOrder
    has3DModel?: SortOrder
    hasVideo?: SortOrder
    statusType?: SortOrder
    statusText?: SortOrder
    price?: SortOrder
    priceFormatted?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    addressStreet?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZipcode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    area?: SortOrder
    homeType?: SortOrder
    availabilityDate?: SortOrder
    scrapedAt?: SortOrder
    brokerName?: SortOrder
    zestimate?: SortOrder
    rentZestimate?: SortOrder
    isFeaturedListing?: SortOrder
    rawData?: SortOrder
  }

  export type ListingAvgOrderByAggregateInput = {
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    area?: SortOrder
    zestimate?: SortOrder
    rentZestimate?: SortOrder
  }

  export type ListingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zpid?: SortOrder
    detailUrl?: SortOrder
    imgSrc?: SortOrder
    hasImage?: SortOrder
    has3DModel?: SortOrder
    hasVideo?: SortOrder
    statusType?: SortOrder
    statusText?: SortOrder
    price?: SortOrder
    priceFormatted?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    addressStreet?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZipcode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    area?: SortOrder
    homeType?: SortOrder
    availabilityDate?: SortOrder
    scrapedAt?: SortOrder
    brokerName?: SortOrder
    zestimate?: SortOrder
    rentZestimate?: SortOrder
    isFeaturedListing?: SortOrder
  }

  export type ListingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    zpid?: SortOrder
    detailUrl?: SortOrder
    imgSrc?: SortOrder
    hasImage?: SortOrder
    has3DModel?: SortOrder
    hasVideo?: SortOrder
    statusType?: SortOrder
    statusText?: SortOrder
    price?: SortOrder
    priceFormatted?: SortOrder
    currency?: SortOrder
    address?: SortOrder
    addressStreet?: SortOrder
    addressCity?: SortOrder
    addressState?: SortOrder
    addressZipcode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    area?: SortOrder
    homeType?: SortOrder
    availabilityDate?: SortOrder
    scrapedAt?: SortOrder
    brokerName?: SortOrder
    zestimate?: SortOrder
    rentZestimate?: SortOrder
    isFeaturedListing?: SortOrder
  }

  export type ListingSumOrderByAggregateInput = {
    price?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    beds?: SortOrder
    baths?: SortOrder
    area?: SortOrder
    zestimate?: SortOrder
    rentZestimate?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ScrapeScalarRelationFilter = {
    is?: ScrapeWhereInput
    isNot?: ScrapeWhereInput
  }

  export type ListingScalarRelationFilter = {
    is?: ListingWhereInput
    isNot?: ListingWhereInput
  }

  export type ScrapeListingScrapeIdListingIdCompoundUniqueInput = {
    scrapeId: string
    listingId: string
  }

  export type ScrapeListingCountOrderByAggregateInput = {
    scrapeId?: SortOrder
    listingId?: SortOrder
    foundAt?: SortOrder
  }

  export type ScrapeListingMaxOrderByAggregateInput = {
    scrapeId?: SortOrder
    listingId?: SortOrder
    foundAt?: SortOrder
  }

  export type ScrapeListingMinOrderByAggregateInput = {
    scrapeId?: SortOrder
    listingId?: SortOrder
    foundAt?: SortOrder
  }

  export type EnhancementColumnListRelationFilter = {
    every?: EnhancementColumnWhereInput
    some?: EnhancementColumnWhereInput
    none?: EnhancementColumnWhereInput
  }

  export type EnhancementColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnhancementCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scrapeId?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    completedAt?: SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type EnhancementAvgOrderByAggregateInput = {
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type EnhancementMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scrapeId?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    completedAt?: SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type EnhancementMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    scrapeId?: SortOrder
    userId?: SortOrder
    query?: SortOrder
    taskId?: SortOrder
    status?: SortOrder
    error?: SortOrder
    completedAt?: SortOrder
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type EnhancementSumOrderByAggregateInput = {
    processedCount?: SortOrder
    totalCount?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnhancementScalarRelationFilter = {
    is?: EnhancementWhereInput
    isNot?: EnhancementWhereInput
  }

  export type EnhancementValueListRelationFilter = {
    every?: EnhancementValueWhereInput
    some?: EnhancementValueWhereInput
    none?: EnhancementValueWhereInput
  }

  export type EnhancementValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnhancementColumnCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enhancementId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    order?: SortOrder
  }

  export type EnhancementColumnAvgOrderByAggregateInput = {
    weight?: SortOrder
    order?: SortOrder
  }

  export type EnhancementColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enhancementId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    order?: SortOrder
  }

  export type EnhancementColumnMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    enhancementId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    weight?: SortOrder
    order?: SortOrder
  }

  export type EnhancementColumnSumOrderByAggregateInput = {
    weight?: SortOrder
    order?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnhancementResultEnhancementIdListingIdCompoundUniqueInput = {
    enhancementId: string
    listingId: string
  }

  export type EnhancementResultCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    values?: SortOrder
    compositeScore?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type EnhancementResultAvgOrderByAggregateInput = {
    compositeScore?: SortOrder
  }

  export type EnhancementResultMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    compositeScore?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type EnhancementResultMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    compositeScore?: SortOrder
    status?: SortOrder
    error?: SortOrder
  }

  export type EnhancementResultSumOrderByAggregateInput = {
    compositeScore?: SortOrder
  }

  export type EnhancementResultScalarRelationFilter = {
    is?: EnhancementResultWhereInput
    isNot?: EnhancementResultWhereInput
  }

  export type EnhancementColumnScalarRelationFilter = {
    is?: EnhancementColumnWhereInput
    isNot?: EnhancementColumnWhereInput
  }

  export type EnhancementValueResultIdColumnIdCompoundUniqueInput = {
    resultId: string
    columnId: string
  }

  export type EnhancementValueCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    resultId?: SortOrder
    columnId?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    normalizedValue?: SortOrder
  }

  export type EnhancementValueAvgOrderByAggregateInput = {
    normalizedValue?: SortOrder
  }

  export type EnhancementValueMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    resultId?: SortOrder
    columnId?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    normalizedValue?: SortOrder
  }

  export type EnhancementValueMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    resultId?: SortOrder
    columnId?: SortOrder
    enhancementId?: SortOrder
    listingId?: SortOrder
    normalizedValue?: SortOrder
  }

  export type EnhancementValueSumOrderByAggregateInput = {
    normalizedValue?: SortOrder
  }

  export type SavedQueryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    searchType?: SortOrder
    searchQuery?: SortOrder
    enhancementQuery?: SortOrder
    columnWeights?: SortOrder
    lastRunAt?: SortOrder
    lastScrapeId?: SortOrder
  }

  export type SavedQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    searchType?: SortOrder
    enhancementQuery?: SortOrder
    lastRunAt?: SortOrder
    lastScrapeId?: SortOrder
  }

  export type SavedQueryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    searchType?: SortOrder
    enhancementQuery?: SortOrder
    lastRunAt?: SortOrder
    lastScrapeId?: SortOrder
  }

  export type SavedQueryScalarRelationFilter = {
    is?: SavedQueryWhereInput
    isNot?: SavedQueryWhereInput
  }

  export type UserListingResponseSavedQueryIdListingIdCompoundUniqueInput = {
    savedQueryId: string
    listingId: string
  }

  export type UserListingResponseCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    savedQueryId?: SortOrder
    listingId?: SortOrder
    response?: SortOrder
    notes?: SortOrder
  }

  export type UserListingResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    savedQueryId?: SortOrder
    listingId?: SortOrder
    response?: SortOrder
    notes?: SortOrder
  }

  export type UserListingResponseMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    savedQueryId?: SortOrder
    listingId?: SortOrder
    response?: SortOrder
    notes?: SortOrder
  }

  export type ScrapeListingCreateNestedManyWithoutScrapeInput = {
    create?: XOR<ScrapeListingCreateWithoutScrapeInput, ScrapeListingUncheckedCreateWithoutScrapeInput> | ScrapeListingCreateWithoutScrapeInput[] | ScrapeListingUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutScrapeInput | ScrapeListingCreateOrConnectWithoutScrapeInput[]
    createMany?: ScrapeListingCreateManyScrapeInputEnvelope
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
  }

  export type EnhancementCreateNestedManyWithoutScrapeInput = {
    create?: XOR<EnhancementCreateWithoutScrapeInput, EnhancementUncheckedCreateWithoutScrapeInput> | EnhancementCreateWithoutScrapeInput[] | EnhancementUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: EnhancementCreateOrConnectWithoutScrapeInput | EnhancementCreateOrConnectWithoutScrapeInput[]
    createMany?: EnhancementCreateManyScrapeInputEnvelope
    connect?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
  }

  export type ScrapeListingUncheckedCreateNestedManyWithoutScrapeInput = {
    create?: XOR<ScrapeListingCreateWithoutScrapeInput, ScrapeListingUncheckedCreateWithoutScrapeInput> | ScrapeListingCreateWithoutScrapeInput[] | ScrapeListingUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutScrapeInput | ScrapeListingCreateOrConnectWithoutScrapeInput[]
    createMany?: ScrapeListingCreateManyScrapeInputEnvelope
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
  }

  export type EnhancementUncheckedCreateNestedManyWithoutScrapeInput = {
    create?: XOR<EnhancementCreateWithoutScrapeInput, EnhancementUncheckedCreateWithoutScrapeInput> | EnhancementCreateWithoutScrapeInput[] | EnhancementUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: EnhancementCreateOrConnectWithoutScrapeInput | EnhancementCreateOrConnectWithoutScrapeInput[]
    createMany?: EnhancementCreateManyScrapeInputEnvelope
    connect?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScrapeListingUpdateManyWithoutScrapeNestedInput = {
    create?: XOR<ScrapeListingCreateWithoutScrapeInput, ScrapeListingUncheckedCreateWithoutScrapeInput> | ScrapeListingCreateWithoutScrapeInput[] | ScrapeListingUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutScrapeInput | ScrapeListingCreateOrConnectWithoutScrapeInput[]
    upsert?: ScrapeListingUpsertWithWhereUniqueWithoutScrapeInput | ScrapeListingUpsertWithWhereUniqueWithoutScrapeInput[]
    createMany?: ScrapeListingCreateManyScrapeInputEnvelope
    set?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    disconnect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    delete?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    update?: ScrapeListingUpdateWithWhereUniqueWithoutScrapeInput | ScrapeListingUpdateWithWhereUniqueWithoutScrapeInput[]
    updateMany?: ScrapeListingUpdateManyWithWhereWithoutScrapeInput | ScrapeListingUpdateManyWithWhereWithoutScrapeInput[]
    deleteMany?: ScrapeListingScalarWhereInput | ScrapeListingScalarWhereInput[]
  }

  export type EnhancementUpdateManyWithoutScrapeNestedInput = {
    create?: XOR<EnhancementCreateWithoutScrapeInput, EnhancementUncheckedCreateWithoutScrapeInput> | EnhancementCreateWithoutScrapeInput[] | EnhancementUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: EnhancementCreateOrConnectWithoutScrapeInput | EnhancementCreateOrConnectWithoutScrapeInput[]
    upsert?: EnhancementUpsertWithWhereUniqueWithoutScrapeInput | EnhancementUpsertWithWhereUniqueWithoutScrapeInput[]
    createMany?: EnhancementCreateManyScrapeInputEnvelope
    set?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    disconnect?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    delete?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    connect?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    update?: EnhancementUpdateWithWhereUniqueWithoutScrapeInput | EnhancementUpdateWithWhereUniqueWithoutScrapeInput[]
    updateMany?: EnhancementUpdateManyWithWhereWithoutScrapeInput | EnhancementUpdateManyWithWhereWithoutScrapeInput[]
    deleteMany?: EnhancementScalarWhereInput | EnhancementScalarWhereInput[]
  }

  export type ScrapeListingUncheckedUpdateManyWithoutScrapeNestedInput = {
    create?: XOR<ScrapeListingCreateWithoutScrapeInput, ScrapeListingUncheckedCreateWithoutScrapeInput> | ScrapeListingCreateWithoutScrapeInput[] | ScrapeListingUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutScrapeInput | ScrapeListingCreateOrConnectWithoutScrapeInput[]
    upsert?: ScrapeListingUpsertWithWhereUniqueWithoutScrapeInput | ScrapeListingUpsertWithWhereUniqueWithoutScrapeInput[]
    createMany?: ScrapeListingCreateManyScrapeInputEnvelope
    set?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    disconnect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    delete?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    update?: ScrapeListingUpdateWithWhereUniqueWithoutScrapeInput | ScrapeListingUpdateWithWhereUniqueWithoutScrapeInput[]
    updateMany?: ScrapeListingUpdateManyWithWhereWithoutScrapeInput | ScrapeListingUpdateManyWithWhereWithoutScrapeInput[]
    deleteMany?: ScrapeListingScalarWhereInput | ScrapeListingScalarWhereInput[]
  }

  export type EnhancementUncheckedUpdateManyWithoutScrapeNestedInput = {
    create?: XOR<EnhancementCreateWithoutScrapeInput, EnhancementUncheckedCreateWithoutScrapeInput> | EnhancementCreateWithoutScrapeInput[] | EnhancementUncheckedCreateWithoutScrapeInput[]
    connectOrCreate?: EnhancementCreateOrConnectWithoutScrapeInput | EnhancementCreateOrConnectWithoutScrapeInput[]
    upsert?: EnhancementUpsertWithWhereUniqueWithoutScrapeInput | EnhancementUpsertWithWhereUniqueWithoutScrapeInput[]
    createMany?: EnhancementCreateManyScrapeInputEnvelope
    set?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    disconnect?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    delete?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    connect?: EnhancementWhereUniqueInput | EnhancementWhereUniqueInput[]
    update?: EnhancementUpdateWithWhereUniqueWithoutScrapeInput | EnhancementUpdateWithWhereUniqueWithoutScrapeInput[]
    updateMany?: EnhancementUpdateManyWithWhereWithoutScrapeInput | EnhancementUpdateManyWithWhereWithoutScrapeInput[]
    deleteMany?: EnhancementScalarWhereInput | EnhancementScalarWhereInput[]
  }

  export type ListingCreatephotosInput = {
    set: string[]
  }

  export type ScrapeListingCreateNestedManyWithoutListingInput = {
    create?: XOR<ScrapeListingCreateWithoutListingInput, ScrapeListingUncheckedCreateWithoutListingInput> | ScrapeListingCreateWithoutListingInput[] | ScrapeListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutListingInput | ScrapeListingCreateOrConnectWithoutListingInput[]
    createMany?: ScrapeListingCreateManyListingInputEnvelope
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
  }

  export type EnhancementResultCreateNestedManyWithoutListingInput = {
    create?: XOR<EnhancementResultCreateWithoutListingInput, EnhancementResultUncheckedCreateWithoutListingInput> | EnhancementResultCreateWithoutListingInput[] | EnhancementResultUncheckedCreateWithoutListingInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutListingInput | EnhancementResultCreateOrConnectWithoutListingInput[]
    createMany?: EnhancementResultCreateManyListingInputEnvelope
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
  }

  export type UserListingResponseCreateNestedManyWithoutListingInput = {
    create?: XOR<UserListingResponseCreateWithoutListingInput, UserListingResponseUncheckedCreateWithoutListingInput> | UserListingResponseCreateWithoutListingInput[] | UserListingResponseUncheckedCreateWithoutListingInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutListingInput | UserListingResponseCreateOrConnectWithoutListingInput[]
    createMany?: UserListingResponseCreateManyListingInputEnvelope
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
  }

  export type ScrapeListingUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<ScrapeListingCreateWithoutListingInput, ScrapeListingUncheckedCreateWithoutListingInput> | ScrapeListingCreateWithoutListingInput[] | ScrapeListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutListingInput | ScrapeListingCreateOrConnectWithoutListingInput[]
    createMany?: ScrapeListingCreateManyListingInputEnvelope
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
  }

  export type EnhancementResultUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<EnhancementResultCreateWithoutListingInput, EnhancementResultUncheckedCreateWithoutListingInput> | EnhancementResultCreateWithoutListingInput[] | EnhancementResultUncheckedCreateWithoutListingInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutListingInput | EnhancementResultCreateOrConnectWithoutListingInput[]
    createMany?: EnhancementResultCreateManyListingInputEnvelope
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
  }

  export type UserListingResponseUncheckedCreateNestedManyWithoutListingInput = {
    create?: XOR<UserListingResponseCreateWithoutListingInput, UserListingResponseUncheckedCreateWithoutListingInput> | UserListingResponseCreateWithoutListingInput[] | UserListingResponseUncheckedCreateWithoutListingInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutListingInput | UserListingResponseCreateOrConnectWithoutListingInput[]
    createMany?: UserListingResponseCreateManyListingInputEnvelope
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
  }

  export type ListingUpdatephotosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ScrapeListingUpdateManyWithoutListingNestedInput = {
    create?: XOR<ScrapeListingCreateWithoutListingInput, ScrapeListingUncheckedCreateWithoutListingInput> | ScrapeListingCreateWithoutListingInput[] | ScrapeListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutListingInput | ScrapeListingCreateOrConnectWithoutListingInput[]
    upsert?: ScrapeListingUpsertWithWhereUniqueWithoutListingInput | ScrapeListingUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ScrapeListingCreateManyListingInputEnvelope
    set?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    disconnect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    delete?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    update?: ScrapeListingUpdateWithWhereUniqueWithoutListingInput | ScrapeListingUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ScrapeListingUpdateManyWithWhereWithoutListingInput | ScrapeListingUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ScrapeListingScalarWhereInput | ScrapeListingScalarWhereInput[]
  }

  export type EnhancementResultUpdateManyWithoutListingNestedInput = {
    create?: XOR<EnhancementResultCreateWithoutListingInput, EnhancementResultUncheckedCreateWithoutListingInput> | EnhancementResultCreateWithoutListingInput[] | EnhancementResultUncheckedCreateWithoutListingInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutListingInput | EnhancementResultCreateOrConnectWithoutListingInput[]
    upsert?: EnhancementResultUpsertWithWhereUniqueWithoutListingInput | EnhancementResultUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: EnhancementResultCreateManyListingInputEnvelope
    set?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    disconnect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    delete?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    update?: EnhancementResultUpdateWithWhereUniqueWithoutListingInput | EnhancementResultUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: EnhancementResultUpdateManyWithWhereWithoutListingInput | EnhancementResultUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: EnhancementResultScalarWhereInput | EnhancementResultScalarWhereInput[]
  }

  export type UserListingResponseUpdateManyWithoutListingNestedInput = {
    create?: XOR<UserListingResponseCreateWithoutListingInput, UserListingResponseUncheckedCreateWithoutListingInput> | UserListingResponseCreateWithoutListingInput[] | UserListingResponseUncheckedCreateWithoutListingInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutListingInput | UserListingResponseCreateOrConnectWithoutListingInput[]
    upsert?: UserListingResponseUpsertWithWhereUniqueWithoutListingInput | UserListingResponseUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: UserListingResponseCreateManyListingInputEnvelope
    set?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    disconnect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    delete?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    update?: UserListingResponseUpdateWithWhereUniqueWithoutListingInput | UserListingResponseUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: UserListingResponseUpdateManyWithWhereWithoutListingInput | UserListingResponseUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: UserListingResponseScalarWhereInput | UserListingResponseScalarWhereInput[]
  }

  export type ScrapeListingUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<ScrapeListingCreateWithoutListingInput, ScrapeListingUncheckedCreateWithoutListingInput> | ScrapeListingCreateWithoutListingInput[] | ScrapeListingUncheckedCreateWithoutListingInput[]
    connectOrCreate?: ScrapeListingCreateOrConnectWithoutListingInput | ScrapeListingCreateOrConnectWithoutListingInput[]
    upsert?: ScrapeListingUpsertWithWhereUniqueWithoutListingInput | ScrapeListingUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: ScrapeListingCreateManyListingInputEnvelope
    set?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    disconnect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    delete?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    connect?: ScrapeListingWhereUniqueInput | ScrapeListingWhereUniqueInput[]
    update?: ScrapeListingUpdateWithWhereUniqueWithoutListingInput | ScrapeListingUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: ScrapeListingUpdateManyWithWhereWithoutListingInput | ScrapeListingUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: ScrapeListingScalarWhereInput | ScrapeListingScalarWhereInput[]
  }

  export type EnhancementResultUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<EnhancementResultCreateWithoutListingInput, EnhancementResultUncheckedCreateWithoutListingInput> | EnhancementResultCreateWithoutListingInput[] | EnhancementResultUncheckedCreateWithoutListingInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutListingInput | EnhancementResultCreateOrConnectWithoutListingInput[]
    upsert?: EnhancementResultUpsertWithWhereUniqueWithoutListingInput | EnhancementResultUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: EnhancementResultCreateManyListingInputEnvelope
    set?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    disconnect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    delete?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    update?: EnhancementResultUpdateWithWhereUniqueWithoutListingInput | EnhancementResultUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: EnhancementResultUpdateManyWithWhereWithoutListingInput | EnhancementResultUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: EnhancementResultScalarWhereInput | EnhancementResultScalarWhereInput[]
  }

  export type UserListingResponseUncheckedUpdateManyWithoutListingNestedInput = {
    create?: XOR<UserListingResponseCreateWithoutListingInput, UserListingResponseUncheckedCreateWithoutListingInput> | UserListingResponseCreateWithoutListingInput[] | UserListingResponseUncheckedCreateWithoutListingInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutListingInput | UserListingResponseCreateOrConnectWithoutListingInput[]
    upsert?: UserListingResponseUpsertWithWhereUniqueWithoutListingInput | UserListingResponseUpsertWithWhereUniqueWithoutListingInput[]
    createMany?: UserListingResponseCreateManyListingInputEnvelope
    set?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    disconnect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    delete?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    update?: UserListingResponseUpdateWithWhereUniqueWithoutListingInput | UserListingResponseUpdateWithWhereUniqueWithoutListingInput[]
    updateMany?: UserListingResponseUpdateManyWithWhereWithoutListingInput | UserListingResponseUpdateManyWithWhereWithoutListingInput[]
    deleteMany?: UserListingResponseScalarWhereInput | UserListingResponseScalarWhereInput[]
  }

  export type ScrapeCreateNestedOneWithoutListingsInput = {
    create?: XOR<ScrapeCreateWithoutListingsInput, ScrapeUncheckedCreateWithoutListingsInput>
    connectOrCreate?: ScrapeCreateOrConnectWithoutListingsInput
    connect?: ScrapeWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutScrapesInput = {
    create?: XOR<ListingCreateWithoutScrapesInput, ListingUncheckedCreateWithoutScrapesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutScrapesInput
    connect?: ListingWhereUniqueInput
  }

  export type ScrapeUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<ScrapeCreateWithoutListingsInput, ScrapeUncheckedCreateWithoutListingsInput>
    connectOrCreate?: ScrapeCreateOrConnectWithoutListingsInput
    upsert?: ScrapeUpsertWithoutListingsInput
    connect?: ScrapeWhereUniqueInput
    update?: XOR<XOR<ScrapeUpdateToOneWithWhereWithoutListingsInput, ScrapeUpdateWithoutListingsInput>, ScrapeUncheckedUpdateWithoutListingsInput>
  }

  export type ListingUpdateOneRequiredWithoutScrapesNestedInput = {
    create?: XOR<ListingCreateWithoutScrapesInput, ListingUncheckedCreateWithoutScrapesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutScrapesInput
    upsert?: ListingUpsertWithoutScrapesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutScrapesInput, ListingUpdateWithoutScrapesInput>, ListingUncheckedUpdateWithoutScrapesInput>
  }

  export type ScrapeCreateNestedOneWithoutEnhancementsInput = {
    create?: XOR<ScrapeCreateWithoutEnhancementsInput, ScrapeUncheckedCreateWithoutEnhancementsInput>
    connectOrCreate?: ScrapeCreateOrConnectWithoutEnhancementsInput
    connect?: ScrapeWhereUniqueInput
  }

  export type EnhancementColumnCreateNestedManyWithoutEnhancementInput = {
    create?: XOR<EnhancementColumnCreateWithoutEnhancementInput, EnhancementColumnUncheckedCreateWithoutEnhancementInput> | EnhancementColumnCreateWithoutEnhancementInput[] | EnhancementColumnUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementColumnCreateOrConnectWithoutEnhancementInput | EnhancementColumnCreateOrConnectWithoutEnhancementInput[]
    createMany?: EnhancementColumnCreateManyEnhancementInputEnvelope
    connect?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
  }

  export type EnhancementResultCreateNestedManyWithoutEnhancementInput = {
    create?: XOR<EnhancementResultCreateWithoutEnhancementInput, EnhancementResultUncheckedCreateWithoutEnhancementInput> | EnhancementResultCreateWithoutEnhancementInput[] | EnhancementResultUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutEnhancementInput | EnhancementResultCreateOrConnectWithoutEnhancementInput[]
    createMany?: EnhancementResultCreateManyEnhancementInputEnvelope
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
  }

  export type EnhancementColumnUncheckedCreateNestedManyWithoutEnhancementInput = {
    create?: XOR<EnhancementColumnCreateWithoutEnhancementInput, EnhancementColumnUncheckedCreateWithoutEnhancementInput> | EnhancementColumnCreateWithoutEnhancementInput[] | EnhancementColumnUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementColumnCreateOrConnectWithoutEnhancementInput | EnhancementColumnCreateOrConnectWithoutEnhancementInput[]
    createMany?: EnhancementColumnCreateManyEnhancementInputEnvelope
    connect?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
  }

  export type EnhancementResultUncheckedCreateNestedManyWithoutEnhancementInput = {
    create?: XOR<EnhancementResultCreateWithoutEnhancementInput, EnhancementResultUncheckedCreateWithoutEnhancementInput> | EnhancementResultCreateWithoutEnhancementInput[] | EnhancementResultUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutEnhancementInput | EnhancementResultCreateOrConnectWithoutEnhancementInput[]
    createMany?: EnhancementResultCreateManyEnhancementInputEnvelope
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
  }

  export type ScrapeUpdateOneRequiredWithoutEnhancementsNestedInput = {
    create?: XOR<ScrapeCreateWithoutEnhancementsInput, ScrapeUncheckedCreateWithoutEnhancementsInput>
    connectOrCreate?: ScrapeCreateOrConnectWithoutEnhancementsInput
    upsert?: ScrapeUpsertWithoutEnhancementsInput
    connect?: ScrapeWhereUniqueInput
    update?: XOR<XOR<ScrapeUpdateToOneWithWhereWithoutEnhancementsInput, ScrapeUpdateWithoutEnhancementsInput>, ScrapeUncheckedUpdateWithoutEnhancementsInput>
  }

  export type EnhancementColumnUpdateManyWithoutEnhancementNestedInput = {
    create?: XOR<EnhancementColumnCreateWithoutEnhancementInput, EnhancementColumnUncheckedCreateWithoutEnhancementInput> | EnhancementColumnCreateWithoutEnhancementInput[] | EnhancementColumnUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementColumnCreateOrConnectWithoutEnhancementInput | EnhancementColumnCreateOrConnectWithoutEnhancementInput[]
    upsert?: EnhancementColumnUpsertWithWhereUniqueWithoutEnhancementInput | EnhancementColumnUpsertWithWhereUniqueWithoutEnhancementInput[]
    createMany?: EnhancementColumnCreateManyEnhancementInputEnvelope
    set?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    disconnect?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    delete?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    connect?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    update?: EnhancementColumnUpdateWithWhereUniqueWithoutEnhancementInput | EnhancementColumnUpdateWithWhereUniqueWithoutEnhancementInput[]
    updateMany?: EnhancementColumnUpdateManyWithWhereWithoutEnhancementInput | EnhancementColumnUpdateManyWithWhereWithoutEnhancementInput[]
    deleteMany?: EnhancementColumnScalarWhereInput | EnhancementColumnScalarWhereInput[]
  }

  export type EnhancementResultUpdateManyWithoutEnhancementNestedInput = {
    create?: XOR<EnhancementResultCreateWithoutEnhancementInput, EnhancementResultUncheckedCreateWithoutEnhancementInput> | EnhancementResultCreateWithoutEnhancementInput[] | EnhancementResultUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutEnhancementInput | EnhancementResultCreateOrConnectWithoutEnhancementInput[]
    upsert?: EnhancementResultUpsertWithWhereUniqueWithoutEnhancementInput | EnhancementResultUpsertWithWhereUniqueWithoutEnhancementInput[]
    createMany?: EnhancementResultCreateManyEnhancementInputEnvelope
    set?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    disconnect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    delete?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    update?: EnhancementResultUpdateWithWhereUniqueWithoutEnhancementInput | EnhancementResultUpdateWithWhereUniqueWithoutEnhancementInput[]
    updateMany?: EnhancementResultUpdateManyWithWhereWithoutEnhancementInput | EnhancementResultUpdateManyWithWhereWithoutEnhancementInput[]
    deleteMany?: EnhancementResultScalarWhereInput | EnhancementResultScalarWhereInput[]
  }

  export type EnhancementColumnUncheckedUpdateManyWithoutEnhancementNestedInput = {
    create?: XOR<EnhancementColumnCreateWithoutEnhancementInput, EnhancementColumnUncheckedCreateWithoutEnhancementInput> | EnhancementColumnCreateWithoutEnhancementInput[] | EnhancementColumnUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementColumnCreateOrConnectWithoutEnhancementInput | EnhancementColumnCreateOrConnectWithoutEnhancementInput[]
    upsert?: EnhancementColumnUpsertWithWhereUniqueWithoutEnhancementInput | EnhancementColumnUpsertWithWhereUniqueWithoutEnhancementInput[]
    createMany?: EnhancementColumnCreateManyEnhancementInputEnvelope
    set?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    disconnect?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    delete?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    connect?: EnhancementColumnWhereUniqueInput | EnhancementColumnWhereUniqueInput[]
    update?: EnhancementColumnUpdateWithWhereUniqueWithoutEnhancementInput | EnhancementColumnUpdateWithWhereUniqueWithoutEnhancementInput[]
    updateMany?: EnhancementColumnUpdateManyWithWhereWithoutEnhancementInput | EnhancementColumnUpdateManyWithWhereWithoutEnhancementInput[]
    deleteMany?: EnhancementColumnScalarWhereInput | EnhancementColumnScalarWhereInput[]
  }

  export type EnhancementResultUncheckedUpdateManyWithoutEnhancementNestedInput = {
    create?: XOR<EnhancementResultCreateWithoutEnhancementInput, EnhancementResultUncheckedCreateWithoutEnhancementInput> | EnhancementResultCreateWithoutEnhancementInput[] | EnhancementResultUncheckedCreateWithoutEnhancementInput[]
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutEnhancementInput | EnhancementResultCreateOrConnectWithoutEnhancementInput[]
    upsert?: EnhancementResultUpsertWithWhereUniqueWithoutEnhancementInput | EnhancementResultUpsertWithWhereUniqueWithoutEnhancementInput[]
    createMany?: EnhancementResultCreateManyEnhancementInputEnvelope
    set?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    disconnect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    delete?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    connect?: EnhancementResultWhereUniqueInput | EnhancementResultWhereUniqueInput[]
    update?: EnhancementResultUpdateWithWhereUniqueWithoutEnhancementInput | EnhancementResultUpdateWithWhereUniqueWithoutEnhancementInput[]
    updateMany?: EnhancementResultUpdateManyWithWhereWithoutEnhancementInput | EnhancementResultUpdateManyWithWhereWithoutEnhancementInput[]
    deleteMany?: EnhancementResultScalarWhereInput | EnhancementResultScalarWhereInput[]
  }

  export type EnhancementCreateNestedOneWithoutColumnsInput = {
    create?: XOR<EnhancementCreateWithoutColumnsInput, EnhancementUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: EnhancementCreateOrConnectWithoutColumnsInput
    connect?: EnhancementWhereUniqueInput
  }

  export type EnhancementValueCreateNestedManyWithoutColumnInput = {
    create?: XOR<EnhancementValueCreateWithoutColumnInput, EnhancementValueUncheckedCreateWithoutColumnInput> | EnhancementValueCreateWithoutColumnInput[] | EnhancementValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutColumnInput | EnhancementValueCreateOrConnectWithoutColumnInput[]
    createMany?: EnhancementValueCreateManyColumnInputEnvelope
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
  }

  export type EnhancementValueUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<EnhancementValueCreateWithoutColumnInput, EnhancementValueUncheckedCreateWithoutColumnInput> | EnhancementValueCreateWithoutColumnInput[] | EnhancementValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutColumnInput | EnhancementValueCreateOrConnectWithoutColumnInput[]
    createMany?: EnhancementValueCreateManyColumnInputEnvelope
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnhancementUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<EnhancementCreateWithoutColumnsInput, EnhancementUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: EnhancementCreateOrConnectWithoutColumnsInput
    upsert?: EnhancementUpsertWithoutColumnsInput
    connect?: EnhancementWhereUniqueInput
    update?: XOR<XOR<EnhancementUpdateToOneWithWhereWithoutColumnsInput, EnhancementUpdateWithoutColumnsInput>, EnhancementUncheckedUpdateWithoutColumnsInput>
  }

  export type EnhancementValueUpdateManyWithoutColumnNestedInput = {
    create?: XOR<EnhancementValueCreateWithoutColumnInput, EnhancementValueUncheckedCreateWithoutColumnInput> | EnhancementValueCreateWithoutColumnInput[] | EnhancementValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutColumnInput | EnhancementValueCreateOrConnectWithoutColumnInput[]
    upsert?: EnhancementValueUpsertWithWhereUniqueWithoutColumnInput | EnhancementValueUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: EnhancementValueCreateManyColumnInputEnvelope
    set?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    disconnect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    delete?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    update?: EnhancementValueUpdateWithWhereUniqueWithoutColumnInput | EnhancementValueUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: EnhancementValueUpdateManyWithWhereWithoutColumnInput | EnhancementValueUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: EnhancementValueScalarWhereInput | EnhancementValueScalarWhereInput[]
  }

  export type EnhancementValueUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<EnhancementValueCreateWithoutColumnInput, EnhancementValueUncheckedCreateWithoutColumnInput> | EnhancementValueCreateWithoutColumnInput[] | EnhancementValueUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutColumnInput | EnhancementValueCreateOrConnectWithoutColumnInput[]
    upsert?: EnhancementValueUpsertWithWhereUniqueWithoutColumnInput | EnhancementValueUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: EnhancementValueCreateManyColumnInputEnvelope
    set?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    disconnect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    delete?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    update?: EnhancementValueUpdateWithWhereUniqueWithoutColumnInput | EnhancementValueUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: EnhancementValueUpdateManyWithWhereWithoutColumnInput | EnhancementValueUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: EnhancementValueScalarWhereInput | EnhancementValueScalarWhereInput[]
  }

  export type EnhancementCreateNestedOneWithoutResultsInput = {
    create?: XOR<EnhancementCreateWithoutResultsInput, EnhancementUncheckedCreateWithoutResultsInput>
    connectOrCreate?: EnhancementCreateOrConnectWithoutResultsInput
    connect?: EnhancementWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutEnhancementResultsInput = {
    create?: XOR<ListingCreateWithoutEnhancementResultsInput, ListingUncheckedCreateWithoutEnhancementResultsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutEnhancementResultsInput
    connect?: ListingWhereUniqueInput
  }

  export type EnhancementValueCreateNestedManyWithoutResultInput = {
    create?: XOR<EnhancementValueCreateWithoutResultInput, EnhancementValueUncheckedCreateWithoutResultInput> | EnhancementValueCreateWithoutResultInput[] | EnhancementValueUncheckedCreateWithoutResultInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutResultInput | EnhancementValueCreateOrConnectWithoutResultInput[]
    createMany?: EnhancementValueCreateManyResultInputEnvelope
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
  }

  export type EnhancementValueUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<EnhancementValueCreateWithoutResultInput, EnhancementValueUncheckedCreateWithoutResultInput> | EnhancementValueCreateWithoutResultInput[] | EnhancementValueUncheckedCreateWithoutResultInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutResultInput | EnhancementValueCreateOrConnectWithoutResultInput[]
    createMany?: EnhancementValueCreateManyResultInputEnvelope
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
  }

  export type EnhancementUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<EnhancementCreateWithoutResultsInput, EnhancementUncheckedCreateWithoutResultsInput>
    connectOrCreate?: EnhancementCreateOrConnectWithoutResultsInput
    upsert?: EnhancementUpsertWithoutResultsInput
    connect?: EnhancementWhereUniqueInput
    update?: XOR<XOR<EnhancementUpdateToOneWithWhereWithoutResultsInput, EnhancementUpdateWithoutResultsInput>, EnhancementUncheckedUpdateWithoutResultsInput>
  }

  export type ListingUpdateOneRequiredWithoutEnhancementResultsNestedInput = {
    create?: XOR<ListingCreateWithoutEnhancementResultsInput, ListingUncheckedCreateWithoutEnhancementResultsInput>
    connectOrCreate?: ListingCreateOrConnectWithoutEnhancementResultsInput
    upsert?: ListingUpsertWithoutEnhancementResultsInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutEnhancementResultsInput, ListingUpdateWithoutEnhancementResultsInput>, ListingUncheckedUpdateWithoutEnhancementResultsInput>
  }

  export type EnhancementValueUpdateManyWithoutResultNestedInput = {
    create?: XOR<EnhancementValueCreateWithoutResultInput, EnhancementValueUncheckedCreateWithoutResultInput> | EnhancementValueCreateWithoutResultInput[] | EnhancementValueUncheckedCreateWithoutResultInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutResultInput | EnhancementValueCreateOrConnectWithoutResultInput[]
    upsert?: EnhancementValueUpsertWithWhereUniqueWithoutResultInput | EnhancementValueUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: EnhancementValueCreateManyResultInputEnvelope
    set?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    disconnect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    delete?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    update?: EnhancementValueUpdateWithWhereUniqueWithoutResultInput | EnhancementValueUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: EnhancementValueUpdateManyWithWhereWithoutResultInput | EnhancementValueUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: EnhancementValueScalarWhereInput | EnhancementValueScalarWhereInput[]
  }

  export type EnhancementValueUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<EnhancementValueCreateWithoutResultInput, EnhancementValueUncheckedCreateWithoutResultInput> | EnhancementValueCreateWithoutResultInput[] | EnhancementValueUncheckedCreateWithoutResultInput[]
    connectOrCreate?: EnhancementValueCreateOrConnectWithoutResultInput | EnhancementValueCreateOrConnectWithoutResultInput[]
    upsert?: EnhancementValueUpsertWithWhereUniqueWithoutResultInput | EnhancementValueUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: EnhancementValueCreateManyResultInputEnvelope
    set?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    disconnect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    delete?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    connect?: EnhancementValueWhereUniqueInput | EnhancementValueWhereUniqueInput[]
    update?: EnhancementValueUpdateWithWhereUniqueWithoutResultInput | EnhancementValueUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: EnhancementValueUpdateManyWithWhereWithoutResultInput | EnhancementValueUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: EnhancementValueScalarWhereInput | EnhancementValueScalarWhereInput[]
  }

  export type EnhancementResultCreateNestedOneWithoutIndividualValuesInput = {
    create?: XOR<EnhancementResultCreateWithoutIndividualValuesInput, EnhancementResultUncheckedCreateWithoutIndividualValuesInput>
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutIndividualValuesInput
    connect?: EnhancementResultWhereUniqueInput
  }

  export type EnhancementColumnCreateNestedOneWithoutValuesInput = {
    create?: XOR<EnhancementColumnCreateWithoutValuesInput, EnhancementColumnUncheckedCreateWithoutValuesInput>
    connectOrCreate?: EnhancementColumnCreateOrConnectWithoutValuesInput
    connect?: EnhancementColumnWhereUniqueInput
  }

  export type EnhancementResultUpdateOneRequiredWithoutIndividualValuesNestedInput = {
    create?: XOR<EnhancementResultCreateWithoutIndividualValuesInput, EnhancementResultUncheckedCreateWithoutIndividualValuesInput>
    connectOrCreate?: EnhancementResultCreateOrConnectWithoutIndividualValuesInput
    upsert?: EnhancementResultUpsertWithoutIndividualValuesInput
    connect?: EnhancementResultWhereUniqueInput
    update?: XOR<XOR<EnhancementResultUpdateToOneWithWhereWithoutIndividualValuesInput, EnhancementResultUpdateWithoutIndividualValuesInput>, EnhancementResultUncheckedUpdateWithoutIndividualValuesInput>
  }

  export type EnhancementColumnUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<EnhancementColumnCreateWithoutValuesInput, EnhancementColumnUncheckedCreateWithoutValuesInput>
    connectOrCreate?: EnhancementColumnCreateOrConnectWithoutValuesInput
    upsert?: EnhancementColumnUpsertWithoutValuesInput
    connect?: EnhancementColumnWhereUniqueInput
    update?: XOR<XOR<EnhancementColumnUpdateToOneWithWhereWithoutValuesInput, EnhancementColumnUpdateWithoutValuesInput>, EnhancementColumnUncheckedUpdateWithoutValuesInput>
  }

  export type UserListingResponseCreateNestedManyWithoutSavedQueryInput = {
    create?: XOR<UserListingResponseCreateWithoutSavedQueryInput, UserListingResponseUncheckedCreateWithoutSavedQueryInput> | UserListingResponseCreateWithoutSavedQueryInput[] | UserListingResponseUncheckedCreateWithoutSavedQueryInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutSavedQueryInput | UserListingResponseCreateOrConnectWithoutSavedQueryInput[]
    createMany?: UserListingResponseCreateManySavedQueryInputEnvelope
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
  }

  export type UserListingResponseUncheckedCreateNestedManyWithoutSavedQueryInput = {
    create?: XOR<UserListingResponseCreateWithoutSavedQueryInput, UserListingResponseUncheckedCreateWithoutSavedQueryInput> | UserListingResponseCreateWithoutSavedQueryInput[] | UserListingResponseUncheckedCreateWithoutSavedQueryInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutSavedQueryInput | UserListingResponseCreateOrConnectWithoutSavedQueryInput[]
    createMany?: UserListingResponseCreateManySavedQueryInputEnvelope
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
  }

  export type UserListingResponseUpdateManyWithoutSavedQueryNestedInput = {
    create?: XOR<UserListingResponseCreateWithoutSavedQueryInput, UserListingResponseUncheckedCreateWithoutSavedQueryInput> | UserListingResponseCreateWithoutSavedQueryInput[] | UserListingResponseUncheckedCreateWithoutSavedQueryInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutSavedQueryInput | UserListingResponseCreateOrConnectWithoutSavedQueryInput[]
    upsert?: UserListingResponseUpsertWithWhereUniqueWithoutSavedQueryInput | UserListingResponseUpsertWithWhereUniqueWithoutSavedQueryInput[]
    createMany?: UserListingResponseCreateManySavedQueryInputEnvelope
    set?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    disconnect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    delete?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    update?: UserListingResponseUpdateWithWhereUniqueWithoutSavedQueryInput | UserListingResponseUpdateWithWhereUniqueWithoutSavedQueryInput[]
    updateMany?: UserListingResponseUpdateManyWithWhereWithoutSavedQueryInput | UserListingResponseUpdateManyWithWhereWithoutSavedQueryInput[]
    deleteMany?: UserListingResponseScalarWhereInput | UserListingResponseScalarWhereInput[]
  }

  export type UserListingResponseUncheckedUpdateManyWithoutSavedQueryNestedInput = {
    create?: XOR<UserListingResponseCreateWithoutSavedQueryInput, UserListingResponseUncheckedCreateWithoutSavedQueryInput> | UserListingResponseCreateWithoutSavedQueryInput[] | UserListingResponseUncheckedCreateWithoutSavedQueryInput[]
    connectOrCreate?: UserListingResponseCreateOrConnectWithoutSavedQueryInput | UserListingResponseCreateOrConnectWithoutSavedQueryInput[]
    upsert?: UserListingResponseUpsertWithWhereUniqueWithoutSavedQueryInput | UserListingResponseUpsertWithWhereUniqueWithoutSavedQueryInput[]
    createMany?: UserListingResponseCreateManySavedQueryInputEnvelope
    set?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    disconnect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    delete?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    connect?: UserListingResponseWhereUniqueInput | UserListingResponseWhereUniqueInput[]
    update?: UserListingResponseUpdateWithWhereUniqueWithoutSavedQueryInput | UserListingResponseUpdateWithWhereUniqueWithoutSavedQueryInput[]
    updateMany?: UserListingResponseUpdateManyWithWhereWithoutSavedQueryInput | UserListingResponseUpdateManyWithWhereWithoutSavedQueryInput[]
    deleteMany?: UserListingResponseScalarWhereInput | UserListingResponseScalarWhereInput[]
  }

  export type SavedQueryCreateNestedOneWithoutResponsesInput = {
    create?: XOR<SavedQueryCreateWithoutResponsesInput, SavedQueryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SavedQueryCreateOrConnectWithoutResponsesInput
    connect?: SavedQueryWhereUniqueInput
  }

  export type ListingCreateNestedOneWithoutUserResponsesInput = {
    create?: XOR<ListingCreateWithoutUserResponsesInput, ListingUncheckedCreateWithoutUserResponsesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutUserResponsesInput
    connect?: ListingWhereUniqueInput
  }

  export type SavedQueryUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<SavedQueryCreateWithoutResponsesInput, SavedQueryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SavedQueryCreateOrConnectWithoutResponsesInput
    upsert?: SavedQueryUpsertWithoutResponsesInput
    connect?: SavedQueryWhereUniqueInput
    update?: XOR<XOR<SavedQueryUpdateToOneWithWhereWithoutResponsesInput, SavedQueryUpdateWithoutResponsesInput>, SavedQueryUncheckedUpdateWithoutResponsesInput>
  }

  export type ListingUpdateOneRequiredWithoutUserResponsesNestedInput = {
    create?: XOR<ListingCreateWithoutUserResponsesInput, ListingUncheckedCreateWithoutUserResponsesInput>
    connectOrCreate?: ListingCreateOrConnectWithoutUserResponsesInput
    upsert?: ListingUpsertWithoutUserResponsesInput
    connect?: ListingWhereUniqueInput
    update?: XOR<XOR<ListingUpdateToOneWithWhereWithoutUserResponsesInput, ListingUpdateWithoutUserResponsesInput>, ListingUncheckedUpdateWithoutUserResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ScrapeListingCreateWithoutScrapeInput = {
    foundAt?: Date | string
    listing: ListingCreateNestedOneWithoutScrapesInput
  }

  export type ScrapeListingUncheckedCreateWithoutScrapeInput = {
    listingId: string
    foundAt?: Date | string
  }

  export type ScrapeListingCreateOrConnectWithoutScrapeInput = {
    where: ScrapeListingWhereUniqueInput
    create: XOR<ScrapeListingCreateWithoutScrapeInput, ScrapeListingUncheckedCreateWithoutScrapeInput>
  }

  export type ScrapeListingCreateManyScrapeInputEnvelope = {
    data: ScrapeListingCreateManyScrapeInput | ScrapeListingCreateManyScrapeInput[]
    skipDuplicates?: boolean
  }

  export type EnhancementCreateWithoutScrapeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    columns?: EnhancementColumnCreateNestedManyWithoutEnhancementInput
    results?: EnhancementResultCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementUncheckedCreateWithoutScrapeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    columns?: EnhancementColumnUncheckedCreateNestedManyWithoutEnhancementInput
    results?: EnhancementResultUncheckedCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementCreateOrConnectWithoutScrapeInput = {
    where: EnhancementWhereUniqueInput
    create: XOR<EnhancementCreateWithoutScrapeInput, EnhancementUncheckedCreateWithoutScrapeInput>
  }

  export type EnhancementCreateManyScrapeInputEnvelope = {
    data: EnhancementCreateManyScrapeInput | EnhancementCreateManyScrapeInput[]
    skipDuplicates?: boolean
  }

  export type ScrapeListingUpsertWithWhereUniqueWithoutScrapeInput = {
    where: ScrapeListingWhereUniqueInput
    update: XOR<ScrapeListingUpdateWithoutScrapeInput, ScrapeListingUncheckedUpdateWithoutScrapeInput>
    create: XOR<ScrapeListingCreateWithoutScrapeInput, ScrapeListingUncheckedCreateWithoutScrapeInput>
  }

  export type ScrapeListingUpdateWithWhereUniqueWithoutScrapeInput = {
    where: ScrapeListingWhereUniqueInput
    data: XOR<ScrapeListingUpdateWithoutScrapeInput, ScrapeListingUncheckedUpdateWithoutScrapeInput>
  }

  export type ScrapeListingUpdateManyWithWhereWithoutScrapeInput = {
    where: ScrapeListingScalarWhereInput
    data: XOR<ScrapeListingUpdateManyMutationInput, ScrapeListingUncheckedUpdateManyWithoutScrapeInput>
  }

  export type ScrapeListingScalarWhereInput = {
    AND?: ScrapeListingScalarWhereInput | ScrapeListingScalarWhereInput[]
    OR?: ScrapeListingScalarWhereInput[]
    NOT?: ScrapeListingScalarWhereInput | ScrapeListingScalarWhereInput[]
    scrapeId?: StringFilter<"ScrapeListing"> | string
    listingId?: StringFilter<"ScrapeListing"> | string
    foundAt?: DateTimeFilter<"ScrapeListing"> | Date | string
  }

  export type EnhancementUpsertWithWhereUniqueWithoutScrapeInput = {
    where: EnhancementWhereUniqueInput
    update: XOR<EnhancementUpdateWithoutScrapeInput, EnhancementUncheckedUpdateWithoutScrapeInput>
    create: XOR<EnhancementCreateWithoutScrapeInput, EnhancementUncheckedCreateWithoutScrapeInput>
  }

  export type EnhancementUpdateWithWhereUniqueWithoutScrapeInput = {
    where: EnhancementWhereUniqueInput
    data: XOR<EnhancementUpdateWithoutScrapeInput, EnhancementUncheckedUpdateWithoutScrapeInput>
  }

  export type EnhancementUpdateManyWithWhereWithoutScrapeInput = {
    where: EnhancementScalarWhereInput
    data: XOR<EnhancementUpdateManyMutationInput, EnhancementUncheckedUpdateManyWithoutScrapeInput>
  }

  export type EnhancementScalarWhereInput = {
    AND?: EnhancementScalarWhereInput | EnhancementScalarWhereInput[]
    OR?: EnhancementScalarWhereInput[]
    NOT?: EnhancementScalarWhereInput | EnhancementScalarWhereInput[]
    id?: StringFilter<"Enhancement"> | string
    createdAt?: DateTimeFilter<"Enhancement"> | Date | string
    updatedAt?: DateTimeFilter<"Enhancement"> | Date | string
    scrapeId?: StringFilter<"Enhancement"> | string
    userId?: StringFilter<"Enhancement"> | string
    query?: StringFilter<"Enhancement"> | string
    taskId?: StringNullableFilter<"Enhancement"> | string | null
    status?: StringFilter<"Enhancement"> | string
    error?: StringNullableFilter<"Enhancement"> | string | null
    completedAt?: DateTimeNullableFilter<"Enhancement"> | Date | string | null
    processedCount?: IntFilter<"Enhancement"> | number
    totalCount?: IntFilter<"Enhancement"> | number
  }

  export type ScrapeListingCreateWithoutListingInput = {
    foundAt?: Date | string
    scrape: ScrapeCreateNestedOneWithoutListingsInput
  }

  export type ScrapeListingUncheckedCreateWithoutListingInput = {
    scrapeId: string
    foundAt?: Date | string
  }

  export type ScrapeListingCreateOrConnectWithoutListingInput = {
    where: ScrapeListingWhereUniqueInput
    create: XOR<ScrapeListingCreateWithoutListingInput, ScrapeListingUncheckedCreateWithoutListingInput>
  }

  export type ScrapeListingCreateManyListingInputEnvelope = {
    data: ScrapeListingCreateManyListingInput | ScrapeListingCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type EnhancementResultCreateWithoutListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    enhancement: EnhancementCreateNestedOneWithoutResultsInput
    individualValues?: EnhancementValueCreateNestedManyWithoutResultInput
  }

  export type EnhancementResultUncheckedCreateWithoutListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enhancementId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    individualValues?: EnhancementValueUncheckedCreateNestedManyWithoutResultInput
  }

  export type EnhancementResultCreateOrConnectWithoutListingInput = {
    where: EnhancementResultWhereUniqueInput
    create: XOR<EnhancementResultCreateWithoutListingInput, EnhancementResultUncheckedCreateWithoutListingInput>
  }

  export type EnhancementResultCreateManyListingInputEnvelope = {
    data: EnhancementResultCreateManyListingInput | EnhancementResultCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type UserListingResponseCreateWithoutListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    response: string
    notes?: string | null
    savedQuery: SavedQueryCreateNestedOneWithoutResponsesInput
  }

  export type UserListingResponseUncheckedCreateWithoutListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    savedQueryId: string
    response: string
    notes?: string | null
  }

  export type UserListingResponseCreateOrConnectWithoutListingInput = {
    where: UserListingResponseWhereUniqueInput
    create: XOR<UserListingResponseCreateWithoutListingInput, UserListingResponseUncheckedCreateWithoutListingInput>
  }

  export type UserListingResponseCreateManyListingInputEnvelope = {
    data: UserListingResponseCreateManyListingInput | UserListingResponseCreateManyListingInput[]
    skipDuplicates?: boolean
  }

  export type ScrapeListingUpsertWithWhereUniqueWithoutListingInput = {
    where: ScrapeListingWhereUniqueInput
    update: XOR<ScrapeListingUpdateWithoutListingInput, ScrapeListingUncheckedUpdateWithoutListingInput>
    create: XOR<ScrapeListingCreateWithoutListingInput, ScrapeListingUncheckedCreateWithoutListingInput>
  }

  export type ScrapeListingUpdateWithWhereUniqueWithoutListingInput = {
    where: ScrapeListingWhereUniqueInput
    data: XOR<ScrapeListingUpdateWithoutListingInput, ScrapeListingUncheckedUpdateWithoutListingInput>
  }

  export type ScrapeListingUpdateManyWithWhereWithoutListingInput = {
    where: ScrapeListingScalarWhereInput
    data: XOR<ScrapeListingUpdateManyMutationInput, ScrapeListingUncheckedUpdateManyWithoutListingInput>
  }

  export type EnhancementResultUpsertWithWhereUniqueWithoutListingInput = {
    where: EnhancementResultWhereUniqueInput
    update: XOR<EnhancementResultUpdateWithoutListingInput, EnhancementResultUncheckedUpdateWithoutListingInput>
    create: XOR<EnhancementResultCreateWithoutListingInput, EnhancementResultUncheckedCreateWithoutListingInput>
  }

  export type EnhancementResultUpdateWithWhereUniqueWithoutListingInput = {
    where: EnhancementResultWhereUniqueInput
    data: XOR<EnhancementResultUpdateWithoutListingInput, EnhancementResultUncheckedUpdateWithoutListingInput>
  }

  export type EnhancementResultUpdateManyWithWhereWithoutListingInput = {
    where: EnhancementResultScalarWhereInput
    data: XOR<EnhancementResultUpdateManyMutationInput, EnhancementResultUncheckedUpdateManyWithoutListingInput>
  }

  export type EnhancementResultScalarWhereInput = {
    AND?: EnhancementResultScalarWhereInput | EnhancementResultScalarWhereInput[]
    OR?: EnhancementResultScalarWhereInput[]
    NOT?: EnhancementResultScalarWhereInput | EnhancementResultScalarWhereInput[]
    id?: StringFilter<"EnhancementResult"> | string
    createdAt?: DateTimeFilter<"EnhancementResult"> | Date | string
    updatedAt?: DateTimeFilter<"EnhancementResult"> | Date | string
    enhancementId?: StringFilter<"EnhancementResult"> | string
    listingId?: StringFilter<"EnhancementResult"> | string
    values?: JsonFilter<"EnhancementResult">
    compositeScore?: FloatFilter<"EnhancementResult"> | number
    status?: StringFilter<"EnhancementResult"> | string
    error?: StringNullableFilter<"EnhancementResult"> | string | null
  }

  export type UserListingResponseUpsertWithWhereUniqueWithoutListingInput = {
    where: UserListingResponseWhereUniqueInput
    update: XOR<UserListingResponseUpdateWithoutListingInput, UserListingResponseUncheckedUpdateWithoutListingInput>
    create: XOR<UserListingResponseCreateWithoutListingInput, UserListingResponseUncheckedCreateWithoutListingInput>
  }

  export type UserListingResponseUpdateWithWhereUniqueWithoutListingInput = {
    where: UserListingResponseWhereUniqueInput
    data: XOR<UserListingResponseUpdateWithoutListingInput, UserListingResponseUncheckedUpdateWithoutListingInput>
  }

  export type UserListingResponseUpdateManyWithWhereWithoutListingInput = {
    where: UserListingResponseScalarWhereInput
    data: XOR<UserListingResponseUpdateManyMutationInput, UserListingResponseUncheckedUpdateManyWithoutListingInput>
  }

  export type UserListingResponseScalarWhereInput = {
    AND?: UserListingResponseScalarWhereInput | UserListingResponseScalarWhereInput[]
    OR?: UserListingResponseScalarWhereInput[]
    NOT?: UserListingResponseScalarWhereInput | UserListingResponseScalarWhereInput[]
    id?: StringFilter<"UserListingResponse"> | string
    createdAt?: DateTimeFilter<"UserListingResponse"> | Date | string
    updatedAt?: DateTimeFilter<"UserListingResponse"> | Date | string
    userId?: StringFilter<"UserListingResponse"> | string
    savedQueryId?: StringFilter<"UserListingResponse"> | string
    listingId?: StringFilter<"UserListingResponse"> | string
    response?: StringFilter<"UserListingResponse"> | string
    notes?: StringNullableFilter<"UserListingResponse"> | string | null
  }

  export type ScrapeCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
    enhancements?: EnhancementCreateNestedManyWithoutScrapeInput
  }

  export type ScrapeUncheckedCreateWithoutListingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
    enhancements?: EnhancementUncheckedCreateNestedManyWithoutScrapeInput
  }

  export type ScrapeCreateOrConnectWithoutListingsInput = {
    where: ScrapeWhereUniqueInput
    create: XOR<ScrapeCreateWithoutListingsInput, ScrapeUncheckedCreateWithoutListingsInput>
  }

  export type ListingCreateWithoutScrapesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    enhancementResults?: EnhancementResultCreateNestedManyWithoutListingInput
    userResponses?: UserListingResponseCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutScrapesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    enhancementResults?: EnhancementResultUncheckedCreateNestedManyWithoutListingInput
    userResponses?: UserListingResponseUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutScrapesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutScrapesInput, ListingUncheckedCreateWithoutScrapesInput>
  }

  export type ScrapeUpsertWithoutListingsInput = {
    update: XOR<ScrapeUpdateWithoutListingsInput, ScrapeUncheckedUpdateWithoutListingsInput>
    create: XOR<ScrapeCreateWithoutListingsInput, ScrapeUncheckedCreateWithoutListingsInput>
    where?: ScrapeWhereInput
  }

  export type ScrapeUpdateToOneWithWhereWithoutListingsInput = {
    where?: ScrapeWhereInput
    data: XOR<ScrapeUpdateWithoutListingsInput, ScrapeUncheckedUpdateWithoutListingsInput>
  }

  export type ScrapeUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
    enhancements?: EnhancementUpdateManyWithoutScrapeNestedInput
  }

  export type ScrapeUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
    enhancements?: EnhancementUncheckedUpdateManyWithoutScrapeNestedInput
  }

  export type ListingUpsertWithoutScrapesInput = {
    update: XOR<ListingUpdateWithoutScrapesInput, ListingUncheckedUpdateWithoutScrapesInput>
    create: XOR<ListingCreateWithoutScrapesInput, ListingUncheckedCreateWithoutScrapesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutScrapesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutScrapesInput, ListingUncheckedUpdateWithoutScrapesInput>
  }

  export type ListingUpdateWithoutScrapesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    enhancementResults?: EnhancementResultUpdateManyWithoutListingNestedInput
    userResponses?: UserListingResponseUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutScrapesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    enhancementResults?: EnhancementResultUncheckedUpdateManyWithoutListingNestedInput
    userResponses?: UserListingResponseUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ScrapeCreateWithoutEnhancementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
    listings?: ScrapeListingCreateNestedManyWithoutScrapeInput
  }

  export type ScrapeUncheckedCreateWithoutEnhancementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    apifyRunId: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    durationMs?: number | null
    listingsCount?: number
    listings?: ScrapeListingUncheckedCreateNestedManyWithoutScrapeInput
  }

  export type ScrapeCreateOrConnectWithoutEnhancementsInput = {
    where: ScrapeWhereUniqueInput
    create: XOR<ScrapeCreateWithoutEnhancementsInput, ScrapeUncheckedCreateWithoutEnhancementsInput>
  }

  export type EnhancementColumnCreateWithoutEnhancementInput = {
    id?: string
    createdAt?: Date | string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
    values?: EnhancementValueCreateNestedManyWithoutColumnInput
  }

  export type EnhancementColumnUncheckedCreateWithoutEnhancementInput = {
    id?: string
    createdAt?: Date | string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
    values?: EnhancementValueUncheckedCreateNestedManyWithoutColumnInput
  }

  export type EnhancementColumnCreateOrConnectWithoutEnhancementInput = {
    where: EnhancementColumnWhereUniqueInput
    create: XOR<EnhancementColumnCreateWithoutEnhancementInput, EnhancementColumnUncheckedCreateWithoutEnhancementInput>
  }

  export type EnhancementColumnCreateManyEnhancementInputEnvelope = {
    data: EnhancementColumnCreateManyEnhancementInput | EnhancementColumnCreateManyEnhancementInput[]
    skipDuplicates?: boolean
  }

  export type EnhancementResultCreateWithoutEnhancementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    listing: ListingCreateNestedOneWithoutEnhancementResultsInput
    individualValues?: EnhancementValueCreateNestedManyWithoutResultInput
  }

  export type EnhancementResultUncheckedCreateWithoutEnhancementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    individualValues?: EnhancementValueUncheckedCreateNestedManyWithoutResultInput
  }

  export type EnhancementResultCreateOrConnectWithoutEnhancementInput = {
    where: EnhancementResultWhereUniqueInput
    create: XOR<EnhancementResultCreateWithoutEnhancementInput, EnhancementResultUncheckedCreateWithoutEnhancementInput>
  }

  export type EnhancementResultCreateManyEnhancementInputEnvelope = {
    data: EnhancementResultCreateManyEnhancementInput | EnhancementResultCreateManyEnhancementInput[]
    skipDuplicates?: boolean
  }

  export type ScrapeUpsertWithoutEnhancementsInput = {
    update: XOR<ScrapeUpdateWithoutEnhancementsInput, ScrapeUncheckedUpdateWithoutEnhancementsInput>
    create: XOR<ScrapeCreateWithoutEnhancementsInput, ScrapeUncheckedCreateWithoutEnhancementsInput>
    where?: ScrapeWhereInput
  }

  export type ScrapeUpdateToOneWithWhereWithoutEnhancementsInput = {
    where?: ScrapeWhereInput
    data: XOR<ScrapeUpdateWithoutEnhancementsInput, ScrapeUncheckedUpdateWithoutEnhancementsInput>
  }

  export type ScrapeUpdateWithoutEnhancementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
    listings?: ScrapeListingUpdateManyWithoutScrapeNestedInput
  }

  export type ScrapeUncheckedUpdateWithoutEnhancementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    apifyRunId?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    listingsCount?: IntFieldUpdateOperationsInput | number
    listings?: ScrapeListingUncheckedUpdateManyWithoutScrapeNestedInput
  }

  export type EnhancementColumnUpsertWithWhereUniqueWithoutEnhancementInput = {
    where: EnhancementColumnWhereUniqueInput
    update: XOR<EnhancementColumnUpdateWithoutEnhancementInput, EnhancementColumnUncheckedUpdateWithoutEnhancementInput>
    create: XOR<EnhancementColumnCreateWithoutEnhancementInput, EnhancementColumnUncheckedCreateWithoutEnhancementInput>
  }

  export type EnhancementColumnUpdateWithWhereUniqueWithoutEnhancementInput = {
    where: EnhancementColumnWhereUniqueInput
    data: XOR<EnhancementColumnUpdateWithoutEnhancementInput, EnhancementColumnUncheckedUpdateWithoutEnhancementInput>
  }

  export type EnhancementColumnUpdateManyWithWhereWithoutEnhancementInput = {
    where: EnhancementColumnScalarWhereInput
    data: XOR<EnhancementColumnUpdateManyMutationInput, EnhancementColumnUncheckedUpdateManyWithoutEnhancementInput>
  }

  export type EnhancementColumnScalarWhereInput = {
    AND?: EnhancementColumnScalarWhereInput | EnhancementColumnScalarWhereInput[]
    OR?: EnhancementColumnScalarWhereInput[]
    NOT?: EnhancementColumnScalarWhereInput | EnhancementColumnScalarWhereInput[]
    id?: StringFilter<"EnhancementColumn"> | string
    createdAt?: DateTimeFilter<"EnhancementColumn"> | Date | string
    enhancementId?: StringFilter<"EnhancementColumn"> | string
    name?: StringFilter<"EnhancementColumn"> | string
    type?: StringFilter<"EnhancementColumn"> | string
    description?: StringFilter<"EnhancementColumn"> | string
    weight?: FloatFilter<"EnhancementColumn"> | number
    order?: IntFilter<"EnhancementColumn"> | number
  }

  export type EnhancementResultUpsertWithWhereUniqueWithoutEnhancementInput = {
    where: EnhancementResultWhereUniqueInput
    update: XOR<EnhancementResultUpdateWithoutEnhancementInput, EnhancementResultUncheckedUpdateWithoutEnhancementInput>
    create: XOR<EnhancementResultCreateWithoutEnhancementInput, EnhancementResultUncheckedCreateWithoutEnhancementInput>
  }

  export type EnhancementResultUpdateWithWhereUniqueWithoutEnhancementInput = {
    where: EnhancementResultWhereUniqueInput
    data: XOR<EnhancementResultUpdateWithoutEnhancementInput, EnhancementResultUncheckedUpdateWithoutEnhancementInput>
  }

  export type EnhancementResultUpdateManyWithWhereWithoutEnhancementInput = {
    where: EnhancementResultScalarWhereInput
    data: XOR<EnhancementResultUpdateManyMutationInput, EnhancementResultUncheckedUpdateManyWithoutEnhancementInput>
  }

  export type EnhancementCreateWithoutColumnsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    scrape: ScrapeCreateNestedOneWithoutEnhancementsInput
    results?: EnhancementResultCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementUncheckedCreateWithoutColumnsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scrapeId: string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    results?: EnhancementResultUncheckedCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementCreateOrConnectWithoutColumnsInput = {
    where: EnhancementWhereUniqueInput
    create: XOR<EnhancementCreateWithoutColumnsInput, EnhancementUncheckedCreateWithoutColumnsInput>
  }

  export type EnhancementValueCreateWithoutColumnInput = {
    id?: string
    createdAt?: Date | string
    enhancementId: string
    listingId: string
    normalizedValue: number
    result: EnhancementResultCreateNestedOneWithoutIndividualValuesInput
  }

  export type EnhancementValueUncheckedCreateWithoutColumnInput = {
    id?: string
    createdAt?: Date | string
    resultId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
  }

  export type EnhancementValueCreateOrConnectWithoutColumnInput = {
    where: EnhancementValueWhereUniqueInput
    create: XOR<EnhancementValueCreateWithoutColumnInput, EnhancementValueUncheckedCreateWithoutColumnInput>
  }

  export type EnhancementValueCreateManyColumnInputEnvelope = {
    data: EnhancementValueCreateManyColumnInput | EnhancementValueCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type EnhancementUpsertWithoutColumnsInput = {
    update: XOR<EnhancementUpdateWithoutColumnsInput, EnhancementUncheckedUpdateWithoutColumnsInput>
    create: XOR<EnhancementCreateWithoutColumnsInput, EnhancementUncheckedCreateWithoutColumnsInput>
    where?: EnhancementWhereInput
  }

  export type EnhancementUpdateToOneWithWhereWithoutColumnsInput = {
    where?: EnhancementWhereInput
    data: XOR<EnhancementUpdateWithoutColumnsInput, EnhancementUncheckedUpdateWithoutColumnsInput>
  }

  export type EnhancementUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    scrape?: ScrapeUpdateOneRequiredWithoutEnhancementsNestedInput
    results?: EnhancementResultUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrapeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    results?: EnhancementResultUncheckedUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementValueUpsertWithWhereUniqueWithoutColumnInput = {
    where: EnhancementValueWhereUniqueInput
    update: XOR<EnhancementValueUpdateWithoutColumnInput, EnhancementValueUncheckedUpdateWithoutColumnInput>
    create: XOR<EnhancementValueCreateWithoutColumnInput, EnhancementValueUncheckedCreateWithoutColumnInput>
  }

  export type EnhancementValueUpdateWithWhereUniqueWithoutColumnInput = {
    where: EnhancementValueWhereUniqueInput
    data: XOR<EnhancementValueUpdateWithoutColumnInput, EnhancementValueUncheckedUpdateWithoutColumnInput>
  }

  export type EnhancementValueUpdateManyWithWhereWithoutColumnInput = {
    where: EnhancementValueScalarWhereInput
    data: XOR<EnhancementValueUpdateManyMutationInput, EnhancementValueUncheckedUpdateManyWithoutColumnInput>
  }

  export type EnhancementValueScalarWhereInput = {
    AND?: EnhancementValueScalarWhereInput | EnhancementValueScalarWhereInput[]
    OR?: EnhancementValueScalarWhereInput[]
    NOT?: EnhancementValueScalarWhereInput | EnhancementValueScalarWhereInput[]
    id?: StringFilter<"EnhancementValue"> | string
    createdAt?: DateTimeFilter<"EnhancementValue"> | Date | string
    resultId?: StringFilter<"EnhancementValue"> | string
    columnId?: StringFilter<"EnhancementValue"> | string
    enhancementId?: StringFilter<"EnhancementValue"> | string
    listingId?: StringFilter<"EnhancementValue"> | string
    normalizedValue?: FloatFilter<"EnhancementValue"> | number
  }

  export type EnhancementCreateWithoutResultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    scrape: ScrapeCreateNestedOneWithoutEnhancementsInput
    columns?: EnhancementColumnCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementUncheckedCreateWithoutResultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    scrapeId: string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
    columns?: EnhancementColumnUncheckedCreateNestedManyWithoutEnhancementInput
  }

  export type EnhancementCreateOrConnectWithoutResultsInput = {
    where: EnhancementWhereUniqueInput
    create: XOR<EnhancementCreateWithoutResultsInput, EnhancementUncheckedCreateWithoutResultsInput>
  }

  export type ListingCreateWithoutEnhancementResultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingCreateNestedManyWithoutListingInput
    userResponses?: UserListingResponseCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutEnhancementResultsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUncheckedCreateNestedManyWithoutListingInput
    userResponses?: UserListingResponseUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutEnhancementResultsInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutEnhancementResultsInput, ListingUncheckedCreateWithoutEnhancementResultsInput>
  }

  export type EnhancementValueCreateWithoutResultInput = {
    id?: string
    createdAt?: Date | string
    enhancementId: string
    listingId: string
    normalizedValue: number
    column: EnhancementColumnCreateNestedOneWithoutValuesInput
  }

  export type EnhancementValueUncheckedCreateWithoutResultInput = {
    id?: string
    createdAt?: Date | string
    columnId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
  }

  export type EnhancementValueCreateOrConnectWithoutResultInput = {
    where: EnhancementValueWhereUniqueInput
    create: XOR<EnhancementValueCreateWithoutResultInput, EnhancementValueUncheckedCreateWithoutResultInput>
  }

  export type EnhancementValueCreateManyResultInputEnvelope = {
    data: EnhancementValueCreateManyResultInput | EnhancementValueCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type EnhancementUpsertWithoutResultsInput = {
    update: XOR<EnhancementUpdateWithoutResultsInput, EnhancementUncheckedUpdateWithoutResultsInput>
    create: XOR<EnhancementCreateWithoutResultsInput, EnhancementUncheckedCreateWithoutResultsInput>
    where?: EnhancementWhereInput
  }

  export type EnhancementUpdateToOneWithWhereWithoutResultsInput = {
    where?: EnhancementWhereInput
    data: XOR<EnhancementUpdateWithoutResultsInput, EnhancementUncheckedUpdateWithoutResultsInput>
  }

  export type EnhancementUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    scrape?: ScrapeUpdateOneRequiredWithoutEnhancementsNestedInput
    columns?: EnhancementColumnUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrapeId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    columns?: EnhancementColumnUncheckedUpdateManyWithoutEnhancementNestedInput
  }

  export type ListingUpsertWithoutEnhancementResultsInput = {
    update: XOR<ListingUpdateWithoutEnhancementResultsInput, ListingUncheckedUpdateWithoutEnhancementResultsInput>
    create: XOR<ListingCreateWithoutEnhancementResultsInput, ListingUncheckedCreateWithoutEnhancementResultsInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutEnhancementResultsInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutEnhancementResultsInput, ListingUncheckedUpdateWithoutEnhancementResultsInput>
  }

  export type ListingUpdateWithoutEnhancementResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUpdateManyWithoutListingNestedInput
    userResponses?: UserListingResponseUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutEnhancementResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUncheckedUpdateManyWithoutListingNestedInput
    userResponses?: UserListingResponseUncheckedUpdateManyWithoutListingNestedInput
  }

  export type EnhancementValueUpsertWithWhereUniqueWithoutResultInput = {
    where: EnhancementValueWhereUniqueInput
    update: XOR<EnhancementValueUpdateWithoutResultInput, EnhancementValueUncheckedUpdateWithoutResultInput>
    create: XOR<EnhancementValueCreateWithoutResultInput, EnhancementValueUncheckedCreateWithoutResultInput>
  }

  export type EnhancementValueUpdateWithWhereUniqueWithoutResultInput = {
    where: EnhancementValueWhereUniqueInput
    data: XOR<EnhancementValueUpdateWithoutResultInput, EnhancementValueUncheckedUpdateWithoutResultInput>
  }

  export type EnhancementValueUpdateManyWithWhereWithoutResultInput = {
    where: EnhancementValueScalarWhereInput
    data: XOR<EnhancementValueUpdateManyMutationInput, EnhancementValueUncheckedUpdateManyWithoutResultInput>
  }

  export type EnhancementResultCreateWithoutIndividualValuesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
    enhancement: EnhancementCreateNestedOneWithoutResultsInput
    listing: ListingCreateNestedOneWithoutEnhancementResultsInput
  }

  export type EnhancementResultUncheckedCreateWithoutIndividualValuesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enhancementId: string
    listingId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
  }

  export type EnhancementResultCreateOrConnectWithoutIndividualValuesInput = {
    where: EnhancementResultWhereUniqueInput
    create: XOR<EnhancementResultCreateWithoutIndividualValuesInput, EnhancementResultUncheckedCreateWithoutIndividualValuesInput>
  }

  export type EnhancementColumnCreateWithoutValuesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
    enhancement: EnhancementCreateNestedOneWithoutColumnsInput
  }

  export type EnhancementColumnUncheckedCreateWithoutValuesInput = {
    id?: string
    createdAt?: Date | string
    enhancementId: string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
  }

  export type EnhancementColumnCreateOrConnectWithoutValuesInput = {
    where: EnhancementColumnWhereUniqueInput
    create: XOR<EnhancementColumnCreateWithoutValuesInput, EnhancementColumnUncheckedCreateWithoutValuesInput>
  }

  export type EnhancementResultUpsertWithoutIndividualValuesInput = {
    update: XOR<EnhancementResultUpdateWithoutIndividualValuesInput, EnhancementResultUncheckedUpdateWithoutIndividualValuesInput>
    create: XOR<EnhancementResultCreateWithoutIndividualValuesInput, EnhancementResultUncheckedCreateWithoutIndividualValuesInput>
    where?: EnhancementResultWhereInput
  }

  export type EnhancementResultUpdateToOneWithWhereWithoutIndividualValuesInput = {
    where?: EnhancementResultWhereInput
    data: XOR<EnhancementResultUpdateWithoutIndividualValuesInput, EnhancementResultUncheckedUpdateWithoutIndividualValuesInput>
  }

  export type EnhancementResultUpdateWithoutIndividualValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    enhancement?: EnhancementUpdateOneRequiredWithoutResultsNestedInput
    listing?: ListingUpdateOneRequiredWithoutEnhancementResultsNestedInput
  }

  export type EnhancementResultUncheckedUpdateWithoutIndividualValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnhancementColumnUpsertWithoutValuesInput = {
    update: XOR<EnhancementColumnUpdateWithoutValuesInput, EnhancementColumnUncheckedUpdateWithoutValuesInput>
    create: XOR<EnhancementColumnCreateWithoutValuesInput, EnhancementColumnUncheckedCreateWithoutValuesInput>
    where?: EnhancementColumnWhereInput
  }

  export type EnhancementColumnUpdateToOneWithWhereWithoutValuesInput = {
    where?: EnhancementColumnWhereInput
    data: XOR<EnhancementColumnUpdateWithoutValuesInput, EnhancementColumnUncheckedUpdateWithoutValuesInput>
  }

  export type EnhancementColumnUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    enhancement?: EnhancementUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type EnhancementColumnUncheckedUpdateWithoutValuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UserListingResponseCreateWithoutSavedQueryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    response: string
    notes?: string | null
    listing: ListingCreateNestedOneWithoutUserResponsesInput
  }

  export type UserListingResponseUncheckedCreateWithoutSavedQueryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    listingId: string
    response: string
    notes?: string | null
  }

  export type UserListingResponseCreateOrConnectWithoutSavedQueryInput = {
    where: UserListingResponseWhereUniqueInput
    create: XOR<UserListingResponseCreateWithoutSavedQueryInput, UserListingResponseUncheckedCreateWithoutSavedQueryInput>
  }

  export type UserListingResponseCreateManySavedQueryInputEnvelope = {
    data: UserListingResponseCreateManySavedQueryInput | UserListingResponseCreateManySavedQueryInput[]
    skipDuplicates?: boolean
  }

  export type UserListingResponseUpsertWithWhereUniqueWithoutSavedQueryInput = {
    where: UserListingResponseWhereUniqueInput
    update: XOR<UserListingResponseUpdateWithoutSavedQueryInput, UserListingResponseUncheckedUpdateWithoutSavedQueryInput>
    create: XOR<UserListingResponseCreateWithoutSavedQueryInput, UserListingResponseUncheckedCreateWithoutSavedQueryInput>
  }

  export type UserListingResponseUpdateWithWhereUniqueWithoutSavedQueryInput = {
    where: UserListingResponseWhereUniqueInput
    data: XOR<UserListingResponseUpdateWithoutSavedQueryInput, UserListingResponseUncheckedUpdateWithoutSavedQueryInput>
  }

  export type UserListingResponseUpdateManyWithWhereWithoutSavedQueryInput = {
    where: UserListingResponseScalarWhereInput
    data: XOR<UserListingResponseUpdateManyMutationInput, UserListingResponseUncheckedUpdateManyWithoutSavedQueryInput>
  }

  export type SavedQueryCreateWithoutResponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name: string
    description?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    enhancementQuery: string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: Date | string | null
    lastScrapeId?: string | null
  }

  export type SavedQueryUncheckedCreateWithoutResponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    name: string
    description?: string | null
    searchType: string
    searchQuery: JsonNullValueInput | InputJsonValue
    enhancementQuery: string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: Date | string | null
    lastScrapeId?: string | null
  }

  export type SavedQueryCreateOrConnectWithoutResponsesInput = {
    where: SavedQueryWhereUniqueInput
    create: XOR<SavedQueryCreateWithoutResponsesInput, SavedQueryUncheckedCreateWithoutResponsesInput>
  }

  export type ListingCreateWithoutUserResponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingCreateNestedManyWithoutListingInput
    enhancementResults?: EnhancementResultCreateNestedManyWithoutListingInput
  }

  export type ListingUncheckedCreateWithoutUserResponsesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    zpid: string
    detailUrl: string
    imgSrc?: string | null
    photos?: ListingCreatephotosInput | string[]
    hasImage?: boolean
    has3DModel?: boolean
    hasVideo?: boolean
    statusType: string
    statusText: string
    price: number
    priceFormatted?: string | null
    currency?: string
    address: string
    addressStreet?: string | null
    addressCity?: string | null
    addressState?: string | null
    addressZipcode?: string | null
    latitude?: number | null
    longitude?: number | null
    beds?: number | null
    baths?: number | null
    area?: number | null
    homeType?: string | null
    availabilityDate?: Date | string | null
    scrapedAt?: Date | string
    brokerName?: string | null
    zestimate?: number | null
    rentZestimate?: number | null
    isFeaturedListing?: boolean
    rawData: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUncheckedCreateNestedManyWithoutListingInput
    enhancementResults?: EnhancementResultUncheckedCreateNestedManyWithoutListingInput
  }

  export type ListingCreateOrConnectWithoutUserResponsesInput = {
    where: ListingWhereUniqueInput
    create: XOR<ListingCreateWithoutUserResponsesInput, ListingUncheckedCreateWithoutUserResponsesInput>
  }

  export type SavedQueryUpsertWithoutResponsesInput = {
    update: XOR<SavedQueryUpdateWithoutResponsesInput, SavedQueryUncheckedUpdateWithoutResponsesInput>
    create: XOR<SavedQueryCreateWithoutResponsesInput, SavedQueryUncheckedCreateWithoutResponsesInput>
    where?: SavedQueryWhereInput
  }

  export type SavedQueryUpdateToOneWithWhereWithoutResponsesInput = {
    where?: SavedQueryWhereInput
    data: XOR<SavedQueryUpdateWithoutResponsesInput, SavedQueryUncheckedUpdateWithoutResponsesInput>
  }

  export type SavedQueryUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    enhancementQuery?: StringFieldUpdateOperationsInput | string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScrapeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SavedQueryUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    searchType?: StringFieldUpdateOperationsInput | string
    searchQuery?: JsonNullValueInput | InputJsonValue
    enhancementQuery?: StringFieldUpdateOperationsInput | string
    columnWeights?: JsonNullValueInput | InputJsonValue
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScrapeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListingUpsertWithoutUserResponsesInput = {
    update: XOR<ListingUpdateWithoutUserResponsesInput, ListingUncheckedUpdateWithoutUserResponsesInput>
    create: XOR<ListingCreateWithoutUserResponsesInput, ListingUncheckedCreateWithoutUserResponsesInput>
    where?: ListingWhereInput
  }

  export type ListingUpdateToOneWithWhereWithoutUserResponsesInput = {
    where?: ListingWhereInput
    data: XOR<ListingUpdateWithoutUserResponsesInput, ListingUncheckedUpdateWithoutUserResponsesInput>
  }

  export type ListingUpdateWithoutUserResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUpdateManyWithoutListingNestedInput
    enhancementResults?: EnhancementResultUpdateManyWithoutListingNestedInput
  }

  export type ListingUncheckedUpdateWithoutUserResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    zpid?: StringFieldUpdateOperationsInput | string
    detailUrl?: StringFieldUpdateOperationsInput | string
    imgSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: ListingUpdatephotosInput | string[]
    hasImage?: BoolFieldUpdateOperationsInput | boolean
    has3DModel?: BoolFieldUpdateOperationsInput | boolean
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    statusType?: StringFieldUpdateOperationsInput | string
    statusText?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    priceFormatted?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    addressStreet?: NullableStringFieldUpdateOperationsInput | string | null
    addressCity?: NullableStringFieldUpdateOperationsInput | string | null
    addressState?: NullableStringFieldUpdateOperationsInput | string | null
    addressZipcode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    beds?: NullableIntFieldUpdateOperationsInput | number | null
    baths?: NullableFloatFieldUpdateOperationsInput | number | null
    area?: NullableIntFieldUpdateOperationsInput | number | null
    homeType?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brokerName?: NullableStringFieldUpdateOperationsInput | string | null
    zestimate?: NullableIntFieldUpdateOperationsInput | number | null
    rentZestimate?: NullableIntFieldUpdateOperationsInput | number | null
    isFeaturedListing?: BoolFieldUpdateOperationsInput | boolean
    rawData?: JsonNullValueInput | InputJsonValue
    scrapes?: ScrapeListingUncheckedUpdateManyWithoutListingNestedInput
    enhancementResults?: EnhancementResultUncheckedUpdateManyWithoutListingNestedInput
  }

  export type ScrapeListingCreateManyScrapeInput = {
    listingId: string
    foundAt?: Date | string
  }

  export type EnhancementCreateManyScrapeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    query: string
    taskId?: string | null
    status: string
    error?: string | null
    completedAt?: Date | string | null
    processedCount?: number
    totalCount?: number
  }

  export type ScrapeListingUpdateWithoutScrapeInput = {
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listing?: ListingUpdateOneRequiredWithoutScrapesNestedInput
  }

  export type ScrapeListingUncheckedUpdateWithoutScrapeInput = {
    listingId?: StringFieldUpdateOperationsInput | string
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeListingUncheckedUpdateManyWithoutScrapeInput = {
    listingId?: StringFieldUpdateOperationsInput | string
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnhancementUpdateWithoutScrapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    columns?: EnhancementColumnUpdateManyWithoutEnhancementNestedInput
    results?: EnhancementResultUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementUncheckedUpdateWithoutScrapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
    columns?: EnhancementColumnUncheckedUpdateManyWithoutEnhancementNestedInput
    results?: EnhancementResultUncheckedUpdateManyWithoutEnhancementNestedInput
  }

  export type EnhancementUncheckedUpdateManyWithoutScrapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    query?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    processedCount?: IntFieldUpdateOperationsInput | number
    totalCount?: IntFieldUpdateOperationsInput | number
  }

  export type ScrapeListingCreateManyListingInput = {
    scrapeId: string
    foundAt?: Date | string
  }

  export type EnhancementResultCreateManyListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enhancementId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
  }

  export type UserListingResponseCreateManyListingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    savedQueryId: string
    response: string
    notes?: string | null
  }

  export type ScrapeListingUpdateWithoutListingInput = {
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scrape?: ScrapeUpdateOneRequiredWithoutListingsNestedInput
  }

  export type ScrapeListingUncheckedUpdateWithoutListingInput = {
    scrapeId?: StringFieldUpdateOperationsInput | string
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScrapeListingUncheckedUpdateManyWithoutListingInput = {
    scrapeId?: StringFieldUpdateOperationsInput | string
    foundAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnhancementResultUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    enhancement?: EnhancementUpdateOneRequiredWithoutResultsNestedInput
    individualValues?: EnhancementValueUpdateManyWithoutResultNestedInput
  }

  export type EnhancementResultUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    individualValues?: EnhancementValueUncheckedUpdateManyWithoutResultNestedInput
  }

  export type EnhancementResultUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserListingResponseUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    savedQuery?: SavedQueryUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type UserListingResponseUncheckedUpdateWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    savedQueryId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserListingResponseUncheckedUpdateManyWithoutListingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    savedQueryId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnhancementColumnCreateManyEnhancementInput = {
    id?: string
    createdAt?: Date | string
    name: string
    type: string
    description: string
    weight?: number
    order?: number
  }

  export type EnhancementResultCreateManyEnhancementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    listingId: string
    values: JsonNullValueInput | InputJsonValue
    compositeScore?: number
    status?: string
    error?: string | null
  }

  export type EnhancementColumnUpdateWithoutEnhancementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    values?: EnhancementValueUpdateManyWithoutColumnNestedInput
  }

  export type EnhancementColumnUncheckedUpdateWithoutEnhancementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    values?: EnhancementValueUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type EnhancementColumnUncheckedUpdateManyWithoutEnhancementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type EnhancementResultUpdateWithoutEnhancementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    listing?: ListingUpdateOneRequiredWithoutEnhancementResultsNestedInput
    individualValues?: EnhancementValueUpdateManyWithoutResultNestedInput
  }

  export type EnhancementResultUncheckedUpdateWithoutEnhancementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    individualValues?: EnhancementValueUncheckedUpdateManyWithoutResultNestedInput
  }

  export type EnhancementResultUncheckedUpdateManyWithoutEnhancementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listingId?: StringFieldUpdateOperationsInput | string
    values?: JsonNullValueInput | InputJsonValue
    compositeScore?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EnhancementValueCreateManyColumnInput = {
    id?: string
    createdAt?: Date | string
    resultId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
  }

  export type EnhancementValueUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
    result?: EnhancementResultUpdateOneRequiredWithoutIndividualValuesNestedInput
  }

  export type EnhancementValueUncheckedUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultId?: StringFieldUpdateOperationsInput | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type EnhancementValueUncheckedUpdateManyWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resultId?: StringFieldUpdateOperationsInput | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type EnhancementValueCreateManyResultInput = {
    id?: string
    createdAt?: Date | string
    columnId: string
    enhancementId: string
    listingId: string
    normalizedValue: number
  }

  export type EnhancementValueUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
    column?: EnhancementColumnUpdateOneRequiredWithoutValuesNestedInput
  }

  export type EnhancementValueUncheckedUpdateWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnId?: StringFieldUpdateOperationsInput | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type EnhancementValueUncheckedUpdateManyWithoutResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columnId?: StringFieldUpdateOperationsInput | string
    enhancementId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    normalizedValue?: FloatFieldUpdateOperationsInput | number
  }

  export type UserListingResponseCreateManySavedQueryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    listingId: string
    response: string
    notes?: string | null
  }

  export type UserListingResponseUpdateWithoutSavedQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    listing?: ListingUpdateOneRequiredWithoutUserResponsesNestedInput
  }

  export type UserListingResponseUncheckedUpdateWithoutSavedQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserListingResponseUncheckedUpdateManyWithoutSavedQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    listingId?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}