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

<br><br>
## Typescript: "let" keyword
* Use **"let"** keyword for variable declarations instead of traditional JavaScript "var"
* The Javascript **"var"** has issues with scoping, capturing, shadowing, etc.
* The Typescript **"let"** keyword will eliminate the mentioned issues
<br><br>
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
<br><br>
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



