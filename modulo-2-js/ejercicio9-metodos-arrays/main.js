'use strict';

const marks = [5, 4, 6, 7, 9];

function changeMarks() {
    const newMarks = [];
   for (let i = 0; i < marks.length; i++) {
  const newMarks = marks[i].changeMarks();
  newMarks.push(newMarks);
} 
}

const newMarks = marks.map((mark) => mark.changeMarks());

console.log(newMarks);

//la función changeMarks tiene que estar declarada???