const x = "string";
const y = true;
console.log(typeof x); // --> "string"
console.log(typeof y); // --> "boolean"
var myContact = toContact({ id: 12, name: "mouse", birthDate: new Date('2020-12-01'), status: "new" });
console.log("myContact: ", myContact);
function toContact(nameOrContact) {
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            birthDate: nameOrContact.birthDate,
            status: nameOrContact.status
        };
    }
    else {
        return {
            id: 0,
            name: nameOrContact,
            status: "active"
        };
    }
}
