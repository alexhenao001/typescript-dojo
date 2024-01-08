class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

//create an instance

let myCustomer = new Customer("Alex", "Henao");

myCustomer.firstName = "Alex";
myCustomer.lastName = "Henao";

console.log("myCustomer.firstName: " + myCustomer.firstName);
console.log("myCustomer.lastName: " + myCustomer.lastName);