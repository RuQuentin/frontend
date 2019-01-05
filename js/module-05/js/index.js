'use strict';

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    phone: '+1 (848) 556-2344',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    phone: '+1 (855) 582-2464',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    phone: '+1 (814) 593-3825',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    phone: '+1 (909) 547-2687',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    phone: '+1 (956) 512-2693',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    phone: '+1 (876) 411-2433',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    phone: '+1 (979) 504-2554',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];


// Получить массив имен (поле name) всех пользователей

const getAllNames = arr => {
  const newArr = arr.map(item => item.name);
  return newArr
};

console.log(getAllNames(users)); 


// Получить массив объектов пользователей по цвету глаз (поле eyeColor)

const getUsersByEyeColor = (arr, color) => {
  const newArr = arr.filter(item => item.eyeColor === color);
  return newArr
};

console.log(getUsersByEyeColor(users, 'blue'));


// Получить массив имен пользователей по полу (поле gender)

const getUsersByGender = (arr, gender) => {
  const newArr = arr.filter(item => item.gender === gender);
  return newArr
};

console.log(getUsersByGender(users, 'male'));


// Получить массив только неактивных пользователей (поле isActive)

const getInactiveUsers = arr => {
  const newArr = arr.filter(item => item.isActive === false);
  return newArr
};

console.log(getInactiveUsers(users));


// Получить пользоваля (не массив) по email (поле email, он уникальный)

const getUserByEmail = (arr, email) => {
  const user = arr.find(item => item.email === email);
  return user
};

console.log(getUserByEmail(users, 'shereeanthony@kog.com'));
console.log(getUserByEmail(users, 'elmahead@omatom.com'));


// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)

const getUsersWithAge = (arr, min, max) => {
  const newArr = arr.filter(item => item.age >= min && item.age <= max);
  return newArr;
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));


// Получить общую сумму баланса (поле balance) всех пользователей

const getTotalBalance = arr => {
  const balance = arr.reduce((acc, item) => acc + item.balance, 0);
  return balance
};

console.log(getTotalBalance(users));


// Массив имен всех пользователей у которых есть друг с указанным именем

const getUsersByFriend = (arr, name) => {
  const hasFriend = friend => friend === name;
  const newArr = arr.filter(item => item.friends.some(hasFriend))
                    .map(item => item.name);
  return newArr;
};

console.log(getUsersByFriend(users, 'Briana Decker'));
console.log(getUsersByFriend(users, 'Goldie Gentry'));


// Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке

const getAllSkills = arr => {
  const concatElements = (acc, item) => [...acc, ...item.skills];
  const deletesDuplicates = (acc, item) => [...acc.filter(elem => elem !== item), item];
  const newArr = arr.reduce(concatElements, [])
                    .reduce(deletesDuplicates, [])
                    .sort()
  return newArr;
};

console.log(getAllSkills(users));


// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getUserNamesSortedByFriendsCount = arr => {
  const sortByFriendsCount = (a, b) => a.friends.length - b.friends.length;
  const newArr = arr.sort(sortByFriendsCount)
                    .map(item => item.name);
  return newArr
};

console.log(getUserNamesSortedByFriendsCount(users));