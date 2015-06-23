![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

# JavaScript Objects (Lesson)

## Objectives

- Identify likely objects, attributes, and methods in real-world scenarios
- Write a constructor for a JavaScript object.
- Write a prototype method for a JavaScript object.

--

#### Student Pre-work

- Download the [starter_code](starter_code) files to be ready to code along and work on the You Do examples.
- [Read up](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) on MDN documentation on JavaScript objects.

#### Instructor Pre-work

- Work through the [solutions](solutions) directory to ensure you have the source code and solutions ready for this lesson's code alongs.

--

## Introduction - 10 min

#### Objects Are A Tool for Thought

We create our own objects to organize our thoughts and our code. Objects are a tool for us.  The computer doesn't care.

We represent large, complicated systems with lots of things to keep track of as collections of objects, sometimes grouped into classes, so that we can focus on parts of the larger problem without having to keep everything in our head at once.

We share our code more easily and use other people's code more easily by writing code in terms of objects.  Much as writing our own objects lets us break up a problem into smaller parts, when we use other people's object libraries that lets us apply their solution to a problem when it is better than ours.

#### What is an Object?

This is one of those questions that's impossible to answer.  Ask a dozen working programmers and computer scientists, and you can easily get a dozen answers, all of them right.

For the purposes of this exercise, an object is a thing, represented by a set of data -- its *attributes* -- that has functions associated with it to do certain things -- its *methods*.  

(The term "object" is also used for a JavaScript data structure that other languages call an "associative array" or "dictionary" or "hash." This is correct too.  We're building computer-science-objects from JavaScript-objects.)

## I Do - 5 min

#### Breaking Down a Real-World Scenario

So now we're going to consider a couple of real-world scenarios, like this one:

> A user, browsing on a shopping website, searches for size 12 sneakers,
> and examines several pairs before purchasing one.

We start by identifying the nouns and noun phrases: some are going to be objects.  There are also implicit nouns here: even though it's not mentioned, there's likely to be a shopping cart object.

And when we consider the verbs in the scenario, we will find that some of them are associated with particular nouns, and those are excellent candidates for methods.  Also consider verbs implicit in the scenario.

## You Do - 15 min

With a parter or small group, consider one or two of the following scenarios.  Identify likely objects, attributes, and methods in each scenario.  Remember to consider implicit objects as well as explicit ones.

- Reporting software analyzes the snow removal performance of each snow plow driver in the city.

- A simulation predicts the behavior of the MBTA if ridership increases by 20%.

- A user is required to watch video training sessions as part of a recertification process and answer questions about them.

- A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.

- A user who had reserved a Zipcar arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.

- A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.

- A user searches for her reservation on a hotel website, and changes the arrival date and room type.

## We Do - 10 min

#### Coding an Object

By convention, the way to create an object is with a function called a *constructor*.  This is really a Javascript function like any other, but when you call it in a particular way Javascript does some magic under the hood for you.

By convention, we name the constructor function for the class after the type of object we are creating, also called its class.  Because constructor functions are invoked in a special way, using the `new` keyword, they have access to an implicit variable called `this` that contains the new object.

```javascript
// Example 1 - Defining and invoking a constructor

var Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

var joe = new Person('Joe', 'Donnelly', 34);
```

When trying things like this out, remember that if the only argument you pass to node's `console.log()` function is an object, node will display the whole object nicely for you:

```
> console.log(joe);
{ firstName: 'Joe', lastName: 'Donnelly', age: 34 }
undefined
>
```

## You do - 10 min

Work through the problem in starter_code/exercise-2.js.

## I Do - 10 min

#### Adding Methods to our Madness

Remember that our computer-science definition of objects requires them to have both attributes and methods.  So this is how we add methods:

```javascript
// Example 2

Person.prototype.infoString = function () {
  var firstName = this.firstName || '(no first name)';
  var lastName = this.lastName || '(no last name)';
  var age = this.age || '(no age');

  return firstName + ' ' + lastName + ', ' + age;
};
```

Whoa.  Where did `prototype` come from?

Every object in Javascript has a prototype, connected to the constructor that created it.  If `foo` is an object, and you ask Javascript to invoke the method `foo.doSomething()`, Javascript looks first to see if the object has a property called doSomething that contains a function.  If it does, Javascript invokes that function.  If not, Javascript looks for the prototype object on its constructor and sees if that object has an appropriate method.

#### Useful Idea: Restricting Access to Attributes

Much of the time, attributes can only reasonably contain certain values.  For instance, an attribute containing a person's age in years should never contain a negative number, and will rarely contain a number over 100.  By convention, all changes to attributes are done by *accessor functions*, like this:

```javascript
// Example 3

Person.prototype.setAge = function (newAge) {
  if (newAge < 0) {
    console.error("A person cannot be negative years old!");
  }
  else if (newAge > 150) {
    console.error("People do not generally live to the age of 150");
  }
  else {
    this.age = newAge;
  }
};

Person.prototype.age = function () {
  return this.age;
};
```

## You Do - 15 min

Work through the problems in starter_code/exercise-3.js.

## Conclusion - 5 min

- Review answers to starter_code/exercise-3.js
- Ask students to explain how prototypes relate to constructors
