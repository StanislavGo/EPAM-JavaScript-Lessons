function addNumber(arr, number) {
  if (number === 0 || isNaN(number)) {
    return arr;
  }

  if (number < 0) {
    arr.push(number);
  }
  if (number > 0) {
    arr.unshift(number);
  }

  return arr;
}

function compareArrays(arr1, arr2) {
  return arr1.toString() == arr2.toString();
}

function getNumberOfEven(arr) {
  let sumOfEven = 0;
  if (arr !== null) {
    arr.forEach(el => {
      if (el % 2 == 0) {
        sumOfEven += 1;
      }
    });
    return sumOfEven;
  }
  return 0;
}

function getSubarray(arr, data) {
  if (arr !== null && arr.includes(data)) {
    const index = arr.indexOf(data);

    return arr.slice(0, index + 1);
  }
  return [];
}

function getDuplicateValues(arr) {
  if (arr.length == 0) {
    return [];
  }

  const uniqueVal = new Set();
  const duplicates = [];

  for (const value of arr) {
    if(uniqueVal.has(value)) {
      duplicates.push(value);
    } else {
      uniqueVal.add(value);
    }
  }

  return Array.from(new Set(duplicates));
}

function getMaxNumbers(arr) {
  if (arr.length == 0) {
    return [];
  }

  const maxValues = arr.map(subarray => {
    return subarray.length > 0 ? Math.max(...subarray) : undefined;
  });

  return maxValues.filter(val => val != undefined);
}

