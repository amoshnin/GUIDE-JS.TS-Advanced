// # Conditional Types
type isNumber<T> = T extends number ? "number" : "other"

export type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function "
  : T extends null
  ? "null"
  : "object"

function typeName<T>(t: T): TypeName<T> {
  return typeof t as TypeName<T>
}

const str = typeName("Hello world")
const num = typeName(123)
const bool = typeName(false)

//// ///// //// ////
// # Infer keyword
type UnboxArray<T> = T extends Array<infer Member> ? Member : "other"
type UnboxedArray = UnboxArray<string[]>

//// ///// //// ////
// # Lookup types
type Data = {
  user: {
    token: string
  }
}

function getToken(): Data["user"] {
  return {
    token: "dsmakdmsakdas",
  }
}

//// ///// //// ////
// # Generics
function logAccess<T>(object: T, key: keyof T): T {
  return object
}

const todo = logAccess(
  {
    id: 1,
    text: "Buy milk",
  },
  "id"
)

//// ///// //// ////
// # Mapped types
type Point = {
  x: number
  y: number
}

type ReadonlyPoint = {
  readonly x: number
  readonly y: number
}

const origin: Readonly<Point> = {
  x: 0,
  y: 0,
}

type MappedType<T> = {
  readonly [P in keyof T]: T[P]
}

const originMapped: MappedType<Point> = {
  x: 0,
  y: 0,
}

//// ///// //// ////
// # Modifiers

export type PointOptional = {
  readonly x: number
  y?: number
}

export type Mapped<T> = {
  +readonly [P in keyof T]-?: T[P]
}

export type Result = Mapped<PointOptional>

type MappingObj = {
  [P in string]: string
}

const obj: MappingObj = {
  food: "",
}
