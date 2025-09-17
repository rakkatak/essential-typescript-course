// Defining an interface
// Interfaces look like a JS Class 
// Interfaces exist to provide type information to TS at compile time
interface Contact extends Address {
    id: number;
    name: string;
    birthDate?: Date;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    city: string;
    postalCode: string;
}

let primaryContact: Contact = {
    id: 2,
    name: "Anita",
    birthDate: new Date("1975-01-01"),
    line1: "",
    line2: "",
    province: "",
    city: "",
    postalCode: ""
}