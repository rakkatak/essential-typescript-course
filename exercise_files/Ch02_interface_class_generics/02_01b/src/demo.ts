// Basic typescript syntax

let x = 5; // type inference, we are inferring x is a number
let y: number // defines y as a number
let z: boolean
let a: Date
let b: string[]

let c: any // TypeScript understands this variable can hold any value of any type

b = "hello" as any // Now we have casted b as an any, not a good idea

// Avoid using the 'any' type if possible