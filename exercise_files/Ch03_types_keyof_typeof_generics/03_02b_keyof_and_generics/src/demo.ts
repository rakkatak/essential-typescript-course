type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
    birthDate: new Date("1975-10-13T22:34:02.000Z")
}

type ContactFields = keyof Contact;

const contactBD: ContactFields = "birthDate";

function getValue<T>(source: T, propertyName: keyof T) {
    return source[propertyName];
}

const myValue: ContactBirthDate = getValue(primaryContact, contactBD);

console.log("contact birthday: ", myValue);