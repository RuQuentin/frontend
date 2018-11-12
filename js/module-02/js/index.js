'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let userPass = prompt('Введите пароль...');
let isCorrect = false;
let message;

for (let counter = 2; counter >= 0; counter -= 1) {
  let hasInput = userPass !== null;

  if (hasInput) {
    /*     isCorrect = passwords.includes(userPass); */

    for (let password of passwords) {
      isCorrect = password === userPass;
      if (isCorrect) break;
    }

    if (isCorrect) {
      message = 'Добро пожаловать!';
      break;
    } else {
      message = 'У Вас закончились попытки, аккаунт заблокирован!';
      userPass = prompt(`Неверный пароль, у Вас осталось ${counter} попыток`);
    }
  } else {
    message = 'Вы отменили вход. Заходите в другой раз.';
    break;
  }
}

alert(message);
