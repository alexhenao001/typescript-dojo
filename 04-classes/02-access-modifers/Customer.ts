class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

}

//create an instance

let myCustomer2 = new Customer("Alex", "Henao");

myCustomer2.firstName = "Alex";
myCustomer2.lastName = "Henao";

console.log("myCustomer.firstName: " + myCustomer2.firstName);
console.log("myCustomer.lastName: " + myCustomer2.lastName);