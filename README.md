# Monkey programming language

This is an interpreter written in Golang following ["Writing An Interpreter In Go"](https://interpreterbook.com/).
The purpose for the project was personal education.

## Language Specifications

Monkey have the following set of features:

- C-like syntax
- variable bindings
- integers and booleans
- arithmetic expressions
- built-in functions
- first-class and higher-order functions
- closures
- a string data structure
- an array data structure
- a hash data structure

Monkey has the following syntax:

```js
// Give values names
let age = 1;
let name = "Monkey";
let result = 10 * (20 / 2);

// Arrays
let myArray = [1, 2, 3, 4, 5];
myArray[0]

// Hashes
let thorsten = {"name": "Thorsten", "age": 28};
thorsten["name"] // => "Thorsten"

// Functions
let add = fn(a, b) { return a + b; };
```
