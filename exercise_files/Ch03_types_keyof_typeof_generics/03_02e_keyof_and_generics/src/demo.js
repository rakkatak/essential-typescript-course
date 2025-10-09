let primaryContact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
};
const field = "status";
function getValue(source, propertyName) {
    return source[propertyName];
}
const value = getValue({ min: 1, max: 34 }, "max");
console.log("value", value);
