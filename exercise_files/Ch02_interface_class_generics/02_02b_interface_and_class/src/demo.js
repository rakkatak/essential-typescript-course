let primaryContact = {
    id: 2,
    name: "Anita",
    birthDate: new Date("1975-01-01"),
    line1: "",
    line2: "",
    province: "",
    city: "",
    postalCode: ""
};
class MyThing {
    name;
    constructor(name) {
        this.name = name;
        console.log("My name: ", this.name);
    }
    updateName = () => {
        const updatedName = this.name + "!";
        return updatedName;
    };
}
const myCatThing = new MyThing("piccolo");
console.log(myCatThing.updateName());
