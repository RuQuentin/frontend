'use strict';

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];

let userPassword;
let isCorrectPassword;
let message;
const maxAttempts = 3;

for (let counter = maxAttempts - 1; counter >= 0; counter -= 1) {
  userPassword = prompt('Введите пароль...');

  if (userPassword !== null) {
    isCorrectPassword = passwords.includes(userPassword);
    if (isCorrectPassword) break;
    if (counter > 0) alert(`Неверно. У Вас осталось ${counter} попыток`);
  } else {
    isCorrectPassword = null;
    break;
  }
}

switch (isCorrectPassword) {
  case true:
    message = 'Добро пожаловать!';
    break;
  case false:
    message = 'У Вас закончились попытки, аккаунт заблокирован!';
    break;
  case null:
    message = 'Вы отменили вход. Заходите в другой раз.';
}

alert(message);
