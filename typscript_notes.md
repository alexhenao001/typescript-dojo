# Typescript Notes

In this note guide, there will be some basic notes on Typsecript

## Basic Types

| Type        | Description |
| :-------------:| :-------------| 
| boolean     | true/false values|
| number      | Supports integer and floating point numbers |
| string  | Text Data. Enclosed in single or double quotes |
| any  | Supports "any" datatype assignment |
| Others...  | see details at www.typescript.org |


## Typescript: "let" keyword
* Use **"let"** keyword for variable declarations instead of traditional JavaScript "var"
* The Javascript **"var"** has issues with scoping, capturing, shadowing, etc.
* The Typescript **"let"** keyword will eliminate the mentioned issues

## TypeScript is Strongly Typed
### Examples
```javascript
let found: boolean = true;
  
let grade: number = 88.6;
  
let firstName: string = "Alex"
  
let lastName: string = 'Henao'

// The following assignments will generate compilation errors...

found = 0;
grade = "A";
firstName = false;
lastname = 2999
```

## Type: any
* Use the any type for generics
* Use also for arrays or lists with different data types
* Be careful as you will LOSE **type-saftey**
### Example
```javascript
let myData: any = 50.0;

// the above variable can be assigned different values without compilation error
myData = false;
myData = 'Alex';
myData = 20;
```
## Displaying Output
#### File: sample-type.ts
```javascript
let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Alex"
let lastName: string = 'Henao"

console.log(found);
console.log("The grade is " + grade);
console.log("Hi "  + firstName + " " + lastName);
```

## Template Strings
* Reduce clunky string concatenations with template strings

``` javascript
let firstName: string = "Alex";
let lastName: string = "Henao";

console.log(`Hi ${firstName} ${lastName}`);  
```

## Compiler Flag
* The get/set accessors is only supported in ES5 and higher
* Must set a compiler flag in order to compile the code
* See Customer.ts for an example

```javascript
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
```

### TSC command with ES5 support
```
tsc --target ES5 --noEmitOnError Customer.ts
```

## Create Config file for compilation
* Generate a tsconfig.json file with following command
* Uncomment the configuration properties that are to be updated

### Generate a configuration file for compilation
```
tsc --init
```



