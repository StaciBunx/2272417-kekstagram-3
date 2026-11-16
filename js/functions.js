function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

function isPalindrom (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let index = normalizedString.length - 1; index >= 0; index--) {
    reversedString += normalizedString[index];
  }
  return reversedString === normalizedString;
}

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
