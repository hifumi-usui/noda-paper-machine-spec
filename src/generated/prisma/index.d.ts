
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model MachineBasicSpec
 * 
 */
export type MachineBasicSpec = $Result.DefaultSelection<Prisma.$MachineBasicSpecPayload>
/**
 * Model KuwaeSpec
 * 
 */
export type KuwaeSpec = $Result.DefaultSelection<Prisma.$KuwaeSpecPayload>
/**
 * Model DetailSpec
 * 
 */
export type DetailSpec = $Result.DefaultSelection<Prisma.$DetailSpecPayload>
/**
 * Model FilmSpec
 * 
 */
export type FilmSpec = $Result.DefaultSelection<Prisma.$FilmSpecPayload>
/**
 * Model RuleSpec
 * 
 */
export type RuleSpec = $Result.DefaultSelection<Prisma.$RuleSpecPayload>
/**
 * Model SheetBaseSpec
 * 
 */
export type SheetBaseSpec = $Result.DefaultSelection<Prisma.$SheetBaseSpecPayload>
/**
 * Model SutebaSpec
 * 
 */
export type SutebaSpec = $Result.DefaultSelection<Prisma.$SutebaSpecPayload>
/**
 * Model SpongeCorkSpec
 * 
 */
export type SpongeCorkSpec = $Result.DefaultSelection<Prisma.$SpongeCorkSpecPayload>
/**
 * Model CenterMetalSpec
 * 
 */
export type CenterMetalSpec = $Result.DefaultSelection<Prisma.$CenterMetalSpecPayload>
/**
 * Model NickSpec
 * 
 */
export type NickSpec = $Result.DefaultSelection<Prisma.$NickSpecPayload>
/**
 * Model RuleThicknessSpec
 * 
 */
export type RuleThicknessSpec = $Result.DefaultSelection<Prisma.$RuleThicknessSpecPayload>
/**
 * Model RemarkSpec
 * 
 */
export type RemarkSpec = $Result.DefaultSelection<Prisma.$RemarkSpecPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.machineBasicSpec`: Exposes CRUD operations for the **MachineBasicSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MachineBasicSpecs
    * const machineBasicSpecs = await prisma.machineBasicSpec.findMany()
    * ```
    */
  get machineBasicSpec(): Prisma.MachineBasicSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kuwaeSpec`: Exposes CRUD operations for the **KuwaeSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KuwaeSpecs
    * const kuwaeSpecs = await prisma.kuwaeSpec.findMany()
    * ```
    */
  get kuwaeSpec(): Prisma.KuwaeSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailSpec`: Exposes CRUD operations for the **DetailSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailSpecs
    * const detailSpecs = await prisma.detailSpec.findMany()
    * ```
    */
  get detailSpec(): Prisma.DetailSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filmSpec`: Exposes CRUD operations for the **FilmSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilmSpecs
    * const filmSpecs = await prisma.filmSpec.findMany()
    * ```
    */
  get filmSpec(): Prisma.FilmSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruleSpec`: Exposes CRUD operations for the **RuleSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RuleSpecs
    * const ruleSpecs = await prisma.ruleSpec.findMany()
    * ```
    */
  get ruleSpec(): Prisma.RuleSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheetBaseSpec`: Exposes CRUD operations for the **SheetBaseSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SheetBaseSpecs
    * const sheetBaseSpecs = await prisma.sheetBaseSpec.findMany()
    * ```
    */
  get sheetBaseSpec(): Prisma.SheetBaseSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sutebaSpec`: Exposes CRUD operations for the **SutebaSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SutebaSpecs
    * const sutebaSpecs = await prisma.sutebaSpec.findMany()
    * ```
    */
  get sutebaSpec(): Prisma.SutebaSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spongeCorkSpec`: Exposes CRUD operations for the **SpongeCorkSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpongeCorkSpecs
    * const spongeCorkSpecs = await prisma.spongeCorkSpec.findMany()
    * ```
    */
  get spongeCorkSpec(): Prisma.SpongeCorkSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.centerMetalSpec`: Exposes CRUD operations for the **CenterMetalSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CenterMetalSpecs
    * const centerMetalSpecs = await prisma.centerMetalSpec.findMany()
    * ```
    */
  get centerMetalSpec(): Prisma.CenterMetalSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nickSpec`: Exposes CRUD operations for the **NickSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NickSpecs
    * const nickSpecs = await prisma.nickSpec.findMany()
    * ```
    */
  get nickSpec(): Prisma.NickSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruleThicknessSpec`: Exposes CRUD operations for the **RuleThicknessSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RuleThicknessSpecs
    * const ruleThicknessSpecs = await prisma.ruleThicknessSpec.findMany()
    * ```
    */
  get ruleThicknessSpec(): Prisma.RuleThicknessSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remarkSpec`: Exposes CRUD operations for the **RemarkSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RemarkSpecs
    * const remarkSpecs = await prisma.remarkSpec.findMany()
    * ```
    */
  get remarkSpec(): Prisma.RemarkSpecDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    Post: 'Post',
    MachineBasicSpec: 'MachineBasicSpec',
    KuwaeSpec: 'KuwaeSpec',
    DetailSpec: 'DetailSpec',
    FilmSpec: 'FilmSpec',
    RuleSpec: 'RuleSpec',
    SheetBaseSpec: 'SheetBaseSpec',
    SutebaSpec: 'SutebaSpec',
    SpongeCorkSpec: 'SpongeCorkSpec',
    CenterMetalSpec: 'CenterMetalSpec',
    NickSpec: 'NickSpec',
    RuleThicknessSpec: 'RuleThicknessSpec',
    RemarkSpec: 'RemarkSpec'
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
      modelProps: "user" | "post" | "machineBasicSpec" | "kuwaeSpec" | "detailSpec" | "filmSpec" | "ruleSpec" | "sheetBaseSpec" | "sutebaSpec" | "spongeCorkSpec" | "centerMetalSpec" | "nickSpec" | "ruleThicknessSpec" | "remarkSpec"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      MachineBasicSpec: {
        payload: Prisma.$MachineBasicSpecPayload<ExtArgs>
        fields: Prisma.MachineBasicSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MachineBasicSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MachineBasicSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>
          }
          findFirst: {
            args: Prisma.MachineBasicSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MachineBasicSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>
          }
          findMany: {
            args: Prisma.MachineBasicSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>[]
          }
          create: {
            args: Prisma.MachineBasicSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>
          }
          createMany: {
            args: Prisma.MachineBasicSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MachineBasicSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>[]
          }
          delete: {
            args: Prisma.MachineBasicSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>
          }
          update: {
            args: Prisma.MachineBasicSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>
          }
          deleteMany: {
            args: Prisma.MachineBasicSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MachineBasicSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MachineBasicSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>[]
          }
          upsert: {
            args: Prisma.MachineBasicSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MachineBasicSpecPayload>
          }
          aggregate: {
            args: Prisma.MachineBasicSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMachineBasicSpec>
          }
          groupBy: {
            args: Prisma.MachineBasicSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<MachineBasicSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.MachineBasicSpecCountArgs<ExtArgs>
            result: $Utils.Optional<MachineBasicSpecCountAggregateOutputType> | number
          }
        }
      }
      KuwaeSpec: {
        payload: Prisma.$KuwaeSpecPayload<ExtArgs>
        fields: Prisma.KuwaeSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KuwaeSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KuwaeSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>
          }
          findFirst: {
            args: Prisma.KuwaeSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KuwaeSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>
          }
          findMany: {
            args: Prisma.KuwaeSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>[]
          }
          create: {
            args: Prisma.KuwaeSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>
          }
          createMany: {
            args: Prisma.KuwaeSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KuwaeSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>[]
          }
          delete: {
            args: Prisma.KuwaeSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>
          }
          update: {
            args: Prisma.KuwaeSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>
          }
          deleteMany: {
            args: Prisma.KuwaeSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KuwaeSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KuwaeSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>[]
          }
          upsert: {
            args: Prisma.KuwaeSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KuwaeSpecPayload>
          }
          aggregate: {
            args: Prisma.KuwaeSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKuwaeSpec>
          }
          groupBy: {
            args: Prisma.KuwaeSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<KuwaeSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.KuwaeSpecCountArgs<ExtArgs>
            result: $Utils.Optional<KuwaeSpecCountAggregateOutputType> | number
          }
        }
      }
      DetailSpec: {
        payload: Prisma.$DetailSpecPayload<ExtArgs>
        fields: Prisma.DetailSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>
          }
          findFirst: {
            args: Prisma.DetailSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>
          }
          findMany: {
            args: Prisma.DetailSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>[]
          }
          create: {
            args: Prisma.DetailSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>
          }
          createMany: {
            args: Prisma.DetailSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>[]
          }
          delete: {
            args: Prisma.DetailSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>
          }
          update: {
            args: Prisma.DetailSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>
          }
          deleteMany: {
            args: Prisma.DetailSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>[]
          }
          upsert: {
            args: Prisma.DetailSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailSpecPayload>
          }
          aggregate: {
            args: Prisma.DetailSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailSpec>
          }
          groupBy: {
            args: Prisma.DetailSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailSpecCountArgs<ExtArgs>
            result: $Utils.Optional<DetailSpecCountAggregateOutputType> | number
          }
        }
      }
      FilmSpec: {
        payload: Prisma.$FilmSpecPayload<ExtArgs>
        fields: Prisma.FilmSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilmSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilmSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>
          }
          findFirst: {
            args: Prisma.FilmSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilmSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>
          }
          findMany: {
            args: Prisma.FilmSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>[]
          }
          create: {
            args: Prisma.FilmSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>
          }
          createMany: {
            args: Prisma.FilmSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilmSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>[]
          }
          delete: {
            args: Prisma.FilmSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>
          }
          update: {
            args: Prisma.FilmSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>
          }
          deleteMany: {
            args: Prisma.FilmSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilmSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilmSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>[]
          }
          upsert: {
            args: Prisma.FilmSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmSpecPayload>
          }
          aggregate: {
            args: Prisma.FilmSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilmSpec>
          }
          groupBy: {
            args: Prisma.FilmSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilmSpecCountArgs<ExtArgs>
            result: $Utils.Optional<FilmSpecCountAggregateOutputType> | number
          }
        }
      }
      RuleSpec: {
        payload: Prisma.$RuleSpecPayload<ExtArgs>
        fields: Prisma.RuleSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>
          }
          findFirst: {
            args: Prisma.RuleSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>
          }
          findMany: {
            args: Prisma.RuleSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>[]
          }
          create: {
            args: Prisma.RuleSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>
          }
          createMany: {
            args: Prisma.RuleSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>[]
          }
          delete: {
            args: Prisma.RuleSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>
          }
          update: {
            args: Prisma.RuleSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>
          }
          deleteMany: {
            args: Prisma.RuleSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>[]
          }
          upsert: {
            args: Prisma.RuleSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleSpecPayload>
          }
          aggregate: {
            args: Prisma.RuleSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuleSpec>
          }
          groupBy: {
            args: Prisma.RuleSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleSpecCountArgs<ExtArgs>
            result: $Utils.Optional<RuleSpecCountAggregateOutputType> | number
          }
        }
      }
      SheetBaseSpec: {
        payload: Prisma.$SheetBaseSpecPayload<ExtArgs>
        fields: Prisma.SheetBaseSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SheetBaseSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SheetBaseSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>
          }
          findFirst: {
            args: Prisma.SheetBaseSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SheetBaseSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>
          }
          findMany: {
            args: Prisma.SheetBaseSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>[]
          }
          create: {
            args: Prisma.SheetBaseSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>
          }
          createMany: {
            args: Prisma.SheetBaseSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SheetBaseSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>[]
          }
          delete: {
            args: Prisma.SheetBaseSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>
          }
          update: {
            args: Prisma.SheetBaseSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>
          }
          deleteMany: {
            args: Prisma.SheetBaseSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SheetBaseSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SheetBaseSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>[]
          }
          upsert: {
            args: Prisma.SheetBaseSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SheetBaseSpecPayload>
          }
          aggregate: {
            args: Prisma.SheetBaseSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheetBaseSpec>
          }
          groupBy: {
            args: Prisma.SheetBaseSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetBaseSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.SheetBaseSpecCountArgs<ExtArgs>
            result: $Utils.Optional<SheetBaseSpecCountAggregateOutputType> | number
          }
        }
      }
      SutebaSpec: {
        payload: Prisma.$SutebaSpecPayload<ExtArgs>
        fields: Prisma.SutebaSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SutebaSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SutebaSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>
          }
          findFirst: {
            args: Prisma.SutebaSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SutebaSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>
          }
          findMany: {
            args: Prisma.SutebaSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>[]
          }
          create: {
            args: Prisma.SutebaSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>
          }
          createMany: {
            args: Prisma.SutebaSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SutebaSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>[]
          }
          delete: {
            args: Prisma.SutebaSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>
          }
          update: {
            args: Prisma.SutebaSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>
          }
          deleteMany: {
            args: Prisma.SutebaSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SutebaSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SutebaSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>[]
          }
          upsert: {
            args: Prisma.SutebaSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SutebaSpecPayload>
          }
          aggregate: {
            args: Prisma.SutebaSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSutebaSpec>
          }
          groupBy: {
            args: Prisma.SutebaSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<SutebaSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.SutebaSpecCountArgs<ExtArgs>
            result: $Utils.Optional<SutebaSpecCountAggregateOutputType> | number
          }
        }
      }
      SpongeCorkSpec: {
        payload: Prisma.$SpongeCorkSpecPayload<ExtArgs>
        fields: Prisma.SpongeCorkSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpongeCorkSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpongeCorkSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>
          }
          findFirst: {
            args: Prisma.SpongeCorkSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpongeCorkSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>
          }
          findMany: {
            args: Prisma.SpongeCorkSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>[]
          }
          create: {
            args: Prisma.SpongeCorkSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>
          }
          createMany: {
            args: Prisma.SpongeCorkSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpongeCorkSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>[]
          }
          delete: {
            args: Prisma.SpongeCorkSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>
          }
          update: {
            args: Prisma.SpongeCorkSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>
          }
          deleteMany: {
            args: Prisma.SpongeCorkSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpongeCorkSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpongeCorkSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>[]
          }
          upsert: {
            args: Prisma.SpongeCorkSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpongeCorkSpecPayload>
          }
          aggregate: {
            args: Prisma.SpongeCorkSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpongeCorkSpec>
          }
          groupBy: {
            args: Prisma.SpongeCorkSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpongeCorkSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpongeCorkSpecCountArgs<ExtArgs>
            result: $Utils.Optional<SpongeCorkSpecCountAggregateOutputType> | number
          }
        }
      }
      CenterMetalSpec: {
        payload: Prisma.$CenterMetalSpecPayload<ExtArgs>
        fields: Prisma.CenterMetalSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CenterMetalSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CenterMetalSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>
          }
          findFirst: {
            args: Prisma.CenterMetalSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CenterMetalSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>
          }
          findMany: {
            args: Prisma.CenterMetalSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>[]
          }
          create: {
            args: Prisma.CenterMetalSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>
          }
          createMany: {
            args: Prisma.CenterMetalSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CenterMetalSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>[]
          }
          delete: {
            args: Prisma.CenterMetalSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>
          }
          update: {
            args: Prisma.CenterMetalSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>
          }
          deleteMany: {
            args: Prisma.CenterMetalSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CenterMetalSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CenterMetalSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>[]
          }
          upsert: {
            args: Prisma.CenterMetalSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterMetalSpecPayload>
          }
          aggregate: {
            args: Prisma.CenterMetalSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCenterMetalSpec>
          }
          groupBy: {
            args: Prisma.CenterMetalSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<CenterMetalSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.CenterMetalSpecCountArgs<ExtArgs>
            result: $Utils.Optional<CenterMetalSpecCountAggregateOutputType> | number
          }
        }
      }
      NickSpec: {
        payload: Prisma.$NickSpecPayload<ExtArgs>
        fields: Prisma.NickSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NickSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NickSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>
          }
          findFirst: {
            args: Prisma.NickSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NickSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>
          }
          findMany: {
            args: Prisma.NickSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>[]
          }
          create: {
            args: Prisma.NickSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>
          }
          createMany: {
            args: Prisma.NickSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NickSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>[]
          }
          delete: {
            args: Prisma.NickSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>
          }
          update: {
            args: Prisma.NickSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>
          }
          deleteMany: {
            args: Prisma.NickSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NickSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NickSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>[]
          }
          upsert: {
            args: Prisma.NickSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NickSpecPayload>
          }
          aggregate: {
            args: Prisma.NickSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNickSpec>
          }
          groupBy: {
            args: Prisma.NickSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<NickSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.NickSpecCountArgs<ExtArgs>
            result: $Utils.Optional<NickSpecCountAggregateOutputType> | number
          }
        }
      }
      RuleThicknessSpec: {
        payload: Prisma.$RuleThicknessSpecPayload<ExtArgs>
        fields: Prisma.RuleThicknessSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleThicknessSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleThicknessSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>
          }
          findFirst: {
            args: Prisma.RuleThicknessSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleThicknessSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>
          }
          findMany: {
            args: Prisma.RuleThicknessSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>[]
          }
          create: {
            args: Prisma.RuleThicknessSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>
          }
          createMany: {
            args: Prisma.RuleThicknessSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleThicknessSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>[]
          }
          delete: {
            args: Prisma.RuleThicknessSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>
          }
          update: {
            args: Prisma.RuleThicknessSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>
          }
          deleteMany: {
            args: Prisma.RuleThicknessSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleThicknessSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleThicknessSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>[]
          }
          upsert: {
            args: Prisma.RuleThicknessSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuleThicknessSpecPayload>
          }
          aggregate: {
            args: Prisma.RuleThicknessSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuleThicknessSpec>
          }
          groupBy: {
            args: Prisma.RuleThicknessSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleThicknessSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleThicknessSpecCountArgs<ExtArgs>
            result: $Utils.Optional<RuleThicknessSpecCountAggregateOutputType> | number
          }
        }
      }
      RemarkSpec: {
        payload: Prisma.$RemarkSpecPayload<ExtArgs>
        fields: Prisma.RemarkSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemarkSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemarkSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>
          }
          findFirst: {
            args: Prisma.RemarkSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemarkSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>
          }
          findMany: {
            args: Prisma.RemarkSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>[]
          }
          create: {
            args: Prisma.RemarkSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>
          }
          createMany: {
            args: Prisma.RemarkSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemarkSpecCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>[]
          }
          delete: {
            args: Prisma.RemarkSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>
          }
          update: {
            args: Prisma.RemarkSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>
          }
          deleteMany: {
            args: Prisma.RemarkSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemarkSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemarkSpecUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>[]
          }
          upsert: {
            args: Prisma.RemarkSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemarkSpecPayload>
          }
          aggregate: {
            args: Prisma.RemarkSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemarkSpec>
          }
          groupBy: {
            args: Prisma.RemarkSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemarkSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemarkSpecCountArgs<ExtArgs>
            result: $Utils.Optional<RemarkSpecCountAggregateOutputType> | number
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
    user?: UserOmit
    post?: PostOmit
    machineBasicSpec?: MachineBasicSpecOmit
    kuwaeSpec?: KuwaeSpecOmit
    detailSpec?: DetailSpecOmit
    filmSpec?: FilmSpecOmit
    ruleSpec?: RuleSpecOmit
    sheetBaseSpec?: SheetBaseSpecOmit
    sutebaSpec?: SutebaSpecOmit
    spongeCorkSpec?: SpongeCorkSpecOmit
    centerMetalSpec?: CenterMetalSpecOmit
    nickSpec?: NickSpecOmit
    ruleThicknessSpec?: RuleThicknessSpecOmit
    remarkSpec?: RemarkSpecOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    auth_id: string | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    auth_id: string | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    auth_id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    auth_id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    auth_id: string
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    name?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    auth_id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    auth_id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "auth_id" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      auth_id: string
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly auth_id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    content: string | null
    published: boolean
    authorId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | Post$authorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "content" | "published" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | Post$authorArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      content: string | null
      published: boolean
      authorId: number | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends Post$authorArgs<ExtArgs> = {}>(args?: Subset<T, Post$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.author
   */
  export type Post$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model MachineBasicSpec
   */

  export type AggregateMachineBasicSpec = {
    _count: MachineBasicSpecCountAggregateOutputType | null
    _avg: MachineBasicSpecAvgAggregateOutputType | null
    _sum: MachineBasicSpecSumAggregateOutputType | null
    _min: MachineBasicSpecMinAggregateOutputType | null
    _max: MachineBasicSpecMaxAggregateOutputType | null
  }

  export type MachineBasicSpecAvgAggregateOutputType = {
    id: number | null
    kuwaeSpecId: number | null
    detailSpecId: number | null
    filmSpecId: number | null
    ruleSpecId: number | null
    sheetBaseSpecId: number | null
    sutebaSpecId: number | null
    spongeCorkSpecId: number | null
    centerMetalSpecId: number | null
    nickSpecId: number | null
    ruleThicknessSpecId: number | null
    remarkSpecId: number | null
  }

  export type MachineBasicSpecSumAggregateOutputType = {
    id: number | null
    kuwaeSpecId: number | null
    detailSpecId: number | null
    filmSpecId: number | null
    ruleSpecId: number | null
    sheetBaseSpecId: number | null
    sutebaSpecId: number | null
    spongeCorkSpecId: number | null
    centerMetalSpecId: number | null
    nickSpecId: number | null
    ruleThicknessSpecId: number | null
    remarkSpecId: number | null
  }

  export type MachineBasicSpecMinAggregateOutputType = {
    id: number | null
    machineManufacturerId: string | null
    machineManufacturerName: string | null
    machineName: string | null
    machineType: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    kuwaeSpecId: number | null
    detailSpecId: number | null
    filmSpecId: number | null
    ruleSpecId: number | null
    sheetBaseSpecId: number | null
    sutebaSpecId: number | null
    spongeCorkSpecId: number | null
    centerMetalSpecId: number | null
    nickSpecId: number | null
    ruleThicknessSpecId: number | null
    remarkSpecId: number | null
  }

  export type MachineBasicSpecMaxAggregateOutputType = {
    id: number | null
    machineManufacturerId: string | null
    machineManufacturerName: string | null
    machineName: string | null
    machineType: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    kuwaeSpecId: number | null
    detailSpecId: number | null
    filmSpecId: number | null
    ruleSpecId: number | null
    sheetBaseSpecId: number | null
    sutebaSpecId: number | null
    spongeCorkSpecId: number | null
    centerMetalSpecId: number | null
    nickSpecId: number | null
    ruleThicknessSpecId: number | null
    remarkSpecId: number | null
  }

  export type MachineBasicSpecCountAggregateOutputType = {
    id: number
    machineManufacturerId: number
    machineManufacturerName: number
    machineName: number
    machineType: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    kuwaeSpecId: number
    detailSpecId: number
    filmSpecId: number
    ruleSpecId: number
    sheetBaseSpecId: number
    sutebaSpecId: number
    spongeCorkSpecId: number
    centerMetalSpecId: number
    nickSpecId: number
    ruleThicknessSpecId: number
    remarkSpecId: number
    _all: number
  }


  export type MachineBasicSpecAvgAggregateInputType = {
    id?: true
    kuwaeSpecId?: true
    detailSpecId?: true
    filmSpecId?: true
    ruleSpecId?: true
    sheetBaseSpecId?: true
    sutebaSpecId?: true
    spongeCorkSpecId?: true
    centerMetalSpecId?: true
    nickSpecId?: true
    ruleThicknessSpecId?: true
    remarkSpecId?: true
  }

  export type MachineBasicSpecSumAggregateInputType = {
    id?: true
    kuwaeSpecId?: true
    detailSpecId?: true
    filmSpecId?: true
    ruleSpecId?: true
    sheetBaseSpecId?: true
    sutebaSpecId?: true
    spongeCorkSpecId?: true
    centerMetalSpecId?: true
    nickSpecId?: true
    ruleThicknessSpecId?: true
    remarkSpecId?: true
  }

  export type MachineBasicSpecMinAggregateInputType = {
    id?: true
    machineManufacturerId?: true
    machineManufacturerName?: true
    machineName?: true
    machineType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    kuwaeSpecId?: true
    detailSpecId?: true
    filmSpecId?: true
    ruleSpecId?: true
    sheetBaseSpecId?: true
    sutebaSpecId?: true
    spongeCorkSpecId?: true
    centerMetalSpecId?: true
    nickSpecId?: true
    ruleThicknessSpecId?: true
    remarkSpecId?: true
  }

  export type MachineBasicSpecMaxAggregateInputType = {
    id?: true
    machineManufacturerId?: true
    machineManufacturerName?: true
    machineName?: true
    machineType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    kuwaeSpecId?: true
    detailSpecId?: true
    filmSpecId?: true
    ruleSpecId?: true
    sheetBaseSpecId?: true
    sutebaSpecId?: true
    spongeCorkSpecId?: true
    centerMetalSpecId?: true
    nickSpecId?: true
    ruleThicknessSpecId?: true
    remarkSpecId?: true
  }

  export type MachineBasicSpecCountAggregateInputType = {
    id?: true
    machineManufacturerId?: true
    machineManufacturerName?: true
    machineName?: true
    machineType?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    kuwaeSpecId?: true
    detailSpecId?: true
    filmSpecId?: true
    ruleSpecId?: true
    sheetBaseSpecId?: true
    sutebaSpecId?: true
    spongeCorkSpecId?: true
    centerMetalSpecId?: true
    nickSpecId?: true
    ruleThicknessSpecId?: true
    remarkSpecId?: true
    _all?: true
  }

  export type MachineBasicSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineBasicSpec to aggregate.
     */
    where?: MachineBasicSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineBasicSpecs to fetch.
     */
    orderBy?: MachineBasicSpecOrderByWithRelationInput | MachineBasicSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MachineBasicSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineBasicSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineBasicSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MachineBasicSpecs
    **/
    _count?: true | MachineBasicSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MachineBasicSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MachineBasicSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MachineBasicSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MachineBasicSpecMaxAggregateInputType
  }

  export type GetMachineBasicSpecAggregateType<T extends MachineBasicSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateMachineBasicSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMachineBasicSpec[P]>
      : GetScalarType<T[P], AggregateMachineBasicSpec[P]>
  }




  export type MachineBasicSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MachineBasicSpecWhereInput
    orderBy?: MachineBasicSpecOrderByWithAggregationInput | MachineBasicSpecOrderByWithAggregationInput[]
    by: MachineBasicSpecScalarFieldEnum[] | MachineBasicSpecScalarFieldEnum
    having?: MachineBasicSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MachineBasicSpecCountAggregateInputType | true
    _avg?: MachineBasicSpecAvgAggregateInputType
    _sum?: MachineBasicSpecSumAggregateInputType
    _min?: MachineBasicSpecMinAggregateInputType
    _max?: MachineBasicSpecMaxAggregateInputType
  }

  export type MachineBasicSpecGroupByOutputType = {
    id: number
    machineManufacturerId: string | null
    machineManufacturerName: string | null
    machineName: string | null
    machineType: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    kuwaeSpecId: number | null
    detailSpecId: number | null
    filmSpecId: number | null
    ruleSpecId: number | null
    sheetBaseSpecId: number | null
    sutebaSpecId: number | null
    spongeCorkSpecId: number | null
    centerMetalSpecId: number | null
    nickSpecId: number | null
    ruleThicknessSpecId: number | null
    remarkSpecId: number | null
    _count: MachineBasicSpecCountAggregateOutputType | null
    _avg: MachineBasicSpecAvgAggregateOutputType | null
    _sum: MachineBasicSpecSumAggregateOutputType | null
    _min: MachineBasicSpecMinAggregateOutputType | null
    _max: MachineBasicSpecMaxAggregateOutputType | null
  }

  type GetMachineBasicSpecGroupByPayload<T extends MachineBasicSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MachineBasicSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MachineBasicSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MachineBasicSpecGroupByOutputType[P]>
            : GetScalarType<T[P], MachineBasicSpecGroupByOutputType[P]>
        }
      >
    >


  export type MachineBasicSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineManufacturerId?: boolean
    machineManufacturerName?: boolean
    machineName?: boolean
    machineType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    kuwaeSpecId?: boolean
    detailSpecId?: boolean
    filmSpecId?: boolean
    ruleSpecId?: boolean
    sheetBaseSpecId?: boolean
    sutebaSpecId?: boolean
    spongeCorkSpecId?: boolean
    centerMetalSpecId?: boolean
    nickSpecId?: boolean
    ruleThicknessSpecId?: boolean
    remarkSpecId?: boolean
    kuwaeSpec?: boolean | MachineBasicSpec$kuwaeSpecArgs<ExtArgs>
    detailSpec?: boolean | MachineBasicSpec$detailSpecArgs<ExtArgs>
    filmSpec?: boolean | MachineBasicSpec$filmSpecArgs<ExtArgs>
    ruleSpec?: boolean | MachineBasicSpec$ruleSpecArgs<ExtArgs>
    sheetBaseSpec?: boolean | MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>
    sutebaSpec?: boolean | MachineBasicSpec$sutebaSpecArgs<ExtArgs>
    spongeCorkSpec?: boolean | MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>
    centerMetalSpec?: boolean | MachineBasicSpec$centerMetalSpecArgs<ExtArgs>
    nickSpec?: boolean | MachineBasicSpec$nickSpecArgs<ExtArgs>
    ruleThicknessSpec?: boolean | MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>
    remarkSpec?: boolean | MachineBasicSpec$remarkSpecArgs<ExtArgs>
  }, ExtArgs["result"]["machineBasicSpec"]>

  export type MachineBasicSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineManufacturerId?: boolean
    machineManufacturerName?: boolean
    machineName?: boolean
    machineType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    kuwaeSpecId?: boolean
    detailSpecId?: boolean
    filmSpecId?: boolean
    ruleSpecId?: boolean
    sheetBaseSpecId?: boolean
    sutebaSpecId?: boolean
    spongeCorkSpecId?: boolean
    centerMetalSpecId?: boolean
    nickSpecId?: boolean
    ruleThicknessSpecId?: boolean
    remarkSpecId?: boolean
    kuwaeSpec?: boolean | MachineBasicSpec$kuwaeSpecArgs<ExtArgs>
    detailSpec?: boolean | MachineBasicSpec$detailSpecArgs<ExtArgs>
    filmSpec?: boolean | MachineBasicSpec$filmSpecArgs<ExtArgs>
    ruleSpec?: boolean | MachineBasicSpec$ruleSpecArgs<ExtArgs>
    sheetBaseSpec?: boolean | MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>
    sutebaSpec?: boolean | MachineBasicSpec$sutebaSpecArgs<ExtArgs>
    spongeCorkSpec?: boolean | MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>
    centerMetalSpec?: boolean | MachineBasicSpec$centerMetalSpecArgs<ExtArgs>
    nickSpec?: boolean | MachineBasicSpec$nickSpecArgs<ExtArgs>
    ruleThicknessSpec?: boolean | MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>
    remarkSpec?: boolean | MachineBasicSpec$remarkSpecArgs<ExtArgs>
  }, ExtArgs["result"]["machineBasicSpec"]>

  export type MachineBasicSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    machineManufacturerId?: boolean
    machineManufacturerName?: boolean
    machineName?: boolean
    machineType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    kuwaeSpecId?: boolean
    detailSpecId?: boolean
    filmSpecId?: boolean
    ruleSpecId?: boolean
    sheetBaseSpecId?: boolean
    sutebaSpecId?: boolean
    spongeCorkSpecId?: boolean
    centerMetalSpecId?: boolean
    nickSpecId?: boolean
    ruleThicknessSpecId?: boolean
    remarkSpecId?: boolean
    kuwaeSpec?: boolean | MachineBasicSpec$kuwaeSpecArgs<ExtArgs>
    detailSpec?: boolean | MachineBasicSpec$detailSpecArgs<ExtArgs>
    filmSpec?: boolean | MachineBasicSpec$filmSpecArgs<ExtArgs>
    ruleSpec?: boolean | MachineBasicSpec$ruleSpecArgs<ExtArgs>
    sheetBaseSpec?: boolean | MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>
    sutebaSpec?: boolean | MachineBasicSpec$sutebaSpecArgs<ExtArgs>
    spongeCorkSpec?: boolean | MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>
    centerMetalSpec?: boolean | MachineBasicSpec$centerMetalSpecArgs<ExtArgs>
    nickSpec?: boolean | MachineBasicSpec$nickSpecArgs<ExtArgs>
    ruleThicknessSpec?: boolean | MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>
    remarkSpec?: boolean | MachineBasicSpec$remarkSpecArgs<ExtArgs>
  }, ExtArgs["result"]["machineBasicSpec"]>

  export type MachineBasicSpecSelectScalar = {
    id?: boolean
    machineManufacturerId?: boolean
    machineManufacturerName?: boolean
    machineName?: boolean
    machineType?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    kuwaeSpecId?: boolean
    detailSpecId?: boolean
    filmSpecId?: boolean
    ruleSpecId?: boolean
    sheetBaseSpecId?: boolean
    sutebaSpecId?: boolean
    spongeCorkSpecId?: boolean
    centerMetalSpecId?: boolean
    nickSpecId?: boolean
    ruleThicknessSpecId?: boolean
    remarkSpecId?: boolean
  }

  export type MachineBasicSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "machineManufacturerId" | "machineManufacturerName" | "machineName" | "machineType" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt" | "kuwaeSpecId" | "detailSpecId" | "filmSpecId" | "ruleSpecId" | "sheetBaseSpecId" | "sutebaSpecId" | "spongeCorkSpecId" | "centerMetalSpecId" | "nickSpecId" | "ruleThicknessSpecId" | "remarkSpecId", ExtArgs["result"]["machineBasicSpec"]>
  export type MachineBasicSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kuwaeSpec?: boolean | MachineBasicSpec$kuwaeSpecArgs<ExtArgs>
    detailSpec?: boolean | MachineBasicSpec$detailSpecArgs<ExtArgs>
    filmSpec?: boolean | MachineBasicSpec$filmSpecArgs<ExtArgs>
    ruleSpec?: boolean | MachineBasicSpec$ruleSpecArgs<ExtArgs>
    sheetBaseSpec?: boolean | MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>
    sutebaSpec?: boolean | MachineBasicSpec$sutebaSpecArgs<ExtArgs>
    spongeCorkSpec?: boolean | MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>
    centerMetalSpec?: boolean | MachineBasicSpec$centerMetalSpecArgs<ExtArgs>
    nickSpec?: boolean | MachineBasicSpec$nickSpecArgs<ExtArgs>
    ruleThicknessSpec?: boolean | MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>
    remarkSpec?: boolean | MachineBasicSpec$remarkSpecArgs<ExtArgs>
  }
  export type MachineBasicSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kuwaeSpec?: boolean | MachineBasicSpec$kuwaeSpecArgs<ExtArgs>
    detailSpec?: boolean | MachineBasicSpec$detailSpecArgs<ExtArgs>
    filmSpec?: boolean | MachineBasicSpec$filmSpecArgs<ExtArgs>
    ruleSpec?: boolean | MachineBasicSpec$ruleSpecArgs<ExtArgs>
    sheetBaseSpec?: boolean | MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>
    sutebaSpec?: boolean | MachineBasicSpec$sutebaSpecArgs<ExtArgs>
    spongeCorkSpec?: boolean | MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>
    centerMetalSpec?: boolean | MachineBasicSpec$centerMetalSpecArgs<ExtArgs>
    nickSpec?: boolean | MachineBasicSpec$nickSpecArgs<ExtArgs>
    ruleThicknessSpec?: boolean | MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>
    remarkSpec?: boolean | MachineBasicSpec$remarkSpecArgs<ExtArgs>
  }
  export type MachineBasicSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kuwaeSpec?: boolean | MachineBasicSpec$kuwaeSpecArgs<ExtArgs>
    detailSpec?: boolean | MachineBasicSpec$detailSpecArgs<ExtArgs>
    filmSpec?: boolean | MachineBasicSpec$filmSpecArgs<ExtArgs>
    ruleSpec?: boolean | MachineBasicSpec$ruleSpecArgs<ExtArgs>
    sheetBaseSpec?: boolean | MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>
    sutebaSpec?: boolean | MachineBasicSpec$sutebaSpecArgs<ExtArgs>
    spongeCorkSpec?: boolean | MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>
    centerMetalSpec?: boolean | MachineBasicSpec$centerMetalSpecArgs<ExtArgs>
    nickSpec?: boolean | MachineBasicSpec$nickSpecArgs<ExtArgs>
    ruleThicknessSpec?: boolean | MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>
    remarkSpec?: boolean | MachineBasicSpec$remarkSpecArgs<ExtArgs>
  }

  export type $MachineBasicSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MachineBasicSpec"
    objects: {
      kuwaeSpec: Prisma.$KuwaeSpecPayload<ExtArgs> | null
      detailSpec: Prisma.$DetailSpecPayload<ExtArgs> | null
      filmSpec: Prisma.$FilmSpecPayload<ExtArgs> | null
      ruleSpec: Prisma.$RuleSpecPayload<ExtArgs> | null
      sheetBaseSpec: Prisma.$SheetBaseSpecPayload<ExtArgs> | null
      sutebaSpec: Prisma.$SutebaSpecPayload<ExtArgs> | null
      spongeCorkSpec: Prisma.$SpongeCorkSpecPayload<ExtArgs> | null
      centerMetalSpec: Prisma.$CenterMetalSpecPayload<ExtArgs> | null
      nickSpec: Prisma.$NickSpecPayload<ExtArgs> | null
      ruleThicknessSpec: Prisma.$RuleThicknessSpecPayload<ExtArgs> | null
      remarkSpec: Prisma.$RemarkSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      machineManufacturerId: string | null
      machineManufacturerName: string | null
      machineName: string | null
      machineType: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      kuwaeSpecId: number | null
      detailSpecId: number | null
      filmSpecId: number | null
      ruleSpecId: number | null
      sheetBaseSpecId: number | null
      sutebaSpecId: number | null
      spongeCorkSpecId: number | null
      centerMetalSpecId: number | null
      nickSpecId: number | null
      ruleThicknessSpecId: number | null
      remarkSpecId: number | null
    }, ExtArgs["result"]["machineBasicSpec"]>
    composites: {}
  }

  type MachineBasicSpecGetPayload<S extends boolean | null | undefined | MachineBasicSpecDefaultArgs> = $Result.GetResult<Prisma.$MachineBasicSpecPayload, S>

  type MachineBasicSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MachineBasicSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MachineBasicSpecCountAggregateInputType | true
    }

  export interface MachineBasicSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MachineBasicSpec'], meta: { name: 'MachineBasicSpec' } }
    /**
     * Find zero or one MachineBasicSpec that matches the filter.
     * @param {MachineBasicSpecFindUniqueArgs} args - Arguments to find a MachineBasicSpec
     * @example
     * // Get one MachineBasicSpec
     * const machineBasicSpec = await prisma.machineBasicSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MachineBasicSpecFindUniqueArgs>(args: SelectSubset<T, MachineBasicSpecFindUniqueArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MachineBasicSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MachineBasicSpecFindUniqueOrThrowArgs} args - Arguments to find a MachineBasicSpec
     * @example
     * // Get one MachineBasicSpec
     * const machineBasicSpec = await prisma.machineBasicSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MachineBasicSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, MachineBasicSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MachineBasicSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecFindFirstArgs} args - Arguments to find a MachineBasicSpec
     * @example
     * // Get one MachineBasicSpec
     * const machineBasicSpec = await prisma.machineBasicSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MachineBasicSpecFindFirstArgs>(args?: SelectSubset<T, MachineBasicSpecFindFirstArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MachineBasicSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecFindFirstOrThrowArgs} args - Arguments to find a MachineBasicSpec
     * @example
     * // Get one MachineBasicSpec
     * const machineBasicSpec = await prisma.machineBasicSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MachineBasicSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, MachineBasicSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MachineBasicSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MachineBasicSpecs
     * const machineBasicSpecs = await prisma.machineBasicSpec.findMany()
     * 
     * // Get first 10 MachineBasicSpecs
     * const machineBasicSpecs = await prisma.machineBasicSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const machineBasicSpecWithIdOnly = await prisma.machineBasicSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MachineBasicSpecFindManyArgs>(args?: SelectSubset<T, MachineBasicSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MachineBasicSpec.
     * @param {MachineBasicSpecCreateArgs} args - Arguments to create a MachineBasicSpec.
     * @example
     * // Create one MachineBasicSpec
     * const MachineBasicSpec = await prisma.machineBasicSpec.create({
     *   data: {
     *     // ... data to create a MachineBasicSpec
     *   }
     * })
     * 
     */
    create<T extends MachineBasicSpecCreateArgs>(args: SelectSubset<T, MachineBasicSpecCreateArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MachineBasicSpecs.
     * @param {MachineBasicSpecCreateManyArgs} args - Arguments to create many MachineBasicSpecs.
     * @example
     * // Create many MachineBasicSpecs
     * const machineBasicSpec = await prisma.machineBasicSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MachineBasicSpecCreateManyArgs>(args?: SelectSubset<T, MachineBasicSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MachineBasicSpecs and returns the data saved in the database.
     * @param {MachineBasicSpecCreateManyAndReturnArgs} args - Arguments to create many MachineBasicSpecs.
     * @example
     * // Create many MachineBasicSpecs
     * const machineBasicSpec = await prisma.machineBasicSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MachineBasicSpecs and only return the `id`
     * const machineBasicSpecWithIdOnly = await prisma.machineBasicSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MachineBasicSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, MachineBasicSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MachineBasicSpec.
     * @param {MachineBasicSpecDeleteArgs} args - Arguments to delete one MachineBasicSpec.
     * @example
     * // Delete one MachineBasicSpec
     * const MachineBasicSpec = await prisma.machineBasicSpec.delete({
     *   where: {
     *     // ... filter to delete one MachineBasicSpec
     *   }
     * })
     * 
     */
    delete<T extends MachineBasicSpecDeleteArgs>(args: SelectSubset<T, MachineBasicSpecDeleteArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MachineBasicSpec.
     * @param {MachineBasicSpecUpdateArgs} args - Arguments to update one MachineBasicSpec.
     * @example
     * // Update one MachineBasicSpec
     * const machineBasicSpec = await prisma.machineBasicSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MachineBasicSpecUpdateArgs>(args: SelectSubset<T, MachineBasicSpecUpdateArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MachineBasicSpecs.
     * @param {MachineBasicSpecDeleteManyArgs} args - Arguments to filter MachineBasicSpecs to delete.
     * @example
     * // Delete a few MachineBasicSpecs
     * const { count } = await prisma.machineBasicSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MachineBasicSpecDeleteManyArgs>(args?: SelectSubset<T, MachineBasicSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineBasicSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MachineBasicSpecs
     * const machineBasicSpec = await prisma.machineBasicSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MachineBasicSpecUpdateManyArgs>(args: SelectSubset<T, MachineBasicSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MachineBasicSpecs and returns the data updated in the database.
     * @param {MachineBasicSpecUpdateManyAndReturnArgs} args - Arguments to update many MachineBasicSpecs.
     * @example
     * // Update many MachineBasicSpecs
     * const machineBasicSpec = await prisma.machineBasicSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MachineBasicSpecs and only return the `id`
     * const machineBasicSpecWithIdOnly = await prisma.machineBasicSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends MachineBasicSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, MachineBasicSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MachineBasicSpec.
     * @param {MachineBasicSpecUpsertArgs} args - Arguments to update or create a MachineBasicSpec.
     * @example
     * // Update or create a MachineBasicSpec
     * const machineBasicSpec = await prisma.machineBasicSpec.upsert({
     *   create: {
     *     // ... data to create a MachineBasicSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MachineBasicSpec we want to update
     *   }
     * })
     */
    upsert<T extends MachineBasicSpecUpsertArgs>(args: SelectSubset<T, MachineBasicSpecUpsertArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MachineBasicSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecCountArgs} args - Arguments to filter MachineBasicSpecs to count.
     * @example
     * // Count the number of MachineBasicSpecs
     * const count = await prisma.machineBasicSpec.count({
     *   where: {
     *     // ... the filter for the MachineBasicSpecs we want to count
     *   }
     * })
    **/
    count<T extends MachineBasicSpecCountArgs>(
      args?: Subset<T, MachineBasicSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MachineBasicSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MachineBasicSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MachineBasicSpecAggregateArgs>(args: Subset<T, MachineBasicSpecAggregateArgs>): Prisma.PrismaPromise<GetMachineBasicSpecAggregateType<T>>

    /**
     * Group by MachineBasicSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MachineBasicSpecGroupByArgs} args - Group by arguments.
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
      T extends MachineBasicSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MachineBasicSpecGroupByArgs['orderBy'] }
        : { orderBy?: MachineBasicSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MachineBasicSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMachineBasicSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MachineBasicSpec model
   */
  readonly fields: MachineBasicSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MachineBasicSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MachineBasicSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kuwaeSpec<T extends MachineBasicSpec$kuwaeSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$kuwaeSpecArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    detailSpec<T extends MachineBasicSpec$detailSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$detailSpecArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    filmSpec<T extends MachineBasicSpec$filmSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$filmSpecArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ruleSpec<T extends MachineBasicSpec$ruleSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$ruleSpecArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sheetBaseSpec<T extends MachineBasicSpec$sheetBaseSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$sheetBaseSpecArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sutebaSpec<T extends MachineBasicSpec$sutebaSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$sutebaSpecArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    spongeCorkSpec<T extends MachineBasicSpec$spongeCorkSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$spongeCorkSpecArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    centerMetalSpec<T extends MachineBasicSpec$centerMetalSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$centerMetalSpecArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nickSpec<T extends MachineBasicSpec$nickSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$nickSpecArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ruleThicknessSpec<T extends MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    remarkSpec<T extends MachineBasicSpec$remarkSpecArgs<ExtArgs> = {}>(args?: Subset<T, MachineBasicSpec$remarkSpecArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MachineBasicSpec model
   */
  interface MachineBasicSpecFieldRefs {
    readonly id: FieldRef<"MachineBasicSpec", 'Int'>
    readonly machineManufacturerId: FieldRef<"MachineBasicSpec", 'String'>
    readonly machineManufacturerName: FieldRef<"MachineBasicSpec", 'String'>
    readonly machineName: FieldRef<"MachineBasicSpec", 'String'>
    readonly machineType: FieldRef<"MachineBasicSpec", 'String'>
    readonly isDeleted: FieldRef<"MachineBasicSpec", 'Boolean'>
    readonly createdAt: FieldRef<"MachineBasicSpec", 'DateTime'>
    readonly updatedAt: FieldRef<"MachineBasicSpec", 'DateTime'>
    readonly deletedAt: FieldRef<"MachineBasicSpec", 'DateTime'>
    readonly kuwaeSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly detailSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly filmSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly ruleSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly sheetBaseSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly sutebaSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly spongeCorkSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly centerMetalSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly nickSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly ruleThicknessSpecId: FieldRef<"MachineBasicSpec", 'Int'>
    readonly remarkSpecId: FieldRef<"MachineBasicSpec", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MachineBasicSpec findUnique
   */
  export type MachineBasicSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * Filter, which MachineBasicSpec to fetch.
     */
    where: MachineBasicSpecWhereUniqueInput
  }

  /**
   * MachineBasicSpec findUniqueOrThrow
   */
  export type MachineBasicSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * Filter, which MachineBasicSpec to fetch.
     */
    where: MachineBasicSpecWhereUniqueInput
  }

  /**
   * MachineBasicSpec findFirst
   */
  export type MachineBasicSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * Filter, which MachineBasicSpec to fetch.
     */
    where?: MachineBasicSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineBasicSpecs to fetch.
     */
    orderBy?: MachineBasicSpecOrderByWithRelationInput | MachineBasicSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineBasicSpecs.
     */
    cursor?: MachineBasicSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineBasicSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineBasicSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineBasicSpecs.
     */
    distinct?: MachineBasicSpecScalarFieldEnum | MachineBasicSpecScalarFieldEnum[]
  }

  /**
   * MachineBasicSpec findFirstOrThrow
   */
  export type MachineBasicSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * Filter, which MachineBasicSpec to fetch.
     */
    where?: MachineBasicSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineBasicSpecs to fetch.
     */
    orderBy?: MachineBasicSpecOrderByWithRelationInput | MachineBasicSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MachineBasicSpecs.
     */
    cursor?: MachineBasicSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineBasicSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineBasicSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MachineBasicSpecs.
     */
    distinct?: MachineBasicSpecScalarFieldEnum | MachineBasicSpecScalarFieldEnum[]
  }

  /**
   * MachineBasicSpec findMany
   */
  export type MachineBasicSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * Filter, which MachineBasicSpecs to fetch.
     */
    where?: MachineBasicSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MachineBasicSpecs to fetch.
     */
    orderBy?: MachineBasicSpecOrderByWithRelationInput | MachineBasicSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MachineBasicSpecs.
     */
    cursor?: MachineBasicSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MachineBasicSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MachineBasicSpecs.
     */
    skip?: number
    distinct?: MachineBasicSpecScalarFieldEnum | MachineBasicSpecScalarFieldEnum[]
  }

  /**
   * MachineBasicSpec create
   */
  export type MachineBasicSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a MachineBasicSpec.
     */
    data: XOR<MachineBasicSpecCreateInput, MachineBasicSpecUncheckedCreateInput>
  }

  /**
   * MachineBasicSpec createMany
   */
  export type MachineBasicSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MachineBasicSpecs.
     */
    data: MachineBasicSpecCreateManyInput | MachineBasicSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MachineBasicSpec createManyAndReturn
   */
  export type MachineBasicSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * The data used to create many MachineBasicSpecs.
     */
    data: MachineBasicSpecCreateManyInput | MachineBasicSpecCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MachineBasicSpec update
   */
  export type MachineBasicSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a MachineBasicSpec.
     */
    data: XOR<MachineBasicSpecUpdateInput, MachineBasicSpecUncheckedUpdateInput>
    /**
     * Choose, which MachineBasicSpec to update.
     */
    where: MachineBasicSpecWhereUniqueInput
  }

  /**
   * MachineBasicSpec updateMany
   */
  export type MachineBasicSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MachineBasicSpecs.
     */
    data: XOR<MachineBasicSpecUpdateManyMutationInput, MachineBasicSpecUncheckedUpdateManyInput>
    /**
     * Filter which MachineBasicSpecs to update
     */
    where?: MachineBasicSpecWhereInput
    /**
     * Limit how many MachineBasicSpecs to update.
     */
    limit?: number
  }

  /**
   * MachineBasicSpec updateManyAndReturn
   */
  export type MachineBasicSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * The data used to update MachineBasicSpecs.
     */
    data: XOR<MachineBasicSpecUpdateManyMutationInput, MachineBasicSpecUncheckedUpdateManyInput>
    /**
     * Filter which MachineBasicSpecs to update
     */
    where?: MachineBasicSpecWhereInput
    /**
     * Limit how many MachineBasicSpecs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MachineBasicSpec upsert
   */
  export type MachineBasicSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the MachineBasicSpec to update in case it exists.
     */
    where: MachineBasicSpecWhereUniqueInput
    /**
     * In case the MachineBasicSpec found by the `where` argument doesn't exist, create a new MachineBasicSpec with this data.
     */
    create: XOR<MachineBasicSpecCreateInput, MachineBasicSpecUncheckedCreateInput>
    /**
     * In case the MachineBasicSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MachineBasicSpecUpdateInput, MachineBasicSpecUncheckedUpdateInput>
  }

  /**
   * MachineBasicSpec delete
   */
  export type MachineBasicSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    /**
     * Filter which MachineBasicSpec to delete.
     */
    where: MachineBasicSpecWhereUniqueInput
  }

  /**
   * MachineBasicSpec deleteMany
   */
  export type MachineBasicSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MachineBasicSpecs to delete
     */
    where?: MachineBasicSpecWhereInput
    /**
     * Limit how many MachineBasicSpecs to delete.
     */
    limit?: number
  }

  /**
   * MachineBasicSpec.kuwaeSpec
   */
  export type MachineBasicSpec$kuwaeSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    where?: KuwaeSpecWhereInput
  }

  /**
   * MachineBasicSpec.detailSpec
   */
  export type MachineBasicSpec$detailSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    where?: DetailSpecWhereInput
  }

  /**
   * MachineBasicSpec.filmSpec
   */
  export type MachineBasicSpec$filmSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    where?: FilmSpecWhereInput
  }

  /**
   * MachineBasicSpec.ruleSpec
   */
  export type MachineBasicSpec$ruleSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    where?: RuleSpecWhereInput
  }

  /**
   * MachineBasicSpec.sheetBaseSpec
   */
  export type MachineBasicSpec$sheetBaseSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    where?: SheetBaseSpecWhereInput
  }

  /**
   * MachineBasicSpec.sutebaSpec
   */
  export type MachineBasicSpec$sutebaSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    where?: SutebaSpecWhereInput
  }

  /**
   * MachineBasicSpec.spongeCorkSpec
   */
  export type MachineBasicSpec$spongeCorkSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    where?: SpongeCorkSpecWhereInput
  }

  /**
   * MachineBasicSpec.centerMetalSpec
   */
  export type MachineBasicSpec$centerMetalSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    where?: CenterMetalSpecWhereInput
  }

  /**
   * MachineBasicSpec.nickSpec
   */
  export type MachineBasicSpec$nickSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    where?: NickSpecWhereInput
  }

  /**
   * MachineBasicSpec.ruleThicknessSpec
   */
  export type MachineBasicSpec$ruleThicknessSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    where?: RuleThicknessSpecWhereInput
  }

  /**
   * MachineBasicSpec.remarkSpec
   */
  export type MachineBasicSpec$remarkSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    where?: RemarkSpecWhereInput
  }

  /**
   * MachineBasicSpec without action
   */
  export type MachineBasicSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
  }


  /**
   * Model KuwaeSpec
   */

  export type AggregateKuwaeSpec = {
    _count: KuwaeSpecCountAggregateOutputType | null
    _avg: KuwaeSpecAvgAggregateOutputType | null
    _sum: KuwaeSpecSumAggregateOutputType | null
    _min: KuwaeSpecMinAggregateOutputType | null
    _max: KuwaeSpecMaxAggregateOutputType | null
  }

  export type KuwaeSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type KuwaeSpecSumAggregateOutputType = {
    id: number | null
  }

  export type KuwaeSpecMinAggregateOutputType = {
    id: number | null
    die_kuwae: string | null
    kuwae_cutting_thickness: string | null
    kuwae_cutting_width: string | null
    kuwae_angle: string | null
    back_kuwae_angle: string | null
  }

  export type KuwaeSpecMaxAggregateOutputType = {
    id: number | null
    die_kuwae: string | null
    kuwae_cutting_thickness: string | null
    kuwae_cutting_width: string | null
    kuwae_angle: string | null
    back_kuwae_angle: string | null
  }

  export type KuwaeSpecCountAggregateOutputType = {
    id: number
    die_kuwae: number
    kuwae_cutting_thickness: number
    kuwae_cutting_width: number
    kuwae_angle: number
    back_kuwae_angle: number
    _all: number
  }


  export type KuwaeSpecAvgAggregateInputType = {
    id?: true
  }

  export type KuwaeSpecSumAggregateInputType = {
    id?: true
  }

  export type KuwaeSpecMinAggregateInputType = {
    id?: true
    die_kuwae?: true
    kuwae_cutting_thickness?: true
    kuwae_cutting_width?: true
    kuwae_angle?: true
    back_kuwae_angle?: true
  }

  export type KuwaeSpecMaxAggregateInputType = {
    id?: true
    die_kuwae?: true
    kuwae_cutting_thickness?: true
    kuwae_cutting_width?: true
    kuwae_angle?: true
    back_kuwae_angle?: true
  }

  export type KuwaeSpecCountAggregateInputType = {
    id?: true
    die_kuwae?: true
    kuwae_cutting_thickness?: true
    kuwae_cutting_width?: true
    kuwae_angle?: true
    back_kuwae_angle?: true
    _all?: true
  }

  export type KuwaeSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KuwaeSpec to aggregate.
     */
    where?: KuwaeSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KuwaeSpecs to fetch.
     */
    orderBy?: KuwaeSpecOrderByWithRelationInput | KuwaeSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KuwaeSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KuwaeSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KuwaeSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KuwaeSpecs
    **/
    _count?: true | KuwaeSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KuwaeSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KuwaeSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KuwaeSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KuwaeSpecMaxAggregateInputType
  }

  export type GetKuwaeSpecAggregateType<T extends KuwaeSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateKuwaeSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKuwaeSpec[P]>
      : GetScalarType<T[P], AggregateKuwaeSpec[P]>
  }




  export type KuwaeSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KuwaeSpecWhereInput
    orderBy?: KuwaeSpecOrderByWithAggregationInput | KuwaeSpecOrderByWithAggregationInput[]
    by: KuwaeSpecScalarFieldEnum[] | KuwaeSpecScalarFieldEnum
    having?: KuwaeSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KuwaeSpecCountAggregateInputType | true
    _avg?: KuwaeSpecAvgAggregateInputType
    _sum?: KuwaeSpecSumAggregateInputType
    _min?: KuwaeSpecMinAggregateInputType
    _max?: KuwaeSpecMaxAggregateInputType
  }

  export type KuwaeSpecGroupByOutputType = {
    id: number
    die_kuwae: string | null
    kuwae_cutting_thickness: string | null
    kuwae_cutting_width: string | null
    kuwae_angle: string | null
    back_kuwae_angle: string | null
    _count: KuwaeSpecCountAggregateOutputType | null
    _avg: KuwaeSpecAvgAggregateOutputType | null
    _sum: KuwaeSpecSumAggregateOutputType | null
    _min: KuwaeSpecMinAggregateOutputType | null
    _max: KuwaeSpecMaxAggregateOutputType | null
  }

  type GetKuwaeSpecGroupByPayload<T extends KuwaeSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KuwaeSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KuwaeSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KuwaeSpecGroupByOutputType[P]>
            : GetScalarType<T[P], KuwaeSpecGroupByOutputType[P]>
        }
      >
    >


  export type KuwaeSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    die_kuwae?: boolean
    kuwae_cutting_thickness?: boolean
    kuwae_cutting_width?: boolean
    kuwae_angle?: boolean
    back_kuwae_angle?: boolean
    machineBasicSpec?: boolean | KuwaeSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["kuwaeSpec"]>

  export type KuwaeSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    die_kuwae?: boolean
    kuwae_cutting_thickness?: boolean
    kuwae_cutting_width?: boolean
    kuwae_angle?: boolean
    back_kuwae_angle?: boolean
  }, ExtArgs["result"]["kuwaeSpec"]>

  export type KuwaeSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    die_kuwae?: boolean
    kuwae_cutting_thickness?: boolean
    kuwae_cutting_width?: boolean
    kuwae_angle?: boolean
    back_kuwae_angle?: boolean
  }, ExtArgs["result"]["kuwaeSpec"]>

  export type KuwaeSpecSelectScalar = {
    id?: boolean
    die_kuwae?: boolean
    kuwae_cutting_thickness?: boolean
    kuwae_cutting_width?: boolean
    kuwae_angle?: boolean
    back_kuwae_angle?: boolean
  }

  export type KuwaeSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "die_kuwae" | "kuwae_cutting_thickness" | "kuwae_cutting_width" | "kuwae_angle" | "back_kuwae_angle", ExtArgs["result"]["kuwaeSpec"]>
  export type KuwaeSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | KuwaeSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type KuwaeSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KuwaeSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KuwaeSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KuwaeSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      die_kuwae: string | null
      kuwae_cutting_thickness: string | null
      kuwae_cutting_width: string | null
      kuwae_angle: string | null
      back_kuwae_angle: string | null
    }, ExtArgs["result"]["kuwaeSpec"]>
    composites: {}
  }

  type KuwaeSpecGetPayload<S extends boolean | null | undefined | KuwaeSpecDefaultArgs> = $Result.GetResult<Prisma.$KuwaeSpecPayload, S>

  type KuwaeSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KuwaeSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KuwaeSpecCountAggregateInputType | true
    }

  export interface KuwaeSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KuwaeSpec'], meta: { name: 'KuwaeSpec' } }
    /**
     * Find zero or one KuwaeSpec that matches the filter.
     * @param {KuwaeSpecFindUniqueArgs} args - Arguments to find a KuwaeSpec
     * @example
     * // Get one KuwaeSpec
     * const kuwaeSpec = await prisma.kuwaeSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KuwaeSpecFindUniqueArgs>(args: SelectSubset<T, KuwaeSpecFindUniqueArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KuwaeSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KuwaeSpecFindUniqueOrThrowArgs} args - Arguments to find a KuwaeSpec
     * @example
     * // Get one KuwaeSpec
     * const kuwaeSpec = await prisma.kuwaeSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KuwaeSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, KuwaeSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KuwaeSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecFindFirstArgs} args - Arguments to find a KuwaeSpec
     * @example
     * // Get one KuwaeSpec
     * const kuwaeSpec = await prisma.kuwaeSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KuwaeSpecFindFirstArgs>(args?: SelectSubset<T, KuwaeSpecFindFirstArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KuwaeSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecFindFirstOrThrowArgs} args - Arguments to find a KuwaeSpec
     * @example
     * // Get one KuwaeSpec
     * const kuwaeSpec = await prisma.kuwaeSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KuwaeSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, KuwaeSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KuwaeSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KuwaeSpecs
     * const kuwaeSpecs = await prisma.kuwaeSpec.findMany()
     * 
     * // Get first 10 KuwaeSpecs
     * const kuwaeSpecs = await prisma.kuwaeSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kuwaeSpecWithIdOnly = await prisma.kuwaeSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KuwaeSpecFindManyArgs>(args?: SelectSubset<T, KuwaeSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KuwaeSpec.
     * @param {KuwaeSpecCreateArgs} args - Arguments to create a KuwaeSpec.
     * @example
     * // Create one KuwaeSpec
     * const KuwaeSpec = await prisma.kuwaeSpec.create({
     *   data: {
     *     // ... data to create a KuwaeSpec
     *   }
     * })
     * 
     */
    create<T extends KuwaeSpecCreateArgs>(args: SelectSubset<T, KuwaeSpecCreateArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KuwaeSpecs.
     * @param {KuwaeSpecCreateManyArgs} args - Arguments to create many KuwaeSpecs.
     * @example
     * // Create many KuwaeSpecs
     * const kuwaeSpec = await prisma.kuwaeSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KuwaeSpecCreateManyArgs>(args?: SelectSubset<T, KuwaeSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KuwaeSpecs and returns the data saved in the database.
     * @param {KuwaeSpecCreateManyAndReturnArgs} args - Arguments to create many KuwaeSpecs.
     * @example
     * // Create many KuwaeSpecs
     * const kuwaeSpec = await prisma.kuwaeSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KuwaeSpecs and only return the `id`
     * const kuwaeSpecWithIdOnly = await prisma.kuwaeSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KuwaeSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, KuwaeSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KuwaeSpec.
     * @param {KuwaeSpecDeleteArgs} args - Arguments to delete one KuwaeSpec.
     * @example
     * // Delete one KuwaeSpec
     * const KuwaeSpec = await prisma.kuwaeSpec.delete({
     *   where: {
     *     // ... filter to delete one KuwaeSpec
     *   }
     * })
     * 
     */
    delete<T extends KuwaeSpecDeleteArgs>(args: SelectSubset<T, KuwaeSpecDeleteArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KuwaeSpec.
     * @param {KuwaeSpecUpdateArgs} args - Arguments to update one KuwaeSpec.
     * @example
     * // Update one KuwaeSpec
     * const kuwaeSpec = await prisma.kuwaeSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KuwaeSpecUpdateArgs>(args: SelectSubset<T, KuwaeSpecUpdateArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KuwaeSpecs.
     * @param {KuwaeSpecDeleteManyArgs} args - Arguments to filter KuwaeSpecs to delete.
     * @example
     * // Delete a few KuwaeSpecs
     * const { count } = await prisma.kuwaeSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KuwaeSpecDeleteManyArgs>(args?: SelectSubset<T, KuwaeSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KuwaeSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KuwaeSpecs
     * const kuwaeSpec = await prisma.kuwaeSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KuwaeSpecUpdateManyArgs>(args: SelectSubset<T, KuwaeSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KuwaeSpecs and returns the data updated in the database.
     * @param {KuwaeSpecUpdateManyAndReturnArgs} args - Arguments to update many KuwaeSpecs.
     * @example
     * // Update many KuwaeSpecs
     * const kuwaeSpec = await prisma.kuwaeSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KuwaeSpecs and only return the `id`
     * const kuwaeSpecWithIdOnly = await prisma.kuwaeSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends KuwaeSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, KuwaeSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KuwaeSpec.
     * @param {KuwaeSpecUpsertArgs} args - Arguments to update or create a KuwaeSpec.
     * @example
     * // Update or create a KuwaeSpec
     * const kuwaeSpec = await prisma.kuwaeSpec.upsert({
     *   create: {
     *     // ... data to create a KuwaeSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KuwaeSpec we want to update
     *   }
     * })
     */
    upsert<T extends KuwaeSpecUpsertArgs>(args: SelectSubset<T, KuwaeSpecUpsertArgs<ExtArgs>>): Prisma__KuwaeSpecClient<$Result.GetResult<Prisma.$KuwaeSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KuwaeSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecCountArgs} args - Arguments to filter KuwaeSpecs to count.
     * @example
     * // Count the number of KuwaeSpecs
     * const count = await prisma.kuwaeSpec.count({
     *   where: {
     *     // ... the filter for the KuwaeSpecs we want to count
     *   }
     * })
    **/
    count<T extends KuwaeSpecCountArgs>(
      args?: Subset<T, KuwaeSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KuwaeSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KuwaeSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KuwaeSpecAggregateArgs>(args: Subset<T, KuwaeSpecAggregateArgs>): Prisma.PrismaPromise<GetKuwaeSpecAggregateType<T>>

    /**
     * Group by KuwaeSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KuwaeSpecGroupByArgs} args - Group by arguments.
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
      T extends KuwaeSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KuwaeSpecGroupByArgs['orderBy'] }
        : { orderBy?: KuwaeSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KuwaeSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKuwaeSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KuwaeSpec model
   */
  readonly fields: KuwaeSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KuwaeSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KuwaeSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends KuwaeSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, KuwaeSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the KuwaeSpec model
   */
  interface KuwaeSpecFieldRefs {
    readonly id: FieldRef<"KuwaeSpec", 'Int'>
    readonly die_kuwae: FieldRef<"KuwaeSpec", 'String'>
    readonly kuwae_cutting_thickness: FieldRef<"KuwaeSpec", 'String'>
    readonly kuwae_cutting_width: FieldRef<"KuwaeSpec", 'String'>
    readonly kuwae_angle: FieldRef<"KuwaeSpec", 'String'>
    readonly back_kuwae_angle: FieldRef<"KuwaeSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * KuwaeSpec findUnique
   */
  export type KuwaeSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * Filter, which KuwaeSpec to fetch.
     */
    where: KuwaeSpecWhereUniqueInput
  }

  /**
   * KuwaeSpec findUniqueOrThrow
   */
  export type KuwaeSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * Filter, which KuwaeSpec to fetch.
     */
    where: KuwaeSpecWhereUniqueInput
  }

  /**
   * KuwaeSpec findFirst
   */
  export type KuwaeSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * Filter, which KuwaeSpec to fetch.
     */
    where?: KuwaeSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KuwaeSpecs to fetch.
     */
    orderBy?: KuwaeSpecOrderByWithRelationInput | KuwaeSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KuwaeSpecs.
     */
    cursor?: KuwaeSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KuwaeSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KuwaeSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KuwaeSpecs.
     */
    distinct?: KuwaeSpecScalarFieldEnum | KuwaeSpecScalarFieldEnum[]
  }

  /**
   * KuwaeSpec findFirstOrThrow
   */
  export type KuwaeSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * Filter, which KuwaeSpec to fetch.
     */
    where?: KuwaeSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KuwaeSpecs to fetch.
     */
    orderBy?: KuwaeSpecOrderByWithRelationInput | KuwaeSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KuwaeSpecs.
     */
    cursor?: KuwaeSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KuwaeSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KuwaeSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KuwaeSpecs.
     */
    distinct?: KuwaeSpecScalarFieldEnum | KuwaeSpecScalarFieldEnum[]
  }

  /**
   * KuwaeSpec findMany
   */
  export type KuwaeSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * Filter, which KuwaeSpecs to fetch.
     */
    where?: KuwaeSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KuwaeSpecs to fetch.
     */
    orderBy?: KuwaeSpecOrderByWithRelationInput | KuwaeSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KuwaeSpecs.
     */
    cursor?: KuwaeSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KuwaeSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KuwaeSpecs.
     */
    skip?: number
    distinct?: KuwaeSpecScalarFieldEnum | KuwaeSpecScalarFieldEnum[]
  }

  /**
   * KuwaeSpec create
   */
  export type KuwaeSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a KuwaeSpec.
     */
    data?: XOR<KuwaeSpecCreateInput, KuwaeSpecUncheckedCreateInput>
  }

  /**
   * KuwaeSpec createMany
   */
  export type KuwaeSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KuwaeSpecs.
     */
    data: KuwaeSpecCreateManyInput | KuwaeSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KuwaeSpec createManyAndReturn
   */
  export type KuwaeSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * The data used to create many KuwaeSpecs.
     */
    data: KuwaeSpecCreateManyInput | KuwaeSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KuwaeSpec update
   */
  export type KuwaeSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a KuwaeSpec.
     */
    data: XOR<KuwaeSpecUpdateInput, KuwaeSpecUncheckedUpdateInput>
    /**
     * Choose, which KuwaeSpec to update.
     */
    where: KuwaeSpecWhereUniqueInput
  }

  /**
   * KuwaeSpec updateMany
   */
  export type KuwaeSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KuwaeSpecs.
     */
    data: XOR<KuwaeSpecUpdateManyMutationInput, KuwaeSpecUncheckedUpdateManyInput>
    /**
     * Filter which KuwaeSpecs to update
     */
    where?: KuwaeSpecWhereInput
    /**
     * Limit how many KuwaeSpecs to update.
     */
    limit?: number
  }

  /**
   * KuwaeSpec updateManyAndReturn
   */
  export type KuwaeSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * The data used to update KuwaeSpecs.
     */
    data: XOR<KuwaeSpecUpdateManyMutationInput, KuwaeSpecUncheckedUpdateManyInput>
    /**
     * Filter which KuwaeSpecs to update
     */
    where?: KuwaeSpecWhereInput
    /**
     * Limit how many KuwaeSpecs to update.
     */
    limit?: number
  }

  /**
   * KuwaeSpec upsert
   */
  export type KuwaeSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the KuwaeSpec to update in case it exists.
     */
    where: KuwaeSpecWhereUniqueInput
    /**
     * In case the KuwaeSpec found by the `where` argument doesn't exist, create a new KuwaeSpec with this data.
     */
    create: XOR<KuwaeSpecCreateInput, KuwaeSpecUncheckedCreateInput>
    /**
     * In case the KuwaeSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KuwaeSpecUpdateInput, KuwaeSpecUncheckedUpdateInput>
  }

  /**
   * KuwaeSpec delete
   */
  export type KuwaeSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
    /**
     * Filter which KuwaeSpec to delete.
     */
    where: KuwaeSpecWhereUniqueInput
  }

  /**
   * KuwaeSpec deleteMany
   */
  export type KuwaeSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KuwaeSpecs to delete
     */
    where?: KuwaeSpecWhereInput
    /**
     * Limit how many KuwaeSpecs to delete.
     */
    limit?: number
  }

  /**
   * KuwaeSpec.machineBasicSpec
   */
  export type KuwaeSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * KuwaeSpec without action
   */
  export type KuwaeSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KuwaeSpec
     */
    select?: KuwaeSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KuwaeSpec
     */
    omit?: KuwaeSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KuwaeSpecInclude<ExtArgs> | null
  }


  /**
   * Model DetailSpec
   */

  export type AggregateDetailSpec = {
    _count: DetailSpecCountAggregateOutputType | null
    _avg: DetailSpecAvgAggregateOutputType | null
    _sum: DetailSpecSumAggregateOutputType | null
    _min: DetailSpecMinAggregateOutputType | null
    _max: DetailSpecMaxAggregateOutputType | null
  }

  export type DetailSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type DetailSpecSumAggregateOutputType = {
    id: number | null
  }

  export type DetailSpecMinAggregateOutputType = {
    id: number | null
    mounting_hole: string | null
    nail_nut: string | null
    one_touch_bar: string | null
    stripper: string | null
    blanking: string | null
    under_pin: string | null
    cad_plate: string | null
    cad_plate_remark: string | null
  }

  export type DetailSpecMaxAggregateOutputType = {
    id: number | null
    mounting_hole: string | null
    nail_nut: string | null
    one_touch_bar: string | null
    stripper: string | null
    blanking: string | null
    under_pin: string | null
    cad_plate: string | null
    cad_plate_remark: string | null
  }

  export type DetailSpecCountAggregateOutputType = {
    id: number
    mounting_hole: number
    nail_nut: number
    one_touch_bar: number
    stripper: number
    blanking: number
    under_pin: number
    cad_plate: number
    cad_plate_remark: number
    _all: number
  }


  export type DetailSpecAvgAggregateInputType = {
    id?: true
  }

  export type DetailSpecSumAggregateInputType = {
    id?: true
  }

  export type DetailSpecMinAggregateInputType = {
    id?: true
    mounting_hole?: true
    nail_nut?: true
    one_touch_bar?: true
    stripper?: true
    blanking?: true
    under_pin?: true
    cad_plate?: true
    cad_plate_remark?: true
  }

  export type DetailSpecMaxAggregateInputType = {
    id?: true
    mounting_hole?: true
    nail_nut?: true
    one_touch_bar?: true
    stripper?: true
    blanking?: true
    under_pin?: true
    cad_plate?: true
    cad_plate_remark?: true
  }

  export type DetailSpecCountAggregateInputType = {
    id?: true
    mounting_hole?: true
    nail_nut?: true
    one_touch_bar?: true
    stripper?: true
    blanking?: true
    under_pin?: true
    cad_plate?: true
    cad_plate_remark?: true
    _all?: true
  }

  export type DetailSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailSpec to aggregate.
     */
    where?: DetailSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailSpecs to fetch.
     */
    orderBy?: DetailSpecOrderByWithRelationInput | DetailSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailSpecs
    **/
    _count?: true | DetailSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailSpecMaxAggregateInputType
  }

  export type GetDetailSpecAggregateType<T extends DetailSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailSpec[P]>
      : GetScalarType<T[P], AggregateDetailSpec[P]>
  }




  export type DetailSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailSpecWhereInput
    orderBy?: DetailSpecOrderByWithAggregationInput | DetailSpecOrderByWithAggregationInput[]
    by: DetailSpecScalarFieldEnum[] | DetailSpecScalarFieldEnum
    having?: DetailSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailSpecCountAggregateInputType | true
    _avg?: DetailSpecAvgAggregateInputType
    _sum?: DetailSpecSumAggregateInputType
    _min?: DetailSpecMinAggregateInputType
    _max?: DetailSpecMaxAggregateInputType
  }

  export type DetailSpecGroupByOutputType = {
    id: number
    mounting_hole: string | null
    nail_nut: string | null
    one_touch_bar: string | null
    stripper: string | null
    blanking: string | null
    under_pin: string | null
    cad_plate: string | null
    cad_plate_remark: string | null
    _count: DetailSpecCountAggregateOutputType | null
    _avg: DetailSpecAvgAggregateOutputType | null
    _sum: DetailSpecSumAggregateOutputType | null
    _min: DetailSpecMinAggregateOutputType | null
    _max: DetailSpecMaxAggregateOutputType | null
  }

  type GetDetailSpecGroupByPayload<T extends DetailSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailSpecGroupByOutputType[P]>
            : GetScalarType<T[P], DetailSpecGroupByOutputType[P]>
        }
      >
    >


  export type DetailSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mounting_hole?: boolean
    nail_nut?: boolean
    one_touch_bar?: boolean
    stripper?: boolean
    blanking?: boolean
    under_pin?: boolean
    cad_plate?: boolean
    cad_plate_remark?: boolean
    machineBasicSpec?: boolean | DetailSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["detailSpec"]>

  export type DetailSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mounting_hole?: boolean
    nail_nut?: boolean
    one_touch_bar?: boolean
    stripper?: boolean
    blanking?: boolean
    under_pin?: boolean
    cad_plate?: boolean
    cad_plate_remark?: boolean
  }, ExtArgs["result"]["detailSpec"]>

  export type DetailSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mounting_hole?: boolean
    nail_nut?: boolean
    one_touch_bar?: boolean
    stripper?: boolean
    blanking?: boolean
    under_pin?: boolean
    cad_plate?: boolean
    cad_plate_remark?: boolean
  }, ExtArgs["result"]["detailSpec"]>

  export type DetailSpecSelectScalar = {
    id?: boolean
    mounting_hole?: boolean
    nail_nut?: boolean
    one_touch_bar?: boolean
    stripper?: boolean
    blanking?: boolean
    under_pin?: boolean
    cad_plate?: boolean
    cad_plate_remark?: boolean
  }

  export type DetailSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mounting_hole" | "nail_nut" | "one_touch_bar" | "stripper" | "blanking" | "under_pin" | "cad_plate" | "cad_plate_remark", ExtArgs["result"]["detailSpec"]>
  export type DetailSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | DetailSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type DetailSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DetailSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DetailSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mounting_hole: string | null
      nail_nut: string | null
      one_touch_bar: string | null
      stripper: string | null
      blanking: string | null
      under_pin: string | null
      cad_plate: string | null
      cad_plate_remark: string | null
    }, ExtArgs["result"]["detailSpec"]>
    composites: {}
  }

  type DetailSpecGetPayload<S extends boolean | null | undefined | DetailSpecDefaultArgs> = $Result.GetResult<Prisma.$DetailSpecPayload, S>

  type DetailSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailSpecCountAggregateInputType | true
    }

  export interface DetailSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailSpec'], meta: { name: 'DetailSpec' } }
    /**
     * Find zero or one DetailSpec that matches the filter.
     * @param {DetailSpecFindUniqueArgs} args - Arguments to find a DetailSpec
     * @example
     * // Get one DetailSpec
     * const detailSpec = await prisma.detailSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailSpecFindUniqueArgs>(args: SelectSubset<T, DetailSpecFindUniqueArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailSpecFindUniqueOrThrowArgs} args - Arguments to find a DetailSpec
     * @example
     * // Get one DetailSpec
     * const detailSpec = await prisma.detailSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecFindFirstArgs} args - Arguments to find a DetailSpec
     * @example
     * // Get one DetailSpec
     * const detailSpec = await prisma.detailSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailSpecFindFirstArgs>(args?: SelectSubset<T, DetailSpecFindFirstArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecFindFirstOrThrowArgs} args - Arguments to find a DetailSpec
     * @example
     * // Get one DetailSpec
     * const detailSpec = await prisma.detailSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailSpecs
     * const detailSpecs = await prisma.detailSpec.findMany()
     * 
     * // Get first 10 DetailSpecs
     * const detailSpecs = await prisma.detailSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailSpecWithIdOnly = await prisma.detailSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailSpecFindManyArgs>(args?: SelectSubset<T, DetailSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailSpec.
     * @param {DetailSpecCreateArgs} args - Arguments to create a DetailSpec.
     * @example
     * // Create one DetailSpec
     * const DetailSpec = await prisma.detailSpec.create({
     *   data: {
     *     // ... data to create a DetailSpec
     *   }
     * })
     * 
     */
    create<T extends DetailSpecCreateArgs>(args: SelectSubset<T, DetailSpecCreateArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailSpecs.
     * @param {DetailSpecCreateManyArgs} args - Arguments to create many DetailSpecs.
     * @example
     * // Create many DetailSpecs
     * const detailSpec = await prisma.detailSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailSpecCreateManyArgs>(args?: SelectSubset<T, DetailSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailSpecs and returns the data saved in the database.
     * @param {DetailSpecCreateManyAndReturnArgs} args - Arguments to create many DetailSpecs.
     * @example
     * // Create many DetailSpecs
     * const detailSpec = await prisma.detailSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailSpecs and only return the `id`
     * const detailSpecWithIdOnly = await prisma.detailSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailSpec.
     * @param {DetailSpecDeleteArgs} args - Arguments to delete one DetailSpec.
     * @example
     * // Delete one DetailSpec
     * const DetailSpec = await prisma.detailSpec.delete({
     *   where: {
     *     // ... filter to delete one DetailSpec
     *   }
     * })
     * 
     */
    delete<T extends DetailSpecDeleteArgs>(args: SelectSubset<T, DetailSpecDeleteArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailSpec.
     * @param {DetailSpecUpdateArgs} args - Arguments to update one DetailSpec.
     * @example
     * // Update one DetailSpec
     * const detailSpec = await prisma.detailSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailSpecUpdateArgs>(args: SelectSubset<T, DetailSpecUpdateArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailSpecs.
     * @param {DetailSpecDeleteManyArgs} args - Arguments to filter DetailSpecs to delete.
     * @example
     * // Delete a few DetailSpecs
     * const { count } = await prisma.detailSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailSpecDeleteManyArgs>(args?: SelectSubset<T, DetailSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailSpecs
     * const detailSpec = await prisma.detailSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailSpecUpdateManyArgs>(args: SelectSubset<T, DetailSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailSpecs and returns the data updated in the database.
     * @param {DetailSpecUpdateManyAndReturnArgs} args - Arguments to update many DetailSpecs.
     * @example
     * // Update many DetailSpecs
     * const detailSpec = await prisma.detailSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailSpecs and only return the `id`
     * const detailSpecWithIdOnly = await prisma.detailSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailSpec.
     * @param {DetailSpecUpsertArgs} args - Arguments to update or create a DetailSpec.
     * @example
     * // Update or create a DetailSpec
     * const detailSpec = await prisma.detailSpec.upsert({
     *   create: {
     *     // ... data to create a DetailSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailSpec we want to update
     *   }
     * })
     */
    upsert<T extends DetailSpecUpsertArgs>(args: SelectSubset<T, DetailSpecUpsertArgs<ExtArgs>>): Prisma__DetailSpecClient<$Result.GetResult<Prisma.$DetailSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecCountArgs} args - Arguments to filter DetailSpecs to count.
     * @example
     * // Count the number of DetailSpecs
     * const count = await prisma.detailSpec.count({
     *   where: {
     *     // ... the filter for the DetailSpecs we want to count
     *   }
     * })
    **/
    count<T extends DetailSpecCountArgs>(
      args?: Subset<T, DetailSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailSpecAggregateArgs>(args: Subset<T, DetailSpecAggregateArgs>): Prisma.PrismaPromise<GetDetailSpecAggregateType<T>>

    /**
     * Group by DetailSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailSpecGroupByArgs} args - Group by arguments.
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
      T extends DetailSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailSpecGroupByArgs['orderBy'] }
        : { orderBy?: DetailSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailSpec model
   */
  readonly fields: DetailSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends DetailSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, DetailSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailSpec model
   */
  interface DetailSpecFieldRefs {
    readonly id: FieldRef<"DetailSpec", 'Int'>
    readonly mounting_hole: FieldRef<"DetailSpec", 'String'>
    readonly nail_nut: FieldRef<"DetailSpec", 'String'>
    readonly one_touch_bar: FieldRef<"DetailSpec", 'String'>
    readonly stripper: FieldRef<"DetailSpec", 'String'>
    readonly blanking: FieldRef<"DetailSpec", 'String'>
    readonly under_pin: FieldRef<"DetailSpec", 'String'>
    readonly cad_plate: FieldRef<"DetailSpec", 'String'>
    readonly cad_plate_remark: FieldRef<"DetailSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DetailSpec findUnique
   */
  export type DetailSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * Filter, which DetailSpec to fetch.
     */
    where: DetailSpecWhereUniqueInput
  }

  /**
   * DetailSpec findUniqueOrThrow
   */
  export type DetailSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * Filter, which DetailSpec to fetch.
     */
    where: DetailSpecWhereUniqueInput
  }

  /**
   * DetailSpec findFirst
   */
  export type DetailSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * Filter, which DetailSpec to fetch.
     */
    where?: DetailSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailSpecs to fetch.
     */
    orderBy?: DetailSpecOrderByWithRelationInput | DetailSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailSpecs.
     */
    cursor?: DetailSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailSpecs.
     */
    distinct?: DetailSpecScalarFieldEnum | DetailSpecScalarFieldEnum[]
  }

  /**
   * DetailSpec findFirstOrThrow
   */
  export type DetailSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * Filter, which DetailSpec to fetch.
     */
    where?: DetailSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailSpecs to fetch.
     */
    orderBy?: DetailSpecOrderByWithRelationInput | DetailSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailSpecs.
     */
    cursor?: DetailSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailSpecs.
     */
    distinct?: DetailSpecScalarFieldEnum | DetailSpecScalarFieldEnum[]
  }

  /**
   * DetailSpec findMany
   */
  export type DetailSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * Filter, which DetailSpecs to fetch.
     */
    where?: DetailSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailSpecs to fetch.
     */
    orderBy?: DetailSpecOrderByWithRelationInput | DetailSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailSpecs.
     */
    cursor?: DetailSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailSpecs.
     */
    skip?: number
    distinct?: DetailSpecScalarFieldEnum | DetailSpecScalarFieldEnum[]
  }

  /**
   * DetailSpec create
   */
  export type DetailSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailSpec.
     */
    data?: XOR<DetailSpecCreateInput, DetailSpecUncheckedCreateInput>
  }

  /**
   * DetailSpec createMany
   */
  export type DetailSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailSpecs.
     */
    data: DetailSpecCreateManyInput | DetailSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailSpec createManyAndReturn
   */
  export type DetailSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * The data used to create many DetailSpecs.
     */
    data: DetailSpecCreateManyInput | DetailSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailSpec update
   */
  export type DetailSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailSpec.
     */
    data: XOR<DetailSpecUpdateInput, DetailSpecUncheckedUpdateInput>
    /**
     * Choose, which DetailSpec to update.
     */
    where: DetailSpecWhereUniqueInput
  }

  /**
   * DetailSpec updateMany
   */
  export type DetailSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailSpecs.
     */
    data: XOR<DetailSpecUpdateManyMutationInput, DetailSpecUncheckedUpdateManyInput>
    /**
     * Filter which DetailSpecs to update
     */
    where?: DetailSpecWhereInput
    /**
     * Limit how many DetailSpecs to update.
     */
    limit?: number
  }

  /**
   * DetailSpec updateManyAndReturn
   */
  export type DetailSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * The data used to update DetailSpecs.
     */
    data: XOR<DetailSpecUpdateManyMutationInput, DetailSpecUncheckedUpdateManyInput>
    /**
     * Filter which DetailSpecs to update
     */
    where?: DetailSpecWhereInput
    /**
     * Limit how many DetailSpecs to update.
     */
    limit?: number
  }

  /**
   * DetailSpec upsert
   */
  export type DetailSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailSpec to update in case it exists.
     */
    where: DetailSpecWhereUniqueInput
    /**
     * In case the DetailSpec found by the `where` argument doesn't exist, create a new DetailSpec with this data.
     */
    create: XOR<DetailSpecCreateInput, DetailSpecUncheckedCreateInput>
    /**
     * In case the DetailSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailSpecUpdateInput, DetailSpecUncheckedUpdateInput>
  }

  /**
   * DetailSpec delete
   */
  export type DetailSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
    /**
     * Filter which DetailSpec to delete.
     */
    where: DetailSpecWhereUniqueInput
  }

  /**
   * DetailSpec deleteMany
   */
  export type DetailSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailSpecs to delete
     */
    where?: DetailSpecWhereInput
    /**
     * Limit how many DetailSpecs to delete.
     */
    limit?: number
  }

  /**
   * DetailSpec.machineBasicSpec
   */
  export type DetailSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * DetailSpec without action
   */
  export type DetailSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailSpec
     */
    select?: DetailSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailSpec
     */
    omit?: DetailSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailSpecInclude<ExtArgs> | null
  }


  /**
   * Model FilmSpec
   */

  export type AggregateFilmSpec = {
    _count: FilmSpecCountAggregateOutputType | null
    _avg: FilmSpecAvgAggregateOutputType | null
    _sum: FilmSpecSumAggregateOutputType | null
    _min: FilmSpecMinAggregateOutputType | null
    _max: FilmSpecMaxAggregateOutputType | null
  }

  export type FilmSpecAvgAggregateOutputType = {
    id: number | null
    film_thickness: number | null
  }

  export type FilmSpecSumAggregateOutputType = {
    id: number | null
    film_thickness: number | null
  }

  export type FilmSpecMinAggregateOutputType = {
    id: number | null
    film: string | null
    film_thickness: number | null
  }

  export type FilmSpecMaxAggregateOutputType = {
    id: number | null
    film: string | null
    film_thickness: number | null
  }

  export type FilmSpecCountAggregateOutputType = {
    id: number
    film: number
    film_thickness: number
    _all: number
  }


  export type FilmSpecAvgAggregateInputType = {
    id?: true
    film_thickness?: true
  }

  export type FilmSpecSumAggregateInputType = {
    id?: true
    film_thickness?: true
  }

  export type FilmSpecMinAggregateInputType = {
    id?: true
    film?: true
    film_thickness?: true
  }

  export type FilmSpecMaxAggregateInputType = {
    id?: true
    film?: true
    film_thickness?: true
  }

  export type FilmSpecCountAggregateInputType = {
    id?: true
    film?: true
    film_thickness?: true
    _all?: true
  }

  export type FilmSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilmSpec to aggregate.
     */
    where?: FilmSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilmSpecs to fetch.
     */
    orderBy?: FilmSpecOrderByWithRelationInput | FilmSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilmSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilmSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilmSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilmSpecs
    **/
    _count?: true | FilmSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmSpecMaxAggregateInputType
  }

  export type GetFilmSpecAggregateType<T extends FilmSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateFilmSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilmSpec[P]>
      : GetScalarType<T[P], AggregateFilmSpec[P]>
  }




  export type FilmSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilmSpecWhereInput
    orderBy?: FilmSpecOrderByWithAggregationInput | FilmSpecOrderByWithAggregationInput[]
    by: FilmSpecScalarFieldEnum[] | FilmSpecScalarFieldEnum
    having?: FilmSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmSpecCountAggregateInputType | true
    _avg?: FilmSpecAvgAggregateInputType
    _sum?: FilmSpecSumAggregateInputType
    _min?: FilmSpecMinAggregateInputType
    _max?: FilmSpecMaxAggregateInputType
  }

  export type FilmSpecGroupByOutputType = {
    id: number
    film: string | null
    film_thickness: number | null
    _count: FilmSpecCountAggregateOutputType | null
    _avg: FilmSpecAvgAggregateOutputType | null
    _sum: FilmSpecSumAggregateOutputType | null
    _min: FilmSpecMinAggregateOutputType | null
    _max: FilmSpecMaxAggregateOutputType | null
  }

  type GetFilmSpecGroupByPayload<T extends FilmSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmSpecGroupByOutputType[P]>
            : GetScalarType<T[P], FilmSpecGroupByOutputType[P]>
        }
      >
    >


  export type FilmSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film?: boolean
    film_thickness?: boolean
    machineBasicSpec?: boolean | FilmSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["filmSpec"]>

  export type FilmSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film?: boolean
    film_thickness?: boolean
  }, ExtArgs["result"]["filmSpec"]>

  export type FilmSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    film?: boolean
    film_thickness?: boolean
  }, ExtArgs["result"]["filmSpec"]>

  export type FilmSpecSelectScalar = {
    id?: boolean
    film?: boolean
    film_thickness?: boolean
  }

  export type FilmSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "film" | "film_thickness", ExtArgs["result"]["filmSpec"]>
  export type FilmSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | FilmSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type FilmSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilmSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilmSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilmSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      film: string | null
      film_thickness: number | null
    }, ExtArgs["result"]["filmSpec"]>
    composites: {}
  }

  type FilmSpecGetPayload<S extends boolean | null | undefined | FilmSpecDefaultArgs> = $Result.GetResult<Prisma.$FilmSpecPayload, S>

  type FilmSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilmSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmSpecCountAggregateInputType | true
    }

  export interface FilmSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilmSpec'], meta: { name: 'FilmSpec' } }
    /**
     * Find zero or one FilmSpec that matches the filter.
     * @param {FilmSpecFindUniqueArgs} args - Arguments to find a FilmSpec
     * @example
     * // Get one FilmSpec
     * const filmSpec = await prisma.filmSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilmSpecFindUniqueArgs>(args: SelectSubset<T, FilmSpecFindUniqueArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilmSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilmSpecFindUniqueOrThrowArgs} args - Arguments to find a FilmSpec
     * @example
     * // Get one FilmSpec
     * const filmSpec = await prisma.filmSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilmSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, FilmSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilmSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecFindFirstArgs} args - Arguments to find a FilmSpec
     * @example
     * // Get one FilmSpec
     * const filmSpec = await prisma.filmSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilmSpecFindFirstArgs>(args?: SelectSubset<T, FilmSpecFindFirstArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilmSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecFindFirstOrThrowArgs} args - Arguments to find a FilmSpec
     * @example
     * // Get one FilmSpec
     * const filmSpec = await prisma.filmSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilmSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, FilmSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilmSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilmSpecs
     * const filmSpecs = await prisma.filmSpec.findMany()
     * 
     * // Get first 10 FilmSpecs
     * const filmSpecs = await prisma.filmSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmSpecWithIdOnly = await prisma.filmSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilmSpecFindManyArgs>(args?: SelectSubset<T, FilmSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilmSpec.
     * @param {FilmSpecCreateArgs} args - Arguments to create a FilmSpec.
     * @example
     * // Create one FilmSpec
     * const FilmSpec = await prisma.filmSpec.create({
     *   data: {
     *     // ... data to create a FilmSpec
     *   }
     * })
     * 
     */
    create<T extends FilmSpecCreateArgs>(args: SelectSubset<T, FilmSpecCreateArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilmSpecs.
     * @param {FilmSpecCreateManyArgs} args - Arguments to create many FilmSpecs.
     * @example
     * // Create many FilmSpecs
     * const filmSpec = await prisma.filmSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilmSpecCreateManyArgs>(args?: SelectSubset<T, FilmSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilmSpecs and returns the data saved in the database.
     * @param {FilmSpecCreateManyAndReturnArgs} args - Arguments to create many FilmSpecs.
     * @example
     * // Create many FilmSpecs
     * const filmSpec = await prisma.filmSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilmSpecs and only return the `id`
     * const filmSpecWithIdOnly = await prisma.filmSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilmSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, FilmSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilmSpec.
     * @param {FilmSpecDeleteArgs} args - Arguments to delete one FilmSpec.
     * @example
     * // Delete one FilmSpec
     * const FilmSpec = await prisma.filmSpec.delete({
     *   where: {
     *     // ... filter to delete one FilmSpec
     *   }
     * })
     * 
     */
    delete<T extends FilmSpecDeleteArgs>(args: SelectSubset<T, FilmSpecDeleteArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilmSpec.
     * @param {FilmSpecUpdateArgs} args - Arguments to update one FilmSpec.
     * @example
     * // Update one FilmSpec
     * const filmSpec = await prisma.filmSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilmSpecUpdateArgs>(args: SelectSubset<T, FilmSpecUpdateArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilmSpecs.
     * @param {FilmSpecDeleteManyArgs} args - Arguments to filter FilmSpecs to delete.
     * @example
     * // Delete a few FilmSpecs
     * const { count } = await prisma.filmSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilmSpecDeleteManyArgs>(args?: SelectSubset<T, FilmSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilmSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilmSpecs
     * const filmSpec = await prisma.filmSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilmSpecUpdateManyArgs>(args: SelectSubset<T, FilmSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilmSpecs and returns the data updated in the database.
     * @param {FilmSpecUpdateManyAndReturnArgs} args - Arguments to update many FilmSpecs.
     * @example
     * // Update many FilmSpecs
     * const filmSpec = await prisma.filmSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilmSpecs and only return the `id`
     * const filmSpecWithIdOnly = await prisma.filmSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilmSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, FilmSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilmSpec.
     * @param {FilmSpecUpsertArgs} args - Arguments to update or create a FilmSpec.
     * @example
     * // Update or create a FilmSpec
     * const filmSpec = await prisma.filmSpec.upsert({
     *   create: {
     *     // ... data to create a FilmSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilmSpec we want to update
     *   }
     * })
     */
    upsert<T extends FilmSpecUpsertArgs>(args: SelectSubset<T, FilmSpecUpsertArgs<ExtArgs>>): Prisma__FilmSpecClient<$Result.GetResult<Prisma.$FilmSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilmSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecCountArgs} args - Arguments to filter FilmSpecs to count.
     * @example
     * // Count the number of FilmSpecs
     * const count = await prisma.filmSpec.count({
     *   where: {
     *     // ... the filter for the FilmSpecs we want to count
     *   }
     * })
    **/
    count<T extends FilmSpecCountArgs>(
      args?: Subset<T, FilmSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilmSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilmSpecAggregateArgs>(args: Subset<T, FilmSpecAggregateArgs>): Prisma.PrismaPromise<GetFilmSpecAggregateType<T>>

    /**
     * Group by FilmSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmSpecGroupByArgs} args - Group by arguments.
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
      T extends FilmSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmSpecGroupByArgs['orderBy'] }
        : { orderBy?: FilmSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilmSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilmSpec model
   */
  readonly fields: FilmSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilmSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilmSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends FilmSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, FilmSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FilmSpec model
   */
  interface FilmSpecFieldRefs {
    readonly id: FieldRef<"FilmSpec", 'Int'>
    readonly film: FieldRef<"FilmSpec", 'String'>
    readonly film_thickness: FieldRef<"FilmSpec", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FilmSpec findUnique
   */
  export type FilmSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * Filter, which FilmSpec to fetch.
     */
    where: FilmSpecWhereUniqueInput
  }

  /**
   * FilmSpec findUniqueOrThrow
   */
  export type FilmSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * Filter, which FilmSpec to fetch.
     */
    where: FilmSpecWhereUniqueInput
  }

  /**
   * FilmSpec findFirst
   */
  export type FilmSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * Filter, which FilmSpec to fetch.
     */
    where?: FilmSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilmSpecs to fetch.
     */
    orderBy?: FilmSpecOrderByWithRelationInput | FilmSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilmSpecs.
     */
    cursor?: FilmSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilmSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilmSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilmSpecs.
     */
    distinct?: FilmSpecScalarFieldEnum | FilmSpecScalarFieldEnum[]
  }

  /**
   * FilmSpec findFirstOrThrow
   */
  export type FilmSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * Filter, which FilmSpec to fetch.
     */
    where?: FilmSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilmSpecs to fetch.
     */
    orderBy?: FilmSpecOrderByWithRelationInput | FilmSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilmSpecs.
     */
    cursor?: FilmSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilmSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilmSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilmSpecs.
     */
    distinct?: FilmSpecScalarFieldEnum | FilmSpecScalarFieldEnum[]
  }

  /**
   * FilmSpec findMany
   */
  export type FilmSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * Filter, which FilmSpecs to fetch.
     */
    where?: FilmSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilmSpecs to fetch.
     */
    orderBy?: FilmSpecOrderByWithRelationInput | FilmSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilmSpecs.
     */
    cursor?: FilmSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilmSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilmSpecs.
     */
    skip?: number
    distinct?: FilmSpecScalarFieldEnum | FilmSpecScalarFieldEnum[]
  }

  /**
   * FilmSpec create
   */
  export type FilmSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a FilmSpec.
     */
    data?: XOR<FilmSpecCreateInput, FilmSpecUncheckedCreateInput>
  }

  /**
   * FilmSpec createMany
   */
  export type FilmSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilmSpecs.
     */
    data: FilmSpecCreateManyInput | FilmSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilmSpec createManyAndReturn
   */
  export type FilmSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * The data used to create many FilmSpecs.
     */
    data: FilmSpecCreateManyInput | FilmSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilmSpec update
   */
  export type FilmSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a FilmSpec.
     */
    data: XOR<FilmSpecUpdateInput, FilmSpecUncheckedUpdateInput>
    /**
     * Choose, which FilmSpec to update.
     */
    where: FilmSpecWhereUniqueInput
  }

  /**
   * FilmSpec updateMany
   */
  export type FilmSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilmSpecs.
     */
    data: XOR<FilmSpecUpdateManyMutationInput, FilmSpecUncheckedUpdateManyInput>
    /**
     * Filter which FilmSpecs to update
     */
    where?: FilmSpecWhereInput
    /**
     * Limit how many FilmSpecs to update.
     */
    limit?: number
  }

  /**
   * FilmSpec updateManyAndReturn
   */
  export type FilmSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * The data used to update FilmSpecs.
     */
    data: XOR<FilmSpecUpdateManyMutationInput, FilmSpecUncheckedUpdateManyInput>
    /**
     * Filter which FilmSpecs to update
     */
    where?: FilmSpecWhereInput
    /**
     * Limit how many FilmSpecs to update.
     */
    limit?: number
  }

  /**
   * FilmSpec upsert
   */
  export type FilmSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the FilmSpec to update in case it exists.
     */
    where: FilmSpecWhereUniqueInput
    /**
     * In case the FilmSpec found by the `where` argument doesn't exist, create a new FilmSpec with this data.
     */
    create: XOR<FilmSpecCreateInput, FilmSpecUncheckedCreateInput>
    /**
     * In case the FilmSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilmSpecUpdateInput, FilmSpecUncheckedUpdateInput>
  }

  /**
   * FilmSpec delete
   */
  export type FilmSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
    /**
     * Filter which FilmSpec to delete.
     */
    where: FilmSpecWhereUniqueInput
  }

  /**
   * FilmSpec deleteMany
   */
  export type FilmSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilmSpecs to delete
     */
    where?: FilmSpecWhereInput
    /**
     * Limit how many FilmSpecs to delete.
     */
    limit?: number
  }

  /**
   * FilmSpec.machineBasicSpec
   */
  export type FilmSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * FilmSpec without action
   */
  export type FilmSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmSpec
     */
    select?: FilmSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilmSpec
     */
    omit?: FilmSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmSpecInclude<ExtArgs> | null
  }


  /**
   * Model RuleSpec
   */

  export type AggregateRuleSpec = {
    _count: RuleSpecCountAggregateOutputType | null
    _avg: RuleSpecAvgAggregateOutputType | null
    _sum: RuleSpecSumAggregateOutputType | null
    _min: RuleSpecMinAggregateOutputType | null
    _max: RuleSpecMaxAggregateOutputType | null
  }

  export type RuleSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type RuleSpecSumAggregateOutputType = {
    id: number | null
  }

  export type RuleSpecMinAggregateOutputType = {
    id: number | null
    balance_rule: string | null
    inside_sheet_rule: string | null
  }

  export type RuleSpecMaxAggregateOutputType = {
    id: number | null
    balance_rule: string | null
    inside_sheet_rule: string | null
  }

  export type RuleSpecCountAggregateOutputType = {
    id: number
    balance_rule: number
    inside_sheet_rule: number
    _all: number
  }


  export type RuleSpecAvgAggregateInputType = {
    id?: true
  }

  export type RuleSpecSumAggregateInputType = {
    id?: true
  }

  export type RuleSpecMinAggregateInputType = {
    id?: true
    balance_rule?: true
    inside_sheet_rule?: true
  }

  export type RuleSpecMaxAggregateInputType = {
    id?: true
    balance_rule?: true
    inside_sheet_rule?: true
  }

  export type RuleSpecCountAggregateInputType = {
    id?: true
    balance_rule?: true
    inside_sheet_rule?: true
    _all?: true
  }

  export type RuleSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleSpec to aggregate.
     */
    where?: RuleSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSpecs to fetch.
     */
    orderBy?: RuleSpecOrderByWithRelationInput | RuleSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RuleSpecs
    **/
    _count?: true | RuleSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleSpecMaxAggregateInputType
  }

  export type GetRuleSpecAggregateType<T extends RuleSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateRuleSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuleSpec[P]>
      : GetScalarType<T[P], AggregateRuleSpec[P]>
  }




  export type RuleSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleSpecWhereInput
    orderBy?: RuleSpecOrderByWithAggregationInput | RuleSpecOrderByWithAggregationInput[]
    by: RuleSpecScalarFieldEnum[] | RuleSpecScalarFieldEnum
    having?: RuleSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleSpecCountAggregateInputType | true
    _avg?: RuleSpecAvgAggregateInputType
    _sum?: RuleSpecSumAggregateInputType
    _min?: RuleSpecMinAggregateInputType
    _max?: RuleSpecMaxAggregateInputType
  }

  export type RuleSpecGroupByOutputType = {
    id: number
    balance_rule: string | null
    inside_sheet_rule: string | null
    _count: RuleSpecCountAggregateOutputType | null
    _avg: RuleSpecAvgAggregateOutputType | null
    _sum: RuleSpecSumAggregateOutputType | null
    _min: RuleSpecMinAggregateOutputType | null
    _max: RuleSpecMaxAggregateOutputType | null
  }

  type GetRuleSpecGroupByPayload<T extends RuleSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleSpecGroupByOutputType[P]>
            : GetScalarType<T[P], RuleSpecGroupByOutputType[P]>
        }
      >
    >


  export type RuleSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance_rule?: boolean
    inside_sheet_rule?: boolean
    machineBasicSpec?: boolean | RuleSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["ruleSpec"]>

  export type RuleSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance_rule?: boolean
    inside_sheet_rule?: boolean
  }, ExtArgs["result"]["ruleSpec"]>

  export type RuleSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance_rule?: boolean
    inside_sheet_rule?: boolean
  }, ExtArgs["result"]["ruleSpec"]>

  export type RuleSpecSelectScalar = {
    id?: boolean
    balance_rule?: boolean
    inside_sheet_rule?: boolean
  }

  export type RuleSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance_rule" | "inside_sheet_rule", ExtArgs["result"]["ruleSpec"]>
  export type RuleSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | RuleSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type RuleSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RuleSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RuleSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RuleSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      balance_rule: string | null
      inside_sheet_rule: string | null
    }, ExtArgs["result"]["ruleSpec"]>
    composites: {}
  }

  type RuleSpecGetPayload<S extends boolean | null | undefined | RuleSpecDefaultArgs> = $Result.GetResult<Prisma.$RuleSpecPayload, S>

  type RuleSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleSpecCountAggregateInputType | true
    }

  export interface RuleSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RuleSpec'], meta: { name: 'RuleSpec' } }
    /**
     * Find zero or one RuleSpec that matches the filter.
     * @param {RuleSpecFindUniqueArgs} args - Arguments to find a RuleSpec
     * @example
     * // Get one RuleSpec
     * const ruleSpec = await prisma.ruleSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleSpecFindUniqueArgs>(args: SelectSubset<T, RuleSpecFindUniqueArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RuleSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleSpecFindUniqueOrThrowArgs} args - Arguments to find a RuleSpec
     * @example
     * // Get one RuleSpec
     * const ruleSpec = await prisma.ruleSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecFindFirstArgs} args - Arguments to find a RuleSpec
     * @example
     * // Get one RuleSpec
     * const ruleSpec = await prisma.ruleSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleSpecFindFirstArgs>(args?: SelectSubset<T, RuleSpecFindFirstArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecFindFirstOrThrowArgs} args - Arguments to find a RuleSpec
     * @example
     * // Get one RuleSpec
     * const ruleSpec = await prisma.ruleSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RuleSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RuleSpecs
     * const ruleSpecs = await prisma.ruleSpec.findMany()
     * 
     * // Get first 10 RuleSpecs
     * const ruleSpecs = await prisma.ruleSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleSpecWithIdOnly = await prisma.ruleSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleSpecFindManyArgs>(args?: SelectSubset<T, RuleSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RuleSpec.
     * @param {RuleSpecCreateArgs} args - Arguments to create a RuleSpec.
     * @example
     * // Create one RuleSpec
     * const RuleSpec = await prisma.ruleSpec.create({
     *   data: {
     *     // ... data to create a RuleSpec
     *   }
     * })
     * 
     */
    create<T extends RuleSpecCreateArgs>(args: SelectSubset<T, RuleSpecCreateArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RuleSpecs.
     * @param {RuleSpecCreateManyArgs} args - Arguments to create many RuleSpecs.
     * @example
     * // Create many RuleSpecs
     * const ruleSpec = await prisma.ruleSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleSpecCreateManyArgs>(args?: SelectSubset<T, RuleSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RuleSpecs and returns the data saved in the database.
     * @param {RuleSpecCreateManyAndReturnArgs} args - Arguments to create many RuleSpecs.
     * @example
     * // Create many RuleSpecs
     * const ruleSpec = await prisma.ruleSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RuleSpecs and only return the `id`
     * const ruleSpecWithIdOnly = await prisma.ruleSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RuleSpec.
     * @param {RuleSpecDeleteArgs} args - Arguments to delete one RuleSpec.
     * @example
     * // Delete one RuleSpec
     * const RuleSpec = await prisma.ruleSpec.delete({
     *   where: {
     *     // ... filter to delete one RuleSpec
     *   }
     * })
     * 
     */
    delete<T extends RuleSpecDeleteArgs>(args: SelectSubset<T, RuleSpecDeleteArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RuleSpec.
     * @param {RuleSpecUpdateArgs} args - Arguments to update one RuleSpec.
     * @example
     * // Update one RuleSpec
     * const ruleSpec = await prisma.ruleSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleSpecUpdateArgs>(args: SelectSubset<T, RuleSpecUpdateArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RuleSpecs.
     * @param {RuleSpecDeleteManyArgs} args - Arguments to filter RuleSpecs to delete.
     * @example
     * // Delete a few RuleSpecs
     * const { count } = await prisma.ruleSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleSpecDeleteManyArgs>(args?: SelectSubset<T, RuleSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RuleSpecs
     * const ruleSpec = await prisma.ruleSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleSpecUpdateManyArgs>(args: SelectSubset<T, RuleSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleSpecs and returns the data updated in the database.
     * @param {RuleSpecUpdateManyAndReturnArgs} args - Arguments to update many RuleSpecs.
     * @example
     * // Update many RuleSpecs
     * const ruleSpec = await prisma.ruleSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RuleSpecs and only return the `id`
     * const ruleSpecWithIdOnly = await prisma.ruleSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RuleSpec.
     * @param {RuleSpecUpsertArgs} args - Arguments to update or create a RuleSpec.
     * @example
     * // Update or create a RuleSpec
     * const ruleSpec = await prisma.ruleSpec.upsert({
     *   create: {
     *     // ... data to create a RuleSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RuleSpec we want to update
     *   }
     * })
     */
    upsert<T extends RuleSpecUpsertArgs>(args: SelectSubset<T, RuleSpecUpsertArgs<ExtArgs>>): Prisma__RuleSpecClient<$Result.GetResult<Prisma.$RuleSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RuleSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecCountArgs} args - Arguments to filter RuleSpecs to count.
     * @example
     * // Count the number of RuleSpecs
     * const count = await prisma.ruleSpec.count({
     *   where: {
     *     // ... the filter for the RuleSpecs we want to count
     *   }
     * })
    **/
    count<T extends RuleSpecCountArgs>(
      args?: Subset<T, RuleSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RuleSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleSpecAggregateArgs>(args: Subset<T, RuleSpecAggregateArgs>): Prisma.PrismaPromise<GetRuleSpecAggregateType<T>>

    /**
     * Group by RuleSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleSpecGroupByArgs} args - Group by arguments.
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
      T extends RuleSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleSpecGroupByArgs['orderBy'] }
        : { orderBy?: RuleSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RuleSpec model
   */
  readonly fields: RuleSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RuleSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends RuleSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, RuleSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RuleSpec model
   */
  interface RuleSpecFieldRefs {
    readonly id: FieldRef<"RuleSpec", 'Int'>
    readonly balance_rule: FieldRef<"RuleSpec", 'String'>
    readonly inside_sheet_rule: FieldRef<"RuleSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RuleSpec findUnique
   */
  export type RuleSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleSpec to fetch.
     */
    where: RuleSpecWhereUniqueInput
  }

  /**
   * RuleSpec findUniqueOrThrow
   */
  export type RuleSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleSpec to fetch.
     */
    where: RuleSpecWhereUniqueInput
  }

  /**
   * RuleSpec findFirst
   */
  export type RuleSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleSpec to fetch.
     */
    where?: RuleSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSpecs to fetch.
     */
    orderBy?: RuleSpecOrderByWithRelationInput | RuleSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleSpecs.
     */
    cursor?: RuleSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleSpecs.
     */
    distinct?: RuleSpecScalarFieldEnum | RuleSpecScalarFieldEnum[]
  }

  /**
   * RuleSpec findFirstOrThrow
   */
  export type RuleSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleSpec to fetch.
     */
    where?: RuleSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSpecs to fetch.
     */
    orderBy?: RuleSpecOrderByWithRelationInput | RuleSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleSpecs.
     */
    cursor?: RuleSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleSpecs.
     */
    distinct?: RuleSpecScalarFieldEnum | RuleSpecScalarFieldEnum[]
  }

  /**
   * RuleSpec findMany
   */
  export type RuleSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleSpecs to fetch.
     */
    where?: RuleSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleSpecs to fetch.
     */
    orderBy?: RuleSpecOrderByWithRelationInput | RuleSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RuleSpecs.
     */
    cursor?: RuleSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleSpecs.
     */
    skip?: number
    distinct?: RuleSpecScalarFieldEnum | RuleSpecScalarFieldEnum[]
  }

  /**
   * RuleSpec create
   */
  export type RuleSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a RuleSpec.
     */
    data?: XOR<RuleSpecCreateInput, RuleSpecUncheckedCreateInput>
  }

  /**
   * RuleSpec createMany
   */
  export type RuleSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RuleSpecs.
     */
    data: RuleSpecCreateManyInput | RuleSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleSpec createManyAndReturn
   */
  export type RuleSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * The data used to create many RuleSpecs.
     */
    data: RuleSpecCreateManyInput | RuleSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleSpec update
   */
  export type RuleSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a RuleSpec.
     */
    data: XOR<RuleSpecUpdateInput, RuleSpecUncheckedUpdateInput>
    /**
     * Choose, which RuleSpec to update.
     */
    where: RuleSpecWhereUniqueInput
  }

  /**
   * RuleSpec updateMany
   */
  export type RuleSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RuleSpecs.
     */
    data: XOR<RuleSpecUpdateManyMutationInput, RuleSpecUncheckedUpdateManyInput>
    /**
     * Filter which RuleSpecs to update
     */
    where?: RuleSpecWhereInput
    /**
     * Limit how many RuleSpecs to update.
     */
    limit?: number
  }

  /**
   * RuleSpec updateManyAndReturn
   */
  export type RuleSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * The data used to update RuleSpecs.
     */
    data: XOR<RuleSpecUpdateManyMutationInput, RuleSpecUncheckedUpdateManyInput>
    /**
     * Filter which RuleSpecs to update
     */
    where?: RuleSpecWhereInput
    /**
     * Limit how many RuleSpecs to update.
     */
    limit?: number
  }

  /**
   * RuleSpec upsert
   */
  export type RuleSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the RuleSpec to update in case it exists.
     */
    where: RuleSpecWhereUniqueInput
    /**
     * In case the RuleSpec found by the `where` argument doesn't exist, create a new RuleSpec with this data.
     */
    create: XOR<RuleSpecCreateInput, RuleSpecUncheckedCreateInput>
    /**
     * In case the RuleSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleSpecUpdateInput, RuleSpecUncheckedUpdateInput>
  }

  /**
   * RuleSpec delete
   */
  export type RuleSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
    /**
     * Filter which RuleSpec to delete.
     */
    where: RuleSpecWhereUniqueInput
  }

  /**
   * RuleSpec deleteMany
   */
  export type RuleSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleSpecs to delete
     */
    where?: RuleSpecWhereInput
    /**
     * Limit how many RuleSpecs to delete.
     */
    limit?: number
  }

  /**
   * RuleSpec.machineBasicSpec
   */
  export type RuleSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * RuleSpec without action
   */
  export type RuleSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleSpec
     */
    select?: RuleSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleSpec
     */
    omit?: RuleSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleSpecInclude<ExtArgs> | null
  }


  /**
   * Model SheetBaseSpec
   */

  export type AggregateSheetBaseSpec = {
    _count: SheetBaseSpecCountAggregateOutputType | null
    _avg: SheetBaseSpecAvgAggregateOutputType | null
    _sum: SheetBaseSpecSumAggregateOutputType | null
    _min: SheetBaseSpecMinAggregateOutputType | null
    _max: SheetBaseSpecMaxAggregateOutputType | null
  }

  export type SheetBaseSpecAvgAggregateOutputType = {
    id: number | null
    base_thickness: number | null
    max_sheet_x: number | null
    max_sheet_y: number | null
    min_sheet_x: number | null
    min_sheet_y: number | null
    max_base_x: number | null
    max_base_y: number | null
    min_base_x: number | null
    min_base_y: number | null
  }

  export type SheetBaseSpecSumAggregateOutputType = {
    id: number | null
    base_thickness: number | null
    max_sheet_x: number | null
    max_sheet_y: number | null
    min_sheet_x: number | null
    min_sheet_y: number | null
    max_base_x: number | null
    max_base_y: number | null
    min_base_x: number | null
    min_base_y: number | null
  }

  export type SheetBaseSpecMinAggregateOutputType = {
    id: number | null
    base_thickness: number | null
    base_thickness_remark: string | null
    max_sheet_x: number | null
    max_sheet_y: number | null
    min_sheet_x: number | null
    min_sheet_y: number | null
    max_base_x: number | null
    max_base_y: number | null
    min_base_x: number | null
    min_base_y: number | null
  }

  export type SheetBaseSpecMaxAggregateOutputType = {
    id: number | null
    base_thickness: number | null
    base_thickness_remark: string | null
    max_sheet_x: number | null
    max_sheet_y: number | null
    min_sheet_x: number | null
    min_sheet_y: number | null
    max_base_x: number | null
    max_base_y: number | null
    min_base_x: number | null
    min_base_y: number | null
  }

  export type SheetBaseSpecCountAggregateOutputType = {
    id: number
    base_thickness: number
    base_thickness_remark: number
    max_sheet_x: number
    max_sheet_y: number
    min_sheet_x: number
    min_sheet_y: number
    max_base_x: number
    max_base_y: number
    min_base_x: number
    min_base_y: number
    _all: number
  }


  export type SheetBaseSpecAvgAggregateInputType = {
    id?: true
    base_thickness?: true
    max_sheet_x?: true
    max_sheet_y?: true
    min_sheet_x?: true
    min_sheet_y?: true
    max_base_x?: true
    max_base_y?: true
    min_base_x?: true
    min_base_y?: true
  }

  export type SheetBaseSpecSumAggregateInputType = {
    id?: true
    base_thickness?: true
    max_sheet_x?: true
    max_sheet_y?: true
    min_sheet_x?: true
    min_sheet_y?: true
    max_base_x?: true
    max_base_y?: true
    min_base_x?: true
    min_base_y?: true
  }

  export type SheetBaseSpecMinAggregateInputType = {
    id?: true
    base_thickness?: true
    base_thickness_remark?: true
    max_sheet_x?: true
    max_sheet_y?: true
    min_sheet_x?: true
    min_sheet_y?: true
    max_base_x?: true
    max_base_y?: true
    min_base_x?: true
    min_base_y?: true
  }

  export type SheetBaseSpecMaxAggregateInputType = {
    id?: true
    base_thickness?: true
    base_thickness_remark?: true
    max_sheet_x?: true
    max_sheet_y?: true
    min_sheet_x?: true
    min_sheet_y?: true
    max_base_x?: true
    max_base_y?: true
    min_base_x?: true
    min_base_y?: true
  }

  export type SheetBaseSpecCountAggregateInputType = {
    id?: true
    base_thickness?: true
    base_thickness_remark?: true
    max_sheet_x?: true
    max_sheet_y?: true
    min_sheet_x?: true
    min_sheet_y?: true
    max_base_x?: true
    max_base_y?: true
    min_base_x?: true
    min_base_y?: true
    _all?: true
  }

  export type SheetBaseSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetBaseSpec to aggregate.
     */
    where?: SheetBaseSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetBaseSpecs to fetch.
     */
    orderBy?: SheetBaseSpecOrderByWithRelationInput | SheetBaseSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SheetBaseSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetBaseSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SheetBaseSpecs
    **/
    _count?: true | SheetBaseSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetBaseSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetBaseSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetBaseSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetBaseSpecMaxAggregateInputType
  }

  export type GetSheetBaseSpecAggregateType<T extends SheetBaseSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateSheetBaseSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheetBaseSpec[P]>
      : GetScalarType<T[P], AggregateSheetBaseSpec[P]>
  }




  export type SheetBaseSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SheetBaseSpecWhereInput
    orderBy?: SheetBaseSpecOrderByWithAggregationInput | SheetBaseSpecOrderByWithAggregationInput[]
    by: SheetBaseSpecScalarFieldEnum[] | SheetBaseSpecScalarFieldEnum
    having?: SheetBaseSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetBaseSpecCountAggregateInputType | true
    _avg?: SheetBaseSpecAvgAggregateInputType
    _sum?: SheetBaseSpecSumAggregateInputType
    _min?: SheetBaseSpecMinAggregateInputType
    _max?: SheetBaseSpecMaxAggregateInputType
  }

  export type SheetBaseSpecGroupByOutputType = {
    id: number
    base_thickness: number | null
    base_thickness_remark: string | null
    max_sheet_x: number | null
    max_sheet_y: number | null
    min_sheet_x: number | null
    min_sheet_y: number | null
    max_base_x: number | null
    max_base_y: number | null
    min_base_x: number | null
    min_base_y: number | null
    _count: SheetBaseSpecCountAggregateOutputType | null
    _avg: SheetBaseSpecAvgAggregateOutputType | null
    _sum: SheetBaseSpecSumAggregateOutputType | null
    _min: SheetBaseSpecMinAggregateOutputType | null
    _max: SheetBaseSpecMaxAggregateOutputType | null
  }

  type GetSheetBaseSpecGroupByPayload<T extends SheetBaseSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetBaseSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetBaseSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetBaseSpecGroupByOutputType[P]>
            : GetScalarType<T[P], SheetBaseSpecGroupByOutputType[P]>
        }
      >
    >


  export type SheetBaseSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base_thickness?: boolean
    base_thickness_remark?: boolean
    max_sheet_x?: boolean
    max_sheet_y?: boolean
    min_sheet_x?: boolean
    min_sheet_y?: boolean
    max_base_x?: boolean
    max_base_y?: boolean
    min_base_x?: boolean
    min_base_y?: boolean
    machineBasicSpec?: boolean | SheetBaseSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["sheetBaseSpec"]>

  export type SheetBaseSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base_thickness?: boolean
    base_thickness_remark?: boolean
    max_sheet_x?: boolean
    max_sheet_y?: boolean
    min_sheet_x?: boolean
    min_sheet_y?: boolean
    max_base_x?: boolean
    max_base_y?: boolean
    min_base_x?: boolean
    min_base_y?: boolean
  }, ExtArgs["result"]["sheetBaseSpec"]>

  export type SheetBaseSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    base_thickness?: boolean
    base_thickness_remark?: boolean
    max_sheet_x?: boolean
    max_sheet_y?: boolean
    min_sheet_x?: boolean
    min_sheet_y?: boolean
    max_base_x?: boolean
    max_base_y?: boolean
    min_base_x?: boolean
    min_base_y?: boolean
  }, ExtArgs["result"]["sheetBaseSpec"]>

  export type SheetBaseSpecSelectScalar = {
    id?: boolean
    base_thickness?: boolean
    base_thickness_remark?: boolean
    max_sheet_x?: boolean
    max_sheet_y?: boolean
    min_sheet_x?: boolean
    min_sheet_y?: boolean
    max_base_x?: boolean
    max_base_y?: boolean
    min_base_x?: boolean
    min_base_y?: boolean
  }

  export type SheetBaseSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "base_thickness" | "base_thickness_remark" | "max_sheet_x" | "max_sheet_y" | "min_sheet_x" | "min_sheet_y" | "max_base_x" | "max_base_y" | "min_base_x" | "min_base_y", ExtArgs["result"]["sheetBaseSpec"]>
  export type SheetBaseSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | SheetBaseSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type SheetBaseSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SheetBaseSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SheetBaseSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SheetBaseSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      base_thickness: number | null
      base_thickness_remark: string | null
      max_sheet_x: number | null
      max_sheet_y: number | null
      min_sheet_x: number | null
      min_sheet_y: number | null
      max_base_x: number | null
      max_base_y: number | null
      min_base_x: number | null
      min_base_y: number | null
    }, ExtArgs["result"]["sheetBaseSpec"]>
    composites: {}
  }

  type SheetBaseSpecGetPayload<S extends boolean | null | undefined | SheetBaseSpecDefaultArgs> = $Result.GetResult<Prisma.$SheetBaseSpecPayload, S>

  type SheetBaseSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SheetBaseSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetBaseSpecCountAggregateInputType | true
    }

  export interface SheetBaseSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SheetBaseSpec'], meta: { name: 'SheetBaseSpec' } }
    /**
     * Find zero or one SheetBaseSpec that matches the filter.
     * @param {SheetBaseSpecFindUniqueArgs} args - Arguments to find a SheetBaseSpec
     * @example
     * // Get one SheetBaseSpec
     * const sheetBaseSpec = await prisma.sheetBaseSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SheetBaseSpecFindUniqueArgs>(args: SelectSubset<T, SheetBaseSpecFindUniqueArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SheetBaseSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SheetBaseSpecFindUniqueOrThrowArgs} args - Arguments to find a SheetBaseSpec
     * @example
     * // Get one SheetBaseSpec
     * const sheetBaseSpec = await prisma.sheetBaseSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SheetBaseSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, SheetBaseSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SheetBaseSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecFindFirstArgs} args - Arguments to find a SheetBaseSpec
     * @example
     * // Get one SheetBaseSpec
     * const sheetBaseSpec = await prisma.sheetBaseSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SheetBaseSpecFindFirstArgs>(args?: SelectSubset<T, SheetBaseSpecFindFirstArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SheetBaseSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecFindFirstOrThrowArgs} args - Arguments to find a SheetBaseSpec
     * @example
     * // Get one SheetBaseSpec
     * const sheetBaseSpec = await prisma.sheetBaseSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SheetBaseSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, SheetBaseSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SheetBaseSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SheetBaseSpecs
     * const sheetBaseSpecs = await prisma.sheetBaseSpec.findMany()
     * 
     * // Get first 10 SheetBaseSpecs
     * const sheetBaseSpecs = await prisma.sheetBaseSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetBaseSpecWithIdOnly = await prisma.sheetBaseSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SheetBaseSpecFindManyArgs>(args?: SelectSubset<T, SheetBaseSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SheetBaseSpec.
     * @param {SheetBaseSpecCreateArgs} args - Arguments to create a SheetBaseSpec.
     * @example
     * // Create one SheetBaseSpec
     * const SheetBaseSpec = await prisma.sheetBaseSpec.create({
     *   data: {
     *     // ... data to create a SheetBaseSpec
     *   }
     * })
     * 
     */
    create<T extends SheetBaseSpecCreateArgs>(args: SelectSubset<T, SheetBaseSpecCreateArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SheetBaseSpecs.
     * @param {SheetBaseSpecCreateManyArgs} args - Arguments to create many SheetBaseSpecs.
     * @example
     * // Create many SheetBaseSpecs
     * const sheetBaseSpec = await prisma.sheetBaseSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SheetBaseSpecCreateManyArgs>(args?: SelectSubset<T, SheetBaseSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SheetBaseSpecs and returns the data saved in the database.
     * @param {SheetBaseSpecCreateManyAndReturnArgs} args - Arguments to create many SheetBaseSpecs.
     * @example
     * // Create many SheetBaseSpecs
     * const sheetBaseSpec = await prisma.sheetBaseSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SheetBaseSpecs and only return the `id`
     * const sheetBaseSpecWithIdOnly = await prisma.sheetBaseSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SheetBaseSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, SheetBaseSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SheetBaseSpec.
     * @param {SheetBaseSpecDeleteArgs} args - Arguments to delete one SheetBaseSpec.
     * @example
     * // Delete one SheetBaseSpec
     * const SheetBaseSpec = await prisma.sheetBaseSpec.delete({
     *   where: {
     *     // ... filter to delete one SheetBaseSpec
     *   }
     * })
     * 
     */
    delete<T extends SheetBaseSpecDeleteArgs>(args: SelectSubset<T, SheetBaseSpecDeleteArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SheetBaseSpec.
     * @param {SheetBaseSpecUpdateArgs} args - Arguments to update one SheetBaseSpec.
     * @example
     * // Update one SheetBaseSpec
     * const sheetBaseSpec = await prisma.sheetBaseSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SheetBaseSpecUpdateArgs>(args: SelectSubset<T, SheetBaseSpecUpdateArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SheetBaseSpecs.
     * @param {SheetBaseSpecDeleteManyArgs} args - Arguments to filter SheetBaseSpecs to delete.
     * @example
     * // Delete a few SheetBaseSpecs
     * const { count } = await prisma.sheetBaseSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SheetBaseSpecDeleteManyArgs>(args?: SelectSubset<T, SheetBaseSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetBaseSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SheetBaseSpecs
     * const sheetBaseSpec = await prisma.sheetBaseSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SheetBaseSpecUpdateManyArgs>(args: SelectSubset<T, SheetBaseSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SheetBaseSpecs and returns the data updated in the database.
     * @param {SheetBaseSpecUpdateManyAndReturnArgs} args - Arguments to update many SheetBaseSpecs.
     * @example
     * // Update many SheetBaseSpecs
     * const sheetBaseSpec = await prisma.sheetBaseSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SheetBaseSpecs and only return the `id`
     * const sheetBaseSpecWithIdOnly = await prisma.sheetBaseSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends SheetBaseSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, SheetBaseSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SheetBaseSpec.
     * @param {SheetBaseSpecUpsertArgs} args - Arguments to update or create a SheetBaseSpec.
     * @example
     * // Update or create a SheetBaseSpec
     * const sheetBaseSpec = await prisma.sheetBaseSpec.upsert({
     *   create: {
     *     // ... data to create a SheetBaseSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SheetBaseSpec we want to update
     *   }
     * })
     */
    upsert<T extends SheetBaseSpecUpsertArgs>(args: SelectSubset<T, SheetBaseSpecUpsertArgs<ExtArgs>>): Prisma__SheetBaseSpecClient<$Result.GetResult<Prisma.$SheetBaseSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SheetBaseSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecCountArgs} args - Arguments to filter SheetBaseSpecs to count.
     * @example
     * // Count the number of SheetBaseSpecs
     * const count = await prisma.sheetBaseSpec.count({
     *   where: {
     *     // ... the filter for the SheetBaseSpecs we want to count
     *   }
     * })
    **/
    count<T extends SheetBaseSpecCountArgs>(
      args?: Subset<T, SheetBaseSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetBaseSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SheetBaseSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SheetBaseSpecAggregateArgs>(args: Subset<T, SheetBaseSpecAggregateArgs>): Prisma.PrismaPromise<GetSheetBaseSpecAggregateType<T>>

    /**
     * Group by SheetBaseSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetBaseSpecGroupByArgs} args - Group by arguments.
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
      T extends SheetBaseSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SheetBaseSpecGroupByArgs['orderBy'] }
        : { orderBy?: SheetBaseSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SheetBaseSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetBaseSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SheetBaseSpec model
   */
  readonly fields: SheetBaseSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SheetBaseSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SheetBaseSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends SheetBaseSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, SheetBaseSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SheetBaseSpec model
   */
  interface SheetBaseSpecFieldRefs {
    readonly id: FieldRef<"SheetBaseSpec", 'Int'>
    readonly base_thickness: FieldRef<"SheetBaseSpec", 'Float'>
    readonly base_thickness_remark: FieldRef<"SheetBaseSpec", 'String'>
    readonly max_sheet_x: FieldRef<"SheetBaseSpec", 'Float'>
    readonly max_sheet_y: FieldRef<"SheetBaseSpec", 'Float'>
    readonly min_sheet_x: FieldRef<"SheetBaseSpec", 'Float'>
    readonly min_sheet_y: FieldRef<"SheetBaseSpec", 'Float'>
    readonly max_base_x: FieldRef<"SheetBaseSpec", 'Float'>
    readonly max_base_y: FieldRef<"SheetBaseSpec", 'Float'>
    readonly min_base_x: FieldRef<"SheetBaseSpec", 'Float'>
    readonly min_base_y: FieldRef<"SheetBaseSpec", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SheetBaseSpec findUnique
   */
  export type SheetBaseSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * Filter, which SheetBaseSpec to fetch.
     */
    where: SheetBaseSpecWhereUniqueInput
  }

  /**
   * SheetBaseSpec findUniqueOrThrow
   */
  export type SheetBaseSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * Filter, which SheetBaseSpec to fetch.
     */
    where: SheetBaseSpecWhereUniqueInput
  }

  /**
   * SheetBaseSpec findFirst
   */
  export type SheetBaseSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * Filter, which SheetBaseSpec to fetch.
     */
    where?: SheetBaseSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetBaseSpecs to fetch.
     */
    orderBy?: SheetBaseSpecOrderByWithRelationInput | SheetBaseSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetBaseSpecs.
     */
    cursor?: SheetBaseSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetBaseSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetBaseSpecs.
     */
    distinct?: SheetBaseSpecScalarFieldEnum | SheetBaseSpecScalarFieldEnum[]
  }

  /**
   * SheetBaseSpec findFirstOrThrow
   */
  export type SheetBaseSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * Filter, which SheetBaseSpec to fetch.
     */
    where?: SheetBaseSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetBaseSpecs to fetch.
     */
    orderBy?: SheetBaseSpecOrderByWithRelationInput | SheetBaseSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SheetBaseSpecs.
     */
    cursor?: SheetBaseSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetBaseSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SheetBaseSpecs.
     */
    distinct?: SheetBaseSpecScalarFieldEnum | SheetBaseSpecScalarFieldEnum[]
  }

  /**
   * SheetBaseSpec findMany
   */
  export type SheetBaseSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * Filter, which SheetBaseSpecs to fetch.
     */
    where?: SheetBaseSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SheetBaseSpecs to fetch.
     */
    orderBy?: SheetBaseSpecOrderByWithRelationInput | SheetBaseSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SheetBaseSpecs.
     */
    cursor?: SheetBaseSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SheetBaseSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SheetBaseSpecs.
     */
    skip?: number
    distinct?: SheetBaseSpecScalarFieldEnum | SheetBaseSpecScalarFieldEnum[]
  }

  /**
   * SheetBaseSpec create
   */
  export type SheetBaseSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a SheetBaseSpec.
     */
    data?: XOR<SheetBaseSpecCreateInput, SheetBaseSpecUncheckedCreateInput>
  }

  /**
   * SheetBaseSpec createMany
   */
  export type SheetBaseSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SheetBaseSpecs.
     */
    data: SheetBaseSpecCreateManyInput | SheetBaseSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SheetBaseSpec createManyAndReturn
   */
  export type SheetBaseSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * The data used to create many SheetBaseSpecs.
     */
    data: SheetBaseSpecCreateManyInput | SheetBaseSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SheetBaseSpec update
   */
  export type SheetBaseSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a SheetBaseSpec.
     */
    data: XOR<SheetBaseSpecUpdateInput, SheetBaseSpecUncheckedUpdateInput>
    /**
     * Choose, which SheetBaseSpec to update.
     */
    where: SheetBaseSpecWhereUniqueInput
  }

  /**
   * SheetBaseSpec updateMany
   */
  export type SheetBaseSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SheetBaseSpecs.
     */
    data: XOR<SheetBaseSpecUpdateManyMutationInput, SheetBaseSpecUncheckedUpdateManyInput>
    /**
     * Filter which SheetBaseSpecs to update
     */
    where?: SheetBaseSpecWhereInput
    /**
     * Limit how many SheetBaseSpecs to update.
     */
    limit?: number
  }

  /**
   * SheetBaseSpec updateManyAndReturn
   */
  export type SheetBaseSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * The data used to update SheetBaseSpecs.
     */
    data: XOR<SheetBaseSpecUpdateManyMutationInput, SheetBaseSpecUncheckedUpdateManyInput>
    /**
     * Filter which SheetBaseSpecs to update
     */
    where?: SheetBaseSpecWhereInput
    /**
     * Limit how many SheetBaseSpecs to update.
     */
    limit?: number
  }

  /**
   * SheetBaseSpec upsert
   */
  export type SheetBaseSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the SheetBaseSpec to update in case it exists.
     */
    where: SheetBaseSpecWhereUniqueInput
    /**
     * In case the SheetBaseSpec found by the `where` argument doesn't exist, create a new SheetBaseSpec with this data.
     */
    create: XOR<SheetBaseSpecCreateInput, SheetBaseSpecUncheckedCreateInput>
    /**
     * In case the SheetBaseSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SheetBaseSpecUpdateInput, SheetBaseSpecUncheckedUpdateInput>
  }

  /**
   * SheetBaseSpec delete
   */
  export type SheetBaseSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
    /**
     * Filter which SheetBaseSpec to delete.
     */
    where: SheetBaseSpecWhereUniqueInput
  }

  /**
   * SheetBaseSpec deleteMany
   */
  export type SheetBaseSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SheetBaseSpecs to delete
     */
    where?: SheetBaseSpecWhereInput
    /**
     * Limit how many SheetBaseSpecs to delete.
     */
    limit?: number
  }

  /**
   * SheetBaseSpec.machineBasicSpec
   */
  export type SheetBaseSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * SheetBaseSpec without action
   */
  export type SheetBaseSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SheetBaseSpec
     */
    select?: SheetBaseSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SheetBaseSpec
     */
    omit?: SheetBaseSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SheetBaseSpecInclude<ExtArgs> | null
  }


  /**
   * Model SutebaSpec
   */

  export type AggregateSutebaSpec = {
    _count: SutebaSpecCountAggregateOutputType | null
    _avg: SutebaSpecAvgAggregateOutputType | null
    _sum: SutebaSpecSumAggregateOutputType | null
    _min: SutebaSpecMinAggregateOutputType | null
    _max: SutebaSpecMaxAggregateOutputType | null
  }

  export type SutebaSpecAvgAggregateOutputType = {
    id: number | null
    suteba_pitch: number | null
  }

  export type SutebaSpecSumAggregateOutputType = {
    id: number | null
    suteba_pitch: number | null
  }

  export type SutebaSpecMinAggregateOutputType = {
    id: number | null
    suteba_pitch: number | null
  }

  export type SutebaSpecMaxAggregateOutputType = {
    id: number | null
    suteba_pitch: number | null
  }

  export type SutebaSpecCountAggregateOutputType = {
    id: number
    suteba_pitch: number
    _all: number
  }


  export type SutebaSpecAvgAggregateInputType = {
    id?: true
    suteba_pitch?: true
  }

  export type SutebaSpecSumAggregateInputType = {
    id?: true
    suteba_pitch?: true
  }

  export type SutebaSpecMinAggregateInputType = {
    id?: true
    suteba_pitch?: true
  }

  export type SutebaSpecMaxAggregateInputType = {
    id?: true
    suteba_pitch?: true
  }

  export type SutebaSpecCountAggregateInputType = {
    id?: true
    suteba_pitch?: true
    _all?: true
  }

  export type SutebaSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SutebaSpec to aggregate.
     */
    where?: SutebaSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SutebaSpecs to fetch.
     */
    orderBy?: SutebaSpecOrderByWithRelationInput | SutebaSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SutebaSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SutebaSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SutebaSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SutebaSpecs
    **/
    _count?: true | SutebaSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SutebaSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SutebaSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SutebaSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SutebaSpecMaxAggregateInputType
  }

  export type GetSutebaSpecAggregateType<T extends SutebaSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateSutebaSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSutebaSpec[P]>
      : GetScalarType<T[P], AggregateSutebaSpec[P]>
  }




  export type SutebaSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SutebaSpecWhereInput
    orderBy?: SutebaSpecOrderByWithAggregationInput | SutebaSpecOrderByWithAggregationInput[]
    by: SutebaSpecScalarFieldEnum[] | SutebaSpecScalarFieldEnum
    having?: SutebaSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SutebaSpecCountAggregateInputType | true
    _avg?: SutebaSpecAvgAggregateInputType
    _sum?: SutebaSpecSumAggregateInputType
    _min?: SutebaSpecMinAggregateInputType
    _max?: SutebaSpecMaxAggregateInputType
  }

  export type SutebaSpecGroupByOutputType = {
    id: number
    suteba_pitch: number | null
    _count: SutebaSpecCountAggregateOutputType | null
    _avg: SutebaSpecAvgAggregateOutputType | null
    _sum: SutebaSpecSumAggregateOutputType | null
    _min: SutebaSpecMinAggregateOutputType | null
    _max: SutebaSpecMaxAggregateOutputType | null
  }

  type GetSutebaSpecGroupByPayload<T extends SutebaSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SutebaSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SutebaSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SutebaSpecGroupByOutputType[P]>
            : GetScalarType<T[P], SutebaSpecGroupByOutputType[P]>
        }
      >
    >


  export type SutebaSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suteba_pitch?: boolean
    machineBasicSpec?: boolean | SutebaSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["sutebaSpec"]>

  export type SutebaSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suteba_pitch?: boolean
  }, ExtArgs["result"]["sutebaSpec"]>

  export type SutebaSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    suteba_pitch?: boolean
  }, ExtArgs["result"]["sutebaSpec"]>

  export type SutebaSpecSelectScalar = {
    id?: boolean
    suteba_pitch?: boolean
  }

  export type SutebaSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "suteba_pitch", ExtArgs["result"]["sutebaSpec"]>
  export type SutebaSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | SutebaSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type SutebaSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SutebaSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SutebaSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SutebaSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      suteba_pitch: number | null
    }, ExtArgs["result"]["sutebaSpec"]>
    composites: {}
  }

  type SutebaSpecGetPayload<S extends boolean | null | undefined | SutebaSpecDefaultArgs> = $Result.GetResult<Prisma.$SutebaSpecPayload, S>

  type SutebaSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SutebaSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SutebaSpecCountAggregateInputType | true
    }

  export interface SutebaSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SutebaSpec'], meta: { name: 'SutebaSpec' } }
    /**
     * Find zero or one SutebaSpec that matches the filter.
     * @param {SutebaSpecFindUniqueArgs} args - Arguments to find a SutebaSpec
     * @example
     * // Get one SutebaSpec
     * const sutebaSpec = await prisma.sutebaSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SutebaSpecFindUniqueArgs>(args: SelectSubset<T, SutebaSpecFindUniqueArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SutebaSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SutebaSpecFindUniqueOrThrowArgs} args - Arguments to find a SutebaSpec
     * @example
     * // Get one SutebaSpec
     * const sutebaSpec = await prisma.sutebaSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SutebaSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, SutebaSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SutebaSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecFindFirstArgs} args - Arguments to find a SutebaSpec
     * @example
     * // Get one SutebaSpec
     * const sutebaSpec = await prisma.sutebaSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SutebaSpecFindFirstArgs>(args?: SelectSubset<T, SutebaSpecFindFirstArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SutebaSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecFindFirstOrThrowArgs} args - Arguments to find a SutebaSpec
     * @example
     * // Get one SutebaSpec
     * const sutebaSpec = await prisma.sutebaSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SutebaSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, SutebaSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SutebaSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SutebaSpecs
     * const sutebaSpecs = await prisma.sutebaSpec.findMany()
     * 
     * // Get first 10 SutebaSpecs
     * const sutebaSpecs = await prisma.sutebaSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sutebaSpecWithIdOnly = await prisma.sutebaSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SutebaSpecFindManyArgs>(args?: SelectSubset<T, SutebaSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SutebaSpec.
     * @param {SutebaSpecCreateArgs} args - Arguments to create a SutebaSpec.
     * @example
     * // Create one SutebaSpec
     * const SutebaSpec = await prisma.sutebaSpec.create({
     *   data: {
     *     // ... data to create a SutebaSpec
     *   }
     * })
     * 
     */
    create<T extends SutebaSpecCreateArgs>(args: SelectSubset<T, SutebaSpecCreateArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SutebaSpecs.
     * @param {SutebaSpecCreateManyArgs} args - Arguments to create many SutebaSpecs.
     * @example
     * // Create many SutebaSpecs
     * const sutebaSpec = await prisma.sutebaSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SutebaSpecCreateManyArgs>(args?: SelectSubset<T, SutebaSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SutebaSpecs and returns the data saved in the database.
     * @param {SutebaSpecCreateManyAndReturnArgs} args - Arguments to create many SutebaSpecs.
     * @example
     * // Create many SutebaSpecs
     * const sutebaSpec = await prisma.sutebaSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SutebaSpecs and only return the `id`
     * const sutebaSpecWithIdOnly = await prisma.sutebaSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SutebaSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, SutebaSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SutebaSpec.
     * @param {SutebaSpecDeleteArgs} args - Arguments to delete one SutebaSpec.
     * @example
     * // Delete one SutebaSpec
     * const SutebaSpec = await prisma.sutebaSpec.delete({
     *   where: {
     *     // ... filter to delete one SutebaSpec
     *   }
     * })
     * 
     */
    delete<T extends SutebaSpecDeleteArgs>(args: SelectSubset<T, SutebaSpecDeleteArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SutebaSpec.
     * @param {SutebaSpecUpdateArgs} args - Arguments to update one SutebaSpec.
     * @example
     * // Update one SutebaSpec
     * const sutebaSpec = await prisma.sutebaSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SutebaSpecUpdateArgs>(args: SelectSubset<T, SutebaSpecUpdateArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SutebaSpecs.
     * @param {SutebaSpecDeleteManyArgs} args - Arguments to filter SutebaSpecs to delete.
     * @example
     * // Delete a few SutebaSpecs
     * const { count } = await prisma.sutebaSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SutebaSpecDeleteManyArgs>(args?: SelectSubset<T, SutebaSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SutebaSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SutebaSpecs
     * const sutebaSpec = await prisma.sutebaSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SutebaSpecUpdateManyArgs>(args: SelectSubset<T, SutebaSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SutebaSpecs and returns the data updated in the database.
     * @param {SutebaSpecUpdateManyAndReturnArgs} args - Arguments to update many SutebaSpecs.
     * @example
     * // Update many SutebaSpecs
     * const sutebaSpec = await prisma.sutebaSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SutebaSpecs and only return the `id`
     * const sutebaSpecWithIdOnly = await prisma.sutebaSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends SutebaSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, SutebaSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SutebaSpec.
     * @param {SutebaSpecUpsertArgs} args - Arguments to update or create a SutebaSpec.
     * @example
     * // Update or create a SutebaSpec
     * const sutebaSpec = await prisma.sutebaSpec.upsert({
     *   create: {
     *     // ... data to create a SutebaSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SutebaSpec we want to update
     *   }
     * })
     */
    upsert<T extends SutebaSpecUpsertArgs>(args: SelectSubset<T, SutebaSpecUpsertArgs<ExtArgs>>): Prisma__SutebaSpecClient<$Result.GetResult<Prisma.$SutebaSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SutebaSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecCountArgs} args - Arguments to filter SutebaSpecs to count.
     * @example
     * // Count the number of SutebaSpecs
     * const count = await prisma.sutebaSpec.count({
     *   where: {
     *     // ... the filter for the SutebaSpecs we want to count
     *   }
     * })
    **/
    count<T extends SutebaSpecCountArgs>(
      args?: Subset<T, SutebaSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SutebaSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SutebaSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SutebaSpecAggregateArgs>(args: Subset<T, SutebaSpecAggregateArgs>): Prisma.PrismaPromise<GetSutebaSpecAggregateType<T>>

    /**
     * Group by SutebaSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SutebaSpecGroupByArgs} args - Group by arguments.
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
      T extends SutebaSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SutebaSpecGroupByArgs['orderBy'] }
        : { orderBy?: SutebaSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SutebaSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSutebaSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SutebaSpec model
   */
  readonly fields: SutebaSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SutebaSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SutebaSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends SutebaSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, SutebaSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SutebaSpec model
   */
  interface SutebaSpecFieldRefs {
    readonly id: FieldRef<"SutebaSpec", 'Int'>
    readonly suteba_pitch: FieldRef<"SutebaSpec", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * SutebaSpec findUnique
   */
  export type SutebaSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * Filter, which SutebaSpec to fetch.
     */
    where: SutebaSpecWhereUniqueInput
  }

  /**
   * SutebaSpec findUniqueOrThrow
   */
  export type SutebaSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * Filter, which SutebaSpec to fetch.
     */
    where: SutebaSpecWhereUniqueInput
  }

  /**
   * SutebaSpec findFirst
   */
  export type SutebaSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * Filter, which SutebaSpec to fetch.
     */
    where?: SutebaSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SutebaSpecs to fetch.
     */
    orderBy?: SutebaSpecOrderByWithRelationInput | SutebaSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SutebaSpecs.
     */
    cursor?: SutebaSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SutebaSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SutebaSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SutebaSpecs.
     */
    distinct?: SutebaSpecScalarFieldEnum | SutebaSpecScalarFieldEnum[]
  }

  /**
   * SutebaSpec findFirstOrThrow
   */
  export type SutebaSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * Filter, which SutebaSpec to fetch.
     */
    where?: SutebaSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SutebaSpecs to fetch.
     */
    orderBy?: SutebaSpecOrderByWithRelationInput | SutebaSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SutebaSpecs.
     */
    cursor?: SutebaSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SutebaSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SutebaSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SutebaSpecs.
     */
    distinct?: SutebaSpecScalarFieldEnum | SutebaSpecScalarFieldEnum[]
  }

  /**
   * SutebaSpec findMany
   */
  export type SutebaSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * Filter, which SutebaSpecs to fetch.
     */
    where?: SutebaSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SutebaSpecs to fetch.
     */
    orderBy?: SutebaSpecOrderByWithRelationInput | SutebaSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SutebaSpecs.
     */
    cursor?: SutebaSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SutebaSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SutebaSpecs.
     */
    skip?: number
    distinct?: SutebaSpecScalarFieldEnum | SutebaSpecScalarFieldEnum[]
  }

  /**
   * SutebaSpec create
   */
  export type SutebaSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a SutebaSpec.
     */
    data?: XOR<SutebaSpecCreateInput, SutebaSpecUncheckedCreateInput>
  }

  /**
   * SutebaSpec createMany
   */
  export type SutebaSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SutebaSpecs.
     */
    data: SutebaSpecCreateManyInput | SutebaSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SutebaSpec createManyAndReturn
   */
  export type SutebaSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * The data used to create many SutebaSpecs.
     */
    data: SutebaSpecCreateManyInput | SutebaSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SutebaSpec update
   */
  export type SutebaSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a SutebaSpec.
     */
    data: XOR<SutebaSpecUpdateInput, SutebaSpecUncheckedUpdateInput>
    /**
     * Choose, which SutebaSpec to update.
     */
    where: SutebaSpecWhereUniqueInput
  }

  /**
   * SutebaSpec updateMany
   */
  export type SutebaSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SutebaSpecs.
     */
    data: XOR<SutebaSpecUpdateManyMutationInput, SutebaSpecUncheckedUpdateManyInput>
    /**
     * Filter which SutebaSpecs to update
     */
    where?: SutebaSpecWhereInput
    /**
     * Limit how many SutebaSpecs to update.
     */
    limit?: number
  }

  /**
   * SutebaSpec updateManyAndReturn
   */
  export type SutebaSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * The data used to update SutebaSpecs.
     */
    data: XOR<SutebaSpecUpdateManyMutationInput, SutebaSpecUncheckedUpdateManyInput>
    /**
     * Filter which SutebaSpecs to update
     */
    where?: SutebaSpecWhereInput
    /**
     * Limit how many SutebaSpecs to update.
     */
    limit?: number
  }

  /**
   * SutebaSpec upsert
   */
  export type SutebaSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the SutebaSpec to update in case it exists.
     */
    where: SutebaSpecWhereUniqueInput
    /**
     * In case the SutebaSpec found by the `where` argument doesn't exist, create a new SutebaSpec with this data.
     */
    create: XOR<SutebaSpecCreateInput, SutebaSpecUncheckedCreateInput>
    /**
     * In case the SutebaSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SutebaSpecUpdateInput, SutebaSpecUncheckedUpdateInput>
  }

  /**
   * SutebaSpec delete
   */
  export type SutebaSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
    /**
     * Filter which SutebaSpec to delete.
     */
    where: SutebaSpecWhereUniqueInput
  }

  /**
   * SutebaSpec deleteMany
   */
  export type SutebaSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SutebaSpecs to delete
     */
    where?: SutebaSpecWhereInput
    /**
     * Limit how many SutebaSpecs to delete.
     */
    limit?: number
  }

  /**
   * SutebaSpec.machineBasicSpec
   */
  export type SutebaSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * SutebaSpec without action
   */
  export type SutebaSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SutebaSpec
     */
    select?: SutebaSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SutebaSpec
     */
    omit?: SutebaSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SutebaSpecInclude<ExtArgs> | null
  }


  /**
   * Model SpongeCorkSpec
   */

  export type AggregateSpongeCorkSpec = {
    _count: SpongeCorkSpecCountAggregateOutputType | null
    _avg: SpongeCorkSpecAvgAggregateOutputType | null
    _sum: SpongeCorkSpecSumAggregateOutputType | null
    _min: SpongeCorkSpecMinAggregateOutputType | null
    _max: SpongeCorkSpecMaxAggregateOutputType | null
  }

  export type SpongeCorkSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type SpongeCorkSpecSumAggregateOutputType = {
    id: number | null
  }

  export type SpongeCorkSpecMinAggregateOutputType = {
    id: number | null
    sponge: string | null
    cork: string | null
    cork_crushing: string | null
    crushing_remark: string | null
  }

  export type SpongeCorkSpecMaxAggregateOutputType = {
    id: number | null
    sponge: string | null
    cork: string | null
    cork_crushing: string | null
    crushing_remark: string | null
  }

  export type SpongeCorkSpecCountAggregateOutputType = {
    id: number
    sponge: number
    cork: number
    cork_crushing: number
    crushing_remark: number
    _all: number
  }


  export type SpongeCorkSpecAvgAggregateInputType = {
    id?: true
  }

  export type SpongeCorkSpecSumAggregateInputType = {
    id?: true
  }

  export type SpongeCorkSpecMinAggregateInputType = {
    id?: true
    sponge?: true
    cork?: true
    cork_crushing?: true
    crushing_remark?: true
  }

  export type SpongeCorkSpecMaxAggregateInputType = {
    id?: true
    sponge?: true
    cork?: true
    cork_crushing?: true
    crushing_remark?: true
  }

  export type SpongeCorkSpecCountAggregateInputType = {
    id?: true
    sponge?: true
    cork?: true
    cork_crushing?: true
    crushing_remark?: true
    _all?: true
  }

  export type SpongeCorkSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpongeCorkSpec to aggregate.
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpongeCorkSpecs to fetch.
     */
    orderBy?: SpongeCorkSpecOrderByWithRelationInput | SpongeCorkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpongeCorkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpongeCorkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpongeCorkSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpongeCorkSpecs
    **/
    _count?: true | SpongeCorkSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpongeCorkSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpongeCorkSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpongeCorkSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpongeCorkSpecMaxAggregateInputType
  }

  export type GetSpongeCorkSpecAggregateType<T extends SpongeCorkSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateSpongeCorkSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpongeCorkSpec[P]>
      : GetScalarType<T[P], AggregateSpongeCorkSpec[P]>
  }




  export type SpongeCorkSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpongeCorkSpecWhereInput
    orderBy?: SpongeCorkSpecOrderByWithAggregationInput | SpongeCorkSpecOrderByWithAggregationInput[]
    by: SpongeCorkSpecScalarFieldEnum[] | SpongeCorkSpecScalarFieldEnum
    having?: SpongeCorkSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpongeCorkSpecCountAggregateInputType | true
    _avg?: SpongeCorkSpecAvgAggregateInputType
    _sum?: SpongeCorkSpecSumAggregateInputType
    _min?: SpongeCorkSpecMinAggregateInputType
    _max?: SpongeCorkSpecMaxAggregateInputType
  }

  export type SpongeCorkSpecGroupByOutputType = {
    id: number
    sponge: string | null
    cork: string | null
    cork_crushing: string | null
    crushing_remark: string | null
    _count: SpongeCorkSpecCountAggregateOutputType | null
    _avg: SpongeCorkSpecAvgAggregateOutputType | null
    _sum: SpongeCorkSpecSumAggregateOutputType | null
    _min: SpongeCorkSpecMinAggregateOutputType | null
    _max: SpongeCorkSpecMaxAggregateOutputType | null
  }

  type GetSpongeCorkSpecGroupByPayload<T extends SpongeCorkSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpongeCorkSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpongeCorkSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpongeCorkSpecGroupByOutputType[P]>
            : GetScalarType<T[P], SpongeCorkSpecGroupByOutputType[P]>
        }
      >
    >


  export type SpongeCorkSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sponge?: boolean
    cork?: boolean
    cork_crushing?: boolean
    crushing_remark?: boolean
    machineBasicSpec?: boolean | SpongeCorkSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["spongeCorkSpec"]>

  export type SpongeCorkSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sponge?: boolean
    cork?: boolean
    cork_crushing?: boolean
    crushing_remark?: boolean
  }, ExtArgs["result"]["spongeCorkSpec"]>

  export type SpongeCorkSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sponge?: boolean
    cork?: boolean
    cork_crushing?: boolean
    crushing_remark?: boolean
  }, ExtArgs["result"]["spongeCorkSpec"]>

  export type SpongeCorkSpecSelectScalar = {
    id?: boolean
    sponge?: boolean
    cork?: boolean
    cork_crushing?: boolean
    crushing_remark?: boolean
  }

  export type SpongeCorkSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sponge" | "cork" | "cork_crushing" | "crushing_remark", ExtArgs["result"]["spongeCorkSpec"]>
  export type SpongeCorkSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | SpongeCorkSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type SpongeCorkSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpongeCorkSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpongeCorkSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpongeCorkSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sponge: string | null
      cork: string | null
      cork_crushing: string | null
      crushing_remark: string | null
    }, ExtArgs["result"]["spongeCorkSpec"]>
    composites: {}
  }

  type SpongeCorkSpecGetPayload<S extends boolean | null | undefined | SpongeCorkSpecDefaultArgs> = $Result.GetResult<Prisma.$SpongeCorkSpecPayload, S>

  type SpongeCorkSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpongeCorkSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpongeCorkSpecCountAggregateInputType | true
    }

  export interface SpongeCorkSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpongeCorkSpec'], meta: { name: 'SpongeCorkSpec' } }
    /**
     * Find zero or one SpongeCorkSpec that matches the filter.
     * @param {SpongeCorkSpecFindUniqueArgs} args - Arguments to find a SpongeCorkSpec
     * @example
     * // Get one SpongeCorkSpec
     * const spongeCorkSpec = await prisma.spongeCorkSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpongeCorkSpecFindUniqueArgs>(args: SelectSubset<T, SpongeCorkSpecFindUniqueArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpongeCorkSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpongeCorkSpecFindUniqueOrThrowArgs} args - Arguments to find a SpongeCorkSpec
     * @example
     * // Get one SpongeCorkSpec
     * const spongeCorkSpec = await prisma.spongeCorkSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpongeCorkSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, SpongeCorkSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpongeCorkSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecFindFirstArgs} args - Arguments to find a SpongeCorkSpec
     * @example
     * // Get one SpongeCorkSpec
     * const spongeCorkSpec = await prisma.spongeCorkSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpongeCorkSpecFindFirstArgs>(args?: SelectSubset<T, SpongeCorkSpecFindFirstArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpongeCorkSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecFindFirstOrThrowArgs} args - Arguments to find a SpongeCorkSpec
     * @example
     * // Get one SpongeCorkSpec
     * const spongeCorkSpec = await prisma.spongeCorkSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpongeCorkSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, SpongeCorkSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpongeCorkSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpongeCorkSpecs
     * const spongeCorkSpecs = await prisma.spongeCorkSpec.findMany()
     * 
     * // Get first 10 SpongeCorkSpecs
     * const spongeCorkSpecs = await prisma.spongeCorkSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spongeCorkSpecWithIdOnly = await prisma.spongeCorkSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpongeCorkSpecFindManyArgs>(args?: SelectSubset<T, SpongeCorkSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpongeCorkSpec.
     * @param {SpongeCorkSpecCreateArgs} args - Arguments to create a SpongeCorkSpec.
     * @example
     * // Create one SpongeCorkSpec
     * const SpongeCorkSpec = await prisma.spongeCorkSpec.create({
     *   data: {
     *     // ... data to create a SpongeCorkSpec
     *   }
     * })
     * 
     */
    create<T extends SpongeCorkSpecCreateArgs>(args: SelectSubset<T, SpongeCorkSpecCreateArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpongeCorkSpecs.
     * @param {SpongeCorkSpecCreateManyArgs} args - Arguments to create many SpongeCorkSpecs.
     * @example
     * // Create many SpongeCorkSpecs
     * const spongeCorkSpec = await prisma.spongeCorkSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpongeCorkSpecCreateManyArgs>(args?: SelectSubset<T, SpongeCorkSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpongeCorkSpecs and returns the data saved in the database.
     * @param {SpongeCorkSpecCreateManyAndReturnArgs} args - Arguments to create many SpongeCorkSpecs.
     * @example
     * // Create many SpongeCorkSpecs
     * const spongeCorkSpec = await prisma.spongeCorkSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpongeCorkSpecs and only return the `id`
     * const spongeCorkSpecWithIdOnly = await prisma.spongeCorkSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpongeCorkSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, SpongeCorkSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpongeCorkSpec.
     * @param {SpongeCorkSpecDeleteArgs} args - Arguments to delete one SpongeCorkSpec.
     * @example
     * // Delete one SpongeCorkSpec
     * const SpongeCorkSpec = await prisma.spongeCorkSpec.delete({
     *   where: {
     *     // ... filter to delete one SpongeCorkSpec
     *   }
     * })
     * 
     */
    delete<T extends SpongeCorkSpecDeleteArgs>(args: SelectSubset<T, SpongeCorkSpecDeleteArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpongeCorkSpec.
     * @param {SpongeCorkSpecUpdateArgs} args - Arguments to update one SpongeCorkSpec.
     * @example
     * // Update one SpongeCorkSpec
     * const spongeCorkSpec = await prisma.spongeCorkSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpongeCorkSpecUpdateArgs>(args: SelectSubset<T, SpongeCorkSpecUpdateArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpongeCorkSpecs.
     * @param {SpongeCorkSpecDeleteManyArgs} args - Arguments to filter SpongeCorkSpecs to delete.
     * @example
     * // Delete a few SpongeCorkSpecs
     * const { count } = await prisma.spongeCorkSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpongeCorkSpecDeleteManyArgs>(args?: SelectSubset<T, SpongeCorkSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpongeCorkSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpongeCorkSpecs
     * const spongeCorkSpec = await prisma.spongeCorkSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpongeCorkSpecUpdateManyArgs>(args: SelectSubset<T, SpongeCorkSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpongeCorkSpecs and returns the data updated in the database.
     * @param {SpongeCorkSpecUpdateManyAndReturnArgs} args - Arguments to update many SpongeCorkSpecs.
     * @example
     * // Update many SpongeCorkSpecs
     * const spongeCorkSpec = await prisma.spongeCorkSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpongeCorkSpecs and only return the `id`
     * const spongeCorkSpecWithIdOnly = await prisma.spongeCorkSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends SpongeCorkSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, SpongeCorkSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpongeCorkSpec.
     * @param {SpongeCorkSpecUpsertArgs} args - Arguments to update or create a SpongeCorkSpec.
     * @example
     * // Update or create a SpongeCorkSpec
     * const spongeCorkSpec = await prisma.spongeCorkSpec.upsert({
     *   create: {
     *     // ... data to create a SpongeCorkSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpongeCorkSpec we want to update
     *   }
     * })
     */
    upsert<T extends SpongeCorkSpecUpsertArgs>(args: SelectSubset<T, SpongeCorkSpecUpsertArgs<ExtArgs>>): Prisma__SpongeCorkSpecClient<$Result.GetResult<Prisma.$SpongeCorkSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpongeCorkSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecCountArgs} args - Arguments to filter SpongeCorkSpecs to count.
     * @example
     * // Count the number of SpongeCorkSpecs
     * const count = await prisma.spongeCorkSpec.count({
     *   where: {
     *     // ... the filter for the SpongeCorkSpecs we want to count
     *   }
     * })
    **/
    count<T extends SpongeCorkSpecCountArgs>(
      args?: Subset<T, SpongeCorkSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpongeCorkSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpongeCorkSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpongeCorkSpecAggregateArgs>(args: Subset<T, SpongeCorkSpecAggregateArgs>): Prisma.PrismaPromise<GetSpongeCorkSpecAggregateType<T>>

    /**
     * Group by SpongeCorkSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpongeCorkSpecGroupByArgs} args - Group by arguments.
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
      T extends SpongeCorkSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpongeCorkSpecGroupByArgs['orderBy'] }
        : { orderBy?: SpongeCorkSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpongeCorkSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpongeCorkSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpongeCorkSpec model
   */
  readonly fields: SpongeCorkSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpongeCorkSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpongeCorkSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends SpongeCorkSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, SpongeCorkSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SpongeCorkSpec model
   */
  interface SpongeCorkSpecFieldRefs {
    readonly id: FieldRef<"SpongeCorkSpec", 'Int'>
    readonly sponge: FieldRef<"SpongeCorkSpec", 'String'>
    readonly cork: FieldRef<"SpongeCorkSpec", 'String'>
    readonly cork_crushing: FieldRef<"SpongeCorkSpec", 'String'>
    readonly crushing_remark: FieldRef<"SpongeCorkSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SpongeCorkSpec findUnique
   */
  export type SpongeCorkSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * Filter, which SpongeCorkSpec to fetch.
     */
    where: SpongeCorkSpecWhereUniqueInput
  }

  /**
   * SpongeCorkSpec findUniqueOrThrow
   */
  export type SpongeCorkSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * Filter, which SpongeCorkSpec to fetch.
     */
    where: SpongeCorkSpecWhereUniqueInput
  }

  /**
   * SpongeCorkSpec findFirst
   */
  export type SpongeCorkSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * Filter, which SpongeCorkSpec to fetch.
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpongeCorkSpecs to fetch.
     */
    orderBy?: SpongeCorkSpecOrderByWithRelationInput | SpongeCorkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpongeCorkSpecs.
     */
    cursor?: SpongeCorkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpongeCorkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpongeCorkSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpongeCorkSpecs.
     */
    distinct?: SpongeCorkSpecScalarFieldEnum | SpongeCorkSpecScalarFieldEnum[]
  }

  /**
   * SpongeCorkSpec findFirstOrThrow
   */
  export type SpongeCorkSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * Filter, which SpongeCorkSpec to fetch.
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpongeCorkSpecs to fetch.
     */
    orderBy?: SpongeCorkSpecOrderByWithRelationInput | SpongeCorkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpongeCorkSpecs.
     */
    cursor?: SpongeCorkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpongeCorkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpongeCorkSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpongeCorkSpecs.
     */
    distinct?: SpongeCorkSpecScalarFieldEnum | SpongeCorkSpecScalarFieldEnum[]
  }

  /**
   * SpongeCorkSpec findMany
   */
  export type SpongeCorkSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * Filter, which SpongeCorkSpecs to fetch.
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpongeCorkSpecs to fetch.
     */
    orderBy?: SpongeCorkSpecOrderByWithRelationInput | SpongeCorkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpongeCorkSpecs.
     */
    cursor?: SpongeCorkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpongeCorkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpongeCorkSpecs.
     */
    skip?: number
    distinct?: SpongeCorkSpecScalarFieldEnum | SpongeCorkSpecScalarFieldEnum[]
  }

  /**
   * SpongeCorkSpec create
   */
  export type SpongeCorkSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a SpongeCorkSpec.
     */
    data?: XOR<SpongeCorkSpecCreateInput, SpongeCorkSpecUncheckedCreateInput>
  }

  /**
   * SpongeCorkSpec createMany
   */
  export type SpongeCorkSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpongeCorkSpecs.
     */
    data: SpongeCorkSpecCreateManyInput | SpongeCorkSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpongeCorkSpec createManyAndReturn
   */
  export type SpongeCorkSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * The data used to create many SpongeCorkSpecs.
     */
    data: SpongeCorkSpecCreateManyInput | SpongeCorkSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpongeCorkSpec update
   */
  export type SpongeCorkSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a SpongeCorkSpec.
     */
    data: XOR<SpongeCorkSpecUpdateInput, SpongeCorkSpecUncheckedUpdateInput>
    /**
     * Choose, which SpongeCorkSpec to update.
     */
    where: SpongeCorkSpecWhereUniqueInput
  }

  /**
   * SpongeCorkSpec updateMany
   */
  export type SpongeCorkSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpongeCorkSpecs.
     */
    data: XOR<SpongeCorkSpecUpdateManyMutationInput, SpongeCorkSpecUncheckedUpdateManyInput>
    /**
     * Filter which SpongeCorkSpecs to update
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * Limit how many SpongeCorkSpecs to update.
     */
    limit?: number
  }

  /**
   * SpongeCorkSpec updateManyAndReturn
   */
  export type SpongeCorkSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * The data used to update SpongeCorkSpecs.
     */
    data: XOR<SpongeCorkSpecUpdateManyMutationInput, SpongeCorkSpecUncheckedUpdateManyInput>
    /**
     * Filter which SpongeCorkSpecs to update
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * Limit how many SpongeCorkSpecs to update.
     */
    limit?: number
  }

  /**
   * SpongeCorkSpec upsert
   */
  export type SpongeCorkSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the SpongeCorkSpec to update in case it exists.
     */
    where: SpongeCorkSpecWhereUniqueInput
    /**
     * In case the SpongeCorkSpec found by the `where` argument doesn't exist, create a new SpongeCorkSpec with this data.
     */
    create: XOR<SpongeCorkSpecCreateInput, SpongeCorkSpecUncheckedCreateInput>
    /**
     * In case the SpongeCorkSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpongeCorkSpecUpdateInput, SpongeCorkSpecUncheckedUpdateInput>
  }

  /**
   * SpongeCorkSpec delete
   */
  export type SpongeCorkSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
    /**
     * Filter which SpongeCorkSpec to delete.
     */
    where: SpongeCorkSpecWhereUniqueInput
  }

  /**
   * SpongeCorkSpec deleteMany
   */
  export type SpongeCorkSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpongeCorkSpecs to delete
     */
    where?: SpongeCorkSpecWhereInput
    /**
     * Limit how many SpongeCorkSpecs to delete.
     */
    limit?: number
  }

  /**
   * SpongeCorkSpec.machineBasicSpec
   */
  export type SpongeCorkSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * SpongeCorkSpec without action
   */
  export type SpongeCorkSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpongeCorkSpec
     */
    select?: SpongeCorkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpongeCorkSpec
     */
    omit?: SpongeCorkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpongeCorkSpecInclude<ExtArgs> | null
  }


  /**
   * Model CenterMetalSpec
   */

  export type AggregateCenterMetalSpec = {
    _count: CenterMetalSpecCountAggregateOutputType | null
    _avg: CenterMetalSpecAvgAggregateOutputType | null
    _sum: CenterMetalSpecSumAggregateOutputType | null
    _min: CenterMetalSpecMinAggregateOutputType | null
    _max: CenterMetalSpecMaxAggregateOutputType | null
  }

  export type CenterMetalSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type CenterMetalSpecSumAggregateOutputType = {
    id: number | null
  }

  export type CenterMetalSpecMinAggregateOutputType = {
    id: number | null
    center_metal: string | null
    center_metal_kind: string | null
    center_metal_center: string | null
    center_metal_right: string | null
    center_metal_left: string | null
  }

  export type CenterMetalSpecMaxAggregateOutputType = {
    id: number | null
    center_metal: string | null
    center_metal_kind: string | null
    center_metal_center: string | null
    center_metal_right: string | null
    center_metal_left: string | null
  }

  export type CenterMetalSpecCountAggregateOutputType = {
    id: number
    center_metal: number
    center_metal_kind: number
    center_metal_center: number
    center_metal_right: number
    center_metal_left: number
    _all: number
  }


  export type CenterMetalSpecAvgAggregateInputType = {
    id?: true
  }

  export type CenterMetalSpecSumAggregateInputType = {
    id?: true
  }

  export type CenterMetalSpecMinAggregateInputType = {
    id?: true
    center_metal?: true
    center_metal_kind?: true
    center_metal_center?: true
    center_metal_right?: true
    center_metal_left?: true
  }

  export type CenterMetalSpecMaxAggregateInputType = {
    id?: true
    center_metal?: true
    center_metal_kind?: true
    center_metal_center?: true
    center_metal_right?: true
    center_metal_left?: true
  }

  export type CenterMetalSpecCountAggregateInputType = {
    id?: true
    center_metal?: true
    center_metal_kind?: true
    center_metal_center?: true
    center_metal_right?: true
    center_metal_left?: true
    _all?: true
  }

  export type CenterMetalSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CenterMetalSpec to aggregate.
     */
    where?: CenterMetalSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CenterMetalSpecs to fetch.
     */
    orderBy?: CenterMetalSpecOrderByWithRelationInput | CenterMetalSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CenterMetalSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CenterMetalSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CenterMetalSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CenterMetalSpecs
    **/
    _count?: true | CenterMetalSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CenterMetalSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CenterMetalSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CenterMetalSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CenterMetalSpecMaxAggregateInputType
  }

  export type GetCenterMetalSpecAggregateType<T extends CenterMetalSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateCenterMetalSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCenterMetalSpec[P]>
      : GetScalarType<T[P], AggregateCenterMetalSpec[P]>
  }




  export type CenterMetalSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CenterMetalSpecWhereInput
    orderBy?: CenterMetalSpecOrderByWithAggregationInput | CenterMetalSpecOrderByWithAggregationInput[]
    by: CenterMetalSpecScalarFieldEnum[] | CenterMetalSpecScalarFieldEnum
    having?: CenterMetalSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CenterMetalSpecCountAggregateInputType | true
    _avg?: CenterMetalSpecAvgAggregateInputType
    _sum?: CenterMetalSpecSumAggregateInputType
    _min?: CenterMetalSpecMinAggregateInputType
    _max?: CenterMetalSpecMaxAggregateInputType
  }

  export type CenterMetalSpecGroupByOutputType = {
    id: number
    center_metal: string | null
    center_metal_kind: string | null
    center_metal_center: string | null
    center_metal_right: string | null
    center_metal_left: string | null
    _count: CenterMetalSpecCountAggregateOutputType | null
    _avg: CenterMetalSpecAvgAggregateOutputType | null
    _sum: CenterMetalSpecSumAggregateOutputType | null
    _min: CenterMetalSpecMinAggregateOutputType | null
    _max: CenterMetalSpecMaxAggregateOutputType | null
  }

  type GetCenterMetalSpecGroupByPayload<T extends CenterMetalSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CenterMetalSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CenterMetalSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CenterMetalSpecGroupByOutputType[P]>
            : GetScalarType<T[P], CenterMetalSpecGroupByOutputType[P]>
        }
      >
    >


  export type CenterMetalSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    center_metal?: boolean
    center_metal_kind?: boolean
    center_metal_center?: boolean
    center_metal_right?: boolean
    center_metal_left?: boolean
    machineBasicSpec?: boolean | CenterMetalSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["centerMetalSpec"]>

  export type CenterMetalSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    center_metal?: boolean
    center_metal_kind?: boolean
    center_metal_center?: boolean
    center_metal_right?: boolean
    center_metal_left?: boolean
  }, ExtArgs["result"]["centerMetalSpec"]>

  export type CenterMetalSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    center_metal?: boolean
    center_metal_kind?: boolean
    center_metal_center?: boolean
    center_metal_right?: boolean
    center_metal_left?: boolean
  }, ExtArgs["result"]["centerMetalSpec"]>

  export type CenterMetalSpecSelectScalar = {
    id?: boolean
    center_metal?: boolean
    center_metal_kind?: boolean
    center_metal_center?: boolean
    center_metal_right?: boolean
    center_metal_left?: boolean
  }

  export type CenterMetalSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "center_metal" | "center_metal_kind" | "center_metal_center" | "center_metal_right" | "center_metal_left", ExtArgs["result"]["centerMetalSpec"]>
  export type CenterMetalSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | CenterMetalSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type CenterMetalSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CenterMetalSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CenterMetalSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CenterMetalSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      center_metal: string | null
      center_metal_kind: string | null
      center_metal_center: string | null
      center_metal_right: string | null
      center_metal_left: string | null
    }, ExtArgs["result"]["centerMetalSpec"]>
    composites: {}
  }

  type CenterMetalSpecGetPayload<S extends boolean | null | undefined | CenterMetalSpecDefaultArgs> = $Result.GetResult<Prisma.$CenterMetalSpecPayload, S>

  type CenterMetalSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CenterMetalSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CenterMetalSpecCountAggregateInputType | true
    }

  export interface CenterMetalSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CenterMetalSpec'], meta: { name: 'CenterMetalSpec' } }
    /**
     * Find zero or one CenterMetalSpec that matches the filter.
     * @param {CenterMetalSpecFindUniqueArgs} args - Arguments to find a CenterMetalSpec
     * @example
     * // Get one CenterMetalSpec
     * const centerMetalSpec = await prisma.centerMetalSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CenterMetalSpecFindUniqueArgs>(args: SelectSubset<T, CenterMetalSpecFindUniqueArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CenterMetalSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CenterMetalSpecFindUniqueOrThrowArgs} args - Arguments to find a CenterMetalSpec
     * @example
     * // Get one CenterMetalSpec
     * const centerMetalSpec = await prisma.centerMetalSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CenterMetalSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, CenterMetalSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CenterMetalSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecFindFirstArgs} args - Arguments to find a CenterMetalSpec
     * @example
     * // Get one CenterMetalSpec
     * const centerMetalSpec = await prisma.centerMetalSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CenterMetalSpecFindFirstArgs>(args?: SelectSubset<T, CenterMetalSpecFindFirstArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CenterMetalSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecFindFirstOrThrowArgs} args - Arguments to find a CenterMetalSpec
     * @example
     * // Get one CenterMetalSpec
     * const centerMetalSpec = await prisma.centerMetalSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CenterMetalSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, CenterMetalSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CenterMetalSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CenterMetalSpecs
     * const centerMetalSpecs = await prisma.centerMetalSpec.findMany()
     * 
     * // Get first 10 CenterMetalSpecs
     * const centerMetalSpecs = await prisma.centerMetalSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centerMetalSpecWithIdOnly = await prisma.centerMetalSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CenterMetalSpecFindManyArgs>(args?: SelectSubset<T, CenterMetalSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CenterMetalSpec.
     * @param {CenterMetalSpecCreateArgs} args - Arguments to create a CenterMetalSpec.
     * @example
     * // Create one CenterMetalSpec
     * const CenterMetalSpec = await prisma.centerMetalSpec.create({
     *   data: {
     *     // ... data to create a CenterMetalSpec
     *   }
     * })
     * 
     */
    create<T extends CenterMetalSpecCreateArgs>(args: SelectSubset<T, CenterMetalSpecCreateArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CenterMetalSpecs.
     * @param {CenterMetalSpecCreateManyArgs} args - Arguments to create many CenterMetalSpecs.
     * @example
     * // Create many CenterMetalSpecs
     * const centerMetalSpec = await prisma.centerMetalSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CenterMetalSpecCreateManyArgs>(args?: SelectSubset<T, CenterMetalSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CenterMetalSpecs and returns the data saved in the database.
     * @param {CenterMetalSpecCreateManyAndReturnArgs} args - Arguments to create many CenterMetalSpecs.
     * @example
     * // Create many CenterMetalSpecs
     * const centerMetalSpec = await prisma.centerMetalSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CenterMetalSpecs and only return the `id`
     * const centerMetalSpecWithIdOnly = await prisma.centerMetalSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CenterMetalSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, CenterMetalSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CenterMetalSpec.
     * @param {CenterMetalSpecDeleteArgs} args - Arguments to delete one CenterMetalSpec.
     * @example
     * // Delete one CenterMetalSpec
     * const CenterMetalSpec = await prisma.centerMetalSpec.delete({
     *   where: {
     *     // ... filter to delete one CenterMetalSpec
     *   }
     * })
     * 
     */
    delete<T extends CenterMetalSpecDeleteArgs>(args: SelectSubset<T, CenterMetalSpecDeleteArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CenterMetalSpec.
     * @param {CenterMetalSpecUpdateArgs} args - Arguments to update one CenterMetalSpec.
     * @example
     * // Update one CenterMetalSpec
     * const centerMetalSpec = await prisma.centerMetalSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CenterMetalSpecUpdateArgs>(args: SelectSubset<T, CenterMetalSpecUpdateArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CenterMetalSpecs.
     * @param {CenterMetalSpecDeleteManyArgs} args - Arguments to filter CenterMetalSpecs to delete.
     * @example
     * // Delete a few CenterMetalSpecs
     * const { count } = await prisma.centerMetalSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CenterMetalSpecDeleteManyArgs>(args?: SelectSubset<T, CenterMetalSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CenterMetalSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CenterMetalSpecs
     * const centerMetalSpec = await prisma.centerMetalSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CenterMetalSpecUpdateManyArgs>(args: SelectSubset<T, CenterMetalSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CenterMetalSpecs and returns the data updated in the database.
     * @param {CenterMetalSpecUpdateManyAndReturnArgs} args - Arguments to update many CenterMetalSpecs.
     * @example
     * // Update many CenterMetalSpecs
     * const centerMetalSpec = await prisma.centerMetalSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CenterMetalSpecs and only return the `id`
     * const centerMetalSpecWithIdOnly = await prisma.centerMetalSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends CenterMetalSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, CenterMetalSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CenterMetalSpec.
     * @param {CenterMetalSpecUpsertArgs} args - Arguments to update or create a CenterMetalSpec.
     * @example
     * // Update or create a CenterMetalSpec
     * const centerMetalSpec = await prisma.centerMetalSpec.upsert({
     *   create: {
     *     // ... data to create a CenterMetalSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CenterMetalSpec we want to update
     *   }
     * })
     */
    upsert<T extends CenterMetalSpecUpsertArgs>(args: SelectSubset<T, CenterMetalSpecUpsertArgs<ExtArgs>>): Prisma__CenterMetalSpecClient<$Result.GetResult<Prisma.$CenterMetalSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CenterMetalSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecCountArgs} args - Arguments to filter CenterMetalSpecs to count.
     * @example
     * // Count the number of CenterMetalSpecs
     * const count = await prisma.centerMetalSpec.count({
     *   where: {
     *     // ... the filter for the CenterMetalSpecs we want to count
     *   }
     * })
    **/
    count<T extends CenterMetalSpecCountArgs>(
      args?: Subset<T, CenterMetalSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CenterMetalSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CenterMetalSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CenterMetalSpecAggregateArgs>(args: Subset<T, CenterMetalSpecAggregateArgs>): Prisma.PrismaPromise<GetCenterMetalSpecAggregateType<T>>

    /**
     * Group by CenterMetalSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterMetalSpecGroupByArgs} args - Group by arguments.
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
      T extends CenterMetalSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CenterMetalSpecGroupByArgs['orderBy'] }
        : { orderBy?: CenterMetalSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CenterMetalSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCenterMetalSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CenterMetalSpec model
   */
  readonly fields: CenterMetalSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CenterMetalSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CenterMetalSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends CenterMetalSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, CenterMetalSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CenterMetalSpec model
   */
  interface CenterMetalSpecFieldRefs {
    readonly id: FieldRef<"CenterMetalSpec", 'Int'>
    readonly center_metal: FieldRef<"CenterMetalSpec", 'String'>
    readonly center_metal_kind: FieldRef<"CenterMetalSpec", 'String'>
    readonly center_metal_center: FieldRef<"CenterMetalSpec", 'String'>
    readonly center_metal_right: FieldRef<"CenterMetalSpec", 'String'>
    readonly center_metal_left: FieldRef<"CenterMetalSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CenterMetalSpec findUnique
   */
  export type CenterMetalSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * Filter, which CenterMetalSpec to fetch.
     */
    where: CenterMetalSpecWhereUniqueInput
  }

  /**
   * CenterMetalSpec findUniqueOrThrow
   */
  export type CenterMetalSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * Filter, which CenterMetalSpec to fetch.
     */
    where: CenterMetalSpecWhereUniqueInput
  }

  /**
   * CenterMetalSpec findFirst
   */
  export type CenterMetalSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * Filter, which CenterMetalSpec to fetch.
     */
    where?: CenterMetalSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CenterMetalSpecs to fetch.
     */
    orderBy?: CenterMetalSpecOrderByWithRelationInput | CenterMetalSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CenterMetalSpecs.
     */
    cursor?: CenterMetalSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CenterMetalSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CenterMetalSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CenterMetalSpecs.
     */
    distinct?: CenterMetalSpecScalarFieldEnum | CenterMetalSpecScalarFieldEnum[]
  }

  /**
   * CenterMetalSpec findFirstOrThrow
   */
  export type CenterMetalSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * Filter, which CenterMetalSpec to fetch.
     */
    where?: CenterMetalSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CenterMetalSpecs to fetch.
     */
    orderBy?: CenterMetalSpecOrderByWithRelationInput | CenterMetalSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CenterMetalSpecs.
     */
    cursor?: CenterMetalSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CenterMetalSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CenterMetalSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CenterMetalSpecs.
     */
    distinct?: CenterMetalSpecScalarFieldEnum | CenterMetalSpecScalarFieldEnum[]
  }

  /**
   * CenterMetalSpec findMany
   */
  export type CenterMetalSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * Filter, which CenterMetalSpecs to fetch.
     */
    where?: CenterMetalSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CenterMetalSpecs to fetch.
     */
    orderBy?: CenterMetalSpecOrderByWithRelationInput | CenterMetalSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CenterMetalSpecs.
     */
    cursor?: CenterMetalSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CenterMetalSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CenterMetalSpecs.
     */
    skip?: number
    distinct?: CenterMetalSpecScalarFieldEnum | CenterMetalSpecScalarFieldEnum[]
  }

  /**
   * CenterMetalSpec create
   */
  export type CenterMetalSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a CenterMetalSpec.
     */
    data?: XOR<CenterMetalSpecCreateInput, CenterMetalSpecUncheckedCreateInput>
  }

  /**
   * CenterMetalSpec createMany
   */
  export type CenterMetalSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CenterMetalSpecs.
     */
    data: CenterMetalSpecCreateManyInput | CenterMetalSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CenterMetalSpec createManyAndReturn
   */
  export type CenterMetalSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * The data used to create many CenterMetalSpecs.
     */
    data: CenterMetalSpecCreateManyInput | CenterMetalSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CenterMetalSpec update
   */
  export type CenterMetalSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a CenterMetalSpec.
     */
    data: XOR<CenterMetalSpecUpdateInput, CenterMetalSpecUncheckedUpdateInput>
    /**
     * Choose, which CenterMetalSpec to update.
     */
    where: CenterMetalSpecWhereUniqueInput
  }

  /**
   * CenterMetalSpec updateMany
   */
  export type CenterMetalSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CenterMetalSpecs.
     */
    data: XOR<CenterMetalSpecUpdateManyMutationInput, CenterMetalSpecUncheckedUpdateManyInput>
    /**
     * Filter which CenterMetalSpecs to update
     */
    where?: CenterMetalSpecWhereInput
    /**
     * Limit how many CenterMetalSpecs to update.
     */
    limit?: number
  }

  /**
   * CenterMetalSpec updateManyAndReturn
   */
  export type CenterMetalSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * The data used to update CenterMetalSpecs.
     */
    data: XOR<CenterMetalSpecUpdateManyMutationInput, CenterMetalSpecUncheckedUpdateManyInput>
    /**
     * Filter which CenterMetalSpecs to update
     */
    where?: CenterMetalSpecWhereInput
    /**
     * Limit how many CenterMetalSpecs to update.
     */
    limit?: number
  }

  /**
   * CenterMetalSpec upsert
   */
  export type CenterMetalSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the CenterMetalSpec to update in case it exists.
     */
    where: CenterMetalSpecWhereUniqueInput
    /**
     * In case the CenterMetalSpec found by the `where` argument doesn't exist, create a new CenterMetalSpec with this data.
     */
    create: XOR<CenterMetalSpecCreateInput, CenterMetalSpecUncheckedCreateInput>
    /**
     * In case the CenterMetalSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CenterMetalSpecUpdateInput, CenterMetalSpecUncheckedUpdateInput>
  }

  /**
   * CenterMetalSpec delete
   */
  export type CenterMetalSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
    /**
     * Filter which CenterMetalSpec to delete.
     */
    where: CenterMetalSpecWhereUniqueInput
  }

  /**
   * CenterMetalSpec deleteMany
   */
  export type CenterMetalSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CenterMetalSpecs to delete
     */
    where?: CenterMetalSpecWhereInput
    /**
     * Limit how many CenterMetalSpecs to delete.
     */
    limit?: number
  }

  /**
   * CenterMetalSpec.machineBasicSpec
   */
  export type CenterMetalSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * CenterMetalSpec without action
   */
  export type CenterMetalSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterMetalSpec
     */
    select?: CenterMetalSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CenterMetalSpec
     */
    omit?: CenterMetalSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterMetalSpecInclude<ExtArgs> | null
  }


  /**
   * Model NickSpec
   */

  export type AggregateNickSpec = {
    _count: NickSpecCountAggregateOutputType | null
    _avg: NickSpecAvgAggregateOutputType | null
    _sum: NickSpecSumAggregateOutputType | null
    _min: NickSpecMinAggregateOutputType | null
    _max: NickSpecMaxAggregateOutputType | null
  }

  export type NickSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type NickSpecSumAggregateOutputType = {
    id: number | null
  }

  export type NickSpecMinAggregateOutputType = {
    id: number | null
    nick: string | null
    nick_remark_1: string | null
    nick_remark_2: string | null
    nick_remark_3: string | null
  }

  export type NickSpecMaxAggregateOutputType = {
    id: number | null
    nick: string | null
    nick_remark_1: string | null
    nick_remark_2: string | null
    nick_remark_3: string | null
  }

  export type NickSpecCountAggregateOutputType = {
    id: number
    nick: number
    nick_remark_1: number
    nick_remark_2: number
    nick_remark_3: number
    _all: number
  }


  export type NickSpecAvgAggregateInputType = {
    id?: true
  }

  export type NickSpecSumAggregateInputType = {
    id?: true
  }

  export type NickSpecMinAggregateInputType = {
    id?: true
    nick?: true
    nick_remark_1?: true
    nick_remark_2?: true
    nick_remark_3?: true
  }

  export type NickSpecMaxAggregateInputType = {
    id?: true
    nick?: true
    nick_remark_1?: true
    nick_remark_2?: true
    nick_remark_3?: true
  }

  export type NickSpecCountAggregateInputType = {
    id?: true
    nick?: true
    nick_remark_1?: true
    nick_remark_2?: true
    nick_remark_3?: true
    _all?: true
  }

  export type NickSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NickSpec to aggregate.
     */
    where?: NickSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NickSpecs to fetch.
     */
    orderBy?: NickSpecOrderByWithRelationInput | NickSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NickSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NickSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NickSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NickSpecs
    **/
    _count?: true | NickSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NickSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NickSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NickSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NickSpecMaxAggregateInputType
  }

  export type GetNickSpecAggregateType<T extends NickSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateNickSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNickSpec[P]>
      : GetScalarType<T[P], AggregateNickSpec[P]>
  }




  export type NickSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NickSpecWhereInput
    orderBy?: NickSpecOrderByWithAggregationInput | NickSpecOrderByWithAggregationInput[]
    by: NickSpecScalarFieldEnum[] | NickSpecScalarFieldEnum
    having?: NickSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NickSpecCountAggregateInputType | true
    _avg?: NickSpecAvgAggregateInputType
    _sum?: NickSpecSumAggregateInputType
    _min?: NickSpecMinAggregateInputType
    _max?: NickSpecMaxAggregateInputType
  }

  export type NickSpecGroupByOutputType = {
    id: number
    nick: string | null
    nick_remark_1: string | null
    nick_remark_2: string | null
    nick_remark_3: string | null
    _count: NickSpecCountAggregateOutputType | null
    _avg: NickSpecAvgAggregateOutputType | null
    _sum: NickSpecSumAggregateOutputType | null
    _min: NickSpecMinAggregateOutputType | null
    _max: NickSpecMaxAggregateOutputType | null
  }

  type GetNickSpecGroupByPayload<T extends NickSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NickSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NickSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NickSpecGroupByOutputType[P]>
            : GetScalarType<T[P], NickSpecGroupByOutputType[P]>
        }
      >
    >


  export type NickSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nick?: boolean
    nick_remark_1?: boolean
    nick_remark_2?: boolean
    nick_remark_3?: boolean
    machineBasicSpec?: boolean | NickSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["nickSpec"]>

  export type NickSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nick?: boolean
    nick_remark_1?: boolean
    nick_remark_2?: boolean
    nick_remark_3?: boolean
  }, ExtArgs["result"]["nickSpec"]>

  export type NickSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nick?: boolean
    nick_remark_1?: boolean
    nick_remark_2?: boolean
    nick_remark_3?: boolean
  }, ExtArgs["result"]["nickSpec"]>

  export type NickSpecSelectScalar = {
    id?: boolean
    nick?: boolean
    nick_remark_1?: boolean
    nick_remark_2?: boolean
    nick_remark_3?: boolean
  }

  export type NickSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nick" | "nick_remark_1" | "nick_remark_2" | "nick_remark_3", ExtArgs["result"]["nickSpec"]>
  export type NickSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | NickSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type NickSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NickSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NickSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NickSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nick: string | null
      nick_remark_1: string | null
      nick_remark_2: string | null
      nick_remark_3: string | null
    }, ExtArgs["result"]["nickSpec"]>
    composites: {}
  }

  type NickSpecGetPayload<S extends boolean | null | undefined | NickSpecDefaultArgs> = $Result.GetResult<Prisma.$NickSpecPayload, S>

  type NickSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NickSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NickSpecCountAggregateInputType | true
    }

  export interface NickSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NickSpec'], meta: { name: 'NickSpec' } }
    /**
     * Find zero or one NickSpec that matches the filter.
     * @param {NickSpecFindUniqueArgs} args - Arguments to find a NickSpec
     * @example
     * // Get one NickSpec
     * const nickSpec = await prisma.nickSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NickSpecFindUniqueArgs>(args: SelectSubset<T, NickSpecFindUniqueArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NickSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NickSpecFindUniqueOrThrowArgs} args - Arguments to find a NickSpec
     * @example
     * // Get one NickSpec
     * const nickSpec = await prisma.nickSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NickSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, NickSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NickSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecFindFirstArgs} args - Arguments to find a NickSpec
     * @example
     * // Get one NickSpec
     * const nickSpec = await prisma.nickSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NickSpecFindFirstArgs>(args?: SelectSubset<T, NickSpecFindFirstArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NickSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecFindFirstOrThrowArgs} args - Arguments to find a NickSpec
     * @example
     * // Get one NickSpec
     * const nickSpec = await prisma.nickSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NickSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, NickSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NickSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NickSpecs
     * const nickSpecs = await prisma.nickSpec.findMany()
     * 
     * // Get first 10 NickSpecs
     * const nickSpecs = await prisma.nickSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nickSpecWithIdOnly = await prisma.nickSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NickSpecFindManyArgs>(args?: SelectSubset<T, NickSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NickSpec.
     * @param {NickSpecCreateArgs} args - Arguments to create a NickSpec.
     * @example
     * // Create one NickSpec
     * const NickSpec = await prisma.nickSpec.create({
     *   data: {
     *     // ... data to create a NickSpec
     *   }
     * })
     * 
     */
    create<T extends NickSpecCreateArgs>(args: SelectSubset<T, NickSpecCreateArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NickSpecs.
     * @param {NickSpecCreateManyArgs} args - Arguments to create many NickSpecs.
     * @example
     * // Create many NickSpecs
     * const nickSpec = await prisma.nickSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NickSpecCreateManyArgs>(args?: SelectSubset<T, NickSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NickSpecs and returns the data saved in the database.
     * @param {NickSpecCreateManyAndReturnArgs} args - Arguments to create many NickSpecs.
     * @example
     * // Create many NickSpecs
     * const nickSpec = await prisma.nickSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NickSpecs and only return the `id`
     * const nickSpecWithIdOnly = await prisma.nickSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NickSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, NickSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NickSpec.
     * @param {NickSpecDeleteArgs} args - Arguments to delete one NickSpec.
     * @example
     * // Delete one NickSpec
     * const NickSpec = await prisma.nickSpec.delete({
     *   where: {
     *     // ... filter to delete one NickSpec
     *   }
     * })
     * 
     */
    delete<T extends NickSpecDeleteArgs>(args: SelectSubset<T, NickSpecDeleteArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NickSpec.
     * @param {NickSpecUpdateArgs} args - Arguments to update one NickSpec.
     * @example
     * // Update one NickSpec
     * const nickSpec = await prisma.nickSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NickSpecUpdateArgs>(args: SelectSubset<T, NickSpecUpdateArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NickSpecs.
     * @param {NickSpecDeleteManyArgs} args - Arguments to filter NickSpecs to delete.
     * @example
     * // Delete a few NickSpecs
     * const { count } = await prisma.nickSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NickSpecDeleteManyArgs>(args?: SelectSubset<T, NickSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NickSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NickSpecs
     * const nickSpec = await prisma.nickSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NickSpecUpdateManyArgs>(args: SelectSubset<T, NickSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NickSpecs and returns the data updated in the database.
     * @param {NickSpecUpdateManyAndReturnArgs} args - Arguments to update many NickSpecs.
     * @example
     * // Update many NickSpecs
     * const nickSpec = await prisma.nickSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NickSpecs and only return the `id`
     * const nickSpecWithIdOnly = await prisma.nickSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends NickSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, NickSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NickSpec.
     * @param {NickSpecUpsertArgs} args - Arguments to update or create a NickSpec.
     * @example
     * // Update or create a NickSpec
     * const nickSpec = await prisma.nickSpec.upsert({
     *   create: {
     *     // ... data to create a NickSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NickSpec we want to update
     *   }
     * })
     */
    upsert<T extends NickSpecUpsertArgs>(args: SelectSubset<T, NickSpecUpsertArgs<ExtArgs>>): Prisma__NickSpecClient<$Result.GetResult<Prisma.$NickSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NickSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecCountArgs} args - Arguments to filter NickSpecs to count.
     * @example
     * // Count the number of NickSpecs
     * const count = await prisma.nickSpec.count({
     *   where: {
     *     // ... the filter for the NickSpecs we want to count
     *   }
     * })
    **/
    count<T extends NickSpecCountArgs>(
      args?: Subset<T, NickSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NickSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NickSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NickSpecAggregateArgs>(args: Subset<T, NickSpecAggregateArgs>): Prisma.PrismaPromise<GetNickSpecAggregateType<T>>

    /**
     * Group by NickSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NickSpecGroupByArgs} args - Group by arguments.
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
      T extends NickSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NickSpecGroupByArgs['orderBy'] }
        : { orderBy?: NickSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NickSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNickSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NickSpec model
   */
  readonly fields: NickSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NickSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NickSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends NickSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, NickSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NickSpec model
   */
  interface NickSpecFieldRefs {
    readonly id: FieldRef<"NickSpec", 'Int'>
    readonly nick: FieldRef<"NickSpec", 'String'>
    readonly nick_remark_1: FieldRef<"NickSpec", 'String'>
    readonly nick_remark_2: FieldRef<"NickSpec", 'String'>
    readonly nick_remark_3: FieldRef<"NickSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NickSpec findUnique
   */
  export type NickSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * Filter, which NickSpec to fetch.
     */
    where: NickSpecWhereUniqueInput
  }

  /**
   * NickSpec findUniqueOrThrow
   */
  export type NickSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * Filter, which NickSpec to fetch.
     */
    where: NickSpecWhereUniqueInput
  }

  /**
   * NickSpec findFirst
   */
  export type NickSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * Filter, which NickSpec to fetch.
     */
    where?: NickSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NickSpecs to fetch.
     */
    orderBy?: NickSpecOrderByWithRelationInput | NickSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NickSpecs.
     */
    cursor?: NickSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NickSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NickSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NickSpecs.
     */
    distinct?: NickSpecScalarFieldEnum | NickSpecScalarFieldEnum[]
  }

  /**
   * NickSpec findFirstOrThrow
   */
  export type NickSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * Filter, which NickSpec to fetch.
     */
    where?: NickSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NickSpecs to fetch.
     */
    orderBy?: NickSpecOrderByWithRelationInput | NickSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NickSpecs.
     */
    cursor?: NickSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NickSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NickSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NickSpecs.
     */
    distinct?: NickSpecScalarFieldEnum | NickSpecScalarFieldEnum[]
  }

  /**
   * NickSpec findMany
   */
  export type NickSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * Filter, which NickSpecs to fetch.
     */
    where?: NickSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NickSpecs to fetch.
     */
    orderBy?: NickSpecOrderByWithRelationInput | NickSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NickSpecs.
     */
    cursor?: NickSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NickSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NickSpecs.
     */
    skip?: number
    distinct?: NickSpecScalarFieldEnum | NickSpecScalarFieldEnum[]
  }

  /**
   * NickSpec create
   */
  export type NickSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a NickSpec.
     */
    data?: XOR<NickSpecCreateInput, NickSpecUncheckedCreateInput>
  }

  /**
   * NickSpec createMany
   */
  export type NickSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NickSpecs.
     */
    data: NickSpecCreateManyInput | NickSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NickSpec createManyAndReturn
   */
  export type NickSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * The data used to create many NickSpecs.
     */
    data: NickSpecCreateManyInput | NickSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NickSpec update
   */
  export type NickSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a NickSpec.
     */
    data: XOR<NickSpecUpdateInput, NickSpecUncheckedUpdateInput>
    /**
     * Choose, which NickSpec to update.
     */
    where: NickSpecWhereUniqueInput
  }

  /**
   * NickSpec updateMany
   */
  export type NickSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NickSpecs.
     */
    data: XOR<NickSpecUpdateManyMutationInput, NickSpecUncheckedUpdateManyInput>
    /**
     * Filter which NickSpecs to update
     */
    where?: NickSpecWhereInput
    /**
     * Limit how many NickSpecs to update.
     */
    limit?: number
  }

  /**
   * NickSpec updateManyAndReturn
   */
  export type NickSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * The data used to update NickSpecs.
     */
    data: XOR<NickSpecUpdateManyMutationInput, NickSpecUncheckedUpdateManyInput>
    /**
     * Filter which NickSpecs to update
     */
    where?: NickSpecWhereInput
    /**
     * Limit how many NickSpecs to update.
     */
    limit?: number
  }

  /**
   * NickSpec upsert
   */
  export type NickSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the NickSpec to update in case it exists.
     */
    where: NickSpecWhereUniqueInput
    /**
     * In case the NickSpec found by the `where` argument doesn't exist, create a new NickSpec with this data.
     */
    create: XOR<NickSpecCreateInput, NickSpecUncheckedCreateInput>
    /**
     * In case the NickSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NickSpecUpdateInput, NickSpecUncheckedUpdateInput>
  }

  /**
   * NickSpec delete
   */
  export type NickSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
    /**
     * Filter which NickSpec to delete.
     */
    where: NickSpecWhereUniqueInput
  }

  /**
   * NickSpec deleteMany
   */
  export type NickSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NickSpecs to delete
     */
    where?: NickSpecWhereInput
    /**
     * Limit how many NickSpecs to delete.
     */
    limit?: number
  }

  /**
   * NickSpec.machineBasicSpec
   */
  export type NickSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * NickSpec without action
   */
  export type NickSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NickSpec
     */
    select?: NickSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NickSpec
     */
    omit?: NickSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NickSpecInclude<ExtArgs> | null
  }


  /**
   * Model RuleThicknessSpec
   */

  export type AggregateRuleThicknessSpec = {
    _count: RuleThicknessSpecCountAggregateOutputType | null
    _avg: RuleThicknessSpecAvgAggregateOutputType | null
    _sum: RuleThicknessSpecSumAggregateOutputType | null
    _min: RuleThicknessSpecMinAggregateOutputType | null
    _max: RuleThicknessSpecMaxAggregateOutputType | null
  }

  export type RuleThicknessSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type RuleThicknessSpecSumAggregateOutputType = {
    id: number | null
  }

  export type RuleThicknessSpecMinAggregateOutputType = {
    id: number | null
    ef_rule: string | null
    bf_rule: string | null
    af_rule: string | null
    wf_rule: string | null
    gf_rule: string | null
    ff_rule: string | null
    cf_rule: string | null
    paper_350_rule: string | null
  }

  export type RuleThicknessSpecMaxAggregateOutputType = {
    id: number | null
    ef_rule: string | null
    bf_rule: string | null
    af_rule: string | null
    wf_rule: string | null
    gf_rule: string | null
    ff_rule: string | null
    cf_rule: string | null
    paper_350_rule: string | null
  }

  export type RuleThicknessSpecCountAggregateOutputType = {
    id: number
    ef_rule: number
    bf_rule: number
    af_rule: number
    wf_rule: number
    gf_rule: number
    ff_rule: number
    cf_rule: number
    paper_350_rule: number
    _all: number
  }


  export type RuleThicknessSpecAvgAggregateInputType = {
    id?: true
  }

  export type RuleThicknessSpecSumAggregateInputType = {
    id?: true
  }

  export type RuleThicknessSpecMinAggregateInputType = {
    id?: true
    ef_rule?: true
    bf_rule?: true
    af_rule?: true
    wf_rule?: true
    gf_rule?: true
    ff_rule?: true
    cf_rule?: true
    paper_350_rule?: true
  }

  export type RuleThicknessSpecMaxAggregateInputType = {
    id?: true
    ef_rule?: true
    bf_rule?: true
    af_rule?: true
    wf_rule?: true
    gf_rule?: true
    ff_rule?: true
    cf_rule?: true
    paper_350_rule?: true
  }

  export type RuleThicknessSpecCountAggregateInputType = {
    id?: true
    ef_rule?: true
    bf_rule?: true
    af_rule?: true
    wf_rule?: true
    gf_rule?: true
    ff_rule?: true
    cf_rule?: true
    paper_350_rule?: true
    _all?: true
  }

  export type RuleThicknessSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleThicknessSpec to aggregate.
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleThicknessSpecs to fetch.
     */
    orderBy?: RuleThicknessSpecOrderByWithRelationInput | RuleThicknessSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleThicknessSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleThicknessSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleThicknessSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RuleThicknessSpecs
    **/
    _count?: true | RuleThicknessSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleThicknessSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleThicknessSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleThicknessSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleThicknessSpecMaxAggregateInputType
  }

  export type GetRuleThicknessSpecAggregateType<T extends RuleThicknessSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateRuleThicknessSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuleThicknessSpec[P]>
      : GetScalarType<T[P], AggregateRuleThicknessSpec[P]>
  }




  export type RuleThicknessSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleThicknessSpecWhereInput
    orderBy?: RuleThicknessSpecOrderByWithAggregationInput | RuleThicknessSpecOrderByWithAggregationInput[]
    by: RuleThicknessSpecScalarFieldEnum[] | RuleThicknessSpecScalarFieldEnum
    having?: RuleThicknessSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleThicknessSpecCountAggregateInputType | true
    _avg?: RuleThicknessSpecAvgAggregateInputType
    _sum?: RuleThicknessSpecSumAggregateInputType
    _min?: RuleThicknessSpecMinAggregateInputType
    _max?: RuleThicknessSpecMaxAggregateInputType
  }

  export type RuleThicknessSpecGroupByOutputType = {
    id: number
    ef_rule: string | null
    bf_rule: string | null
    af_rule: string | null
    wf_rule: string | null
    gf_rule: string | null
    ff_rule: string | null
    cf_rule: string | null
    paper_350_rule: string | null
    _count: RuleThicknessSpecCountAggregateOutputType | null
    _avg: RuleThicknessSpecAvgAggregateOutputType | null
    _sum: RuleThicknessSpecSumAggregateOutputType | null
    _min: RuleThicknessSpecMinAggregateOutputType | null
    _max: RuleThicknessSpecMaxAggregateOutputType | null
  }

  type GetRuleThicknessSpecGroupByPayload<T extends RuleThicknessSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleThicknessSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleThicknessSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleThicknessSpecGroupByOutputType[P]>
            : GetScalarType<T[P], RuleThicknessSpecGroupByOutputType[P]>
        }
      >
    >


  export type RuleThicknessSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ef_rule?: boolean
    bf_rule?: boolean
    af_rule?: boolean
    wf_rule?: boolean
    gf_rule?: boolean
    ff_rule?: boolean
    cf_rule?: boolean
    paper_350_rule?: boolean
    machineBasicSpec?: boolean | RuleThicknessSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["ruleThicknessSpec"]>

  export type RuleThicknessSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ef_rule?: boolean
    bf_rule?: boolean
    af_rule?: boolean
    wf_rule?: boolean
    gf_rule?: boolean
    ff_rule?: boolean
    cf_rule?: boolean
    paper_350_rule?: boolean
  }, ExtArgs["result"]["ruleThicknessSpec"]>

  export type RuleThicknessSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ef_rule?: boolean
    bf_rule?: boolean
    af_rule?: boolean
    wf_rule?: boolean
    gf_rule?: boolean
    ff_rule?: boolean
    cf_rule?: boolean
    paper_350_rule?: boolean
  }, ExtArgs["result"]["ruleThicknessSpec"]>

  export type RuleThicknessSpecSelectScalar = {
    id?: boolean
    ef_rule?: boolean
    bf_rule?: boolean
    af_rule?: boolean
    wf_rule?: boolean
    gf_rule?: boolean
    ff_rule?: boolean
    cf_rule?: boolean
    paper_350_rule?: boolean
  }

  export type RuleThicknessSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ef_rule" | "bf_rule" | "af_rule" | "wf_rule" | "gf_rule" | "ff_rule" | "cf_rule" | "paper_350_rule", ExtArgs["result"]["ruleThicknessSpec"]>
  export type RuleThicknessSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | RuleThicknessSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type RuleThicknessSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RuleThicknessSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RuleThicknessSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RuleThicknessSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ef_rule: string | null
      bf_rule: string | null
      af_rule: string | null
      wf_rule: string | null
      gf_rule: string | null
      ff_rule: string | null
      cf_rule: string | null
      paper_350_rule: string | null
    }, ExtArgs["result"]["ruleThicknessSpec"]>
    composites: {}
  }

  type RuleThicknessSpecGetPayload<S extends boolean | null | undefined | RuleThicknessSpecDefaultArgs> = $Result.GetResult<Prisma.$RuleThicknessSpecPayload, S>

  type RuleThicknessSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleThicknessSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleThicknessSpecCountAggregateInputType | true
    }

  export interface RuleThicknessSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RuleThicknessSpec'], meta: { name: 'RuleThicknessSpec' } }
    /**
     * Find zero or one RuleThicknessSpec that matches the filter.
     * @param {RuleThicknessSpecFindUniqueArgs} args - Arguments to find a RuleThicknessSpec
     * @example
     * // Get one RuleThicknessSpec
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleThicknessSpecFindUniqueArgs>(args: SelectSubset<T, RuleThicknessSpecFindUniqueArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RuleThicknessSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleThicknessSpecFindUniqueOrThrowArgs} args - Arguments to find a RuleThicknessSpec
     * @example
     * // Get one RuleThicknessSpec
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleThicknessSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleThicknessSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleThicknessSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecFindFirstArgs} args - Arguments to find a RuleThicknessSpec
     * @example
     * // Get one RuleThicknessSpec
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleThicknessSpecFindFirstArgs>(args?: SelectSubset<T, RuleThicknessSpecFindFirstArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RuleThicknessSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecFindFirstOrThrowArgs} args - Arguments to find a RuleThicknessSpec
     * @example
     * // Get one RuleThicknessSpec
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleThicknessSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleThicknessSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RuleThicknessSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RuleThicknessSpecs
     * const ruleThicknessSpecs = await prisma.ruleThicknessSpec.findMany()
     * 
     * // Get first 10 RuleThicknessSpecs
     * const ruleThicknessSpecs = await prisma.ruleThicknessSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleThicknessSpecWithIdOnly = await prisma.ruleThicknessSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleThicknessSpecFindManyArgs>(args?: SelectSubset<T, RuleThicknessSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RuleThicknessSpec.
     * @param {RuleThicknessSpecCreateArgs} args - Arguments to create a RuleThicknessSpec.
     * @example
     * // Create one RuleThicknessSpec
     * const RuleThicknessSpec = await prisma.ruleThicknessSpec.create({
     *   data: {
     *     // ... data to create a RuleThicknessSpec
     *   }
     * })
     * 
     */
    create<T extends RuleThicknessSpecCreateArgs>(args: SelectSubset<T, RuleThicknessSpecCreateArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RuleThicknessSpecs.
     * @param {RuleThicknessSpecCreateManyArgs} args - Arguments to create many RuleThicknessSpecs.
     * @example
     * // Create many RuleThicknessSpecs
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleThicknessSpecCreateManyArgs>(args?: SelectSubset<T, RuleThicknessSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RuleThicknessSpecs and returns the data saved in the database.
     * @param {RuleThicknessSpecCreateManyAndReturnArgs} args - Arguments to create many RuleThicknessSpecs.
     * @example
     * // Create many RuleThicknessSpecs
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RuleThicknessSpecs and only return the `id`
     * const ruleThicknessSpecWithIdOnly = await prisma.ruleThicknessSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleThicknessSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleThicknessSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RuleThicknessSpec.
     * @param {RuleThicknessSpecDeleteArgs} args - Arguments to delete one RuleThicknessSpec.
     * @example
     * // Delete one RuleThicknessSpec
     * const RuleThicknessSpec = await prisma.ruleThicknessSpec.delete({
     *   where: {
     *     // ... filter to delete one RuleThicknessSpec
     *   }
     * })
     * 
     */
    delete<T extends RuleThicknessSpecDeleteArgs>(args: SelectSubset<T, RuleThicknessSpecDeleteArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RuleThicknessSpec.
     * @param {RuleThicknessSpecUpdateArgs} args - Arguments to update one RuleThicknessSpec.
     * @example
     * // Update one RuleThicknessSpec
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleThicknessSpecUpdateArgs>(args: SelectSubset<T, RuleThicknessSpecUpdateArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RuleThicknessSpecs.
     * @param {RuleThicknessSpecDeleteManyArgs} args - Arguments to filter RuleThicknessSpecs to delete.
     * @example
     * // Delete a few RuleThicknessSpecs
     * const { count } = await prisma.ruleThicknessSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleThicknessSpecDeleteManyArgs>(args?: SelectSubset<T, RuleThicknessSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleThicknessSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RuleThicknessSpecs
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleThicknessSpecUpdateManyArgs>(args: SelectSubset<T, RuleThicknessSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RuleThicknessSpecs and returns the data updated in the database.
     * @param {RuleThicknessSpecUpdateManyAndReturnArgs} args - Arguments to update many RuleThicknessSpecs.
     * @example
     * // Update many RuleThicknessSpecs
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RuleThicknessSpecs and only return the `id`
     * const ruleThicknessSpecWithIdOnly = await prisma.ruleThicknessSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleThicknessSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleThicknessSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RuleThicknessSpec.
     * @param {RuleThicknessSpecUpsertArgs} args - Arguments to update or create a RuleThicknessSpec.
     * @example
     * // Update or create a RuleThicknessSpec
     * const ruleThicknessSpec = await prisma.ruleThicknessSpec.upsert({
     *   create: {
     *     // ... data to create a RuleThicknessSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RuleThicknessSpec we want to update
     *   }
     * })
     */
    upsert<T extends RuleThicknessSpecUpsertArgs>(args: SelectSubset<T, RuleThicknessSpecUpsertArgs<ExtArgs>>): Prisma__RuleThicknessSpecClient<$Result.GetResult<Prisma.$RuleThicknessSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RuleThicknessSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecCountArgs} args - Arguments to filter RuleThicknessSpecs to count.
     * @example
     * // Count the number of RuleThicknessSpecs
     * const count = await prisma.ruleThicknessSpec.count({
     *   where: {
     *     // ... the filter for the RuleThicknessSpecs we want to count
     *   }
     * })
    **/
    count<T extends RuleThicknessSpecCountArgs>(
      args?: Subset<T, RuleThicknessSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleThicknessSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RuleThicknessSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleThicknessSpecAggregateArgs>(args: Subset<T, RuleThicknessSpecAggregateArgs>): Prisma.PrismaPromise<GetRuleThicknessSpecAggregateType<T>>

    /**
     * Group by RuleThicknessSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleThicknessSpecGroupByArgs} args - Group by arguments.
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
      T extends RuleThicknessSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleThicknessSpecGroupByArgs['orderBy'] }
        : { orderBy?: RuleThicknessSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleThicknessSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleThicknessSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RuleThicknessSpec model
   */
  readonly fields: RuleThicknessSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RuleThicknessSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleThicknessSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends RuleThicknessSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, RuleThicknessSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RuleThicknessSpec model
   */
  interface RuleThicknessSpecFieldRefs {
    readonly id: FieldRef<"RuleThicknessSpec", 'Int'>
    readonly ef_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly bf_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly af_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly wf_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly gf_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly ff_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly cf_rule: FieldRef<"RuleThicknessSpec", 'String'>
    readonly paper_350_rule: FieldRef<"RuleThicknessSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RuleThicknessSpec findUnique
   */
  export type RuleThicknessSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleThicknessSpec to fetch.
     */
    where: RuleThicknessSpecWhereUniqueInput
  }

  /**
   * RuleThicknessSpec findUniqueOrThrow
   */
  export type RuleThicknessSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleThicknessSpec to fetch.
     */
    where: RuleThicknessSpecWhereUniqueInput
  }

  /**
   * RuleThicknessSpec findFirst
   */
  export type RuleThicknessSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleThicknessSpec to fetch.
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleThicknessSpecs to fetch.
     */
    orderBy?: RuleThicknessSpecOrderByWithRelationInput | RuleThicknessSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleThicknessSpecs.
     */
    cursor?: RuleThicknessSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleThicknessSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleThicknessSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleThicknessSpecs.
     */
    distinct?: RuleThicknessSpecScalarFieldEnum | RuleThicknessSpecScalarFieldEnum[]
  }

  /**
   * RuleThicknessSpec findFirstOrThrow
   */
  export type RuleThicknessSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleThicknessSpec to fetch.
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleThicknessSpecs to fetch.
     */
    orderBy?: RuleThicknessSpecOrderByWithRelationInput | RuleThicknessSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RuleThicknessSpecs.
     */
    cursor?: RuleThicknessSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleThicknessSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleThicknessSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RuleThicknessSpecs.
     */
    distinct?: RuleThicknessSpecScalarFieldEnum | RuleThicknessSpecScalarFieldEnum[]
  }

  /**
   * RuleThicknessSpec findMany
   */
  export type RuleThicknessSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * Filter, which RuleThicknessSpecs to fetch.
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RuleThicknessSpecs to fetch.
     */
    orderBy?: RuleThicknessSpecOrderByWithRelationInput | RuleThicknessSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RuleThicknessSpecs.
     */
    cursor?: RuleThicknessSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RuleThicknessSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RuleThicknessSpecs.
     */
    skip?: number
    distinct?: RuleThicknessSpecScalarFieldEnum | RuleThicknessSpecScalarFieldEnum[]
  }

  /**
   * RuleThicknessSpec create
   */
  export type RuleThicknessSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a RuleThicknessSpec.
     */
    data?: XOR<RuleThicknessSpecCreateInput, RuleThicknessSpecUncheckedCreateInput>
  }

  /**
   * RuleThicknessSpec createMany
   */
  export type RuleThicknessSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RuleThicknessSpecs.
     */
    data: RuleThicknessSpecCreateManyInput | RuleThicknessSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleThicknessSpec createManyAndReturn
   */
  export type RuleThicknessSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * The data used to create many RuleThicknessSpecs.
     */
    data: RuleThicknessSpecCreateManyInput | RuleThicknessSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RuleThicknessSpec update
   */
  export type RuleThicknessSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a RuleThicknessSpec.
     */
    data: XOR<RuleThicknessSpecUpdateInput, RuleThicknessSpecUncheckedUpdateInput>
    /**
     * Choose, which RuleThicknessSpec to update.
     */
    where: RuleThicknessSpecWhereUniqueInput
  }

  /**
   * RuleThicknessSpec updateMany
   */
  export type RuleThicknessSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RuleThicknessSpecs.
     */
    data: XOR<RuleThicknessSpecUpdateManyMutationInput, RuleThicknessSpecUncheckedUpdateManyInput>
    /**
     * Filter which RuleThicknessSpecs to update
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * Limit how many RuleThicknessSpecs to update.
     */
    limit?: number
  }

  /**
   * RuleThicknessSpec updateManyAndReturn
   */
  export type RuleThicknessSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * The data used to update RuleThicknessSpecs.
     */
    data: XOR<RuleThicknessSpecUpdateManyMutationInput, RuleThicknessSpecUncheckedUpdateManyInput>
    /**
     * Filter which RuleThicknessSpecs to update
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * Limit how many RuleThicknessSpecs to update.
     */
    limit?: number
  }

  /**
   * RuleThicknessSpec upsert
   */
  export type RuleThicknessSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the RuleThicknessSpec to update in case it exists.
     */
    where: RuleThicknessSpecWhereUniqueInput
    /**
     * In case the RuleThicknessSpec found by the `where` argument doesn't exist, create a new RuleThicknessSpec with this data.
     */
    create: XOR<RuleThicknessSpecCreateInput, RuleThicknessSpecUncheckedCreateInput>
    /**
     * In case the RuleThicknessSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleThicknessSpecUpdateInput, RuleThicknessSpecUncheckedUpdateInput>
  }

  /**
   * RuleThicknessSpec delete
   */
  export type RuleThicknessSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
    /**
     * Filter which RuleThicknessSpec to delete.
     */
    where: RuleThicknessSpecWhereUniqueInput
  }

  /**
   * RuleThicknessSpec deleteMany
   */
  export type RuleThicknessSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RuleThicknessSpecs to delete
     */
    where?: RuleThicknessSpecWhereInput
    /**
     * Limit how many RuleThicknessSpecs to delete.
     */
    limit?: number
  }

  /**
   * RuleThicknessSpec.machineBasicSpec
   */
  export type RuleThicknessSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * RuleThicknessSpec without action
   */
  export type RuleThicknessSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleThicknessSpec
     */
    select?: RuleThicknessSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RuleThicknessSpec
     */
    omit?: RuleThicknessSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleThicknessSpecInclude<ExtArgs> | null
  }


  /**
   * Model RemarkSpec
   */

  export type AggregateRemarkSpec = {
    _count: RemarkSpecCountAggregateOutputType | null
    _avg: RemarkSpecAvgAggregateOutputType | null
    _sum: RemarkSpecSumAggregateOutputType | null
    _min: RemarkSpecMinAggregateOutputType | null
    _max: RemarkSpecMaxAggregateOutputType | null
  }

  export type RemarkSpecAvgAggregateOutputType = {
    id: number | null
  }

  export type RemarkSpecSumAggregateOutputType = {
    id: number | null
  }

  export type RemarkSpecMinAggregateOutputType = {
    id: number | null
    remark_1: string | null
    remark_2: string | null
    remark_3: string | null
    stripper_first_suteba: string | null
    air_hammer_first_suteba: string | null
    ueda_first_suteba: string | null
  }

  export type RemarkSpecMaxAggregateOutputType = {
    id: number | null
    remark_1: string | null
    remark_2: string | null
    remark_3: string | null
    stripper_first_suteba: string | null
    air_hammer_first_suteba: string | null
    ueda_first_suteba: string | null
  }

  export type RemarkSpecCountAggregateOutputType = {
    id: number
    remark_1: number
    remark_2: number
    remark_3: number
    stripper_first_suteba: number
    air_hammer_first_suteba: number
    ueda_first_suteba: number
    _all: number
  }


  export type RemarkSpecAvgAggregateInputType = {
    id?: true
  }

  export type RemarkSpecSumAggregateInputType = {
    id?: true
  }

  export type RemarkSpecMinAggregateInputType = {
    id?: true
    remark_1?: true
    remark_2?: true
    remark_3?: true
    stripper_first_suteba?: true
    air_hammer_first_suteba?: true
    ueda_first_suteba?: true
  }

  export type RemarkSpecMaxAggregateInputType = {
    id?: true
    remark_1?: true
    remark_2?: true
    remark_3?: true
    stripper_first_suteba?: true
    air_hammer_first_suteba?: true
    ueda_first_suteba?: true
  }

  export type RemarkSpecCountAggregateInputType = {
    id?: true
    remark_1?: true
    remark_2?: true
    remark_3?: true
    stripper_first_suteba?: true
    air_hammer_first_suteba?: true
    ueda_first_suteba?: true
    _all?: true
  }

  export type RemarkSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemarkSpec to aggregate.
     */
    where?: RemarkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkSpecs to fetch.
     */
    orderBy?: RemarkSpecOrderByWithRelationInput | RemarkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemarkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RemarkSpecs
    **/
    _count?: true | RemarkSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemarkSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemarkSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemarkSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemarkSpecMaxAggregateInputType
  }

  export type GetRemarkSpecAggregateType<T extends RemarkSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateRemarkSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemarkSpec[P]>
      : GetScalarType<T[P], AggregateRemarkSpec[P]>
  }




  export type RemarkSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemarkSpecWhereInput
    orderBy?: RemarkSpecOrderByWithAggregationInput | RemarkSpecOrderByWithAggregationInput[]
    by: RemarkSpecScalarFieldEnum[] | RemarkSpecScalarFieldEnum
    having?: RemarkSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemarkSpecCountAggregateInputType | true
    _avg?: RemarkSpecAvgAggregateInputType
    _sum?: RemarkSpecSumAggregateInputType
    _min?: RemarkSpecMinAggregateInputType
    _max?: RemarkSpecMaxAggregateInputType
  }

  export type RemarkSpecGroupByOutputType = {
    id: number
    remark_1: string | null
    remark_2: string | null
    remark_3: string | null
    stripper_first_suteba: string | null
    air_hammer_first_suteba: string | null
    ueda_first_suteba: string | null
    _count: RemarkSpecCountAggregateOutputType | null
    _avg: RemarkSpecAvgAggregateOutputType | null
    _sum: RemarkSpecSumAggregateOutputType | null
    _min: RemarkSpecMinAggregateOutputType | null
    _max: RemarkSpecMaxAggregateOutputType | null
  }

  type GetRemarkSpecGroupByPayload<T extends RemarkSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemarkSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemarkSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemarkSpecGroupByOutputType[P]>
            : GetScalarType<T[P], RemarkSpecGroupByOutputType[P]>
        }
      >
    >


  export type RemarkSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remark_1?: boolean
    remark_2?: boolean
    remark_3?: boolean
    stripper_first_suteba?: boolean
    air_hammer_first_suteba?: boolean
    ueda_first_suteba?: boolean
    machineBasicSpec?: boolean | RemarkSpec$machineBasicSpecArgs<ExtArgs>
  }, ExtArgs["result"]["remarkSpec"]>

  export type RemarkSpecSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remark_1?: boolean
    remark_2?: boolean
    remark_3?: boolean
    stripper_first_suteba?: boolean
    air_hammer_first_suteba?: boolean
    ueda_first_suteba?: boolean
  }, ExtArgs["result"]["remarkSpec"]>

  export type RemarkSpecSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    remark_1?: boolean
    remark_2?: boolean
    remark_3?: boolean
    stripper_first_suteba?: boolean
    air_hammer_first_suteba?: boolean
    ueda_first_suteba?: boolean
  }, ExtArgs["result"]["remarkSpec"]>

  export type RemarkSpecSelectScalar = {
    id?: boolean
    remark_1?: boolean
    remark_2?: boolean
    remark_3?: boolean
    stripper_first_suteba?: boolean
    air_hammer_first_suteba?: boolean
    ueda_first_suteba?: boolean
  }

  export type RemarkSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "remark_1" | "remark_2" | "remark_3" | "stripper_first_suteba" | "air_hammer_first_suteba" | "ueda_first_suteba", ExtArgs["result"]["remarkSpec"]>
  export type RemarkSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    machineBasicSpec?: boolean | RemarkSpec$machineBasicSpecArgs<ExtArgs>
  }
  export type RemarkSpecIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RemarkSpecIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RemarkSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RemarkSpec"
    objects: {
      machineBasicSpec: Prisma.$MachineBasicSpecPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      remark_1: string | null
      remark_2: string | null
      remark_3: string | null
      stripper_first_suteba: string | null
      air_hammer_first_suteba: string | null
      ueda_first_suteba: string | null
    }, ExtArgs["result"]["remarkSpec"]>
    composites: {}
  }

  type RemarkSpecGetPayload<S extends boolean | null | undefined | RemarkSpecDefaultArgs> = $Result.GetResult<Prisma.$RemarkSpecPayload, S>

  type RemarkSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemarkSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemarkSpecCountAggregateInputType | true
    }

  export interface RemarkSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RemarkSpec'], meta: { name: 'RemarkSpec' } }
    /**
     * Find zero or one RemarkSpec that matches the filter.
     * @param {RemarkSpecFindUniqueArgs} args - Arguments to find a RemarkSpec
     * @example
     * // Get one RemarkSpec
     * const remarkSpec = await prisma.remarkSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemarkSpecFindUniqueArgs>(args: SelectSubset<T, RemarkSpecFindUniqueArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RemarkSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemarkSpecFindUniqueOrThrowArgs} args - Arguments to find a RemarkSpec
     * @example
     * // Get one RemarkSpec
     * const remarkSpec = await prisma.remarkSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemarkSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, RemarkSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemarkSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecFindFirstArgs} args - Arguments to find a RemarkSpec
     * @example
     * // Get one RemarkSpec
     * const remarkSpec = await prisma.remarkSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemarkSpecFindFirstArgs>(args?: SelectSubset<T, RemarkSpecFindFirstArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RemarkSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecFindFirstOrThrowArgs} args - Arguments to find a RemarkSpec
     * @example
     * // Get one RemarkSpec
     * const remarkSpec = await prisma.remarkSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemarkSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, RemarkSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RemarkSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RemarkSpecs
     * const remarkSpecs = await prisma.remarkSpec.findMany()
     * 
     * // Get first 10 RemarkSpecs
     * const remarkSpecs = await prisma.remarkSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remarkSpecWithIdOnly = await prisma.remarkSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemarkSpecFindManyArgs>(args?: SelectSubset<T, RemarkSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RemarkSpec.
     * @param {RemarkSpecCreateArgs} args - Arguments to create a RemarkSpec.
     * @example
     * // Create one RemarkSpec
     * const RemarkSpec = await prisma.remarkSpec.create({
     *   data: {
     *     // ... data to create a RemarkSpec
     *   }
     * })
     * 
     */
    create<T extends RemarkSpecCreateArgs>(args: SelectSubset<T, RemarkSpecCreateArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RemarkSpecs.
     * @param {RemarkSpecCreateManyArgs} args - Arguments to create many RemarkSpecs.
     * @example
     * // Create many RemarkSpecs
     * const remarkSpec = await prisma.remarkSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemarkSpecCreateManyArgs>(args?: SelectSubset<T, RemarkSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RemarkSpecs and returns the data saved in the database.
     * @param {RemarkSpecCreateManyAndReturnArgs} args - Arguments to create many RemarkSpecs.
     * @example
     * // Create many RemarkSpecs
     * const remarkSpec = await prisma.remarkSpec.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RemarkSpecs and only return the `id`
     * const remarkSpecWithIdOnly = await prisma.remarkSpec.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemarkSpecCreateManyAndReturnArgs>(args?: SelectSubset<T, RemarkSpecCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RemarkSpec.
     * @param {RemarkSpecDeleteArgs} args - Arguments to delete one RemarkSpec.
     * @example
     * // Delete one RemarkSpec
     * const RemarkSpec = await prisma.remarkSpec.delete({
     *   where: {
     *     // ... filter to delete one RemarkSpec
     *   }
     * })
     * 
     */
    delete<T extends RemarkSpecDeleteArgs>(args: SelectSubset<T, RemarkSpecDeleteArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RemarkSpec.
     * @param {RemarkSpecUpdateArgs} args - Arguments to update one RemarkSpec.
     * @example
     * // Update one RemarkSpec
     * const remarkSpec = await prisma.remarkSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemarkSpecUpdateArgs>(args: SelectSubset<T, RemarkSpecUpdateArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RemarkSpecs.
     * @param {RemarkSpecDeleteManyArgs} args - Arguments to filter RemarkSpecs to delete.
     * @example
     * // Delete a few RemarkSpecs
     * const { count } = await prisma.remarkSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemarkSpecDeleteManyArgs>(args?: SelectSubset<T, RemarkSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemarkSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RemarkSpecs
     * const remarkSpec = await prisma.remarkSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemarkSpecUpdateManyArgs>(args: SelectSubset<T, RemarkSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RemarkSpecs and returns the data updated in the database.
     * @param {RemarkSpecUpdateManyAndReturnArgs} args - Arguments to update many RemarkSpecs.
     * @example
     * // Update many RemarkSpecs
     * const remarkSpec = await prisma.remarkSpec.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RemarkSpecs and only return the `id`
     * const remarkSpecWithIdOnly = await prisma.remarkSpec.updateManyAndReturn({
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
    updateManyAndReturn<T extends RemarkSpecUpdateManyAndReturnArgs>(args: SelectSubset<T, RemarkSpecUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RemarkSpec.
     * @param {RemarkSpecUpsertArgs} args - Arguments to update or create a RemarkSpec.
     * @example
     * // Update or create a RemarkSpec
     * const remarkSpec = await prisma.remarkSpec.upsert({
     *   create: {
     *     // ... data to create a RemarkSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RemarkSpec we want to update
     *   }
     * })
     */
    upsert<T extends RemarkSpecUpsertArgs>(args: SelectSubset<T, RemarkSpecUpsertArgs<ExtArgs>>): Prisma__RemarkSpecClient<$Result.GetResult<Prisma.$RemarkSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RemarkSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecCountArgs} args - Arguments to filter RemarkSpecs to count.
     * @example
     * // Count the number of RemarkSpecs
     * const count = await prisma.remarkSpec.count({
     *   where: {
     *     // ... the filter for the RemarkSpecs we want to count
     *   }
     * })
    **/
    count<T extends RemarkSpecCountArgs>(
      args?: Subset<T, RemarkSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemarkSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RemarkSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemarkSpecAggregateArgs>(args: Subset<T, RemarkSpecAggregateArgs>): Prisma.PrismaPromise<GetRemarkSpecAggregateType<T>>

    /**
     * Group by RemarkSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemarkSpecGroupByArgs} args - Group by arguments.
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
      T extends RemarkSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemarkSpecGroupByArgs['orderBy'] }
        : { orderBy?: RemarkSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RemarkSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemarkSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RemarkSpec model
   */
  readonly fields: RemarkSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RemarkSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemarkSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    machineBasicSpec<T extends RemarkSpec$machineBasicSpecArgs<ExtArgs> = {}>(args?: Subset<T, RemarkSpec$machineBasicSpecArgs<ExtArgs>>): Prisma__MachineBasicSpecClient<$Result.GetResult<Prisma.$MachineBasicSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RemarkSpec model
   */
  interface RemarkSpecFieldRefs {
    readonly id: FieldRef<"RemarkSpec", 'Int'>
    readonly remark_1: FieldRef<"RemarkSpec", 'String'>
    readonly remark_2: FieldRef<"RemarkSpec", 'String'>
    readonly remark_3: FieldRef<"RemarkSpec", 'String'>
    readonly stripper_first_suteba: FieldRef<"RemarkSpec", 'String'>
    readonly air_hammer_first_suteba: FieldRef<"RemarkSpec", 'String'>
    readonly ueda_first_suteba: FieldRef<"RemarkSpec", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RemarkSpec findUnique
   */
  export type RemarkSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * Filter, which RemarkSpec to fetch.
     */
    where: RemarkSpecWhereUniqueInput
  }

  /**
   * RemarkSpec findUniqueOrThrow
   */
  export type RemarkSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * Filter, which RemarkSpec to fetch.
     */
    where: RemarkSpecWhereUniqueInput
  }

  /**
   * RemarkSpec findFirst
   */
  export type RemarkSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * Filter, which RemarkSpec to fetch.
     */
    where?: RemarkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkSpecs to fetch.
     */
    orderBy?: RemarkSpecOrderByWithRelationInput | RemarkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemarkSpecs.
     */
    cursor?: RemarkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemarkSpecs.
     */
    distinct?: RemarkSpecScalarFieldEnum | RemarkSpecScalarFieldEnum[]
  }

  /**
   * RemarkSpec findFirstOrThrow
   */
  export type RemarkSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * Filter, which RemarkSpec to fetch.
     */
    where?: RemarkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkSpecs to fetch.
     */
    orderBy?: RemarkSpecOrderByWithRelationInput | RemarkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RemarkSpecs.
     */
    cursor?: RemarkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RemarkSpecs.
     */
    distinct?: RemarkSpecScalarFieldEnum | RemarkSpecScalarFieldEnum[]
  }

  /**
   * RemarkSpec findMany
   */
  export type RemarkSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * Filter, which RemarkSpecs to fetch.
     */
    where?: RemarkSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RemarkSpecs to fetch.
     */
    orderBy?: RemarkSpecOrderByWithRelationInput | RemarkSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RemarkSpecs.
     */
    cursor?: RemarkSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RemarkSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RemarkSpecs.
     */
    skip?: number
    distinct?: RemarkSpecScalarFieldEnum | RemarkSpecScalarFieldEnum[]
  }

  /**
   * RemarkSpec create
   */
  export type RemarkSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a RemarkSpec.
     */
    data?: XOR<RemarkSpecCreateInput, RemarkSpecUncheckedCreateInput>
  }

  /**
   * RemarkSpec createMany
   */
  export type RemarkSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RemarkSpecs.
     */
    data: RemarkSpecCreateManyInput | RemarkSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemarkSpec createManyAndReturn
   */
  export type RemarkSpecCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * The data used to create many RemarkSpecs.
     */
    data: RemarkSpecCreateManyInput | RemarkSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RemarkSpec update
   */
  export type RemarkSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a RemarkSpec.
     */
    data: XOR<RemarkSpecUpdateInput, RemarkSpecUncheckedUpdateInput>
    /**
     * Choose, which RemarkSpec to update.
     */
    where: RemarkSpecWhereUniqueInput
  }

  /**
   * RemarkSpec updateMany
   */
  export type RemarkSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RemarkSpecs.
     */
    data: XOR<RemarkSpecUpdateManyMutationInput, RemarkSpecUncheckedUpdateManyInput>
    /**
     * Filter which RemarkSpecs to update
     */
    where?: RemarkSpecWhereInput
    /**
     * Limit how many RemarkSpecs to update.
     */
    limit?: number
  }

  /**
   * RemarkSpec updateManyAndReturn
   */
  export type RemarkSpecUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * The data used to update RemarkSpecs.
     */
    data: XOR<RemarkSpecUpdateManyMutationInput, RemarkSpecUncheckedUpdateManyInput>
    /**
     * Filter which RemarkSpecs to update
     */
    where?: RemarkSpecWhereInput
    /**
     * Limit how many RemarkSpecs to update.
     */
    limit?: number
  }

  /**
   * RemarkSpec upsert
   */
  export type RemarkSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the RemarkSpec to update in case it exists.
     */
    where: RemarkSpecWhereUniqueInput
    /**
     * In case the RemarkSpec found by the `where` argument doesn't exist, create a new RemarkSpec with this data.
     */
    create: XOR<RemarkSpecCreateInput, RemarkSpecUncheckedCreateInput>
    /**
     * In case the RemarkSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemarkSpecUpdateInput, RemarkSpecUncheckedUpdateInput>
  }

  /**
   * RemarkSpec delete
   */
  export type RemarkSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
    /**
     * Filter which RemarkSpec to delete.
     */
    where: RemarkSpecWhereUniqueInput
  }

  /**
   * RemarkSpec deleteMany
   */
  export type RemarkSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RemarkSpecs to delete
     */
    where?: RemarkSpecWhereInput
    /**
     * Limit how many RemarkSpecs to delete.
     */
    limit?: number
  }

  /**
   * RemarkSpec.machineBasicSpec
   */
  export type RemarkSpec$machineBasicSpecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MachineBasicSpec
     */
    select?: MachineBasicSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MachineBasicSpec
     */
    omit?: MachineBasicSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MachineBasicSpecInclude<ExtArgs> | null
    where?: MachineBasicSpecWhereInput
  }

  /**
   * RemarkSpec without action
   */
  export type RemarkSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemarkSpec
     */
    select?: RemarkSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RemarkSpec
     */
    omit?: RemarkSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemarkSpecInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    auth_id: 'auth_id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const MachineBasicSpecScalarFieldEnum: {
    id: 'id',
    machineManufacturerId: 'machineManufacturerId',
    machineManufacturerName: 'machineManufacturerName',
    machineName: 'machineName',
    machineType: 'machineType',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    kuwaeSpecId: 'kuwaeSpecId',
    detailSpecId: 'detailSpecId',
    filmSpecId: 'filmSpecId',
    ruleSpecId: 'ruleSpecId',
    sheetBaseSpecId: 'sheetBaseSpecId',
    sutebaSpecId: 'sutebaSpecId',
    spongeCorkSpecId: 'spongeCorkSpecId',
    centerMetalSpecId: 'centerMetalSpecId',
    nickSpecId: 'nickSpecId',
    ruleThicknessSpecId: 'ruleThicknessSpecId',
    remarkSpecId: 'remarkSpecId'
  };

  export type MachineBasicSpecScalarFieldEnum = (typeof MachineBasicSpecScalarFieldEnum)[keyof typeof MachineBasicSpecScalarFieldEnum]


  export const KuwaeSpecScalarFieldEnum: {
    id: 'id',
    die_kuwae: 'die_kuwae',
    kuwae_cutting_thickness: 'kuwae_cutting_thickness',
    kuwae_cutting_width: 'kuwae_cutting_width',
    kuwae_angle: 'kuwae_angle',
    back_kuwae_angle: 'back_kuwae_angle'
  };

  export type KuwaeSpecScalarFieldEnum = (typeof KuwaeSpecScalarFieldEnum)[keyof typeof KuwaeSpecScalarFieldEnum]


  export const DetailSpecScalarFieldEnum: {
    id: 'id',
    mounting_hole: 'mounting_hole',
    nail_nut: 'nail_nut',
    one_touch_bar: 'one_touch_bar',
    stripper: 'stripper',
    blanking: 'blanking',
    under_pin: 'under_pin',
    cad_plate: 'cad_plate',
    cad_plate_remark: 'cad_plate_remark'
  };

  export type DetailSpecScalarFieldEnum = (typeof DetailSpecScalarFieldEnum)[keyof typeof DetailSpecScalarFieldEnum]


  export const FilmSpecScalarFieldEnum: {
    id: 'id',
    film: 'film',
    film_thickness: 'film_thickness'
  };

  export type FilmSpecScalarFieldEnum = (typeof FilmSpecScalarFieldEnum)[keyof typeof FilmSpecScalarFieldEnum]


  export const RuleSpecScalarFieldEnum: {
    id: 'id',
    balance_rule: 'balance_rule',
    inside_sheet_rule: 'inside_sheet_rule'
  };

  export type RuleSpecScalarFieldEnum = (typeof RuleSpecScalarFieldEnum)[keyof typeof RuleSpecScalarFieldEnum]


  export const SheetBaseSpecScalarFieldEnum: {
    id: 'id',
    base_thickness: 'base_thickness',
    base_thickness_remark: 'base_thickness_remark',
    max_sheet_x: 'max_sheet_x',
    max_sheet_y: 'max_sheet_y',
    min_sheet_x: 'min_sheet_x',
    min_sheet_y: 'min_sheet_y',
    max_base_x: 'max_base_x',
    max_base_y: 'max_base_y',
    min_base_x: 'min_base_x',
    min_base_y: 'min_base_y'
  };

  export type SheetBaseSpecScalarFieldEnum = (typeof SheetBaseSpecScalarFieldEnum)[keyof typeof SheetBaseSpecScalarFieldEnum]


  export const SutebaSpecScalarFieldEnum: {
    id: 'id',
    suteba_pitch: 'suteba_pitch'
  };

  export type SutebaSpecScalarFieldEnum = (typeof SutebaSpecScalarFieldEnum)[keyof typeof SutebaSpecScalarFieldEnum]


  export const SpongeCorkSpecScalarFieldEnum: {
    id: 'id',
    sponge: 'sponge',
    cork: 'cork',
    cork_crushing: 'cork_crushing',
    crushing_remark: 'crushing_remark'
  };

  export type SpongeCorkSpecScalarFieldEnum = (typeof SpongeCorkSpecScalarFieldEnum)[keyof typeof SpongeCorkSpecScalarFieldEnum]


  export const CenterMetalSpecScalarFieldEnum: {
    id: 'id',
    center_metal: 'center_metal',
    center_metal_kind: 'center_metal_kind',
    center_metal_center: 'center_metal_center',
    center_metal_right: 'center_metal_right',
    center_metal_left: 'center_metal_left'
  };

  export type CenterMetalSpecScalarFieldEnum = (typeof CenterMetalSpecScalarFieldEnum)[keyof typeof CenterMetalSpecScalarFieldEnum]


  export const NickSpecScalarFieldEnum: {
    id: 'id',
    nick: 'nick',
    nick_remark_1: 'nick_remark_1',
    nick_remark_2: 'nick_remark_2',
    nick_remark_3: 'nick_remark_3'
  };

  export type NickSpecScalarFieldEnum = (typeof NickSpecScalarFieldEnum)[keyof typeof NickSpecScalarFieldEnum]


  export const RuleThicknessSpecScalarFieldEnum: {
    id: 'id',
    ef_rule: 'ef_rule',
    bf_rule: 'bf_rule',
    af_rule: 'af_rule',
    wf_rule: 'wf_rule',
    gf_rule: 'gf_rule',
    ff_rule: 'ff_rule',
    cf_rule: 'cf_rule',
    paper_350_rule: 'paper_350_rule'
  };

  export type RuleThicknessSpecScalarFieldEnum = (typeof RuleThicknessSpecScalarFieldEnum)[keyof typeof RuleThicknessSpecScalarFieldEnum]


  export const RemarkSpecScalarFieldEnum: {
    id: 'id',
    remark_1: 'remark_1',
    remark_2: 'remark_2',
    remark_3: 'remark_3',
    stripper_first_suteba: 'stripper_first_suteba',
    air_hammer_first_suteba: 'air_hammer_first_suteba',
    ueda_first_suteba: 'ueda_first_suteba'
  };

  export type RemarkSpecScalarFieldEnum = (typeof RemarkSpecScalarFieldEnum)[keyof typeof RemarkSpecScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    auth_id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    auth_id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }, "id" | "auth_id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    auth_id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntNullableWithAggregatesFilter<"Post"> | number | null
  }

  export type MachineBasicSpecWhereInput = {
    AND?: MachineBasicSpecWhereInput | MachineBasicSpecWhereInput[]
    OR?: MachineBasicSpecWhereInput[]
    NOT?: MachineBasicSpecWhereInput | MachineBasicSpecWhereInput[]
    id?: IntFilter<"MachineBasicSpec"> | number
    machineManufacturerId?: StringNullableFilter<"MachineBasicSpec"> | string | null
    machineManufacturerName?: StringNullableFilter<"MachineBasicSpec"> | string | null
    machineName?: StringNullableFilter<"MachineBasicSpec"> | string | null
    machineType?: StringNullableFilter<"MachineBasicSpec"> | string | null
    isDeleted?: BoolFilter<"MachineBasicSpec"> | boolean
    createdAt?: DateTimeFilter<"MachineBasicSpec"> | Date | string
    updatedAt?: DateTimeFilter<"MachineBasicSpec"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MachineBasicSpec"> | Date | string | null
    kuwaeSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    detailSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    filmSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    ruleSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    sheetBaseSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    sutebaSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    spongeCorkSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    centerMetalSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    nickSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    ruleThicknessSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    remarkSpecId?: IntNullableFilter<"MachineBasicSpec"> | number | null
    kuwaeSpec?: XOR<KuwaeSpecNullableScalarRelationFilter, KuwaeSpecWhereInput> | null
    detailSpec?: XOR<DetailSpecNullableScalarRelationFilter, DetailSpecWhereInput> | null
    filmSpec?: XOR<FilmSpecNullableScalarRelationFilter, FilmSpecWhereInput> | null
    ruleSpec?: XOR<RuleSpecNullableScalarRelationFilter, RuleSpecWhereInput> | null
    sheetBaseSpec?: XOR<SheetBaseSpecNullableScalarRelationFilter, SheetBaseSpecWhereInput> | null
    sutebaSpec?: XOR<SutebaSpecNullableScalarRelationFilter, SutebaSpecWhereInput> | null
    spongeCorkSpec?: XOR<SpongeCorkSpecNullableScalarRelationFilter, SpongeCorkSpecWhereInput> | null
    centerMetalSpec?: XOR<CenterMetalSpecNullableScalarRelationFilter, CenterMetalSpecWhereInput> | null
    nickSpec?: XOR<NickSpecNullableScalarRelationFilter, NickSpecWhereInput> | null
    ruleThicknessSpec?: XOR<RuleThicknessSpecNullableScalarRelationFilter, RuleThicknessSpecWhereInput> | null
    remarkSpec?: XOR<RemarkSpecNullableScalarRelationFilter, RemarkSpecWhereInput> | null
  }

  export type MachineBasicSpecOrderByWithRelationInput = {
    id?: SortOrder
    machineManufacturerId?: SortOrderInput | SortOrder
    machineManufacturerName?: SortOrderInput | SortOrder
    machineName?: SortOrderInput | SortOrder
    machineType?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    kuwaeSpecId?: SortOrderInput | SortOrder
    detailSpecId?: SortOrderInput | SortOrder
    filmSpecId?: SortOrderInput | SortOrder
    ruleSpecId?: SortOrderInput | SortOrder
    sheetBaseSpecId?: SortOrderInput | SortOrder
    sutebaSpecId?: SortOrderInput | SortOrder
    spongeCorkSpecId?: SortOrderInput | SortOrder
    centerMetalSpecId?: SortOrderInput | SortOrder
    nickSpecId?: SortOrderInput | SortOrder
    ruleThicknessSpecId?: SortOrderInput | SortOrder
    remarkSpecId?: SortOrderInput | SortOrder
    kuwaeSpec?: KuwaeSpecOrderByWithRelationInput
    detailSpec?: DetailSpecOrderByWithRelationInput
    filmSpec?: FilmSpecOrderByWithRelationInput
    ruleSpec?: RuleSpecOrderByWithRelationInput
    sheetBaseSpec?: SheetBaseSpecOrderByWithRelationInput
    sutebaSpec?: SutebaSpecOrderByWithRelationInput
    spongeCorkSpec?: SpongeCorkSpecOrderByWithRelationInput
    centerMetalSpec?: CenterMetalSpecOrderByWithRelationInput
    nickSpec?: NickSpecOrderByWithRelationInput
    ruleThicknessSpec?: RuleThicknessSpecOrderByWithRelationInput
    remarkSpec?: RemarkSpecOrderByWithRelationInput
  }

  export type MachineBasicSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kuwaeSpecId?: number
    detailSpecId?: number
    filmSpecId?: number
    ruleSpecId?: number
    sheetBaseSpecId?: number
    sutebaSpecId?: number
    spongeCorkSpecId?: number
    centerMetalSpecId?: number
    nickSpecId?: number
    ruleThicknessSpecId?: number
    remarkSpecId?: number
    AND?: MachineBasicSpecWhereInput | MachineBasicSpecWhereInput[]
    OR?: MachineBasicSpecWhereInput[]
    NOT?: MachineBasicSpecWhereInput | MachineBasicSpecWhereInput[]
    machineManufacturerId?: StringNullableFilter<"MachineBasicSpec"> | string | null
    machineManufacturerName?: StringNullableFilter<"MachineBasicSpec"> | string | null
    machineName?: StringNullableFilter<"MachineBasicSpec"> | string | null
    machineType?: StringNullableFilter<"MachineBasicSpec"> | string | null
    isDeleted?: BoolFilter<"MachineBasicSpec"> | boolean
    createdAt?: DateTimeFilter<"MachineBasicSpec"> | Date | string
    updatedAt?: DateTimeFilter<"MachineBasicSpec"> | Date | string
    deletedAt?: DateTimeNullableFilter<"MachineBasicSpec"> | Date | string | null
    kuwaeSpec?: XOR<KuwaeSpecNullableScalarRelationFilter, KuwaeSpecWhereInput> | null
    detailSpec?: XOR<DetailSpecNullableScalarRelationFilter, DetailSpecWhereInput> | null
    filmSpec?: XOR<FilmSpecNullableScalarRelationFilter, FilmSpecWhereInput> | null
    ruleSpec?: XOR<RuleSpecNullableScalarRelationFilter, RuleSpecWhereInput> | null
    sheetBaseSpec?: XOR<SheetBaseSpecNullableScalarRelationFilter, SheetBaseSpecWhereInput> | null
    sutebaSpec?: XOR<SutebaSpecNullableScalarRelationFilter, SutebaSpecWhereInput> | null
    spongeCorkSpec?: XOR<SpongeCorkSpecNullableScalarRelationFilter, SpongeCorkSpecWhereInput> | null
    centerMetalSpec?: XOR<CenterMetalSpecNullableScalarRelationFilter, CenterMetalSpecWhereInput> | null
    nickSpec?: XOR<NickSpecNullableScalarRelationFilter, NickSpecWhereInput> | null
    ruleThicknessSpec?: XOR<RuleThicknessSpecNullableScalarRelationFilter, RuleThicknessSpecWhereInput> | null
    remarkSpec?: XOR<RemarkSpecNullableScalarRelationFilter, RemarkSpecWhereInput> | null
  }, "id" | "kuwaeSpecId" | "detailSpecId" | "filmSpecId" | "ruleSpecId" | "sheetBaseSpecId" | "sutebaSpecId" | "spongeCorkSpecId" | "centerMetalSpecId" | "nickSpecId" | "ruleThicknessSpecId" | "remarkSpecId">

  export type MachineBasicSpecOrderByWithAggregationInput = {
    id?: SortOrder
    machineManufacturerId?: SortOrderInput | SortOrder
    machineManufacturerName?: SortOrderInput | SortOrder
    machineName?: SortOrderInput | SortOrder
    machineType?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    kuwaeSpecId?: SortOrderInput | SortOrder
    detailSpecId?: SortOrderInput | SortOrder
    filmSpecId?: SortOrderInput | SortOrder
    ruleSpecId?: SortOrderInput | SortOrder
    sheetBaseSpecId?: SortOrderInput | SortOrder
    sutebaSpecId?: SortOrderInput | SortOrder
    spongeCorkSpecId?: SortOrderInput | SortOrder
    centerMetalSpecId?: SortOrderInput | SortOrder
    nickSpecId?: SortOrderInput | SortOrder
    ruleThicknessSpecId?: SortOrderInput | SortOrder
    remarkSpecId?: SortOrderInput | SortOrder
    _count?: MachineBasicSpecCountOrderByAggregateInput
    _avg?: MachineBasicSpecAvgOrderByAggregateInput
    _max?: MachineBasicSpecMaxOrderByAggregateInput
    _min?: MachineBasicSpecMinOrderByAggregateInput
    _sum?: MachineBasicSpecSumOrderByAggregateInput
  }

  export type MachineBasicSpecScalarWhereWithAggregatesInput = {
    AND?: MachineBasicSpecScalarWhereWithAggregatesInput | MachineBasicSpecScalarWhereWithAggregatesInput[]
    OR?: MachineBasicSpecScalarWhereWithAggregatesInput[]
    NOT?: MachineBasicSpecScalarWhereWithAggregatesInput | MachineBasicSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MachineBasicSpec"> | number
    machineManufacturerId?: StringNullableWithAggregatesFilter<"MachineBasicSpec"> | string | null
    machineManufacturerName?: StringNullableWithAggregatesFilter<"MachineBasicSpec"> | string | null
    machineName?: StringNullableWithAggregatesFilter<"MachineBasicSpec"> | string | null
    machineType?: StringNullableWithAggregatesFilter<"MachineBasicSpec"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"MachineBasicSpec"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MachineBasicSpec"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MachineBasicSpec"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"MachineBasicSpec"> | Date | string | null
    kuwaeSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    detailSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    filmSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    ruleSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    sheetBaseSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    sutebaSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    spongeCorkSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    centerMetalSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    nickSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    ruleThicknessSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
    remarkSpecId?: IntNullableWithAggregatesFilter<"MachineBasicSpec"> | number | null
  }

  export type KuwaeSpecWhereInput = {
    AND?: KuwaeSpecWhereInput | KuwaeSpecWhereInput[]
    OR?: KuwaeSpecWhereInput[]
    NOT?: KuwaeSpecWhereInput | KuwaeSpecWhereInput[]
    id?: IntFilter<"KuwaeSpec"> | number
    die_kuwae?: StringNullableFilter<"KuwaeSpec"> | string | null
    kuwae_cutting_thickness?: StringNullableFilter<"KuwaeSpec"> | string | null
    kuwae_cutting_width?: StringNullableFilter<"KuwaeSpec"> | string | null
    kuwae_angle?: StringNullableFilter<"KuwaeSpec"> | string | null
    back_kuwae_angle?: StringNullableFilter<"KuwaeSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type KuwaeSpecOrderByWithRelationInput = {
    id?: SortOrder
    die_kuwae?: SortOrderInput | SortOrder
    kuwae_cutting_thickness?: SortOrderInput | SortOrder
    kuwae_cutting_width?: SortOrderInput | SortOrder
    kuwae_angle?: SortOrderInput | SortOrder
    back_kuwae_angle?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type KuwaeSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KuwaeSpecWhereInput | KuwaeSpecWhereInput[]
    OR?: KuwaeSpecWhereInput[]
    NOT?: KuwaeSpecWhereInput | KuwaeSpecWhereInput[]
    die_kuwae?: StringNullableFilter<"KuwaeSpec"> | string | null
    kuwae_cutting_thickness?: StringNullableFilter<"KuwaeSpec"> | string | null
    kuwae_cutting_width?: StringNullableFilter<"KuwaeSpec"> | string | null
    kuwae_angle?: StringNullableFilter<"KuwaeSpec"> | string | null
    back_kuwae_angle?: StringNullableFilter<"KuwaeSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type KuwaeSpecOrderByWithAggregationInput = {
    id?: SortOrder
    die_kuwae?: SortOrderInput | SortOrder
    kuwae_cutting_thickness?: SortOrderInput | SortOrder
    kuwae_cutting_width?: SortOrderInput | SortOrder
    kuwae_angle?: SortOrderInput | SortOrder
    back_kuwae_angle?: SortOrderInput | SortOrder
    _count?: KuwaeSpecCountOrderByAggregateInput
    _avg?: KuwaeSpecAvgOrderByAggregateInput
    _max?: KuwaeSpecMaxOrderByAggregateInput
    _min?: KuwaeSpecMinOrderByAggregateInput
    _sum?: KuwaeSpecSumOrderByAggregateInput
  }

  export type KuwaeSpecScalarWhereWithAggregatesInput = {
    AND?: KuwaeSpecScalarWhereWithAggregatesInput | KuwaeSpecScalarWhereWithAggregatesInput[]
    OR?: KuwaeSpecScalarWhereWithAggregatesInput[]
    NOT?: KuwaeSpecScalarWhereWithAggregatesInput | KuwaeSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KuwaeSpec"> | number
    die_kuwae?: StringNullableWithAggregatesFilter<"KuwaeSpec"> | string | null
    kuwae_cutting_thickness?: StringNullableWithAggregatesFilter<"KuwaeSpec"> | string | null
    kuwae_cutting_width?: StringNullableWithAggregatesFilter<"KuwaeSpec"> | string | null
    kuwae_angle?: StringNullableWithAggregatesFilter<"KuwaeSpec"> | string | null
    back_kuwae_angle?: StringNullableWithAggregatesFilter<"KuwaeSpec"> | string | null
  }

  export type DetailSpecWhereInput = {
    AND?: DetailSpecWhereInput | DetailSpecWhereInput[]
    OR?: DetailSpecWhereInput[]
    NOT?: DetailSpecWhereInput | DetailSpecWhereInput[]
    id?: IntFilter<"DetailSpec"> | number
    mounting_hole?: StringNullableFilter<"DetailSpec"> | string | null
    nail_nut?: StringNullableFilter<"DetailSpec"> | string | null
    one_touch_bar?: StringNullableFilter<"DetailSpec"> | string | null
    stripper?: StringNullableFilter<"DetailSpec"> | string | null
    blanking?: StringNullableFilter<"DetailSpec"> | string | null
    under_pin?: StringNullableFilter<"DetailSpec"> | string | null
    cad_plate?: StringNullableFilter<"DetailSpec"> | string | null
    cad_plate_remark?: StringNullableFilter<"DetailSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type DetailSpecOrderByWithRelationInput = {
    id?: SortOrder
    mounting_hole?: SortOrderInput | SortOrder
    nail_nut?: SortOrderInput | SortOrder
    one_touch_bar?: SortOrderInput | SortOrder
    stripper?: SortOrderInput | SortOrder
    blanking?: SortOrderInput | SortOrder
    under_pin?: SortOrderInput | SortOrder
    cad_plate?: SortOrderInput | SortOrder
    cad_plate_remark?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type DetailSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailSpecWhereInput | DetailSpecWhereInput[]
    OR?: DetailSpecWhereInput[]
    NOT?: DetailSpecWhereInput | DetailSpecWhereInput[]
    mounting_hole?: StringNullableFilter<"DetailSpec"> | string | null
    nail_nut?: StringNullableFilter<"DetailSpec"> | string | null
    one_touch_bar?: StringNullableFilter<"DetailSpec"> | string | null
    stripper?: StringNullableFilter<"DetailSpec"> | string | null
    blanking?: StringNullableFilter<"DetailSpec"> | string | null
    under_pin?: StringNullableFilter<"DetailSpec"> | string | null
    cad_plate?: StringNullableFilter<"DetailSpec"> | string | null
    cad_plate_remark?: StringNullableFilter<"DetailSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type DetailSpecOrderByWithAggregationInput = {
    id?: SortOrder
    mounting_hole?: SortOrderInput | SortOrder
    nail_nut?: SortOrderInput | SortOrder
    one_touch_bar?: SortOrderInput | SortOrder
    stripper?: SortOrderInput | SortOrder
    blanking?: SortOrderInput | SortOrder
    under_pin?: SortOrderInput | SortOrder
    cad_plate?: SortOrderInput | SortOrder
    cad_plate_remark?: SortOrderInput | SortOrder
    _count?: DetailSpecCountOrderByAggregateInput
    _avg?: DetailSpecAvgOrderByAggregateInput
    _max?: DetailSpecMaxOrderByAggregateInput
    _min?: DetailSpecMinOrderByAggregateInput
    _sum?: DetailSpecSumOrderByAggregateInput
  }

  export type DetailSpecScalarWhereWithAggregatesInput = {
    AND?: DetailSpecScalarWhereWithAggregatesInput | DetailSpecScalarWhereWithAggregatesInput[]
    OR?: DetailSpecScalarWhereWithAggregatesInput[]
    NOT?: DetailSpecScalarWhereWithAggregatesInput | DetailSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailSpec"> | number
    mounting_hole?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    nail_nut?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    one_touch_bar?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    stripper?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    blanking?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    under_pin?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    cad_plate?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
    cad_plate_remark?: StringNullableWithAggregatesFilter<"DetailSpec"> | string | null
  }

  export type FilmSpecWhereInput = {
    AND?: FilmSpecWhereInput | FilmSpecWhereInput[]
    OR?: FilmSpecWhereInput[]
    NOT?: FilmSpecWhereInput | FilmSpecWhereInput[]
    id?: IntFilter<"FilmSpec"> | number
    film?: StringNullableFilter<"FilmSpec"> | string | null
    film_thickness?: FloatNullableFilter<"FilmSpec"> | number | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type FilmSpecOrderByWithRelationInput = {
    id?: SortOrder
    film?: SortOrderInput | SortOrder
    film_thickness?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type FilmSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilmSpecWhereInput | FilmSpecWhereInput[]
    OR?: FilmSpecWhereInput[]
    NOT?: FilmSpecWhereInput | FilmSpecWhereInput[]
    film?: StringNullableFilter<"FilmSpec"> | string | null
    film_thickness?: FloatNullableFilter<"FilmSpec"> | number | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type FilmSpecOrderByWithAggregationInput = {
    id?: SortOrder
    film?: SortOrderInput | SortOrder
    film_thickness?: SortOrderInput | SortOrder
    _count?: FilmSpecCountOrderByAggregateInput
    _avg?: FilmSpecAvgOrderByAggregateInput
    _max?: FilmSpecMaxOrderByAggregateInput
    _min?: FilmSpecMinOrderByAggregateInput
    _sum?: FilmSpecSumOrderByAggregateInput
  }

  export type FilmSpecScalarWhereWithAggregatesInput = {
    AND?: FilmSpecScalarWhereWithAggregatesInput | FilmSpecScalarWhereWithAggregatesInput[]
    OR?: FilmSpecScalarWhereWithAggregatesInput[]
    NOT?: FilmSpecScalarWhereWithAggregatesInput | FilmSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FilmSpec"> | number
    film?: StringNullableWithAggregatesFilter<"FilmSpec"> | string | null
    film_thickness?: FloatNullableWithAggregatesFilter<"FilmSpec"> | number | null
  }

  export type RuleSpecWhereInput = {
    AND?: RuleSpecWhereInput | RuleSpecWhereInput[]
    OR?: RuleSpecWhereInput[]
    NOT?: RuleSpecWhereInput | RuleSpecWhereInput[]
    id?: IntFilter<"RuleSpec"> | number
    balance_rule?: StringNullableFilter<"RuleSpec"> | string | null
    inside_sheet_rule?: StringNullableFilter<"RuleSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type RuleSpecOrderByWithRelationInput = {
    id?: SortOrder
    balance_rule?: SortOrderInput | SortOrder
    inside_sheet_rule?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type RuleSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleSpecWhereInput | RuleSpecWhereInput[]
    OR?: RuleSpecWhereInput[]
    NOT?: RuleSpecWhereInput | RuleSpecWhereInput[]
    balance_rule?: StringNullableFilter<"RuleSpec"> | string | null
    inside_sheet_rule?: StringNullableFilter<"RuleSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type RuleSpecOrderByWithAggregationInput = {
    id?: SortOrder
    balance_rule?: SortOrderInput | SortOrder
    inside_sheet_rule?: SortOrderInput | SortOrder
    _count?: RuleSpecCountOrderByAggregateInput
    _avg?: RuleSpecAvgOrderByAggregateInput
    _max?: RuleSpecMaxOrderByAggregateInput
    _min?: RuleSpecMinOrderByAggregateInput
    _sum?: RuleSpecSumOrderByAggregateInput
  }

  export type RuleSpecScalarWhereWithAggregatesInput = {
    AND?: RuleSpecScalarWhereWithAggregatesInput | RuleSpecScalarWhereWithAggregatesInput[]
    OR?: RuleSpecScalarWhereWithAggregatesInput[]
    NOT?: RuleSpecScalarWhereWithAggregatesInput | RuleSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RuleSpec"> | number
    balance_rule?: StringNullableWithAggregatesFilter<"RuleSpec"> | string | null
    inside_sheet_rule?: StringNullableWithAggregatesFilter<"RuleSpec"> | string | null
  }

  export type SheetBaseSpecWhereInput = {
    AND?: SheetBaseSpecWhereInput | SheetBaseSpecWhereInput[]
    OR?: SheetBaseSpecWhereInput[]
    NOT?: SheetBaseSpecWhereInput | SheetBaseSpecWhereInput[]
    id?: IntFilter<"SheetBaseSpec"> | number
    base_thickness?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    base_thickness_remark?: StringNullableFilter<"SheetBaseSpec"> | string | null
    max_sheet_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    max_sheet_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_sheet_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_sheet_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    max_base_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    max_base_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_base_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_base_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type SheetBaseSpecOrderByWithRelationInput = {
    id?: SortOrder
    base_thickness?: SortOrderInput | SortOrder
    base_thickness_remark?: SortOrderInput | SortOrder
    max_sheet_x?: SortOrderInput | SortOrder
    max_sheet_y?: SortOrderInput | SortOrder
    min_sheet_x?: SortOrderInput | SortOrder
    min_sheet_y?: SortOrderInput | SortOrder
    max_base_x?: SortOrderInput | SortOrder
    max_base_y?: SortOrderInput | SortOrder
    min_base_x?: SortOrderInput | SortOrder
    min_base_y?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type SheetBaseSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SheetBaseSpecWhereInput | SheetBaseSpecWhereInput[]
    OR?: SheetBaseSpecWhereInput[]
    NOT?: SheetBaseSpecWhereInput | SheetBaseSpecWhereInput[]
    base_thickness?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    base_thickness_remark?: StringNullableFilter<"SheetBaseSpec"> | string | null
    max_sheet_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    max_sheet_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_sheet_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_sheet_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    max_base_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    max_base_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_base_x?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    min_base_y?: FloatNullableFilter<"SheetBaseSpec"> | number | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type SheetBaseSpecOrderByWithAggregationInput = {
    id?: SortOrder
    base_thickness?: SortOrderInput | SortOrder
    base_thickness_remark?: SortOrderInput | SortOrder
    max_sheet_x?: SortOrderInput | SortOrder
    max_sheet_y?: SortOrderInput | SortOrder
    min_sheet_x?: SortOrderInput | SortOrder
    min_sheet_y?: SortOrderInput | SortOrder
    max_base_x?: SortOrderInput | SortOrder
    max_base_y?: SortOrderInput | SortOrder
    min_base_x?: SortOrderInput | SortOrder
    min_base_y?: SortOrderInput | SortOrder
    _count?: SheetBaseSpecCountOrderByAggregateInput
    _avg?: SheetBaseSpecAvgOrderByAggregateInput
    _max?: SheetBaseSpecMaxOrderByAggregateInput
    _min?: SheetBaseSpecMinOrderByAggregateInput
    _sum?: SheetBaseSpecSumOrderByAggregateInput
  }

  export type SheetBaseSpecScalarWhereWithAggregatesInput = {
    AND?: SheetBaseSpecScalarWhereWithAggregatesInput | SheetBaseSpecScalarWhereWithAggregatesInput[]
    OR?: SheetBaseSpecScalarWhereWithAggregatesInput[]
    NOT?: SheetBaseSpecScalarWhereWithAggregatesInput | SheetBaseSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SheetBaseSpec"> | number
    base_thickness?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    base_thickness_remark?: StringNullableWithAggregatesFilter<"SheetBaseSpec"> | string | null
    max_sheet_x?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    max_sheet_y?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    min_sheet_x?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    min_sheet_y?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    max_base_x?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    max_base_y?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    min_base_x?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
    min_base_y?: FloatNullableWithAggregatesFilter<"SheetBaseSpec"> | number | null
  }

  export type SutebaSpecWhereInput = {
    AND?: SutebaSpecWhereInput | SutebaSpecWhereInput[]
    OR?: SutebaSpecWhereInput[]
    NOT?: SutebaSpecWhereInput | SutebaSpecWhereInput[]
    id?: IntFilter<"SutebaSpec"> | number
    suteba_pitch?: FloatNullableFilter<"SutebaSpec"> | number | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type SutebaSpecOrderByWithRelationInput = {
    id?: SortOrder
    suteba_pitch?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type SutebaSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SutebaSpecWhereInput | SutebaSpecWhereInput[]
    OR?: SutebaSpecWhereInput[]
    NOT?: SutebaSpecWhereInput | SutebaSpecWhereInput[]
    suteba_pitch?: FloatNullableFilter<"SutebaSpec"> | number | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type SutebaSpecOrderByWithAggregationInput = {
    id?: SortOrder
    suteba_pitch?: SortOrderInput | SortOrder
    _count?: SutebaSpecCountOrderByAggregateInput
    _avg?: SutebaSpecAvgOrderByAggregateInput
    _max?: SutebaSpecMaxOrderByAggregateInput
    _min?: SutebaSpecMinOrderByAggregateInput
    _sum?: SutebaSpecSumOrderByAggregateInput
  }

  export type SutebaSpecScalarWhereWithAggregatesInput = {
    AND?: SutebaSpecScalarWhereWithAggregatesInput | SutebaSpecScalarWhereWithAggregatesInput[]
    OR?: SutebaSpecScalarWhereWithAggregatesInput[]
    NOT?: SutebaSpecScalarWhereWithAggregatesInput | SutebaSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SutebaSpec"> | number
    suteba_pitch?: FloatNullableWithAggregatesFilter<"SutebaSpec"> | number | null
  }

  export type SpongeCorkSpecWhereInput = {
    AND?: SpongeCorkSpecWhereInput | SpongeCorkSpecWhereInput[]
    OR?: SpongeCorkSpecWhereInput[]
    NOT?: SpongeCorkSpecWhereInput | SpongeCorkSpecWhereInput[]
    id?: IntFilter<"SpongeCorkSpec"> | number
    sponge?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    cork?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    cork_crushing?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    crushing_remark?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type SpongeCorkSpecOrderByWithRelationInput = {
    id?: SortOrder
    sponge?: SortOrderInput | SortOrder
    cork?: SortOrderInput | SortOrder
    cork_crushing?: SortOrderInput | SortOrder
    crushing_remark?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type SpongeCorkSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpongeCorkSpecWhereInput | SpongeCorkSpecWhereInput[]
    OR?: SpongeCorkSpecWhereInput[]
    NOT?: SpongeCorkSpecWhereInput | SpongeCorkSpecWhereInput[]
    sponge?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    cork?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    cork_crushing?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    crushing_remark?: StringNullableFilter<"SpongeCorkSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type SpongeCorkSpecOrderByWithAggregationInput = {
    id?: SortOrder
    sponge?: SortOrderInput | SortOrder
    cork?: SortOrderInput | SortOrder
    cork_crushing?: SortOrderInput | SortOrder
    crushing_remark?: SortOrderInput | SortOrder
    _count?: SpongeCorkSpecCountOrderByAggregateInput
    _avg?: SpongeCorkSpecAvgOrderByAggregateInput
    _max?: SpongeCorkSpecMaxOrderByAggregateInput
    _min?: SpongeCorkSpecMinOrderByAggregateInput
    _sum?: SpongeCorkSpecSumOrderByAggregateInput
  }

  export type SpongeCorkSpecScalarWhereWithAggregatesInput = {
    AND?: SpongeCorkSpecScalarWhereWithAggregatesInput | SpongeCorkSpecScalarWhereWithAggregatesInput[]
    OR?: SpongeCorkSpecScalarWhereWithAggregatesInput[]
    NOT?: SpongeCorkSpecScalarWhereWithAggregatesInput | SpongeCorkSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpongeCorkSpec"> | number
    sponge?: StringNullableWithAggregatesFilter<"SpongeCorkSpec"> | string | null
    cork?: StringNullableWithAggregatesFilter<"SpongeCorkSpec"> | string | null
    cork_crushing?: StringNullableWithAggregatesFilter<"SpongeCorkSpec"> | string | null
    crushing_remark?: StringNullableWithAggregatesFilter<"SpongeCorkSpec"> | string | null
  }

  export type CenterMetalSpecWhereInput = {
    AND?: CenterMetalSpecWhereInput | CenterMetalSpecWhereInput[]
    OR?: CenterMetalSpecWhereInput[]
    NOT?: CenterMetalSpecWhereInput | CenterMetalSpecWhereInput[]
    id?: IntFilter<"CenterMetalSpec"> | number
    center_metal?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_kind?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_center?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_right?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_left?: StringNullableFilter<"CenterMetalSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type CenterMetalSpecOrderByWithRelationInput = {
    id?: SortOrder
    center_metal?: SortOrderInput | SortOrder
    center_metal_kind?: SortOrderInput | SortOrder
    center_metal_center?: SortOrderInput | SortOrder
    center_metal_right?: SortOrderInput | SortOrder
    center_metal_left?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type CenterMetalSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CenterMetalSpecWhereInput | CenterMetalSpecWhereInput[]
    OR?: CenterMetalSpecWhereInput[]
    NOT?: CenterMetalSpecWhereInput | CenterMetalSpecWhereInput[]
    center_metal?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_kind?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_center?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_right?: StringNullableFilter<"CenterMetalSpec"> | string | null
    center_metal_left?: StringNullableFilter<"CenterMetalSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type CenterMetalSpecOrderByWithAggregationInput = {
    id?: SortOrder
    center_metal?: SortOrderInput | SortOrder
    center_metal_kind?: SortOrderInput | SortOrder
    center_metal_center?: SortOrderInput | SortOrder
    center_metal_right?: SortOrderInput | SortOrder
    center_metal_left?: SortOrderInput | SortOrder
    _count?: CenterMetalSpecCountOrderByAggregateInput
    _avg?: CenterMetalSpecAvgOrderByAggregateInput
    _max?: CenterMetalSpecMaxOrderByAggregateInput
    _min?: CenterMetalSpecMinOrderByAggregateInput
    _sum?: CenterMetalSpecSumOrderByAggregateInput
  }

  export type CenterMetalSpecScalarWhereWithAggregatesInput = {
    AND?: CenterMetalSpecScalarWhereWithAggregatesInput | CenterMetalSpecScalarWhereWithAggregatesInput[]
    OR?: CenterMetalSpecScalarWhereWithAggregatesInput[]
    NOT?: CenterMetalSpecScalarWhereWithAggregatesInput | CenterMetalSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CenterMetalSpec"> | number
    center_metal?: StringNullableWithAggregatesFilter<"CenterMetalSpec"> | string | null
    center_metal_kind?: StringNullableWithAggregatesFilter<"CenterMetalSpec"> | string | null
    center_metal_center?: StringNullableWithAggregatesFilter<"CenterMetalSpec"> | string | null
    center_metal_right?: StringNullableWithAggregatesFilter<"CenterMetalSpec"> | string | null
    center_metal_left?: StringNullableWithAggregatesFilter<"CenterMetalSpec"> | string | null
  }

  export type NickSpecWhereInput = {
    AND?: NickSpecWhereInput | NickSpecWhereInput[]
    OR?: NickSpecWhereInput[]
    NOT?: NickSpecWhereInput | NickSpecWhereInput[]
    id?: IntFilter<"NickSpec"> | number
    nick?: StringNullableFilter<"NickSpec"> | string | null
    nick_remark_1?: StringNullableFilter<"NickSpec"> | string | null
    nick_remark_2?: StringNullableFilter<"NickSpec"> | string | null
    nick_remark_3?: StringNullableFilter<"NickSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type NickSpecOrderByWithRelationInput = {
    id?: SortOrder
    nick?: SortOrderInput | SortOrder
    nick_remark_1?: SortOrderInput | SortOrder
    nick_remark_2?: SortOrderInput | SortOrder
    nick_remark_3?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type NickSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NickSpecWhereInput | NickSpecWhereInput[]
    OR?: NickSpecWhereInput[]
    NOT?: NickSpecWhereInput | NickSpecWhereInput[]
    nick?: StringNullableFilter<"NickSpec"> | string | null
    nick_remark_1?: StringNullableFilter<"NickSpec"> | string | null
    nick_remark_2?: StringNullableFilter<"NickSpec"> | string | null
    nick_remark_3?: StringNullableFilter<"NickSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type NickSpecOrderByWithAggregationInput = {
    id?: SortOrder
    nick?: SortOrderInput | SortOrder
    nick_remark_1?: SortOrderInput | SortOrder
    nick_remark_2?: SortOrderInput | SortOrder
    nick_remark_3?: SortOrderInput | SortOrder
    _count?: NickSpecCountOrderByAggregateInput
    _avg?: NickSpecAvgOrderByAggregateInput
    _max?: NickSpecMaxOrderByAggregateInput
    _min?: NickSpecMinOrderByAggregateInput
    _sum?: NickSpecSumOrderByAggregateInput
  }

  export type NickSpecScalarWhereWithAggregatesInput = {
    AND?: NickSpecScalarWhereWithAggregatesInput | NickSpecScalarWhereWithAggregatesInput[]
    OR?: NickSpecScalarWhereWithAggregatesInput[]
    NOT?: NickSpecScalarWhereWithAggregatesInput | NickSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NickSpec"> | number
    nick?: StringNullableWithAggregatesFilter<"NickSpec"> | string | null
    nick_remark_1?: StringNullableWithAggregatesFilter<"NickSpec"> | string | null
    nick_remark_2?: StringNullableWithAggregatesFilter<"NickSpec"> | string | null
    nick_remark_3?: StringNullableWithAggregatesFilter<"NickSpec"> | string | null
  }

  export type RuleThicknessSpecWhereInput = {
    AND?: RuleThicknessSpecWhereInput | RuleThicknessSpecWhereInput[]
    OR?: RuleThicknessSpecWhereInput[]
    NOT?: RuleThicknessSpecWhereInput | RuleThicknessSpecWhereInput[]
    id?: IntFilter<"RuleThicknessSpec"> | number
    ef_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    bf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    af_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    wf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    gf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    ff_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    cf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    paper_350_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type RuleThicknessSpecOrderByWithRelationInput = {
    id?: SortOrder
    ef_rule?: SortOrderInput | SortOrder
    bf_rule?: SortOrderInput | SortOrder
    af_rule?: SortOrderInput | SortOrder
    wf_rule?: SortOrderInput | SortOrder
    gf_rule?: SortOrderInput | SortOrder
    ff_rule?: SortOrderInput | SortOrder
    cf_rule?: SortOrderInput | SortOrder
    paper_350_rule?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type RuleThicknessSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RuleThicknessSpecWhereInput | RuleThicknessSpecWhereInput[]
    OR?: RuleThicknessSpecWhereInput[]
    NOT?: RuleThicknessSpecWhereInput | RuleThicknessSpecWhereInput[]
    ef_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    bf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    af_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    wf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    gf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    ff_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    cf_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    paper_350_rule?: StringNullableFilter<"RuleThicknessSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type RuleThicknessSpecOrderByWithAggregationInput = {
    id?: SortOrder
    ef_rule?: SortOrderInput | SortOrder
    bf_rule?: SortOrderInput | SortOrder
    af_rule?: SortOrderInput | SortOrder
    wf_rule?: SortOrderInput | SortOrder
    gf_rule?: SortOrderInput | SortOrder
    ff_rule?: SortOrderInput | SortOrder
    cf_rule?: SortOrderInput | SortOrder
    paper_350_rule?: SortOrderInput | SortOrder
    _count?: RuleThicknessSpecCountOrderByAggregateInput
    _avg?: RuleThicknessSpecAvgOrderByAggregateInput
    _max?: RuleThicknessSpecMaxOrderByAggregateInput
    _min?: RuleThicknessSpecMinOrderByAggregateInput
    _sum?: RuleThicknessSpecSumOrderByAggregateInput
  }

  export type RuleThicknessSpecScalarWhereWithAggregatesInput = {
    AND?: RuleThicknessSpecScalarWhereWithAggregatesInput | RuleThicknessSpecScalarWhereWithAggregatesInput[]
    OR?: RuleThicknessSpecScalarWhereWithAggregatesInput[]
    NOT?: RuleThicknessSpecScalarWhereWithAggregatesInput | RuleThicknessSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RuleThicknessSpec"> | number
    ef_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    bf_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    af_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    wf_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    gf_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    ff_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    cf_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
    paper_350_rule?: StringNullableWithAggregatesFilter<"RuleThicknessSpec"> | string | null
  }

  export type RemarkSpecWhereInput = {
    AND?: RemarkSpecWhereInput | RemarkSpecWhereInput[]
    OR?: RemarkSpecWhereInput[]
    NOT?: RemarkSpecWhereInput | RemarkSpecWhereInput[]
    id?: IntFilter<"RemarkSpec"> | number
    remark_1?: StringNullableFilter<"RemarkSpec"> | string | null
    remark_2?: StringNullableFilter<"RemarkSpec"> | string | null
    remark_3?: StringNullableFilter<"RemarkSpec"> | string | null
    stripper_first_suteba?: StringNullableFilter<"RemarkSpec"> | string | null
    air_hammer_first_suteba?: StringNullableFilter<"RemarkSpec"> | string | null
    ueda_first_suteba?: StringNullableFilter<"RemarkSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }

  export type RemarkSpecOrderByWithRelationInput = {
    id?: SortOrder
    remark_1?: SortOrderInput | SortOrder
    remark_2?: SortOrderInput | SortOrder
    remark_3?: SortOrderInput | SortOrder
    stripper_first_suteba?: SortOrderInput | SortOrder
    air_hammer_first_suteba?: SortOrderInput | SortOrder
    ueda_first_suteba?: SortOrderInput | SortOrder
    machineBasicSpec?: MachineBasicSpecOrderByWithRelationInput
  }

  export type RemarkSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RemarkSpecWhereInput | RemarkSpecWhereInput[]
    OR?: RemarkSpecWhereInput[]
    NOT?: RemarkSpecWhereInput | RemarkSpecWhereInput[]
    remark_1?: StringNullableFilter<"RemarkSpec"> | string | null
    remark_2?: StringNullableFilter<"RemarkSpec"> | string | null
    remark_3?: StringNullableFilter<"RemarkSpec"> | string | null
    stripper_first_suteba?: StringNullableFilter<"RemarkSpec"> | string | null
    air_hammer_first_suteba?: StringNullableFilter<"RemarkSpec"> | string | null
    ueda_first_suteba?: StringNullableFilter<"RemarkSpec"> | string | null
    machineBasicSpec?: XOR<MachineBasicSpecNullableScalarRelationFilter, MachineBasicSpecWhereInput> | null
  }, "id">

  export type RemarkSpecOrderByWithAggregationInput = {
    id?: SortOrder
    remark_1?: SortOrderInput | SortOrder
    remark_2?: SortOrderInput | SortOrder
    remark_3?: SortOrderInput | SortOrder
    stripper_first_suteba?: SortOrderInput | SortOrder
    air_hammer_first_suteba?: SortOrderInput | SortOrder
    ueda_first_suteba?: SortOrderInput | SortOrder
    _count?: RemarkSpecCountOrderByAggregateInput
    _avg?: RemarkSpecAvgOrderByAggregateInput
    _max?: RemarkSpecMaxOrderByAggregateInput
    _min?: RemarkSpecMinOrderByAggregateInput
    _sum?: RemarkSpecSumOrderByAggregateInput
  }

  export type RemarkSpecScalarWhereWithAggregatesInput = {
    AND?: RemarkSpecScalarWhereWithAggregatesInput | RemarkSpecScalarWhereWithAggregatesInput[]
    OR?: RemarkSpecScalarWhereWithAggregatesInput[]
    NOT?: RemarkSpecScalarWhereWithAggregatesInput | RemarkSpecScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RemarkSpec"> | number
    remark_1?: StringNullableWithAggregatesFilter<"RemarkSpec"> | string | null
    remark_2?: StringNullableWithAggregatesFilter<"RemarkSpec"> | string | null
    remark_3?: StringNullableWithAggregatesFilter<"RemarkSpec"> | string | null
    stripper_first_suteba?: StringNullableWithAggregatesFilter<"RemarkSpec"> | string | null
    air_hammer_first_suteba?: StringNullableWithAggregatesFilter<"RemarkSpec"> | string | null
    ueda_first_suteba?: StringNullableWithAggregatesFilter<"RemarkSpec"> | string | null
  }

  export type UserCreateInput = {
    auth_id: string
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    auth_id: string
    email: string
    name?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    auth_id: string
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecUpdateInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateManyInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecUpdateManyMutationInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MachineBasicSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KuwaeSpecCreateInput = {
    die_kuwae?: string | null
    kuwae_cutting_thickness?: string | null
    kuwae_cutting_width?: string | null
    kuwae_angle?: string | null
    back_kuwae_angle?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutKuwaeSpecInput
  }

  export type KuwaeSpecUncheckedCreateInput = {
    id?: number
    die_kuwae?: string | null
    kuwae_cutting_thickness?: string | null
    kuwae_cutting_width?: string | null
    kuwae_angle?: string | null
    back_kuwae_angle?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutKuwaeSpecInput
  }

  export type KuwaeSpecUpdateInput = {
    die_kuwae?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_thickness?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_width?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    back_kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutKuwaeSpecNestedInput
  }

  export type KuwaeSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    die_kuwae?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_thickness?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_width?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    back_kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutKuwaeSpecNestedInput
  }

  export type KuwaeSpecCreateManyInput = {
    id?: number
    die_kuwae?: string | null
    kuwae_cutting_thickness?: string | null
    kuwae_cutting_width?: string | null
    kuwae_angle?: string | null
    back_kuwae_angle?: string | null
  }

  export type KuwaeSpecUpdateManyMutationInput = {
    die_kuwae?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_thickness?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_width?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    back_kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KuwaeSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    die_kuwae?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_thickness?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_width?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    back_kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailSpecCreateInput = {
    mounting_hole?: string | null
    nail_nut?: string | null
    one_touch_bar?: string | null
    stripper?: string | null
    blanking?: string | null
    under_pin?: string | null
    cad_plate?: string | null
    cad_plate_remark?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutDetailSpecInput
  }

  export type DetailSpecUncheckedCreateInput = {
    id?: number
    mounting_hole?: string | null
    nail_nut?: string | null
    one_touch_bar?: string | null
    stripper?: string | null
    blanking?: string | null
    under_pin?: string | null
    cad_plate?: string | null
    cad_plate_remark?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutDetailSpecInput
  }

  export type DetailSpecUpdateInput = {
    mounting_hole?: NullableStringFieldUpdateOperationsInput | string | null
    nail_nut?: NullableStringFieldUpdateOperationsInput | string | null
    one_touch_bar?: NullableStringFieldUpdateOperationsInput | string | null
    stripper?: NullableStringFieldUpdateOperationsInput | string | null
    blanking?: NullableStringFieldUpdateOperationsInput | string | null
    under_pin?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate_remark?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutDetailSpecNestedInput
  }

  export type DetailSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mounting_hole?: NullableStringFieldUpdateOperationsInput | string | null
    nail_nut?: NullableStringFieldUpdateOperationsInput | string | null
    one_touch_bar?: NullableStringFieldUpdateOperationsInput | string | null
    stripper?: NullableStringFieldUpdateOperationsInput | string | null
    blanking?: NullableStringFieldUpdateOperationsInput | string | null
    under_pin?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate_remark?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutDetailSpecNestedInput
  }

  export type DetailSpecCreateManyInput = {
    id?: number
    mounting_hole?: string | null
    nail_nut?: string | null
    one_touch_bar?: string | null
    stripper?: string | null
    blanking?: string | null
    under_pin?: string | null
    cad_plate?: string | null
    cad_plate_remark?: string | null
  }

  export type DetailSpecUpdateManyMutationInput = {
    mounting_hole?: NullableStringFieldUpdateOperationsInput | string | null
    nail_nut?: NullableStringFieldUpdateOperationsInput | string | null
    one_touch_bar?: NullableStringFieldUpdateOperationsInput | string | null
    stripper?: NullableStringFieldUpdateOperationsInput | string | null
    blanking?: NullableStringFieldUpdateOperationsInput | string | null
    under_pin?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mounting_hole?: NullableStringFieldUpdateOperationsInput | string | null
    nail_nut?: NullableStringFieldUpdateOperationsInput | string | null
    one_touch_bar?: NullableStringFieldUpdateOperationsInput | string | null
    stripper?: NullableStringFieldUpdateOperationsInput | string | null
    blanking?: NullableStringFieldUpdateOperationsInput | string | null
    under_pin?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilmSpecCreateInput = {
    film?: string | null
    film_thickness?: number | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutFilmSpecInput
  }

  export type FilmSpecUncheckedCreateInput = {
    id?: number
    film?: string | null
    film_thickness?: number | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutFilmSpecInput
  }

  export type FilmSpecUpdateInput = {
    film?: NullableStringFieldUpdateOperationsInput | string | null
    film_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutFilmSpecNestedInput
  }

  export type FilmSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    film?: NullableStringFieldUpdateOperationsInput | string | null
    film_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutFilmSpecNestedInput
  }

  export type FilmSpecCreateManyInput = {
    id?: number
    film?: string | null
    film_thickness?: number | null
  }

  export type FilmSpecUpdateManyMutationInput = {
    film?: NullableStringFieldUpdateOperationsInput | string | null
    film_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FilmSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    film?: NullableStringFieldUpdateOperationsInput | string | null
    film_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RuleSpecCreateInput = {
    balance_rule?: string | null
    inside_sheet_rule?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutRuleSpecInput
  }

  export type RuleSpecUncheckedCreateInput = {
    id?: number
    balance_rule?: string | null
    inside_sheet_rule?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutRuleSpecInput
  }

  export type RuleSpecUpdateInput = {
    balance_rule?: NullableStringFieldUpdateOperationsInput | string | null
    inside_sheet_rule?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutRuleSpecNestedInput
  }

  export type RuleSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance_rule?: NullableStringFieldUpdateOperationsInput | string | null
    inside_sheet_rule?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutRuleSpecNestedInput
  }

  export type RuleSpecCreateManyInput = {
    id?: number
    balance_rule?: string | null
    inside_sheet_rule?: string | null
  }

  export type RuleSpecUpdateManyMutationInput = {
    balance_rule?: NullableStringFieldUpdateOperationsInput | string | null
    inside_sheet_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance_rule?: NullableStringFieldUpdateOperationsInput | string | null
    inside_sheet_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetBaseSpecCreateInput = {
    base_thickness?: number | null
    base_thickness_remark?: string | null
    max_sheet_x?: number | null
    max_sheet_y?: number | null
    min_sheet_x?: number | null
    min_sheet_y?: number | null
    max_base_x?: number | null
    max_base_y?: number | null
    min_base_x?: number | null
    min_base_y?: number | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutSheetBaseSpecInput
  }

  export type SheetBaseSpecUncheckedCreateInput = {
    id?: number
    base_thickness?: number | null
    base_thickness_remark?: string | null
    max_sheet_x?: number | null
    max_sheet_y?: number | null
    min_sheet_x?: number | null
    min_sheet_y?: number | null
    max_base_x?: number | null
    max_base_y?: number | null
    min_base_x?: number | null
    min_base_y?: number | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutSheetBaseSpecInput
  }

  export type SheetBaseSpecUpdateInput = {
    base_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    base_thickness_remark?: NullableStringFieldUpdateOperationsInput | string | null
    max_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutSheetBaseSpecNestedInput
  }

  export type SheetBaseSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    base_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    base_thickness_remark?: NullableStringFieldUpdateOperationsInput | string | null
    max_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutSheetBaseSpecNestedInput
  }

  export type SheetBaseSpecCreateManyInput = {
    id?: number
    base_thickness?: number | null
    base_thickness_remark?: string | null
    max_sheet_x?: number | null
    max_sheet_y?: number | null
    min_sheet_x?: number | null
    min_sheet_y?: number | null
    max_base_x?: number | null
    max_base_y?: number | null
    min_base_x?: number | null
    min_base_y?: number | null
  }

  export type SheetBaseSpecUpdateManyMutationInput = {
    base_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    base_thickness_remark?: NullableStringFieldUpdateOperationsInput | string | null
    max_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SheetBaseSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    base_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    base_thickness_remark?: NullableStringFieldUpdateOperationsInput | string | null
    max_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SutebaSpecCreateInput = {
    suteba_pitch?: number | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutSutebaSpecInput
  }

  export type SutebaSpecUncheckedCreateInput = {
    id?: number
    suteba_pitch?: number | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutSutebaSpecInput
  }

  export type SutebaSpecUpdateInput = {
    suteba_pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutSutebaSpecNestedInput
  }

  export type SutebaSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    suteba_pitch?: NullableFloatFieldUpdateOperationsInput | number | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutSutebaSpecNestedInput
  }

  export type SutebaSpecCreateManyInput = {
    id?: number
    suteba_pitch?: number | null
  }

  export type SutebaSpecUpdateManyMutationInput = {
    suteba_pitch?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SutebaSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    suteba_pitch?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SpongeCorkSpecCreateInput = {
    sponge?: string | null
    cork?: string | null
    cork_crushing?: string | null
    crushing_remark?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutSpongeCorkSpecInput
  }

  export type SpongeCorkSpecUncheckedCreateInput = {
    id?: number
    sponge?: string | null
    cork?: string | null
    cork_crushing?: string | null
    crushing_remark?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutSpongeCorkSpecInput
  }

  export type SpongeCorkSpecUpdateInput = {
    sponge?: NullableStringFieldUpdateOperationsInput | string | null
    cork?: NullableStringFieldUpdateOperationsInput | string | null
    cork_crushing?: NullableStringFieldUpdateOperationsInput | string | null
    crushing_remark?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutSpongeCorkSpecNestedInput
  }

  export type SpongeCorkSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sponge?: NullableStringFieldUpdateOperationsInput | string | null
    cork?: NullableStringFieldUpdateOperationsInput | string | null
    cork_crushing?: NullableStringFieldUpdateOperationsInput | string | null
    crushing_remark?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutSpongeCorkSpecNestedInput
  }

  export type SpongeCorkSpecCreateManyInput = {
    id?: number
    sponge?: string | null
    cork?: string | null
    cork_crushing?: string | null
    crushing_remark?: string | null
  }

  export type SpongeCorkSpecUpdateManyMutationInput = {
    sponge?: NullableStringFieldUpdateOperationsInput | string | null
    cork?: NullableStringFieldUpdateOperationsInput | string | null
    cork_crushing?: NullableStringFieldUpdateOperationsInput | string | null
    crushing_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpongeCorkSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sponge?: NullableStringFieldUpdateOperationsInput | string | null
    cork?: NullableStringFieldUpdateOperationsInput | string | null
    cork_crushing?: NullableStringFieldUpdateOperationsInput | string | null
    crushing_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CenterMetalSpecCreateInput = {
    center_metal?: string | null
    center_metal_kind?: string | null
    center_metal_center?: string | null
    center_metal_right?: string | null
    center_metal_left?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutCenterMetalSpecInput
  }

  export type CenterMetalSpecUncheckedCreateInput = {
    id?: number
    center_metal?: string | null
    center_metal_kind?: string | null
    center_metal_center?: string | null
    center_metal_right?: string | null
    center_metal_left?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutCenterMetalSpecInput
  }

  export type CenterMetalSpecUpdateInput = {
    center_metal?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_kind?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_center?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_right?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_left?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutCenterMetalSpecNestedInput
  }

  export type CenterMetalSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    center_metal?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_kind?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_center?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_right?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_left?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutCenterMetalSpecNestedInput
  }

  export type CenterMetalSpecCreateManyInput = {
    id?: number
    center_metal?: string | null
    center_metal_kind?: string | null
    center_metal_center?: string | null
    center_metal_right?: string | null
    center_metal_left?: string | null
  }

  export type CenterMetalSpecUpdateManyMutationInput = {
    center_metal?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_kind?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_center?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_right?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_left?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CenterMetalSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    center_metal?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_kind?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_center?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_right?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_left?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NickSpecCreateInput = {
    nick?: string | null
    nick_remark_1?: string | null
    nick_remark_2?: string | null
    nick_remark_3?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutNickSpecInput
  }

  export type NickSpecUncheckedCreateInput = {
    id?: number
    nick?: string | null
    nick_remark_1?: string | null
    nick_remark_2?: string | null
    nick_remark_3?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutNickSpecInput
  }

  export type NickSpecUpdateInput = {
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutNickSpecNestedInput
  }

  export type NickSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutNickSpecNestedInput
  }

  export type NickSpecCreateManyInput = {
    id?: number
    nick?: string | null
    nick_remark_1?: string | null
    nick_remark_2?: string | null
    nick_remark_3?: string | null
  }

  export type NickSpecUpdateManyMutationInput = {
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NickSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleThicknessSpecCreateInput = {
    ef_rule?: string | null
    bf_rule?: string | null
    af_rule?: string | null
    wf_rule?: string | null
    gf_rule?: string | null
    ff_rule?: string | null
    cf_rule?: string | null
    paper_350_rule?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutRuleThicknessSpecInput
  }

  export type RuleThicknessSpecUncheckedCreateInput = {
    id?: number
    ef_rule?: string | null
    bf_rule?: string | null
    af_rule?: string | null
    wf_rule?: string | null
    gf_rule?: string | null
    ff_rule?: string | null
    cf_rule?: string | null
    paper_350_rule?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutRuleThicknessSpecInput
  }

  export type RuleThicknessSpecUpdateInput = {
    ef_rule?: NullableStringFieldUpdateOperationsInput | string | null
    bf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    af_rule?: NullableStringFieldUpdateOperationsInput | string | null
    wf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    gf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    ff_rule?: NullableStringFieldUpdateOperationsInput | string | null
    cf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    paper_350_rule?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutRuleThicknessSpecNestedInput
  }

  export type RuleThicknessSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ef_rule?: NullableStringFieldUpdateOperationsInput | string | null
    bf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    af_rule?: NullableStringFieldUpdateOperationsInput | string | null
    wf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    gf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    ff_rule?: NullableStringFieldUpdateOperationsInput | string | null
    cf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    paper_350_rule?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutRuleThicknessSpecNestedInput
  }

  export type RuleThicknessSpecCreateManyInput = {
    id?: number
    ef_rule?: string | null
    bf_rule?: string | null
    af_rule?: string | null
    wf_rule?: string | null
    gf_rule?: string | null
    ff_rule?: string | null
    cf_rule?: string | null
    paper_350_rule?: string | null
  }

  export type RuleThicknessSpecUpdateManyMutationInput = {
    ef_rule?: NullableStringFieldUpdateOperationsInput | string | null
    bf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    af_rule?: NullableStringFieldUpdateOperationsInput | string | null
    wf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    gf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    ff_rule?: NullableStringFieldUpdateOperationsInput | string | null
    cf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    paper_350_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleThicknessSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ef_rule?: NullableStringFieldUpdateOperationsInput | string | null
    bf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    af_rule?: NullableStringFieldUpdateOperationsInput | string | null
    wf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    gf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    ff_rule?: NullableStringFieldUpdateOperationsInput | string | null
    cf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    paper_350_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkSpecCreateInput = {
    remark_1?: string | null
    remark_2?: string | null
    remark_3?: string | null
    stripper_first_suteba?: string | null
    air_hammer_first_suteba?: string | null
    ueda_first_suteba?: string | null
    machineBasicSpec?: MachineBasicSpecCreateNestedOneWithoutRemarkSpecInput
  }

  export type RemarkSpecUncheckedCreateInput = {
    id?: number
    remark_1?: string | null
    remark_2?: string | null
    remark_3?: string | null
    stripper_first_suteba?: string | null
    air_hammer_first_suteba?: string | null
    ueda_first_suteba?: string | null
    machineBasicSpec?: MachineBasicSpecUncheckedCreateNestedOneWithoutRemarkSpecInput
  }

  export type RemarkSpecUpdateInput = {
    remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    stripper_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    air_hammer_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    ueda_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUpdateOneWithoutRemarkSpecNestedInput
  }

  export type RemarkSpecUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    stripper_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    air_hammer_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    ueda_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    machineBasicSpec?: MachineBasicSpecUncheckedUpdateOneWithoutRemarkSpecNestedInput
  }

  export type RemarkSpecCreateManyInput = {
    id?: number
    remark_1?: string | null
    remark_2?: string | null
    remark_3?: string | null
    stripper_first_suteba?: string | null
    air_hammer_first_suteba?: string | null
    ueda_first_suteba?: string | null
  }

  export type RemarkSpecUpdateManyMutationInput = {
    remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    stripper_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    air_hammer_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    ueda_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkSpecUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    stripper_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    air_hammer_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    ueda_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type KuwaeSpecNullableScalarRelationFilter = {
    is?: KuwaeSpecWhereInput | null
    isNot?: KuwaeSpecWhereInput | null
  }

  export type DetailSpecNullableScalarRelationFilter = {
    is?: DetailSpecWhereInput | null
    isNot?: DetailSpecWhereInput | null
  }

  export type FilmSpecNullableScalarRelationFilter = {
    is?: FilmSpecWhereInput | null
    isNot?: FilmSpecWhereInput | null
  }

  export type RuleSpecNullableScalarRelationFilter = {
    is?: RuleSpecWhereInput | null
    isNot?: RuleSpecWhereInput | null
  }

  export type SheetBaseSpecNullableScalarRelationFilter = {
    is?: SheetBaseSpecWhereInput | null
    isNot?: SheetBaseSpecWhereInput | null
  }

  export type SutebaSpecNullableScalarRelationFilter = {
    is?: SutebaSpecWhereInput | null
    isNot?: SutebaSpecWhereInput | null
  }

  export type SpongeCorkSpecNullableScalarRelationFilter = {
    is?: SpongeCorkSpecWhereInput | null
    isNot?: SpongeCorkSpecWhereInput | null
  }

  export type CenterMetalSpecNullableScalarRelationFilter = {
    is?: CenterMetalSpecWhereInput | null
    isNot?: CenterMetalSpecWhereInput | null
  }

  export type NickSpecNullableScalarRelationFilter = {
    is?: NickSpecWhereInput | null
    isNot?: NickSpecWhereInput | null
  }

  export type RuleThicknessSpecNullableScalarRelationFilter = {
    is?: RuleThicknessSpecWhereInput | null
    isNot?: RuleThicknessSpecWhereInput | null
  }

  export type RemarkSpecNullableScalarRelationFilter = {
    is?: RemarkSpecWhereInput | null
    isNot?: RemarkSpecWhereInput | null
  }

  export type MachineBasicSpecCountOrderByAggregateInput = {
    id?: SortOrder
    machineManufacturerId?: SortOrder
    machineManufacturerName?: SortOrder
    machineName?: SortOrder
    machineType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    kuwaeSpecId?: SortOrder
    detailSpecId?: SortOrder
    filmSpecId?: SortOrder
    ruleSpecId?: SortOrder
    sheetBaseSpecId?: SortOrder
    sutebaSpecId?: SortOrder
    spongeCorkSpecId?: SortOrder
    centerMetalSpecId?: SortOrder
    nickSpecId?: SortOrder
    ruleThicknessSpecId?: SortOrder
    remarkSpecId?: SortOrder
  }

  export type MachineBasicSpecAvgOrderByAggregateInput = {
    id?: SortOrder
    kuwaeSpecId?: SortOrder
    detailSpecId?: SortOrder
    filmSpecId?: SortOrder
    ruleSpecId?: SortOrder
    sheetBaseSpecId?: SortOrder
    sutebaSpecId?: SortOrder
    spongeCorkSpecId?: SortOrder
    centerMetalSpecId?: SortOrder
    nickSpecId?: SortOrder
    ruleThicknessSpecId?: SortOrder
    remarkSpecId?: SortOrder
  }

  export type MachineBasicSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    machineManufacturerId?: SortOrder
    machineManufacturerName?: SortOrder
    machineName?: SortOrder
    machineType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    kuwaeSpecId?: SortOrder
    detailSpecId?: SortOrder
    filmSpecId?: SortOrder
    ruleSpecId?: SortOrder
    sheetBaseSpecId?: SortOrder
    sutebaSpecId?: SortOrder
    spongeCorkSpecId?: SortOrder
    centerMetalSpecId?: SortOrder
    nickSpecId?: SortOrder
    ruleThicknessSpecId?: SortOrder
    remarkSpecId?: SortOrder
  }

  export type MachineBasicSpecMinOrderByAggregateInput = {
    id?: SortOrder
    machineManufacturerId?: SortOrder
    machineManufacturerName?: SortOrder
    machineName?: SortOrder
    machineType?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    kuwaeSpecId?: SortOrder
    detailSpecId?: SortOrder
    filmSpecId?: SortOrder
    ruleSpecId?: SortOrder
    sheetBaseSpecId?: SortOrder
    sutebaSpecId?: SortOrder
    spongeCorkSpecId?: SortOrder
    centerMetalSpecId?: SortOrder
    nickSpecId?: SortOrder
    ruleThicknessSpecId?: SortOrder
    remarkSpecId?: SortOrder
  }

  export type MachineBasicSpecSumOrderByAggregateInput = {
    id?: SortOrder
    kuwaeSpecId?: SortOrder
    detailSpecId?: SortOrder
    filmSpecId?: SortOrder
    ruleSpecId?: SortOrder
    sheetBaseSpecId?: SortOrder
    sutebaSpecId?: SortOrder
    spongeCorkSpecId?: SortOrder
    centerMetalSpecId?: SortOrder
    nickSpecId?: SortOrder
    ruleThicknessSpecId?: SortOrder
    remarkSpecId?: SortOrder
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

  export type MachineBasicSpecNullableScalarRelationFilter = {
    is?: MachineBasicSpecWhereInput | null
    isNot?: MachineBasicSpecWhereInput | null
  }

  export type KuwaeSpecCountOrderByAggregateInput = {
    id?: SortOrder
    die_kuwae?: SortOrder
    kuwae_cutting_thickness?: SortOrder
    kuwae_cutting_width?: SortOrder
    kuwae_angle?: SortOrder
    back_kuwae_angle?: SortOrder
  }

  export type KuwaeSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KuwaeSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    die_kuwae?: SortOrder
    kuwae_cutting_thickness?: SortOrder
    kuwae_cutting_width?: SortOrder
    kuwae_angle?: SortOrder
    back_kuwae_angle?: SortOrder
  }

  export type KuwaeSpecMinOrderByAggregateInput = {
    id?: SortOrder
    die_kuwae?: SortOrder
    kuwae_cutting_thickness?: SortOrder
    kuwae_cutting_width?: SortOrder
    kuwae_angle?: SortOrder
    back_kuwae_angle?: SortOrder
  }

  export type KuwaeSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetailSpecCountOrderByAggregateInput = {
    id?: SortOrder
    mounting_hole?: SortOrder
    nail_nut?: SortOrder
    one_touch_bar?: SortOrder
    stripper?: SortOrder
    blanking?: SortOrder
    under_pin?: SortOrder
    cad_plate?: SortOrder
    cad_plate_remark?: SortOrder
  }

  export type DetailSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DetailSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    mounting_hole?: SortOrder
    nail_nut?: SortOrder
    one_touch_bar?: SortOrder
    stripper?: SortOrder
    blanking?: SortOrder
    under_pin?: SortOrder
    cad_plate?: SortOrder
    cad_plate_remark?: SortOrder
  }

  export type DetailSpecMinOrderByAggregateInput = {
    id?: SortOrder
    mounting_hole?: SortOrder
    nail_nut?: SortOrder
    one_touch_bar?: SortOrder
    stripper?: SortOrder
    blanking?: SortOrder
    under_pin?: SortOrder
    cad_plate?: SortOrder
    cad_plate_remark?: SortOrder
  }

  export type DetailSpecSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FilmSpecCountOrderByAggregateInput = {
    id?: SortOrder
    film?: SortOrder
    film_thickness?: SortOrder
  }

  export type FilmSpecAvgOrderByAggregateInput = {
    id?: SortOrder
    film_thickness?: SortOrder
  }

  export type FilmSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    film?: SortOrder
    film_thickness?: SortOrder
  }

  export type FilmSpecMinOrderByAggregateInput = {
    id?: SortOrder
    film?: SortOrder
    film_thickness?: SortOrder
  }

  export type FilmSpecSumOrderByAggregateInput = {
    id?: SortOrder
    film_thickness?: SortOrder
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

  export type RuleSpecCountOrderByAggregateInput = {
    id?: SortOrder
    balance_rule?: SortOrder
    inside_sheet_rule?: SortOrder
  }

  export type RuleSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RuleSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    balance_rule?: SortOrder
    inside_sheet_rule?: SortOrder
  }

  export type RuleSpecMinOrderByAggregateInput = {
    id?: SortOrder
    balance_rule?: SortOrder
    inside_sheet_rule?: SortOrder
  }

  export type RuleSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SheetBaseSpecCountOrderByAggregateInput = {
    id?: SortOrder
    base_thickness?: SortOrder
    base_thickness_remark?: SortOrder
    max_sheet_x?: SortOrder
    max_sheet_y?: SortOrder
    min_sheet_x?: SortOrder
    min_sheet_y?: SortOrder
    max_base_x?: SortOrder
    max_base_y?: SortOrder
    min_base_x?: SortOrder
    min_base_y?: SortOrder
  }

  export type SheetBaseSpecAvgOrderByAggregateInput = {
    id?: SortOrder
    base_thickness?: SortOrder
    max_sheet_x?: SortOrder
    max_sheet_y?: SortOrder
    min_sheet_x?: SortOrder
    min_sheet_y?: SortOrder
    max_base_x?: SortOrder
    max_base_y?: SortOrder
    min_base_x?: SortOrder
    min_base_y?: SortOrder
  }

  export type SheetBaseSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    base_thickness?: SortOrder
    base_thickness_remark?: SortOrder
    max_sheet_x?: SortOrder
    max_sheet_y?: SortOrder
    min_sheet_x?: SortOrder
    min_sheet_y?: SortOrder
    max_base_x?: SortOrder
    max_base_y?: SortOrder
    min_base_x?: SortOrder
    min_base_y?: SortOrder
  }

  export type SheetBaseSpecMinOrderByAggregateInput = {
    id?: SortOrder
    base_thickness?: SortOrder
    base_thickness_remark?: SortOrder
    max_sheet_x?: SortOrder
    max_sheet_y?: SortOrder
    min_sheet_x?: SortOrder
    min_sheet_y?: SortOrder
    max_base_x?: SortOrder
    max_base_y?: SortOrder
    min_base_x?: SortOrder
    min_base_y?: SortOrder
  }

  export type SheetBaseSpecSumOrderByAggregateInput = {
    id?: SortOrder
    base_thickness?: SortOrder
    max_sheet_x?: SortOrder
    max_sheet_y?: SortOrder
    min_sheet_x?: SortOrder
    min_sheet_y?: SortOrder
    max_base_x?: SortOrder
    max_base_y?: SortOrder
    min_base_x?: SortOrder
    min_base_y?: SortOrder
  }

  export type SutebaSpecCountOrderByAggregateInput = {
    id?: SortOrder
    suteba_pitch?: SortOrder
  }

  export type SutebaSpecAvgOrderByAggregateInput = {
    id?: SortOrder
    suteba_pitch?: SortOrder
  }

  export type SutebaSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    suteba_pitch?: SortOrder
  }

  export type SutebaSpecMinOrderByAggregateInput = {
    id?: SortOrder
    suteba_pitch?: SortOrder
  }

  export type SutebaSpecSumOrderByAggregateInput = {
    id?: SortOrder
    suteba_pitch?: SortOrder
  }

  export type SpongeCorkSpecCountOrderByAggregateInput = {
    id?: SortOrder
    sponge?: SortOrder
    cork?: SortOrder
    cork_crushing?: SortOrder
    crushing_remark?: SortOrder
  }

  export type SpongeCorkSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpongeCorkSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    sponge?: SortOrder
    cork?: SortOrder
    cork_crushing?: SortOrder
    crushing_remark?: SortOrder
  }

  export type SpongeCorkSpecMinOrderByAggregateInput = {
    id?: SortOrder
    sponge?: SortOrder
    cork?: SortOrder
    cork_crushing?: SortOrder
    crushing_remark?: SortOrder
  }

  export type SpongeCorkSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CenterMetalSpecCountOrderByAggregateInput = {
    id?: SortOrder
    center_metal?: SortOrder
    center_metal_kind?: SortOrder
    center_metal_center?: SortOrder
    center_metal_right?: SortOrder
    center_metal_left?: SortOrder
  }

  export type CenterMetalSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CenterMetalSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    center_metal?: SortOrder
    center_metal_kind?: SortOrder
    center_metal_center?: SortOrder
    center_metal_right?: SortOrder
    center_metal_left?: SortOrder
  }

  export type CenterMetalSpecMinOrderByAggregateInput = {
    id?: SortOrder
    center_metal?: SortOrder
    center_metal_kind?: SortOrder
    center_metal_center?: SortOrder
    center_metal_right?: SortOrder
    center_metal_left?: SortOrder
  }

  export type CenterMetalSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NickSpecCountOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    nick_remark_1?: SortOrder
    nick_remark_2?: SortOrder
    nick_remark_3?: SortOrder
  }

  export type NickSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NickSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    nick_remark_1?: SortOrder
    nick_remark_2?: SortOrder
    nick_remark_3?: SortOrder
  }

  export type NickSpecMinOrderByAggregateInput = {
    id?: SortOrder
    nick?: SortOrder
    nick_remark_1?: SortOrder
    nick_remark_2?: SortOrder
    nick_remark_3?: SortOrder
  }

  export type NickSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RuleThicknessSpecCountOrderByAggregateInput = {
    id?: SortOrder
    ef_rule?: SortOrder
    bf_rule?: SortOrder
    af_rule?: SortOrder
    wf_rule?: SortOrder
    gf_rule?: SortOrder
    ff_rule?: SortOrder
    cf_rule?: SortOrder
    paper_350_rule?: SortOrder
  }

  export type RuleThicknessSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RuleThicknessSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    ef_rule?: SortOrder
    bf_rule?: SortOrder
    af_rule?: SortOrder
    wf_rule?: SortOrder
    gf_rule?: SortOrder
    ff_rule?: SortOrder
    cf_rule?: SortOrder
    paper_350_rule?: SortOrder
  }

  export type RuleThicknessSpecMinOrderByAggregateInput = {
    id?: SortOrder
    ef_rule?: SortOrder
    bf_rule?: SortOrder
    af_rule?: SortOrder
    wf_rule?: SortOrder
    gf_rule?: SortOrder
    ff_rule?: SortOrder
    cf_rule?: SortOrder
    paper_350_rule?: SortOrder
  }

  export type RuleThicknessSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RemarkSpecCountOrderByAggregateInput = {
    id?: SortOrder
    remark_1?: SortOrder
    remark_2?: SortOrder
    remark_3?: SortOrder
    stripper_first_suteba?: SortOrder
    air_hammer_first_suteba?: SortOrder
    ueda_first_suteba?: SortOrder
  }

  export type RemarkSpecAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RemarkSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    remark_1?: SortOrder
    remark_2?: SortOrder
    remark_3?: SortOrder
    stripper_first_suteba?: SortOrder
    air_hammer_first_suteba?: SortOrder
    ueda_first_suteba?: SortOrder
  }

  export type RemarkSpecMinOrderByAggregateInput = {
    id?: SortOrder
    remark_1?: SortOrder
    remark_2?: SortOrder
    remark_3?: SortOrder
    stripper_first_suteba?: SortOrder
    air_hammer_first_suteba?: SortOrder
    ueda_first_suteba?: SortOrder
  }

  export type RemarkSpecSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<KuwaeSpecCreateWithoutMachineBasicSpecInput, KuwaeSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: KuwaeSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: KuwaeSpecWhereUniqueInput
  }

  export type DetailSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<DetailSpecCreateWithoutMachineBasicSpecInput, DetailSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: DetailSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: DetailSpecWhereUniqueInput
  }

  export type FilmSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<FilmSpecCreateWithoutMachineBasicSpecInput, FilmSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: FilmSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: FilmSpecWhereUniqueInput
  }

  export type RuleSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<RuleSpecCreateWithoutMachineBasicSpecInput, RuleSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: RuleSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: RuleSpecWhereUniqueInput
  }

  export type SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<SheetBaseSpecCreateWithoutMachineBasicSpecInput, SheetBaseSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: SheetBaseSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: SheetBaseSpecWhereUniqueInput
  }

  export type SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<SutebaSpecCreateWithoutMachineBasicSpecInput, SutebaSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: SutebaSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: SutebaSpecWhereUniqueInput
  }

  export type SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<SpongeCorkSpecCreateWithoutMachineBasicSpecInput, SpongeCorkSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: SpongeCorkSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: SpongeCorkSpecWhereUniqueInput
  }

  export type CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<CenterMetalSpecCreateWithoutMachineBasicSpecInput, CenterMetalSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: CenterMetalSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: CenterMetalSpecWhereUniqueInput
  }

  export type NickSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<NickSpecCreateWithoutMachineBasicSpecInput, NickSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: NickSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: NickSpecWhereUniqueInput
  }

  export type RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<RuleThicknessSpecCreateWithoutMachineBasicSpecInput, RuleThicknessSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: RuleThicknessSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: RuleThicknessSpecWhereUniqueInput
  }

  export type RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput = {
    create?: XOR<RemarkSpecCreateWithoutMachineBasicSpecInput, RemarkSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: RemarkSpecCreateOrConnectWithoutMachineBasicSpecInput
    connect?: RemarkSpecWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<KuwaeSpecCreateWithoutMachineBasicSpecInput, KuwaeSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: KuwaeSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: KuwaeSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: KuwaeSpecWhereInput | boolean
    delete?: KuwaeSpecWhereInput | boolean
    connect?: KuwaeSpecWhereUniqueInput
    update?: XOR<XOR<KuwaeSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, KuwaeSpecUpdateWithoutMachineBasicSpecInput>, KuwaeSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<DetailSpecCreateWithoutMachineBasicSpecInput, DetailSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: DetailSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: DetailSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: DetailSpecWhereInput | boolean
    delete?: DetailSpecWhereInput | boolean
    connect?: DetailSpecWhereUniqueInput
    update?: XOR<XOR<DetailSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, DetailSpecUpdateWithoutMachineBasicSpecInput>, DetailSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<FilmSpecCreateWithoutMachineBasicSpecInput, FilmSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: FilmSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: FilmSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: FilmSpecWhereInput | boolean
    delete?: FilmSpecWhereInput | boolean
    connect?: FilmSpecWhereUniqueInput
    update?: XOR<XOR<FilmSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, FilmSpecUpdateWithoutMachineBasicSpecInput>, FilmSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<RuleSpecCreateWithoutMachineBasicSpecInput, RuleSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: RuleSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: RuleSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: RuleSpecWhereInput | boolean
    delete?: RuleSpecWhereInput | boolean
    connect?: RuleSpecWhereUniqueInput
    update?: XOR<XOR<RuleSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, RuleSpecUpdateWithoutMachineBasicSpecInput>, RuleSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<SheetBaseSpecCreateWithoutMachineBasicSpecInput, SheetBaseSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: SheetBaseSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: SheetBaseSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: SheetBaseSpecWhereInput | boolean
    delete?: SheetBaseSpecWhereInput | boolean
    connect?: SheetBaseSpecWhereUniqueInput
    update?: XOR<XOR<SheetBaseSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, SheetBaseSpecUpdateWithoutMachineBasicSpecInput>, SheetBaseSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<SutebaSpecCreateWithoutMachineBasicSpecInput, SutebaSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: SutebaSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: SutebaSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: SutebaSpecWhereInput | boolean
    delete?: SutebaSpecWhereInput | boolean
    connect?: SutebaSpecWhereUniqueInput
    update?: XOR<XOR<SutebaSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, SutebaSpecUpdateWithoutMachineBasicSpecInput>, SutebaSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<SpongeCorkSpecCreateWithoutMachineBasicSpecInput, SpongeCorkSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: SpongeCorkSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: SpongeCorkSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: SpongeCorkSpecWhereInput | boolean
    delete?: SpongeCorkSpecWhereInput | boolean
    connect?: SpongeCorkSpecWhereUniqueInput
    update?: XOR<XOR<SpongeCorkSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, SpongeCorkSpecUpdateWithoutMachineBasicSpecInput>, SpongeCorkSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<CenterMetalSpecCreateWithoutMachineBasicSpecInput, CenterMetalSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: CenterMetalSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: CenterMetalSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: CenterMetalSpecWhereInput | boolean
    delete?: CenterMetalSpecWhereInput | boolean
    connect?: CenterMetalSpecWhereUniqueInput
    update?: XOR<XOR<CenterMetalSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, CenterMetalSpecUpdateWithoutMachineBasicSpecInput>, CenterMetalSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type NickSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<NickSpecCreateWithoutMachineBasicSpecInput, NickSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: NickSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: NickSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: NickSpecWhereInput | boolean
    delete?: NickSpecWhereInput | boolean
    connect?: NickSpecWhereUniqueInput
    update?: XOR<XOR<NickSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, NickSpecUpdateWithoutMachineBasicSpecInput>, NickSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<RuleThicknessSpecCreateWithoutMachineBasicSpecInput, RuleThicknessSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: RuleThicknessSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: RuleThicknessSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: RuleThicknessSpecWhereInput | boolean
    delete?: RuleThicknessSpecWhereInput | boolean
    connect?: RuleThicknessSpecWhereUniqueInput
    update?: XOR<XOR<RuleThicknessSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, RuleThicknessSpecUpdateWithoutMachineBasicSpecInput>, RuleThicknessSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput = {
    create?: XOR<RemarkSpecCreateWithoutMachineBasicSpecInput, RemarkSpecUncheckedCreateWithoutMachineBasicSpecInput>
    connectOrCreate?: RemarkSpecCreateOrConnectWithoutMachineBasicSpecInput
    upsert?: RemarkSpecUpsertWithoutMachineBasicSpecInput
    disconnect?: RemarkSpecWhereInput | boolean
    delete?: RemarkSpecWhereInput | boolean
    connect?: RemarkSpecWhereUniqueInput
    update?: XOR<XOR<RemarkSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput, RemarkSpecUpdateWithoutMachineBasicSpecInput>, RemarkSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutKuwaeSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutKuwaeSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutKuwaeSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutKuwaeSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutKuwaeSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutKuwaeSpecInput
    upsert?: MachineBasicSpecUpsertWithoutKuwaeSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutKuwaeSpecInput, MachineBasicSpecUpdateWithoutKuwaeSpecInput>, MachineBasicSpecUncheckedUpdateWithoutKuwaeSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutKuwaeSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutKuwaeSpecInput
    upsert?: MachineBasicSpecUpsertWithoutKuwaeSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutKuwaeSpecInput, MachineBasicSpecUpdateWithoutKuwaeSpecInput>, MachineBasicSpecUncheckedUpdateWithoutKuwaeSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutDetailSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutDetailSpecInput, MachineBasicSpecUncheckedCreateWithoutDetailSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutDetailSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutDetailSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutDetailSpecInput, MachineBasicSpecUncheckedCreateWithoutDetailSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutDetailSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutDetailSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutDetailSpecInput, MachineBasicSpecUncheckedCreateWithoutDetailSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutDetailSpecInput
    upsert?: MachineBasicSpecUpsertWithoutDetailSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutDetailSpecInput, MachineBasicSpecUpdateWithoutDetailSpecInput>, MachineBasicSpecUncheckedUpdateWithoutDetailSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutDetailSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutDetailSpecInput, MachineBasicSpecUncheckedCreateWithoutDetailSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutDetailSpecInput
    upsert?: MachineBasicSpecUpsertWithoutDetailSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutDetailSpecInput, MachineBasicSpecUpdateWithoutDetailSpecInput>, MachineBasicSpecUncheckedUpdateWithoutDetailSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutFilmSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutFilmSpecInput, MachineBasicSpecUncheckedCreateWithoutFilmSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutFilmSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutFilmSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutFilmSpecInput, MachineBasicSpecUncheckedCreateWithoutFilmSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutFilmSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MachineBasicSpecUpdateOneWithoutFilmSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutFilmSpecInput, MachineBasicSpecUncheckedCreateWithoutFilmSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutFilmSpecInput
    upsert?: MachineBasicSpecUpsertWithoutFilmSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutFilmSpecInput, MachineBasicSpecUpdateWithoutFilmSpecInput>, MachineBasicSpecUncheckedUpdateWithoutFilmSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutFilmSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutFilmSpecInput, MachineBasicSpecUncheckedCreateWithoutFilmSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutFilmSpecInput
    upsert?: MachineBasicSpecUpsertWithoutFilmSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutFilmSpecInput, MachineBasicSpecUpdateWithoutFilmSpecInput>, MachineBasicSpecUncheckedUpdateWithoutFilmSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutRuleSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutRuleSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutRuleSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleSpecInput
    upsert?: MachineBasicSpecUpsertWithoutRuleSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutRuleSpecInput, MachineBasicSpecUpdateWithoutRuleSpecInput>, MachineBasicSpecUncheckedUpdateWithoutRuleSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutRuleSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleSpecInput
    upsert?: MachineBasicSpecUpsertWithoutRuleSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutRuleSpecInput, MachineBasicSpecUpdateWithoutRuleSpecInput>, MachineBasicSpecUncheckedUpdateWithoutRuleSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutSheetBaseSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSheetBaseSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutSheetBaseSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSheetBaseSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutSheetBaseSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSheetBaseSpecInput
    upsert?: MachineBasicSpecUpsertWithoutSheetBaseSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutSheetBaseSpecInput, MachineBasicSpecUpdateWithoutSheetBaseSpecInput>, MachineBasicSpecUncheckedUpdateWithoutSheetBaseSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutSheetBaseSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSheetBaseSpecInput
    upsert?: MachineBasicSpecUpsertWithoutSheetBaseSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutSheetBaseSpecInput, MachineBasicSpecUpdateWithoutSheetBaseSpecInput>, MachineBasicSpecUncheckedUpdateWithoutSheetBaseSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutSutebaSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSutebaSpecInput, MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSutebaSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutSutebaSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSutebaSpecInput, MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSutebaSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutSutebaSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSutebaSpecInput, MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSutebaSpecInput
    upsert?: MachineBasicSpecUpsertWithoutSutebaSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutSutebaSpecInput, MachineBasicSpecUpdateWithoutSutebaSpecInput>, MachineBasicSpecUncheckedUpdateWithoutSutebaSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutSutebaSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSutebaSpecInput, MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSutebaSpecInput
    upsert?: MachineBasicSpecUpsertWithoutSutebaSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutSutebaSpecInput, MachineBasicSpecUpdateWithoutSutebaSpecInput>, MachineBasicSpecUncheckedUpdateWithoutSutebaSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutSpongeCorkSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSpongeCorkSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutSpongeCorkSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSpongeCorkSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutSpongeCorkSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSpongeCorkSpecInput
    upsert?: MachineBasicSpecUpsertWithoutSpongeCorkSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutSpongeCorkSpecInput, MachineBasicSpecUpdateWithoutSpongeCorkSpecInput>, MachineBasicSpecUncheckedUpdateWithoutSpongeCorkSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutSpongeCorkSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutSpongeCorkSpecInput
    upsert?: MachineBasicSpecUpsertWithoutSpongeCorkSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutSpongeCorkSpecInput, MachineBasicSpecUpdateWithoutSpongeCorkSpecInput>, MachineBasicSpecUncheckedUpdateWithoutSpongeCorkSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutCenterMetalSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutCenterMetalSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutCenterMetalSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutCenterMetalSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutCenterMetalSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutCenterMetalSpecInput
    upsert?: MachineBasicSpecUpsertWithoutCenterMetalSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutCenterMetalSpecInput, MachineBasicSpecUpdateWithoutCenterMetalSpecInput>, MachineBasicSpecUncheckedUpdateWithoutCenterMetalSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutCenterMetalSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutCenterMetalSpecInput
    upsert?: MachineBasicSpecUpsertWithoutCenterMetalSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutCenterMetalSpecInput, MachineBasicSpecUpdateWithoutCenterMetalSpecInput>, MachineBasicSpecUncheckedUpdateWithoutCenterMetalSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutNickSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutNickSpecInput, MachineBasicSpecUncheckedCreateWithoutNickSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutNickSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutNickSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutNickSpecInput, MachineBasicSpecUncheckedCreateWithoutNickSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutNickSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutNickSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutNickSpecInput, MachineBasicSpecUncheckedCreateWithoutNickSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutNickSpecInput
    upsert?: MachineBasicSpecUpsertWithoutNickSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutNickSpecInput, MachineBasicSpecUpdateWithoutNickSpecInput>, MachineBasicSpecUncheckedUpdateWithoutNickSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutNickSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutNickSpecInput, MachineBasicSpecUncheckedCreateWithoutNickSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutNickSpecInput
    upsert?: MachineBasicSpecUpsertWithoutNickSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutNickSpecInput, MachineBasicSpecUpdateWithoutNickSpecInput>, MachineBasicSpecUncheckedUpdateWithoutNickSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutRuleThicknessSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleThicknessSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutRuleThicknessSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleThicknessSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutRuleThicknessSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleThicknessSpecInput
    upsert?: MachineBasicSpecUpsertWithoutRuleThicknessSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutRuleThicknessSpecInput, MachineBasicSpecUpdateWithoutRuleThicknessSpecInput>, MachineBasicSpecUncheckedUpdateWithoutRuleThicknessSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutRuleThicknessSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRuleThicknessSpecInput
    upsert?: MachineBasicSpecUpsertWithoutRuleThicknessSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutRuleThicknessSpecInput, MachineBasicSpecUpdateWithoutRuleThicknessSpecInput>, MachineBasicSpecUncheckedUpdateWithoutRuleThicknessSpecInput>
  }

  export type MachineBasicSpecCreateNestedOneWithoutRemarkSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRemarkSpecInput, MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRemarkSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUncheckedCreateNestedOneWithoutRemarkSpecInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRemarkSpecInput, MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRemarkSpecInput
    connect?: MachineBasicSpecWhereUniqueInput
  }

  export type MachineBasicSpecUpdateOneWithoutRemarkSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRemarkSpecInput, MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRemarkSpecInput
    upsert?: MachineBasicSpecUpsertWithoutRemarkSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutRemarkSpecInput, MachineBasicSpecUpdateWithoutRemarkSpecInput>, MachineBasicSpecUncheckedUpdateWithoutRemarkSpecInput>
  }

  export type MachineBasicSpecUncheckedUpdateOneWithoutRemarkSpecNestedInput = {
    create?: XOR<MachineBasicSpecCreateWithoutRemarkSpecInput, MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput>
    connectOrCreate?: MachineBasicSpecCreateOrConnectWithoutRemarkSpecInput
    upsert?: MachineBasicSpecUpsertWithoutRemarkSpecInput
    disconnect?: MachineBasicSpecWhereInput | boolean
    delete?: MachineBasicSpecWhereInput | boolean
    connect?: MachineBasicSpecWhereUniqueInput
    update?: XOR<XOR<MachineBasicSpecUpdateToOneWithWhereWithoutRemarkSpecInput, MachineBasicSpecUpdateWithoutRemarkSpecInput>, MachineBasicSpecUncheckedUpdateWithoutRemarkSpecInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PostCreateWithoutAuthorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntNullableFilter<"Post"> | number | null
  }

  export type UserCreateWithoutPostsInput = {
    auth_id: string
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    auth_id: string
    email: string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    auth_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KuwaeSpecCreateWithoutMachineBasicSpecInput = {
    die_kuwae?: string | null
    kuwae_cutting_thickness?: string | null
    kuwae_cutting_width?: string | null
    kuwae_angle?: string | null
    back_kuwae_angle?: string | null
  }

  export type KuwaeSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    die_kuwae?: string | null
    kuwae_cutting_thickness?: string | null
    kuwae_cutting_width?: string | null
    kuwae_angle?: string | null
    back_kuwae_angle?: string | null
  }

  export type KuwaeSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: KuwaeSpecWhereUniqueInput
    create: XOR<KuwaeSpecCreateWithoutMachineBasicSpecInput, KuwaeSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type DetailSpecCreateWithoutMachineBasicSpecInput = {
    mounting_hole?: string | null
    nail_nut?: string | null
    one_touch_bar?: string | null
    stripper?: string | null
    blanking?: string | null
    under_pin?: string | null
    cad_plate?: string | null
    cad_plate_remark?: string | null
  }

  export type DetailSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    mounting_hole?: string | null
    nail_nut?: string | null
    one_touch_bar?: string | null
    stripper?: string | null
    blanking?: string | null
    under_pin?: string | null
    cad_plate?: string | null
    cad_plate_remark?: string | null
  }

  export type DetailSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: DetailSpecWhereUniqueInput
    create: XOR<DetailSpecCreateWithoutMachineBasicSpecInput, DetailSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type FilmSpecCreateWithoutMachineBasicSpecInput = {
    film?: string | null
    film_thickness?: number | null
  }

  export type FilmSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    film?: string | null
    film_thickness?: number | null
  }

  export type FilmSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: FilmSpecWhereUniqueInput
    create: XOR<FilmSpecCreateWithoutMachineBasicSpecInput, FilmSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type RuleSpecCreateWithoutMachineBasicSpecInput = {
    balance_rule?: string | null
    inside_sheet_rule?: string | null
  }

  export type RuleSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    balance_rule?: string | null
    inside_sheet_rule?: string | null
  }

  export type RuleSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: RuleSpecWhereUniqueInput
    create: XOR<RuleSpecCreateWithoutMachineBasicSpecInput, RuleSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type SheetBaseSpecCreateWithoutMachineBasicSpecInput = {
    base_thickness?: number | null
    base_thickness_remark?: string | null
    max_sheet_x?: number | null
    max_sheet_y?: number | null
    min_sheet_x?: number | null
    min_sheet_y?: number | null
    max_base_x?: number | null
    max_base_y?: number | null
    min_base_x?: number | null
    min_base_y?: number | null
  }

  export type SheetBaseSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    base_thickness?: number | null
    base_thickness_remark?: string | null
    max_sheet_x?: number | null
    max_sheet_y?: number | null
    min_sheet_x?: number | null
    min_sheet_y?: number | null
    max_base_x?: number | null
    max_base_y?: number | null
    min_base_x?: number | null
    min_base_y?: number | null
  }

  export type SheetBaseSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: SheetBaseSpecWhereUniqueInput
    create: XOR<SheetBaseSpecCreateWithoutMachineBasicSpecInput, SheetBaseSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type SutebaSpecCreateWithoutMachineBasicSpecInput = {
    suteba_pitch?: number | null
  }

  export type SutebaSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    suteba_pitch?: number | null
  }

  export type SutebaSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: SutebaSpecWhereUniqueInput
    create: XOR<SutebaSpecCreateWithoutMachineBasicSpecInput, SutebaSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type SpongeCorkSpecCreateWithoutMachineBasicSpecInput = {
    sponge?: string | null
    cork?: string | null
    cork_crushing?: string | null
    crushing_remark?: string | null
  }

  export type SpongeCorkSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    sponge?: string | null
    cork?: string | null
    cork_crushing?: string | null
    crushing_remark?: string | null
  }

  export type SpongeCorkSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: SpongeCorkSpecWhereUniqueInput
    create: XOR<SpongeCorkSpecCreateWithoutMachineBasicSpecInput, SpongeCorkSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type CenterMetalSpecCreateWithoutMachineBasicSpecInput = {
    center_metal?: string | null
    center_metal_kind?: string | null
    center_metal_center?: string | null
    center_metal_right?: string | null
    center_metal_left?: string | null
  }

  export type CenterMetalSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    center_metal?: string | null
    center_metal_kind?: string | null
    center_metal_center?: string | null
    center_metal_right?: string | null
    center_metal_left?: string | null
  }

  export type CenterMetalSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: CenterMetalSpecWhereUniqueInput
    create: XOR<CenterMetalSpecCreateWithoutMachineBasicSpecInput, CenterMetalSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type NickSpecCreateWithoutMachineBasicSpecInput = {
    nick?: string | null
    nick_remark_1?: string | null
    nick_remark_2?: string | null
    nick_remark_3?: string | null
  }

  export type NickSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    nick?: string | null
    nick_remark_1?: string | null
    nick_remark_2?: string | null
    nick_remark_3?: string | null
  }

  export type NickSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: NickSpecWhereUniqueInput
    create: XOR<NickSpecCreateWithoutMachineBasicSpecInput, NickSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type RuleThicknessSpecCreateWithoutMachineBasicSpecInput = {
    ef_rule?: string | null
    bf_rule?: string | null
    af_rule?: string | null
    wf_rule?: string | null
    gf_rule?: string | null
    ff_rule?: string | null
    cf_rule?: string | null
    paper_350_rule?: string | null
  }

  export type RuleThicknessSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    ef_rule?: string | null
    bf_rule?: string | null
    af_rule?: string | null
    wf_rule?: string | null
    gf_rule?: string | null
    ff_rule?: string | null
    cf_rule?: string | null
    paper_350_rule?: string | null
  }

  export type RuleThicknessSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: RuleThicknessSpecWhereUniqueInput
    create: XOR<RuleThicknessSpecCreateWithoutMachineBasicSpecInput, RuleThicknessSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type RemarkSpecCreateWithoutMachineBasicSpecInput = {
    remark_1?: string | null
    remark_2?: string | null
    remark_3?: string | null
    stripper_first_suteba?: string | null
    air_hammer_first_suteba?: string | null
    ueda_first_suteba?: string | null
  }

  export type RemarkSpecUncheckedCreateWithoutMachineBasicSpecInput = {
    id?: number
    remark_1?: string | null
    remark_2?: string | null
    remark_3?: string | null
    stripper_first_suteba?: string | null
    air_hammer_first_suteba?: string | null
    ueda_first_suteba?: string | null
  }

  export type RemarkSpecCreateOrConnectWithoutMachineBasicSpecInput = {
    where: RemarkSpecWhereUniqueInput
    create: XOR<RemarkSpecCreateWithoutMachineBasicSpecInput, RemarkSpecUncheckedCreateWithoutMachineBasicSpecInput>
  }

  export type KuwaeSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<KuwaeSpecUpdateWithoutMachineBasicSpecInput, KuwaeSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<KuwaeSpecCreateWithoutMachineBasicSpecInput, KuwaeSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: KuwaeSpecWhereInput
  }

  export type KuwaeSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: KuwaeSpecWhereInput
    data: XOR<KuwaeSpecUpdateWithoutMachineBasicSpecInput, KuwaeSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type KuwaeSpecUpdateWithoutMachineBasicSpecInput = {
    die_kuwae?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_thickness?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_width?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    back_kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KuwaeSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    die_kuwae?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_thickness?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_cutting_width?: NullableStringFieldUpdateOperationsInput | string | null
    kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
    back_kuwae_angle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<DetailSpecUpdateWithoutMachineBasicSpecInput, DetailSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<DetailSpecCreateWithoutMachineBasicSpecInput, DetailSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: DetailSpecWhereInput
  }

  export type DetailSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: DetailSpecWhereInput
    data: XOR<DetailSpecUpdateWithoutMachineBasicSpecInput, DetailSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type DetailSpecUpdateWithoutMachineBasicSpecInput = {
    mounting_hole?: NullableStringFieldUpdateOperationsInput | string | null
    nail_nut?: NullableStringFieldUpdateOperationsInput | string | null
    one_touch_bar?: NullableStringFieldUpdateOperationsInput | string | null
    stripper?: NullableStringFieldUpdateOperationsInput | string | null
    blanking?: NullableStringFieldUpdateOperationsInput | string | null
    under_pin?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DetailSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    mounting_hole?: NullableStringFieldUpdateOperationsInput | string | null
    nail_nut?: NullableStringFieldUpdateOperationsInput | string | null
    one_touch_bar?: NullableStringFieldUpdateOperationsInput | string | null
    stripper?: NullableStringFieldUpdateOperationsInput | string | null
    blanking?: NullableStringFieldUpdateOperationsInput | string | null
    under_pin?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate?: NullableStringFieldUpdateOperationsInput | string | null
    cad_plate_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilmSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<FilmSpecUpdateWithoutMachineBasicSpecInput, FilmSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<FilmSpecCreateWithoutMachineBasicSpecInput, FilmSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: FilmSpecWhereInput
  }

  export type FilmSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: FilmSpecWhereInput
    data: XOR<FilmSpecUpdateWithoutMachineBasicSpecInput, FilmSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type FilmSpecUpdateWithoutMachineBasicSpecInput = {
    film?: NullableStringFieldUpdateOperationsInput | string | null
    film_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FilmSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    film?: NullableStringFieldUpdateOperationsInput | string | null
    film_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RuleSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<RuleSpecUpdateWithoutMachineBasicSpecInput, RuleSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<RuleSpecCreateWithoutMachineBasicSpecInput, RuleSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: RuleSpecWhereInput
  }

  export type RuleSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: RuleSpecWhereInput
    data: XOR<RuleSpecUpdateWithoutMachineBasicSpecInput, RuleSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type RuleSpecUpdateWithoutMachineBasicSpecInput = {
    balance_rule?: NullableStringFieldUpdateOperationsInput | string | null
    inside_sheet_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance_rule?: NullableStringFieldUpdateOperationsInput | string | null
    inside_sheet_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SheetBaseSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<SheetBaseSpecUpdateWithoutMachineBasicSpecInput, SheetBaseSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<SheetBaseSpecCreateWithoutMachineBasicSpecInput, SheetBaseSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: SheetBaseSpecWhereInput
  }

  export type SheetBaseSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: SheetBaseSpecWhereInput
    data: XOR<SheetBaseSpecUpdateWithoutMachineBasicSpecInput, SheetBaseSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type SheetBaseSpecUpdateWithoutMachineBasicSpecInput = {
    base_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    base_thickness_remark?: NullableStringFieldUpdateOperationsInput | string | null
    max_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SheetBaseSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    base_thickness?: NullableFloatFieldUpdateOperationsInput | number | null
    base_thickness_remark?: NullableStringFieldUpdateOperationsInput | string | null
    max_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_sheet_y?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    max_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_x?: NullableFloatFieldUpdateOperationsInput | number | null
    min_base_y?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SutebaSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<SutebaSpecUpdateWithoutMachineBasicSpecInput, SutebaSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<SutebaSpecCreateWithoutMachineBasicSpecInput, SutebaSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: SutebaSpecWhereInput
  }

  export type SutebaSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: SutebaSpecWhereInput
    data: XOR<SutebaSpecUpdateWithoutMachineBasicSpecInput, SutebaSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type SutebaSpecUpdateWithoutMachineBasicSpecInput = {
    suteba_pitch?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SutebaSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    suteba_pitch?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SpongeCorkSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<SpongeCorkSpecUpdateWithoutMachineBasicSpecInput, SpongeCorkSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<SpongeCorkSpecCreateWithoutMachineBasicSpecInput, SpongeCorkSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: SpongeCorkSpecWhereInput
  }

  export type SpongeCorkSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: SpongeCorkSpecWhereInput
    data: XOR<SpongeCorkSpecUpdateWithoutMachineBasicSpecInput, SpongeCorkSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type SpongeCorkSpecUpdateWithoutMachineBasicSpecInput = {
    sponge?: NullableStringFieldUpdateOperationsInput | string | null
    cork?: NullableStringFieldUpdateOperationsInput | string | null
    cork_crushing?: NullableStringFieldUpdateOperationsInput | string | null
    crushing_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpongeCorkSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    sponge?: NullableStringFieldUpdateOperationsInput | string | null
    cork?: NullableStringFieldUpdateOperationsInput | string | null
    cork_crushing?: NullableStringFieldUpdateOperationsInput | string | null
    crushing_remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CenterMetalSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<CenterMetalSpecUpdateWithoutMachineBasicSpecInput, CenterMetalSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<CenterMetalSpecCreateWithoutMachineBasicSpecInput, CenterMetalSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: CenterMetalSpecWhereInput
  }

  export type CenterMetalSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: CenterMetalSpecWhereInput
    data: XOR<CenterMetalSpecUpdateWithoutMachineBasicSpecInput, CenterMetalSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type CenterMetalSpecUpdateWithoutMachineBasicSpecInput = {
    center_metal?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_kind?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_center?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_right?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_left?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CenterMetalSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    center_metal?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_kind?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_center?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_right?: NullableStringFieldUpdateOperationsInput | string | null
    center_metal_left?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NickSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<NickSpecUpdateWithoutMachineBasicSpecInput, NickSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<NickSpecCreateWithoutMachineBasicSpecInput, NickSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: NickSpecWhereInput
  }

  export type NickSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: NickSpecWhereInput
    data: XOR<NickSpecUpdateWithoutMachineBasicSpecInput, NickSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type NickSpecUpdateWithoutMachineBasicSpecInput = {
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NickSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    nick?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    nick_remark_3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleThicknessSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<RuleThicknessSpecUpdateWithoutMachineBasicSpecInput, RuleThicknessSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<RuleThicknessSpecCreateWithoutMachineBasicSpecInput, RuleThicknessSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: RuleThicknessSpecWhereInput
  }

  export type RuleThicknessSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: RuleThicknessSpecWhereInput
    data: XOR<RuleThicknessSpecUpdateWithoutMachineBasicSpecInput, RuleThicknessSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type RuleThicknessSpecUpdateWithoutMachineBasicSpecInput = {
    ef_rule?: NullableStringFieldUpdateOperationsInput | string | null
    bf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    af_rule?: NullableStringFieldUpdateOperationsInput | string | null
    wf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    gf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    ff_rule?: NullableStringFieldUpdateOperationsInput | string | null
    cf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    paper_350_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RuleThicknessSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    ef_rule?: NullableStringFieldUpdateOperationsInput | string | null
    bf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    af_rule?: NullableStringFieldUpdateOperationsInput | string | null
    wf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    gf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    ff_rule?: NullableStringFieldUpdateOperationsInput | string | null
    cf_rule?: NullableStringFieldUpdateOperationsInput | string | null
    paper_350_rule?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkSpecUpsertWithoutMachineBasicSpecInput = {
    update: XOR<RemarkSpecUpdateWithoutMachineBasicSpecInput, RemarkSpecUncheckedUpdateWithoutMachineBasicSpecInput>
    create: XOR<RemarkSpecCreateWithoutMachineBasicSpecInput, RemarkSpecUncheckedCreateWithoutMachineBasicSpecInput>
    where?: RemarkSpecWhereInput
  }

  export type RemarkSpecUpdateToOneWithWhereWithoutMachineBasicSpecInput = {
    where?: RemarkSpecWhereInput
    data: XOR<RemarkSpecUpdateWithoutMachineBasicSpecInput, RemarkSpecUncheckedUpdateWithoutMachineBasicSpecInput>
  }

  export type RemarkSpecUpdateWithoutMachineBasicSpecInput = {
    remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    stripper_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    air_hammer_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    ueda_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RemarkSpecUncheckedUpdateWithoutMachineBasicSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    remark_1?: NullableStringFieldUpdateOperationsInput | string | null
    remark_2?: NullableStringFieldUpdateOperationsInput | string | null
    remark_3?: NullableStringFieldUpdateOperationsInput | string | null
    stripper_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    air_hammer_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
    ueda_first_suteba?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MachineBasicSpecCreateWithoutKuwaeSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutKuwaeSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutKuwaeSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedUpdateWithoutKuwaeSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedCreateWithoutKuwaeSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutKuwaeSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutKuwaeSpecInput, MachineBasicSpecUncheckedUpdateWithoutKuwaeSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutKuwaeSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutKuwaeSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutDetailSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutDetailSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutDetailSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutDetailSpecInput, MachineBasicSpecUncheckedCreateWithoutDetailSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutDetailSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutDetailSpecInput, MachineBasicSpecUncheckedUpdateWithoutDetailSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutDetailSpecInput, MachineBasicSpecUncheckedCreateWithoutDetailSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutDetailSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutDetailSpecInput, MachineBasicSpecUncheckedUpdateWithoutDetailSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutDetailSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutDetailSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutFilmSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutFilmSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutFilmSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutFilmSpecInput, MachineBasicSpecUncheckedCreateWithoutFilmSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutFilmSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutFilmSpecInput, MachineBasicSpecUncheckedUpdateWithoutFilmSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutFilmSpecInput, MachineBasicSpecUncheckedCreateWithoutFilmSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutFilmSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutFilmSpecInput, MachineBasicSpecUncheckedUpdateWithoutFilmSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutFilmSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutFilmSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutRuleSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutRuleSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutRuleSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutRuleSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutRuleSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutRuleSpecInput, MachineBasicSpecUncheckedUpdateWithoutRuleSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutRuleSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutRuleSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutRuleSpecInput, MachineBasicSpecUncheckedUpdateWithoutRuleSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutRuleSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutRuleSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutSheetBaseSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutSheetBaseSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutSheetBaseSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedUpdateWithoutSheetBaseSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedCreateWithoutSheetBaseSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutSheetBaseSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutSheetBaseSpecInput, MachineBasicSpecUncheckedUpdateWithoutSheetBaseSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutSheetBaseSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutSheetBaseSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutSutebaSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutSutebaSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutSutebaSpecInput, MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutSutebaSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutSutebaSpecInput, MachineBasicSpecUncheckedUpdateWithoutSutebaSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutSutebaSpecInput, MachineBasicSpecUncheckedCreateWithoutSutebaSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutSutebaSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutSutebaSpecInput, MachineBasicSpecUncheckedUpdateWithoutSutebaSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutSutebaSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutSutebaSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutSpongeCorkSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutSpongeCorkSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutSpongeCorkSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedUpdateWithoutSpongeCorkSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedCreateWithoutSpongeCorkSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutSpongeCorkSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutSpongeCorkSpecInput, MachineBasicSpecUncheckedUpdateWithoutSpongeCorkSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutSpongeCorkSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutSpongeCorkSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutCenterMetalSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutCenterMetalSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutCenterMetalSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedUpdateWithoutCenterMetalSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedCreateWithoutCenterMetalSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutCenterMetalSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutCenterMetalSpecInput, MachineBasicSpecUncheckedUpdateWithoutCenterMetalSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutCenterMetalSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutCenterMetalSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutNickSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutNickSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    ruleThicknessSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutNickSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutNickSpecInput, MachineBasicSpecUncheckedCreateWithoutNickSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutNickSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutNickSpecInput, MachineBasicSpecUncheckedUpdateWithoutNickSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutNickSpecInput, MachineBasicSpecUncheckedCreateWithoutNickSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutNickSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutNickSpecInput, MachineBasicSpecUncheckedUpdateWithoutNickSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutNickSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutNickSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutRuleThicknessSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    remarkSpec?: RemarkSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    remarkSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutRuleThicknessSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutRuleThicknessSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedUpdateWithoutRuleThicknessSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedCreateWithoutRuleThicknessSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutRuleThicknessSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutRuleThicknessSpecInput, MachineBasicSpecUncheckedUpdateWithoutRuleThicknessSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutRuleThicknessSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    remarkSpec?: RemarkSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutRuleThicknessSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    remarkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MachineBasicSpecCreateWithoutRemarkSpecInput = {
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpec?: KuwaeSpecCreateNestedOneWithoutMachineBasicSpecInput
    detailSpec?: DetailSpecCreateNestedOneWithoutMachineBasicSpecInput
    filmSpec?: FilmSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleSpec?: RuleSpecCreateNestedOneWithoutMachineBasicSpecInput
    sheetBaseSpec?: SheetBaseSpecCreateNestedOneWithoutMachineBasicSpecInput
    sutebaSpec?: SutebaSpecCreateNestedOneWithoutMachineBasicSpecInput
    spongeCorkSpec?: SpongeCorkSpecCreateNestedOneWithoutMachineBasicSpecInput
    centerMetalSpec?: CenterMetalSpecCreateNestedOneWithoutMachineBasicSpecInput
    nickSpec?: NickSpecCreateNestedOneWithoutMachineBasicSpecInput
    ruleThicknessSpec?: RuleThicknessSpecCreateNestedOneWithoutMachineBasicSpecInput
  }

  export type MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput = {
    id?: number
    machineManufacturerId?: string | null
    machineManufacturerName?: string | null
    machineName?: string | null
    machineType?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    kuwaeSpecId?: number | null
    detailSpecId?: number | null
    filmSpecId?: number | null
    ruleSpecId?: number | null
    sheetBaseSpecId?: number | null
    sutebaSpecId?: number | null
    spongeCorkSpecId?: number | null
    centerMetalSpecId?: number | null
    nickSpecId?: number | null
    ruleThicknessSpecId?: number | null
  }

  export type MachineBasicSpecCreateOrConnectWithoutRemarkSpecInput = {
    where: MachineBasicSpecWhereUniqueInput
    create: XOR<MachineBasicSpecCreateWithoutRemarkSpecInput, MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput>
  }

  export type MachineBasicSpecUpsertWithoutRemarkSpecInput = {
    update: XOR<MachineBasicSpecUpdateWithoutRemarkSpecInput, MachineBasicSpecUncheckedUpdateWithoutRemarkSpecInput>
    create: XOR<MachineBasicSpecCreateWithoutRemarkSpecInput, MachineBasicSpecUncheckedCreateWithoutRemarkSpecInput>
    where?: MachineBasicSpecWhereInput
  }

  export type MachineBasicSpecUpdateToOneWithWhereWithoutRemarkSpecInput = {
    where?: MachineBasicSpecWhereInput
    data: XOR<MachineBasicSpecUpdateWithoutRemarkSpecInput, MachineBasicSpecUncheckedUpdateWithoutRemarkSpecInput>
  }

  export type MachineBasicSpecUpdateWithoutRemarkSpecInput = {
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpec?: KuwaeSpecUpdateOneWithoutMachineBasicSpecNestedInput
    detailSpec?: DetailSpecUpdateOneWithoutMachineBasicSpecNestedInput
    filmSpec?: FilmSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleSpec?: RuleSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sheetBaseSpec?: SheetBaseSpecUpdateOneWithoutMachineBasicSpecNestedInput
    sutebaSpec?: SutebaSpecUpdateOneWithoutMachineBasicSpecNestedInput
    spongeCorkSpec?: SpongeCorkSpecUpdateOneWithoutMachineBasicSpecNestedInput
    centerMetalSpec?: CenterMetalSpecUpdateOneWithoutMachineBasicSpecNestedInput
    nickSpec?: NickSpecUpdateOneWithoutMachineBasicSpecNestedInput
    ruleThicknessSpec?: RuleThicknessSpecUpdateOneWithoutMachineBasicSpecNestedInput
  }

  export type MachineBasicSpecUncheckedUpdateWithoutRemarkSpecInput = {
    id?: IntFieldUpdateOperationsInput | number
    machineManufacturerId?: NullableStringFieldUpdateOperationsInput | string | null
    machineManufacturerName?: NullableStringFieldUpdateOperationsInput | string | null
    machineName?: NullableStringFieldUpdateOperationsInput | string | null
    machineType?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kuwaeSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    detailSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    filmSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sheetBaseSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    sutebaSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    spongeCorkSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    centerMetalSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    nickSpecId?: NullableIntFieldUpdateOperationsInput | number | null
    ruleThicknessSpecId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
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