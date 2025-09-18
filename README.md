# Typescript Essential Training notes

To install typescript:
npm install -g typescript

A typescript project has a tsconfig.json file.
i.e.
{
"compilerOptions": {
"outDir": "build", // build js here
"target": "esnext", // ECMAScript version, ECMAScript is a standard for scripting languages including JavaScript
"noEmit": true, // Transpiler will not emit JavaScript
"allowJs": true, // Allow Javascript in the folders
"checkJs": true // Check the Javascript
},
"include": ["src/**/*"]
}

- The majority of javascript libraries will have typescript support, especially if imported from npm. For the libraries that don't have typescript support, you can import type definitons from npm @types, which is the "Definitely Typed" library.

## Basic typescript syntax

let x = 5; // type inference, we are inferring x is a number
let y: number // defines y as a number
let z: boolean
let a: Date
let b: string[]

let c: any // TypeScript understands this variable can hold any value of any type

b = "hello" as any // Now we have casted b as an any, not a good idea

// Avoid using the 'any' type if possible

## Interfaces

// Interfaces look like a JS Class
// Interfaces exist to provide type information to TS at compile time
interface Contact extends Address {
id: number;
name: string;
birthDate?: Date;
contact: (c:string)=>string;
}

interface Address {
line1: string;
line2: string;
province: string;
city: string;
postalCode: string;
}

## Type Alias

type ContactName = string;
type contactBirthDate = Date | number | string; // This type can be a date, number or string
type AddressableContact = Contact & Address // Assume Contact does not extend Address.
// This type now combines Contact & Address
type ContactStatus = "active" | "inactive" | "string"; // Like an enum

## Enums

enum ContactStatus {
Active = "active",
Inactive = "inactive",
New = "new"
}

let status2: ContactStatus;
status2 = ContactStatus.New;

## Arrow Function

Arrow function definition of a function

(source:Contact)=>Contact

## Generics
