function sumSequence(n) {
  if (n === 0) {
    return '0.00';
  }
  let sum = 0;

  for (let i = 1; i <= n; i++) {
      sum += 1 / Math.pow(2, i);
  }
  const roundedSum = sum.toFixed(2);
  return roundedSum;
}

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}

function isPalindrome(str) {
  const charCountMap = new Map();

  for (const char of str) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  let oddCount = 0;

  for (const count of charCountMap.values()) {
      if (count % 2 !== 0) {
          oddCount++;
          if (oddCount > 1) {
              return false;
          }
      }
  }

  return true;
}

function countLetters(str) {
  if (typeof str !== 'string' || str.length === 0) {
      return {};
  }

  const letterCount = {};

  const cleanedStr = str.toLowerCase().replace(/\s/g, '');

  for (const char of cleanedStr) {
    letterCount[char] = (letterCount[char] || 0) + 1;
  }

  return letterCount;
}

function divideArrays(arr, size) {
  if (size <= 0) {
    return [];
  }

  if (arr.length <= size) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(0, size + 1));
  }
}

function encrypt(str, n) {
  if (n <= 0) {
      return str;
  }

  const encryptedStr = str.split('').map(char => {
      const charCode = char.charCodeAt(0);
      let encryptedCharCode;

      if (charCode >= 65 && charCode <= 90) {
          encryptedCharCode = ((charCode - 65 - n + 26) % 26) + 65;
      } else {
          encryptedCharCode = charCode;
      }

      return String.fromCharCode(encryptedCharCode);
  }).join('');

  return encryptedStr;
}