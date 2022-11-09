'use strict';

function getRandomNumber() {
    fetch('https://api.rand.fun/number/integer')
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('.js-result').innerHTML = data.result;
      });
  }

function getChihuahua() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('img');
        img.src = data.message;
        img.alt = 'Un perro';
      });
}
  
document.querySelector('.js-dog').addEventListener('click', getChihuahua);
document.querySelector('.js-btn').addEventListener('click', getRandomNumber);
