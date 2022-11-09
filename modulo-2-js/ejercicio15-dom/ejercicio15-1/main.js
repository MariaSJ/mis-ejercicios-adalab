'use strict';

const numbers = [1, 2, 3];

const items = document.querySelector('.js-items');

const newItem1 = document.createElement("li");
const newItem2 = document.createElement("li");
const newItem3 = document.createElement("li");

const newContent1 = document.createTextNode(numbers[0]);
const newContent2 = document.createTextNode(numbers[1]);
const newContent3 = document.createTextNode(numbers[2]);

newItem1.appendChild(newContent1);
newItem2.appendChild(newContent2);
newItem3.appendChild(newContent3);

items.append(newItem1, newItem2, newItem3);
