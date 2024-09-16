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
### Additional features
The intention is to add OOP, to be more specific:
- [x] Class keyword
- [x] Class initialization
- [x] Inheritance
- [x] Polymorphism
- [x] Encapsulation

### Additional syntax
```js
// Class examle
class A {
    let a = 5;

    let method = fn () {
        return 3;
    };
};
let a = new A();
a.a; // => 5
a.method(); // => 3

// Inheritance
class B : A {
    let b = 6;

    let method2 = fn () {
        return 4;
    };
};
let b = B();
b.a; // => 5
b.b; // => 6
b.method2(); // => 4

// Polymorphism
class C : A {
    let method = fn() { return 7 };
};
let c = C();
c.method() // => 7

// Half encapsulation
class D {
    private let d;

    let getD = fn() {
        return this.d;
    };
};
let d = new D();
d.d; // error
d.getD(); // => 5
```

Unfortunately assign operation is not supported by the language, I could add it...
but I feel educated enough, time to move forward.

### Sandbox
The program will be available as small website, which will execute the code.

