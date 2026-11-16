function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

console.log('Задание 1');
// Строка короче 20 символов
console.log(checkStringLength('проверяемая строка', 20));
// Длина строки ровно 18 символов
console.log(checkStringLength('проверяемая строка', 18));
// Строка длиннее 10 символов
console.log(checkStringLength('проверяемая строка', 10));

function isPalindrom (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let index = normalizedString.length - 1; index >= 0; index--) {
    reversedString += normalizedString[index];
  }
  return reversedString === normalizedString;
}

console.log('Задание 2');
console.log(isPalindrom('топот')); //true
console.log(isPalindrom('ДовОд')); // true
console.log(isPalindrom('Кекс')); //false
console.log(isPalindrom('Лёша на полке клопа нашёл ')); //true

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

console.log('Дополнительное задание');
console.log(getNumber('2023 год')); // 2023
console.log(getNumber('ECMAScript 2022')); // 2022
console.log(getNumber('1 кефир, 0.5 батона')); // 105
console.log(getNumber('агент 007')); // 7
console.log(getNumber('а я томат')); // NaN
console.log(getNumber(2023)); // 2023
console.log(getNumber(-1)); // 1
console.log(getNumber(1.5)); // 15
