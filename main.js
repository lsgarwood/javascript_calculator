'use strict'
//query selectors
const input1El = document.querySelector("#input_1"); //. select class //# select id
const input2El = document.querySelector("#input_2");
const addEl = document.querySelector("#button_add");
const subtractEl = document.querySelector("#button_subtract");
const multiplyEl = document.querySelector("#button_multiply");
const divideEl = document.querySelector("#button_divide");
const histroyEl = document.querySelector("#list_output");

//variables
let workHist = []

//functions
function add() {
    let addResult = (input1El + input2El);
    console.log(addResult)
}
add(3,3)

const subtract = function(a,b) {
    console.log(a-b)
}
subtract(12,8)

const multiply = function(a,b) {
    console.log(a*b);
}
multiply(2,6);

const divide = function(a,b) { 
    console.log(a/b)
}
divide(10,2)

function save() {
    workHist.push(add);
    const li = document.createElement("li");
    li.textContent = count;
    historyEl.appendChild(li);
    console.log("now we save");
    count = 0;
    countEl.textContent = count;

//connect with event listeners
addEl.addEventListener("click", add);
subtractEl.addEventListener("click", subtract);
multiplyEl.addEventListener("click", save);
divideEl.addEventListener("click", increment);



// //query selectors
// const titleEl = document.querySelector("#title-el");
// const countEl = document.querySelector("#count-el");
// const addOneEl = document.querySelector("#plusone-el");
// const saveEl = document.querySelector("#save-el");
// const historyEl = document.querySelector("#history-el");

// //variables
// let count = 0;
// let saveHistory = []

// //functions
// function increment() {
//     count ++;
//     countEl.textContent = count; //InnerHTML, TextContent, InnerText
//     console.log("we work"); 
// }

// function save() {
//     saveHistory.push(count);

//     const li = document.createElement("li");
//     li.textContent = count;
//     historyEl.appendChild(li);
//     console.log("now we save");
//     count = 0;
//     countEl.textContent = count;

//     //historyEl.innerHTML += "<li>" + count + "<li/>";
//     // for (let i = 0; i < saveHistory.length; i++) {
//     //     historyEl.innerHTML += "<li>" + saveHistory[i] + "</li>"
//     // }

//     // countEl.textContent = count;
//     // historyEl.textContent = saveHistory;
//     // console.log("now we save");
//     // count = 0;
//     // countEl.textContent = count;
// }
// //connect queries to functions in final event listeners
// addOneEl.addEventListener("click", increment);
// saveEl.addEventListener("click", save)