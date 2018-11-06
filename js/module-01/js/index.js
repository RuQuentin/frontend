'use strict';

const groupName1 = 'sharm';
const groupName2 = 'hurgada';
const groupName3 = 'taba';

let placesAvailable1 = 15;
let placesAvailable2 = 25;
let placesAvailable3 = 6;

const placesNeed = +prompt('Сколько мест необходимо Вашей группе?');

const checkNoninteger = !Number.isInteger(placesNeed);
const checkNonpositive = placesNeed <= 0;

let groupName;
let userConfirmation;
let placesComparison;
/* let confirmationMessage = `В группе ${groupName} есть ${placesNeed} свободных мест. Желаете присоединиться?`;
const wishesMessage = `Приятного путешествия в группе ${groupName}!`; */

if (checkNoninteger || checkNonpositive) {
  alert('Ошибка ввода!');
} else {
  /* Checking first group */

  placesComparison = placesNeed <= placesAvailable1;

  if (placesComparison) {
    groupName = groupName1;
    userConfirmation = confirm(
      `В группе ${groupName} есть ${placesNeed} свободных мест. Желаете присоединиться?`,
    );

    if (userConfirmation) {
      placesAvailable1 = placesAvailable1 - placesNeed;
      alert(`Приятного путешествия в группе ${groupName}!`);
    }
  }

  /* Checking second group */

  if (!placesComparison || !userConfirmation) {
    placesComparison = placesNeed <= placesAvailable2;

    if (placesComparison) {
      groupName = groupName2;
      userConfirmation = confirm(
        `В группе ${groupName} есть ${placesNeed} свободных мест. Желаете присоединиться?`,
      );

      if (userConfirmation) {
        placesAvailable2 = placesAvailable2 - placesNeed;
        alert(`Приятного путешествия в группе ${groupName}!`);
      }
    }
  }

  /* Checking third group */

  if (!placesComparison || !userConfirmation) {
    placesComparison = placesNeed <= placesAvailable3;

    if (placesComparison) {
      groupName = groupName3;
      userConfirmation = confirm(
        `В группе ${groupName} есть ${placesNeed} свободных мест. Желаете присоединиться?`,
      );

      if (userConfirmation) {
        placesAvailable3 = placesAvailable3 - placesNeed;
        alert(`Приятного путешествия в группе ${groupName}!`);
      }
    }
  }

  /* Nothing appropriate */

  if (!placesComparison || !userConfirmation) {
    alert('Извините, у нас для Вас нет ничего подходящего...');
  }
}
