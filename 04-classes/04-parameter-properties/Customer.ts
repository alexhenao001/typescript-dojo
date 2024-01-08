class Customer {


    constructor(private _firstName: string, private _lastName: string) {
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

console.log("myCustomer.firstName: " + myCustomer2.firstName);
console.log("myCustomer.lastName: " + myCustomer2.lastName);