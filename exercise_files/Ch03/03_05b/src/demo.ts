let x: Record<string, string | number> = { name: "Wruce Bayne" };
x.id = 1234;



////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

function searchContacts(contacts: Contact[], query: Record<keyof Contact, Query>) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

let myContacts: Contact[] = [
    {id: 122,
        name: "anita",
        status: "active",
        address: {
            street: "5 clinton",
            province: "on",
            postalCode: "m6m6m6"
        }
    },
    {id: 124,
        name: "Carol Weaver",
        status: "active",
        address: {
            street: "3 manning",
            province: "on",
            postalCode: "l3l3l3"
        }
    }

]

const filteredContacts = searchContacts(
    myContacts,
    {
        id: { matches: (id) => id === 122 },
        name: { matches: (name) => name === "Carol Weaver" },
        status: {matches: (status) => false},
        address: {matches: (address) => false}
    }

);


    console.log('fiteredContacts', filteredContacts);