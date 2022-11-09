'use strict';

const body = document.querySelector('.js-body');
const select = document.querySelector('.js-select');

function changeBackground() {
    if (select.value === 'Madrid') {
        body.style.backgroundImage = "url(./img/madrid.jpg)";
    }
    else if (select.value === 'París') {
        body.style.backgroundImage = "url(./img/paris.jpg)";
    }
    else if (select.value === 'New York') {
        body.style.backgroundImage = "url(./img/NuevaYork.jpg)";
    }
}

select.addEventListener('click', changeBackground);