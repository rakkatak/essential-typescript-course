interface Contact {
    id: number;
    name: string;
}

interface CatContact<TExternalId> extends Contact {
    breed: string;
    something: TExternalId;
}

function clone1<T>(source: T): T {
    return Object.apply({}, source);
}
const a: Contact = { id: 123, name: "Homer Simpson" };
const cat: CatContact<string> = {
    breed: "bombay",
    id: 42,
    name: "Piccolo",
    something: "food"
};

const myObj: { startDate: Date } = { startDate: new Date() } ;

const b = clone1(myObj)

function clone2<T, V extends T>(source: T): V {
    return Object.apply({}, source);
}

const myName: string = "anita";
const c = clone2<Contact, CatContact<number>>(a)
