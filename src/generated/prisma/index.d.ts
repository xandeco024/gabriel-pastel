
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
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model PremadePastel
 * 
 */
export type PremadePastel = $Result.DefaultSelection<Prisma.$PremadePastelPayload>
/**
 * Model PremadePastelIngredient
 * 
 */
export type PremadePastelIngredient = $Result.DefaultSelection<Prisma.$PremadePastelIngredientPayload>
/**
 * Model CustomPastel
 * 
 */
export type CustomPastel = $Result.DefaultSelection<Prisma.$CustomPastelPayload>
/**
 * Model CustomPastelIngredient
 * 
 */
export type CustomPastelIngredient = $Result.DefaultSelection<Prisma.$CustomPastelIngredientPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PREPARING: 'PREPARING',
  READY: 'READY',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PastelType: {
  CUSTOM: 'CUSTOM',
  PREMADE: 'PREMADE'
};

export type PastelType = (typeof PastelType)[keyof typeof PastelType]


export const UserRole: {
  CUSTOMER: 'CUSTOMER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PastelType = $Enums.PastelType

export const PastelType: typeof $Enums.PastelType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

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
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premadePastel`: Exposes CRUD operations for the **PremadePastel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremadePastels
    * const premadePastels = await prisma.premadePastel.findMany()
    * ```
    */
  get premadePastel(): Prisma.PremadePastelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.premadePastelIngredient`: Exposes CRUD operations for the **PremadePastelIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PremadePastelIngredients
    * const premadePastelIngredients = await prisma.premadePastelIngredient.findMany()
    * ```
    */
  get premadePastelIngredient(): Prisma.PremadePastelIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customPastel`: Exposes CRUD operations for the **CustomPastel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomPastels
    * const customPastels = await prisma.customPastel.findMany()
    * ```
    */
  get customPastel(): Prisma.CustomPastelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customPastelIngredient`: Exposes CRUD operations for the **CustomPastelIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomPastelIngredients
    * const customPastelIngredients = await prisma.customPastelIngredient.findMany()
    * ```
    */
  get customPastelIngredient(): Prisma.CustomPastelIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
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
    User: 'User',
    Ingredient: 'Ingredient',
    PremadePastel: 'PremadePastel',
    PremadePastelIngredient: 'PremadePastelIngredient',
    CustomPastel: 'CustomPastel',
    CustomPastelIngredient: 'CustomPastelIngredient',
    Order: 'Order',
    OrderItem: 'OrderItem'
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
      modelProps: "user" | "ingredient" | "premadePastel" | "premadePastelIngredient" | "customPastel" | "customPastelIngredient" | "order" | "orderItem"
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
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      PremadePastel: {
        payload: Prisma.$PremadePastelPayload<ExtArgs>
        fields: Prisma.PremadePastelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremadePastelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremadePastelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>
          }
          findFirst: {
            args: Prisma.PremadePastelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremadePastelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>
          }
          findMany: {
            args: Prisma.PremadePastelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>[]
          }
          create: {
            args: Prisma.PremadePastelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>
          }
          createMany: {
            args: Prisma.PremadePastelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremadePastelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>[]
          }
          delete: {
            args: Prisma.PremadePastelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>
          }
          update: {
            args: Prisma.PremadePastelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>
          }
          deleteMany: {
            args: Prisma.PremadePastelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremadePastelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremadePastelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>[]
          }
          upsert: {
            args: Prisma.PremadePastelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelPayload>
          }
          aggregate: {
            args: Prisma.PremadePastelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremadePastel>
          }
          groupBy: {
            args: Prisma.PremadePastelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremadePastelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremadePastelCountArgs<ExtArgs>
            result: $Utils.Optional<PremadePastelCountAggregateOutputType> | number
          }
        }
      }
      PremadePastelIngredient: {
        payload: Prisma.$PremadePastelIngredientPayload<ExtArgs>
        fields: Prisma.PremadePastelIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PremadePastelIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PremadePastelIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>
          }
          findFirst: {
            args: Prisma.PremadePastelIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PremadePastelIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>
          }
          findMany: {
            args: Prisma.PremadePastelIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>[]
          }
          create: {
            args: Prisma.PremadePastelIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>
          }
          createMany: {
            args: Prisma.PremadePastelIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PremadePastelIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>[]
          }
          delete: {
            args: Prisma.PremadePastelIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>
          }
          update: {
            args: Prisma.PremadePastelIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>
          }
          deleteMany: {
            args: Prisma.PremadePastelIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PremadePastelIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PremadePastelIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>[]
          }
          upsert: {
            args: Prisma.PremadePastelIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PremadePastelIngredientPayload>
          }
          aggregate: {
            args: Prisma.PremadePastelIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePremadePastelIngredient>
          }
          groupBy: {
            args: Prisma.PremadePastelIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PremadePastelIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PremadePastelIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<PremadePastelIngredientCountAggregateOutputType> | number
          }
        }
      }
      CustomPastel: {
        payload: Prisma.$CustomPastelPayload<ExtArgs>
        fields: Prisma.CustomPastelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomPastelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomPastelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>
          }
          findFirst: {
            args: Prisma.CustomPastelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomPastelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>
          }
          findMany: {
            args: Prisma.CustomPastelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>[]
          }
          create: {
            args: Prisma.CustomPastelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>
          }
          createMany: {
            args: Prisma.CustomPastelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomPastelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>[]
          }
          delete: {
            args: Prisma.CustomPastelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>
          }
          update: {
            args: Prisma.CustomPastelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>
          }
          deleteMany: {
            args: Prisma.CustomPastelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomPastelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomPastelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>[]
          }
          upsert: {
            args: Prisma.CustomPastelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelPayload>
          }
          aggregate: {
            args: Prisma.CustomPastelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomPastel>
          }
          groupBy: {
            args: Prisma.CustomPastelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomPastelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomPastelCountArgs<ExtArgs>
            result: $Utils.Optional<CustomPastelCountAggregateOutputType> | number
          }
        }
      }
      CustomPastelIngredient: {
        payload: Prisma.$CustomPastelIngredientPayload<ExtArgs>
        fields: Prisma.CustomPastelIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomPastelIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomPastelIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>
          }
          findFirst: {
            args: Prisma.CustomPastelIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomPastelIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>
          }
          findMany: {
            args: Prisma.CustomPastelIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>[]
          }
          create: {
            args: Prisma.CustomPastelIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>
          }
          createMany: {
            args: Prisma.CustomPastelIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomPastelIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>[]
          }
          delete: {
            args: Prisma.CustomPastelIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>
          }
          update: {
            args: Prisma.CustomPastelIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>
          }
          deleteMany: {
            args: Prisma.CustomPastelIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomPastelIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomPastelIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>[]
          }
          upsert: {
            args: Prisma.CustomPastelIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomPastelIngredientPayload>
          }
          aggregate: {
            args: Prisma.CustomPastelIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomPastelIngredient>
          }
          groupBy: {
            args: Prisma.CustomPastelIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomPastelIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomPastelIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<CustomPastelIngredientCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
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
    user?: UserOmit
    ingredient?: IngredientOmit
    premadePastel?: PremadePastelOmit
    premadePastelIngredient?: PremadePastelIngredientOmit
    customPastel?: CustomPastelOmit
    customPastelIngredient?: CustomPastelIngredientOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
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
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    premadePasteis: number
    customPasteis: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadePasteis?: boolean | IngredientCountOutputTypeCountPremadePasteisArgs
    customPasteis?: boolean | IngredientCountOutputTypeCountCustomPasteisArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountPremadePasteisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremadePastelIngredientWhereInput
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountCustomPasteisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomPastelIngredientWhereInput
  }


  /**
   * Count Type PremadePastelCountOutputType
   */

  export type PremadePastelCountOutputType = {
    ingredients: number
    orderItems: number
  }

  export type PremadePastelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | PremadePastelCountOutputTypeCountIngredientsArgs
    orderItems?: boolean | PremadePastelCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * PremadePastelCountOutputType without action
   */
  export type PremadePastelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelCountOutputType
     */
    select?: PremadePastelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PremadePastelCountOutputType without action
   */
  export type PremadePastelCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremadePastelIngredientWhereInput
  }

  /**
   * PremadePastelCountOutputType without action
   */
  export type PremadePastelCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type CustomPastelCountOutputType
   */

  export type CustomPastelCountOutputType = {
    ingredients: number
    orderItems: number
  }

  export type CustomPastelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | CustomPastelCountOutputTypeCountIngredientsArgs
    orderItems?: boolean | CustomPastelCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * CustomPastelCountOutputType without action
   */
  export type CustomPastelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelCountOutputType
     */
    select?: CustomPastelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomPastelCountOutputType without action
   */
  export type CustomPastelCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomPastelIngredientWhereInput
  }

  /**
   * CustomPastelCountOutputType without action
   */
  export type CustomPastelCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
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
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    isVegan: boolean | null
    isOrganic: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    isVegan: boolean | null
    isOrganic: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    imageUrl: number
    isVegan: number
    isOrganic: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    isVegan?: true
    isOrganic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    isVegan?: true
    isOrganic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    isVegan?: true
    isOrganic?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan: boolean
    isOrganic: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: IngredientCountAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    premadePasteis?: boolean | Ingredient$premadePasteisArgs<ExtArgs>
    customPasteis?: boolean | Ingredient$customPasteisArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "imageUrl" | "isVegan" | "isOrganic" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadePasteis?: boolean | Ingredient$premadePasteisArgs<ExtArgs>
    customPasteis?: boolean | Ingredient$customPasteisArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      premadePasteis: Prisma.$PremadePastelIngredientPayload<ExtArgs>[]
      customPasteis: Prisma.$CustomPastelIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      imageUrl: string
      isVegan: boolean
      isOrganic: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    premadePasteis<T extends Ingredient$premadePasteisArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$premadePasteisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customPasteis<T extends Ingredient$customPasteisArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$customPasteisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'String'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly slug: FieldRef<"Ingredient", 'String'>
    readonly description: FieldRef<"Ingredient", 'String'>
    readonly imageUrl: FieldRef<"Ingredient", 'String'>
    readonly isVegan: FieldRef<"Ingredient", 'Boolean'>
    readonly isOrganic: FieldRef<"Ingredient", 'Boolean'>
    readonly isActive: FieldRef<"Ingredient", 'Boolean'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
    readonly updatedAt: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.premadePasteis
   */
  export type Ingredient$premadePasteisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    where?: PremadePastelIngredientWhereInput
    orderBy?: PremadePastelIngredientOrderByWithRelationInput | PremadePastelIngredientOrderByWithRelationInput[]
    cursor?: PremadePastelIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremadePastelIngredientScalarFieldEnum | PremadePastelIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient.customPasteis
   */
  export type Ingredient$customPasteisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    where?: CustomPastelIngredientWhereInput
    orderBy?: CustomPastelIngredientOrderByWithRelationInput | CustomPastelIngredientOrderByWithRelationInput[]
    cursor?: CustomPastelIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomPastelIngredientScalarFieldEnum | CustomPastelIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model PremadePastel
   */

  export type AggregatePremadePastel = {
    _count: PremadePastelCountAggregateOutputType | null
    _avg: PremadePastelAvgAggregateOutputType | null
    _sum: PremadePastelSumAggregateOutputType | null
    _min: PremadePastelMinAggregateOutputType | null
    _max: PremadePastelMaxAggregateOutputType | null
  }

  export type PremadePastelAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type PremadePastelSumAggregateOutputType = {
    price: Decimal | null
  }

  export type PremadePastelMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PremadePastelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    imageUrl: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PremadePastelCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    imageUrl: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PremadePastelAvgAggregateInputType = {
    price?: true
  }

  export type PremadePastelSumAggregateInputType = {
    price?: true
  }

  export type PremadePastelMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PremadePastelMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PremadePastelCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    imageUrl?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PremadePastelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremadePastel to aggregate.
     */
    where?: PremadePastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastels to fetch.
     */
    orderBy?: PremadePastelOrderByWithRelationInput | PremadePastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremadePastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremadePastels
    **/
    _count?: true | PremadePastelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PremadePastelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PremadePastelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremadePastelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremadePastelMaxAggregateInputType
  }

  export type GetPremadePastelAggregateType<T extends PremadePastelAggregateArgs> = {
        [P in keyof T & keyof AggregatePremadePastel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremadePastel[P]>
      : GetScalarType<T[P], AggregatePremadePastel[P]>
  }




  export type PremadePastelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremadePastelWhereInput
    orderBy?: PremadePastelOrderByWithAggregationInput | PremadePastelOrderByWithAggregationInput[]
    by: PremadePastelScalarFieldEnum[] | PremadePastelScalarFieldEnum
    having?: PremadePastelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremadePastelCountAggregateInputType | true
    _avg?: PremadePastelAvgAggregateInputType
    _sum?: PremadePastelSumAggregateInputType
    _min?: PremadePastelMinAggregateInputType
    _max?: PremadePastelMaxAggregateInputType
  }

  export type PremadePastelGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    imageUrl: string
    price: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PremadePastelCountAggregateOutputType | null
    _avg: PremadePastelAvgAggregateOutputType | null
    _sum: PremadePastelSumAggregateOutputType | null
    _min: PremadePastelMinAggregateOutputType | null
    _max: PremadePastelMaxAggregateOutputType | null
  }

  type GetPremadePastelGroupByPayload<T extends PremadePastelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremadePastelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremadePastelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremadePastelGroupByOutputType[P]>
            : GetScalarType<T[P], PremadePastelGroupByOutputType[P]>
        }
      >
    >


  export type PremadePastelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ingredients?: boolean | PremadePastel$ingredientsArgs<ExtArgs>
    orderItems?: boolean | PremadePastel$orderItemsArgs<ExtArgs>
    _count?: boolean | PremadePastelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premadePastel"]>

  export type PremadePastelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["premadePastel"]>

  export type PremadePastelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["premadePastel"]>

  export type PremadePastelSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    imageUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PremadePastelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "imageUrl" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["premadePastel"]>
  export type PremadePastelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | PremadePastel$ingredientsArgs<ExtArgs>
    orderItems?: boolean | PremadePastel$orderItemsArgs<ExtArgs>
    _count?: boolean | PremadePastelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PremadePastelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PremadePastelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PremadePastelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremadePastel"
    objects: {
      ingredients: Prisma.$PremadePastelIngredientPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      imageUrl: string
      price: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["premadePastel"]>
    composites: {}
  }

  type PremadePastelGetPayload<S extends boolean | null | undefined | PremadePastelDefaultArgs> = $Result.GetResult<Prisma.$PremadePastelPayload, S>

  type PremadePastelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremadePastelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremadePastelCountAggregateInputType | true
    }

  export interface PremadePastelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremadePastel'], meta: { name: 'PremadePastel' } }
    /**
     * Find zero or one PremadePastel that matches the filter.
     * @param {PremadePastelFindUniqueArgs} args - Arguments to find a PremadePastel
     * @example
     * // Get one PremadePastel
     * const premadePastel = await prisma.premadePastel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremadePastelFindUniqueArgs>(args: SelectSubset<T, PremadePastelFindUniqueArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremadePastel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremadePastelFindUniqueOrThrowArgs} args - Arguments to find a PremadePastel
     * @example
     * // Get one PremadePastel
     * const premadePastel = await prisma.premadePastel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremadePastelFindUniqueOrThrowArgs>(args: SelectSubset<T, PremadePastelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremadePastel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelFindFirstArgs} args - Arguments to find a PremadePastel
     * @example
     * // Get one PremadePastel
     * const premadePastel = await prisma.premadePastel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremadePastelFindFirstArgs>(args?: SelectSubset<T, PremadePastelFindFirstArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremadePastel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelFindFirstOrThrowArgs} args - Arguments to find a PremadePastel
     * @example
     * // Get one PremadePastel
     * const premadePastel = await prisma.premadePastel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremadePastelFindFirstOrThrowArgs>(args?: SelectSubset<T, PremadePastelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremadePastels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremadePastels
     * const premadePastels = await prisma.premadePastel.findMany()
     * 
     * // Get first 10 PremadePastels
     * const premadePastels = await prisma.premadePastel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premadePastelWithIdOnly = await prisma.premadePastel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremadePastelFindManyArgs>(args?: SelectSubset<T, PremadePastelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremadePastel.
     * @param {PremadePastelCreateArgs} args - Arguments to create a PremadePastel.
     * @example
     * // Create one PremadePastel
     * const PremadePastel = await prisma.premadePastel.create({
     *   data: {
     *     // ... data to create a PremadePastel
     *   }
     * })
     * 
     */
    create<T extends PremadePastelCreateArgs>(args: SelectSubset<T, PremadePastelCreateArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremadePastels.
     * @param {PremadePastelCreateManyArgs} args - Arguments to create many PremadePastels.
     * @example
     * // Create many PremadePastels
     * const premadePastel = await prisma.premadePastel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremadePastelCreateManyArgs>(args?: SelectSubset<T, PremadePastelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremadePastels and returns the data saved in the database.
     * @param {PremadePastelCreateManyAndReturnArgs} args - Arguments to create many PremadePastels.
     * @example
     * // Create many PremadePastels
     * const premadePastel = await prisma.premadePastel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremadePastels and only return the `id`
     * const premadePastelWithIdOnly = await prisma.premadePastel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremadePastelCreateManyAndReturnArgs>(args?: SelectSubset<T, PremadePastelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremadePastel.
     * @param {PremadePastelDeleteArgs} args - Arguments to delete one PremadePastel.
     * @example
     * // Delete one PremadePastel
     * const PremadePastel = await prisma.premadePastel.delete({
     *   where: {
     *     // ... filter to delete one PremadePastel
     *   }
     * })
     * 
     */
    delete<T extends PremadePastelDeleteArgs>(args: SelectSubset<T, PremadePastelDeleteArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremadePastel.
     * @param {PremadePastelUpdateArgs} args - Arguments to update one PremadePastel.
     * @example
     * // Update one PremadePastel
     * const premadePastel = await prisma.premadePastel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremadePastelUpdateArgs>(args: SelectSubset<T, PremadePastelUpdateArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremadePastels.
     * @param {PremadePastelDeleteManyArgs} args - Arguments to filter PremadePastels to delete.
     * @example
     * // Delete a few PremadePastels
     * const { count } = await prisma.premadePastel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremadePastelDeleteManyArgs>(args?: SelectSubset<T, PremadePastelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremadePastels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremadePastels
     * const premadePastel = await prisma.premadePastel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremadePastelUpdateManyArgs>(args: SelectSubset<T, PremadePastelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremadePastels and returns the data updated in the database.
     * @param {PremadePastelUpdateManyAndReturnArgs} args - Arguments to update many PremadePastels.
     * @example
     * // Update many PremadePastels
     * const premadePastel = await prisma.premadePastel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremadePastels and only return the `id`
     * const premadePastelWithIdOnly = await prisma.premadePastel.updateManyAndReturn({
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
    updateManyAndReturn<T extends PremadePastelUpdateManyAndReturnArgs>(args: SelectSubset<T, PremadePastelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremadePastel.
     * @param {PremadePastelUpsertArgs} args - Arguments to update or create a PremadePastel.
     * @example
     * // Update or create a PremadePastel
     * const premadePastel = await prisma.premadePastel.upsert({
     *   create: {
     *     // ... data to create a PremadePastel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremadePastel we want to update
     *   }
     * })
     */
    upsert<T extends PremadePastelUpsertArgs>(args: SelectSubset<T, PremadePastelUpsertArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremadePastels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelCountArgs} args - Arguments to filter PremadePastels to count.
     * @example
     * // Count the number of PremadePastels
     * const count = await prisma.premadePastel.count({
     *   where: {
     *     // ... the filter for the PremadePastels we want to count
     *   }
     * })
    **/
    count<T extends PremadePastelCountArgs>(
      args?: Subset<T, PremadePastelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremadePastelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremadePastel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremadePastelAggregateArgs>(args: Subset<T, PremadePastelAggregateArgs>): Prisma.PrismaPromise<GetPremadePastelAggregateType<T>>

    /**
     * Group by PremadePastel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelGroupByArgs} args - Group by arguments.
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
      T extends PremadePastelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremadePastelGroupByArgs['orderBy'] }
        : { orderBy?: PremadePastelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremadePastelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremadePastelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremadePastel model
   */
  readonly fields: PremadePastelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremadePastel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremadePastelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends PremadePastel$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, PremadePastel$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends PremadePastel$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, PremadePastel$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PremadePastel model
   */
  interface PremadePastelFieldRefs {
    readonly id: FieldRef<"PremadePastel", 'String'>
    readonly name: FieldRef<"PremadePastel", 'String'>
    readonly slug: FieldRef<"PremadePastel", 'String'>
    readonly description: FieldRef<"PremadePastel", 'String'>
    readonly imageUrl: FieldRef<"PremadePastel", 'String'>
    readonly price: FieldRef<"PremadePastel", 'Decimal'>
    readonly isActive: FieldRef<"PremadePastel", 'Boolean'>
    readonly createdAt: FieldRef<"PremadePastel", 'DateTime'>
    readonly updatedAt: FieldRef<"PremadePastel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PremadePastel findUnique
   */
  export type PremadePastelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastel to fetch.
     */
    where: PremadePastelWhereUniqueInput
  }

  /**
   * PremadePastel findUniqueOrThrow
   */
  export type PremadePastelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastel to fetch.
     */
    where: PremadePastelWhereUniqueInput
  }

  /**
   * PremadePastel findFirst
   */
  export type PremadePastelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastel to fetch.
     */
    where?: PremadePastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastels to fetch.
     */
    orderBy?: PremadePastelOrderByWithRelationInput | PremadePastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremadePastels.
     */
    cursor?: PremadePastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremadePastels.
     */
    distinct?: PremadePastelScalarFieldEnum | PremadePastelScalarFieldEnum[]
  }

  /**
   * PremadePastel findFirstOrThrow
   */
  export type PremadePastelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastel to fetch.
     */
    where?: PremadePastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastels to fetch.
     */
    orderBy?: PremadePastelOrderByWithRelationInput | PremadePastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremadePastels.
     */
    cursor?: PremadePastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremadePastels.
     */
    distinct?: PremadePastelScalarFieldEnum | PremadePastelScalarFieldEnum[]
  }

  /**
   * PremadePastel findMany
   */
  export type PremadePastelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastels to fetch.
     */
    where?: PremadePastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastels to fetch.
     */
    orderBy?: PremadePastelOrderByWithRelationInput | PremadePastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremadePastels.
     */
    cursor?: PremadePastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastels.
     */
    skip?: number
    distinct?: PremadePastelScalarFieldEnum | PremadePastelScalarFieldEnum[]
  }

  /**
   * PremadePastel create
   */
  export type PremadePastelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * The data needed to create a PremadePastel.
     */
    data: XOR<PremadePastelCreateInput, PremadePastelUncheckedCreateInput>
  }

  /**
   * PremadePastel createMany
   */
  export type PremadePastelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremadePastels.
     */
    data: PremadePastelCreateManyInput | PremadePastelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremadePastel createManyAndReturn
   */
  export type PremadePastelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * The data used to create many PremadePastels.
     */
    data: PremadePastelCreateManyInput | PremadePastelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremadePastel update
   */
  export type PremadePastelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * The data needed to update a PremadePastel.
     */
    data: XOR<PremadePastelUpdateInput, PremadePastelUncheckedUpdateInput>
    /**
     * Choose, which PremadePastel to update.
     */
    where: PremadePastelWhereUniqueInput
  }

  /**
   * PremadePastel updateMany
   */
  export type PremadePastelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremadePastels.
     */
    data: XOR<PremadePastelUpdateManyMutationInput, PremadePastelUncheckedUpdateManyInput>
    /**
     * Filter which PremadePastels to update
     */
    where?: PremadePastelWhereInput
    /**
     * Limit how many PremadePastels to update.
     */
    limit?: number
  }

  /**
   * PremadePastel updateManyAndReturn
   */
  export type PremadePastelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * The data used to update PremadePastels.
     */
    data: XOR<PremadePastelUpdateManyMutationInput, PremadePastelUncheckedUpdateManyInput>
    /**
     * Filter which PremadePastels to update
     */
    where?: PremadePastelWhereInput
    /**
     * Limit how many PremadePastels to update.
     */
    limit?: number
  }

  /**
   * PremadePastel upsert
   */
  export type PremadePastelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * The filter to search for the PremadePastel to update in case it exists.
     */
    where: PremadePastelWhereUniqueInput
    /**
     * In case the PremadePastel found by the `where` argument doesn't exist, create a new PremadePastel with this data.
     */
    create: XOR<PremadePastelCreateInput, PremadePastelUncheckedCreateInput>
    /**
     * In case the PremadePastel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremadePastelUpdateInput, PremadePastelUncheckedUpdateInput>
  }

  /**
   * PremadePastel delete
   */
  export type PremadePastelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    /**
     * Filter which PremadePastel to delete.
     */
    where: PremadePastelWhereUniqueInput
  }

  /**
   * PremadePastel deleteMany
   */
  export type PremadePastelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremadePastels to delete
     */
    where?: PremadePastelWhereInput
    /**
     * Limit how many PremadePastels to delete.
     */
    limit?: number
  }

  /**
   * PremadePastel.ingredients
   */
  export type PremadePastel$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    where?: PremadePastelIngredientWhereInput
    orderBy?: PremadePastelIngredientOrderByWithRelationInput | PremadePastelIngredientOrderByWithRelationInput[]
    cursor?: PremadePastelIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PremadePastelIngredientScalarFieldEnum | PremadePastelIngredientScalarFieldEnum[]
  }

  /**
   * PremadePastel.orderItems
   */
  export type PremadePastel$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * PremadePastel without action
   */
  export type PremadePastelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
  }


  /**
   * Model PremadePastelIngredient
   */

  export type AggregatePremadePastelIngredient = {
    _count: PremadePastelIngredientCountAggregateOutputType | null
    _min: PremadePastelIngredientMinAggregateOutputType | null
    _max: PremadePastelIngredientMaxAggregateOutputType | null
  }

  export type PremadePastelIngredientMinAggregateOutputType = {
    id: string | null
    premadePastelId: string | null
    ingredientId: string | null
  }

  export type PremadePastelIngredientMaxAggregateOutputType = {
    id: string | null
    premadePastelId: string | null
    ingredientId: string | null
  }

  export type PremadePastelIngredientCountAggregateOutputType = {
    id: number
    premadePastelId: number
    ingredientId: number
    _all: number
  }


  export type PremadePastelIngredientMinAggregateInputType = {
    id?: true
    premadePastelId?: true
    ingredientId?: true
  }

  export type PremadePastelIngredientMaxAggregateInputType = {
    id?: true
    premadePastelId?: true
    ingredientId?: true
  }

  export type PremadePastelIngredientCountAggregateInputType = {
    id?: true
    premadePastelId?: true
    ingredientId?: true
    _all?: true
  }

  export type PremadePastelIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremadePastelIngredient to aggregate.
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastelIngredients to fetch.
     */
    orderBy?: PremadePastelIngredientOrderByWithRelationInput | PremadePastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PremadePastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastelIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PremadePastelIngredients
    **/
    _count?: true | PremadePastelIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PremadePastelIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PremadePastelIngredientMaxAggregateInputType
  }

  export type GetPremadePastelIngredientAggregateType<T extends PremadePastelIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregatePremadePastelIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePremadePastelIngredient[P]>
      : GetScalarType<T[P], AggregatePremadePastelIngredient[P]>
  }




  export type PremadePastelIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PremadePastelIngredientWhereInput
    orderBy?: PremadePastelIngredientOrderByWithAggregationInput | PremadePastelIngredientOrderByWithAggregationInput[]
    by: PremadePastelIngredientScalarFieldEnum[] | PremadePastelIngredientScalarFieldEnum
    having?: PremadePastelIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PremadePastelIngredientCountAggregateInputType | true
    _min?: PremadePastelIngredientMinAggregateInputType
    _max?: PremadePastelIngredientMaxAggregateInputType
  }

  export type PremadePastelIngredientGroupByOutputType = {
    id: string
    premadePastelId: string
    ingredientId: string
    _count: PremadePastelIngredientCountAggregateOutputType | null
    _min: PremadePastelIngredientMinAggregateOutputType | null
    _max: PremadePastelIngredientMaxAggregateOutputType | null
  }

  type GetPremadePastelIngredientGroupByPayload<T extends PremadePastelIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PremadePastelIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PremadePastelIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PremadePastelIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], PremadePastelIngredientGroupByOutputType[P]>
        }
      >
    >


  export type PremadePastelIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premadePastelId?: boolean
    ingredientId?: boolean
    premadePastel?: boolean | PremadePastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premadePastelIngredient"]>

  export type PremadePastelIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premadePastelId?: boolean
    ingredientId?: boolean
    premadePastel?: boolean | PremadePastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premadePastelIngredient"]>

  export type PremadePastelIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    premadePastelId?: boolean
    ingredientId?: boolean
    premadePastel?: boolean | PremadePastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["premadePastelIngredient"]>

  export type PremadePastelIngredientSelectScalar = {
    id?: boolean
    premadePastelId?: boolean
    ingredientId?: boolean
  }

  export type PremadePastelIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "premadePastelId" | "ingredientId", ExtArgs["result"]["premadePastelIngredient"]>
  export type PremadePastelIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadePastel?: boolean | PremadePastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type PremadePastelIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadePastel?: boolean | PremadePastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type PremadePastelIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    premadePastel?: boolean | PremadePastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $PremadePastelIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PremadePastelIngredient"
    objects: {
      premadePastel: Prisma.$PremadePastelPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      premadePastelId: string
      ingredientId: string
    }, ExtArgs["result"]["premadePastelIngredient"]>
    composites: {}
  }

  type PremadePastelIngredientGetPayload<S extends boolean | null | undefined | PremadePastelIngredientDefaultArgs> = $Result.GetResult<Prisma.$PremadePastelIngredientPayload, S>

  type PremadePastelIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PremadePastelIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PremadePastelIngredientCountAggregateInputType | true
    }

  export interface PremadePastelIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PremadePastelIngredient'], meta: { name: 'PremadePastelIngredient' } }
    /**
     * Find zero or one PremadePastelIngredient that matches the filter.
     * @param {PremadePastelIngredientFindUniqueArgs} args - Arguments to find a PremadePastelIngredient
     * @example
     * // Get one PremadePastelIngredient
     * const premadePastelIngredient = await prisma.premadePastelIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PremadePastelIngredientFindUniqueArgs>(args: SelectSubset<T, PremadePastelIngredientFindUniqueArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PremadePastelIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PremadePastelIngredientFindUniqueOrThrowArgs} args - Arguments to find a PremadePastelIngredient
     * @example
     * // Get one PremadePastelIngredient
     * const premadePastelIngredient = await prisma.premadePastelIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PremadePastelIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, PremadePastelIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremadePastelIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientFindFirstArgs} args - Arguments to find a PremadePastelIngredient
     * @example
     * // Get one PremadePastelIngredient
     * const premadePastelIngredient = await prisma.premadePastelIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PremadePastelIngredientFindFirstArgs>(args?: SelectSubset<T, PremadePastelIngredientFindFirstArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PremadePastelIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientFindFirstOrThrowArgs} args - Arguments to find a PremadePastelIngredient
     * @example
     * // Get one PremadePastelIngredient
     * const premadePastelIngredient = await prisma.premadePastelIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PremadePastelIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, PremadePastelIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PremadePastelIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PremadePastelIngredients
     * const premadePastelIngredients = await prisma.premadePastelIngredient.findMany()
     * 
     * // Get first 10 PremadePastelIngredients
     * const premadePastelIngredients = await prisma.premadePastelIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const premadePastelIngredientWithIdOnly = await prisma.premadePastelIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PremadePastelIngredientFindManyArgs>(args?: SelectSubset<T, PremadePastelIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PremadePastelIngredient.
     * @param {PremadePastelIngredientCreateArgs} args - Arguments to create a PremadePastelIngredient.
     * @example
     * // Create one PremadePastelIngredient
     * const PremadePastelIngredient = await prisma.premadePastelIngredient.create({
     *   data: {
     *     // ... data to create a PremadePastelIngredient
     *   }
     * })
     * 
     */
    create<T extends PremadePastelIngredientCreateArgs>(args: SelectSubset<T, PremadePastelIngredientCreateArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PremadePastelIngredients.
     * @param {PremadePastelIngredientCreateManyArgs} args - Arguments to create many PremadePastelIngredients.
     * @example
     * // Create many PremadePastelIngredients
     * const premadePastelIngredient = await prisma.premadePastelIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PremadePastelIngredientCreateManyArgs>(args?: SelectSubset<T, PremadePastelIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PremadePastelIngredients and returns the data saved in the database.
     * @param {PremadePastelIngredientCreateManyAndReturnArgs} args - Arguments to create many PremadePastelIngredients.
     * @example
     * // Create many PremadePastelIngredients
     * const premadePastelIngredient = await prisma.premadePastelIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PremadePastelIngredients and only return the `id`
     * const premadePastelIngredientWithIdOnly = await prisma.premadePastelIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PremadePastelIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, PremadePastelIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PremadePastelIngredient.
     * @param {PremadePastelIngredientDeleteArgs} args - Arguments to delete one PremadePastelIngredient.
     * @example
     * // Delete one PremadePastelIngredient
     * const PremadePastelIngredient = await prisma.premadePastelIngredient.delete({
     *   where: {
     *     // ... filter to delete one PremadePastelIngredient
     *   }
     * })
     * 
     */
    delete<T extends PremadePastelIngredientDeleteArgs>(args: SelectSubset<T, PremadePastelIngredientDeleteArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PremadePastelIngredient.
     * @param {PremadePastelIngredientUpdateArgs} args - Arguments to update one PremadePastelIngredient.
     * @example
     * // Update one PremadePastelIngredient
     * const premadePastelIngredient = await prisma.premadePastelIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PremadePastelIngredientUpdateArgs>(args: SelectSubset<T, PremadePastelIngredientUpdateArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PremadePastelIngredients.
     * @param {PremadePastelIngredientDeleteManyArgs} args - Arguments to filter PremadePastelIngredients to delete.
     * @example
     * // Delete a few PremadePastelIngredients
     * const { count } = await prisma.premadePastelIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PremadePastelIngredientDeleteManyArgs>(args?: SelectSubset<T, PremadePastelIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremadePastelIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PremadePastelIngredients
     * const premadePastelIngredient = await prisma.premadePastelIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PremadePastelIngredientUpdateManyArgs>(args: SelectSubset<T, PremadePastelIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PremadePastelIngredients and returns the data updated in the database.
     * @param {PremadePastelIngredientUpdateManyAndReturnArgs} args - Arguments to update many PremadePastelIngredients.
     * @example
     * // Update many PremadePastelIngredients
     * const premadePastelIngredient = await prisma.premadePastelIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PremadePastelIngredients and only return the `id`
     * const premadePastelIngredientWithIdOnly = await prisma.premadePastelIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends PremadePastelIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, PremadePastelIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PremadePastelIngredient.
     * @param {PremadePastelIngredientUpsertArgs} args - Arguments to update or create a PremadePastelIngredient.
     * @example
     * // Update or create a PremadePastelIngredient
     * const premadePastelIngredient = await prisma.premadePastelIngredient.upsert({
     *   create: {
     *     // ... data to create a PremadePastelIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PremadePastelIngredient we want to update
     *   }
     * })
     */
    upsert<T extends PremadePastelIngredientUpsertArgs>(args: SelectSubset<T, PremadePastelIngredientUpsertArgs<ExtArgs>>): Prisma__PremadePastelIngredientClient<$Result.GetResult<Prisma.$PremadePastelIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PremadePastelIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientCountArgs} args - Arguments to filter PremadePastelIngredients to count.
     * @example
     * // Count the number of PremadePastelIngredients
     * const count = await prisma.premadePastelIngredient.count({
     *   where: {
     *     // ... the filter for the PremadePastelIngredients we want to count
     *   }
     * })
    **/
    count<T extends PremadePastelIngredientCountArgs>(
      args?: Subset<T, PremadePastelIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PremadePastelIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PremadePastelIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PremadePastelIngredientAggregateArgs>(args: Subset<T, PremadePastelIngredientAggregateArgs>): Prisma.PrismaPromise<GetPremadePastelIngredientAggregateType<T>>

    /**
     * Group by PremadePastelIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PremadePastelIngredientGroupByArgs} args - Group by arguments.
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
      T extends PremadePastelIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PremadePastelIngredientGroupByArgs['orderBy'] }
        : { orderBy?: PremadePastelIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PremadePastelIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPremadePastelIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PremadePastelIngredient model
   */
  readonly fields: PremadePastelIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PremadePastelIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PremadePastelIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    premadePastel<T extends PremadePastelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PremadePastelDefaultArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PremadePastelIngredient model
   */
  interface PremadePastelIngredientFieldRefs {
    readonly id: FieldRef<"PremadePastelIngredient", 'String'>
    readonly premadePastelId: FieldRef<"PremadePastelIngredient", 'String'>
    readonly ingredientId: FieldRef<"PremadePastelIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PremadePastelIngredient findUnique
   */
  export type PremadePastelIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastelIngredient to fetch.
     */
    where: PremadePastelIngredientWhereUniqueInput
  }

  /**
   * PremadePastelIngredient findUniqueOrThrow
   */
  export type PremadePastelIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastelIngredient to fetch.
     */
    where: PremadePastelIngredientWhereUniqueInput
  }

  /**
   * PremadePastelIngredient findFirst
   */
  export type PremadePastelIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastelIngredient to fetch.
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastelIngredients to fetch.
     */
    orderBy?: PremadePastelIngredientOrderByWithRelationInput | PremadePastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremadePastelIngredients.
     */
    cursor?: PremadePastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastelIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremadePastelIngredients.
     */
    distinct?: PremadePastelIngredientScalarFieldEnum | PremadePastelIngredientScalarFieldEnum[]
  }

  /**
   * PremadePastelIngredient findFirstOrThrow
   */
  export type PremadePastelIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastelIngredient to fetch.
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastelIngredients to fetch.
     */
    orderBy?: PremadePastelIngredientOrderByWithRelationInput | PremadePastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PremadePastelIngredients.
     */
    cursor?: PremadePastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastelIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PremadePastelIngredients.
     */
    distinct?: PremadePastelIngredientScalarFieldEnum | PremadePastelIngredientScalarFieldEnum[]
  }

  /**
   * PremadePastelIngredient findMany
   */
  export type PremadePastelIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which PremadePastelIngredients to fetch.
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PremadePastelIngredients to fetch.
     */
    orderBy?: PremadePastelIngredientOrderByWithRelationInput | PremadePastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PremadePastelIngredients.
     */
    cursor?: PremadePastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PremadePastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PremadePastelIngredients.
     */
    skip?: number
    distinct?: PremadePastelIngredientScalarFieldEnum | PremadePastelIngredientScalarFieldEnum[]
  }

  /**
   * PremadePastelIngredient create
   */
  export type PremadePastelIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a PremadePastelIngredient.
     */
    data: XOR<PremadePastelIngredientCreateInput, PremadePastelIngredientUncheckedCreateInput>
  }

  /**
   * PremadePastelIngredient createMany
   */
  export type PremadePastelIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PremadePastelIngredients.
     */
    data: PremadePastelIngredientCreateManyInput | PremadePastelIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PremadePastelIngredient createManyAndReturn
   */
  export type PremadePastelIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many PremadePastelIngredients.
     */
    data: PremadePastelIngredientCreateManyInput | PremadePastelIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremadePastelIngredient update
   */
  export type PremadePastelIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a PremadePastelIngredient.
     */
    data: XOR<PremadePastelIngredientUpdateInput, PremadePastelIngredientUncheckedUpdateInput>
    /**
     * Choose, which PremadePastelIngredient to update.
     */
    where: PremadePastelIngredientWhereUniqueInput
  }

  /**
   * PremadePastelIngredient updateMany
   */
  export type PremadePastelIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PremadePastelIngredients.
     */
    data: XOR<PremadePastelIngredientUpdateManyMutationInput, PremadePastelIngredientUncheckedUpdateManyInput>
    /**
     * Filter which PremadePastelIngredients to update
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * Limit how many PremadePastelIngredients to update.
     */
    limit?: number
  }

  /**
   * PremadePastelIngredient updateManyAndReturn
   */
  export type PremadePastelIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * The data used to update PremadePastelIngredients.
     */
    data: XOR<PremadePastelIngredientUpdateManyMutationInput, PremadePastelIngredientUncheckedUpdateManyInput>
    /**
     * Filter which PremadePastelIngredients to update
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * Limit how many PremadePastelIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PremadePastelIngredient upsert
   */
  export type PremadePastelIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the PremadePastelIngredient to update in case it exists.
     */
    where: PremadePastelIngredientWhereUniqueInput
    /**
     * In case the PremadePastelIngredient found by the `where` argument doesn't exist, create a new PremadePastelIngredient with this data.
     */
    create: XOR<PremadePastelIngredientCreateInput, PremadePastelIngredientUncheckedCreateInput>
    /**
     * In case the PremadePastelIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PremadePastelIngredientUpdateInput, PremadePastelIngredientUncheckedUpdateInput>
  }

  /**
   * PremadePastelIngredient delete
   */
  export type PremadePastelIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
    /**
     * Filter which PremadePastelIngredient to delete.
     */
    where: PremadePastelIngredientWhereUniqueInput
  }

  /**
   * PremadePastelIngredient deleteMany
   */
  export type PremadePastelIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PremadePastelIngredients to delete
     */
    where?: PremadePastelIngredientWhereInput
    /**
     * Limit how many PremadePastelIngredients to delete.
     */
    limit?: number
  }

  /**
   * PremadePastelIngredient without action
   */
  export type PremadePastelIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastelIngredient
     */
    select?: PremadePastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastelIngredient
     */
    omit?: PremadePastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelIngredientInclude<ExtArgs> | null
  }


  /**
   * Model CustomPastel
   */

  export type AggregateCustomPastel = {
    _count: CustomPastelCountAggregateOutputType | null
    _min: CustomPastelMinAggregateOutputType | null
    _max: CustomPastelMaxAggregateOutputType | null
  }

  export type CustomPastelMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type CustomPastelMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
  }

  export type CustomPastelCountAggregateOutputType = {
    id: number
    createdAt: number
    _all: number
  }


  export type CustomPastelMinAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type CustomPastelMaxAggregateInputType = {
    id?: true
    createdAt?: true
  }

  export type CustomPastelCountAggregateInputType = {
    id?: true
    createdAt?: true
    _all?: true
  }

  export type CustomPastelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomPastel to aggregate.
     */
    where?: CustomPastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastels to fetch.
     */
    orderBy?: CustomPastelOrderByWithRelationInput | CustomPastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomPastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomPastels
    **/
    _count?: true | CustomPastelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomPastelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomPastelMaxAggregateInputType
  }

  export type GetCustomPastelAggregateType<T extends CustomPastelAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomPastel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomPastel[P]>
      : GetScalarType<T[P], AggregateCustomPastel[P]>
  }




  export type CustomPastelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomPastelWhereInput
    orderBy?: CustomPastelOrderByWithAggregationInput | CustomPastelOrderByWithAggregationInput[]
    by: CustomPastelScalarFieldEnum[] | CustomPastelScalarFieldEnum
    having?: CustomPastelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomPastelCountAggregateInputType | true
    _min?: CustomPastelMinAggregateInputType
    _max?: CustomPastelMaxAggregateInputType
  }

  export type CustomPastelGroupByOutputType = {
    id: string
    createdAt: Date
    _count: CustomPastelCountAggregateOutputType | null
    _min: CustomPastelMinAggregateOutputType | null
    _max: CustomPastelMaxAggregateOutputType | null
  }

  type GetCustomPastelGroupByPayload<T extends CustomPastelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomPastelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomPastelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomPastelGroupByOutputType[P]>
            : GetScalarType<T[P], CustomPastelGroupByOutputType[P]>
        }
      >
    >


  export type CustomPastelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    ingredients?: boolean | CustomPastel$ingredientsArgs<ExtArgs>
    orderItems?: boolean | CustomPastel$orderItemsArgs<ExtArgs>
    _count?: boolean | CustomPastelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customPastel"]>

  export type CustomPastelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customPastel"]>

  export type CustomPastelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customPastel"]>

  export type CustomPastelSelectScalar = {
    id?: boolean
    createdAt?: boolean
  }

  export type CustomPastelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt", ExtArgs["result"]["customPastel"]>
  export type CustomPastelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | CustomPastel$ingredientsArgs<ExtArgs>
    orderItems?: boolean | CustomPastel$orderItemsArgs<ExtArgs>
    _count?: boolean | CustomPastelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomPastelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomPastelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomPastelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomPastel"
    objects: {
      ingredients: Prisma.$CustomPastelIngredientPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
    }, ExtArgs["result"]["customPastel"]>
    composites: {}
  }

  type CustomPastelGetPayload<S extends boolean | null | undefined | CustomPastelDefaultArgs> = $Result.GetResult<Prisma.$CustomPastelPayload, S>

  type CustomPastelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomPastelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomPastelCountAggregateInputType | true
    }

  export interface CustomPastelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomPastel'], meta: { name: 'CustomPastel' } }
    /**
     * Find zero or one CustomPastel that matches the filter.
     * @param {CustomPastelFindUniqueArgs} args - Arguments to find a CustomPastel
     * @example
     * // Get one CustomPastel
     * const customPastel = await prisma.customPastel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomPastelFindUniqueArgs>(args: SelectSubset<T, CustomPastelFindUniqueArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomPastel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomPastelFindUniqueOrThrowArgs} args - Arguments to find a CustomPastel
     * @example
     * // Get one CustomPastel
     * const customPastel = await prisma.customPastel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomPastelFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomPastelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomPastel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelFindFirstArgs} args - Arguments to find a CustomPastel
     * @example
     * // Get one CustomPastel
     * const customPastel = await prisma.customPastel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomPastelFindFirstArgs>(args?: SelectSubset<T, CustomPastelFindFirstArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomPastel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelFindFirstOrThrowArgs} args - Arguments to find a CustomPastel
     * @example
     * // Get one CustomPastel
     * const customPastel = await prisma.customPastel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomPastelFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomPastelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomPastels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomPastels
     * const customPastels = await prisma.customPastel.findMany()
     * 
     * // Get first 10 CustomPastels
     * const customPastels = await prisma.customPastel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customPastelWithIdOnly = await prisma.customPastel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomPastelFindManyArgs>(args?: SelectSubset<T, CustomPastelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomPastel.
     * @param {CustomPastelCreateArgs} args - Arguments to create a CustomPastel.
     * @example
     * // Create one CustomPastel
     * const CustomPastel = await prisma.customPastel.create({
     *   data: {
     *     // ... data to create a CustomPastel
     *   }
     * })
     * 
     */
    create<T extends CustomPastelCreateArgs>(args: SelectSubset<T, CustomPastelCreateArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomPastels.
     * @param {CustomPastelCreateManyArgs} args - Arguments to create many CustomPastels.
     * @example
     * // Create many CustomPastels
     * const customPastel = await prisma.customPastel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomPastelCreateManyArgs>(args?: SelectSubset<T, CustomPastelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomPastels and returns the data saved in the database.
     * @param {CustomPastelCreateManyAndReturnArgs} args - Arguments to create many CustomPastels.
     * @example
     * // Create many CustomPastels
     * const customPastel = await prisma.customPastel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomPastels and only return the `id`
     * const customPastelWithIdOnly = await prisma.customPastel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomPastelCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomPastelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomPastel.
     * @param {CustomPastelDeleteArgs} args - Arguments to delete one CustomPastel.
     * @example
     * // Delete one CustomPastel
     * const CustomPastel = await prisma.customPastel.delete({
     *   where: {
     *     // ... filter to delete one CustomPastel
     *   }
     * })
     * 
     */
    delete<T extends CustomPastelDeleteArgs>(args: SelectSubset<T, CustomPastelDeleteArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomPastel.
     * @param {CustomPastelUpdateArgs} args - Arguments to update one CustomPastel.
     * @example
     * // Update one CustomPastel
     * const customPastel = await prisma.customPastel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomPastelUpdateArgs>(args: SelectSubset<T, CustomPastelUpdateArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomPastels.
     * @param {CustomPastelDeleteManyArgs} args - Arguments to filter CustomPastels to delete.
     * @example
     * // Delete a few CustomPastels
     * const { count } = await prisma.customPastel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomPastelDeleteManyArgs>(args?: SelectSubset<T, CustomPastelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomPastels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomPastels
     * const customPastel = await prisma.customPastel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomPastelUpdateManyArgs>(args: SelectSubset<T, CustomPastelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomPastels and returns the data updated in the database.
     * @param {CustomPastelUpdateManyAndReturnArgs} args - Arguments to update many CustomPastels.
     * @example
     * // Update many CustomPastels
     * const customPastel = await prisma.customPastel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomPastels and only return the `id`
     * const customPastelWithIdOnly = await prisma.customPastel.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomPastelUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomPastelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomPastel.
     * @param {CustomPastelUpsertArgs} args - Arguments to update or create a CustomPastel.
     * @example
     * // Update or create a CustomPastel
     * const customPastel = await prisma.customPastel.upsert({
     *   create: {
     *     // ... data to create a CustomPastel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomPastel we want to update
     *   }
     * })
     */
    upsert<T extends CustomPastelUpsertArgs>(args: SelectSubset<T, CustomPastelUpsertArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomPastels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelCountArgs} args - Arguments to filter CustomPastels to count.
     * @example
     * // Count the number of CustomPastels
     * const count = await prisma.customPastel.count({
     *   where: {
     *     // ... the filter for the CustomPastels we want to count
     *   }
     * })
    **/
    count<T extends CustomPastelCountArgs>(
      args?: Subset<T, CustomPastelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomPastelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomPastel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomPastelAggregateArgs>(args: Subset<T, CustomPastelAggregateArgs>): Prisma.PrismaPromise<GetCustomPastelAggregateType<T>>

    /**
     * Group by CustomPastel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelGroupByArgs} args - Group by arguments.
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
      T extends CustomPastelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomPastelGroupByArgs['orderBy'] }
        : { orderBy?: CustomPastelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomPastelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomPastelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomPastel model
   */
  readonly fields: CustomPastelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomPastel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomPastelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends CustomPastel$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, CustomPastel$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends CustomPastel$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, CustomPastel$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CustomPastel model
   */
  interface CustomPastelFieldRefs {
    readonly id: FieldRef<"CustomPastel", 'String'>
    readonly createdAt: FieldRef<"CustomPastel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomPastel findUnique
   */
  export type CustomPastelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastel to fetch.
     */
    where: CustomPastelWhereUniqueInput
  }

  /**
   * CustomPastel findUniqueOrThrow
   */
  export type CustomPastelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastel to fetch.
     */
    where: CustomPastelWhereUniqueInput
  }

  /**
   * CustomPastel findFirst
   */
  export type CustomPastelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastel to fetch.
     */
    where?: CustomPastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastels to fetch.
     */
    orderBy?: CustomPastelOrderByWithRelationInput | CustomPastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomPastels.
     */
    cursor?: CustomPastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomPastels.
     */
    distinct?: CustomPastelScalarFieldEnum | CustomPastelScalarFieldEnum[]
  }

  /**
   * CustomPastel findFirstOrThrow
   */
  export type CustomPastelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastel to fetch.
     */
    where?: CustomPastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastels to fetch.
     */
    orderBy?: CustomPastelOrderByWithRelationInput | CustomPastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomPastels.
     */
    cursor?: CustomPastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomPastels.
     */
    distinct?: CustomPastelScalarFieldEnum | CustomPastelScalarFieldEnum[]
  }

  /**
   * CustomPastel findMany
   */
  export type CustomPastelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastels to fetch.
     */
    where?: CustomPastelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastels to fetch.
     */
    orderBy?: CustomPastelOrderByWithRelationInput | CustomPastelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomPastels.
     */
    cursor?: CustomPastelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastels.
     */
    skip?: number
    distinct?: CustomPastelScalarFieldEnum | CustomPastelScalarFieldEnum[]
  }

  /**
   * CustomPastel create
   */
  export type CustomPastelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomPastel.
     */
    data?: XOR<CustomPastelCreateInput, CustomPastelUncheckedCreateInput>
  }

  /**
   * CustomPastel createMany
   */
  export type CustomPastelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomPastels.
     */
    data: CustomPastelCreateManyInput | CustomPastelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomPastel createManyAndReturn
   */
  export type CustomPastelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * The data used to create many CustomPastels.
     */
    data: CustomPastelCreateManyInput | CustomPastelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomPastel update
   */
  export type CustomPastelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomPastel.
     */
    data: XOR<CustomPastelUpdateInput, CustomPastelUncheckedUpdateInput>
    /**
     * Choose, which CustomPastel to update.
     */
    where: CustomPastelWhereUniqueInput
  }

  /**
   * CustomPastel updateMany
   */
  export type CustomPastelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomPastels.
     */
    data: XOR<CustomPastelUpdateManyMutationInput, CustomPastelUncheckedUpdateManyInput>
    /**
     * Filter which CustomPastels to update
     */
    where?: CustomPastelWhereInput
    /**
     * Limit how many CustomPastels to update.
     */
    limit?: number
  }

  /**
   * CustomPastel updateManyAndReturn
   */
  export type CustomPastelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * The data used to update CustomPastels.
     */
    data: XOR<CustomPastelUpdateManyMutationInput, CustomPastelUncheckedUpdateManyInput>
    /**
     * Filter which CustomPastels to update
     */
    where?: CustomPastelWhereInput
    /**
     * Limit how many CustomPastels to update.
     */
    limit?: number
  }

  /**
   * CustomPastel upsert
   */
  export type CustomPastelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomPastel to update in case it exists.
     */
    where: CustomPastelWhereUniqueInput
    /**
     * In case the CustomPastel found by the `where` argument doesn't exist, create a new CustomPastel with this data.
     */
    create: XOR<CustomPastelCreateInput, CustomPastelUncheckedCreateInput>
    /**
     * In case the CustomPastel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomPastelUpdateInput, CustomPastelUncheckedUpdateInput>
  }

  /**
   * CustomPastel delete
   */
  export type CustomPastelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    /**
     * Filter which CustomPastel to delete.
     */
    where: CustomPastelWhereUniqueInput
  }

  /**
   * CustomPastel deleteMany
   */
  export type CustomPastelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomPastels to delete
     */
    where?: CustomPastelWhereInput
    /**
     * Limit how many CustomPastels to delete.
     */
    limit?: number
  }

  /**
   * CustomPastel.ingredients
   */
  export type CustomPastel$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    where?: CustomPastelIngredientWhereInput
    orderBy?: CustomPastelIngredientOrderByWithRelationInput | CustomPastelIngredientOrderByWithRelationInput[]
    cursor?: CustomPastelIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomPastelIngredientScalarFieldEnum | CustomPastelIngredientScalarFieldEnum[]
  }

  /**
   * CustomPastel.orderItems
   */
  export type CustomPastel$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * CustomPastel without action
   */
  export type CustomPastelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
  }


  /**
   * Model CustomPastelIngredient
   */

  export type AggregateCustomPastelIngredient = {
    _count: CustomPastelIngredientCountAggregateOutputType | null
    _min: CustomPastelIngredientMinAggregateOutputType | null
    _max: CustomPastelIngredientMaxAggregateOutputType | null
  }

  export type CustomPastelIngredientMinAggregateOutputType = {
    id: string | null
    customPastelId: string | null
    ingredientId: string | null
  }

  export type CustomPastelIngredientMaxAggregateOutputType = {
    id: string | null
    customPastelId: string | null
    ingredientId: string | null
  }

  export type CustomPastelIngredientCountAggregateOutputType = {
    id: number
    customPastelId: number
    ingredientId: number
    _all: number
  }


  export type CustomPastelIngredientMinAggregateInputType = {
    id?: true
    customPastelId?: true
    ingredientId?: true
  }

  export type CustomPastelIngredientMaxAggregateInputType = {
    id?: true
    customPastelId?: true
    ingredientId?: true
  }

  export type CustomPastelIngredientCountAggregateInputType = {
    id?: true
    customPastelId?: true
    ingredientId?: true
    _all?: true
  }

  export type CustomPastelIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomPastelIngredient to aggregate.
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastelIngredients to fetch.
     */
    orderBy?: CustomPastelIngredientOrderByWithRelationInput | CustomPastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomPastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastelIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomPastelIngredients
    **/
    _count?: true | CustomPastelIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomPastelIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomPastelIngredientMaxAggregateInputType
  }

  export type GetCustomPastelIngredientAggregateType<T extends CustomPastelIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomPastelIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomPastelIngredient[P]>
      : GetScalarType<T[P], AggregateCustomPastelIngredient[P]>
  }




  export type CustomPastelIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomPastelIngredientWhereInput
    orderBy?: CustomPastelIngredientOrderByWithAggregationInput | CustomPastelIngredientOrderByWithAggregationInput[]
    by: CustomPastelIngredientScalarFieldEnum[] | CustomPastelIngredientScalarFieldEnum
    having?: CustomPastelIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomPastelIngredientCountAggregateInputType | true
    _min?: CustomPastelIngredientMinAggregateInputType
    _max?: CustomPastelIngredientMaxAggregateInputType
  }

  export type CustomPastelIngredientGroupByOutputType = {
    id: string
    customPastelId: string
    ingredientId: string
    _count: CustomPastelIngredientCountAggregateOutputType | null
    _min: CustomPastelIngredientMinAggregateOutputType | null
    _max: CustomPastelIngredientMaxAggregateOutputType | null
  }

  type GetCustomPastelIngredientGroupByPayload<T extends CustomPastelIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomPastelIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomPastelIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomPastelIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], CustomPastelIngredientGroupByOutputType[P]>
        }
      >
    >


  export type CustomPastelIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customPastelId?: boolean
    ingredientId?: boolean
    customPastel?: boolean | CustomPastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customPastelIngredient"]>

  export type CustomPastelIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customPastelId?: boolean
    ingredientId?: boolean
    customPastel?: boolean | CustomPastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customPastelIngredient"]>

  export type CustomPastelIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customPastelId?: boolean
    ingredientId?: boolean
    customPastel?: boolean | CustomPastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customPastelIngredient"]>

  export type CustomPastelIngredientSelectScalar = {
    id?: boolean
    customPastelId?: boolean
    ingredientId?: boolean
  }

  export type CustomPastelIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customPastelId" | "ingredientId", ExtArgs["result"]["customPastelIngredient"]>
  export type CustomPastelIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customPastel?: boolean | CustomPastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type CustomPastelIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customPastel?: boolean | CustomPastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type CustomPastelIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customPastel?: boolean | CustomPastelDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $CustomPastelIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomPastelIngredient"
    objects: {
      customPastel: Prisma.$CustomPastelPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customPastelId: string
      ingredientId: string
    }, ExtArgs["result"]["customPastelIngredient"]>
    composites: {}
  }

  type CustomPastelIngredientGetPayload<S extends boolean | null | undefined | CustomPastelIngredientDefaultArgs> = $Result.GetResult<Prisma.$CustomPastelIngredientPayload, S>

  type CustomPastelIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomPastelIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomPastelIngredientCountAggregateInputType | true
    }

  export interface CustomPastelIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomPastelIngredient'], meta: { name: 'CustomPastelIngredient' } }
    /**
     * Find zero or one CustomPastelIngredient that matches the filter.
     * @param {CustomPastelIngredientFindUniqueArgs} args - Arguments to find a CustomPastelIngredient
     * @example
     * // Get one CustomPastelIngredient
     * const customPastelIngredient = await prisma.customPastelIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomPastelIngredientFindUniqueArgs>(args: SelectSubset<T, CustomPastelIngredientFindUniqueArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomPastelIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomPastelIngredientFindUniqueOrThrowArgs} args - Arguments to find a CustomPastelIngredient
     * @example
     * // Get one CustomPastelIngredient
     * const customPastelIngredient = await prisma.customPastelIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomPastelIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomPastelIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomPastelIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientFindFirstArgs} args - Arguments to find a CustomPastelIngredient
     * @example
     * // Get one CustomPastelIngredient
     * const customPastelIngredient = await prisma.customPastelIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomPastelIngredientFindFirstArgs>(args?: SelectSubset<T, CustomPastelIngredientFindFirstArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomPastelIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientFindFirstOrThrowArgs} args - Arguments to find a CustomPastelIngredient
     * @example
     * // Get one CustomPastelIngredient
     * const customPastelIngredient = await prisma.customPastelIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomPastelIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomPastelIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomPastelIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomPastelIngredients
     * const customPastelIngredients = await prisma.customPastelIngredient.findMany()
     * 
     * // Get first 10 CustomPastelIngredients
     * const customPastelIngredients = await prisma.customPastelIngredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customPastelIngredientWithIdOnly = await prisma.customPastelIngredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomPastelIngredientFindManyArgs>(args?: SelectSubset<T, CustomPastelIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomPastelIngredient.
     * @param {CustomPastelIngredientCreateArgs} args - Arguments to create a CustomPastelIngredient.
     * @example
     * // Create one CustomPastelIngredient
     * const CustomPastelIngredient = await prisma.customPastelIngredient.create({
     *   data: {
     *     // ... data to create a CustomPastelIngredient
     *   }
     * })
     * 
     */
    create<T extends CustomPastelIngredientCreateArgs>(args: SelectSubset<T, CustomPastelIngredientCreateArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomPastelIngredients.
     * @param {CustomPastelIngredientCreateManyArgs} args - Arguments to create many CustomPastelIngredients.
     * @example
     * // Create many CustomPastelIngredients
     * const customPastelIngredient = await prisma.customPastelIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomPastelIngredientCreateManyArgs>(args?: SelectSubset<T, CustomPastelIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomPastelIngredients and returns the data saved in the database.
     * @param {CustomPastelIngredientCreateManyAndReturnArgs} args - Arguments to create many CustomPastelIngredients.
     * @example
     * // Create many CustomPastelIngredients
     * const customPastelIngredient = await prisma.customPastelIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomPastelIngredients and only return the `id`
     * const customPastelIngredientWithIdOnly = await prisma.customPastelIngredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomPastelIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomPastelIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomPastelIngredient.
     * @param {CustomPastelIngredientDeleteArgs} args - Arguments to delete one CustomPastelIngredient.
     * @example
     * // Delete one CustomPastelIngredient
     * const CustomPastelIngredient = await prisma.customPastelIngredient.delete({
     *   where: {
     *     // ... filter to delete one CustomPastelIngredient
     *   }
     * })
     * 
     */
    delete<T extends CustomPastelIngredientDeleteArgs>(args: SelectSubset<T, CustomPastelIngredientDeleteArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomPastelIngredient.
     * @param {CustomPastelIngredientUpdateArgs} args - Arguments to update one CustomPastelIngredient.
     * @example
     * // Update one CustomPastelIngredient
     * const customPastelIngredient = await prisma.customPastelIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomPastelIngredientUpdateArgs>(args: SelectSubset<T, CustomPastelIngredientUpdateArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomPastelIngredients.
     * @param {CustomPastelIngredientDeleteManyArgs} args - Arguments to filter CustomPastelIngredients to delete.
     * @example
     * // Delete a few CustomPastelIngredients
     * const { count } = await prisma.customPastelIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomPastelIngredientDeleteManyArgs>(args?: SelectSubset<T, CustomPastelIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomPastelIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomPastelIngredients
     * const customPastelIngredient = await prisma.customPastelIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomPastelIngredientUpdateManyArgs>(args: SelectSubset<T, CustomPastelIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomPastelIngredients and returns the data updated in the database.
     * @param {CustomPastelIngredientUpdateManyAndReturnArgs} args - Arguments to update many CustomPastelIngredients.
     * @example
     * // Update many CustomPastelIngredients
     * const customPastelIngredient = await prisma.customPastelIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomPastelIngredients and only return the `id`
     * const customPastelIngredientWithIdOnly = await prisma.customPastelIngredient.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomPastelIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomPastelIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomPastelIngredient.
     * @param {CustomPastelIngredientUpsertArgs} args - Arguments to update or create a CustomPastelIngredient.
     * @example
     * // Update or create a CustomPastelIngredient
     * const customPastelIngredient = await prisma.customPastelIngredient.upsert({
     *   create: {
     *     // ... data to create a CustomPastelIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomPastelIngredient we want to update
     *   }
     * })
     */
    upsert<T extends CustomPastelIngredientUpsertArgs>(args: SelectSubset<T, CustomPastelIngredientUpsertArgs<ExtArgs>>): Prisma__CustomPastelIngredientClient<$Result.GetResult<Prisma.$CustomPastelIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomPastelIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientCountArgs} args - Arguments to filter CustomPastelIngredients to count.
     * @example
     * // Count the number of CustomPastelIngredients
     * const count = await prisma.customPastelIngredient.count({
     *   where: {
     *     // ... the filter for the CustomPastelIngredients we want to count
     *   }
     * })
    **/
    count<T extends CustomPastelIngredientCountArgs>(
      args?: Subset<T, CustomPastelIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomPastelIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomPastelIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomPastelIngredientAggregateArgs>(args: Subset<T, CustomPastelIngredientAggregateArgs>): Prisma.PrismaPromise<GetCustomPastelIngredientAggregateType<T>>

    /**
     * Group by CustomPastelIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomPastelIngredientGroupByArgs} args - Group by arguments.
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
      T extends CustomPastelIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomPastelIngredientGroupByArgs['orderBy'] }
        : { orderBy?: CustomPastelIngredientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomPastelIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomPastelIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomPastelIngredient model
   */
  readonly fields: CustomPastelIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomPastelIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomPastelIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customPastel<T extends CustomPastelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomPastelDefaultArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomPastelIngredient model
   */
  interface CustomPastelIngredientFieldRefs {
    readonly id: FieldRef<"CustomPastelIngredient", 'String'>
    readonly customPastelId: FieldRef<"CustomPastelIngredient", 'String'>
    readonly ingredientId: FieldRef<"CustomPastelIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomPastelIngredient findUnique
   */
  export type CustomPastelIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastelIngredient to fetch.
     */
    where: CustomPastelIngredientWhereUniqueInput
  }

  /**
   * CustomPastelIngredient findUniqueOrThrow
   */
  export type CustomPastelIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastelIngredient to fetch.
     */
    where: CustomPastelIngredientWhereUniqueInput
  }

  /**
   * CustomPastelIngredient findFirst
   */
  export type CustomPastelIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastelIngredient to fetch.
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastelIngredients to fetch.
     */
    orderBy?: CustomPastelIngredientOrderByWithRelationInput | CustomPastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomPastelIngredients.
     */
    cursor?: CustomPastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastelIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomPastelIngredients.
     */
    distinct?: CustomPastelIngredientScalarFieldEnum | CustomPastelIngredientScalarFieldEnum[]
  }

  /**
   * CustomPastelIngredient findFirstOrThrow
   */
  export type CustomPastelIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastelIngredient to fetch.
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastelIngredients to fetch.
     */
    orderBy?: CustomPastelIngredientOrderByWithRelationInput | CustomPastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomPastelIngredients.
     */
    cursor?: CustomPastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastelIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomPastelIngredients.
     */
    distinct?: CustomPastelIngredientScalarFieldEnum | CustomPastelIngredientScalarFieldEnum[]
  }

  /**
   * CustomPastelIngredient findMany
   */
  export type CustomPastelIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * Filter, which CustomPastelIngredients to fetch.
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomPastelIngredients to fetch.
     */
    orderBy?: CustomPastelIngredientOrderByWithRelationInput | CustomPastelIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomPastelIngredients.
     */
    cursor?: CustomPastelIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomPastelIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomPastelIngredients.
     */
    skip?: number
    distinct?: CustomPastelIngredientScalarFieldEnum | CustomPastelIngredientScalarFieldEnum[]
  }

  /**
   * CustomPastelIngredient create
   */
  export type CustomPastelIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomPastelIngredient.
     */
    data: XOR<CustomPastelIngredientCreateInput, CustomPastelIngredientUncheckedCreateInput>
  }

  /**
   * CustomPastelIngredient createMany
   */
  export type CustomPastelIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomPastelIngredients.
     */
    data: CustomPastelIngredientCreateManyInput | CustomPastelIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomPastelIngredient createManyAndReturn
   */
  export type CustomPastelIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many CustomPastelIngredients.
     */
    data: CustomPastelIngredientCreateManyInput | CustomPastelIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomPastelIngredient update
   */
  export type CustomPastelIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomPastelIngredient.
     */
    data: XOR<CustomPastelIngredientUpdateInput, CustomPastelIngredientUncheckedUpdateInput>
    /**
     * Choose, which CustomPastelIngredient to update.
     */
    where: CustomPastelIngredientWhereUniqueInput
  }

  /**
   * CustomPastelIngredient updateMany
   */
  export type CustomPastelIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomPastelIngredients.
     */
    data: XOR<CustomPastelIngredientUpdateManyMutationInput, CustomPastelIngredientUncheckedUpdateManyInput>
    /**
     * Filter which CustomPastelIngredients to update
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * Limit how many CustomPastelIngredients to update.
     */
    limit?: number
  }

  /**
   * CustomPastelIngredient updateManyAndReturn
   */
  export type CustomPastelIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * The data used to update CustomPastelIngredients.
     */
    data: XOR<CustomPastelIngredientUpdateManyMutationInput, CustomPastelIngredientUncheckedUpdateManyInput>
    /**
     * Filter which CustomPastelIngredients to update
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * Limit how many CustomPastelIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomPastelIngredient upsert
   */
  export type CustomPastelIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomPastelIngredient to update in case it exists.
     */
    where: CustomPastelIngredientWhereUniqueInput
    /**
     * In case the CustomPastelIngredient found by the `where` argument doesn't exist, create a new CustomPastelIngredient with this data.
     */
    create: XOR<CustomPastelIngredientCreateInput, CustomPastelIngredientUncheckedCreateInput>
    /**
     * In case the CustomPastelIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomPastelIngredientUpdateInput, CustomPastelIngredientUncheckedUpdateInput>
  }

  /**
   * CustomPastelIngredient delete
   */
  export type CustomPastelIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
    /**
     * Filter which CustomPastelIngredient to delete.
     */
    where: CustomPastelIngredientWhereUniqueInput
  }

  /**
   * CustomPastelIngredient deleteMany
   */
  export type CustomPastelIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomPastelIngredients to delete
     */
    where?: CustomPastelIngredientWhereInput
    /**
     * Limit how many CustomPastelIngredients to delete.
     */
    limit?: number
  }

  /**
   * CustomPastelIngredient without action
   */
  export type CustomPastelIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastelIngredient
     */
    select?: CustomPastelIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastelIngredient
     */
    omit?: CustomPastelIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelIngredientInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    total: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    total: Decimal | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: $Enums.OrderStatus | null
    total: Decimal | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    total: number
    customerName: number
    customerEmail: number
    customerPhone: number
    statusHistory: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total?: true
  }

  export type OrderSumAggregateInputType = {
    total?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    total?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    statusHistory?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    userId: string | null
    status: $Enums.OrderStatus
    total: Decimal
    customerName: string
    customerEmail: string
    customerPhone: string | null
    statusHistory: JsonValue | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    statusHistory?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    statusHistory?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    statusHistory?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    total?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    statusHistory?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "total" | "customerName" | "customerEmail" | "customerPhone" | "statusHistory" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Order$userArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      status: $Enums.OrderStatus
      total: Prisma.Decimal
      customerName: string
      customerEmail: string
      customerPhone: string | null
      statusHistory: Prisma.JsonValue | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Order$userArgs<ExtArgs> = {}>(args?: Subset<T, Order$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly userId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly total: FieldRef<"Order", 'Decimal'>
    readonly customerName: FieldRef<"Order", 'String'>
    readonly customerEmail: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly statusHistory: FieldRef<"Order", 'Json'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.user
   */
  export type Order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    type: $Enums.PastelType | null
    premadePastelId: string | null
    customPastelId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    type: $Enums.PastelType | null
    premadePastelId: string | null
    customPastelId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    type: number
    premadePastelId: number
    customPastelId: number
    quantity: number
    unitPrice: number
    totalPrice: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    type?: true
    premadePastelId?: true
    customPastelId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    type?: true
    premadePastelId?: true
    customPastelId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    type?: true
    premadePastelId?: true
    customPastelId?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    type: $Enums.PastelType
    premadePastelId: string | null
    customPastelId: string | null
    quantity: number
    unitPrice: Decimal
    totalPrice: Decimal
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    type?: boolean
    premadePastelId?: boolean
    customPastelId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    premadePastel?: boolean | OrderItem$premadePastelArgs<ExtArgs>
    customPastel?: boolean | OrderItem$customPastelArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    type?: boolean
    premadePastelId?: boolean
    customPastelId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    premadePastel?: boolean | OrderItem$premadePastelArgs<ExtArgs>
    customPastel?: boolean | OrderItem$customPastelArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    type?: boolean
    premadePastelId?: boolean
    customPastelId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    premadePastel?: boolean | OrderItem$premadePastelArgs<ExtArgs>
    customPastel?: boolean | OrderItem$customPastelArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    type?: boolean
    premadePastelId?: boolean
    customPastelId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    createdAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "type" | "premadePastelId" | "customPastelId" | "quantity" | "unitPrice" | "totalPrice" | "createdAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    premadePastel?: boolean | OrderItem$premadePastelArgs<ExtArgs>
    customPastel?: boolean | OrderItem$customPastelArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    premadePastel?: boolean | OrderItem$premadePastelArgs<ExtArgs>
    customPastel?: boolean | OrderItem$customPastelArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    premadePastel?: boolean | OrderItem$premadePastelArgs<ExtArgs>
    customPastel?: boolean | OrderItem$customPastelArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      premadePastel: Prisma.$PremadePastelPayload<ExtArgs> | null
      customPastel: Prisma.$CustomPastelPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      type: $Enums.PastelType
      premadePastelId: string | null
      customPastelId: string | null
      quantity: number
      unitPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    premadePastel<T extends OrderItem$premadePastelArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$premadePastelArgs<ExtArgs>>): Prisma__PremadePastelClient<$Result.GetResult<Prisma.$PremadePastelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customPastel<T extends OrderItem$customPastelArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$customPastelArgs<ExtArgs>>): Prisma__CustomPastelClient<$Result.GetResult<Prisma.$CustomPastelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly type: FieldRef<"OrderItem", 'PastelType'>
    readonly premadePastelId: FieldRef<"OrderItem", 'String'>
    readonly customPastelId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly totalPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.premadePastel
   */
  export type OrderItem$premadePastelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PremadePastel
     */
    select?: PremadePastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PremadePastel
     */
    omit?: PremadePastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PremadePastelInclude<ExtArgs> | null
    where?: PremadePastelWhereInput
  }

  /**
   * OrderItem.customPastel
   */
  export type OrderItem$customPastelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomPastel
     */
    select?: CustomPastelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomPastel
     */
    omit?: CustomPastelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomPastelInclude<ExtArgs> | null
    where?: CustomPastelWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    isVegan: 'isVegan',
    isOrganic: 'isOrganic',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const PremadePastelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    imageUrl: 'imageUrl',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PremadePastelScalarFieldEnum = (typeof PremadePastelScalarFieldEnum)[keyof typeof PremadePastelScalarFieldEnum]


  export const PremadePastelIngredientScalarFieldEnum: {
    id: 'id',
    premadePastelId: 'premadePastelId',
    ingredientId: 'ingredientId'
  };

  export type PremadePastelIngredientScalarFieldEnum = (typeof PremadePastelIngredientScalarFieldEnum)[keyof typeof PremadePastelIngredientScalarFieldEnum]


  export const CustomPastelScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt'
  };

  export type CustomPastelScalarFieldEnum = (typeof CustomPastelScalarFieldEnum)[keyof typeof CustomPastelScalarFieldEnum]


  export const CustomPastelIngredientScalarFieldEnum: {
    id: 'id',
    customPastelId: 'customPastelId',
    ingredientId: 'ingredientId'
  };

  export type CustomPastelIngredientScalarFieldEnum = (typeof CustomPastelIngredientScalarFieldEnum)[keyof typeof CustomPastelIngredientScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    total: 'total',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    statusHistory: 'statusHistory',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    type: 'type',
    premadePastelId: 'premadePastelId',
    customPastelId: 'customPastelId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PastelType'
   */
  export type EnumPastelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PastelType'>
    


  /**
   * Reference to a field of type 'PastelType[]'
   */
  export type ListEnumPastelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PastelType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: StringFilter<"Ingredient"> | string
    name?: StringFilter<"Ingredient"> | string
    slug?: StringFilter<"Ingredient"> | string
    description?: StringFilter<"Ingredient"> | string
    imageUrl?: StringFilter<"Ingredient"> | string
    isVegan?: BoolFilter<"Ingredient"> | boolean
    isOrganic?: BoolFilter<"Ingredient"> | boolean
    isActive?: BoolFilter<"Ingredient"> | boolean
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    premadePasteis?: PremadePastelIngredientListRelationFilter
    customPasteis?: CustomPastelIngredientListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isVegan?: SortOrder
    isOrganic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    premadePasteis?: PremadePastelIngredientOrderByRelationAggregateInput
    customPasteis?: CustomPastelIngredientOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    description?: StringFilter<"Ingredient"> | string
    imageUrl?: StringFilter<"Ingredient"> | string
    isVegan?: BoolFilter<"Ingredient"> | boolean
    isOrganic?: BoolFilter<"Ingredient"> | boolean
    isActive?: BoolFilter<"Ingredient"> | boolean
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string
    premadePasteis?: PremadePastelIngredientListRelationFilter
    customPasteis?: CustomPastelIngredientListRelationFilter
  }, "id" | "name" | "slug">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isVegan?: SortOrder
    isOrganic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ingredient"> | string
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    slug?: StringWithAggregatesFilter<"Ingredient"> | string
    description?: StringWithAggregatesFilter<"Ingredient"> | string
    imageUrl?: StringWithAggregatesFilter<"Ingredient"> | string
    isVegan?: BoolWithAggregatesFilter<"Ingredient"> | boolean
    isOrganic?: BoolWithAggregatesFilter<"Ingredient"> | boolean
    isActive?: BoolWithAggregatesFilter<"Ingredient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type PremadePastelWhereInput = {
    AND?: PremadePastelWhereInput | PremadePastelWhereInput[]
    OR?: PremadePastelWhereInput[]
    NOT?: PremadePastelWhereInput | PremadePastelWhereInput[]
    id?: StringFilter<"PremadePastel"> | string
    name?: StringFilter<"PremadePastel"> | string
    slug?: StringFilter<"PremadePastel"> | string
    description?: StringNullableFilter<"PremadePastel"> | string | null
    imageUrl?: StringFilter<"PremadePastel"> | string
    price?: DecimalFilter<"PremadePastel"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PremadePastel"> | boolean
    createdAt?: DateTimeFilter<"PremadePastel"> | Date | string
    updatedAt?: DateTimeFilter<"PremadePastel"> | Date | string
    ingredients?: PremadePastelIngredientListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type PremadePastelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ingredients?: PremadePastelIngredientOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type PremadePastelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: PremadePastelWhereInput | PremadePastelWhereInput[]
    OR?: PremadePastelWhereInput[]
    NOT?: PremadePastelWhereInput | PremadePastelWhereInput[]
    description?: StringNullableFilter<"PremadePastel"> | string | null
    imageUrl?: StringFilter<"PremadePastel"> | string
    price?: DecimalFilter<"PremadePastel"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PremadePastel"> | boolean
    createdAt?: DateTimeFilter<"PremadePastel"> | Date | string
    updatedAt?: DateTimeFilter<"PremadePastel"> | Date | string
    ingredients?: PremadePastelIngredientListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id" | "name" | "slug">

  export type PremadePastelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PremadePastelCountOrderByAggregateInput
    _avg?: PremadePastelAvgOrderByAggregateInput
    _max?: PremadePastelMaxOrderByAggregateInput
    _min?: PremadePastelMinOrderByAggregateInput
    _sum?: PremadePastelSumOrderByAggregateInput
  }

  export type PremadePastelScalarWhereWithAggregatesInput = {
    AND?: PremadePastelScalarWhereWithAggregatesInput | PremadePastelScalarWhereWithAggregatesInput[]
    OR?: PremadePastelScalarWhereWithAggregatesInput[]
    NOT?: PremadePastelScalarWhereWithAggregatesInput | PremadePastelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PremadePastel"> | string
    name?: StringWithAggregatesFilter<"PremadePastel"> | string
    slug?: StringWithAggregatesFilter<"PremadePastel"> | string
    description?: StringNullableWithAggregatesFilter<"PremadePastel"> | string | null
    imageUrl?: StringWithAggregatesFilter<"PremadePastel"> | string
    price?: DecimalWithAggregatesFilter<"PremadePastel"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"PremadePastel"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PremadePastel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PremadePastel"> | Date | string
  }

  export type PremadePastelIngredientWhereInput = {
    AND?: PremadePastelIngredientWhereInput | PremadePastelIngredientWhereInput[]
    OR?: PremadePastelIngredientWhereInput[]
    NOT?: PremadePastelIngredientWhereInput | PremadePastelIngredientWhereInput[]
    id?: StringFilter<"PremadePastelIngredient"> | string
    premadePastelId?: StringFilter<"PremadePastelIngredient"> | string
    ingredientId?: StringFilter<"PremadePastelIngredient"> | string
    premadePastel?: XOR<PremadePastelScalarRelationFilter, PremadePastelWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type PremadePastelIngredientOrderByWithRelationInput = {
    id?: SortOrder
    premadePastelId?: SortOrder
    ingredientId?: SortOrder
    premadePastel?: PremadePastelOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type PremadePastelIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    premadePastelId_ingredientId?: PremadePastelIngredientPremadePastelIdIngredientIdCompoundUniqueInput
    AND?: PremadePastelIngredientWhereInput | PremadePastelIngredientWhereInput[]
    OR?: PremadePastelIngredientWhereInput[]
    NOT?: PremadePastelIngredientWhereInput | PremadePastelIngredientWhereInput[]
    premadePastelId?: StringFilter<"PremadePastelIngredient"> | string
    ingredientId?: StringFilter<"PremadePastelIngredient"> | string
    premadePastel?: XOR<PremadePastelScalarRelationFilter, PremadePastelWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id" | "premadePastelId_ingredientId">

  export type PremadePastelIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    premadePastelId?: SortOrder
    ingredientId?: SortOrder
    _count?: PremadePastelIngredientCountOrderByAggregateInput
    _max?: PremadePastelIngredientMaxOrderByAggregateInput
    _min?: PremadePastelIngredientMinOrderByAggregateInput
  }

  export type PremadePastelIngredientScalarWhereWithAggregatesInput = {
    AND?: PremadePastelIngredientScalarWhereWithAggregatesInput | PremadePastelIngredientScalarWhereWithAggregatesInput[]
    OR?: PremadePastelIngredientScalarWhereWithAggregatesInput[]
    NOT?: PremadePastelIngredientScalarWhereWithAggregatesInput | PremadePastelIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PremadePastelIngredient"> | string
    premadePastelId?: StringWithAggregatesFilter<"PremadePastelIngredient"> | string
    ingredientId?: StringWithAggregatesFilter<"PremadePastelIngredient"> | string
  }

  export type CustomPastelWhereInput = {
    AND?: CustomPastelWhereInput | CustomPastelWhereInput[]
    OR?: CustomPastelWhereInput[]
    NOT?: CustomPastelWhereInput | CustomPastelWhereInput[]
    id?: StringFilter<"CustomPastel"> | string
    createdAt?: DateTimeFilter<"CustomPastel"> | Date | string
    ingredients?: CustomPastelIngredientListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type CustomPastelOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    ingredients?: CustomPastelIngredientOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type CustomPastelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomPastelWhereInput | CustomPastelWhereInput[]
    OR?: CustomPastelWhereInput[]
    NOT?: CustomPastelWhereInput | CustomPastelWhereInput[]
    createdAt?: DateTimeFilter<"CustomPastel"> | Date | string
    ingredients?: CustomPastelIngredientListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type CustomPastelOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    _count?: CustomPastelCountOrderByAggregateInput
    _max?: CustomPastelMaxOrderByAggregateInput
    _min?: CustomPastelMinOrderByAggregateInput
  }

  export type CustomPastelScalarWhereWithAggregatesInput = {
    AND?: CustomPastelScalarWhereWithAggregatesInput | CustomPastelScalarWhereWithAggregatesInput[]
    OR?: CustomPastelScalarWhereWithAggregatesInput[]
    NOT?: CustomPastelScalarWhereWithAggregatesInput | CustomPastelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomPastel"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CustomPastel"> | Date | string
  }

  export type CustomPastelIngredientWhereInput = {
    AND?: CustomPastelIngredientWhereInput | CustomPastelIngredientWhereInput[]
    OR?: CustomPastelIngredientWhereInput[]
    NOT?: CustomPastelIngredientWhereInput | CustomPastelIngredientWhereInput[]
    id?: StringFilter<"CustomPastelIngredient"> | string
    customPastelId?: StringFilter<"CustomPastelIngredient"> | string
    ingredientId?: StringFilter<"CustomPastelIngredient"> | string
    customPastel?: XOR<CustomPastelScalarRelationFilter, CustomPastelWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type CustomPastelIngredientOrderByWithRelationInput = {
    id?: SortOrder
    customPastelId?: SortOrder
    ingredientId?: SortOrder
    customPastel?: CustomPastelOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type CustomPastelIngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customPastelId_ingredientId?: CustomPastelIngredientCustomPastelIdIngredientIdCompoundUniqueInput
    AND?: CustomPastelIngredientWhereInput | CustomPastelIngredientWhereInput[]
    OR?: CustomPastelIngredientWhereInput[]
    NOT?: CustomPastelIngredientWhereInput | CustomPastelIngredientWhereInput[]
    customPastelId?: StringFilter<"CustomPastelIngredient"> | string
    ingredientId?: StringFilter<"CustomPastelIngredient"> | string
    customPastel?: XOR<CustomPastelScalarRelationFilter, CustomPastelWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "id" | "customPastelId_ingredientId">

  export type CustomPastelIngredientOrderByWithAggregationInput = {
    id?: SortOrder
    customPastelId?: SortOrder
    ingredientId?: SortOrder
    _count?: CustomPastelIngredientCountOrderByAggregateInput
    _max?: CustomPastelIngredientMaxOrderByAggregateInput
    _min?: CustomPastelIngredientMinOrderByAggregateInput
  }

  export type CustomPastelIngredientScalarWhereWithAggregatesInput = {
    AND?: CustomPastelIngredientScalarWhereWithAggregatesInput | CustomPastelIngredientScalarWhereWithAggregatesInput[]
    OR?: CustomPastelIngredientScalarWhereWithAggregatesInput[]
    NOT?: CustomPastelIngredientScalarWhereWithAggregatesInput | CustomPastelIngredientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomPastelIngredient"> | string
    customPastelId?: StringWithAggregatesFilter<"CustomPastelIngredient"> | string
    ingredientId?: StringWithAggregatesFilter<"CustomPastelIngredient"> | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    statusHistory?: JsonNullableFilter<"Order">
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    orderItems?: OrderItemListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    statusHistory?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    statusHistory?: JsonNullableFilter<"Order">
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    status?: SortOrder
    total?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    statusHistory?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    userId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    customerName?: StringWithAggregatesFilter<"Order"> | string
    customerEmail?: StringWithAggregatesFilter<"Order"> | string
    customerPhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    statusHistory?: JsonNullableWithAggregatesFilter<"Order">
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    type?: EnumPastelTypeFilter<"OrderItem"> | $Enums.PastelType
    premadePastelId?: StringNullableFilter<"OrderItem"> | string | null
    customPastelId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    premadePastel?: XOR<PremadePastelNullableScalarRelationFilter, PremadePastelWhereInput> | null
    customPastel?: XOR<CustomPastelNullableScalarRelationFilter, CustomPastelWhereInput> | null
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    premadePastelId?: SortOrderInput | SortOrder
    customPastelId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    premadePastel?: PremadePastelOrderByWithRelationInput
    customPastel?: CustomPastelOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    type?: EnumPastelTypeFilter<"OrderItem"> | $Enums.PastelType
    premadePastelId?: StringNullableFilter<"OrderItem"> | string | null
    customPastelId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    premadePastel?: XOR<PremadePastelNullableScalarRelationFilter, PremadePastelWhereInput> | null
    customPastel?: XOR<CustomPastelNullableScalarRelationFilter, CustomPastelWhereInput> | null
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    premadePastelId?: SortOrderInput | SortOrder
    customPastelId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    type?: EnumPastelTypeWithAggregatesFilter<"OrderItem"> | $Enums.PastelType
    premadePastelId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    customPastelId?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    premadePasteis?: PremadePastelIngredientCreateNestedManyWithoutIngredientInput
    customPasteis?: CustomPastelIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    premadePasteis?: PremadePastelIngredientUncheckedCreateNestedManyWithoutIngredientInput
    customPasteis?: CustomPastelIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premadePasteis?: PremadePastelIngredientUpdateManyWithoutIngredientNestedInput
    customPasteis?: CustomPastelIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premadePasteis?: PremadePastelIngredientUncheckedUpdateManyWithoutIngredientNestedInput
    customPasteis?: CustomPastelIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremadePastelCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: PremadePastelIngredientCreateNestedManyWithoutPremadePastelInput
    orderItems?: OrderItemCreateNestedManyWithoutPremadePastelInput
  }

  export type PremadePastelUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: PremadePastelIngredientUncheckedCreateNestedManyWithoutPremadePastelInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPremadePastelInput
  }

  export type PremadePastelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: PremadePastelIngredientUpdateManyWithoutPremadePastelNestedInput
    orderItems?: OrderItemUpdateManyWithoutPremadePastelNestedInput
  }

  export type PremadePastelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: PremadePastelIngredientUncheckedUpdateManyWithoutPremadePastelNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutPremadePastelNestedInput
  }

  export type PremadePastelCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PremadePastelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremadePastelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremadePastelIngredientCreateInput = {
    id?: string
    premadePastel: PremadePastelCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutPremadePasteisInput
  }

  export type PremadePastelIngredientUncheckedCreateInput = {
    id?: string
    premadePastelId: string
    ingredientId: string
  }

  export type PremadePastelIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    premadePastel?: PremadePastelUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutPremadePasteisNestedInput
  }

  export type PremadePastelIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    premadePastelId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type PremadePastelIngredientCreateManyInput = {
    id?: string
    premadePastelId: string
    ingredientId: string
  }

  export type PremadePastelIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type PremadePastelIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    premadePastelId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomPastelCreateInput = {
    id?: string
    createdAt?: Date | string
    ingredients?: CustomPastelIngredientCreateNestedManyWithoutCustomPastelInput
    orderItems?: OrderItemCreateNestedManyWithoutCustomPastelInput
  }

  export type CustomPastelUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    ingredients?: CustomPastelIngredientUncheckedCreateNestedManyWithoutCustomPastelInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutCustomPastelInput
  }

  export type CustomPastelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: CustomPastelIngredientUpdateManyWithoutCustomPastelNestedInput
    orderItems?: OrderItemUpdateManyWithoutCustomPastelNestedInput
  }

  export type CustomPastelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: CustomPastelIngredientUncheckedUpdateManyWithoutCustomPastelNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutCustomPastelNestedInput
  }

  export type CustomPastelCreateManyInput = {
    id?: string
    createdAt?: Date | string
  }

  export type CustomPastelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomPastelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomPastelIngredientCreateInput = {
    id?: string
    customPastel: CustomPastelCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutCustomPasteisInput
  }

  export type CustomPastelIngredientUncheckedCreateInput = {
    id?: string
    customPastelId: string
    ingredientId: string
  }

  export type CustomPastelIngredientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPastel?: CustomPastelUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutCustomPasteisNestedInput
  }

  export type CustomPastelIngredientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPastelId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomPastelIngredientCreateManyInput = {
    id?: string
    customPastelId: string
    ingredientId: string
  }

  export type CustomPastelIngredientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CustomPastelIngredientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPastelId?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    userId?: string | null
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    userId?: string | null
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    type: $Enums.PastelType
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    premadePastel?: PremadePastelCreateNestedOneWithoutOrderItemsInput
    customPastel?: CustomPastelCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    type: $Enums.PastelType
    premadePastelId?: string | null
    customPastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    premadePastel?: PremadePastelUpdateOneWithoutOrderItemsNestedInput
    customPastel?: CustomPastelUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    premadePastelId?: NullableStringFieldUpdateOperationsInput | string | null
    customPastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    type: $Enums.PastelType
    premadePastelId?: string | null
    customPastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    premadePastelId?: NullableStringFieldUpdateOperationsInput | string | null
    customPastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PremadePastelIngredientListRelationFilter = {
    every?: PremadePastelIngredientWhereInput
    some?: PremadePastelIngredientWhereInput
    none?: PremadePastelIngredientWhereInput
  }

  export type CustomPastelIngredientListRelationFilter = {
    every?: CustomPastelIngredientWhereInput
    some?: CustomPastelIngredientWhereInput
    none?: CustomPastelIngredientWhereInput
  }

  export type PremadePastelIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomPastelIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isVegan?: SortOrder
    isOrganic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isVegan?: SortOrder
    isOrganic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    isVegan?: SortOrder
    isOrganic?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PremadePastelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PremadePastelAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PremadePastelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PremadePastelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PremadePastelSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PremadePastelScalarRelationFilter = {
    is?: PremadePastelWhereInput
    isNot?: PremadePastelWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type PremadePastelIngredientPremadePastelIdIngredientIdCompoundUniqueInput = {
    premadePastelId: string
    ingredientId: string
  }

  export type PremadePastelIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    premadePastelId?: SortOrder
    ingredientId?: SortOrder
  }

  export type PremadePastelIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    premadePastelId?: SortOrder
    ingredientId?: SortOrder
  }

  export type PremadePastelIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    premadePastelId?: SortOrder
    ingredientId?: SortOrder
  }

  export type CustomPastelCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomPastelMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomPastelMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomPastelScalarRelationFilter = {
    is?: CustomPastelWhereInput
    isNot?: CustomPastelWhereInput
  }

  export type CustomPastelIngredientCustomPastelIdIngredientIdCompoundUniqueInput = {
    customPastelId: string
    ingredientId: string
  }

  export type CustomPastelIngredientCountOrderByAggregateInput = {
    id?: SortOrder
    customPastelId?: SortOrder
    ingredientId?: SortOrder
  }

  export type CustomPastelIngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    customPastelId?: SortOrder
    ingredientId?: SortOrder
  }

  export type CustomPastelIngredientMinOrderByAggregateInput = {
    id?: SortOrder
    customPastelId?: SortOrder
    ingredientId?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    statusHistory?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    total?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPastelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PastelType | EnumPastelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPastelTypeFilter<$PrismaModel> | $Enums.PastelType
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PremadePastelNullableScalarRelationFilter = {
    is?: PremadePastelWhereInput | null
    isNot?: PremadePastelWhereInput | null
  }

  export type CustomPastelNullableScalarRelationFilter = {
    is?: CustomPastelWhereInput | null
    isNot?: CustomPastelWhereInput | null
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    premadePastelId?: SortOrder
    customPastelId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    premadePastelId?: SortOrder
    customPastelId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    type?: SortOrder
    premadePastelId?: SortOrder
    customPastelId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumPastelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PastelType | EnumPastelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPastelTypeWithAggregatesFilter<$PrismaModel> | $Enums.PastelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPastelTypeFilter<$PrismaModel>
    _max?: NestedEnumPastelTypeFilter<$PrismaModel>
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

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PremadePastelIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutIngredientInput, PremadePastelIngredientUncheckedCreateWithoutIngredientInput> | PremadePastelIngredientCreateWithoutIngredientInput[] | PremadePastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutIngredientInput | PremadePastelIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: PremadePastelIngredientCreateManyIngredientInputEnvelope
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
  }

  export type CustomPastelIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutIngredientInput, CustomPastelIngredientUncheckedCreateWithoutIngredientInput> | CustomPastelIngredientCreateWithoutIngredientInput[] | CustomPastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutIngredientInput | CustomPastelIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: CustomPastelIngredientCreateManyIngredientInputEnvelope
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
  }

  export type PremadePastelIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutIngredientInput, PremadePastelIngredientUncheckedCreateWithoutIngredientInput> | PremadePastelIngredientCreateWithoutIngredientInput[] | PremadePastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutIngredientInput | PremadePastelIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: PremadePastelIngredientCreateManyIngredientInputEnvelope
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
  }

  export type CustomPastelIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutIngredientInput, CustomPastelIngredientUncheckedCreateWithoutIngredientInput> | CustomPastelIngredientCreateWithoutIngredientInput[] | CustomPastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutIngredientInput | CustomPastelIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: CustomPastelIngredientCreateManyIngredientInputEnvelope
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PremadePastelIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutIngredientInput, PremadePastelIngredientUncheckedCreateWithoutIngredientInput> | PremadePastelIngredientCreateWithoutIngredientInput[] | PremadePastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutIngredientInput | PremadePastelIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: PremadePastelIngredientUpsertWithWhereUniqueWithoutIngredientInput | PremadePastelIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: PremadePastelIngredientCreateManyIngredientInputEnvelope
    set?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    disconnect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    delete?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    update?: PremadePastelIngredientUpdateWithWhereUniqueWithoutIngredientInput | PremadePastelIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: PremadePastelIngredientUpdateManyWithWhereWithoutIngredientInput | PremadePastelIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: PremadePastelIngredientScalarWhereInput | PremadePastelIngredientScalarWhereInput[]
  }

  export type CustomPastelIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutIngredientInput, CustomPastelIngredientUncheckedCreateWithoutIngredientInput> | CustomPastelIngredientCreateWithoutIngredientInput[] | CustomPastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutIngredientInput | CustomPastelIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: CustomPastelIngredientUpsertWithWhereUniqueWithoutIngredientInput | CustomPastelIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: CustomPastelIngredientCreateManyIngredientInputEnvelope
    set?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    disconnect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    delete?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    update?: CustomPastelIngredientUpdateWithWhereUniqueWithoutIngredientInput | CustomPastelIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: CustomPastelIngredientUpdateManyWithWhereWithoutIngredientInput | CustomPastelIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: CustomPastelIngredientScalarWhereInput | CustomPastelIngredientScalarWhereInput[]
  }

  export type PremadePastelIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutIngredientInput, PremadePastelIngredientUncheckedCreateWithoutIngredientInput> | PremadePastelIngredientCreateWithoutIngredientInput[] | PremadePastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutIngredientInput | PremadePastelIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: PremadePastelIngredientUpsertWithWhereUniqueWithoutIngredientInput | PremadePastelIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: PremadePastelIngredientCreateManyIngredientInputEnvelope
    set?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    disconnect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    delete?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    update?: PremadePastelIngredientUpdateWithWhereUniqueWithoutIngredientInput | PremadePastelIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: PremadePastelIngredientUpdateManyWithWhereWithoutIngredientInput | PremadePastelIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: PremadePastelIngredientScalarWhereInput | PremadePastelIngredientScalarWhereInput[]
  }

  export type CustomPastelIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutIngredientInput, CustomPastelIngredientUncheckedCreateWithoutIngredientInput> | CustomPastelIngredientCreateWithoutIngredientInput[] | CustomPastelIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutIngredientInput | CustomPastelIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: CustomPastelIngredientUpsertWithWhereUniqueWithoutIngredientInput | CustomPastelIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: CustomPastelIngredientCreateManyIngredientInputEnvelope
    set?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    disconnect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    delete?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    update?: CustomPastelIngredientUpdateWithWhereUniqueWithoutIngredientInput | CustomPastelIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: CustomPastelIngredientUpdateManyWithWhereWithoutIngredientInput | CustomPastelIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: CustomPastelIngredientScalarWhereInput | CustomPastelIngredientScalarWhereInput[]
  }

  export type PremadePastelIngredientCreateNestedManyWithoutPremadePastelInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutPremadePastelInput, PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput> | PremadePastelIngredientCreateWithoutPremadePastelInput[] | PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput | PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput[]
    createMany?: PremadePastelIngredientCreateManyPremadePastelInputEnvelope
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutPremadePastelInput = {
    create?: XOR<OrderItemCreateWithoutPremadePastelInput, OrderItemUncheckedCreateWithoutPremadePastelInput> | OrderItemCreateWithoutPremadePastelInput[] | OrderItemUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPremadePastelInput | OrderItemCreateOrConnectWithoutPremadePastelInput[]
    createMany?: OrderItemCreateManyPremadePastelInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PremadePastelIngredientUncheckedCreateNestedManyWithoutPremadePastelInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutPremadePastelInput, PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput> | PremadePastelIngredientCreateWithoutPremadePastelInput[] | PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput | PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput[]
    createMany?: PremadePastelIngredientCreateManyPremadePastelInputEnvelope
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutPremadePastelInput = {
    create?: XOR<OrderItemCreateWithoutPremadePastelInput, OrderItemUncheckedCreateWithoutPremadePastelInput> | OrderItemCreateWithoutPremadePastelInput[] | OrderItemUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPremadePastelInput | OrderItemCreateOrConnectWithoutPremadePastelInput[]
    createMany?: OrderItemCreateManyPremadePastelInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PremadePastelIngredientUpdateManyWithoutPremadePastelNestedInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutPremadePastelInput, PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput> | PremadePastelIngredientCreateWithoutPremadePastelInput[] | PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput | PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput[]
    upsert?: PremadePastelIngredientUpsertWithWhereUniqueWithoutPremadePastelInput | PremadePastelIngredientUpsertWithWhereUniqueWithoutPremadePastelInput[]
    createMany?: PremadePastelIngredientCreateManyPremadePastelInputEnvelope
    set?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    disconnect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    delete?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    update?: PremadePastelIngredientUpdateWithWhereUniqueWithoutPremadePastelInput | PremadePastelIngredientUpdateWithWhereUniqueWithoutPremadePastelInput[]
    updateMany?: PremadePastelIngredientUpdateManyWithWhereWithoutPremadePastelInput | PremadePastelIngredientUpdateManyWithWhereWithoutPremadePastelInput[]
    deleteMany?: PremadePastelIngredientScalarWhereInput | PremadePastelIngredientScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutPremadePastelNestedInput = {
    create?: XOR<OrderItemCreateWithoutPremadePastelInput, OrderItemUncheckedCreateWithoutPremadePastelInput> | OrderItemCreateWithoutPremadePastelInput[] | OrderItemUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPremadePastelInput | OrderItemCreateOrConnectWithoutPremadePastelInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPremadePastelInput | OrderItemUpsertWithWhereUniqueWithoutPremadePastelInput[]
    createMany?: OrderItemCreateManyPremadePastelInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPremadePastelInput | OrderItemUpdateWithWhereUniqueWithoutPremadePastelInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPremadePastelInput | OrderItemUpdateManyWithWhereWithoutPremadePastelInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PremadePastelIngredientUncheckedUpdateManyWithoutPremadePastelNestedInput = {
    create?: XOR<PremadePastelIngredientCreateWithoutPremadePastelInput, PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput> | PremadePastelIngredientCreateWithoutPremadePastelInput[] | PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput | PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput[]
    upsert?: PremadePastelIngredientUpsertWithWhereUniqueWithoutPremadePastelInput | PremadePastelIngredientUpsertWithWhereUniqueWithoutPremadePastelInput[]
    createMany?: PremadePastelIngredientCreateManyPremadePastelInputEnvelope
    set?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    disconnect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    delete?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    connect?: PremadePastelIngredientWhereUniqueInput | PremadePastelIngredientWhereUniqueInput[]
    update?: PremadePastelIngredientUpdateWithWhereUniqueWithoutPremadePastelInput | PremadePastelIngredientUpdateWithWhereUniqueWithoutPremadePastelInput[]
    updateMany?: PremadePastelIngredientUpdateManyWithWhereWithoutPremadePastelInput | PremadePastelIngredientUpdateManyWithWhereWithoutPremadePastelInput[]
    deleteMany?: PremadePastelIngredientScalarWhereInput | PremadePastelIngredientScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutPremadePastelNestedInput = {
    create?: XOR<OrderItemCreateWithoutPremadePastelInput, OrderItemUncheckedCreateWithoutPremadePastelInput> | OrderItemCreateWithoutPremadePastelInput[] | OrderItemUncheckedCreateWithoutPremadePastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutPremadePastelInput | OrderItemCreateOrConnectWithoutPremadePastelInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutPremadePastelInput | OrderItemUpsertWithWhereUniqueWithoutPremadePastelInput[]
    createMany?: OrderItemCreateManyPremadePastelInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutPremadePastelInput | OrderItemUpdateWithWhereUniqueWithoutPremadePastelInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutPremadePastelInput | OrderItemUpdateManyWithWhereWithoutPremadePastelInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PremadePastelCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<PremadePastelCreateWithoutIngredientsInput, PremadePastelUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: PremadePastelCreateOrConnectWithoutIngredientsInput
    connect?: PremadePastelWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutPremadePasteisInput = {
    create?: XOR<IngredientCreateWithoutPremadePasteisInput, IngredientUncheckedCreateWithoutPremadePasteisInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutPremadePasteisInput
    connect?: IngredientWhereUniqueInput
  }

  export type PremadePastelUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<PremadePastelCreateWithoutIngredientsInput, PremadePastelUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: PremadePastelCreateOrConnectWithoutIngredientsInput
    upsert?: PremadePastelUpsertWithoutIngredientsInput
    connect?: PremadePastelWhereUniqueInput
    update?: XOR<XOR<PremadePastelUpdateToOneWithWhereWithoutIngredientsInput, PremadePastelUpdateWithoutIngredientsInput>, PremadePastelUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutPremadePasteisNestedInput = {
    create?: XOR<IngredientCreateWithoutPremadePasteisInput, IngredientUncheckedCreateWithoutPremadePasteisInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutPremadePasteisInput
    upsert?: IngredientUpsertWithoutPremadePasteisInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutPremadePasteisInput, IngredientUpdateWithoutPremadePasteisInput>, IngredientUncheckedUpdateWithoutPremadePasteisInput>
  }

  export type CustomPastelIngredientCreateNestedManyWithoutCustomPastelInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutCustomPastelInput, CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput> | CustomPastelIngredientCreateWithoutCustomPastelInput[] | CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput | CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput[]
    createMany?: CustomPastelIngredientCreateManyCustomPastelInputEnvelope
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutCustomPastelInput = {
    create?: XOR<OrderItemCreateWithoutCustomPastelInput, OrderItemUncheckedCreateWithoutCustomPastelInput> | OrderItemCreateWithoutCustomPastelInput[] | OrderItemUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutCustomPastelInput | OrderItemCreateOrConnectWithoutCustomPastelInput[]
    createMany?: OrderItemCreateManyCustomPastelInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CustomPastelIngredientUncheckedCreateNestedManyWithoutCustomPastelInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutCustomPastelInput, CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput> | CustomPastelIngredientCreateWithoutCustomPastelInput[] | CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput | CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput[]
    createMany?: CustomPastelIngredientCreateManyCustomPastelInputEnvelope
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutCustomPastelInput = {
    create?: XOR<OrderItemCreateWithoutCustomPastelInput, OrderItemUncheckedCreateWithoutCustomPastelInput> | OrderItemCreateWithoutCustomPastelInput[] | OrderItemUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutCustomPastelInput | OrderItemCreateOrConnectWithoutCustomPastelInput[]
    createMany?: OrderItemCreateManyCustomPastelInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CustomPastelIngredientUpdateManyWithoutCustomPastelNestedInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutCustomPastelInput, CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput> | CustomPastelIngredientCreateWithoutCustomPastelInput[] | CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput | CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput[]
    upsert?: CustomPastelIngredientUpsertWithWhereUniqueWithoutCustomPastelInput | CustomPastelIngredientUpsertWithWhereUniqueWithoutCustomPastelInput[]
    createMany?: CustomPastelIngredientCreateManyCustomPastelInputEnvelope
    set?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    disconnect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    delete?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    update?: CustomPastelIngredientUpdateWithWhereUniqueWithoutCustomPastelInput | CustomPastelIngredientUpdateWithWhereUniqueWithoutCustomPastelInput[]
    updateMany?: CustomPastelIngredientUpdateManyWithWhereWithoutCustomPastelInput | CustomPastelIngredientUpdateManyWithWhereWithoutCustomPastelInput[]
    deleteMany?: CustomPastelIngredientScalarWhereInput | CustomPastelIngredientScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutCustomPastelNestedInput = {
    create?: XOR<OrderItemCreateWithoutCustomPastelInput, OrderItemUncheckedCreateWithoutCustomPastelInput> | OrderItemCreateWithoutCustomPastelInput[] | OrderItemUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutCustomPastelInput | OrderItemCreateOrConnectWithoutCustomPastelInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutCustomPastelInput | OrderItemUpsertWithWhereUniqueWithoutCustomPastelInput[]
    createMany?: OrderItemCreateManyCustomPastelInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutCustomPastelInput | OrderItemUpdateWithWhereUniqueWithoutCustomPastelInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutCustomPastelInput | OrderItemUpdateManyWithWhereWithoutCustomPastelInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CustomPastelIngredientUncheckedUpdateManyWithoutCustomPastelNestedInput = {
    create?: XOR<CustomPastelIngredientCreateWithoutCustomPastelInput, CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput> | CustomPastelIngredientCreateWithoutCustomPastelInput[] | CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput | CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput[]
    upsert?: CustomPastelIngredientUpsertWithWhereUniqueWithoutCustomPastelInput | CustomPastelIngredientUpsertWithWhereUniqueWithoutCustomPastelInput[]
    createMany?: CustomPastelIngredientCreateManyCustomPastelInputEnvelope
    set?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    disconnect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    delete?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    connect?: CustomPastelIngredientWhereUniqueInput | CustomPastelIngredientWhereUniqueInput[]
    update?: CustomPastelIngredientUpdateWithWhereUniqueWithoutCustomPastelInput | CustomPastelIngredientUpdateWithWhereUniqueWithoutCustomPastelInput[]
    updateMany?: CustomPastelIngredientUpdateManyWithWhereWithoutCustomPastelInput | CustomPastelIngredientUpdateManyWithWhereWithoutCustomPastelInput[]
    deleteMany?: CustomPastelIngredientScalarWhereInput | CustomPastelIngredientScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutCustomPastelNestedInput = {
    create?: XOR<OrderItemCreateWithoutCustomPastelInput, OrderItemUncheckedCreateWithoutCustomPastelInput> | OrderItemCreateWithoutCustomPastelInput[] | OrderItemUncheckedCreateWithoutCustomPastelInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutCustomPastelInput | OrderItemCreateOrConnectWithoutCustomPastelInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutCustomPastelInput | OrderItemUpsertWithWhereUniqueWithoutCustomPastelInput[]
    createMany?: OrderItemCreateManyCustomPastelInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutCustomPastelInput | OrderItemUpdateWithWhereUniqueWithoutCustomPastelInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutCustomPastelInput | OrderItemUpdateManyWithWhereWithoutCustomPastelInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CustomPastelCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<CustomPastelCreateWithoutIngredientsInput, CustomPastelUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: CustomPastelCreateOrConnectWithoutIngredientsInput
    connect?: CustomPastelWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutCustomPasteisInput = {
    create?: XOR<IngredientCreateWithoutCustomPasteisInput, IngredientUncheckedCreateWithoutCustomPasteisInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutCustomPasteisInput
    connect?: IngredientWhereUniqueInput
  }

  export type CustomPastelUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<CustomPastelCreateWithoutIngredientsInput, CustomPastelUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: CustomPastelCreateOrConnectWithoutIngredientsInput
    upsert?: CustomPastelUpsertWithoutIngredientsInput
    connect?: CustomPastelWhereUniqueInput
    update?: XOR<XOR<CustomPastelUpdateToOneWithWhereWithoutIngredientsInput, CustomPastelUpdateWithoutIngredientsInput>, CustomPastelUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutCustomPasteisNestedInput = {
    create?: XOR<IngredientCreateWithoutCustomPasteisInput, IngredientUncheckedCreateWithoutCustomPasteisInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutCustomPasteisInput
    upsert?: IngredientUpsertWithoutCustomPasteisInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutCustomPasteisInput, IngredientUpdateWithoutCustomPasteisInput>, IngredientUncheckedUpdateWithoutCustomPasteisInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type PremadePastelCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<PremadePastelCreateWithoutOrderItemsInput, PremadePastelUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PremadePastelCreateOrConnectWithoutOrderItemsInput
    connect?: PremadePastelWhereUniqueInput
  }

  export type CustomPastelCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<CustomPastelCreateWithoutOrderItemsInput, CustomPastelUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: CustomPastelCreateOrConnectWithoutOrderItemsInput
    connect?: CustomPastelWhereUniqueInput
  }

  export type EnumPastelTypeFieldUpdateOperationsInput = {
    set?: $Enums.PastelType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PremadePastelUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<PremadePastelCreateWithoutOrderItemsInput, PremadePastelUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PremadePastelCreateOrConnectWithoutOrderItemsInput
    upsert?: PremadePastelUpsertWithoutOrderItemsInput
    disconnect?: PremadePastelWhereInput | boolean
    delete?: PremadePastelWhereInput | boolean
    connect?: PremadePastelWhereUniqueInput
    update?: XOR<XOR<PremadePastelUpdateToOneWithWhereWithoutOrderItemsInput, PremadePastelUpdateWithoutOrderItemsInput>, PremadePastelUncheckedUpdateWithoutOrderItemsInput>
  }

  export type CustomPastelUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<CustomPastelCreateWithoutOrderItemsInput, CustomPastelUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: CustomPastelCreateOrConnectWithoutOrderItemsInput
    upsert?: CustomPastelUpsertWithoutOrderItemsInput
    disconnect?: CustomPastelWhereInput | boolean
    delete?: CustomPastelWhereInput | boolean
    connect?: CustomPastelWhereUniqueInput
    update?: XOR<XOR<CustomPastelUpdateToOneWithWhereWithoutOrderItemsInput, CustomPastelUpdateWithoutOrderItemsInput>, CustomPastelUncheckedUpdateWithoutOrderItemsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumPastelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PastelType | EnumPastelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPastelTypeFilter<$PrismaModel> | $Enums.PastelType
  }

  export type NestedEnumPastelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PastelType | EnumPastelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PastelType[] | ListEnumPastelTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPastelTypeWithAggregatesFilter<$PrismaModel> | $Enums.PastelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPastelTypeFilter<$PrismaModel>
    _max?: NestedEnumPastelTypeFilter<$PrismaModel>
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

  export type OrderCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    userId?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    total?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    customerName?: StringFilter<"Order"> | string
    customerEmail?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    statusHistory?: JsonNullableFilter<"Order">
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PremadePastelIngredientCreateWithoutIngredientInput = {
    id?: string
    premadePastel: PremadePastelCreateNestedOneWithoutIngredientsInput
  }

  export type PremadePastelIngredientUncheckedCreateWithoutIngredientInput = {
    id?: string
    premadePastelId: string
  }

  export type PremadePastelIngredientCreateOrConnectWithoutIngredientInput = {
    where: PremadePastelIngredientWhereUniqueInput
    create: XOR<PremadePastelIngredientCreateWithoutIngredientInput, PremadePastelIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type PremadePastelIngredientCreateManyIngredientInputEnvelope = {
    data: PremadePastelIngredientCreateManyIngredientInput | PremadePastelIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type CustomPastelIngredientCreateWithoutIngredientInput = {
    id?: string
    customPastel: CustomPastelCreateNestedOneWithoutIngredientsInput
  }

  export type CustomPastelIngredientUncheckedCreateWithoutIngredientInput = {
    id?: string
    customPastelId: string
  }

  export type CustomPastelIngredientCreateOrConnectWithoutIngredientInput = {
    where: CustomPastelIngredientWhereUniqueInput
    create: XOR<CustomPastelIngredientCreateWithoutIngredientInput, CustomPastelIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type CustomPastelIngredientCreateManyIngredientInputEnvelope = {
    data: CustomPastelIngredientCreateManyIngredientInput | CustomPastelIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type PremadePastelIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: PremadePastelIngredientWhereUniqueInput
    update: XOR<PremadePastelIngredientUpdateWithoutIngredientInput, PremadePastelIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<PremadePastelIngredientCreateWithoutIngredientInput, PremadePastelIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type PremadePastelIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: PremadePastelIngredientWhereUniqueInput
    data: XOR<PremadePastelIngredientUpdateWithoutIngredientInput, PremadePastelIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type PremadePastelIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: PremadePastelIngredientScalarWhereInput
    data: XOR<PremadePastelIngredientUpdateManyMutationInput, PremadePastelIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type PremadePastelIngredientScalarWhereInput = {
    AND?: PremadePastelIngredientScalarWhereInput | PremadePastelIngredientScalarWhereInput[]
    OR?: PremadePastelIngredientScalarWhereInput[]
    NOT?: PremadePastelIngredientScalarWhereInput | PremadePastelIngredientScalarWhereInput[]
    id?: StringFilter<"PremadePastelIngredient"> | string
    premadePastelId?: StringFilter<"PremadePastelIngredient"> | string
    ingredientId?: StringFilter<"PremadePastelIngredient"> | string
  }

  export type CustomPastelIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: CustomPastelIngredientWhereUniqueInput
    update: XOR<CustomPastelIngredientUpdateWithoutIngredientInput, CustomPastelIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<CustomPastelIngredientCreateWithoutIngredientInput, CustomPastelIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type CustomPastelIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: CustomPastelIngredientWhereUniqueInput
    data: XOR<CustomPastelIngredientUpdateWithoutIngredientInput, CustomPastelIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type CustomPastelIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: CustomPastelIngredientScalarWhereInput
    data: XOR<CustomPastelIngredientUpdateManyMutationInput, CustomPastelIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type CustomPastelIngredientScalarWhereInput = {
    AND?: CustomPastelIngredientScalarWhereInput | CustomPastelIngredientScalarWhereInput[]
    OR?: CustomPastelIngredientScalarWhereInput[]
    NOT?: CustomPastelIngredientScalarWhereInput | CustomPastelIngredientScalarWhereInput[]
    id?: StringFilter<"CustomPastelIngredient"> | string
    customPastelId?: StringFilter<"CustomPastelIngredient"> | string
    ingredientId?: StringFilter<"CustomPastelIngredient"> | string
  }

  export type PremadePastelIngredientCreateWithoutPremadePastelInput = {
    id?: string
    ingredient: IngredientCreateNestedOneWithoutPremadePasteisInput
  }

  export type PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput = {
    id?: string
    ingredientId: string
  }

  export type PremadePastelIngredientCreateOrConnectWithoutPremadePastelInput = {
    where: PremadePastelIngredientWhereUniqueInput
    create: XOR<PremadePastelIngredientCreateWithoutPremadePastelInput, PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput>
  }

  export type PremadePastelIngredientCreateManyPremadePastelInputEnvelope = {
    data: PremadePastelIngredientCreateManyPremadePastelInput | PremadePastelIngredientCreateManyPremadePastelInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutPremadePastelInput = {
    id?: string
    type: $Enums.PastelType
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    customPastel?: CustomPastelCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutPremadePastelInput = {
    id?: string
    orderId: string
    type: $Enums.PastelType
    customPastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutPremadePastelInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutPremadePastelInput, OrderItemUncheckedCreateWithoutPremadePastelInput>
  }

  export type OrderItemCreateManyPremadePastelInputEnvelope = {
    data: OrderItemCreateManyPremadePastelInput | OrderItemCreateManyPremadePastelInput[]
    skipDuplicates?: boolean
  }

  export type PremadePastelIngredientUpsertWithWhereUniqueWithoutPremadePastelInput = {
    where: PremadePastelIngredientWhereUniqueInput
    update: XOR<PremadePastelIngredientUpdateWithoutPremadePastelInput, PremadePastelIngredientUncheckedUpdateWithoutPremadePastelInput>
    create: XOR<PremadePastelIngredientCreateWithoutPremadePastelInput, PremadePastelIngredientUncheckedCreateWithoutPremadePastelInput>
  }

  export type PremadePastelIngredientUpdateWithWhereUniqueWithoutPremadePastelInput = {
    where: PremadePastelIngredientWhereUniqueInput
    data: XOR<PremadePastelIngredientUpdateWithoutPremadePastelInput, PremadePastelIngredientUncheckedUpdateWithoutPremadePastelInput>
  }

  export type PremadePastelIngredientUpdateManyWithWhereWithoutPremadePastelInput = {
    where: PremadePastelIngredientScalarWhereInput
    data: XOR<PremadePastelIngredientUpdateManyMutationInput, PremadePastelIngredientUncheckedUpdateManyWithoutPremadePastelInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutPremadePastelInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutPremadePastelInput, OrderItemUncheckedUpdateWithoutPremadePastelInput>
    create: XOR<OrderItemCreateWithoutPremadePastelInput, OrderItemUncheckedCreateWithoutPremadePastelInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutPremadePastelInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutPremadePastelInput, OrderItemUncheckedUpdateWithoutPremadePastelInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutPremadePastelInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutPremadePastelInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    type?: EnumPastelTypeFilter<"OrderItem"> | $Enums.PastelType
    premadePastelId?: StringNullableFilter<"OrderItem"> | string | null
    customPastelId?: StringNullableFilter<"OrderItem"> | string | null
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type PremadePastelCreateWithoutIngredientsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutPremadePastelInput
  }

  export type PremadePastelUncheckedCreateWithoutIngredientsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutPremadePastelInput
  }

  export type PremadePastelCreateOrConnectWithoutIngredientsInput = {
    where: PremadePastelWhereUniqueInput
    create: XOR<PremadePastelCreateWithoutIngredientsInput, PremadePastelUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutPremadePasteisInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customPasteis?: CustomPastelIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutPremadePasteisInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customPasteis?: CustomPastelIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutPremadePasteisInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutPremadePasteisInput, IngredientUncheckedCreateWithoutPremadePasteisInput>
  }

  export type PremadePastelUpsertWithoutIngredientsInput = {
    update: XOR<PremadePastelUpdateWithoutIngredientsInput, PremadePastelUncheckedUpdateWithoutIngredientsInput>
    create: XOR<PremadePastelCreateWithoutIngredientsInput, PremadePastelUncheckedCreateWithoutIngredientsInput>
    where?: PremadePastelWhereInput
  }

  export type PremadePastelUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: PremadePastelWhereInput
    data: XOR<PremadePastelUpdateWithoutIngredientsInput, PremadePastelUncheckedUpdateWithoutIngredientsInput>
  }

  export type PremadePastelUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutPremadePastelNestedInput
  }

  export type PremadePastelUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutPremadePastelNestedInput
  }

  export type IngredientUpsertWithoutPremadePasteisInput = {
    update: XOR<IngredientUpdateWithoutPremadePasteisInput, IngredientUncheckedUpdateWithoutPremadePasteisInput>
    create: XOR<IngredientCreateWithoutPremadePasteisInput, IngredientUncheckedCreateWithoutPremadePasteisInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutPremadePasteisInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutPremadePasteisInput, IngredientUncheckedUpdateWithoutPremadePasteisInput>
  }

  export type IngredientUpdateWithoutPremadePasteisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customPasteis?: CustomPastelIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutPremadePasteisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customPasteis?: CustomPastelIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type CustomPastelIngredientCreateWithoutCustomPastelInput = {
    id?: string
    ingredient: IngredientCreateNestedOneWithoutCustomPasteisInput
  }

  export type CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput = {
    id?: string
    ingredientId: string
  }

  export type CustomPastelIngredientCreateOrConnectWithoutCustomPastelInput = {
    where: CustomPastelIngredientWhereUniqueInput
    create: XOR<CustomPastelIngredientCreateWithoutCustomPastelInput, CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput>
  }

  export type CustomPastelIngredientCreateManyCustomPastelInputEnvelope = {
    data: CustomPastelIngredientCreateManyCustomPastelInput | CustomPastelIngredientCreateManyCustomPastelInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutCustomPastelInput = {
    id?: string
    type: $Enums.PastelType
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    premadePastel?: PremadePastelCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutCustomPastelInput = {
    id?: string
    orderId: string
    type: $Enums.PastelType
    premadePastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutCustomPastelInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutCustomPastelInput, OrderItemUncheckedCreateWithoutCustomPastelInput>
  }

  export type OrderItemCreateManyCustomPastelInputEnvelope = {
    data: OrderItemCreateManyCustomPastelInput | OrderItemCreateManyCustomPastelInput[]
    skipDuplicates?: boolean
  }

  export type CustomPastelIngredientUpsertWithWhereUniqueWithoutCustomPastelInput = {
    where: CustomPastelIngredientWhereUniqueInput
    update: XOR<CustomPastelIngredientUpdateWithoutCustomPastelInput, CustomPastelIngredientUncheckedUpdateWithoutCustomPastelInput>
    create: XOR<CustomPastelIngredientCreateWithoutCustomPastelInput, CustomPastelIngredientUncheckedCreateWithoutCustomPastelInput>
  }

  export type CustomPastelIngredientUpdateWithWhereUniqueWithoutCustomPastelInput = {
    where: CustomPastelIngredientWhereUniqueInput
    data: XOR<CustomPastelIngredientUpdateWithoutCustomPastelInput, CustomPastelIngredientUncheckedUpdateWithoutCustomPastelInput>
  }

  export type CustomPastelIngredientUpdateManyWithWhereWithoutCustomPastelInput = {
    where: CustomPastelIngredientScalarWhereInput
    data: XOR<CustomPastelIngredientUpdateManyMutationInput, CustomPastelIngredientUncheckedUpdateManyWithoutCustomPastelInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutCustomPastelInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutCustomPastelInput, OrderItemUncheckedUpdateWithoutCustomPastelInput>
    create: XOR<OrderItemCreateWithoutCustomPastelInput, OrderItemUncheckedCreateWithoutCustomPastelInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutCustomPastelInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutCustomPastelInput, OrderItemUncheckedUpdateWithoutCustomPastelInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutCustomPastelInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutCustomPastelInput>
  }

  export type CustomPastelCreateWithoutIngredientsInput = {
    id?: string
    createdAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutCustomPastelInput
  }

  export type CustomPastelUncheckedCreateWithoutIngredientsInput = {
    id?: string
    createdAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutCustomPastelInput
  }

  export type CustomPastelCreateOrConnectWithoutIngredientsInput = {
    where: CustomPastelWhereUniqueInput
    create: XOR<CustomPastelCreateWithoutIngredientsInput, CustomPastelUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutCustomPasteisInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    premadePasteis?: PremadePastelIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateWithoutCustomPasteisInput = {
    id?: string
    name: string
    slug: string
    description: string
    imageUrl: string
    isVegan?: boolean
    isOrganic?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    premadePasteis?: PremadePastelIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientCreateOrConnectWithoutCustomPasteisInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutCustomPasteisInput, IngredientUncheckedCreateWithoutCustomPasteisInput>
  }

  export type CustomPastelUpsertWithoutIngredientsInput = {
    update: XOR<CustomPastelUpdateWithoutIngredientsInput, CustomPastelUncheckedUpdateWithoutIngredientsInput>
    create: XOR<CustomPastelCreateWithoutIngredientsInput, CustomPastelUncheckedCreateWithoutIngredientsInput>
    where?: CustomPastelWhereInput
  }

  export type CustomPastelUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: CustomPastelWhereInput
    data: XOR<CustomPastelUpdateWithoutIngredientsInput, CustomPastelUncheckedUpdateWithoutIngredientsInput>
  }

  export type CustomPastelUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutCustomPastelNestedInput
  }

  export type CustomPastelUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutCustomPastelNestedInput
  }

  export type IngredientUpsertWithoutCustomPasteisInput = {
    update: XOR<IngredientUpdateWithoutCustomPasteisInput, IngredientUncheckedUpdateWithoutCustomPasteisInput>
    create: XOR<IngredientCreateWithoutCustomPasteisInput, IngredientUncheckedCreateWithoutCustomPasteisInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutCustomPasteisInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutCustomPasteisInput, IngredientUncheckedUpdateWithoutCustomPasteisInput>
  }

  export type IngredientUpdateWithoutCustomPasteisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premadePasteis?: PremadePastelIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateWithoutCustomPasteisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isOrganic?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premadePasteis?: PremadePastelIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    type: $Enums.PastelType
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    premadePastel?: PremadePastelCreateNestedOneWithoutOrderItemsInput
    customPastel?: CustomPastelCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    type: $Enums.PastelType
    premadePastelId?: string | null
    customPastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    userId?: string | null
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type PremadePastelCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: PremadePastelIngredientCreateNestedManyWithoutPremadePastelInput
  }

  export type PremadePastelUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    imageUrl: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: PremadePastelIngredientUncheckedCreateNestedManyWithoutPremadePastelInput
  }

  export type PremadePastelCreateOrConnectWithoutOrderItemsInput = {
    where: PremadePastelWhereUniqueInput
    create: XOR<PremadePastelCreateWithoutOrderItemsInput, PremadePastelUncheckedCreateWithoutOrderItemsInput>
  }

  export type CustomPastelCreateWithoutOrderItemsInput = {
    id?: string
    createdAt?: Date | string
    ingredients?: CustomPastelIngredientCreateNestedManyWithoutCustomPastelInput
  }

  export type CustomPastelUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    createdAt?: Date | string
    ingredients?: CustomPastelIngredientUncheckedCreateNestedManyWithoutCustomPastelInput
  }

  export type CustomPastelCreateOrConnectWithoutOrderItemsInput = {
    where: CustomPastelWhereUniqueInput
    create: XOR<CustomPastelCreateWithoutOrderItemsInput, CustomPastelUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremadePastelUpsertWithoutOrderItemsInput = {
    update: XOR<PremadePastelUpdateWithoutOrderItemsInput, PremadePastelUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<PremadePastelCreateWithoutOrderItemsInput, PremadePastelUncheckedCreateWithoutOrderItemsInput>
    where?: PremadePastelWhereInput
  }

  export type PremadePastelUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: PremadePastelWhereInput
    data: XOR<PremadePastelUpdateWithoutOrderItemsInput, PremadePastelUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PremadePastelUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: PremadePastelIngredientUpdateManyWithoutPremadePastelNestedInput
  }

  export type PremadePastelUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: PremadePastelIngredientUncheckedUpdateManyWithoutPremadePastelNestedInput
  }

  export type CustomPastelUpsertWithoutOrderItemsInput = {
    update: XOR<CustomPastelUpdateWithoutOrderItemsInput, CustomPastelUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<CustomPastelCreateWithoutOrderItemsInput, CustomPastelUncheckedCreateWithoutOrderItemsInput>
    where?: CustomPastelWhereInput
  }

  export type CustomPastelUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: CustomPastelWhereInput
    data: XOR<CustomPastelUpdateWithoutOrderItemsInput, CustomPastelUncheckedUpdateWithoutOrderItemsInput>
  }

  export type CustomPastelUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: CustomPastelIngredientUpdateManyWithoutCustomPastelNestedInput
  }

  export type CustomPastelUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: CustomPastelIngredientUncheckedUpdateManyWithoutCustomPastelNestedInput
  }

  export type OrderCreateManyUserInput = {
    id?: string
    status?: $Enums.OrderStatus
    total: Decimal | DecimalJsLike | number | string
    customerName: string
    customerEmail: string
    customerPhone?: string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customerName?: StringFieldUpdateOperationsInput | string
    customerEmail?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    statusHistory?: NullableJsonNullValueInput | InputJsonValue
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PremadePastelIngredientCreateManyIngredientInput = {
    id?: string
    premadePastelId: string
  }

  export type CustomPastelIngredientCreateManyIngredientInput = {
    id?: string
    customPastelId: string
  }

  export type PremadePastelIngredientUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    premadePastel?: PremadePastelUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type PremadePastelIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    premadePastelId?: StringFieldUpdateOperationsInput | string
  }

  export type PremadePastelIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    premadePastelId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomPastelIngredientUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPastel?: CustomPastelUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type CustomPastelIngredientUncheckedUpdateWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPastelId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomPastelIngredientUncheckedUpdateManyWithoutIngredientInput = {
    id?: StringFieldUpdateOperationsInput | string
    customPastelId?: StringFieldUpdateOperationsInput | string
  }

  export type PremadePastelIngredientCreateManyPremadePastelInput = {
    id?: string
    ingredientId: string
  }

  export type OrderItemCreateManyPremadePastelInput = {
    id?: string
    orderId: string
    type: $Enums.PastelType
    customPastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PremadePastelIngredientUpdateWithoutPremadePastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutPremadePasteisNestedInput
  }

  export type PremadePastelIngredientUncheckedUpdateWithoutPremadePastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type PremadePastelIngredientUncheckedUpdateManyWithoutPremadePastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpdateWithoutPremadePastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    customPastel?: CustomPastelUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutPremadePastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    customPastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutPremadePastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    customPastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomPastelIngredientCreateManyCustomPastelInput = {
    id?: string
    ingredientId: string
  }

  export type OrderItemCreateManyCustomPastelInput = {
    id?: string
    orderId: string
    type: $Enums.PastelType
    premadePastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type CustomPastelIngredientUpdateWithoutCustomPastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredient?: IngredientUpdateOneRequiredWithoutCustomPasteisNestedInput
  }

  export type CustomPastelIngredientUncheckedUpdateWithoutCustomPastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomPastelIngredientUncheckedUpdateManyWithoutCustomPastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    ingredientId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderItemUpdateWithoutCustomPastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    premadePastel?: PremadePastelUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutCustomPastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    premadePastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutCustomPastelInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    premadePastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    type: $Enums.PastelType
    premadePastelId?: string | null
    customPastelId?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    premadePastel?: PremadePastelUpdateOneWithoutOrderItemsNestedInput
    customPastel?: CustomPastelUpdateOneWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    premadePastelId?: NullableStringFieldUpdateOperationsInput | string | null
    customPastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPastelTypeFieldUpdateOperationsInput | $Enums.PastelType
    premadePastelId?: NullableStringFieldUpdateOperationsInput | string | null
    customPastelId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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