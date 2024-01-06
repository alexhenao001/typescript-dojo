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
* Use **"let"** keyword for variable declarations instead of traditional JavaScript "var" <br><br>
* The Javascript **"var"** has issues with scoping, capturing, shadowing, etc. <br><br>
* The Typescript **"let"** keyword will eliminate the mentioned issues <br><br>
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


