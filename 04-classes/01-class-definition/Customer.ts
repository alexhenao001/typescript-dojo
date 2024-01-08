class Customer {

    firstName: string;
    lastName: string;
}

//create an instance

let myCustomer = new Customer();

myCustomer.firstName = "Alex";
myCustomer.lastName = "Henao";

console.log("myCustomer.firstName: " + myCustomer.firstName);
console.log("myCustomer.lastName: " + myCustomer.lastName);