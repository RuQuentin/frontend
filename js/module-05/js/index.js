'use strict';

function comb(fruits) {
  let energy = 0;
  fruits.sort((a, b) => a-b)
  const fruitsTemp = [];

  while (fruits.length + fruitsTemp.length > 1) {
    let newPile = 0;
    newPile += fruits[0] < fruitsTemp[0] || fruitsTemp[0] === undefined ? fruits.shift() : fruitsTemp.shift();
    newPile += fruits[0] < fruitsTemp[0] || fruitsTemp[0] === undefined ? fruits.shift() : fruitsTemp.shift();
    energy += newPile;
    fruitsTemp.push(newPile)
  }


  //   if (fruits[0] === undefined) {
  //     first = fruitsNew.shift();
  //     second = fruitsNew.shift();
  //   }

  //   if (fruitsNew[0] === undefined) {
  //     first = fruits.shift();
  //     second = fruits.shift();
  //   }

  //   if (fruits[1] === undefined && fruits[0] <= fruitsNew[1]) {
  //     first = fruits.shift();
  //     second = fruitsNew.shift();
  //   }

  //   if (fruitsNew[1] === undefined && fruits[1] > fuitsNew[0]) {
  //     first = fruits.shift();
  //     second = fruitsNew.shift();
  //   }

  //   if (fruits[1] <= fruitsNew[0]) {
  //     first = fruits.shift();
  //     second = fruits.shift();
  //   } else if (fruits[0] < fruitsNew[1]) {
  //     first = fruits.shift();
  //     second = fruitsNew.shift();
  //   } else {
  //     first = fruitsNew.shift();
  //     second = fruitsNew.shift();
  //   }

  //   energy += first + second;
  //   fruitsNew.push(first + second);
  // }

  return energy
  
}

// const fruits = [87, 84];
const fruits = [87, 84, 42, 34, 24, 81, 60, 48, 75];

const a = comb(fruits);

console.log(a)
