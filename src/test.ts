// Tuple

let x: [number, string]

// Enum

enum Color {
  Red,
  Blue,
  Green
}

let c: Color = Color.Red
let d: Color = Color.Blue

// never

let testC: never

// Union Types 

let val: string | number

// Interface

// interface IPerson {
//   firstName: string,
//   lastName: string,
//   sayHi: () => string
// }


// const customer: IPerson = {
//   firstName: "Tom",
//   lastName: "Hanks",
//   sayHi: (): string => { return "Hi there" }
// }

// Interface and Array

interface nameList {
  [index: number]: string
}

interface typesList {
  [index: string | number | symbol]: {
    age: number,
    firstName: string,
    lastName: string,
    address: string,
    parents: {
      name: string,
    }
  }
}

// Interface extends

type languageList = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'zh-TW'

interface IPerson {
  name: string,
  sex: boolean
}

interface IPersionTalent {
  language: languageList,
  skill: string,
}

interface Musician extends IPerson {
  instrument: string
}

let drummer: Musician = {
  name: "Dr. John",
  sex: true,
  instrument: 'Drums'
}

interface Agent extends IPerson, IPersionTalent {
  name: 'Putin',
  sex: true,
  language: 'es',
  skill: 'shooting'
}

// nameSpace

namespace China {
  export interface IMap {

  }
}

// Generics


function identity<T>(arg: T): T {
  return arg;
}

const foo = <T>(arg: T): T => {
  return arg
}

