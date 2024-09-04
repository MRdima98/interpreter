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
myArray[0] // => 1

// Hashes
let thorsten = {"name": "Thorsten", "age": 28};
thorsten["name"] // => "Thorsten"

// Functions
let add = fn(a, b) { return a + b; };
add(1,2); // => 2

// Builtins
len(myArray) // => 5
puts("Hello") // => Hello
first(myArray) // => 1
last(myArray) // => 5
rest(myArray) // => [2, 3, 4, 5]
push(myArray, 6) // => [1, 2, 3, 4, 5, 6]
```

## Next steps
Only reading and understanding some code is fine, but not enough for me, therefore I will be using this as a starting 
point to expand.
# Additional features
The intention is to add OOP, to be more specific:
- class keyword
- class init
- inheritance
- polymorphism
- encapsulation
- private attributes
- public attributes

# Sandbox
The program will be available as small website, which will execute the code.

