'use strict';

const inputText = document.querySelector('.js-input-text');
const btn = document.querySelector('.js-btn');
const nameUser = document.querySelector('.js-result-name');
const img = document.querySelector('img');
const numRepo = document.querySelector('.js-result-number');


function getUserGit() {
    const searchUser = inputText.value;
    console.log(searchUser);
    fetch('https://api.github.com/users/{searchUser}')
      .then((response) => response.json())
      .then((data) => {
        nameUser.innerHTML = data.login;
        img.src = data.avatar_url;
        numRepo.innerHTML = data.public_repos;
    });
}
  
btn.addEventListener('click', getUserGit());