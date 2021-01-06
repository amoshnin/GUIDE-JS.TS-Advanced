// constraint: only accepnt objects
function mergeObjects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const person = mergeObjects({ name: "Artem" }, { age: 32 })
const car = mergeObjects({ model: "Ford" }, { yaer: 2000 })

//////////////////////////////////// ////////////////////////////////////

// Generics
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return { value, count: `IN this oobject ${value.length} simbols` }
}

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const per = { name: "artem", age: 25 }
console.log(getObjectValue(per, "age"))

//////////////////////////////////// ////////////////////////////////////

interface ICar {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): ICar {
  const car: Partial<ICar> = {}

  if (model.length > 20) {
    car.model = model
  }

  if (year > 20) {
    car.year = year
  }

  return car as ICar
}

//////////////////////////////////// ////////////////////////////////////

// Inmutable Radonly objects/arrays
const cars: Readonly<Array<string>> = ["Ford", "Audi"]
const ford: Readonly<ICar> = {
  model: "Ford",
  year: 2302,
}
