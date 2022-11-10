'use strict';

const campanadas = document.querySelector('.js-campanadas');
const textCounter = document.querySelector('.js-msg');
let counter = 0;
let finish;

function paintCuteGrape() {
    campanadas.innerHTML +='<li><img class="grapes" src="./img/cute-grape.jpg" alt="Uvita"></li>';
};

function happyNewYear() {
    textCounter.innerHTML = "¡Feliz año nuevo!"
};

const incrementAndShowGrapes = () => {
    counter++;
    happyNewYear
    textCounter.innerHTML = counter;
    paintCuteGrape();
    if (counter === 12) {
        clearInterval(finish);
        setTimeout(happyNewYear, 1500);
    }
};

finish = setInterval(incrementAndShowGrapes, 1000);