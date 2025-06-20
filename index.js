console.log("ee sala cup namduu")


// var
// function print() {
//     var a = 10;
//     console.log(a);
// }
// print();
// var a = 10;
// var a = 30;
// console.log(a); // redeclaration is allowed in var, reassignment is also possible in var

// in var: redeclaration, reassignment both are allowed and not a blocked scoped

//***********************************************

//let: often use

// let a = 10;
// console.log(a);
// declaration is not allowed in let but value can be changed
// let a = 10;
// a = 30;
// console.log(a); // reassignment is allowed in let
// let a = 10;
// let a = 30;
// console.log(a); // SyntaxError: Identifier 'a' has already been declared

//in let, only reassignment is allowed but not redeclaration, blocked scoped

//***********************************************

//const

// const a = 10;
// console.log(a);

// const a = 20; // redeclaration is not allwoed

// a = 20;
// console.log(a); // reassignment also not allowed in const

// in const, neither redeclaration nor reassignment is allowed

//**********************************************

// dataTypes

// let marks = 10;
// //console.log(marks); // number
// marks = "shivangi"
// console.log(marks); // string
// // marks = null
// // console.log(marks);

// let mark;
// console.log(mark);

// console.log(typeof (mark));

//*************************************************

// Arithmetic Operator

// let a = 10;
// let b = 2;
// console.log(a + b);
// console.log(a - b);
// console.log(a / b);
// console.log(a * b);
// console.log(a ** b);
// console.log(++a);
// console.log(a++);

// assignment Operator

//console.log(a += 3);

// comparison operator

//console.log(a >= b);

//console.log('5' == 5); // loose equality: only compares value not data type, o/t: true
//console.log('5' === 5); // strict equality: compares both value and data type, o/t: false

// Ternary Operator

// let age = 19;
// let status1 = age > 18 ? "You can vote" : "You can't vote";
// console.log(status1)

// logical operator

//let ans = (true && true && false);
//let ans = (true || true || false);
// let ans = !(true);
// console.log(ans);

// console.log(false || "shivangi");
// console.log(false || undefined);
// console.log(false || 7 || 11 || 89);

//************************************************** */

// bitwise operator

// console.log(2 | 5);
// console.log(2 & 5);
// console.log(~(0));

//******************************* */
// shifting operator

//left shift: multiply by 2 that number of times(element<<number of times)
//right shift: divided by 2 that number of times(element >> number of times)

// console.log(5 << 1);
// console.log(10 >> 1);
// console.log(5 << 2);

// ****************************************
// conditional loop

// let number = 5;
// let age = 20;

// if (number == 1) {
//     console.log('a');
// }
// else if (number == 2) {
//     console.log('b');

// }
// else if (number == 3) {
//     console.log('c');
// }
// else if (number == 4) {
//     if (age > 18) {
//         console.log("you caan vote");
//     }
//     console.log('d');

// }
// else {
//     console.log("not a correct number typed");
// }

// switch (number) {
//     case 1: console.log("ee");
//         break;
//     case 2: console.log("sala");
//         break;
//     case 3: console.log("cup");
//         break;
//     case 4: console.log("namde");
//         break;
//     default:
//         console.log("RCB");
// }

//********************************* */

// loops

// let num;
// for (num = 0; num < 10; num++) {
//     console.log("shivangi");
// }

//let num = 0;
// while (num < 5) {
//     console.log("shivangi");
//     num++;
// }

// do {
//     console.log("shivangi");
//num++;
// } while (num > 0);

// break: when break hits, we just get out of the entire loop
// continue: it just skips the current iteration and move on to the next iteration

// for (let i = 1; i <= 5; i++) {
//     if (i == 3)
//         break;
//     else
//         console.log(i);
// }
// for (let j = 1; j <= 5; j++) {
//     if (j == 3)
//         continue;
//     else
//         console.log(j);
// }

//************************************** */

// string

// let firstName = "shivangi";
// let lastName = 'goutam';
// console.log(firstName + lastName);

// back ticks is used when you want to print the things in different lines

// let name = `shivangi
//     goutam`;
// console.log(name);

// let firstName = new String("shivangi goutam")
// console.log(firstName);

// let op1 = 'english ';
// let op2 = 'hindi ';

// let ans = op1 + op2;
// console.log(ans);

// let ans = `${op1}${op2}`;  // $: it gives the value of the variable inside the string
// console.log(ans);

// console.log(op1.length);
// console.log(op1.toUpperCase());

// console.log(op1.substring(3));
// console.log(op2.substring(1, 3));   // .substring(start, end); but end index is excluded

// let sentence = "hello this is shivangi goutam";
// let words = sentence.split(' ');

// console.log(words);

// let sentence = "hello // this // is // shivangi";
// let words = sentence.split('//');
// console.log(words);

// console.log(words.join(','));
// console.log(words.join('-'));

//************************************** */
// FUNCTIONS

// function printNumbers() {
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }
// printNumbers();

