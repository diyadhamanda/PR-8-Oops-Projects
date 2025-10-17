class User {
    constructor(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role || 'customer';
        this.isActive = true;
        this.createdAt = new Date();
    }

    deactivate() {
        this.isActive = false;
        console.log(`${this.name} is deactivated`);
    }

    activate() {
        this.isActive = true;
        console.log(`${this.name} is activated`);
    }

    getdata() {
        console.log(`Your Name is ${this.name}`);
        console.log(`Your Email Id is ${this.email}`);
        console.log(`Your Role is ${this.role}`);
    }
};

let admin = new User('Diya Dhamanda', 'dhamanda@.com', 'admin');
let customer = new User('Jane Smith', 'jane@email.com');

admin.getdata();
customer.deactivate();
