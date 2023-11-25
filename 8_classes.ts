// class

class Person {
    public name: string;
    public age: number;
    private readonly nic:string;

    constructor(name: string, age: number, nic: string) {
        this.name = name
        this.age = age
        this.nic = nic
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    }

    getNic(): string {
        return this.nic;
    }
}

const john = new Person("John", 32, "123456789V");
john.sayHello();

john.name = "John Doe";
//john.nic = "123456789V"; //error because of readonly
john.sayHello();

console.log(john.name);
//console.log(john.nic); //error because of private
console.log(john.age);
console.log(john.getNic())