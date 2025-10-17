
class User {
    #userName = "Diya Dhamanda";
    #password = 136494;

    constructor() {
        this.#userName;
        this.#password;
    }

    #isAuth(name, password) {
        if (this.#userName == name) {
            if (this.#password == password) {
                return true;
            }
            else {
                console.log("Wrong Password..");
                return false;
            }
        }
        else {
            console.log("Wrong User Name...");
            return false;
        }
    }
    login(name, password) {
        if (this.#isAuth(name, password)) {
            console.log(`Login Successfully, Welcome User ${this.#userName}`);
        }
        else {
            console.log("Please enter valid data.");
        }
    }
}

let user = new User();
user.login("Diya Dhamanda",136494);
