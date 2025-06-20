//Window: DOM, BOM, JS Core everything comes under window

// DOM: document object model  : interaction with HTML , in this we simply chnages the HTML code, either delete, update or anything else with HTML code
// BOM: browser object model : interaction with browser leaving the html


//DOM

// access element

//document.getElementByID('id name');
// document. getElementsByClassName('class name');
// document. getElementsByTagName('tag name');

// we can do the same thing (access element) using the query selector

// document.querySelector('#idname');  // agr multiple hai to v ye bass 1st wala return krega
// document.querySelector('.classname');  // agr multiple hai to v ye bass 1st wala return krega
// document.querySelector('tagname'); // agr multiple hai to v ye bass 1st wala return krega

// to return multiples : use querySelectorAll in the same way


// document.querySelectorAll('#idname');
// document.querySelectorAll('.classname');
// document.querySelectorAll('tagname');


// UPDATE EXISTING ELEMENT

// INNER HTML: get or set

//get: button.innerHTML;
//set: button.innerHTML = '<p>hello jee</p>'


//outer html
//outerHTML is a property that allows you to get or set the entire HTML of an
//  element including the element itself (not just its inner content).

//HTML
//<div id="box">
//   <p>Hello World</p>
// </div>

// <script>
//   let el = document.getElementById("box");
//   console.log(el.outerHTML);
// </script>

//output
//<div id="box">
//<p>Hello World</p>
//</div>


// innerText: Gets/sets the visible text only (ignores hidden content). Takes CSS into account (like display: none).
//textContent:  Gets/sets all the text inside the element, including hidden elements.Does not consider CSS styles (e.g., display: none, visibility: hidden).
// it also consider the enter key and tab we typed in html and


// Add Element: append child, lets create the child first and understand it with the help of example
// isse hmesa jo text h jo end me add hota hai

// let fHeading = document.createElement('h1');
// fHeading.textContent = "My name is Shivangi";
// let bodyTag = document.querySelector('body');  // isse hm select kr rhe h ki hme text kaha add krna hai, mtlb hme apne text ko body k andr add krna h
// bodyTag.appendChild(fHeading);

// now text ki position decide krna hai ki kaha pr text ko add krna hai

//4 Positions: beforebegin, afterbegin, beforeend, afterend

// class/id name insertAdjacentElement('beforebegin', jo v add krna hai uska name)

// let myDiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');

// newElement.textContent = "how are you";

// myDiv.insertAdjacentElement('beforebegin', newElement);


// // remove the child of the parent
// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fpara');
// parent.removeChild(child);


//********************************* */
// changing css using js

// let element = document.querySelector('#fpara');
// element.style.backgroundColor = 'blue';

// by using style, we can change only one property at a time
// but by using cssText we can change all or multiple the properties at a time

// let element = document.querySelector('#fpara');
// element.style.cssText = "background-color:black; color: white";

// setAttribute: set the attribute of the element

// let element = document.querySelector('#fpara');
// element.setAttribute('class', 'myclass'); // set the class attribute of the element
// element.setAttribute('style', "padding: 3rem");

// className: set or get the class of the element

// classList:
//Instead of manually working with element.className (which is just a string),
//  classList provides methods to add, remove, toggle, and check classes in a clean way.

// let element = document.querySelector('#fpara');

// element.classList.add('myclass'); // add a class


// element.classList.remove('myclass'); // remove a class

// element.classList.toggle('myclass'); // toggle a class

// element.classList.contains('myclass'); // check if a class exists


//******************************************* */
// Browser events
// it is like some event has occured in the browser, like click, hover, scroll etc., actions are performed on the basis of any event

// EVENT: An event is something that happens in the browser — like:
// Clicking a button, Typing in a box, Moving the mouse, Submitting a form

// EVENT-TARGET: The event target is the element on which the event happens.
// EVENT-LISTENER: An event listener is code that waits for an event to happen and reacts to it.: mtlb jo v action hua event krne se maan lo click krne s vdo play ho gya to isko hm add krte hai event listener ke andr

// syntax

//<event.target>.addEventListner(<event-type>, <function- which simply shows what to do when event is occured>);

// function changeText() {
//     let fpara = document.querySelector('#fpara');
//     fpara.textContent = "hello shivngi";
// }

//fpara.addEventListener('click', changeText); // mtlb jb v hm text pr click kre hmara text "hello jee(jo pjle se tha html s aaya) usko chnage krke hello shivangi ho jaana chahhiye"

// in the same way we can remove the event listener

//fpara.removeEventListener('click', changeText);

// phase of events: 1. capturing phase, 2. target phase, 3. bubbling phase

// by default: addEventListener executes in the bubbling phase


// EVENT OBJECT: The event object is an automatic object that the browser gives you when an event happens.

// function changeText(event) {
//     console.log(event);
//     let fpara = document.querySelector('#fpara');
//     fpara.textContent = "hello shivngi";
// }

// fpara.addEventListener('click', changeText);


// default action: The default action is the action that the browser would normally do when an event happens.
// but we can prevent it by using event.preventDefault() method.

// now we have used the anchor tag in html and we want to change the default behaviour of anchor tag like click krne pr wo kisi aur page pr le jaata hia to use hm chnage krenge

// let element = document.getElementById('fanchor');
// element.addEventListener('click', function (event) {