// function printSum(a, b) { //  here's the passing is known as parameter
//     console.log(a + b);
// }
// printSum(3, 2); // here's the psssing is known as argument

// function getMyName(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     return fullName;
//     //unreachable statement : the any statement after return is unreachable

// }
// let ans = getMyName("shivangi", "goutam");
// console.log(ans);

// let getMultilication = function (a, b) {
//     return (a * b);
// }
// let ans = getMultilication(2, 10);
// console.log(ans);

//*************************************** */
// object

// let obj = {
//     name: "shivangi",
//     age: 20,
//     weight: "60kg",
//     height: "5ft 7in",
//     greet: function () {
//         console.log("good morning");
//     }
// };

// console.log(obj);
// obj.greet();

// *******************************************
// array

//let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[4]);
//arr.push("shivangi"); // push the element at rightmost side
// console.log(arr);
// arr.pop();            // pop the element from right most side
// console.log(arr);
// arr.shift();          // remove the element from the leftmost side
// console.log(arr);
// arr.unshift("monu");   // add the element to the left most side
// console.log(arr);

// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// arr.push(50);

// console.log(arr.slice(2, 4));// return the array from index 2 to 4: slice(start index, end index): but end index is excluded

// console.log(arr);

// arr.splice(0, 5, 'monu'); // splice(1: index; 5: number of items to be removed; monu:insert it instead)
// console.log(arr);

//********************************** */
// MAP : Used to transform each element in an array and returns A new array with the same length as the original.

//let arr = [10, 20, 30];

// let ansArr = arr.map((number) => {
//     return number * number;
// })
// console.log(ansArr);

// let ansArr = arr.map((number, index) => {
//     console.log(number);
//     console.log(index);
// })

//******************************** */
// FILTER: Used to filter out elements that do not match a condition and returns A new array with fewer or equal number of elements.
// let arr = [1, 2, 3, 4, 5, 6];

// let ansArr = arr.filter((number) => {
//     if (number % 2 == 0)   // instead of if else we can directly use "return number%2==0" will give the same answer as of now
//         return true;
//     else
//         return false;
// })
// console.log(ansArr);

// let arr = [1, 2, "monu", "goutam", 5];

// let ansArr = arr.filter((value) => {
//     if (typeof value == "string")
//         return true;
//     else
//         return false;
// });

// console.log(ansArr);

//*************************************** */
// Reduce: takes two parameter, one is acumulator and other one is current, if we have initialized the accumulator, then current will take the first array elemet as its value and if we don't initialie the accumulator it will take first array element as value and therefore current has to take the secind element of an array as it value

// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acumulator, current) => {
//     return acumulator + current;
// }, 0);
// console.log(ans);

// let arr = [8, 1, 5, 6, 9, 7, 4, 3, 2];
// arr.sort();
// console.log(arr);

// console.log(arr.indexOf(9));

//************************** */
// FIND: it simply gives the first element that matches the condition, if no element matches the condition then it returns -1

// const arr = [1, 2, 3, 4, 5, 6, 7];
// let ans = arr.find((number) => number > 5)
// console.log(ans); // output: 6

//***************************************** */
// forEach

//let arr = [10, 20, 30];

// arr.forEach((value, index) => {
//     console.log("Number:", value, "Index:", index);
// })

// for (let value of arr) {
//     console.log(arr);
// }

// let firstName = "shivangi";
// for (let value of firstName) {
//     console.log(value);
// }

// let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
//     let len = arr.length;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let answer = getSum(arr);
// console.log(answer);

//********************************************** */

// HOISING: Hoisting is a JavaScript behavior where variable and function declarations
// are moved to the top of their containing scope (either the global scope or a function scope)
// during the compilation phase — before the code is executed. (let aur const keyword s bnaya hua varibale hoist ni ho pata)

// firstName("shivangi");

// function firstName(name) {
//     console.log(name); // the function call is before the function declaration and function definition but still it is giving the corrcet output, and this behaviour of javascript is known as HOISTING.
// }

// function call inside another function

// function greetMe(greeting, fullName) {
//     console.log("hello", fullName);
//     greeting();
// }

// function greeting() {
//     console.log("greeting of the day")
// }

// greetMe(greeting, "shivangi");

// const arr = [
//     function (a, b) {
//         return a + b;
//     },
//     function (a, b) {
//         return a - b;
//     },
//     function (a, b) {
//         return a * b;
//     }

// ];
// let first = arr[2];
// let ans = first(10, 5);
// console.log(ans);

//********************************************* */
// VARIABLE SCOPE:

//global scope

// let age = 20;
// console.log(age);

// {
//     console.log(age);

// }
// function sayHello() {
//     console.log("hii", age);
// }
// sayHello();

// for (let i = 0; i < 2; i++) {
//     console.log(age);
// }


// function scoping

// function sayHello() {
//     var name = "shivangi";
//     console.log(name);
// }
// sayHello();

// console.log(name);  // not running beacuse name is declared inside the function


