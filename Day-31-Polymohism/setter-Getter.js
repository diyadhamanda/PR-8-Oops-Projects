class Person {
    constructor() {
        this.firstname;
    }

    set firstName(name) {
        this.firstname = name;
    }

    get firstName() {
        return this.firstname;
    }
}

let person = new Person();
person.firstName = "Diya";
console.log(`First Name : ${person.firstName}`);