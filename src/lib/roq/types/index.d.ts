/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model cinema
 *
 */
export type cinema = $Result.DefaultSelection<Prisma.$cinemaPayload>;
/**
 * Model movie
 *
 */
export type movie = $Result.DefaultSelection<Prisma.$moviePayload>;
/**
 * Model show_time
 *
 */
export type show_time = $Result.DefaultSelection<Prisma.$show_timePayload>;
/**
 * Model team_member
 *
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>;
/**
 * Model ticket
 *
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cinemas
 * const cinemas = await prisma.cinema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cinemas
   * const cinemas = await prisma.cinema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.cinema`: Exposes CRUD operations for the **cinema** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Cinemas
   * const cinemas = await prisma.cinema.findMany()
   * ```
   */
  get cinema(): Prisma.cinemaDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **movie** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   */
  get movie(): Prisma.movieDelegate<ExtArgs>;

  /**
   * `prisma.show_time`: Exposes CRUD operations for the **show_time** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Show_times
   * const show_times = await prisma.show_time.findMany()
   * ```
   */
  get show_time(): Prisma.show_timeDelegate<ExtArgs>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Team_members
   * const team_members = await prisma.team_member.findMany()
   * ```
   */
  get team_member(): Prisma.team_memberDelegate<ExtArgs>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tickets
   * const tickets = await prisma.ticket.findMany()
   * ```
   */
  get ticket(): Prisma.ticketDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    cinema: 'cinema';
    movie: 'movie';
    show_time: 'show_time';
    team_member: 'team_member';
    ticket: 'ticket';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'cinema' | 'movie' | 'show_time' | 'team_member' | 'ticket' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      cinema: {
        payload: Prisma.$cinemaPayload<ExtArgs>;
        fields: Prisma.cinemaFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.cinemaFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.cinemaFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          findFirst: {
            args: Prisma.cinemaFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.cinemaFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          findMany: {
            args: Prisma.cinemaFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>[];
          };
          create: {
            args: Prisma.cinemaCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          createMany: {
            args: Prisma.cinemaCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.cinemaDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          update: {
            args: Prisma.cinemaUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          deleteMany: {
            args: Prisma.cinemaDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.cinemaUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.cinemaUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$cinemaPayload>;
          };
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCinema>;
          };
          groupBy: {
            args: Prisma.cinemaGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CinemaGroupByOutputType>[];
          };
          count: {
            args: Prisma.cinemaCountArgs<ExtArgs>;
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number;
          };
        };
      };
      movie: {
        payload: Prisma.$moviePayload<ExtArgs>;
        fields: Prisma.movieFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.movieFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.movieFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findFirst: {
            args: Prisma.movieFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.movieFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          findMany: {
            args: Prisma.movieFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>[];
          };
          create: {
            args: Prisma.movieCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          createMany: {
            args: Prisma.movieCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.movieDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          update: {
            args: Prisma.movieUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          deleteMany: {
            args: Prisma.movieDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.movieUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.movieUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$moviePayload>;
          };
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMovie>;
          };
          groupBy: {
            args: Prisma.movieGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MovieGroupByOutputType>[];
          };
          count: {
            args: Prisma.movieCountArgs<ExtArgs>;
            result: $Utils.Optional<MovieCountAggregateOutputType> | number;
          };
        };
      };
      show_time: {
        payload: Prisma.$show_timePayload<ExtArgs>;
        fields: Prisma.show_timeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.show_timeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.show_timeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>;
          };
          findFirst: {
            args: Prisma.show_timeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.show_timeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>;
          };
          findMany: {
            args: Prisma.show_timeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>[];
          };
          create: {
            args: Prisma.show_timeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>;
          };
          createMany: {
            args: Prisma.show_timeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.show_timeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>;
          };
          update: {
            args: Prisma.show_timeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>;
          };
          deleteMany: {
            args: Prisma.show_timeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.show_timeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.show_timeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$show_timePayload>;
          };
          aggregate: {
            args: Prisma.Show_timeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShow_time>;
          };
          groupBy: {
            args: Prisma.show_timeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Show_timeGroupByOutputType>[];
          };
          count: {
            args: Prisma.show_timeCountArgs<ExtArgs>;
            result: $Utils.Optional<Show_timeCountAggregateOutputType> | number;
          };
        };
      };
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>;
        fields: Prisma.team_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[];
          };
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam_member>;
          };
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number;
          };
        };
      };
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>;
        fields: Prisma.ticketFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[];
          };
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>;
          };
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTicket>;
          };
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TicketGroupByOutputType>[];
          };
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>;
            result: $Utils.Optional<TicketCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    show_time: number;
    team_member: number;
  };

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_time?: boolean | CinemaCountOutputTypeCountShow_timeArgs;
    team_member?: boolean | CinemaCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountShow_timeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: show_timeWhereInput;
  };

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    show_time: number;
  };

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_time?: boolean | MovieCountOutputTypeCountShow_timeArgs;
  };

  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountShow_timeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: show_timeWhereInput;
  };

  /**
   * Count Type Show_timeCountOutputType
   */

  export type Show_timeCountOutputType = {
    ticket: number;
  };

  export type Show_timeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | Show_timeCountOutputTypeCountTicketArgs;
  };

  // Custom InputTypes

  /**
   * Show_timeCountOutputType without action
   */
  export type Show_timeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Show_timeCountOutputType
       */
      select?: Show_timeCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * Show_timeCountOutputType without action
   */
  export type Show_timeCountOutputTypeCountTicketArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ticketWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cinema: number;
    team_member: number;
    ticket: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | UserCountOutputTypeCountCinemaArgs;
    team_member?: boolean | UserCountOutputTypeCountTeam_memberArgs;
    ticket?: boolean | UserCountOutputTypeCountTicketArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cinemaWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null;
    _avg: CinemaAvgAggregateOutputType | null;
    _sum: CinemaSumAggregateOutputType | null;
    _min: CinemaMinAggregateOutputType | null;
    _max: CinemaMaxAggregateOutputType | null;
  };

  export type CinemaAvgAggregateOutputType = {
    seating_capacity: number | null;
    number_of_screens: number | null;
  };

  export type CinemaSumAggregateOutputType = {
    seating_capacity: number | null;
    number_of_screens: number | null;
  };

  export type CinemaMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    seating_capacity: number | null;
    number_of_screens: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CinemaMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    seating_capacity: number | null;
    number_of_screens: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CinemaCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    seating_capacity: number;
    number_of_screens: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CinemaAvgAggregateInputType = {
    seating_capacity?: true;
    number_of_screens?: true;
  };

  export type CinemaSumAggregateInputType = {
    seating_capacity?: true;
    number_of_screens?: true;
  };

  export type CinemaMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    seating_capacity?: true;
    number_of_screens?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CinemaMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    seating_capacity?: true;
    number_of_screens?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CinemaCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    seating_capacity?: true;
    number_of_screens?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cinema to aggregate.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cinemas
     **/
    _count?: true | CinemaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CinemaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CinemaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CinemaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CinemaMaxAggregateInputType;
  };

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
    [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>;
  };

  export type cinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cinemaWhereInput;
    orderBy?: cinemaOrderByWithAggregationInput | cinemaOrderByWithAggregationInput[];
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum;
    having?: cinemaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CinemaCountAggregateInputType | true;
    _avg?: CinemaAvgAggregateInputType;
    _sum?: CinemaSumAggregateInputType;
    _min?: CinemaMinAggregateInputType;
    _max?: CinemaMaxAggregateInputType;
  };

  export type CinemaGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    seating_capacity: number | null;
    number_of_screens: number | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CinemaCountAggregateOutputType | null;
    _avg: CinemaAvgAggregateOutputType | null;
    _sum: CinemaSumAggregateOutputType | null;
    _min: CinemaMinAggregateOutputType | null;
    _max: CinemaMaxAggregateOutputType | null;
  };

  type GetCinemaGroupByPayload<T extends cinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CinemaGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
          : GetScalarType<T[P], CinemaGroupByOutputType[P]>;
      }
    >
  >;

  export type cinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      seating_capacity?: boolean;
      number_of_screens?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      show_time?: boolean | cinema$show_timeArgs<ExtArgs>;
      team_member?: boolean | cinema$team_memberArgs<ExtArgs>;
      _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['cinema']
  >;

  export type cinemaSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    seating_capacity?: boolean;
    number_of_screens?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type cinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    show_time?: boolean | cinema$show_timeArgs<ExtArgs>;
    team_member?: boolean | cinema$team_memberArgs<ExtArgs>;
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $cinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'cinema';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      show_time: Prisma.$show_timePayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        seating_capacity: number | null;
        number_of_screens: number | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['cinema']
    >;
    composites: {};
  };

  type cinemaGetPayload<S extends boolean | null | undefined | cinemaDefaultArgs> = $Result.GetResult<
    Prisma.$cinemaPayload,
    S
  >;

  type cinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    cinemaFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CinemaCountAggregateInputType | true;
  };

  export interface cinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cinema']; meta: { name: 'cinema' } };
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {cinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends cinemaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaFindUniqueArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Cinema that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {cinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends cinemaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends cinemaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindFirstArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends cinemaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     *
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends cinemaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Cinema.
     * @param {cinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     *
     **/
    create<T extends cinemaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaCreateArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Cinemas.
     *     @param {cinemaCreateManyArgs} args - Arguments to create many Cinemas.
     *     @example
     *     // Create many Cinemas
     *     const cinema = await prisma.cinema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends cinemaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Cinema.
     * @param {cinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     *
     **/
    delete<T extends cinemaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaDeleteArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Cinema.
     * @param {cinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends cinemaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaUpdateArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Cinemas.
     * @param {cinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends cinemaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cinemaDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends cinemaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Cinema.
     * @param {cinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     **/
    upsert<T extends cinemaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cinemaUpsertArgs<ExtArgs>>,
    ): Prisma__cinemaClient<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
     **/
    count<T extends cinemaCountArgs>(
      args?: Subset<T, cinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CinemaAggregateArgs>(
      args: Subset<T, CinemaAggregateArgs>,
    ): Prisma.PrismaPromise<GetCinemaAggregateType<T>>;

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cinemaGroupByArgs} args - Group by arguments.
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
      T extends cinemaGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cinemaGroupByArgs['orderBy'] }
        : { orderBy?: cinemaGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, cinemaGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cinema model
     */
    readonly fields: cinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cinemaClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    show_time<T extends cinema$show_timeArgs<ExtArgs> = {}>(
      args?: Subset<T, cinema$show_timeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends cinema$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, cinema$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the cinema model
   */
  interface cinemaFieldRefs {
    readonly id: FieldRef<'cinema', 'String'>;
    readonly description: FieldRef<'cinema', 'String'>;
    readonly location: FieldRef<'cinema', 'String'>;
    readonly seating_capacity: FieldRef<'cinema', 'Int'>;
    readonly number_of_screens: FieldRef<'cinema', 'Int'>;
    readonly name: FieldRef<'cinema', 'String'>;
    readonly created_at: FieldRef<'cinema', 'DateTime'>;
    readonly updated_at: FieldRef<'cinema', 'DateTime'>;
    readonly user_id: FieldRef<'cinema', 'String'>;
    readonly tenant_id: FieldRef<'cinema', 'String'>;
  }

  // Custom InputTypes

  /**
   * cinema findUnique
   */
  export type cinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema findUniqueOrThrow
   */
  export type cinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema findFirst
   */
  export type cinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cinemas.
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * cinema findFirstOrThrow
   */
  export type cinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinema to fetch.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cinemas.
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * cinema findMany
   */
  export type cinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter, which cinemas to fetch.
     */
    where?: cinemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cinemas to fetch.
     */
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cinemas.
     */
    cursor?: cinemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cinemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cinemas.
     */
    skip?: number;
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * cinema create
   */
  export type cinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * The data needed to create a cinema.
     */
    data: XOR<cinemaCreateInput, cinemaUncheckedCreateInput>;
  };

  /**
   * cinema createMany
   */
  export type cinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cinemas.
     */
    data: cinemaCreateManyInput | cinemaCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * cinema update
   */
  export type cinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * The data needed to update a cinema.
     */
    data: XOR<cinemaUpdateInput, cinemaUncheckedUpdateInput>;
    /**
     * Choose, which cinema to update.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema updateMany
   */
  export type cinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cinemas.
     */
    data: XOR<cinemaUpdateManyMutationInput, cinemaUncheckedUpdateManyInput>;
    /**
     * Filter which cinemas to update
     */
    where?: cinemaWhereInput;
  };

  /**
   * cinema upsert
   */
  export type cinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * The filter to search for the cinema to update in case it exists.
     */
    where: cinemaWhereUniqueInput;
    /**
     * In case the cinema found by the `where` argument doesn't exist, create a new cinema with this data.
     */
    create: XOR<cinemaCreateInput, cinemaUncheckedCreateInput>;
    /**
     * In case the cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cinemaUpdateInput, cinemaUncheckedUpdateInput>;
  };

  /**
   * cinema delete
   */
  export type cinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    /**
     * Filter which cinema to delete.
     */
    where: cinemaWhereUniqueInput;
  };

  /**
   * cinema deleteMany
   */
  export type cinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cinemas to delete
     */
    where?: cinemaWhereInput;
  };

  /**
   * cinema.show_time
   */
  export type cinema$show_timeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    where?: show_timeWhereInput;
    orderBy?: show_timeOrderByWithRelationInput | show_timeOrderByWithRelationInput[];
    cursor?: show_timeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Show_timeScalarFieldEnum | Show_timeScalarFieldEnum[];
  };

  /**
   * cinema.team_member
   */
  export type cinema$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * cinema without action
   */
  export type cinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
  };

  /**
   * Model movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  export type MovieAvgAggregateOutputType = {
    duration: number | null;
    rating: number | null;
  };

  export type MovieSumAggregateOutputType = {
    duration: number | null;
    rating: number | null;
  };

  export type MovieMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    director: string | null;
    duration: number | null;
    genre: string | null;
    rating: number | null;
    release_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    director: string | null;
    duration: number | null;
    genre: string | null;
    rating: number | null;
    release_date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type MovieCountAggregateOutputType = {
    id: number;
    title: number;
    director: number;
    duration: number;
    genre: number;
    rating: number;
    release_date: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type MovieAvgAggregateInputType = {
    duration?: true;
    rating?: true;
  };

  export type MovieSumAggregateInputType = {
    duration?: true;
    rating?: true;
  };

  export type MovieMinAggregateInputType = {
    id?: true;
    title?: true;
    director?: true;
    duration?: true;
    genre?: true;
    rating?: true;
    release_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieMaxAggregateInputType = {
    id?: true;
    title?: true;
    director?: true;
    duration?: true;
    genre?: true;
    rating?: true;
    release_date?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type MovieCountAggregateInputType = {
    id?: true;
    title?: true;
    director?: true;
    duration?: true;
    genre?: true;
    rating?: true;
    release_date?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movie to aggregate.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned movies
     **/
    _count?: true | MovieCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MovieAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MovieSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MovieMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MovieMaxAggregateInputType;
  };

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
    [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>;
  };

  export type movieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: movieWhereInput;
    orderBy?: movieOrderByWithAggregationInput | movieOrderByWithAggregationInput[];
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum;
    having?: movieScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovieCountAggregateInputType | true;
    _avg?: MovieAvgAggregateInputType;
    _sum?: MovieSumAggregateInputType;
    _min?: MovieMinAggregateInputType;
    _max?: MovieMaxAggregateInputType;
  };

  export type MovieGroupByOutputType = {
    id: string;
    title: string;
    director: string;
    duration: number;
    genre: string;
    rating: number;
    release_date: Date;
    created_at: Date;
    updated_at: Date;
    _count: MovieCountAggregateOutputType | null;
    _avg: MovieAvgAggregateOutputType | null;
    _sum: MovieSumAggregateOutputType | null;
    _min: MovieMinAggregateOutputType | null;
    _max: MovieMaxAggregateOutputType | null;
  };

  type GetMovieGroupByPayload<T extends movieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MovieGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
          : GetScalarType<T[P], MovieGroupByOutputType[P]>;
      }
    >
  >;

  export type movieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      director?: boolean;
      duration?: boolean;
      genre?: boolean;
      rating?: boolean;
      release_date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      show_time?: boolean | movie$show_timeArgs<ExtArgs>;
      _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['movie']
  >;

  export type movieSelectScalar = {
    id?: boolean;
    title?: boolean;
    director?: boolean;
    duration?: boolean;
    genre?: boolean;
    rating?: boolean;
    release_date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type movieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_time?: boolean | movie$show_timeArgs<ExtArgs>;
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $moviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'movie';
    objects: {
      show_time: Prisma.$show_timePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        director: string;
        duration: number;
        genre: string;
        rating: number;
        release_date: Date;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['movie']
    >;
    composites: {};
  };

  type movieGetPayload<S extends boolean | null | undefined | movieDefaultArgs> = $Result.GetResult<
    Prisma.$moviePayload,
    S
  >;

  type movieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    movieFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: MovieCountAggregateInputType | true;
  };

  export interface movieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movie']; meta: { name: 'movie' } };
    /**
     * Find zero or one Movie that matches the filter.
     * @param {movieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends movieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, movieFindUniqueArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {movieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends movieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends movieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends movieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     *
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends movieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Movie.
     * @param {movieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     *
     **/
    create<T extends movieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, movieCreateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Movies.
     *     @param {movieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends movieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Movie.
     * @param {movieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     *
     **/
    delete<T extends movieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, movieDeleteArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Movie.
     * @param {movieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends movieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Movies.
     * @param {movieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends movieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, movieDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends movieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Movie.
     * @param {movieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     **/
    upsert<T extends movieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, movieUpsertArgs<ExtArgs>>,
    ): Prisma__movieClient<$Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
     **/
    count<T extends movieCountArgs>(
      args?: Subset<T, movieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(
      args: Subset<T, MovieAggregateArgs>,
    ): Prisma.PrismaPromise<GetMovieAggregateType<T>>;

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movieGroupByArgs} args - Group by arguments.
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
      T extends movieGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: movieGroupByArgs['orderBy'] }
        : { orderBy?: movieGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, movieGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the movie model
     */
    readonly fields: movieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__movieClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    show_time<T extends movie$show_timeArgs<ExtArgs> = {}>(
      args?: Subset<T, movie$show_timeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the movie model
   */
  interface movieFieldRefs {
    readonly id: FieldRef<'movie', 'String'>;
    readonly title: FieldRef<'movie', 'String'>;
    readonly director: FieldRef<'movie', 'String'>;
    readonly duration: FieldRef<'movie', 'Int'>;
    readonly genre: FieldRef<'movie', 'String'>;
    readonly rating: FieldRef<'movie', 'Int'>;
    readonly release_date: FieldRef<'movie', 'DateTime'>;
    readonly created_at: FieldRef<'movie', 'DateTime'>;
    readonly updated_at: FieldRef<'movie', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * movie findUnique
   */
  export type movieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findUniqueOrThrow
   */
  export type movieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie findFirst
   */
  export type movieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findFirstOrThrow
   */
  export type movieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movie to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie findMany
   */
  export type movieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter, which movies to fetch.
     */
    where?: movieWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movies to fetch.
     */
    orderBy?: movieOrderByWithRelationInput | movieOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing movies.
     */
    cursor?: movieWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movies.
     */
    skip?: number;
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[];
  };

  /**
   * movie create
   */
  export type movieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to create a movie.
     */
    data: XOR<movieCreateInput, movieUncheckedCreateInput>;
  };

  /**
   * movie createMany
   */
  export type movieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: movieCreateManyInput | movieCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * movie update
   */
  export type movieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The data needed to update a movie.
     */
    data: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
    /**
     * Choose, which movie to update.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie updateMany
   */
  export type movieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<movieUpdateManyMutationInput, movieUncheckedUpdateManyInput>;
    /**
     * Filter which movies to update
     */
    where?: movieWhereInput;
  };

  /**
   * movie upsert
   */
  export type movieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * The filter to search for the movie to update in case it exists.
     */
    where: movieWhereUniqueInput;
    /**
     * In case the movie found by the `where` argument doesn't exist, create a new movie with this data.
     */
    create: XOR<movieCreateInput, movieUncheckedCreateInput>;
    /**
     * In case the movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<movieUpdateInput, movieUncheckedUpdateInput>;
  };

  /**
   * movie delete
   */
  export type movieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
    /**
     * Filter which movie to delete.
     */
    where: movieWhereUniqueInput;
  };

  /**
   * movie deleteMany
   */
  export type movieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: movieWhereInput;
  };

  /**
   * movie.show_time
   */
  export type movie$show_timeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    where?: show_timeWhereInput;
    orderBy?: show_timeOrderByWithRelationInput | show_timeOrderByWithRelationInput[];
    cursor?: show_timeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Show_timeScalarFieldEnum | Show_timeScalarFieldEnum[];
  };

  /**
   * movie without action
   */
  export type movieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movie
     */
    select?: movieSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: movieInclude<ExtArgs> | null;
  };

  /**
   * Model show_time
   */

  export type AggregateShow_time = {
    _count: Show_timeCountAggregateOutputType | null;
    _min: Show_timeMinAggregateOutputType | null;
    _max: Show_timeMaxAggregateOutputType | null;
  };

  export type Show_timeMinAggregateOutputType = {
    id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    movie_id: string | null;
    cinema_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Show_timeMaxAggregateOutputType = {
    id: string | null;
    start_time: Date | null;
    end_time: Date | null;
    movie_id: string | null;
    cinema_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Show_timeCountAggregateOutputType = {
    id: number;
    start_time: number;
    end_time: number;
    movie_id: number;
    cinema_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Show_timeMinAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    movie_id?: true;
    cinema_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Show_timeMaxAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    movie_id?: true;
    cinema_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Show_timeCountAggregateInputType = {
    id?: true;
    start_time?: true;
    end_time?: true;
    movie_id?: true;
    cinema_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Show_timeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show_time to aggregate.
     */
    where?: show_timeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of show_times to fetch.
     */
    orderBy?: show_timeOrderByWithRelationInput | show_timeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: show_timeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` show_times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` show_times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned show_times
     **/
    _count?: true | Show_timeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Show_timeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Show_timeMaxAggregateInputType;
  };

  export type GetShow_timeAggregateType<T extends Show_timeAggregateArgs> = {
    [P in keyof T & keyof AggregateShow_time]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow_time[P]>
      : GetScalarType<T[P], AggregateShow_time[P]>;
  };

  export type show_timeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: show_timeWhereInput;
    orderBy?: show_timeOrderByWithAggregationInput | show_timeOrderByWithAggregationInput[];
    by: Show_timeScalarFieldEnum[] | Show_timeScalarFieldEnum;
    having?: show_timeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Show_timeCountAggregateInputType | true;
    _min?: Show_timeMinAggregateInputType;
    _max?: Show_timeMaxAggregateInputType;
  };

  export type Show_timeGroupByOutputType = {
    id: string;
    start_time: Date;
    end_time: Date;
    movie_id: string;
    cinema_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Show_timeCountAggregateOutputType | null;
    _min: Show_timeMinAggregateOutputType | null;
    _max: Show_timeMaxAggregateOutputType | null;
  };

  type GetShow_timeGroupByPayload<T extends show_timeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Show_timeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Show_timeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Show_timeGroupByOutputType[P]>
          : GetScalarType<T[P], Show_timeGroupByOutputType[P]>;
      }
    >
  >;

  export type show_timeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        start_time?: boolean;
        end_time?: boolean;
        movie_id?: boolean;
        cinema_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        cinema?: boolean | cinemaDefaultArgs<ExtArgs>;
        movie?: boolean | movieDefaultArgs<ExtArgs>;
        ticket?: boolean | show_time$ticketArgs<ExtArgs>;
        _count?: boolean | Show_timeCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['show_time']
    >;

  export type show_timeSelectScalar = {
    id?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    movie_id?: boolean;
    cinema_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type show_timeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | cinemaDefaultArgs<ExtArgs>;
    movie?: boolean | movieDefaultArgs<ExtArgs>;
    ticket?: boolean | show_time$ticketArgs<ExtArgs>;
    _count?: boolean | Show_timeCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $show_timePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'show_time';
    objects: {
      cinema: Prisma.$cinemaPayload<ExtArgs>;
      movie: Prisma.$moviePayload<ExtArgs>;
      ticket: Prisma.$ticketPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        start_time: Date;
        end_time: Date;
        movie_id: string;
        cinema_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['show_time']
    >;
    composites: {};
  };

  type show_timeGetPayload<S extends boolean | null | undefined | show_timeDefaultArgs> = $Result.GetResult<
    Prisma.$show_timePayload,
    S
  >;

  type show_timeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    show_timeFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Show_timeCountAggregateInputType | true;
  };

  export interface show_timeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['show_time']; meta: { name: 'show_time' } };
    /**
     * Find zero or one Show_time that matches the filter.
     * @param {show_timeFindUniqueArgs} args - Arguments to find a Show_time
     * @example
     * // Get one Show_time
     * const show_time = await prisma.show_time.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends show_timeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, show_timeFindUniqueArgs<ExtArgs>>,
    ): Prisma__show_timeClient<
      $Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Show_time that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {show_timeFindUniqueOrThrowArgs} args - Arguments to find a Show_time
     * @example
     * // Get one Show_time
     * const show_time = await prisma.show_time.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends show_timeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, show_timeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__show_timeClient<
      $Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Show_time that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timeFindFirstArgs} args - Arguments to find a Show_time
     * @example
     * // Get one Show_time
     * const show_time = await prisma.show_time.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends show_timeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, show_timeFindFirstArgs<ExtArgs>>,
    ): Prisma__show_timeClient<
      $Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Show_time that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timeFindFirstOrThrowArgs} args - Arguments to find a Show_time
     * @example
     * // Get one Show_time
     * const show_time = await prisma.show_time.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends show_timeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, show_timeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__show_timeClient<
      $Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Show_times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Show_times
     * const show_times = await prisma.show_time.findMany()
     *
     * // Get first 10 Show_times
     * const show_times = await prisma.show_time.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const show_timeWithIdOnly = await prisma.show_time.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends show_timeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, show_timeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Show_time.
     * @param {show_timeCreateArgs} args - Arguments to create a Show_time.
     * @example
     * // Create one Show_time
     * const Show_time = await prisma.show_time.create({
     *   data: {
     *     // ... data to create a Show_time
     *   }
     * })
     *
     **/
    create<T extends show_timeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, show_timeCreateArgs<ExtArgs>>,
    ): Prisma__show_timeClient<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Show_times.
     *     @param {show_timeCreateManyArgs} args - Arguments to create many Show_times.
     *     @example
     *     // Create many Show_times
     *     const show_time = await prisma.show_time.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends show_timeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, show_timeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Show_time.
     * @param {show_timeDeleteArgs} args - Arguments to delete one Show_time.
     * @example
     * // Delete one Show_time
     * const Show_time = await prisma.show_time.delete({
     *   where: {
     *     // ... filter to delete one Show_time
     *   }
     * })
     *
     **/
    delete<T extends show_timeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, show_timeDeleteArgs<ExtArgs>>,
    ): Prisma__show_timeClient<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Show_time.
     * @param {show_timeUpdateArgs} args - Arguments to update one Show_time.
     * @example
     * // Update one Show_time
     * const show_time = await prisma.show_time.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends show_timeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, show_timeUpdateArgs<ExtArgs>>,
    ): Prisma__show_timeClient<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Show_times.
     * @param {show_timeDeleteManyArgs} args - Arguments to filter Show_times to delete.
     * @example
     * // Delete a few Show_times
     * const { count } = await prisma.show_time.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends show_timeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, show_timeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Show_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Show_times
     * const show_time = await prisma.show_time.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends show_timeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, show_timeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Show_time.
     * @param {show_timeUpsertArgs} args - Arguments to update or create a Show_time.
     * @example
     * // Update or create a Show_time
     * const show_time = await prisma.show_time.upsert({
     *   create: {
     *     // ... data to create a Show_time
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show_time we want to update
     *   }
     * })
     **/
    upsert<T extends show_timeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, show_timeUpsertArgs<ExtArgs>>,
    ): Prisma__show_timeClient<$Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Show_times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timeCountArgs} args - Arguments to filter Show_times to count.
     * @example
     * // Count the number of Show_times
     * const count = await prisma.show_time.count({
     *   where: {
     *     // ... the filter for the Show_times we want to count
     *   }
     * })
     **/
    count<T extends show_timeCountArgs>(
      args?: Subset<T, show_timeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Show_timeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Show_time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Show_timeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Show_timeAggregateArgs>(
      args: Subset<T, Show_timeAggregateArgs>,
    ): Prisma.PrismaPromise<GetShow_timeAggregateType<T>>;

    /**
     * Group by Show_time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {show_timeGroupByArgs} args - Group by arguments.
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
      T extends show_timeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: show_timeGroupByArgs['orderBy'] }
        : { orderBy?: show_timeGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, show_timeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetShow_timeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the show_time model
     */
    readonly fields: show_timeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for show_time.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__show_timeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cinema<T extends cinemaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, cinemaDefaultArgs<ExtArgs>>,
    ): Prisma__cinemaClient<
      $Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    movie<T extends movieDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, movieDefaultArgs<ExtArgs>>,
    ): Prisma__movieClient<
      $Result.GetResult<Prisma.$moviePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    ticket<T extends show_time$ticketArgs<ExtArgs> = {}>(
      args?: Subset<T, show_time$ticketArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the show_time model
   */
  interface show_timeFieldRefs {
    readonly id: FieldRef<'show_time', 'String'>;
    readonly start_time: FieldRef<'show_time', 'DateTime'>;
    readonly end_time: FieldRef<'show_time', 'DateTime'>;
    readonly movie_id: FieldRef<'show_time', 'String'>;
    readonly cinema_id: FieldRef<'show_time', 'String'>;
    readonly created_at: FieldRef<'show_time', 'DateTime'>;
    readonly updated_at: FieldRef<'show_time', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * show_time findUnique
   */
  export type show_timeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * Filter, which show_time to fetch.
     */
    where: show_timeWhereUniqueInput;
  };

  /**
   * show_time findUniqueOrThrow
   */
  export type show_timeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * Filter, which show_time to fetch.
     */
    where: show_timeWhereUniqueInput;
  };

  /**
   * show_time findFirst
   */
  export type show_timeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * Filter, which show_time to fetch.
     */
    where?: show_timeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of show_times to fetch.
     */
    orderBy?: show_timeOrderByWithRelationInput | show_timeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for show_times.
     */
    cursor?: show_timeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` show_times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` show_times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of show_times.
     */
    distinct?: Show_timeScalarFieldEnum | Show_timeScalarFieldEnum[];
  };

  /**
   * show_time findFirstOrThrow
   */
  export type show_timeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * Filter, which show_time to fetch.
     */
    where?: show_timeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of show_times to fetch.
     */
    orderBy?: show_timeOrderByWithRelationInput | show_timeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for show_times.
     */
    cursor?: show_timeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` show_times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` show_times.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of show_times.
     */
    distinct?: Show_timeScalarFieldEnum | Show_timeScalarFieldEnum[];
  };

  /**
   * show_time findMany
   */
  export type show_timeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * Filter, which show_times to fetch.
     */
    where?: show_timeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of show_times to fetch.
     */
    orderBy?: show_timeOrderByWithRelationInput | show_timeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing show_times.
     */
    cursor?: show_timeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` show_times from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` show_times.
     */
    skip?: number;
    distinct?: Show_timeScalarFieldEnum | Show_timeScalarFieldEnum[];
  };

  /**
   * show_time create
   */
  export type show_timeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * The data needed to create a show_time.
     */
    data: XOR<show_timeCreateInput, show_timeUncheckedCreateInput>;
  };

  /**
   * show_time createMany
   */
  export type show_timeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many show_times.
     */
    data: show_timeCreateManyInput | show_timeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * show_time update
   */
  export type show_timeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * The data needed to update a show_time.
     */
    data: XOR<show_timeUpdateInput, show_timeUncheckedUpdateInput>;
    /**
     * Choose, which show_time to update.
     */
    where: show_timeWhereUniqueInput;
  };

  /**
   * show_time updateMany
   */
  export type show_timeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update show_times.
     */
    data: XOR<show_timeUpdateManyMutationInput, show_timeUncheckedUpdateManyInput>;
    /**
     * Filter which show_times to update
     */
    where?: show_timeWhereInput;
  };

  /**
   * show_time upsert
   */
  export type show_timeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * The filter to search for the show_time to update in case it exists.
     */
    where: show_timeWhereUniqueInput;
    /**
     * In case the show_time found by the `where` argument doesn't exist, create a new show_time with this data.
     */
    create: XOR<show_timeCreateInput, show_timeUncheckedCreateInput>;
    /**
     * In case the show_time was found with the provided `where` argument, update it with this data.
     */
    update: XOR<show_timeUpdateInput, show_timeUncheckedUpdateInput>;
  };

  /**
   * show_time delete
   */
  export type show_timeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
    /**
     * Filter which show_time to delete.
     */
    where: show_timeWhereUniqueInput;
  };

  /**
   * show_time deleteMany
   */
  export type show_timeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which show_times to delete
     */
    where?: show_timeWhereInput;
  };

  /**
   * show_time.ticket
   */
  export type show_time$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    cursor?: ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * show_time without action
   */
  export type show_timeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the show_time
     */
    select?: show_timeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: show_timeInclude<ExtArgs> | null;
  };

  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null;
    _avg: Team_memberAvgAggregateOutputType | null;
    _sum: Team_memberSumAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  export type Team_memberAvgAggregateOutputType = {
    salary: number | null;
  };

  export type Team_memberSumAggregateOutputType = {
    salary: number | null;
  };

  export type Team_memberMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    position: string | null;
    hire_date: Date | null;
    salary: number | null;
    cinema_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    position: string | null;
    hire_date: Date | null;
    salary: number | null;
    cinema_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberCountAggregateOutputType = {
    id: number;
    user_id: number;
    position: number;
    hire_date: number;
    salary: number;
    cinema_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Team_memberAvgAggregateInputType = {
    salary?: true;
  };

  export type Team_memberSumAggregateInputType = {
    salary?: true;
  };

  export type Team_memberMinAggregateInputType = {
    id?: true;
    user_id?: true;
    position?: true;
    hire_date?: true;
    salary?: true;
    cinema_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    position?: true;
    hire_date?: true;
    salary?: true;
    cinema_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberCountAggregateInputType = {
    id?: true;
    user_id?: true;
    position?: true;
    hire_date?: true;
    salary?: true;
    cinema_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned team_members
     **/
    _count?: true | Team_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Team_memberAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Team_memberSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Team_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Team_memberMaxAggregateInputType;
  };

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>;
  };

  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[];
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum;
    having?: team_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Team_memberCountAggregateInputType | true;
    _avg?: Team_memberAvgAggregateInputType;
    _sum?: Team_memberSumAggregateInputType;
    _min?: Team_memberMinAggregateInputType;
    _max?: Team_memberMaxAggregateInputType;
  };

  export type Team_memberGroupByOutputType = {
    id: string;
    user_id: string;
    position: string;
    hire_date: Date;
    salary: number;
    cinema_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Team_memberCountAggregateOutputType | null;
    _avg: Team_memberAvgAggregateOutputType | null;
    _sum: Team_memberSumAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Team_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Team_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        position?: boolean;
        hire_date?: boolean;
        salary?: boolean;
        cinema_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        cinema?: boolean | cinemaDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team_member']
    >;

  export type team_memberSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    position?: boolean;
    hire_date?: boolean;
    salary?: boolean;
    cinema_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | cinemaDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team_member';
    objects: {
      cinema: Prisma.$cinemaPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        position: string;
        hire_date: Date;
        salary: number;
        cinema_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team_member']
    >;
    composites: {};
  };

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<
    Prisma.$team_memberPayload,
    S
  >;

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    team_memberFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Team_memberCountAggregateInputType | true;
  };

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member']; meta: { name: 'team_member' } };
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends team_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Team_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends team_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     *
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const team_memberWithIdOnly = await prisma.team_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends team_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     *
     **/
    create<T extends team_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Team_members.
     *     @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     *     @example
     *     // Create many Team_members
     *     const team_member = await prisma.team_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends team_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     *
     **/
    delete<T extends team_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends team_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends team_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends team_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     **/
    upsert<T extends team_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
     **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Team_memberAggregateArgs>(
      args: Subset<T, Team_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>;

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
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
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team_member model
     */
    readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cinema<T extends cinemaDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, cinemaDefaultArgs<ExtArgs>>,
    ): Prisma__cinemaClient<
      $Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly id: FieldRef<'team_member', 'String'>;
    readonly user_id: FieldRef<'team_member', 'String'>;
    readonly position: FieldRef<'team_member', 'String'>;
    readonly hire_date: FieldRef<'team_member', 'DateTime'>;
    readonly salary: FieldRef<'team_member', 'Int'>;
    readonly cinema_id: FieldRef<'team_member', 'String'>;
    readonly created_at: FieldRef<'team_member', 'DateTime'>;
    readonly updated_at: FieldRef<'team_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
  };

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>;
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput;
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
  };

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
  };

  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null;
    _avg: TicketAvgAggregateOutputType | null;
    _sum: TicketSumAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
  };

  export type TicketAvgAggregateOutputType = {
    price: number | null;
    seat_number: number | null;
  };

  export type TicketSumAggregateOutputType = {
    price: number | null;
    seat_number: number | null;
  };

  export type TicketMinAggregateOutputType = {
    id: string | null;
    price: number | null;
    seat_number: number | null;
    show_time_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TicketMaxAggregateOutputType = {
    id: string | null;
    price: number | null;
    seat_number: number | null;
    show_time_id: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TicketCountAggregateOutputType = {
    id: number;
    price: number;
    seat_number: number;
    show_time_id: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TicketAvgAggregateInputType = {
    price?: true;
    seat_number?: true;
  };

  export type TicketSumAggregateInputType = {
    price?: true;
    seat_number?: true;
  };

  export type TicketMinAggregateInputType = {
    id?: true;
    price?: true;
    seat_number?: true;
    show_time_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TicketMaxAggregateInputType = {
    id?: true;
    price?: true;
    seat_number?: true;
    show_time_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TicketCountAggregateInputType = {
    id?: true;
    price?: true;
    seat_number?: true;
    show_time_id?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tickets
     **/
    _count?: true | TicketCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TicketAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TicketSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TicketMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TicketMaxAggregateInputType;
  };

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>;
  };

  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[];
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum;
    having?: ticketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketCountAggregateInputType | true;
    _avg?: TicketAvgAggregateInputType;
    _sum?: TicketSumAggregateInputType;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
  };

  export type TicketGroupByOutputType = {
    id: string;
    price: number;
    seat_number: number;
    show_time_id: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: TicketCountAggregateOutputType | null;
    _avg: TicketAvgAggregateOutputType | null;
    _sum: TicketSumAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
  };

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TicketGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
          : GetScalarType<T[P], TicketGroupByOutputType[P]>;
      }
    >
  >;

  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      price?: boolean;
      seat_number?: boolean;
      show_time_id?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      show_time?: boolean | show_timeDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['ticket']
  >;

  export type ticketSelectScalar = {
    id?: boolean;
    price?: boolean;
    seat_number?: boolean;
    show_time_id?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    show_time?: boolean | show_timeDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'ticket';
    objects: {
      show_time: Prisma.$show_timePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        price: number;
        seat_number: number;
        show_time_id: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['ticket']
    >;
    composites: {};
  };

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<
    Prisma.$ticketPayload,
    S
  >;

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    ticketFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TicketCountAggregateInputType | true;
  };

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket']; meta: { name: 'ticket' } };
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends ticketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Ticket that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends ticketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     *
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends ticketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     *
     **/
    create<T extends ticketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ticketCreateArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tickets.
     *     @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     *     @example
     *     // Create many Tickets
     *     const ticket = await prisma.ticket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends ticketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     *
     **/
    delete<T extends ticketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends ticketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends ticketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends ticketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     **/
    upsert<T extends ticketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>,
    ): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
     **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(
      args: Subset<T, TicketAggregateArgs>,
    ): Prisma.PrismaPromise<GetTicketAggregateType<T>>;

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
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
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ticket model
     */
    readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    show_time<T extends show_timeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, show_timeDefaultArgs<ExtArgs>>,
    ): Prisma__show_timeClient<
      $Result.GetResult<Prisma.$show_timePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<'ticket', 'String'>;
    readonly price: FieldRef<'ticket', 'Int'>;
    readonly seat_number: FieldRef<'ticket', 'Int'>;
    readonly show_time_id: FieldRef<'ticket', 'String'>;
    readonly user_id: FieldRef<'ticket', 'String'>;
    readonly created_at: FieldRef<'ticket', 'DateTime'>;
    readonly updated_at: FieldRef<'ticket', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tickets.
     */
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>;
  };

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>;
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>;
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput;
  };

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput;
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>;
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>;
  };

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput;
  };

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput;
  };

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      cinema?: boolean | user$cinemaArgs<ExtArgs>;
      team_member?: boolean | user$team_memberArgs<ExtArgs>;
      ticket?: boolean | user$ticketArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | user$cinemaArgs<ExtArgs>;
    team_member?: boolean | user$team_memberArgs<ExtArgs>;
    ticket?: boolean | user$ticketArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      cinema: Prisma.$cinemaPayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
      ticket: Prisma.$ticketPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cinema<T extends user$cinemaArgs<ExtArgs> = {}>(
      args?: Subset<T, user$cinemaArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cinemaPayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends user$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    ticket<T extends user$ticketArgs<ExtArgs> = {}>(
      args?: Subset<T, user$ticketArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.cinema
   */
  export type user$cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cinema
     */
    select?: cinemaSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: cinemaInclude<ExtArgs> | null;
    where?: cinemaWhereInput;
    orderBy?: cinemaOrderByWithRelationInput | cinemaOrderByWithRelationInput[];
    cursor?: cinemaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[];
  };

  /**
   * user.team_member
   */
  export type user$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * user.ticket
   */
  export type user$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ticketInclude<ExtArgs> | null;
    where?: ticketWhereInput;
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[];
    cursor?: ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CinemaScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    seating_capacity: 'seating_capacity';
    number_of_screens: 'number_of_screens';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum];

  export const MovieScalarFieldEnum: {
    id: 'id';
    title: 'title';
    director: 'director';
    duration: 'duration';
    genre: 'genre';
    rating: 'rating';
    release_date: 'release_date';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum];

  export const Show_timeScalarFieldEnum: {
    id: 'id';
    start_time: 'start_time';
    end_time: 'end_time';
    movie_id: 'movie_id';
    cinema_id: 'cinema_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Show_timeScalarFieldEnum = (typeof Show_timeScalarFieldEnum)[keyof typeof Show_timeScalarFieldEnum];

  export const Team_memberScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    position: 'position';
    hire_date: 'hire_date';
    salary: 'salary';
    cinema_id: 'cinema_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum];

  export const TicketScalarFieldEnum: {
    id: 'id';
    price: 'price';
    seat_number: 'seat_number';
    show_time_id: 'show_time_id';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type cinemaWhereInput = {
    AND?: cinemaWhereInput | cinemaWhereInput[];
    OR?: cinemaWhereInput[];
    NOT?: cinemaWhereInput | cinemaWhereInput[];
    id?: UuidFilter<'cinema'> | string;
    description?: StringNullableFilter<'cinema'> | string | null;
    location?: StringNullableFilter<'cinema'> | string | null;
    seating_capacity?: IntNullableFilter<'cinema'> | number | null;
    number_of_screens?: IntNullableFilter<'cinema'> | number | null;
    name?: StringFilter<'cinema'> | string;
    created_at?: DateTimeFilter<'cinema'> | Date | string;
    updated_at?: DateTimeFilter<'cinema'> | Date | string;
    user_id?: UuidFilter<'cinema'> | string;
    tenant_id?: StringFilter<'cinema'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    show_time?: Show_timeListRelationFilter;
    team_member?: Team_memberListRelationFilter;
  };

  export type cinemaOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    seating_capacity?: SortOrderInput | SortOrder;
    number_of_screens?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
    show_time?: show_timeOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type cinemaWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: cinemaWhereInput | cinemaWhereInput[];
      OR?: cinemaWhereInput[];
      NOT?: cinemaWhereInput | cinemaWhereInput[];
      description?: StringNullableFilter<'cinema'> | string | null;
      location?: StringNullableFilter<'cinema'> | string | null;
      seating_capacity?: IntNullableFilter<'cinema'> | number | null;
      number_of_screens?: IntNullableFilter<'cinema'> | number | null;
      name?: StringFilter<'cinema'> | string;
      created_at?: DateTimeFilter<'cinema'> | Date | string;
      updated_at?: DateTimeFilter<'cinema'> | Date | string;
      user_id?: UuidFilter<'cinema'> | string;
      tenant_id?: StringFilter<'cinema'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      show_time?: Show_timeListRelationFilter;
      team_member?: Team_memberListRelationFilter;
    },
    'id'
  >;

  export type cinemaOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    seating_capacity?: SortOrderInput | SortOrder;
    number_of_screens?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: cinemaCountOrderByAggregateInput;
    _avg?: cinemaAvgOrderByAggregateInput;
    _max?: cinemaMaxOrderByAggregateInput;
    _min?: cinemaMinOrderByAggregateInput;
    _sum?: cinemaSumOrderByAggregateInput;
  };

  export type cinemaScalarWhereWithAggregatesInput = {
    AND?: cinemaScalarWhereWithAggregatesInput | cinemaScalarWhereWithAggregatesInput[];
    OR?: cinemaScalarWhereWithAggregatesInput[];
    NOT?: cinemaScalarWhereWithAggregatesInput | cinemaScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'cinema'> | string;
    description?: StringNullableWithAggregatesFilter<'cinema'> | string | null;
    location?: StringNullableWithAggregatesFilter<'cinema'> | string | null;
    seating_capacity?: IntNullableWithAggregatesFilter<'cinema'> | number | null;
    number_of_screens?: IntNullableWithAggregatesFilter<'cinema'> | number | null;
    name?: StringWithAggregatesFilter<'cinema'> | string;
    created_at?: DateTimeWithAggregatesFilter<'cinema'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'cinema'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'cinema'> | string;
    tenant_id?: StringWithAggregatesFilter<'cinema'> | string;
  };

  export type movieWhereInput = {
    AND?: movieWhereInput | movieWhereInput[];
    OR?: movieWhereInput[];
    NOT?: movieWhereInput | movieWhereInput[];
    id?: UuidFilter<'movie'> | string;
    title?: StringFilter<'movie'> | string;
    director?: StringFilter<'movie'> | string;
    duration?: IntFilter<'movie'> | number;
    genre?: StringFilter<'movie'> | string;
    rating?: IntFilter<'movie'> | number;
    release_date?: DateTimeFilter<'movie'> | Date | string;
    created_at?: DateTimeFilter<'movie'> | Date | string;
    updated_at?: DateTimeFilter<'movie'> | Date | string;
    show_time?: Show_timeListRelationFilter;
  };

  export type movieOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    show_time?: show_timeOrderByRelationAggregateInput;
  };

  export type movieWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: movieWhereInput | movieWhereInput[];
      OR?: movieWhereInput[];
      NOT?: movieWhereInput | movieWhereInput[];
      title?: StringFilter<'movie'> | string;
      director?: StringFilter<'movie'> | string;
      duration?: IntFilter<'movie'> | number;
      genre?: StringFilter<'movie'> | string;
      rating?: IntFilter<'movie'> | number;
      release_date?: DateTimeFilter<'movie'> | Date | string;
      created_at?: DateTimeFilter<'movie'> | Date | string;
      updated_at?: DateTimeFilter<'movie'> | Date | string;
      show_time?: Show_timeListRelationFilter;
    },
    'id'
  >;

  export type movieOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: movieCountOrderByAggregateInput;
    _avg?: movieAvgOrderByAggregateInput;
    _max?: movieMaxOrderByAggregateInput;
    _min?: movieMinOrderByAggregateInput;
    _sum?: movieSumOrderByAggregateInput;
  };

  export type movieScalarWhereWithAggregatesInput = {
    AND?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    OR?: movieScalarWhereWithAggregatesInput[];
    NOT?: movieScalarWhereWithAggregatesInput | movieScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'movie'> | string;
    title?: StringWithAggregatesFilter<'movie'> | string;
    director?: StringWithAggregatesFilter<'movie'> | string;
    duration?: IntWithAggregatesFilter<'movie'> | number;
    genre?: StringWithAggregatesFilter<'movie'> | string;
    rating?: IntWithAggregatesFilter<'movie'> | number;
    release_date?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'movie'> | Date | string;
  };

  export type show_timeWhereInput = {
    AND?: show_timeWhereInput | show_timeWhereInput[];
    OR?: show_timeWhereInput[];
    NOT?: show_timeWhereInput | show_timeWhereInput[];
    id?: UuidFilter<'show_time'> | string;
    start_time?: DateTimeFilter<'show_time'> | Date | string;
    end_time?: DateTimeFilter<'show_time'> | Date | string;
    movie_id?: UuidFilter<'show_time'> | string;
    cinema_id?: UuidFilter<'show_time'> | string;
    created_at?: DateTimeFilter<'show_time'> | Date | string;
    updated_at?: DateTimeFilter<'show_time'> | Date | string;
    cinema?: XOR<CinemaRelationFilter, cinemaWhereInput>;
    movie?: XOR<MovieRelationFilter, movieWhereInput>;
    ticket?: TicketListRelationFilter;
  };

  export type show_timeOrderByWithRelationInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    movie_id?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    cinema?: cinemaOrderByWithRelationInput;
    movie?: movieOrderByWithRelationInput;
    ticket?: ticketOrderByRelationAggregateInput;
  };

  export type show_timeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: show_timeWhereInput | show_timeWhereInput[];
      OR?: show_timeWhereInput[];
      NOT?: show_timeWhereInput | show_timeWhereInput[];
      start_time?: DateTimeFilter<'show_time'> | Date | string;
      end_time?: DateTimeFilter<'show_time'> | Date | string;
      movie_id?: UuidFilter<'show_time'> | string;
      cinema_id?: UuidFilter<'show_time'> | string;
      created_at?: DateTimeFilter<'show_time'> | Date | string;
      updated_at?: DateTimeFilter<'show_time'> | Date | string;
      cinema?: XOR<CinemaRelationFilter, cinemaWhereInput>;
      movie?: XOR<MovieRelationFilter, movieWhereInput>;
      ticket?: TicketListRelationFilter;
    },
    'id'
  >;

  export type show_timeOrderByWithAggregationInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    movie_id?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: show_timeCountOrderByAggregateInput;
    _max?: show_timeMaxOrderByAggregateInput;
    _min?: show_timeMinOrderByAggregateInput;
  };

  export type show_timeScalarWhereWithAggregatesInput = {
    AND?: show_timeScalarWhereWithAggregatesInput | show_timeScalarWhereWithAggregatesInput[];
    OR?: show_timeScalarWhereWithAggregatesInput[];
    NOT?: show_timeScalarWhereWithAggregatesInput | show_timeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'show_time'> | string;
    start_time?: DateTimeWithAggregatesFilter<'show_time'> | Date | string;
    end_time?: DateTimeWithAggregatesFilter<'show_time'> | Date | string;
    movie_id?: UuidWithAggregatesFilter<'show_time'> | string;
    cinema_id?: UuidWithAggregatesFilter<'show_time'> | string;
    created_at?: DateTimeWithAggregatesFilter<'show_time'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'show_time'> | Date | string;
  };

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[];
    OR?: team_memberWhereInput[];
    NOT?: team_memberWhereInput | team_memberWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    position?: StringFilter<'team_member'> | string;
    hire_date?: DateTimeFilter<'team_member'> | Date | string;
    salary?: IntFilter<'team_member'> | number;
    cinema_id?: UuidFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
    cinema?: XOR<CinemaRelationFilter, cinemaWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type team_memberOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    position?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    cinema?: cinemaOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type team_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: team_memberWhereInput | team_memberWhereInput[];
      OR?: team_memberWhereInput[];
      NOT?: team_memberWhereInput | team_memberWhereInput[];
      user_id?: UuidFilter<'team_member'> | string;
      position?: StringFilter<'team_member'> | string;
      hire_date?: DateTimeFilter<'team_member'> | Date | string;
      salary?: IntFilter<'team_member'> | number;
      cinema_id?: UuidFilter<'team_member'> | string;
      created_at?: DateTimeFilter<'team_member'> | Date | string;
      updated_at?: DateTimeFilter<'team_member'> | Date | string;
      cinema?: XOR<CinemaRelationFilter, cinemaWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type team_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    position?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: team_memberCountOrderByAggregateInput;
    _avg?: team_memberAvgOrderByAggregateInput;
    _max?: team_memberMaxOrderByAggregateInput;
    _min?: team_memberMinOrderByAggregateInput;
    _sum?: team_memberSumOrderByAggregateInput;
  };

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    OR?: team_memberScalarWhereWithAggregatesInput[];
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team_member'> | string;
    user_id?: UuidWithAggregatesFilter<'team_member'> | string;
    position?: StringWithAggregatesFilter<'team_member'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    salary?: IntWithAggregatesFilter<'team_member'> | number;
    cinema_id?: UuidWithAggregatesFilter<'team_member'> | string;
    created_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
  };

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[];
    OR?: ticketWhereInput[];
    NOT?: ticketWhereInput | ticketWhereInput[];
    id?: UuidFilter<'ticket'> | string;
    price?: IntFilter<'ticket'> | number;
    seat_number?: IntFilter<'ticket'> | number;
    show_time_id?: UuidFilter<'ticket'> | string;
    user_id?: UuidFilter<'ticket'> | string;
    created_at?: DateTimeFilter<'ticket'> | Date | string;
    updated_at?: DateTimeFilter<'ticket'> | Date | string;
    show_time?: XOR<Show_timeRelationFilter, show_timeWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder;
    price?: SortOrder;
    seat_number?: SortOrder;
    show_time_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    show_time?: show_timeOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type ticketWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ticketWhereInput | ticketWhereInput[];
      OR?: ticketWhereInput[];
      NOT?: ticketWhereInput | ticketWhereInput[];
      price?: IntFilter<'ticket'> | number;
      seat_number?: IntFilter<'ticket'> | number;
      show_time_id?: UuidFilter<'ticket'> | string;
      user_id?: UuidFilter<'ticket'> | string;
      created_at?: DateTimeFilter<'ticket'> | Date | string;
      updated_at?: DateTimeFilter<'ticket'> | Date | string;
      show_time?: XOR<Show_timeRelationFilter, show_timeWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder;
    price?: SortOrder;
    seat_number?: SortOrder;
    show_time_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ticketCountOrderByAggregateInput;
    _avg?: ticketAvgOrderByAggregateInput;
    _max?: ticketMaxOrderByAggregateInput;
    _min?: ticketMinOrderByAggregateInput;
    _sum?: ticketSumOrderByAggregateInput;
  };

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[];
    OR?: ticketScalarWhereWithAggregatesInput[];
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'ticket'> | string;
    price?: IntWithAggregatesFilter<'ticket'> | number;
    seat_number?: IntWithAggregatesFilter<'ticket'> | number;
    show_time_id?: UuidWithAggregatesFilter<'ticket'> | string;
    user_id?: UuidWithAggregatesFilter<'ticket'> | string;
    created_at?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'ticket'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    cinema?: CinemaListRelationFilter;
    team_member?: Team_memberListRelationFilter;
    ticket?: TicketListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    cinema?: cinemaOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
    ticket?: ticketOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      cinema?: CinemaListRelationFilter;
      team_member?: Team_memberListRelationFilter;
      ticket?: TicketListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type cinemaCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCinemaInput;
    show_time?: show_timeCreateNestedManyWithoutCinemaInput;
    team_member?: team_memberCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    show_time?: show_timeUncheckedCreateNestedManyWithoutCinemaInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCinemaNestedInput;
    show_time?: show_timeUpdateManyWithoutCinemaNestedInput;
    team_member?: team_memberUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    show_time?: show_timeUncheckedUpdateManyWithoutCinemaNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type cinemaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type cinemaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type movieCreateInput = {
    id?: string;
    title: string;
    director: string;
    duration: number;
    genre: string;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    show_time?: show_timeCreateNestedManyWithoutMovieInput;
  };

  export type movieUncheckedCreateInput = {
    id?: string;
    title: string;
    director: string;
    duration: number;
    genre: string;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    show_time?: show_timeUncheckedCreateNestedManyWithoutMovieInput;
  };

  export type movieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    genre?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    show_time?: show_timeUpdateManyWithoutMovieNestedInput;
  };

  export type movieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    genre?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    show_time?: show_timeUncheckedUpdateManyWithoutMovieNestedInput;
  };

  export type movieCreateManyInput = {
    id?: string;
    title: string;
    director: string;
    duration: number;
    genre: string;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    genre?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    genre?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type show_timeCreateInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema: cinemaCreateNestedOneWithoutShow_timeInput;
    movie: movieCreateNestedOneWithoutShow_timeInput;
    ticket?: ticketCreateNestedManyWithoutShow_timeInput;
  };

  export type show_timeUncheckedCreateInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    movie_id: string;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutShow_timeInput;
  };

  export type show_timeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateOneRequiredWithoutShow_timeNestedInput;
    movie?: movieUpdateOneRequiredWithoutShow_timeNestedInput;
    ticket?: ticketUpdateManyWithoutShow_timeNestedInput;
  };

  export type show_timeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutShow_timeNestedInput;
  };

  export type show_timeCreateManyInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    movie_id: string;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type show_timeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type show_timeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateInput = {
    id?: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema: cinemaCreateNestedOneWithoutTeam_memberInput;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateInput = {
    id?: string;
    user_id: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateOneRequiredWithoutTeam_memberNestedInput;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyInput = {
    id?: string;
    user_id: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateInput = {
    id?: string;
    price: number;
    seat_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    show_time: show_timeCreateNestedOneWithoutTicketInput;
    user: userCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateInput = {
    id?: string;
    price: number;
    seat_number: number;
    show_time_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    show_time?: show_timeUpdateOneRequiredWithoutTicketNestedInput;
    user?: userUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    show_time_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateManyInput = {
    id?: string;
    price: number;
    seat_number: number;
    show_time_id: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    show_time_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
    ticket?: ticketCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Show_timeListRelationFilter = {
    every?: show_timeWhereInput;
    some?: show_timeWhereInput;
    none?: show_timeWhereInput;
  };

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput;
    some?: team_memberWhereInput;
    none?: team_memberWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type show_timeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type cinemaCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    seating_capacity?: SortOrder;
    number_of_screens?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type cinemaAvgOrderByAggregateInput = {
    seating_capacity?: SortOrder;
    number_of_screens?: SortOrder;
  };

  export type cinemaMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    seating_capacity?: SortOrder;
    number_of_screens?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type cinemaMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    seating_capacity?: SortOrder;
    number_of_screens?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type cinemaSumOrderByAggregateInput = {
    seating_capacity?: SortOrder;
    number_of_screens?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type movieCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieAvgOrderByAggregateInput = {
    duration?: SortOrder;
    rating?: SortOrder;
  };

  export type movieMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    director?: SortOrder;
    duration?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    release_date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type movieSumOrderByAggregateInput = {
    duration?: SortOrder;
    rating?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type CinemaRelationFilter = {
    is?: cinemaWhereInput;
    isNot?: cinemaWhereInput;
  };

  export type MovieRelationFilter = {
    is?: movieWhereInput;
    isNot?: movieWhereInput;
  };

  export type TicketListRelationFilter = {
    every?: ticketWhereInput;
    some?: ticketWhereInput;
    none?: ticketWhereInput;
  };

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type show_timeCountOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    movie_id?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type show_timeMaxOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    movie_id?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type show_timeMinOrderByAggregateInput = {
    id?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    movie_id?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    position?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type team_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    position?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    position?: SortOrder;
    hire_date?: SortOrder;
    salary?: SortOrder;
    cinema_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberSumOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type Show_timeRelationFilter = {
    is?: show_timeWhereInput;
    isNot?: show_timeWhereInput;
  };

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    seat_number?: SortOrder;
    show_time_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketAvgOrderByAggregateInput = {
    price?: SortOrder;
    seat_number?: SortOrder;
  };

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    seat_number?: SortOrder;
    show_time_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    seat_number?: SortOrder;
    show_time_id?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ticketSumOrderByAggregateInput = {
    price?: SortOrder;
    seat_number?: SortOrder;
  };

  export type CinemaListRelationFilter = {
    every?: cinemaWhereInput;
    some?: cinemaWhereInput;
    none?: cinemaWhereInput;
  };

  export type cinemaOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCinemaInput = {
    create?: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
    connectOrCreate?: userCreateOrConnectWithoutCinemaInput;
    connect?: userWhereUniqueInput;
  };

  export type show_timeCreateNestedManyWithoutCinemaInput = {
    create?:
      | XOR<show_timeCreateWithoutCinemaInput, show_timeUncheckedCreateWithoutCinemaInput>
      | show_timeCreateWithoutCinemaInput[]
      | show_timeUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutCinemaInput | show_timeCreateOrConnectWithoutCinemaInput[];
    createMany?: show_timeCreateManyCinemaInputEnvelope;
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutCinemaInput = {
    create?:
      | XOR<team_memberCreateWithoutCinemaInput, team_memberUncheckedCreateWithoutCinemaInput>
      | team_memberCreateWithoutCinemaInput[]
      | team_memberUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCinemaInput | team_memberCreateOrConnectWithoutCinemaInput[];
    createMany?: team_memberCreateManyCinemaInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type show_timeUncheckedCreateNestedManyWithoutCinemaInput = {
    create?:
      | XOR<show_timeCreateWithoutCinemaInput, show_timeUncheckedCreateWithoutCinemaInput>
      | show_timeCreateWithoutCinemaInput[]
      | show_timeUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutCinemaInput | show_timeCreateOrConnectWithoutCinemaInput[];
    createMany?: show_timeCreateManyCinemaInputEnvelope;
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutCinemaInput = {
    create?:
      | XOR<team_memberCreateWithoutCinemaInput, team_memberUncheckedCreateWithoutCinemaInput>
      | team_memberCreateWithoutCinemaInput[]
      | team_memberUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCinemaInput | team_memberCreateOrConnectWithoutCinemaInput[];
    createMany?: team_memberCreateManyCinemaInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCinemaNestedInput = {
    create?: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
    connectOrCreate?: userCreateOrConnectWithoutCinemaInput;
    upsert?: userUpsertWithoutCinemaInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCinemaInput, userUpdateWithoutCinemaInput>,
      userUncheckedUpdateWithoutCinemaInput
    >;
  };

  export type show_timeUpdateManyWithoutCinemaNestedInput = {
    create?:
      | XOR<show_timeCreateWithoutCinemaInput, show_timeUncheckedCreateWithoutCinemaInput>
      | show_timeCreateWithoutCinemaInput[]
      | show_timeUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutCinemaInput | show_timeCreateOrConnectWithoutCinemaInput[];
    upsert?: show_timeUpsertWithWhereUniqueWithoutCinemaInput | show_timeUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: show_timeCreateManyCinemaInputEnvelope;
    set?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    disconnect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    delete?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    update?: show_timeUpdateWithWhereUniqueWithoutCinemaInput | show_timeUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: show_timeUpdateManyWithWhereWithoutCinemaInput | show_timeUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: show_timeScalarWhereInput | show_timeScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutCinemaNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutCinemaInput, team_memberUncheckedCreateWithoutCinemaInput>
      | team_memberCreateWithoutCinemaInput[]
      | team_memberUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCinemaInput | team_memberCreateOrConnectWithoutCinemaInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutCinemaInput | team_memberUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: team_memberCreateManyCinemaInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutCinemaInput | team_memberUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutCinemaInput | team_memberUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type show_timeUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?:
      | XOR<show_timeCreateWithoutCinemaInput, show_timeUncheckedCreateWithoutCinemaInput>
      | show_timeCreateWithoutCinemaInput[]
      | show_timeUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutCinemaInput | show_timeCreateOrConnectWithoutCinemaInput[];
    upsert?: show_timeUpsertWithWhereUniqueWithoutCinemaInput | show_timeUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: show_timeCreateManyCinemaInputEnvelope;
    set?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    disconnect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    delete?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    update?: show_timeUpdateWithWhereUniqueWithoutCinemaInput | show_timeUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: show_timeUpdateManyWithWhereWithoutCinemaInput | show_timeUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: show_timeScalarWhereInput | show_timeScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutCinemaInput, team_memberUncheckedCreateWithoutCinemaInput>
      | team_memberCreateWithoutCinemaInput[]
      | team_memberUncheckedCreateWithoutCinemaInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutCinemaInput | team_memberCreateOrConnectWithoutCinemaInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutCinemaInput | team_memberUpsertWithWhereUniqueWithoutCinemaInput[];
    createMany?: team_memberCreateManyCinemaInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutCinemaInput | team_memberUpdateWithWhereUniqueWithoutCinemaInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutCinemaInput | team_memberUpdateManyWithWhereWithoutCinemaInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type show_timeCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<show_timeCreateWithoutMovieInput, show_timeUncheckedCreateWithoutMovieInput>
      | show_timeCreateWithoutMovieInput[]
      | show_timeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutMovieInput | show_timeCreateOrConnectWithoutMovieInput[];
    createMany?: show_timeCreateManyMovieInputEnvelope;
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
  };

  export type show_timeUncheckedCreateNestedManyWithoutMovieInput = {
    create?:
      | XOR<show_timeCreateWithoutMovieInput, show_timeUncheckedCreateWithoutMovieInput>
      | show_timeCreateWithoutMovieInput[]
      | show_timeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutMovieInput | show_timeCreateOrConnectWithoutMovieInput[];
    createMany?: show_timeCreateManyMovieInputEnvelope;
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type show_timeUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<show_timeCreateWithoutMovieInput, show_timeUncheckedCreateWithoutMovieInput>
      | show_timeCreateWithoutMovieInput[]
      | show_timeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutMovieInput | show_timeCreateOrConnectWithoutMovieInput[];
    upsert?: show_timeUpsertWithWhereUniqueWithoutMovieInput | show_timeUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: show_timeCreateManyMovieInputEnvelope;
    set?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    disconnect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    delete?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    update?: show_timeUpdateWithWhereUniqueWithoutMovieInput | show_timeUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: show_timeUpdateManyWithWhereWithoutMovieInput | show_timeUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: show_timeScalarWhereInput | show_timeScalarWhereInput[];
  };

  export type show_timeUncheckedUpdateManyWithoutMovieNestedInput = {
    create?:
      | XOR<show_timeCreateWithoutMovieInput, show_timeUncheckedCreateWithoutMovieInput>
      | show_timeCreateWithoutMovieInput[]
      | show_timeUncheckedCreateWithoutMovieInput[];
    connectOrCreate?: show_timeCreateOrConnectWithoutMovieInput | show_timeCreateOrConnectWithoutMovieInput[];
    upsert?: show_timeUpsertWithWhereUniqueWithoutMovieInput | show_timeUpsertWithWhereUniqueWithoutMovieInput[];
    createMany?: show_timeCreateManyMovieInputEnvelope;
    set?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    disconnect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    delete?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    connect?: show_timeWhereUniqueInput | show_timeWhereUniqueInput[];
    update?: show_timeUpdateWithWhereUniqueWithoutMovieInput | show_timeUpdateWithWhereUniqueWithoutMovieInput[];
    updateMany?: show_timeUpdateManyWithWhereWithoutMovieInput | show_timeUpdateManyWithWhereWithoutMovieInput[];
    deleteMany?: show_timeScalarWhereInput | show_timeScalarWhereInput[];
  };

  export type cinemaCreateNestedOneWithoutShow_timeInput = {
    create?: XOR<cinemaCreateWithoutShow_timeInput, cinemaUncheckedCreateWithoutShow_timeInput>;
    connectOrCreate?: cinemaCreateOrConnectWithoutShow_timeInput;
    connect?: cinemaWhereUniqueInput;
  };

  export type movieCreateNestedOneWithoutShow_timeInput = {
    create?: XOR<movieCreateWithoutShow_timeInput, movieUncheckedCreateWithoutShow_timeInput>;
    connectOrCreate?: movieCreateOrConnectWithoutShow_timeInput;
    connect?: movieWhereUniqueInput;
  };

  export type ticketCreateNestedManyWithoutShow_timeInput = {
    create?:
      | XOR<ticketCreateWithoutShow_timeInput, ticketUncheckedCreateWithoutShow_timeInput>
      | ticketCreateWithoutShow_timeInput[]
      | ticketUncheckedCreateWithoutShow_timeInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutShow_timeInput | ticketCreateOrConnectWithoutShow_timeInput[];
    createMany?: ticketCreateManyShow_timeInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type ticketUncheckedCreateNestedManyWithoutShow_timeInput = {
    create?:
      | XOR<ticketCreateWithoutShow_timeInput, ticketUncheckedCreateWithoutShow_timeInput>
      | ticketCreateWithoutShow_timeInput[]
      | ticketUncheckedCreateWithoutShow_timeInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutShow_timeInput | ticketCreateOrConnectWithoutShow_timeInput[];
    createMany?: ticketCreateManyShow_timeInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type cinemaUpdateOneRequiredWithoutShow_timeNestedInput = {
    create?: XOR<cinemaCreateWithoutShow_timeInput, cinemaUncheckedCreateWithoutShow_timeInput>;
    connectOrCreate?: cinemaCreateOrConnectWithoutShow_timeInput;
    upsert?: cinemaUpsertWithoutShow_timeInput;
    connect?: cinemaWhereUniqueInput;
    update?: XOR<
      XOR<cinemaUpdateToOneWithWhereWithoutShow_timeInput, cinemaUpdateWithoutShow_timeInput>,
      cinemaUncheckedUpdateWithoutShow_timeInput
    >;
  };

  export type movieUpdateOneRequiredWithoutShow_timeNestedInput = {
    create?: XOR<movieCreateWithoutShow_timeInput, movieUncheckedCreateWithoutShow_timeInput>;
    connectOrCreate?: movieCreateOrConnectWithoutShow_timeInput;
    upsert?: movieUpsertWithoutShow_timeInput;
    connect?: movieWhereUniqueInput;
    update?: XOR<
      XOR<movieUpdateToOneWithWhereWithoutShow_timeInput, movieUpdateWithoutShow_timeInput>,
      movieUncheckedUpdateWithoutShow_timeInput
    >;
  };

  export type ticketUpdateManyWithoutShow_timeNestedInput = {
    create?:
      | XOR<ticketCreateWithoutShow_timeInput, ticketUncheckedCreateWithoutShow_timeInput>
      | ticketCreateWithoutShow_timeInput[]
      | ticketUncheckedCreateWithoutShow_timeInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutShow_timeInput | ticketCreateOrConnectWithoutShow_timeInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutShow_timeInput | ticketUpsertWithWhereUniqueWithoutShow_timeInput[];
    createMany?: ticketCreateManyShow_timeInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutShow_timeInput | ticketUpdateWithWhereUniqueWithoutShow_timeInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutShow_timeInput | ticketUpdateManyWithWhereWithoutShow_timeInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type ticketUncheckedUpdateManyWithoutShow_timeNestedInput = {
    create?:
      | XOR<ticketCreateWithoutShow_timeInput, ticketUncheckedCreateWithoutShow_timeInput>
      | ticketCreateWithoutShow_timeInput[]
      | ticketUncheckedCreateWithoutShow_timeInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutShow_timeInput | ticketCreateOrConnectWithoutShow_timeInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutShow_timeInput | ticketUpsertWithWhereUniqueWithoutShow_timeInput[];
    createMany?: ticketCreateManyShow_timeInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutShow_timeInput | ticketUpdateWithWhereUniqueWithoutShow_timeInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutShow_timeInput | ticketUpdateManyWithWhereWithoutShow_timeInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type cinemaCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<cinemaCreateWithoutTeam_memberInput, cinemaUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: cinemaCreateOrConnectWithoutTeam_memberInput;
    connect?: cinemaWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type cinemaUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<cinemaCreateWithoutTeam_memberInput, cinemaUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: cinemaCreateOrConnectWithoutTeam_memberInput;
    upsert?: cinemaUpsertWithoutTeam_memberInput;
    connect?: cinemaWhereUniqueInput;
    update?: XOR<
      XOR<cinemaUpdateToOneWithWhereWithoutTeam_memberInput, cinemaUpdateWithoutTeam_memberInput>,
      cinemaUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    upsert?: userUpsertWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeam_memberInput, userUpdateWithoutTeam_memberInput>,
      userUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type show_timeCreateNestedOneWithoutTicketInput = {
    create?: XOR<show_timeCreateWithoutTicketInput, show_timeUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: show_timeCreateOrConnectWithoutTicketInput;
    connect?: show_timeWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTicketInput = {
    create?: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: userCreateOrConnectWithoutTicketInput;
    connect?: userWhereUniqueInput;
  };

  export type show_timeUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<show_timeCreateWithoutTicketInput, show_timeUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: show_timeCreateOrConnectWithoutTicketInput;
    upsert?: show_timeUpsertWithoutTicketInput;
    connect?: show_timeWhereUniqueInput;
    update?: XOR<
      XOR<show_timeUpdateToOneWithWhereWithoutTicketInput, show_timeUpdateWithoutTicketInput>,
      show_timeUncheckedUpdateWithoutTicketInput
    >;
  };

  export type userUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: userCreateOrConnectWithoutTicketInput;
    upsert?: userUpsertWithoutTicketInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTicketInput, userUpdateWithoutTicketInput>,
      userUncheckedUpdateWithoutTicketInput
    >;
  };

  export type cinemaCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type ticketCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type cinemaUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type ticketUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
  };

  export type cinemaUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    upsert?: cinemaUpsertWithWhereUniqueWithoutUserInput | cinemaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    set?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    disconnect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    delete?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    update?: cinemaUpdateWithWhereUniqueWithoutUserInput | cinemaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: cinemaUpdateManyWithWhereWithoutUserInput | cinemaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type ticketUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type cinemaUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>
      | cinemaCreateWithoutUserInput[]
      | cinemaUncheckedCreateWithoutUserInput[];
    connectOrCreate?: cinemaCreateOrConnectWithoutUserInput | cinemaCreateOrConnectWithoutUserInput[];
    upsert?: cinemaUpsertWithWhereUniqueWithoutUserInput | cinemaUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: cinemaCreateManyUserInputEnvelope;
    set?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    disconnect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    delete?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    connect?: cinemaWhereUniqueInput | cinemaWhereUniqueInput[];
    update?: cinemaUpdateWithWhereUniqueWithoutUserInput | cinemaUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: cinemaUpdateManyWithWhereWithoutUserInput | cinemaUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type ticketUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>
      | ticketCreateWithoutUserInput[]
      | ticketUncheckedCreateWithoutUserInput[];
    connectOrCreate?: ticketCreateOrConnectWithoutUserInput | ticketCreateOrConnectWithoutUserInput[];
    upsert?: ticketUpsertWithWhereUniqueWithoutUserInput | ticketUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ticketCreateManyUserInputEnvelope;
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[];
    update?: ticketUpdateWithWhereUniqueWithoutUserInput | ticketUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: ticketUpdateManyWithWhereWithoutUserInput | ticketUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCinemaInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
    ticket?: ticketCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCinemaInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCinemaInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
  };

  export type show_timeCreateWithoutCinemaInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    movie: movieCreateNestedOneWithoutShow_timeInput;
    ticket?: ticketCreateNestedManyWithoutShow_timeInput;
  };

  export type show_timeUncheckedCreateWithoutCinemaInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    movie_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutShow_timeInput;
  };

  export type show_timeCreateOrConnectWithoutCinemaInput = {
    where: show_timeWhereUniqueInput;
    create: XOR<show_timeCreateWithoutCinemaInput, show_timeUncheckedCreateWithoutCinemaInput>;
  };

  export type show_timeCreateManyCinemaInputEnvelope = {
    data: show_timeCreateManyCinemaInput | show_timeCreateManyCinemaInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutCinemaInput = {
    id?: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutCinemaInput = {
    id?: string;
    user_id: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutCinemaInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutCinemaInput, team_memberUncheckedCreateWithoutCinemaInput>;
  };

  export type team_memberCreateManyCinemaInputEnvelope = {
    data: team_memberCreateManyCinemaInput | team_memberCreateManyCinemaInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCinemaInput = {
    update: XOR<userUpdateWithoutCinemaInput, userUncheckedUpdateWithoutCinemaInput>;
    create: XOR<userCreateWithoutCinemaInput, userUncheckedCreateWithoutCinemaInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCinemaInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCinemaInput, userUncheckedUpdateWithoutCinemaInput>;
  };

  export type userUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type show_timeUpsertWithWhereUniqueWithoutCinemaInput = {
    where: show_timeWhereUniqueInput;
    update: XOR<show_timeUpdateWithoutCinemaInput, show_timeUncheckedUpdateWithoutCinemaInput>;
    create: XOR<show_timeCreateWithoutCinemaInput, show_timeUncheckedCreateWithoutCinemaInput>;
  };

  export type show_timeUpdateWithWhereUniqueWithoutCinemaInput = {
    where: show_timeWhereUniqueInput;
    data: XOR<show_timeUpdateWithoutCinemaInput, show_timeUncheckedUpdateWithoutCinemaInput>;
  };

  export type show_timeUpdateManyWithWhereWithoutCinemaInput = {
    where: show_timeScalarWhereInput;
    data: XOR<show_timeUpdateManyMutationInput, show_timeUncheckedUpdateManyWithoutCinemaInput>;
  };

  export type show_timeScalarWhereInput = {
    AND?: show_timeScalarWhereInput | show_timeScalarWhereInput[];
    OR?: show_timeScalarWhereInput[];
    NOT?: show_timeScalarWhereInput | show_timeScalarWhereInput[];
    id?: UuidFilter<'show_time'> | string;
    start_time?: DateTimeFilter<'show_time'> | Date | string;
    end_time?: DateTimeFilter<'show_time'> | Date | string;
    movie_id?: UuidFilter<'show_time'> | string;
    cinema_id?: UuidFilter<'show_time'> | string;
    created_at?: DateTimeFilter<'show_time'> | Date | string;
    updated_at?: DateTimeFilter<'show_time'> | Date | string;
  };

  export type team_memberUpsertWithWhereUniqueWithoutCinemaInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutCinemaInput, team_memberUncheckedUpdateWithoutCinemaInput>;
    create: XOR<team_memberCreateWithoutCinemaInput, team_memberUncheckedCreateWithoutCinemaInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutCinemaInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutCinemaInput, team_memberUncheckedUpdateWithoutCinemaInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutCinemaInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutCinemaInput>;
  };

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    OR?: team_memberScalarWhereInput[];
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    position?: StringFilter<'team_member'> | string;
    hire_date?: DateTimeFilter<'team_member'> | Date | string;
    salary?: IntFilter<'team_member'> | number;
    cinema_id?: UuidFilter<'team_member'> | string;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
  };

  export type show_timeCreateWithoutMovieInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema: cinemaCreateNestedOneWithoutShow_timeInput;
    ticket?: ticketCreateNestedManyWithoutShow_timeInput;
  };

  export type show_timeUncheckedCreateWithoutMovieInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    ticket?: ticketUncheckedCreateNestedManyWithoutShow_timeInput;
  };

  export type show_timeCreateOrConnectWithoutMovieInput = {
    where: show_timeWhereUniqueInput;
    create: XOR<show_timeCreateWithoutMovieInput, show_timeUncheckedCreateWithoutMovieInput>;
  };

  export type show_timeCreateManyMovieInputEnvelope = {
    data: show_timeCreateManyMovieInput | show_timeCreateManyMovieInput[];
    skipDuplicates?: boolean;
  };

  export type show_timeUpsertWithWhereUniqueWithoutMovieInput = {
    where: show_timeWhereUniqueInput;
    update: XOR<show_timeUpdateWithoutMovieInput, show_timeUncheckedUpdateWithoutMovieInput>;
    create: XOR<show_timeCreateWithoutMovieInput, show_timeUncheckedCreateWithoutMovieInput>;
  };

  export type show_timeUpdateWithWhereUniqueWithoutMovieInput = {
    where: show_timeWhereUniqueInput;
    data: XOR<show_timeUpdateWithoutMovieInput, show_timeUncheckedUpdateWithoutMovieInput>;
  };

  export type show_timeUpdateManyWithWhereWithoutMovieInput = {
    where: show_timeScalarWhereInput;
    data: XOR<show_timeUpdateManyMutationInput, show_timeUncheckedUpdateManyWithoutMovieInput>;
  };

  export type cinemaCreateWithoutShow_timeInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCinemaInput;
    team_member?: team_memberCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateWithoutShow_timeInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaCreateOrConnectWithoutShow_timeInput = {
    where: cinemaWhereUniqueInput;
    create: XOR<cinemaCreateWithoutShow_timeInput, cinemaUncheckedCreateWithoutShow_timeInput>;
  };

  export type movieCreateWithoutShow_timeInput = {
    id?: string;
    title: string;
    director: string;
    duration: number;
    genre: string;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieUncheckedCreateWithoutShow_timeInput = {
    id?: string;
    title: string;
    director: string;
    duration: number;
    genre: string;
    rating: number;
    release_date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type movieCreateOrConnectWithoutShow_timeInput = {
    where: movieWhereUniqueInput;
    create: XOR<movieCreateWithoutShow_timeInput, movieUncheckedCreateWithoutShow_timeInput>;
  };

  export type ticketCreateWithoutShow_timeInput = {
    id?: string;
    price: number;
    seat_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateWithoutShow_timeInput = {
    id?: string;
    price: number;
    seat_number: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateOrConnectWithoutShow_timeInput = {
    where: ticketWhereUniqueInput;
    create: XOR<ticketCreateWithoutShow_timeInput, ticketUncheckedCreateWithoutShow_timeInput>;
  };

  export type ticketCreateManyShow_timeInputEnvelope = {
    data: ticketCreateManyShow_timeInput | ticketCreateManyShow_timeInput[];
    skipDuplicates?: boolean;
  };

  export type cinemaUpsertWithoutShow_timeInput = {
    update: XOR<cinemaUpdateWithoutShow_timeInput, cinemaUncheckedUpdateWithoutShow_timeInput>;
    create: XOR<cinemaCreateWithoutShow_timeInput, cinemaUncheckedCreateWithoutShow_timeInput>;
    where?: cinemaWhereInput;
  };

  export type cinemaUpdateToOneWithWhereWithoutShow_timeInput = {
    where?: cinemaWhereInput;
    data: XOR<cinemaUpdateWithoutShow_timeInput, cinemaUncheckedUpdateWithoutShow_timeInput>;
  };

  export type cinemaUpdateWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCinemaNestedInput;
    team_member?: team_memberUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    team_member?: team_memberUncheckedUpdateManyWithoutCinemaNestedInput;
  };

  export type movieUpsertWithoutShow_timeInput = {
    update: XOR<movieUpdateWithoutShow_timeInput, movieUncheckedUpdateWithoutShow_timeInput>;
    create: XOR<movieCreateWithoutShow_timeInput, movieUncheckedCreateWithoutShow_timeInput>;
    where?: movieWhereInput;
  };

  export type movieUpdateToOneWithWhereWithoutShow_timeInput = {
    where?: movieWhereInput;
    data: XOR<movieUpdateWithoutShow_timeInput, movieUncheckedUpdateWithoutShow_timeInput>;
  };

  export type movieUpdateWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    genre?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type movieUncheckedUpdateWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    director?: StringFieldUpdateOperationsInput | string;
    duration?: IntFieldUpdateOperationsInput | number;
    genre?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUpsertWithWhereUniqueWithoutShow_timeInput = {
    where: ticketWhereUniqueInput;
    update: XOR<ticketUpdateWithoutShow_timeInput, ticketUncheckedUpdateWithoutShow_timeInput>;
    create: XOR<ticketCreateWithoutShow_timeInput, ticketUncheckedCreateWithoutShow_timeInput>;
  };

  export type ticketUpdateWithWhereUniqueWithoutShow_timeInput = {
    where: ticketWhereUniqueInput;
    data: XOR<ticketUpdateWithoutShow_timeInput, ticketUncheckedUpdateWithoutShow_timeInput>;
  };

  export type ticketUpdateManyWithWhereWithoutShow_timeInput = {
    where: ticketScalarWhereInput;
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutShow_timeInput>;
  };

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[];
    OR?: ticketScalarWhereInput[];
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[];
    id?: UuidFilter<'ticket'> | string;
    price?: IntFilter<'ticket'> | number;
    seat_number?: IntFilter<'ticket'> | number;
    show_time_id?: UuidFilter<'ticket'> | string;
    user_id?: UuidFilter<'ticket'> | string;
    created_at?: DateTimeFilter<'ticket'> | Date | string;
    updated_at?: DateTimeFilter<'ticket'> | Date | string;
  };

  export type cinemaCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCinemaInput;
    show_time?: show_timeCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    show_time?: show_timeUncheckedCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaCreateOrConnectWithoutTeam_memberInput = {
    where: cinemaWhereUniqueInput;
    create: XOR<cinemaCreateWithoutTeam_memberInput, cinemaUncheckedCreateWithoutTeam_memberInput>;
  };

  export type userCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaCreateNestedManyWithoutUserInput;
    ticket?: ticketCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaUncheckedCreateNestedManyWithoutUserInput;
    ticket?: ticketUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeam_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
  };

  export type cinemaUpsertWithoutTeam_memberInput = {
    update: XOR<cinemaUpdateWithoutTeam_memberInput, cinemaUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<cinemaCreateWithoutTeam_memberInput, cinemaUncheckedCreateWithoutTeam_memberInput>;
    where?: cinemaWhereInput;
  };

  export type cinemaUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: cinemaWhereInput;
    data: XOR<cinemaUpdateWithoutTeam_memberInput, cinemaUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type cinemaUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCinemaNestedInput;
    show_time?: show_timeUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    show_time?: show_timeUncheckedUpdateManyWithoutCinemaNestedInput;
  };

  export type userUpsertWithoutTeam_memberInput = {
    update: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type userUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateManyWithoutUserNestedInput;
    ticket?: ticketUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUncheckedUpdateManyWithoutUserNestedInput;
    ticket?: ticketUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type show_timeCreateWithoutTicketInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema: cinemaCreateNestedOneWithoutShow_timeInput;
    movie: movieCreateNestedOneWithoutShow_timeInput;
  };

  export type show_timeUncheckedCreateWithoutTicketInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    movie_id: string;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type show_timeCreateOrConnectWithoutTicketInput = {
    where: show_timeWhereUniqueInput;
    create: XOR<show_timeCreateWithoutTicketInput, show_timeUncheckedCreateWithoutTicketInput>;
  };

  export type userCreateWithoutTicketInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTicketInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema?: cinemaUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTicketInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
  };

  export type show_timeUpsertWithoutTicketInput = {
    update: XOR<show_timeUpdateWithoutTicketInput, show_timeUncheckedUpdateWithoutTicketInput>;
    create: XOR<show_timeCreateWithoutTicketInput, show_timeUncheckedCreateWithoutTicketInput>;
    where?: show_timeWhereInput;
  };

  export type show_timeUpdateToOneWithWhereWithoutTicketInput = {
    where?: show_timeWhereInput;
    data: XOR<show_timeUpdateWithoutTicketInput, show_timeUncheckedUpdateWithoutTicketInput>;
  };

  export type show_timeUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateOneRequiredWithoutShow_timeNestedInput;
    movie?: movieUpdateOneRequiredWithoutShow_timeNestedInput;
  };

  export type show_timeUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutTicketInput = {
    update: XOR<userUpdateWithoutTicketInput, userUncheckedUpdateWithoutTicketInput>;
    create: XOR<userCreateWithoutTicketInput, userUncheckedCreateWithoutTicketInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTicketInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTicketInput, userUncheckedUpdateWithoutTicketInput>;
  };

  export type userUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type cinemaCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    show_time?: show_timeCreateNestedManyWithoutCinemaInput;
    team_member?: team_memberCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    show_time?: show_timeUncheckedCreateNestedManyWithoutCinemaInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutCinemaInput;
  };

  export type cinemaCreateOrConnectWithoutUserInput = {
    where: cinemaWhereUniqueInput;
    create: XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>;
  };

  export type cinemaCreateManyUserInputEnvelope = {
    data: cinemaCreateManyUserInput | cinemaCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutUserInput = {
    id?: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    cinema: cinemaCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberCreateManyUserInputEnvelope = {
    data: team_memberCreateManyUserInput | team_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ticketCreateWithoutUserInput = {
    id?: string;
    price: number;
    seat_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    show_time: show_timeCreateNestedOneWithoutTicketInput;
  };

  export type ticketUncheckedCreateWithoutUserInput = {
    id?: string;
    price: number;
    seat_number: number;
    show_time_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateOrConnectWithoutUserInput = {
    where: ticketWhereUniqueInput;
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>;
  };

  export type ticketCreateManyUserInputEnvelope = {
    data: ticketCreateManyUserInput | ticketCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type cinemaUpsertWithWhereUniqueWithoutUserInput = {
    where: cinemaWhereUniqueInput;
    update: XOR<cinemaUpdateWithoutUserInput, cinemaUncheckedUpdateWithoutUserInput>;
    create: XOR<cinemaCreateWithoutUserInput, cinemaUncheckedCreateWithoutUserInput>;
  };

  export type cinemaUpdateWithWhereUniqueWithoutUserInput = {
    where: cinemaWhereUniqueInput;
    data: XOR<cinemaUpdateWithoutUserInput, cinemaUncheckedUpdateWithoutUserInput>;
  };

  export type cinemaUpdateManyWithWhereWithoutUserInput = {
    where: cinemaScalarWhereInput;
    data: XOR<cinemaUpdateManyMutationInput, cinemaUncheckedUpdateManyWithoutUserInput>;
  };

  export type cinemaScalarWhereInput = {
    AND?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
    OR?: cinemaScalarWhereInput[];
    NOT?: cinemaScalarWhereInput | cinemaScalarWhereInput[];
    id?: UuidFilter<'cinema'> | string;
    description?: StringNullableFilter<'cinema'> | string | null;
    location?: StringNullableFilter<'cinema'> | string | null;
    seating_capacity?: IntNullableFilter<'cinema'> | number | null;
    number_of_screens?: IntNullableFilter<'cinema'> | number | null;
    name?: StringFilter<'cinema'> | string;
    created_at?: DateTimeFilter<'cinema'> | Date | string;
    updated_at?: DateTimeFilter<'cinema'> | Date | string;
    user_id?: UuidFilter<'cinema'> | string;
    tenant_id?: StringFilter<'cinema'> | string;
  };

  export type team_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutUserInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type ticketUpsertWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput;
    update: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>;
    create: XOR<ticketCreateWithoutUserInput, ticketUncheckedCreateWithoutUserInput>;
  };

  export type ticketUpdateWithWhereUniqueWithoutUserInput = {
    where: ticketWhereUniqueInput;
    data: XOR<ticketUpdateWithoutUserInput, ticketUncheckedUpdateWithoutUserInput>;
  };

  export type ticketUpdateManyWithWhereWithoutUserInput = {
    where: ticketScalarWhereInput;
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutUserInput>;
  };

  export type show_timeCreateManyCinemaInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    movie_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateManyCinemaInput = {
    id?: string;
    user_id: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type show_timeUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie?: movieUpdateOneRequiredWithoutShow_timeNestedInput;
    ticket?: ticketUpdateManyWithoutShow_timeNestedInput;
  };

  export type show_timeUncheckedUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutShow_timeNestedInput;
  };

  export type show_timeUncheckedUpdateManyWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    movie_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutCinemaInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type show_timeCreateManyMovieInput = {
    id?: string;
    start_time: Date | string;
    end_time: Date | string;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type show_timeUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateOneRequiredWithoutShow_timeNestedInput;
    ticket?: ticketUpdateManyWithoutShow_timeNestedInput;
  };

  export type show_timeUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: ticketUncheckedUpdateManyWithoutShow_timeNestedInput;
  };

  export type show_timeUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketCreateManyShow_timeInput = {
    id?: string;
    price: number;
    seat_number: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketUpdateWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyWithoutShow_timeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type cinemaCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    seating_capacity?: number | null;
    number_of_screens?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type team_memberCreateManyUserInput = {
    id?: string;
    position: string;
    hire_date: Date | string;
    salary: number;
    cinema_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ticketCreateManyUserInput = {
    id?: string;
    price: number;
    seat_number: number;
    show_time_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type cinemaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    show_time?: show_timeUpdateManyWithoutCinemaNestedInput;
    team_member?: team_memberUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    show_time?: show_timeUncheckedUpdateManyWithoutCinemaNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutCinemaNestedInput;
  };

  export type cinemaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    seating_capacity?: NullableIntFieldUpdateOperationsInput | number | null;
    number_of_screens?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type team_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    cinema?: cinemaUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    salary?: IntFieldUpdateOperationsInput | number;
    cinema_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    show_time?: show_timeUpdateOneRequiredWithoutTicketNestedInput;
  };

  export type ticketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    show_time_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ticketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    seat_number?: IntFieldUpdateOperationsInput | number;
    show_time_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CinemaCountOutputTypeDefaultArgs instead
   */
  export type CinemaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CinemaCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use MovieCountOutputTypeDefaultArgs instead
   */
  export type MovieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    MovieCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Show_timeCountOutputTypeDefaultArgs instead
   */
  export type Show_timeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Show_timeCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use cinemaDefaultArgs instead
   */
  export type cinemaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    cinemaDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use movieDefaultArgs instead
   */
  export type movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = movieDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use show_timeDefaultArgs instead
   */
  export type show_timeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    show_timeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use team_memberDefaultArgs instead
   */
  export type team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    team_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ticketDefaultArgs instead
   */
  export type ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ticketDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
