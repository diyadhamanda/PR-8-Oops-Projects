
class A {
    printMessage() {
        console.log("Hello from Alpa.");
    }
}

class B extends A {
    printMessage() {
        console.log("Hello from Beta.");
    }
}

class C extends A {
    printMessage() {
        console.log("Hello from Gama.");
    }
}

let b = new B();
b.printMessage();


let c = new C();
c.printMessage();