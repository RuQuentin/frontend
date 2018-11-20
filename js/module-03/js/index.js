'use strict';

const loginsBase = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const getUserInput = () => {
  let login = prompt('Введите новый логин (от 4 до 16 символов)', '');
  return login;
};

const checkIsLoginNull = login => {
  let checkResult = login === null ? true : false;
  return checkResult;
};

const checkLoginValidity = login => {
  let checkResult = login.length >= 4 && login.length <= 16 ? true : false;
  return checkResult;
};

const checkIsLoginExists = (logins, login) => {
  let checkResult = logins.includes(login) ? true : false;
  return checkResult;
};

const addLoginToBase = (logins, login) => {
  logins.push(login);
};

const addLogin = (logins, login) => {
  if (!checkIsLoginNull(login)) {
    if (checkLoginValidity(login)) {
      if (!checkIsLoginExists(logins, login)) {
        addLoginToBase(logins, login);
        alert('Логин успешно добавлен!');
        return true;
      } else {
        alert('Такой логин уже используется!');
        return false;
      }
    } else {
      alert('Ошибка! Логин должен быть от 4 до 16 символов');
      return false;
    }
  } else {
    alert('Вы отменили регистрацию. Заходите в другой раз...');
    return true;
  }
};

const repeatLoginRequest = logins => {
  let newLogin;
  let result;
  do {
    newLogin = getUserInput();
    result = addLogin(logins, newLogin);
  } while (result === false);
};

/* const repeatLoginRequest = logins => {
  let newLogin;
  let result;
  newLogin = getUserInput();
  result = addLogin(logins, newLogin);
  if (result === false) repeatLoginRequest(logins);
}; */

repeatLoginRequest(loginsBase);

console.log(loginsBase);
