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

## Modules
* Import a class to use it in a driver file

### Use this to import the class class
* Omit file extension
* i.e. - File name: Customer.js

```javascript
import { Customer } from "./Customer";
```

## Inheritance
* Typescript only supports single inheritance
  * You can implement multiple interfaces
* Define common properties and methods in the superclass as in other OOP languages

### File: Shape.ts
```javascript
export class Shape {

    constructor(private _x: number, private _y: number) {
       // get/set accessors
       getInfo() : string {
        return `x=${this._x}, y=${this._y}`;
       }  
    }
}
```
### File: Circle.ts
```javascript
import { Shape } from `./Shape`

export class Circle exends Shape {
    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }

    // get/set accessors

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius`;
    }
}
```


### File: Rectangle.ts
```javascript
import { Shape } from `./Shape`;

export class Rectangle extends Shape {

    constructor(theX: number, theY: number, private _width: number, private _length: number) {
        super(theX, theY);
    }

    // get/set accessors ..
    getInfo(): string {
        return super.getInfo() + `, width=${this._width}, length=${this.length}`;
    }
}
```
### File: Driver.ts
```javascript
import { Shape } from `./Shape`;
import { Circle } from `./Circle`;
import { Rectangle } from `./Rectangl`;

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 3, 7);
console.log(myRectangle.getInfo());
```

## Abstract Class
* Add abstract keyword to a class
* Add abstract keyword to a method

### Abstact class example:

```javascript
export abstract class Shape {

    constructor(private _x: number, private _y: number) {
    }

    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }
    
    abstract calculateArea(): number;
}
```

## Interfaces
* Add the interface keyword
* Implementing classes add implements keyword

### Coach interface
```javascript
export interface Coach {
    getDailyWorkout(): string; 
}
```

### Implementing Class
```javascript
import { Coach } from "./Coach";

export class CricketCoach implements Coach {
    getDailyWorkout(): string {
        return "Practice your spin bowling technique.";
    }
}
```