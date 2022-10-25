'use strict';

const messageBox = document.querySelector('.js_box');
const adaBtn = document.querySelector('.js_btn');

const adalaber1 = {
    name: "Susana",
    age: 25,
    job: "periodista",
};
  
const adalaber2 = {
    name: "Rocío",
    age: 25,
    job: "actriz",
};

function printAdalaber(name, age, job) {
    const newAdalaber = `Mi nombre es ${name}, tengo ${age} y soy ${job}`;
    return newAdalaber;
};

adaBtn.addEventListener('click', (event) => {
    debugger
    event.preventDefault();
    messageBox.innerHTML = printAdalaber(adalaber1.name, adalaber1.age, adalaber1.job);
    debugger
});

adaBtn.addEventListener('click', (event2) => {
    debugger
    event2.preventDefault();
    messageBox.innerHTML += printAdalaber(adalaber2.name, adalaber2.age, adalaber2.job);
    debugger
});