let primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active",
    birthDate: new Date("1975-10-13T22:34:02.000Z")
};
const contactBD = "birthDate";
function getValue(source, propertyName) {
    return source[propertyName];
}
const myValue = getValue(primaryContact, contactBD);
console.log("contact birthday: ", myValue);
