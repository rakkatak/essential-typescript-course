interface Contact {
    id: number;
    name: string;
    clone: (c: string) => string

}

function clone(source: Contact, func: ()=>void ): Contact {
    return Object.apply({}, source);
}

const a: Contact = {
    id: 1,
    name: "anita",
    clone: function (c: string): string {
        return c;
    }
}

const b = clone(a, ()=>{return a});