// Block Scope: we know variable is not block scoped

// {
//     var height = 172;
// }
// console.log(height); // we can easily access this variable outside the block because var is not block scoped
//but we know let and const is blocked scoped, therefore if we do the same thing with the let or const, it would not give me the answer

//************************************** */
// Tempral dead zone

// console.log(marks);
// console.log("shivangi");
// console.log("goutam");  // we cannot access 492,493,494: and this is known as temporal dead zone

// let marks = 90;
// console.log(marks)

//******************************** */
// classes

// # is used to mark the private property in the class, if there is no sign it is considered as public
// jo jisme v hm private use krte h usko sirf class ke andr use kr skte h, bhr use ni kr skte

// class Human {
//     //properties
//     #age = 20; // private
//     height = "5'6" // public
//     weight = "60kg"

//     walking() {
//         console.log("I am walking", this.#age); // this .#age is private property, we can access it only inside the class, so the walking function will give the answer of age also
//     }
//     running() {
//         console.log("I am running");
//     }

// }
// let obj = new Human();
// //console.log(obj.age); // runs well until is no private sign, if we use private sign it will not run


// //console.log(obj.#age);
// obj.walking();

// if want to use private property outside the class, we can use getter and setter method
// getter: helps to fetch the value of the private property outside the class
// setter: it sets or modify the value


// class Human {
//     //properties
//     age = 20; // private
//     height = "5'6" // public
//     #weight = "60kg"

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.height = newHeight;
//         this.#weight = newWeight;
//     }

//     walking() {
//         console.log("I am walking", this.#weight); // this .#age is private property, we can access it only inside the class, so the walking function will give the answer of age also
//     }
//     running() {
//         console.log("I am running");
//     }

//     get fetchWeight() {
//         return this.#weight;
//     }
//     set modifyage(val) {
//         return this.#weight = val;
//     }

// }

// let obj = new Human(21, 170, 50);
// console.log(obj.fetchWeight);



//******************************** */
// // default parameter

// function sayName(name = "shivangi") {
//     console.log("my name is", name);
// }

// sayName();

// function solve(value = { ht: 170, wt: 60 }) {
//     console.log("it will also print object", value);
// }
// solve();


// function getAge() {
//     return 20;
// }

// function utility(name = "shivangi", age = getAge()) {
//     console.log("so name and age are", name, "", age)
// }

// utility();


// MATHS

// console.log(Math.PI);
// console.log(Math.max(60, 20, 10, 200));
// console.log(Math.min(60, 20, 10, 200));
// console.log(Math.round(1.5));
// console.log(Math.floor(1.9));
// console.log(Math.ceil(1.1));
// console.log(Math.abs(-1));
// console.log(Math.random());
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 10));


// let curr = new Date();
// console.log(curr);

// let curr = new Date('Nov 20 2003');
// console.log(curr);

// console.log(curr.getDay());

//****************************** */
//Object is Dynamic in Nature: becuase we can change any value of key which is present in the object at any time

// OBJECT CLONING: three types

// spread operator : let dest = {...src}
// assign operator: let dest = Object.assign({}, src)
// iterator: uses for in loop

// let src = {
//     ht: 178,
//     wt: 60,
//     age: 20,

// };

// // let dest = { ...src }; : spread operator
// //let dest = Object.assign({}, src);   : assign operator


// let dest = {};

// // iterator
// for (let key in src) {
//     let newKey = key;
//     let newValue = src[key];
//     // insert new key and value in dest and create a clone
//     dest[newKey] = newValue;
// }



// console.log("src:", src);
// console.log("dest:", dest);



//************************************* */

// error handling:
//error: error means thats interupt or impact the normal flow of code
// compile time error: error that comes during the parse time. eg syntax error

//console.log(x;             // syntax error

// run time error: error that comes during the execution of the code. eg reference error

//console.log(x); //    run time error because x is using without its declaration

// handling of error using try and catch block

// try: isme hum wo code likhte h jisme error aa skta h
// catch: isme hm wo likhte hai ki jo v error try me aaya hm usko kaise handle krna chahte h like retry logic, fallback mechanism, logging, custom error
// agr try me error ni aata to catch block skip ho jata wo run ni hota lkin finally block ni hota skip

// try {
//     console.log("try block starts here")
//     console.log(x);   // iss error ke baad try me agr iske niche code h to wo execute ni honge qnki isme error aa gya, ab direct catch block pr move ho jayega
//     console.log("try block ends here"); // this won't run because error in the above line of code

// }
// catch (err) {
//     console.log("this is the catch block to handle the error arising in the try block");
//     console.log("your error is here", err);  // it will print the error which arose in the try block

// }


// // finally block: it runs everytime


// finally {
//     console.log("I will run everytime as I am finally block");
// }


// throw: it uses to generate the custom error

// try {
//     console.log(x); // reference error
// }

// catch (err) {
//     throw new Error("bahi phle x declare to kro, phir print krwana");
// }

