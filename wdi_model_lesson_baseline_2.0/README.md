
---
course: WDI
type: lesson
duration-in-hours: 1.10 
author: Gerry Mathe
author-city: LDN
competencies: javascript, objects
---

![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Functions

## Objectives

- Explain what functions are in Javascript
- Define and call functions with argument dependent return values
- Define and call functions defined in terms of other functions
- Define and call functions with optional arguments
- Define and call functions with a variable number of arguments
- Explain what is Scope?
- Compare global/local scope?
- Describe the `this` keyword and how does scope affect it

## Lesson Guide

#### Student Preparation

N/A

#### Instructor Preparation

N/A

#### Lesson Flow


| **Section** | **Timing** |
|-------------|------------|
| Writing and calling functions | 15 mins |           
| Arguments | 10 mins |
| What is scope | 20 mins
| `this`| 15 mins
| Closure | 10 mins


## Lesson


### Writing and calling functions

In mathematics, a function maps one or more arguments to a single value.
JavaScript isn't that strict.

```javascript
function five() {
  return 5;
};

function debugLog(msg){
  console.log(msg)
}

```

What can we do with functions?

Functions provide parts of the building blocks of programs, abstraction and encapsulation.

Defining a function does not execute it. 

Defining the function simply names the function and specifies what to do when the function is called. 

You call a function by using parenthesis, `()`

```
var hello = function(){console.log("hello")}

hello()
```

Functions must be in scope when they are called, but the function declaration can be **hoisted** (appear below the call in the code), as in this example:

```
console.log(square(5));
function square(n) { return n*n }
=> 25
```

The **scope of a function is the function in which it is declared**, or the entire program if it is declared at the top level.

**Note**: This works only when defining the function using the above syntax (i.e. function funcName(){}). The code below will not work.

```
console.log(square(5));
square = function (n) {
  return n * n;
}
```

Uncaught ReferenceError: square is not defined.

There are other ways to call functions.


### Arguments

In JavaScript, functions can be defined as taking zero or more arguments.

```javascript
function zero() {
  return 0;
};

function one(arg){
  return arg;
}

function three(arg1, arg2, arg3){
  return arg2;
}

```

What happens when we call a function with the wrong number of arguments?

How would you create a function with an optional argument?

JavaScript provides ways to handle arguments not in the function definition:

```javascript
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
```

Could you do something similar using a single argument?

### What is scope?

The JavaScript language has a few concepts of "scope". When talking about scope, you will hear terminology like: 

- `scope`
- `closure`
- `this`
- `namespace`
- `function scope`
- `global scope`
- `lexical scope`
- `public/private scope`

In JavaScript, scope refers to the current context of your code. Scopes can be _globally_ or _locally_ defined. 

#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. If we declare a variable, it's defined globally:

```
var name = 'Todd';
```

Global scope is your best friend and your worst nightmare, learning to control your scopes is easy and in doing so, you''ll run into no issues with global scope problems (usually namespace clashes). You'll often hear people saying "Global Scope is _bad_", but never really justifying as to _why_. Global scope isn't bad, you need it to create Modules/APIs that are accessible across scopes, you must use it to your advantage and not cause issues.

#### Local scope

A local scope refers to any scope defined past the global scope. There is typically one global scope, and **each function defined has its own (nested) local scope**. Any function defined within another function has a local scope which is linked to the outer function.

#### Function scope

#### Can't get inside from outside!

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function.

#### Accessing variables in the same scope

However, a function can access all variables and functions defined inside the scope in which it is defined. 

In other words, a function defined in the global scope can access all variables defined in the global scope. 

```
// The following variables are defined in the global scope
var num1 = 20;
var num2 = 3;

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); 
=> 60
```

#### Nested function scope

A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access. 

```
var name = "Alex";

function getScore () {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + " scored " + (num1 + num2);
  }
  
  return add();
}

getScore(); 
=> "Alex scored 5"
```

<br>

### this

A function's `this` keyword behaves a little differently in JavaScript compared to other languages. 

#### Global context

In the global execution context (outside of any function), this refers to the global object:

```
this === window
=> true

this.document === document
=> true

this.a = 37;
=> 37
console.log(window.a);
=> 37
```

#### Function context 

Inside a function, the value of `this` depends on how the function is called.

```
function f1(){
  return this;
}

f1() === window;
=> true
```

In this case, the value of this is not set by the call.

```
function f2(){
  return this;
}

f2() === undefined;
=> true
```

#### As an object method

When a function is called as a method of an object, its `this` is set to the object the method is called on.

```
var bob = {name: "Bob"}
bob.speak = function() {
  return this.name;
}

bob.speak();
=> "Bob"
```





### Closure

As a web developer you will use your own functions everytime , with some practice you will see that they make code more readable and re-usable. Do not worry if the logic of writing your code in functions seems a bit confusing, with some practice and code getting more complex, you will quickly understand the benefit of using functions


### Additional Resources

- https://en.wikipedia.org/wiki/Function_(mathematics)
- https://en.wikipedia.org/wiki/Subroutine
- http://en.wikipedia.org/wiki/Variable_shadowing
 