class Customer {

    private _firstName: string;
    private _lastName: string;

    constructor(_firstName: string, _lastName: string) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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

let myCustomer = new Customer("Alex", "Henao");

console.log("myCustomer.firstName: " + myCustomer.firstName);
console.log("myCustomer.lastName: " + myCustomer.lastName);