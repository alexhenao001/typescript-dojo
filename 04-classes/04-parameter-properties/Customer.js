"use strict";
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//create an instance
var myCustomer2 = new Customer("Alex", "Henao");
console.log("myCustomer.firstName: " + myCustomer2.firstName);
console.log("myCustomer.lastName: " + myCustomer2.lastName);
