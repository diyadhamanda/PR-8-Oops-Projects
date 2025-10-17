class Person{
    constructor(name,age,adress,bgroup){
        this.name = name,
        this.age = age,
        this.adress = adress,
        this.bgroup = bgroup
    }

display(){
console.log("Hello Javascript Developer");
console.log(` Name is ${this.name}`);
console.log(` Age is ${this.age}`);
console.log(` Address is ${this.adress}`);
console.log(` Blood Group is ${this.bgroup}`);

}
}

let p = new Person("Pooja" , 31 , "Pardi" , 'O+');
p.display();

let p1 = new Person("Diya" , 21 , "Navsari", 'B+');
p1.display();




