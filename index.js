// QUESTION 1
// Difference between “ == “ and “ === “ operators.

// double equals or != checks only the values and not the data type
// double equals or !== checks both the values and not the data type

// console.log(2 == 2); //true
// console.log(2 === 2); //true

// console.log(2 == '2'); //true
// console.log(2 === '2'); //false

// console.log('jai' == '2') //false

// console.log('jai' !== '2') //true
// console.log(3 != '3') //false

// QUESTION 2
// What is the spread operator?

// Spread syntax (...) allows an iterable, such as an array or string, to be expanded in places where zero or more
// arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax
// enumerates the properties of an object and adds the key-value pairs to the object being created.

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax
//  "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single
//   element

// QUESTION 3
// What are the differences between var, let and const?

// let - 1. we can declare the  variable name in one line and initialize it on another line or in the same line
// 2. two variables with same name aren't possible with let
// 3. we can reassign/update the values of the variable which have already been initialized
// 4. let it block scoped
// 5.let doestn't supports hoisting

// const - 1. we can declare the  variable name in one line and initialize it on another line or in the same line
// 2. two variables with same name aren't possible with let
// 3. we can'nt reassign/update the values of the variable which have already been initialized
// 4. let it block scoped
// 5.let doestn't supports hoisting

// var - 1. we can declare the  variable name in one line and initialize it on another line or in the same line
// 2. two variables with same name possible with var
// 3. we can reassign/update the values of the variable which have already been initialized
// 4. let it global scoped
// 5.let supports hoisting

// Question 4
// What is execution context

// The first execution context is created when the JavaScript engines run your code.The JavaScript engine creates a
// new execution context before any code is executed, and this new execution context is called global execution context.

// Global execution context – This execution context is created by default by the JavaScript engine.
// Function execution context – This execution context is created whenever a function is executed.
// Eval execution context – This execution context is created inside an eval function.

// Question 5
// What is creation phase and execution phase?

// Creation –  Inside this phase, the global object and the this keyword are created. Memory is allocated for the variables
// and functions created. You can see that our variables hold the value of “undefined.”

// Execution  –  Inside this phase, the execution of the code starts. In our example, we assigned values to our
//  variables and defined our function.

// Question 5
// What are closures? Give an example of closure

// // Closeures -- its not something that we create manually or explicitly. It happens automatically in certain
// // situations which we need to analyze/ realize ourselves.
// //closures makes a function remember all the variable that exixted in the function birth place initially.
// //Any function always have access to the variable environment of the execution context in which the function was created.

// const ticketBooking = function(){
//     let passengerCount = 0 ;

//     return function(){
//         // let passengerCount = 0 ;// this will only for once and be dwarf
//         passengerCount++;
//         console.log(`The count of the passenger are ${passengerCount}`);
//     }
// }

// let bookie = ticketBooking();
// console.log(bookie);
// console.dir(bookie);//will show that clouser is forming or not

// bookie();
// bookie();
// bookie();
