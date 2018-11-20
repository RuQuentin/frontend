'use strict';

const getUserInput = function() {
  return prompt('Введите числа через запятую', '');
};

const convertStringToArray = function(string) {
  let array = string.split(',');
  return array;
};

const convertArrayToNumbers = function(inputArray) {
  let outputArrayItem;
  let outputArray = [];

  for (let i = 0, max = inputArray.length; i < max; i += 1) {
    outputArrayItem = Number(inputArray[i]);
    if (!Number.isNaN(outputArrayItem)) outputArray.push(outputArrayItem);
  }

  return outputArray;
};

let userInput = getUserInput();
let userArray = convertStringToArray(userInput);
let userNumbers = convertArrayToNumbers(userArray);

const findMin = function(item, minNumber) {
  if (item < minNumber) {
    minNumber = item;
  }
  return minNumber;
};

const findMax = function(item, maxNumber) {
  if (item > maxNumber) {
    maxNumber = item;
  }
  return maxNumber;
};

const findMaxMin = function(array, typeOfComparison) {
  let result = array[0];

  for (let i = 1, max = array.length; i < max; i += 1) {
    result = typeOfComparison(array[i], result);
  }

  return result;
};

const testMin = findMaxMin(userNumbers, findMin);
const testMax = findMaxMin(userNumbers, findMax);

alert(`Исходные значения ${userArray}
Минимальное число ${testMin}
Максимальное число ${testMax}`);
