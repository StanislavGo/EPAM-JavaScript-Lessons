# Object Type

## Write functions for working objects

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

Write functions for working with objects. Requirements are below.

Please, note you should edit the `src/script.js` file. We can't verify your solution if you use a different file.

For a function creation, it is mandatory to use `Function Declaration` or we will not be able to verify them. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please, note:**
- If task requirement says: *Function should **return** <something>*, it means it should deliberately return expected value. If instead of returning a value, you will show it in the console, it will not pass the check. More about function returning a value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the functions

1. **Function "createUser"**

Write a function `createUser` for creating a user object with two properties: `firstName` and `lastName`.

```js
function createUser(firstName, lastName) {
    // your code...
}
```

This function takes two parameters:
`firstName` - a string with the user's first name.
`lastName` - a string with the user's last name.

1. The function should create a new object and return it.
2. This object should have two properties: `firstName` and `lastName`. 
3. `firstName` and `lastName` function parameters should be set to new object properties accordingly:
```js
// Example of the returned object:
{
    firstName: 'Some First Name',
    lastName: 'Some Last Name'
}
```

**Example of function usage:**
```js
let user = createUser('Stan', 'Lee');

// user object:
{
    firstName: 'Stan',
    lastName: 'Lee'
};

```

2. **Function "getFullName"**

Write a function `getFullName` for formatting a user's full name from a user object.

```js
function getFullName(user) {
    // your code...
}
```

This function takes one parameter:
`user` - an object with mandatory fields:
```js
let user = {
    firstName: 'Stan',
    lastName: 'Lee',
}
```

1. The function takes an object(`user`) as a parameter. 
2. This object(`user`) has two mandatory properties: `firstName` and `lastName`.
3. The function should merge values from these properties, starting from `firstName`, adding one space between them, and return the result.
4. The function should return an empty string `''` if a `user` object is not passed.

For instance, for an object:
```js
let user = {
    firstName: 'Stan',
    lastName: 'Lee',
}
```
The function should return a string:
```js
'Stan Lee';
```
4. Please, note there should not be any spaces at the beginning or at the end of the string.
5. There is only one space between the first name and the last name.

**Example of a function usage:**
```js
let user = {
    firstName: 'Stan',
    lastName: 'Lee',
};

let fullName = getFullName(user);

fullName; // "Stan Lee"

let emptyFullName = getFullName();
emptyFullName; // ""
```

3. **Function "getWidth"**
    
Write a function `getWidth` which takes an object as a parameter and returns a value from the nested property `width`.

```js
function getWidth(params) {
    // your code...
}
```

This function takes one parameter:
`params` - an object of format:
```js
let params = {
    styling: {
        sizes: {
            width: '100px',
            height: '200px'
        }
    }
};
```

1. The function should return a value from the nested property `width`.
2. `params` object always has the format described above.
3. Also, the function should not break for an empty object or an object with empty `styling` object inside. It should return `null` in this case.

**Example of a function usage:**

```js
let params1 = {
    styling: {
        sizes: {
            width: '777px',
            height: '888px'
        }
    }
};

let width = getWidth(params1); // "777px"

let params2 = {};
let nullWidth1 = getWidth(params2); // null

let params3 = {
    styling: {},
};
let nullWidth2 = getWidth(params3); // null
```

4. **Function "extendObject"**

Write a function `extendObject`, which takes two parameters: object `obj` and boolean `isValid`, and returns cloned object with added property `isValid`.

```js
function extendObject(obj, isValid) {
    // your code...
}
```
This function takes two parameters:
`obj` - any object;
`isValid` - boolean value: `true/false`;

1. The function should clone an object passed in an `obj` parameter.
2. The object passed as a parameter can be of any kind.
3. To the cloned object it should add new property `isValid`.
4. The value from a function parameter `isValid` should be set to the `isValid` property of a cloned object.
5. The function should return a cloned object with added `isValid` property.
6. The function should not mutate an object from `obj` parameter.

**Example of a function usage:**

```js
let obj = {
    title: 'Simple Object',
    isAdmin: false
};

let clonedObject = extendObject(obj, true);

clonedObject; // { title: 'Simple Object', isAdmin: false, isValid: true }

// Please, note: the function should return a CLONED object, so:
obj === clonedObject; // false
```

5. **Function "sumPrices"**

Write a function `sumPrices` for summing all finite values from object properties.

```js
function sumPrices(prices) {
    // your code...
}
```

This function takes one parameter:
`prices` - an object with any properties:
```js
let prices = {
  apples: 1000,
  oranges: 1600,
  cucumbers: 1300,
  month: 'December',
  currency: 'USD',
  health: Infinity,
  isPayed: false
};
```

1. The function should sum all property values with number type (finite only) and return the sum.
2. Properties names are not fixed, there could be any string values.
3. Please, note that in addition to price properties, the object stores additional information:
currency type (`currency`), salary paid or not (`isPayed`), and any others. We expect to receive the sum of properties with number(finite) type only, other properties should be ignored.
4. Special numeric values: `NaN`, `Infinity`, `-Infinity` should be excluded.
5. If `prices` object doesn't have properties with number type, the function should return zero(`0`). 

**Example of a function usage:**

```js
let prices1 = {
  pineapples: 1100,
  lemons: 100,
  tomatoes: 700,
  Year: '1973',
  sun: 'is shining',
  areAllNumbers: NaN,
  isPayed: false,
  from: Infinity,
  to: -Infinity
};

let result1 = sumPrices(prices); // 1900 - a sum of all finite number values.

let result2 = sumPrices({}); // 0
```

6. **Function "createUserWithFullName"**

Write a function `createUserWithFullName` for creating an object with two properties: `firstName` and `lastName`, and methods: `setFirstName`, `setLastName` and `getFullName`.

You can use your function `createUser` from task `#1` as a starter.

```js
function createUserWithFullName(firstName, lastName) {
    // your code...
}
```

This function takes two parameters:
`firstName` - a string with the user's first name.
`lastName` - a string with the user's last name.

1. The function should create a new object and return it.
2. Returned object should have two properties: `firstName` and `lastName`. The values for properties should be from `firstName` and `lastName` parameters.
3. Returned object should have three methods: 

`setFirstName(newFirstName)` - takes `newFirstName` as a parameter and sets its value to the `firstName` property of the object.

`setLastName(newLastName)` - takes `newLastName` as a parameter and sets its value to the `lastName` property of the object.

`getFullName()` - merges values from `firstName` and `lastName` properties adding a space between and returning the result. It should work the same way as `getFullName` function from previous task.

Please, note methods should use `this` inside.

**Example of function usage:**
```js
let user = createUserWithFullName('Stan', 'Lee');

user.firstName; // 'Stan'
user.lastName; // 'Lee'

let fullName = user.getFullName(); // 'Stan Lee'

user.setFirstName('Will');
user.setLastName('Smith');

user.firstName; // 'Will'
user.lastName; // 'Smith'

let fullName = user.getFullName(); // 'Will Smith'
let emptyFullName = getFullName();
emptyFullName; // ""
```
