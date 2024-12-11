const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

let numbers = [1, 2, 3, 4, 5, 6];

function addToArr(numbers, num) {
  numbers.push(num);
  return numbers;
}

app.get('/numbers/add', (req, res) => {
  let result = addToArr(numbers, 7);
  res.json(result);
});

let strings = ['hello', 'world', 'javascript', 'node'];

function addToString(strings, str) {
  strings.push(str);
  return strings;
}

app.get('/strings/add', (req, res) => {
  let result = addToString(strings, 'express');
  res.json(result);
});

let numbersArr = [1, 2, 3, 6, 4, 5];

function sumOfNumbers(numbersArr) {
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum = sum + numbersArr[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  let result = sumOfNumbers(numbersArr);
  res.json({ sum: result });
});

function findMaxInArray(numberArr) {
  let max = numbersArr[0];
  for (let i = 1; i < numbersArr.length; i++) {
    if (max < numbersArr[i]) {
      max = numbersArr[i];
    }
  }
  return max;
}

app.get('/numbers/max', (req, res) => {
  let result = findMaxInArray(numbersArr);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