//     event.preventDefault();
//     element.textContent = "hmne default behaviour change kr diya hai";
// });

// avoid to write too many addEventListener

// let paras = document.querySelectorAll('p');

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click', function () {
//         alert("you can clicked on paragraph" + (i + 1));
//     })
// }

// let paras = document.querySelectorAll('p');

// function alertPara(event) {
//     alert("you can clicked on paragraph: " + event.target.textContent);  // by doing this, it will give the text content on which i have clicked
// }

// for (let i = 0; i < paras.length; i++) {
//     let para = paras[i];
//     console.log("eventListenerAdded");
//     para.addEventListener('click', alertPara);
// }

//************************************ */
// Performace Improvement: by this we can improve the performance of our code and get to know that how much time is taken by code

// code 1

// const t1 = performance.now();

// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "Hello, I am a paragraph: " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code 1 :" + (t2 - t1));


// // code 2: this code is faster than the code 1

// const t3 = performance.now();

// let mydiv = document.createElement('div');
// for (let i = 1; i <= 100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "Hello, I am a paragraph: " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("total time taken by code 2: " + (t4 - t3));

// reflow: process of calculating position or dimensions of element; computationally intensive task

// repaint: process of displaying content or element pixel by pixel: and it is faster than the reflow


// code 2 will take less number of reflow and repaint thats why it is faster than code 1

// Document fragment: light weight document object: no reflow and no repaint thats why faster than above two

// best code

// const t5 = performance.now();
// let fragment = document.createDocumentFragment();

// for (let i = 1; i <= 100; i++) {
//     let paras = document.createElement('p');
//     paras.textContent = "this is paragraph:" + i;
//     fragment.appendChild(paras);

// }

// document.body.appendChild(fragment);
// const t6 = performance.now();
// console.log("the time taken by the best code is " + (t6 - t5));

// ***************************************
// EVENT LOOP

// synchronous code: code that is executed line by line in the order it is written: on the spot wo line of code execute hota hai
// asynchronous code: code that is not executed in order of its writing; code that is executed in background; uses setTimeOut

// synchronous
// console.log("hii");
// console.log("shivangi");

// // asynchronous: setTimeOut(function, time in ms)

// function sayName() {
//     console.log("hey there");

// }
// setTimeout(sayName, 5000);

// console.log("it doesn't wait for 5s");

//************************************* */
// PROMISE: is an object represents the eventual completion or failure of asynchronous operation and its resulting value
// 3 states in promise: 1. pending; 2. fulfilled/ resolve; 3. rejected

// jaise synchronous on the spot value return krta hai waise hi hm promise ka use krke asynchronous s v on the spot value print krwa skte hai

// syntax

// new Promise((resolve, reject) => {
//     // function
// })


// resolve
// let firstPromise = new Promise((resolve, reject) => {
//     console.log("shivangi");// synchronous code
//     resolve(1000); // resolve ho gya ; 1000ms
// })


// reject
// let firstPromise = new Promise((resolve, reject) => {
//     console.log("shivangi");// synchronous code
//     reject(new Error("live server error")); // resolve ho gya ; 1000ms
// })

// promise in asynchronous

// let firstPromise = new Promise((resolve, reject) => {
//     setTimeout(function sayName() {
//         console.log("shivangi");
//     }, 1000);
// })

// then : agr promise fulfilled hota hai to then use hoga
// catch: agr rpomise reject hota hai to catch use hoga

// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Promise is fulfilled");
//     }
//     else {
//         reject("Promise is rejected");
//     }
// });
// promise1.then((message) => {
//     console.log("then ka message hai " + message);
// }).catch((error) => {
//     console.log("Error:" + error);
// });

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })
// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// })
// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Third");
// })

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// })
//     .catch((error) => {
//         console.log(error);
//     })


//**************************************** */
// Async and Await
// async await ka use krke aysnchronous code ko v synchronous behaviour provide kr skte hai
// async function hmesha promise return krta hai

// Fetch API: provides an interface for fetching resource

//scenario
//prepare url / api endpoint: sync
// fetch data -> network call -> aysnc // dekho isme to time lgega aane me lkin hm iske baad wale line me data ko process kra rhe h
// lkin hmara data to av fetch hi ni hua h to qnki usko time lg rha hia to output undefined aayega aur isliye hm awaitk use krte hai
// ki jb tk data fetch ni ho jaata data ko process hone mt dena
// process data -> sync

// async function getData() {
//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // parse json - async
//     let data = await response.json();
//     console.log(data)
// }
// getData();

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "shivangi" }),
//     headers: myHeaders,
// };

// async function getData() {
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log("get data response:", data);
// }
// async function postData() {
//     const response = await fetch(url, options);
//     let data = await response.json();
//     console.log("post data response:", data);
// }
// postData();
// getData();

//************************************** */
// CLOSURE: jb function ko required data k sath bind jb krte hai to wo closure bn jaata hai
//and this required data is known as lexical scope or surrounding state

function outerFunction() {
    let name = "shivangi";  // dekho ye name destroy ho jaana chahiye tha lkin ye print ho rha hai dusre function yhi closure h : function ko required data k sath bind krta hai 
    function innerFunction() {
        console.log(name);
    } innerFunction();
};

outerFunction();



