# JavaScript Date and methods

## Write functions for working with dates

## Before we start

1. This practical task is verified automatically with tests. 
2. Please, put all your `JavaScript` code in the `src/script.js` and `HTML` code in the `src/index.html` files. Functions from `src/script.js` are used in the `<script>` inside `src/index.html`. If you use any other file, we would not be able to verify it.
3. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application

`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux operating systems.

Here are detailed instructions how to install and use it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Write functions for working with primitive types values. Requirements for these functions are below.

Please, note you should edit the `src/script.js` file. Your solution cannot be verified if you use a different file. 

When creating a function, you must use `Function Declaration`, or it will not be able to be verified. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please note:**
- If the task requirement says *Function should **return** <something>*, it means it should deliberately return the expected value. If you show it in the console instead of returning a value, it will not pass the check. More about returning value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the functions

1. **Function "getFullDaysBeforeNewYear"**

Write a function `getFullDaysBeforeNewYear` for counting the number of full days before the New Year, including the current date. It should count these days from the date and month numbers passed as parameters.

Please note that the function should be exported from the `script.js` file, as in the example below:

```js
export function getFullDaysBeforeNewYear(date, month) {
    // your code...
}
```

This function takes one parameter:
`date` - a number representing some day of the month (`1-31`)
`month` - a number representing a month (`1-12`)

1. The function should return the number of full days before the New Year, beginning with `date` and `month`, passed as parameters.
2. If some invalid numbers are passed (negative value, `NaN`, `Infinity`, `-Infinity`) or a function is called without parameters, it should return `null`.

**An example of using the function:**
```js
// Let's assume the current year is 2023
let date1 = new Date(2023, 11, 30); // 30th of December same year as now

getFullDaysBeforeNewYear(30, 12); // 2 
getFullDaysBeforeNewYear(31, 12); // 1 
getFullDaysBeforeNewYear(28, 12); // 4
getFullDaysBeforeNewYear(); // null
getFullDaysBeforeNewYear(0, 0); // null
getFullDaysBeforeNewYear(-7, 1); // null
getFullDaysBeforeNewYear(NaN, 1); // null
getFullDaysBeforeNewYear(Infinity, 1); // null
```

2. **Function "formatWithWeekday"**

Write a function `formatWithWeekday` for formatting the passed Date object to a string with a weekday name similar to this: `'Monday, 14, December 2022'`.

Please note that the function should be exported from the `script.js` file, as in the example below:

```js
export function formatWithWeekday(date) {
    // your code...
}
```

This function takes one parameter:
`date` - a date object for formatting

1. The function should be a string with the format `<WEEKDAY NAME>, <number>, <Month> <Year>`.

The names of weekdays: `Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday`.

The months are: `January, February, March, April, May, June, July, August, September, October, November, and December`.

2. If the date is not passed or is `null` or `undefined`, the function should return an empty string.

**An example of using the function:**

```js
formatWithWeekday(new Date(21, 10, 2022)); // 'Monday, 21, November 2022'
formatWithWeekday(new Date(22, 10, 2022)); // 'Tuesday, 22, November 2022'
formatWithWeekday(null); // ''
formatWithWeekday(undefined); // ''
formatWithWeekday(); // ''
```

3. **Function "isValidDate"**

Write a function `isValidDate` for checking if a date is valid. It returns `true` if it is valid and `false` if not.

Please note that the function should be exported from the `script.js` file, as in the example below:

```js
export function isValidDate(date) {
    // your code...
}
```

This function takes two parameters:
`date` - a date object

1. The function should return `true` if a date is valid.
2. The function should return `false` if a date is invalid.
3. The function should return `false` if a date is `undefined` or not a Date object at all.

**An example of using the function:** 

```js 
let date = new Date(2022, 28, 10); 
let invalidDate = new Date(undefined); 

isValidDate(date); // true
isValidDate(invalidDate); // false
isValidDate(null); // false
isValidDate(undefined); // false
isValidDate({}); // false
isValidDate(3333); // false
isValidDate(''); // false
isValidDate([]); // false
```

4. **Function "isAfter"**

Write a function `isAfter`, which takes two dates as parameters, for checking if the first date is after the second date. It returns `true` if it is after and `false` if not.

Please note the function should be exported from the `script.js` file, as in the example below:

```js
export function isAfter(date, dateToCompare) {
    // your code...
} 
```

This function takes two parameters:
`date` - a Date object
`dateToCompare` - a Date object

1. The function should return `true` if the `date` is after `dateToCompare`.
2. It should return `false` if the `date` is before `dateToCompare`.
3. It should return `false` if any of the dates are invalid.

**An example of using the function:**

```js
let date1 = new Date(2022, 22, 10);
let date2 = new Date(2022, 23, 10);

isAfter(date1, date2); // false
isAfter(date2, date1); // true
isAfter(date1, new Date(undefined)); // false
```

5. **Function "formatDistanceToNow"**

Write a function `formatDistanceToNow`, which returns the distance between a given date and now in words.

Please note that the function should be exported from the `script.js` file, as in the example below:

```js
export function formatDistanceToNow(date) {
    // your code...
}
```

This function takes one parameter:
`date` - a Date object for formatting

1. If the date is 0 to 30 seconds before now, the function should return the string `'less than a minute'`. 
2. If the date is '30 secs` to `1 min 30 secs` before now, the function should return the string `'1 minute'`. 
3. If the date is `1 min 30 secs` to '44 mins 30 secs` before now, the function should return the string `[2..44] minutes`. 
4. If the date is '44 mins 30 secs` to '89 mins 30 secs` before now, the function should return the string `about 1 hour`. 
5. Otherwise, it should return the full date in the format `DD.MM.YYYY HH:mm:ss`. That is: `day.month.year hours:minutes:seconds`, all in two-digit format, e.g., `01.06.2016 09:07:24`. Please note you should add 0 to a one-digit number in months, dates, hours, minutes, and seconds.  
6. If the date object is `undefined` or `null`, it should return the string `Date is unknown`. 

**An example of using the function:** 
```js 
formatDistanceToNow(new Date(new Date() - 10)); // 'less than a minute' 
formatDistanceToNow(new Date(new Date() - 60 * 1000)); // '1 minute' 
formatDistanceToNow(new Date(new Date() - 31 * 60 * 1000)); // '31 minutes' 
formatDistanceToNow(new Date(new Date() - 77 * 60 * 1000)); // 'about 1 hour' 

formatDistanceToNow(new Date(2012, 6, 28, 9, 7, 32)); // '28.07.2016 09:07:32' 
formatDistanceToNow(null); // 'Date is unknown' 
formatDistanceToNow(); // 'Date is unknown' 
``` 
