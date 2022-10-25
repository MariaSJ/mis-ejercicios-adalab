'use strict'

//EJERCICIO 1

const button = document.querySelector('.button');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
  text.innerHTML ='Mi primer click, ¡ole yo y la mujer que me parió!';
});

//EJERCICIO 2

const buttonName = document.querySelector('.button-name');
const textValue = document.querySelector('.name');
const textHola = document.querySelector('.text2');

buttonName.addEventListener('click', () => { 
    textHola += 'textValue.value';
});
