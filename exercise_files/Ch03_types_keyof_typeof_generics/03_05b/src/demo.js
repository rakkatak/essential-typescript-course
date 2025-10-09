var x = { name: "Wruce Bayne" };
x.id = 1234;
function searchContacts(contacts, query) {
    return contacts.filter(function (contact) {
        for (var _i = 0, _a = Object.keys(contact); _i < _a.length; _i++) {
            var property = _a[_i];
            // get the query object for this property
            var propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }
        return false;
    });
}
var myContacts = [
    { id: 122,
        name: "anita",
        status: "active",
        address: {
            street: "5 clinton",
            province: "on",
            postalCode: "m6m6m6"
        }
    },
    { id: 124,
        name: "Carol Weaver",
        status: "active",
        address: {
            street: "3 manning",
            province: "on",
            postalCode: "l3l3l3"
        }
    }
];
var filteredContacts = searchContacts(myContacts, {
    id: { matches: function (id) { return id === 122; } },
    name: { matches: function (name) { return name === "Carol Weaver"; } },
    status: { matches: function (status) { return false; } },
    address: { matches: function (address) { return false; } }
});
console.log('fiteredContacts', filteredContacts);
