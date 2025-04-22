
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
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model SurveyLinks
 * 
 */
export type SurveyLinks = $Result.DefaultSelection<Prisma.$SurveyLinksPayload>
/**
 * Model SurveyResponses
 * 
 */
export type SurveyResponses = $Result.DefaultSelection<Prisma.$SurveyResponsesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EventStatus: {
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED'
};

export type EventStatus = (typeof EventStatus)[keyof typeof EventStatus]


export const LinkStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type LinkStatus = (typeof LinkStatus)[keyof typeof LinkStatus]

}

export type EventStatus = $Enums.EventStatus

export const EventStatus: typeof $Enums.EventStatus

export type LinkStatus = $Enums.LinkStatus

export const LinkStatus: typeof $Enums.LinkStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.events.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Events
   * const events = await prisma.events.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surveyLinks`: Exposes CRUD operations for the **SurveyLinks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyLinks
    * const surveyLinks = await prisma.surveyLinks.findMany()
    * ```
    */
  get surveyLinks(): Prisma.SurveyLinksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surveyResponses`: Exposes CRUD operations for the **SurveyResponses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurveyResponses
    * const surveyResponses = await prisma.surveyResponses.findMany()
    * ```
    */
  get surveyResponses(): Prisma.SurveyResponsesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Events: 'Events',
    SurveyLinks: 'SurveyLinks',
    SurveyResponses: 'SurveyResponses'
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
      modelProps: "events" | "surveyLinks" | "surveyResponses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      SurveyLinks: {
        payload: Prisma.$SurveyLinksPayload<ExtArgs>
        fields: Prisma.SurveyLinksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyLinksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyLinksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>
          }
          findFirst: {
            args: Prisma.SurveyLinksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyLinksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>
          }
          findMany: {
            args: Prisma.SurveyLinksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>[]
          }
          create: {
            args: Prisma.SurveyLinksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>
          }
          createMany: {
            args: Prisma.SurveyLinksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurveyLinksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>[]
          }
          delete: {
            args: Prisma.SurveyLinksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>
          }
          update: {
            args: Prisma.SurveyLinksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>
          }
          deleteMany: {
            args: Prisma.SurveyLinksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyLinksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurveyLinksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>[]
          }
          upsert: {
            args: Prisma.SurveyLinksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyLinksPayload>
          }
          aggregate: {
            args: Prisma.SurveyLinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveyLinks>
          }
          groupBy: {
            args: Prisma.SurveyLinksGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyLinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyLinksCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyLinksCountAggregateOutputType> | number
          }
        }
      }
      SurveyResponses: {
        payload: Prisma.$SurveyResponsesPayload<ExtArgs>
        fields: Prisma.SurveyResponsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurveyResponsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurveyResponsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>
          }
          findFirst: {
            args: Prisma.SurveyResponsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurveyResponsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>
          }
          findMany: {
            args: Prisma.SurveyResponsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>[]
          }
          create: {
            args: Prisma.SurveyResponsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>
          }
          createMany: {
            args: Prisma.SurveyResponsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurveyResponsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>[]
          }
          delete: {
            args: Prisma.SurveyResponsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>
          }
          update: {
            args: Prisma.SurveyResponsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>
          }
          deleteMany: {
            args: Prisma.SurveyResponsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurveyResponsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurveyResponsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>[]
          }
          upsert: {
            args: Prisma.SurveyResponsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurveyResponsesPayload>
          }
          aggregate: {
            args: Prisma.SurveyResponsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurveyResponses>
          }
          groupBy: {
            args: Prisma.SurveyResponsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveyResponsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurveyResponsesCountArgs<ExtArgs>
            result: $Utils.Optional<SurveyResponsesCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    events?: EventsOmit
    surveyLinks?: SurveyLinksOmit
    surveyResponses?: SurveyResponsesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type SurveyLinksCountOutputType
   */

  export type SurveyLinksCountOutputType = {
    responses: number
  }

  export type SurveyLinksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | SurveyLinksCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * SurveyLinksCountOutputType without action
   */
  export type SurveyLinksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinksCountOutputType
     */
    select?: SurveyLinksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SurveyLinksCountOutputType without action
   */
  export type SurveyLinksCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyResponsesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    id: number | null
  }

  export type EventsSumAggregateOutputType = {
    id: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: number | null
    title: string | null
    location: string | null
    status: $Enums.EventStatus | null
    createdAt: Date | null
    eventDate: Date | null
    generatedLink: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    location: string | null
    status: $Enums.EventStatus | null
    createdAt: Date | null
    eventDate: Date | null
    generatedLink: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    title: number
    location: number
    status: number
    createdAt: number
    eventDate: number
    generatedLink: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    id?: true
  }

  export type EventsSumAggregateInputType = {
    id?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    title?: true
    location?: true
    status?: true
    createdAt?: true
    eventDate?: true
    generatedLink?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    title?: true
    location?: true
    status?: true
    createdAt?: true
    eventDate?: true
    generatedLink?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    title?: true
    location?: true
    status?: true
    createdAt?: true
    eventDate?: true
    generatedLink?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: number
    title: string
    location: string
    status: $Enums.EventStatus
    createdAt: Date
    eventDate: Date
    generatedLink: string | null
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    eventDate?: boolean
    generatedLink?: boolean
    surveyLink?: boolean | Events$surveyLinkArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    eventDate?: boolean
    generatedLink?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    eventDate?: boolean
    generatedLink?: boolean
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    title?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    eventDate?: boolean
    generatedLink?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "location" | "status" | "createdAt" | "eventDate" | "generatedLink", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveyLink?: boolean | Events$surveyLinkArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      surveyLink: Prisma.$SurveyLinksPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      location: string
      status: $Enums.EventStatus
      createdAt: Date
      eventDate: Date
      generatedLink: string | null
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
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
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surveyLink<T extends Events$surveyLinkArgs<ExtArgs> = {}>(args?: Subset<T, Events$surveyLinkArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'Int'>
    readonly title: FieldRef<"Events", 'String'>
    readonly location: FieldRef<"Events", 'String'>
    readonly status: FieldRef<"Events", 'EventStatus'>
    readonly createdAt: FieldRef<"Events", 'DateTime'>
    readonly eventDate: FieldRef<"Events", 'DateTime'>
    readonly generatedLink: FieldRef<"Events", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events.surveyLink
   */
  export type Events$surveyLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    where?: SurveyLinksWhereInput
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model SurveyLinks
   */

  export type AggregateSurveyLinks = {
    _count: SurveyLinksCountAggregateOutputType | null
    _avg: SurveyLinksAvgAggregateOutputType | null
    _sum: SurveyLinksSumAggregateOutputType | null
    _min: SurveyLinksMinAggregateOutputType | null
    _max: SurveyLinksMaxAggregateOutputType | null
  }

  export type SurveyLinksAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type SurveyLinksSumAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type SurveyLinksMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    status: $Enums.LinkStatus | null
    generatedLink: string | null
    eventId: number | null
  }

  export type SurveyLinksMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    status: $Enums.LinkStatus | null
    generatedLink: string | null
    eventId: number | null
  }

  export type SurveyLinksCountAggregateOutputType = {
    id: number
    createdAt: number
    status: number
    generatedLink: number
    eventId: number
    _all: number
  }


  export type SurveyLinksAvgAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type SurveyLinksSumAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type SurveyLinksMinAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    generatedLink?: true
    eventId?: true
  }

  export type SurveyLinksMaxAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    generatedLink?: true
    eventId?: true
  }

  export type SurveyLinksCountAggregateInputType = {
    id?: true
    createdAt?: true
    status?: true
    generatedLink?: true
    eventId?: true
    _all?: true
  }

  export type SurveyLinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyLinks to aggregate.
     */
    where?: SurveyLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyLinks to fetch.
     */
    orderBy?: SurveyLinksOrderByWithRelationInput | SurveyLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyLinks
    **/
    _count?: true | SurveyLinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyLinksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveyLinksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyLinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyLinksMaxAggregateInputType
  }

  export type GetSurveyLinksAggregateType<T extends SurveyLinksAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyLinks[P]>
      : GetScalarType<T[P], AggregateSurveyLinks[P]>
  }




  export type SurveyLinksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyLinksWhereInput
    orderBy?: SurveyLinksOrderByWithAggregationInput | SurveyLinksOrderByWithAggregationInput[]
    by: SurveyLinksScalarFieldEnum[] | SurveyLinksScalarFieldEnum
    having?: SurveyLinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyLinksCountAggregateInputType | true
    _avg?: SurveyLinksAvgAggregateInputType
    _sum?: SurveyLinksSumAggregateInputType
    _min?: SurveyLinksMinAggregateInputType
    _max?: SurveyLinksMaxAggregateInputType
  }

  export type SurveyLinksGroupByOutputType = {
    id: number
    createdAt: Date
    status: $Enums.LinkStatus
    generatedLink: string | null
    eventId: number | null
    _count: SurveyLinksCountAggregateOutputType | null
    _avg: SurveyLinksAvgAggregateOutputType | null
    _sum: SurveyLinksSumAggregateOutputType | null
    _min: SurveyLinksMinAggregateOutputType | null
    _max: SurveyLinksMaxAggregateOutputType | null
  }

  type GetSurveyLinksGroupByPayload<T extends SurveyLinksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyLinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyLinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyLinksGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyLinksGroupByOutputType[P]>
        }
      >
    >


  export type SurveyLinksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    generatedLink?: boolean
    eventId?: boolean
    event?: boolean | SurveyLinks$eventArgs<ExtArgs>
    responses?: boolean | SurveyLinks$responsesArgs<ExtArgs>
    _count?: boolean | SurveyLinksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surveyLinks"]>

  export type SurveyLinksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    generatedLink?: boolean
    eventId?: boolean
    event?: boolean | SurveyLinks$eventArgs<ExtArgs>
  }, ExtArgs["result"]["surveyLinks"]>

  export type SurveyLinksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    status?: boolean
    generatedLink?: boolean
    eventId?: boolean
    event?: boolean | SurveyLinks$eventArgs<ExtArgs>
  }, ExtArgs["result"]["surveyLinks"]>

  export type SurveyLinksSelectScalar = {
    id?: boolean
    createdAt?: boolean
    status?: boolean
    generatedLink?: boolean
    eventId?: boolean
  }

  export type SurveyLinksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "status" | "generatedLink" | "eventId", ExtArgs["result"]["surveyLinks"]>
  export type SurveyLinksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | SurveyLinks$eventArgs<ExtArgs>
    responses?: boolean | SurveyLinks$responsesArgs<ExtArgs>
    _count?: boolean | SurveyLinksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SurveyLinksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | SurveyLinks$eventArgs<ExtArgs>
  }
  export type SurveyLinksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | SurveyLinks$eventArgs<ExtArgs>
  }

  export type $SurveyLinksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveyLinks"
    objects: {
      event: Prisma.$EventsPayload<ExtArgs> | null
      responses: Prisma.$SurveyResponsesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      status: $Enums.LinkStatus
      generatedLink: string | null
      eventId: number | null
    }, ExtArgs["result"]["surveyLinks"]>
    composites: {}
  }

  type SurveyLinksGetPayload<S extends boolean | null | undefined | SurveyLinksDefaultArgs> = $Result.GetResult<Prisma.$SurveyLinksPayload, S>

  type SurveyLinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurveyLinksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurveyLinksCountAggregateInputType | true
    }

  export interface SurveyLinksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveyLinks'], meta: { name: 'SurveyLinks' } }
    /**
     * Find zero or one SurveyLinks that matches the filter.
     * @param {SurveyLinksFindUniqueArgs} args - Arguments to find a SurveyLinks
     * @example
     * // Get one SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyLinksFindUniqueArgs>(args: SelectSubset<T, SurveyLinksFindUniqueArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SurveyLinks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurveyLinksFindUniqueOrThrowArgs} args - Arguments to find a SurveyLinks
     * @example
     * // Get one SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyLinksFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyLinksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurveyLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksFindFirstArgs} args - Arguments to find a SurveyLinks
     * @example
     * // Get one SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyLinksFindFirstArgs>(args?: SelectSubset<T, SurveyLinksFindFirstArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurveyLinks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksFindFirstOrThrowArgs} args - Arguments to find a SurveyLinks
     * @example
     * // Get one SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyLinksFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyLinksFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SurveyLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.findMany()
     * 
     * // Get first 10 SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyLinksWithIdOnly = await prisma.surveyLinks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyLinksFindManyArgs>(args?: SelectSubset<T, SurveyLinksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SurveyLinks.
     * @param {SurveyLinksCreateArgs} args - Arguments to create a SurveyLinks.
     * @example
     * // Create one SurveyLinks
     * const SurveyLinks = await prisma.surveyLinks.create({
     *   data: {
     *     // ... data to create a SurveyLinks
     *   }
     * })
     * 
     */
    create<T extends SurveyLinksCreateArgs>(args: SelectSubset<T, SurveyLinksCreateArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SurveyLinks.
     * @param {SurveyLinksCreateManyArgs} args - Arguments to create many SurveyLinks.
     * @example
     * // Create many SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyLinksCreateManyArgs>(args?: SelectSubset<T, SurveyLinksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurveyLinks and returns the data saved in the database.
     * @param {SurveyLinksCreateManyAndReturnArgs} args - Arguments to create many SurveyLinks.
     * @example
     * // Create many SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurveyLinks and only return the `id`
     * const surveyLinksWithIdOnly = await prisma.surveyLinks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurveyLinksCreateManyAndReturnArgs>(args?: SelectSubset<T, SurveyLinksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SurveyLinks.
     * @param {SurveyLinksDeleteArgs} args - Arguments to delete one SurveyLinks.
     * @example
     * // Delete one SurveyLinks
     * const SurveyLinks = await prisma.surveyLinks.delete({
     *   where: {
     *     // ... filter to delete one SurveyLinks
     *   }
     * })
     * 
     */
    delete<T extends SurveyLinksDeleteArgs>(args: SelectSubset<T, SurveyLinksDeleteArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SurveyLinks.
     * @param {SurveyLinksUpdateArgs} args - Arguments to update one SurveyLinks.
     * @example
     * // Update one SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyLinksUpdateArgs>(args: SelectSubset<T, SurveyLinksUpdateArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SurveyLinks.
     * @param {SurveyLinksDeleteManyArgs} args - Arguments to filter SurveyLinks to delete.
     * @example
     * // Delete a few SurveyLinks
     * const { count } = await prisma.surveyLinks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyLinksDeleteManyArgs>(args?: SelectSubset<T, SurveyLinksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyLinksUpdateManyArgs>(args: SelectSubset<T, SurveyLinksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyLinks and returns the data updated in the database.
     * @param {SurveyLinksUpdateManyAndReturnArgs} args - Arguments to update many SurveyLinks.
     * @example
     * // Update many SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SurveyLinks and only return the `id`
     * const surveyLinksWithIdOnly = await prisma.surveyLinks.updateManyAndReturn({
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
    updateManyAndReturn<T extends SurveyLinksUpdateManyAndReturnArgs>(args: SelectSubset<T, SurveyLinksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SurveyLinks.
     * @param {SurveyLinksUpsertArgs} args - Arguments to update or create a SurveyLinks.
     * @example
     * // Update or create a SurveyLinks
     * const surveyLinks = await prisma.surveyLinks.upsert({
     *   create: {
     *     // ... data to create a SurveyLinks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyLinks we want to update
     *   }
     * })
     */
    upsert<T extends SurveyLinksUpsertArgs>(args: SelectSubset<T, SurveyLinksUpsertArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SurveyLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksCountArgs} args - Arguments to filter SurveyLinks to count.
     * @example
     * // Count the number of SurveyLinks
     * const count = await prisma.surveyLinks.count({
     *   where: {
     *     // ... the filter for the SurveyLinks we want to count
     *   }
     * })
    **/
    count<T extends SurveyLinksCountArgs>(
      args?: Subset<T, SurveyLinksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyLinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurveyLinksAggregateArgs>(args: Subset<T, SurveyLinksAggregateArgs>): Prisma.PrismaPromise<GetSurveyLinksAggregateType<T>>

    /**
     * Group by SurveyLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyLinksGroupByArgs} args - Group by arguments.
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
      T extends SurveyLinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyLinksGroupByArgs['orderBy'] }
        : { orderBy?: SurveyLinksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurveyLinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveyLinks model
   */
  readonly fields: SurveyLinksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyLinks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyLinksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends SurveyLinks$eventArgs<ExtArgs> = {}>(args?: Subset<T, SurveyLinks$eventArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    responses<T extends SurveyLinks$responsesArgs<ExtArgs> = {}>(args?: Subset<T, SurveyLinks$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SurveyLinks model
   */
  interface SurveyLinksFieldRefs {
    readonly id: FieldRef<"SurveyLinks", 'Int'>
    readonly createdAt: FieldRef<"SurveyLinks", 'DateTime'>
    readonly status: FieldRef<"SurveyLinks", 'LinkStatus'>
    readonly generatedLink: FieldRef<"SurveyLinks", 'String'>
    readonly eventId: FieldRef<"SurveyLinks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SurveyLinks findUnique
   */
  export type SurveyLinksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * Filter, which SurveyLinks to fetch.
     */
    where: SurveyLinksWhereUniqueInput
  }

  /**
   * SurveyLinks findUniqueOrThrow
   */
  export type SurveyLinksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * Filter, which SurveyLinks to fetch.
     */
    where: SurveyLinksWhereUniqueInput
  }

  /**
   * SurveyLinks findFirst
   */
  export type SurveyLinksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * Filter, which SurveyLinks to fetch.
     */
    where?: SurveyLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyLinks to fetch.
     */
    orderBy?: SurveyLinksOrderByWithRelationInput | SurveyLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyLinks.
     */
    cursor?: SurveyLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyLinks.
     */
    distinct?: SurveyLinksScalarFieldEnum | SurveyLinksScalarFieldEnum[]
  }

  /**
   * SurveyLinks findFirstOrThrow
   */
  export type SurveyLinksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * Filter, which SurveyLinks to fetch.
     */
    where?: SurveyLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyLinks to fetch.
     */
    orderBy?: SurveyLinksOrderByWithRelationInput | SurveyLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyLinks.
     */
    cursor?: SurveyLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyLinks.
     */
    distinct?: SurveyLinksScalarFieldEnum | SurveyLinksScalarFieldEnum[]
  }

  /**
   * SurveyLinks findMany
   */
  export type SurveyLinksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * Filter, which SurveyLinks to fetch.
     */
    where?: SurveyLinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyLinks to fetch.
     */
    orderBy?: SurveyLinksOrderByWithRelationInput | SurveyLinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyLinks.
     */
    cursor?: SurveyLinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyLinks.
     */
    skip?: number
    distinct?: SurveyLinksScalarFieldEnum | SurveyLinksScalarFieldEnum[]
  }

  /**
   * SurveyLinks create
   */
  export type SurveyLinksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveyLinks.
     */
    data: XOR<SurveyLinksCreateInput, SurveyLinksUncheckedCreateInput>
  }

  /**
   * SurveyLinks createMany
   */
  export type SurveyLinksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveyLinks.
     */
    data: SurveyLinksCreateManyInput | SurveyLinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurveyLinks createManyAndReturn
   */
  export type SurveyLinksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * The data used to create many SurveyLinks.
     */
    data: SurveyLinksCreateManyInput | SurveyLinksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveyLinks update
   */
  export type SurveyLinksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveyLinks.
     */
    data: XOR<SurveyLinksUpdateInput, SurveyLinksUncheckedUpdateInput>
    /**
     * Choose, which SurveyLinks to update.
     */
    where: SurveyLinksWhereUniqueInput
  }

  /**
   * SurveyLinks updateMany
   */
  export type SurveyLinksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveyLinks.
     */
    data: XOR<SurveyLinksUpdateManyMutationInput, SurveyLinksUncheckedUpdateManyInput>
    /**
     * Filter which SurveyLinks to update
     */
    where?: SurveyLinksWhereInput
    /**
     * Limit how many SurveyLinks to update.
     */
    limit?: number
  }

  /**
   * SurveyLinks updateManyAndReturn
   */
  export type SurveyLinksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * The data used to update SurveyLinks.
     */
    data: XOR<SurveyLinksUpdateManyMutationInput, SurveyLinksUncheckedUpdateManyInput>
    /**
     * Filter which SurveyLinks to update
     */
    where?: SurveyLinksWhereInput
    /**
     * Limit how many SurveyLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveyLinks upsert
   */
  export type SurveyLinksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveyLinks to update in case it exists.
     */
    where: SurveyLinksWhereUniqueInput
    /**
     * In case the SurveyLinks found by the `where` argument doesn't exist, create a new SurveyLinks with this data.
     */
    create: XOR<SurveyLinksCreateInput, SurveyLinksUncheckedCreateInput>
    /**
     * In case the SurveyLinks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyLinksUpdateInput, SurveyLinksUncheckedUpdateInput>
  }

  /**
   * SurveyLinks delete
   */
  export type SurveyLinksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    /**
     * Filter which SurveyLinks to delete.
     */
    where: SurveyLinksWhereUniqueInput
  }

  /**
   * SurveyLinks deleteMany
   */
  export type SurveyLinksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyLinks to delete
     */
    where?: SurveyLinksWhereInput
    /**
     * Limit how many SurveyLinks to delete.
     */
    limit?: number
  }

  /**
   * SurveyLinks.event
   */
  export type SurveyLinks$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
  }

  /**
   * SurveyLinks.responses
   */
  export type SurveyLinks$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    where?: SurveyResponsesWhereInput
    orderBy?: SurveyResponsesOrderByWithRelationInput | SurveyResponsesOrderByWithRelationInput[]
    cursor?: SurveyResponsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurveyResponsesScalarFieldEnum | SurveyResponsesScalarFieldEnum[]
  }

  /**
   * SurveyLinks without action
   */
  export type SurveyLinksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
  }


  /**
   * Model SurveyResponses
   */

  export type AggregateSurveyResponses = {
    _count: SurveyResponsesCountAggregateOutputType | null
    _avg: SurveyResponsesAvgAggregateOutputType | null
    _sum: SurveyResponsesSumAggregateOutputType | null
    _min: SurveyResponsesMinAggregateOutputType | null
    _max: SurveyResponsesMaxAggregateOutputType | null
  }

  export type SurveyResponsesAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    linkId: number | null
  }

  export type SurveyResponsesSumAggregateOutputType = {
    id: number | null
    rating: number | null
    linkId: number | null
  }

  export type SurveyResponsesMinAggregateOutputType = {
    id: number | null
    submittedAt: Date | null
    name: string | null
    rating: number | null
    feedback: string | null
    linkId: number | null
  }

  export type SurveyResponsesMaxAggregateOutputType = {
    id: number | null
    submittedAt: Date | null
    name: string | null
    rating: number | null
    feedback: string | null
    linkId: number | null
  }

  export type SurveyResponsesCountAggregateOutputType = {
    id: number
    submittedAt: number
    name: number
    rating: number
    feedback: number
    linkId: number
    _all: number
  }


  export type SurveyResponsesAvgAggregateInputType = {
    id?: true
    rating?: true
    linkId?: true
  }

  export type SurveyResponsesSumAggregateInputType = {
    id?: true
    rating?: true
    linkId?: true
  }

  export type SurveyResponsesMinAggregateInputType = {
    id?: true
    submittedAt?: true
    name?: true
    rating?: true
    feedback?: true
    linkId?: true
  }

  export type SurveyResponsesMaxAggregateInputType = {
    id?: true
    submittedAt?: true
    name?: true
    rating?: true
    feedback?: true
    linkId?: true
  }

  export type SurveyResponsesCountAggregateInputType = {
    id?: true
    submittedAt?: true
    name?: true
    rating?: true
    feedback?: true
    linkId?: true
    _all?: true
  }

  export type SurveyResponsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyResponses to aggregate.
     */
    where?: SurveyResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponsesOrderByWithRelationInput | SurveyResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurveyResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurveyResponses
    **/
    _count?: true | SurveyResponsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveyResponsesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveyResponsesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveyResponsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveyResponsesMaxAggregateInputType
  }

  export type GetSurveyResponsesAggregateType<T extends SurveyResponsesAggregateArgs> = {
        [P in keyof T & keyof AggregateSurveyResponses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurveyResponses[P]>
      : GetScalarType<T[P], AggregateSurveyResponses[P]>
  }




  export type SurveyResponsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurveyResponsesWhereInput
    orderBy?: SurveyResponsesOrderByWithAggregationInput | SurveyResponsesOrderByWithAggregationInput[]
    by: SurveyResponsesScalarFieldEnum[] | SurveyResponsesScalarFieldEnum
    having?: SurveyResponsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveyResponsesCountAggregateInputType | true
    _avg?: SurveyResponsesAvgAggregateInputType
    _sum?: SurveyResponsesSumAggregateInputType
    _min?: SurveyResponsesMinAggregateInputType
    _max?: SurveyResponsesMaxAggregateInputType
  }

  export type SurveyResponsesGroupByOutputType = {
    id: number
    submittedAt: Date
    name: string
    rating: number
    feedback: string
    linkId: number | null
    _count: SurveyResponsesCountAggregateOutputType | null
    _avg: SurveyResponsesAvgAggregateOutputType | null
    _sum: SurveyResponsesSumAggregateOutputType | null
    _min: SurveyResponsesMinAggregateOutputType | null
    _max: SurveyResponsesMaxAggregateOutputType | null
  }

  type GetSurveyResponsesGroupByPayload<T extends SurveyResponsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveyResponsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveyResponsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveyResponsesGroupByOutputType[P]>
            : GetScalarType<T[P], SurveyResponsesGroupByOutputType[P]>
        }
      >
    >


  export type SurveyResponsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submittedAt?: boolean
    name?: boolean
    rating?: boolean
    feedback?: boolean
    linkId?: boolean
    surveyLink?: boolean | SurveyResponses$surveyLinkArgs<ExtArgs>
  }, ExtArgs["result"]["surveyResponses"]>

  export type SurveyResponsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submittedAt?: boolean
    name?: boolean
    rating?: boolean
    feedback?: boolean
    linkId?: boolean
    surveyLink?: boolean | SurveyResponses$surveyLinkArgs<ExtArgs>
  }, ExtArgs["result"]["surveyResponses"]>

  export type SurveyResponsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submittedAt?: boolean
    name?: boolean
    rating?: boolean
    feedback?: boolean
    linkId?: boolean
    surveyLink?: boolean | SurveyResponses$surveyLinkArgs<ExtArgs>
  }, ExtArgs["result"]["surveyResponses"]>

  export type SurveyResponsesSelectScalar = {
    id?: boolean
    submittedAt?: boolean
    name?: boolean
    rating?: boolean
    feedback?: boolean
    linkId?: boolean
  }

  export type SurveyResponsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submittedAt" | "name" | "rating" | "feedback" | "linkId", ExtArgs["result"]["surveyResponses"]>
  export type SurveyResponsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveyLink?: boolean | SurveyResponses$surveyLinkArgs<ExtArgs>
  }
  export type SurveyResponsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveyLink?: boolean | SurveyResponses$surveyLinkArgs<ExtArgs>
  }
  export type SurveyResponsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    surveyLink?: boolean | SurveyResponses$surveyLinkArgs<ExtArgs>
  }

  export type $SurveyResponsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurveyResponses"
    objects: {
      surveyLink: Prisma.$SurveyLinksPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      submittedAt: Date
      name: string
      rating: number
      feedback: string
      linkId: number | null
    }, ExtArgs["result"]["surveyResponses"]>
    composites: {}
  }

  type SurveyResponsesGetPayload<S extends boolean | null | undefined | SurveyResponsesDefaultArgs> = $Result.GetResult<Prisma.$SurveyResponsesPayload, S>

  type SurveyResponsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurveyResponsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurveyResponsesCountAggregateInputType | true
    }

  export interface SurveyResponsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurveyResponses'], meta: { name: 'SurveyResponses' } }
    /**
     * Find zero or one SurveyResponses that matches the filter.
     * @param {SurveyResponsesFindUniqueArgs} args - Arguments to find a SurveyResponses
     * @example
     * // Get one SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurveyResponsesFindUniqueArgs>(args: SelectSubset<T, SurveyResponsesFindUniqueArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SurveyResponses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurveyResponsesFindUniqueOrThrowArgs} args - Arguments to find a SurveyResponses
     * @example
     * // Get one SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurveyResponsesFindUniqueOrThrowArgs>(args: SelectSubset<T, SurveyResponsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurveyResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesFindFirstArgs} args - Arguments to find a SurveyResponses
     * @example
     * // Get one SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurveyResponsesFindFirstArgs>(args?: SelectSubset<T, SurveyResponsesFindFirstArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurveyResponses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesFindFirstOrThrowArgs} args - Arguments to find a SurveyResponses
     * @example
     * // Get one SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurveyResponsesFindFirstOrThrowArgs>(args?: SelectSubset<T, SurveyResponsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SurveyResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.findMany()
     * 
     * // Get first 10 SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveyResponsesWithIdOnly = await prisma.surveyResponses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurveyResponsesFindManyArgs>(args?: SelectSubset<T, SurveyResponsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SurveyResponses.
     * @param {SurveyResponsesCreateArgs} args - Arguments to create a SurveyResponses.
     * @example
     * // Create one SurveyResponses
     * const SurveyResponses = await prisma.surveyResponses.create({
     *   data: {
     *     // ... data to create a SurveyResponses
     *   }
     * })
     * 
     */
    create<T extends SurveyResponsesCreateArgs>(args: SelectSubset<T, SurveyResponsesCreateArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SurveyResponses.
     * @param {SurveyResponsesCreateManyArgs} args - Arguments to create many SurveyResponses.
     * @example
     * // Create many SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurveyResponsesCreateManyArgs>(args?: SelectSubset<T, SurveyResponsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurveyResponses and returns the data saved in the database.
     * @param {SurveyResponsesCreateManyAndReturnArgs} args - Arguments to create many SurveyResponses.
     * @example
     * // Create many SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurveyResponses and only return the `id`
     * const surveyResponsesWithIdOnly = await prisma.surveyResponses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurveyResponsesCreateManyAndReturnArgs>(args?: SelectSubset<T, SurveyResponsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SurveyResponses.
     * @param {SurveyResponsesDeleteArgs} args - Arguments to delete one SurveyResponses.
     * @example
     * // Delete one SurveyResponses
     * const SurveyResponses = await prisma.surveyResponses.delete({
     *   where: {
     *     // ... filter to delete one SurveyResponses
     *   }
     * })
     * 
     */
    delete<T extends SurveyResponsesDeleteArgs>(args: SelectSubset<T, SurveyResponsesDeleteArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SurveyResponses.
     * @param {SurveyResponsesUpdateArgs} args - Arguments to update one SurveyResponses.
     * @example
     * // Update one SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurveyResponsesUpdateArgs>(args: SelectSubset<T, SurveyResponsesUpdateArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SurveyResponses.
     * @param {SurveyResponsesDeleteManyArgs} args - Arguments to filter SurveyResponses to delete.
     * @example
     * // Delete a few SurveyResponses
     * const { count } = await prisma.surveyResponses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurveyResponsesDeleteManyArgs>(args?: SelectSubset<T, SurveyResponsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurveyResponsesUpdateManyArgs>(args: SelectSubset<T, SurveyResponsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurveyResponses and returns the data updated in the database.
     * @param {SurveyResponsesUpdateManyAndReturnArgs} args - Arguments to update many SurveyResponses.
     * @example
     * // Update many SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SurveyResponses and only return the `id`
     * const surveyResponsesWithIdOnly = await prisma.surveyResponses.updateManyAndReturn({
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
    updateManyAndReturn<T extends SurveyResponsesUpdateManyAndReturnArgs>(args: SelectSubset<T, SurveyResponsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SurveyResponses.
     * @param {SurveyResponsesUpsertArgs} args - Arguments to update or create a SurveyResponses.
     * @example
     * // Update or create a SurveyResponses
     * const surveyResponses = await prisma.surveyResponses.upsert({
     *   create: {
     *     // ... data to create a SurveyResponses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurveyResponses we want to update
     *   }
     * })
     */
    upsert<T extends SurveyResponsesUpsertArgs>(args: SelectSubset<T, SurveyResponsesUpsertArgs<ExtArgs>>): Prisma__SurveyResponsesClient<$Result.GetResult<Prisma.$SurveyResponsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SurveyResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesCountArgs} args - Arguments to filter SurveyResponses to count.
     * @example
     * // Count the number of SurveyResponses
     * const count = await prisma.surveyResponses.count({
     *   where: {
     *     // ... the filter for the SurveyResponses we want to count
     *   }
     * })
    **/
    count<T extends SurveyResponsesCountArgs>(
      args?: Subset<T, SurveyResponsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveyResponsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurveyResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurveyResponsesAggregateArgs>(args: Subset<T, SurveyResponsesAggregateArgs>): Prisma.PrismaPromise<GetSurveyResponsesAggregateType<T>>

    /**
     * Group by SurveyResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveyResponsesGroupByArgs} args - Group by arguments.
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
      T extends SurveyResponsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurveyResponsesGroupByArgs['orderBy'] }
        : { orderBy?: SurveyResponsesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurveyResponsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveyResponsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurveyResponses model
   */
  readonly fields: SurveyResponsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurveyResponses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurveyResponsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    surveyLink<T extends SurveyResponses$surveyLinkArgs<ExtArgs> = {}>(args?: Subset<T, SurveyResponses$surveyLinkArgs<ExtArgs>>): Prisma__SurveyLinksClient<$Result.GetResult<Prisma.$SurveyLinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SurveyResponses model
   */
  interface SurveyResponsesFieldRefs {
    readonly id: FieldRef<"SurveyResponses", 'Int'>
    readonly submittedAt: FieldRef<"SurveyResponses", 'DateTime'>
    readonly name: FieldRef<"SurveyResponses", 'String'>
    readonly rating: FieldRef<"SurveyResponses", 'Int'>
    readonly feedback: FieldRef<"SurveyResponses", 'String'>
    readonly linkId: FieldRef<"SurveyResponses", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SurveyResponses findUnique
   */
  export type SurveyResponsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponses to fetch.
     */
    where: SurveyResponsesWhereUniqueInput
  }

  /**
   * SurveyResponses findUniqueOrThrow
   */
  export type SurveyResponsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponses to fetch.
     */
    where: SurveyResponsesWhereUniqueInput
  }

  /**
   * SurveyResponses findFirst
   */
  export type SurveyResponsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponses to fetch.
     */
    where?: SurveyResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponsesOrderByWithRelationInput | SurveyResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyResponses.
     */
    cursor?: SurveyResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyResponses.
     */
    distinct?: SurveyResponsesScalarFieldEnum | SurveyResponsesScalarFieldEnum[]
  }

  /**
   * SurveyResponses findFirstOrThrow
   */
  export type SurveyResponsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponses to fetch.
     */
    where?: SurveyResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponsesOrderByWithRelationInput | SurveyResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurveyResponses.
     */
    cursor?: SurveyResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurveyResponses.
     */
    distinct?: SurveyResponsesScalarFieldEnum | SurveyResponsesScalarFieldEnum[]
  }

  /**
   * SurveyResponses findMany
   */
  export type SurveyResponsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * Filter, which SurveyResponses to fetch.
     */
    where?: SurveyResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurveyResponses to fetch.
     */
    orderBy?: SurveyResponsesOrderByWithRelationInput | SurveyResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurveyResponses.
     */
    cursor?: SurveyResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurveyResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurveyResponses.
     */
    skip?: number
    distinct?: SurveyResponsesScalarFieldEnum | SurveyResponsesScalarFieldEnum[]
  }

  /**
   * SurveyResponses create
   */
  export type SurveyResponsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * The data needed to create a SurveyResponses.
     */
    data: XOR<SurveyResponsesCreateInput, SurveyResponsesUncheckedCreateInput>
  }

  /**
   * SurveyResponses createMany
   */
  export type SurveyResponsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurveyResponses.
     */
    data: SurveyResponsesCreateManyInput | SurveyResponsesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurveyResponses createManyAndReturn
   */
  export type SurveyResponsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * The data used to create many SurveyResponses.
     */
    data: SurveyResponsesCreateManyInput | SurveyResponsesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveyResponses update
   */
  export type SurveyResponsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * The data needed to update a SurveyResponses.
     */
    data: XOR<SurveyResponsesUpdateInput, SurveyResponsesUncheckedUpdateInput>
    /**
     * Choose, which SurveyResponses to update.
     */
    where: SurveyResponsesWhereUniqueInput
  }

  /**
   * SurveyResponses updateMany
   */
  export type SurveyResponsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurveyResponses.
     */
    data: XOR<SurveyResponsesUpdateManyMutationInput, SurveyResponsesUncheckedUpdateManyInput>
    /**
     * Filter which SurveyResponses to update
     */
    where?: SurveyResponsesWhereInput
    /**
     * Limit how many SurveyResponses to update.
     */
    limit?: number
  }

  /**
   * SurveyResponses updateManyAndReturn
   */
  export type SurveyResponsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * The data used to update SurveyResponses.
     */
    data: XOR<SurveyResponsesUpdateManyMutationInput, SurveyResponsesUncheckedUpdateManyInput>
    /**
     * Filter which SurveyResponses to update
     */
    where?: SurveyResponsesWhereInput
    /**
     * Limit how many SurveyResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurveyResponses upsert
   */
  export type SurveyResponsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * The filter to search for the SurveyResponses to update in case it exists.
     */
    where: SurveyResponsesWhereUniqueInput
    /**
     * In case the SurveyResponses found by the `where` argument doesn't exist, create a new SurveyResponses with this data.
     */
    create: XOR<SurveyResponsesCreateInput, SurveyResponsesUncheckedCreateInput>
    /**
     * In case the SurveyResponses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurveyResponsesUpdateInput, SurveyResponsesUncheckedUpdateInput>
  }

  /**
   * SurveyResponses delete
   */
  export type SurveyResponsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
    /**
     * Filter which SurveyResponses to delete.
     */
    where: SurveyResponsesWhereUniqueInput
  }

  /**
   * SurveyResponses deleteMany
   */
  export type SurveyResponsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurveyResponses to delete
     */
    where?: SurveyResponsesWhereInput
    /**
     * Limit how many SurveyResponses to delete.
     */
    limit?: number
  }

  /**
   * SurveyResponses.surveyLink
   */
  export type SurveyResponses$surveyLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyLinks
     */
    select?: SurveyLinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyLinks
     */
    omit?: SurveyLinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyLinksInclude<ExtArgs> | null
    where?: SurveyLinksWhereInput
  }

  /**
   * SurveyResponses without action
   */
  export type SurveyResponsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurveyResponses
     */
    select?: SurveyResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurveyResponses
     */
    omit?: SurveyResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurveyResponsesInclude<ExtArgs> | null
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


  export const EventsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location: 'location',
    status: 'status',
    createdAt: 'createdAt',
    eventDate: 'eventDate',
    generatedLink: 'generatedLink'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const SurveyLinksScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    status: 'status',
    generatedLink: 'generatedLink',
    eventId: 'eventId'
  };

  export type SurveyLinksScalarFieldEnum = (typeof SurveyLinksScalarFieldEnum)[keyof typeof SurveyLinksScalarFieldEnum]


  export const SurveyResponsesScalarFieldEnum: {
    id: 'id',
    submittedAt: 'submittedAt',
    name: 'name',
    rating: 'rating',
    feedback: 'feedback',
    linkId: 'linkId'
  };

  export type SurveyResponsesScalarFieldEnum = (typeof SurveyResponsesScalarFieldEnum)[keyof typeof SurveyResponsesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'EventStatus'
   */
  export type EnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus'>
    


  /**
   * Reference to a field of type 'EventStatus[]'
   */
  export type ListEnumEventStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LinkStatus'
   */
  export type EnumLinkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkStatus'>
    


  /**
   * Reference to a field of type 'LinkStatus[]'
   */
  export type ListEnumLinkStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkStatus[]'>
    


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


  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: IntFilter<"Events"> | number
    title?: StringFilter<"Events"> | string
    location?: StringFilter<"Events"> | string
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    createdAt?: DateTimeFilter<"Events"> | Date | string
    eventDate?: DateTimeFilter<"Events"> | Date | string
    generatedLink?: StringNullableFilter<"Events"> | string | null
    surveyLink?: XOR<SurveyLinksNullableScalarRelationFilter, SurveyLinksWhereInput> | null
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventDate?: SortOrder
    generatedLink?: SortOrderInput | SortOrder
    surveyLink?: SurveyLinksOrderByWithRelationInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    title?: StringFilter<"Events"> | string
    location?: StringFilter<"Events"> | string
    status?: EnumEventStatusFilter<"Events"> | $Enums.EventStatus
    createdAt?: DateTimeFilter<"Events"> | Date | string
    eventDate?: DateTimeFilter<"Events"> | Date | string
    generatedLink?: StringNullableFilter<"Events"> | string | null
    surveyLink?: XOR<SurveyLinksNullableScalarRelationFilter, SurveyLinksWhereInput> | null
  }, "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventDate?: SortOrder
    generatedLink?: SortOrderInput | SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Events"> | number
    title?: StringWithAggregatesFilter<"Events"> | string
    location?: StringWithAggregatesFilter<"Events"> | string
    status?: EnumEventStatusWithAggregatesFilter<"Events"> | $Enums.EventStatus
    createdAt?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    eventDate?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    generatedLink?: StringNullableWithAggregatesFilter<"Events"> | string | null
  }

  export type SurveyLinksWhereInput = {
    AND?: SurveyLinksWhereInput | SurveyLinksWhereInput[]
    OR?: SurveyLinksWhereInput[]
    NOT?: SurveyLinksWhereInput | SurveyLinksWhereInput[]
    id?: IntFilter<"SurveyLinks"> | number
    createdAt?: DateTimeFilter<"SurveyLinks"> | Date | string
    status?: EnumLinkStatusFilter<"SurveyLinks"> | $Enums.LinkStatus
    generatedLink?: StringNullableFilter<"SurveyLinks"> | string | null
    eventId?: IntNullableFilter<"SurveyLinks"> | number | null
    event?: XOR<EventsNullableScalarRelationFilter, EventsWhereInput> | null
    responses?: SurveyResponsesListRelationFilter
  }

  export type SurveyLinksOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    generatedLink?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    event?: EventsOrderByWithRelationInput
    responses?: SurveyResponsesOrderByRelationAggregateInput
  }

  export type SurveyLinksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    eventId?: number
    AND?: SurveyLinksWhereInput | SurveyLinksWhereInput[]
    OR?: SurveyLinksWhereInput[]
    NOT?: SurveyLinksWhereInput | SurveyLinksWhereInput[]
    createdAt?: DateTimeFilter<"SurveyLinks"> | Date | string
    status?: EnumLinkStatusFilter<"SurveyLinks"> | $Enums.LinkStatus
    generatedLink?: StringNullableFilter<"SurveyLinks"> | string | null
    event?: XOR<EventsNullableScalarRelationFilter, EventsWhereInput> | null
    responses?: SurveyResponsesListRelationFilter
  }, "id" | "eventId">

  export type SurveyLinksOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    generatedLink?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    _count?: SurveyLinksCountOrderByAggregateInput
    _avg?: SurveyLinksAvgOrderByAggregateInput
    _max?: SurveyLinksMaxOrderByAggregateInput
    _min?: SurveyLinksMinOrderByAggregateInput
    _sum?: SurveyLinksSumOrderByAggregateInput
  }

  export type SurveyLinksScalarWhereWithAggregatesInput = {
    AND?: SurveyLinksScalarWhereWithAggregatesInput | SurveyLinksScalarWhereWithAggregatesInput[]
    OR?: SurveyLinksScalarWhereWithAggregatesInput[]
    NOT?: SurveyLinksScalarWhereWithAggregatesInput | SurveyLinksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SurveyLinks"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SurveyLinks"> | Date | string
    status?: EnumLinkStatusWithAggregatesFilter<"SurveyLinks"> | $Enums.LinkStatus
    generatedLink?: StringNullableWithAggregatesFilter<"SurveyLinks"> | string | null
    eventId?: IntNullableWithAggregatesFilter<"SurveyLinks"> | number | null
  }

  export type SurveyResponsesWhereInput = {
    AND?: SurveyResponsesWhereInput | SurveyResponsesWhereInput[]
    OR?: SurveyResponsesWhereInput[]
    NOT?: SurveyResponsesWhereInput | SurveyResponsesWhereInput[]
    id?: IntFilter<"SurveyResponses"> | number
    submittedAt?: DateTimeFilter<"SurveyResponses"> | Date | string
    name?: StringFilter<"SurveyResponses"> | string
    rating?: IntFilter<"SurveyResponses"> | number
    feedback?: StringFilter<"SurveyResponses"> | string
    linkId?: IntNullableFilter<"SurveyResponses"> | number | null
    surveyLink?: XOR<SurveyLinksNullableScalarRelationFilter, SurveyLinksWhereInput> | null
  }

  export type SurveyResponsesOrderByWithRelationInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    linkId?: SortOrderInput | SortOrder
    surveyLink?: SurveyLinksOrderByWithRelationInput
  }

  export type SurveyResponsesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    linkId?: number
    AND?: SurveyResponsesWhereInput | SurveyResponsesWhereInput[]
    OR?: SurveyResponsesWhereInput[]
    NOT?: SurveyResponsesWhereInput | SurveyResponsesWhereInput[]
    submittedAt?: DateTimeFilter<"SurveyResponses"> | Date | string
    name?: StringFilter<"SurveyResponses"> | string
    rating?: IntFilter<"SurveyResponses"> | number
    feedback?: StringFilter<"SurveyResponses"> | string
    surveyLink?: XOR<SurveyLinksNullableScalarRelationFilter, SurveyLinksWhereInput> | null
  }, "id" | "linkId">

  export type SurveyResponsesOrderByWithAggregationInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    linkId?: SortOrderInput | SortOrder
    _count?: SurveyResponsesCountOrderByAggregateInput
    _avg?: SurveyResponsesAvgOrderByAggregateInput
    _max?: SurveyResponsesMaxOrderByAggregateInput
    _min?: SurveyResponsesMinOrderByAggregateInput
    _sum?: SurveyResponsesSumOrderByAggregateInput
  }

  export type SurveyResponsesScalarWhereWithAggregatesInput = {
    AND?: SurveyResponsesScalarWhereWithAggregatesInput | SurveyResponsesScalarWhereWithAggregatesInput[]
    OR?: SurveyResponsesScalarWhereWithAggregatesInput[]
    NOT?: SurveyResponsesScalarWhereWithAggregatesInput | SurveyResponsesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SurveyResponses"> | number
    submittedAt?: DateTimeWithAggregatesFilter<"SurveyResponses"> | Date | string
    name?: StringWithAggregatesFilter<"SurveyResponses"> | string
    rating?: IntWithAggregatesFilter<"SurveyResponses"> | number
    feedback?: StringWithAggregatesFilter<"SurveyResponses"> | string
    linkId?: IntNullableWithAggregatesFilter<"SurveyResponses"> | number | null
  }

  export type EventsCreateInput = {
    title: string
    location: string
    status: $Enums.EventStatus
    createdAt?: Date | string
    eventDate: Date | string
    generatedLink?: string | null
    surveyLink?: SurveyLinksCreateNestedOneWithoutEventInput
  }

  export type EventsUncheckedCreateInput = {
    id?: number
    title: string
    location: string
    status: $Enums.EventStatus
    createdAt?: Date | string
    eventDate: Date | string
    generatedLink?: string | null
    surveyLink?: SurveyLinksUncheckedCreateNestedOneWithoutEventInput
  }

  export type EventsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    surveyLink?: SurveyLinksUpdateOneWithoutEventNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    surveyLink?: SurveyLinksUncheckedUpdateOneWithoutEventNestedInput
  }

  export type EventsCreateManyInput = {
    id?: number
    title: string
    location: string
    status: $Enums.EventStatus
    createdAt?: Date | string
    eventDate: Date | string
    generatedLink?: string | null
  }

  export type EventsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyLinksCreateInput = {
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    event?: EventsCreateNestedOneWithoutSurveyLinkInput
    responses?: SurveyResponsesCreateNestedManyWithoutSurveyLinkInput
  }

  export type SurveyLinksUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    eventId?: number | null
    responses?: SurveyResponsesUncheckedCreateNestedManyWithoutSurveyLinkInput
  }

  export type SurveyLinksUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventsUpdateOneWithoutSurveyLinkNestedInput
    responses?: SurveyResponsesUpdateManyWithoutSurveyLinkNestedInput
  }

  export type SurveyLinksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
    responses?: SurveyResponsesUncheckedUpdateManyWithoutSurveyLinkNestedInput
  }

  export type SurveyLinksCreateManyInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    eventId?: number | null
  }

  export type SurveyLinksUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyLinksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SurveyResponsesCreateInput = {
    submittedAt?: Date | string
    name: string
    rating: number
    feedback: string
    surveyLink?: SurveyLinksCreateNestedOneWithoutResponsesInput
  }

  export type SurveyResponsesUncheckedCreateInput = {
    id?: number
    submittedAt?: Date | string
    name: string
    rating: number
    feedback: string
    linkId?: number | null
  }

  export type SurveyResponsesUpdateInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
    surveyLink?: SurveyLinksUpdateOneWithoutResponsesNestedInput
  }

  export type SurveyResponsesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SurveyResponsesCreateManyInput = {
    id?: number
    submittedAt?: Date | string
    name: string
    rating: number
    feedback: string
    linkId?: number | null
  }

  export type SurveyResponsesUpdateManyMutationInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyResponsesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
    linkId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
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

  export type SurveyLinksNullableScalarRelationFilter = {
    is?: SurveyLinksWhereInput | null
    isNot?: SurveyLinksWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventDate?: SortOrder
    generatedLink?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventDate?: SortOrder
    generatedLink?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    eventDate?: SortOrder
    generatedLink?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
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

  export type EnumLinkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkStatus | EnumLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkStatusFilter<$PrismaModel> | $Enums.LinkStatus
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

  export type EventsNullableScalarRelationFilter = {
    is?: EventsWhereInput | null
    isNot?: EventsWhereInput | null
  }

  export type SurveyResponsesListRelationFilter = {
    every?: SurveyResponsesWhereInput
    some?: SurveyResponsesWhereInput
    none?: SurveyResponsesWhereInput
  }

  export type SurveyResponsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurveyLinksCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    generatedLink?: SortOrder
    eventId?: SortOrder
  }

  export type SurveyLinksAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type SurveyLinksMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    generatedLink?: SortOrder
    eventId?: SortOrder
  }

  export type SurveyLinksMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    status?: SortOrder
    generatedLink?: SortOrder
    eventId?: SortOrder
  }

  export type SurveyLinksSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type EnumLinkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkStatus | EnumLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkStatusWithAggregatesFilter<$PrismaModel> | $Enums.LinkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkStatusFilter<$PrismaModel>
    _max?: NestedEnumLinkStatusFilter<$PrismaModel>
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

  export type SurveyResponsesCountOrderByAggregateInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    linkId?: SortOrder
  }

  export type SurveyResponsesAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    linkId?: SortOrder
  }

  export type SurveyResponsesMaxOrderByAggregateInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    linkId?: SortOrder
  }

  export type SurveyResponsesMinOrderByAggregateInput = {
    id?: SortOrder
    submittedAt?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    feedback?: SortOrder
    linkId?: SortOrder
  }

  export type SurveyResponsesSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    linkId?: SortOrder
  }

  export type SurveyLinksCreateNestedOneWithoutEventInput = {
    create?: XOR<SurveyLinksCreateWithoutEventInput, SurveyLinksUncheckedCreateWithoutEventInput>
    connectOrCreate?: SurveyLinksCreateOrConnectWithoutEventInput
    connect?: SurveyLinksWhereUniqueInput
  }

  export type SurveyLinksUncheckedCreateNestedOneWithoutEventInput = {
    create?: XOR<SurveyLinksCreateWithoutEventInput, SurveyLinksUncheckedCreateWithoutEventInput>
    connectOrCreate?: SurveyLinksCreateOrConnectWithoutEventInput
    connect?: SurveyLinksWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumEventStatusFieldUpdateOperationsInput = {
    set?: $Enums.EventStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SurveyLinksUpdateOneWithoutEventNestedInput = {
    create?: XOR<SurveyLinksCreateWithoutEventInput, SurveyLinksUncheckedCreateWithoutEventInput>
    connectOrCreate?: SurveyLinksCreateOrConnectWithoutEventInput
    upsert?: SurveyLinksUpsertWithoutEventInput
    disconnect?: SurveyLinksWhereInput | boolean
    delete?: SurveyLinksWhereInput | boolean
    connect?: SurveyLinksWhereUniqueInput
    update?: XOR<XOR<SurveyLinksUpdateToOneWithWhereWithoutEventInput, SurveyLinksUpdateWithoutEventInput>, SurveyLinksUncheckedUpdateWithoutEventInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurveyLinksUncheckedUpdateOneWithoutEventNestedInput = {
    create?: XOR<SurveyLinksCreateWithoutEventInput, SurveyLinksUncheckedCreateWithoutEventInput>
    connectOrCreate?: SurveyLinksCreateOrConnectWithoutEventInput
    upsert?: SurveyLinksUpsertWithoutEventInput
    disconnect?: SurveyLinksWhereInput | boolean
    delete?: SurveyLinksWhereInput | boolean
    connect?: SurveyLinksWhereUniqueInput
    update?: XOR<XOR<SurveyLinksUpdateToOneWithWhereWithoutEventInput, SurveyLinksUpdateWithoutEventInput>, SurveyLinksUncheckedUpdateWithoutEventInput>
  }

  export type EventsCreateNestedOneWithoutSurveyLinkInput = {
    create?: XOR<EventsCreateWithoutSurveyLinkInput, EventsUncheckedCreateWithoutSurveyLinkInput>
    connectOrCreate?: EventsCreateOrConnectWithoutSurveyLinkInput
    connect?: EventsWhereUniqueInput
  }

  export type SurveyResponsesCreateNestedManyWithoutSurveyLinkInput = {
    create?: XOR<SurveyResponsesCreateWithoutSurveyLinkInput, SurveyResponsesUncheckedCreateWithoutSurveyLinkInput> | SurveyResponsesCreateWithoutSurveyLinkInput[] | SurveyResponsesUncheckedCreateWithoutSurveyLinkInput[]
    connectOrCreate?: SurveyResponsesCreateOrConnectWithoutSurveyLinkInput | SurveyResponsesCreateOrConnectWithoutSurveyLinkInput[]
    createMany?: SurveyResponsesCreateManySurveyLinkInputEnvelope
    connect?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
  }

  export type SurveyResponsesUncheckedCreateNestedManyWithoutSurveyLinkInput = {
    create?: XOR<SurveyResponsesCreateWithoutSurveyLinkInput, SurveyResponsesUncheckedCreateWithoutSurveyLinkInput> | SurveyResponsesCreateWithoutSurveyLinkInput[] | SurveyResponsesUncheckedCreateWithoutSurveyLinkInput[]
    connectOrCreate?: SurveyResponsesCreateOrConnectWithoutSurveyLinkInput | SurveyResponsesCreateOrConnectWithoutSurveyLinkInput[]
    createMany?: SurveyResponsesCreateManySurveyLinkInputEnvelope
    connect?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
  }

  export type EnumLinkStatusFieldUpdateOperationsInput = {
    set?: $Enums.LinkStatus
  }

  export type EventsUpdateOneWithoutSurveyLinkNestedInput = {
    create?: XOR<EventsCreateWithoutSurveyLinkInput, EventsUncheckedCreateWithoutSurveyLinkInput>
    connectOrCreate?: EventsCreateOrConnectWithoutSurveyLinkInput
    upsert?: EventsUpsertWithoutSurveyLinkInput
    disconnect?: EventsWhereInput | boolean
    delete?: EventsWhereInput | boolean
    connect?: EventsWhereUniqueInput
    update?: XOR<XOR<EventsUpdateToOneWithWhereWithoutSurveyLinkInput, EventsUpdateWithoutSurveyLinkInput>, EventsUncheckedUpdateWithoutSurveyLinkInput>
  }

  export type SurveyResponsesUpdateManyWithoutSurveyLinkNestedInput = {
    create?: XOR<SurveyResponsesCreateWithoutSurveyLinkInput, SurveyResponsesUncheckedCreateWithoutSurveyLinkInput> | SurveyResponsesCreateWithoutSurveyLinkInput[] | SurveyResponsesUncheckedCreateWithoutSurveyLinkInput[]
    connectOrCreate?: SurveyResponsesCreateOrConnectWithoutSurveyLinkInput | SurveyResponsesCreateOrConnectWithoutSurveyLinkInput[]
    upsert?: SurveyResponsesUpsertWithWhereUniqueWithoutSurveyLinkInput | SurveyResponsesUpsertWithWhereUniqueWithoutSurveyLinkInput[]
    createMany?: SurveyResponsesCreateManySurveyLinkInputEnvelope
    set?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    disconnect?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    delete?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    connect?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    update?: SurveyResponsesUpdateWithWhereUniqueWithoutSurveyLinkInput | SurveyResponsesUpdateWithWhereUniqueWithoutSurveyLinkInput[]
    updateMany?: SurveyResponsesUpdateManyWithWhereWithoutSurveyLinkInput | SurveyResponsesUpdateManyWithWhereWithoutSurveyLinkInput[]
    deleteMany?: SurveyResponsesScalarWhereInput | SurveyResponsesScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SurveyResponsesUncheckedUpdateManyWithoutSurveyLinkNestedInput = {
    create?: XOR<SurveyResponsesCreateWithoutSurveyLinkInput, SurveyResponsesUncheckedCreateWithoutSurveyLinkInput> | SurveyResponsesCreateWithoutSurveyLinkInput[] | SurveyResponsesUncheckedCreateWithoutSurveyLinkInput[]
    connectOrCreate?: SurveyResponsesCreateOrConnectWithoutSurveyLinkInput | SurveyResponsesCreateOrConnectWithoutSurveyLinkInput[]
    upsert?: SurveyResponsesUpsertWithWhereUniqueWithoutSurveyLinkInput | SurveyResponsesUpsertWithWhereUniqueWithoutSurveyLinkInput[]
    createMany?: SurveyResponsesCreateManySurveyLinkInputEnvelope
    set?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    disconnect?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    delete?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    connect?: SurveyResponsesWhereUniqueInput | SurveyResponsesWhereUniqueInput[]
    update?: SurveyResponsesUpdateWithWhereUniqueWithoutSurveyLinkInput | SurveyResponsesUpdateWithWhereUniqueWithoutSurveyLinkInput[]
    updateMany?: SurveyResponsesUpdateManyWithWhereWithoutSurveyLinkInput | SurveyResponsesUpdateManyWithWhereWithoutSurveyLinkInput[]
    deleteMany?: SurveyResponsesScalarWhereInput | SurveyResponsesScalarWhereInput[]
  }

  export type SurveyLinksCreateNestedOneWithoutResponsesInput = {
    create?: XOR<SurveyLinksCreateWithoutResponsesInput, SurveyLinksUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SurveyLinksCreateOrConnectWithoutResponsesInput
    connect?: SurveyLinksWhereUniqueInput
  }

  export type SurveyLinksUpdateOneWithoutResponsesNestedInput = {
    create?: XOR<SurveyLinksCreateWithoutResponsesInput, SurveyLinksUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: SurveyLinksCreateOrConnectWithoutResponsesInput
    upsert?: SurveyLinksUpsertWithoutResponsesInput
    disconnect?: SurveyLinksWhereInput | boolean
    delete?: SurveyLinksWhereInput | boolean
    connect?: SurveyLinksWhereUniqueInput
    update?: XOR<XOR<SurveyLinksUpdateToOneWithWhereWithoutResponsesInput, SurveyLinksUpdateWithoutResponsesInput>, SurveyLinksUncheckedUpdateWithoutResponsesInput>
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

  export type NestedEnumEventStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusFilter<$PrismaModel> | $Enums.EventStatus
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

  export type NestedEnumEventStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventStatus | EnumEventStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventStatus[] | ListEnumEventStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEventStatusWithAggregatesFilter<$PrismaModel> | $Enums.EventStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventStatusFilter<$PrismaModel>
    _max?: NestedEnumEventStatusFilter<$PrismaModel>
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

  export type NestedEnumLinkStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkStatus | EnumLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkStatusFilter<$PrismaModel> | $Enums.LinkStatus
  }

  export type NestedEnumLinkStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkStatus | EnumLinkStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkStatus[] | ListEnumLinkStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkStatusWithAggregatesFilter<$PrismaModel> | $Enums.LinkStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkStatusFilter<$PrismaModel>
    _max?: NestedEnumLinkStatusFilter<$PrismaModel>
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

  export type SurveyLinksCreateWithoutEventInput = {
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    responses?: SurveyResponsesCreateNestedManyWithoutSurveyLinkInput
  }

  export type SurveyLinksUncheckedCreateWithoutEventInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    responses?: SurveyResponsesUncheckedCreateNestedManyWithoutSurveyLinkInput
  }

  export type SurveyLinksCreateOrConnectWithoutEventInput = {
    where: SurveyLinksWhereUniqueInput
    create: XOR<SurveyLinksCreateWithoutEventInput, SurveyLinksUncheckedCreateWithoutEventInput>
  }

  export type SurveyLinksUpsertWithoutEventInput = {
    update: XOR<SurveyLinksUpdateWithoutEventInput, SurveyLinksUncheckedUpdateWithoutEventInput>
    create: XOR<SurveyLinksCreateWithoutEventInput, SurveyLinksUncheckedCreateWithoutEventInput>
    where?: SurveyLinksWhereInput
  }

  export type SurveyLinksUpdateToOneWithWhereWithoutEventInput = {
    where?: SurveyLinksWhereInput
    data: XOR<SurveyLinksUpdateWithoutEventInput, SurveyLinksUncheckedUpdateWithoutEventInput>
  }

  export type SurveyLinksUpdateWithoutEventInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: SurveyResponsesUpdateManyWithoutSurveyLinkNestedInput
  }

  export type SurveyLinksUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    responses?: SurveyResponsesUncheckedUpdateManyWithoutSurveyLinkNestedInput
  }

  export type EventsCreateWithoutSurveyLinkInput = {
    title: string
    location: string
    status: $Enums.EventStatus
    createdAt?: Date | string
    eventDate: Date | string
    generatedLink?: string | null
  }

  export type EventsUncheckedCreateWithoutSurveyLinkInput = {
    id?: number
    title: string
    location: string
    status: $Enums.EventStatus
    createdAt?: Date | string
    eventDate: Date | string
    generatedLink?: string | null
  }

  export type EventsCreateOrConnectWithoutSurveyLinkInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutSurveyLinkInput, EventsUncheckedCreateWithoutSurveyLinkInput>
  }

  export type SurveyResponsesCreateWithoutSurveyLinkInput = {
    submittedAt?: Date | string
    name: string
    rating: number
    feedback: string
  }

  export type SurveyResponsesUncheckedCreateWithoutSurveyLinkInput = {
    id?: number
    submittedAt?: Date | string
    name: string
    rating: number
    feedback: string
  }

  export type SurveyResponsesCreateOrConnectWithoutSurveyLinkInput = {
    where: SurveyResponsesWhereUniqueInput
    create: XOR<SurveyResponsesCreateWithoutSurveyLinkInput, SurveyResponsesUncheckedCreateWithoutSurveyLinkInput>
  }

  export type SurveyResponsesCreateManySurveyLinkInputEnvelope = {
    data: SurveyResponsesCreateManySurveyLinkInput | SurveyResponsesCreateManySurveyLinkInput[]
    skipDuplicates?: boolean
  }

  export type EventsUpsertWithoutSurveyLinkInput = {
    update: XOR<EventsUpdateWithoutSurveyLinkInput, EventsUncheckedUpdateWithoutSurveyLinkInput>
    create: XOR<EventsCreateWithoutSurveyLinkInput, EventsUncheckedCreateWithoutSurveyLinkInput>
    where?: EventsWhereInput
  }

  export type EventsUpdateToOneWithWhereWithoutSurveyLinkInput = {
    where?: EventsWhereInput
    data: XOR<EventsUpdateWithoutSurveyLinkInput, EventsUncheckedUpdateWithoutSurveyLinkInput>
  }

  export type EventsUpdateWithoutSurveyLinkInput = {
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsUncheckedUpdateWithoutSurveyLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumEventStatusFieldUpdateOperationsInput | $Enums.EventStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurveyResponsesUpsertWithWhereUniqueWithoutSurveyLinkInput = {
    where: SurveyResponsesWhereUniqueInput
    update: XOR<SurveyResponsesUpdateWithoutSurveyLinkInput, SurveyResponsesUncheckedUpdateWithoutSurveyLinkInput>
    create: XOR<SurveyResponsesCreateWithoutSurveyLinkInput, SurveyResponsesUncheckedCreateWithoutSurveyLinkInput>
  }

  export type SurveyResponsesUpdateWithWhereUniqueWithoutSurveyLinkInput = {
    where: SurveyResponsesWhereUniqueInput
    data: XOR<SurveyResponsesUpdateWithoutSurveyLinkInput, SurveyResponsesUncheckedUpdateWithoutSurveyLinkInput>
  }

  export type SurveyResponsesUpdateManyWithWhereWithoutSurveyLinkInput = {
    where: SurveyResponsesScalarWhereInput
    data: XOR<SurveyResponsesUpdateManyMutationInput, SurveyResponsesUncheckedUpdateManyWithoutSurveyLinkInput>
  }

  export type SurveyResponsesScalarWhereInput = {
    AND?: SurveyResponsesScalarWhereInput | SurveyResponsesScalarWhereInput[]
    OR?: SurveyResponsesScalarWhereInput[]
    NOT?: SurveyResponsesScalarWhereInput | SurveyResponsesScalarWhereInput[]
    id?: IntFilter<"SurveyResponses"> | number
    submittedAt?: DateTimeFilter<"SurveyResponses"> | Date | string
    name?: StringFilter<"SurveyResponses"> | string
    rating?: IntFilter<"SurveyResponses"> | number
    feedback?: StringFilter<"SurveyResponses"> | string
    linkId?: IntNullableFilter<"SurveyResponses"> | number | null
  }

  export type SurveyLinksCreateWithoutResponsesInput = {
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    event?: EventsCreateNestedOneWithoutSurveyLinkInput
  }

  export type SurveyLinksUncheckedCreateWithoutResponsesInput = {
    id?: number
    createdAt?: Date | string
    status: $Enums.LinkStatus
    generatedLink?: string | null
    eventId?: number | null
  }

  export type SurveyLinksCreateOrConnectWithoutResponsesInput = {
    where: SurveyLinksWhereUniqueInput
    create: XOR<SurveyLinksCreateWithoutResponsesInput, SurveyLinksUncheckedCreateWithoutResponsesInput>
  }

  export type SurveyLinksUpsertWithoutResponsesInput = {
    update: XOR<SurveyLinksUpdateWithoutResponsesInput, SurveyLinksUncheckedUpdateWithoutResponsesInput>
    create: XOR<SurveyLinksCreateWithoutResponsesInput, SurveyLinksUncheckedCreateWithoutResponsesInput>
    where?: SurveyLinksWhereInput
  }

  export type SurveyLinksUpdateToOneWithWhereWithoutResponsesInput = {
    where?: SurveyLinksWhereInput
    data: XOR<SurveyLinksUpdateWithoutResponsesInput, SurveyLinksUncheckedUpdateWithoutResponsesInput>
  }

  export type SurveyLinksUpdateWithoutResponsesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventsUpdateOneWithoutSurveyLinkNestedInput
  }

  export type SurveyLinksUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumLinkStatusFieldUpdateOperationsInput | $Enums.LinkStatus
    generatedLink?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SurveyResponsesCreateManySurveyLinkInput = {
    id?: number
    submittedAt?: Date | string
    name: string
    rating: number
    feedback: string
  }

  export type SurveyResponsesUpdateWithoutSurveyLinkInput = {
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyResponsesUncheckedUpdateWithoutSurveyLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
  }

  export type SurveyResponsesUncheckedUpdateManyWithoutSurveyLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    feedback?: StringFieldUpdateOperationsInput | string
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