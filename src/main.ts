// src/sum.ts
type sumType = (a: number, b: number) => number

const sum: sumType = (a, b) => a + b


type path = 'a.b.c'

type Split<T extends string> = T extends `${infer A}.${infer B}` ? A | Split<B> : T

type test = Split<path>

export {
  sum
}
