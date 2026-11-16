function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20);
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18);
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10);

function isPalindrom (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let index = normalizedString.length - 1; index >= 0; index--) {
    reversedString += normalizedString[index];
  }
  return reversedString === normalizedString;
}

isPalindrom('топот'); //true
isPalindrom('ДовОд'); // true
isPalindrom('Кекс'); //false
isPalindrom('Лёша на полке клопа нашёл '); //true

function getNumber (string) {
  const normalizedString = string.toString();
  let digits = '';
  for (let index = 0; index < normalizedString.length; index++) {
    const char = normalizedString[index];
    const digit = parseInt(char, 10);
    if (!Number.isNaN(digit)) {
      digits += digit;
    }
  }
  return parseInt(digits, 10);
}

getNumber('2023 год'); // 2023
getNumber('ECMAScript 2022'); // 2022
getNumber('1 кефир, 0.5 батона'); // 105
getNumber('агент 007'); // 7
getNumber('а я томат'); // NaN
getNumber(2023); // 2023
getNumber(-1); // 1
getNumber(1.5); // 15
