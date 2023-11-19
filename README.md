# JS Classes and Modules

## Write functions and classes

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

Task has two parts: `JS Modules` and `JS Class creation`.

**Please, note:**
- If task requirement says: *Function should **return** <something>*, it means it should deliberately return expected value. If instead of returning a value, you will show it in the console, it will not pass the check. More about function returning value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### JS Modules

1. **Function "sayHelloToUser"**

In the `script.js` file there is a function `sayHelloToUser`. By default, it will not work, because it requires several other JS modules to work properly. In this task, we will create them.

`sayHelloToUser` function code:
```js
function sayHelloToUser(name) {
    if (!isValid(name)) { // "isValid" will be imported
        return 'Invalid name';
    }

    return `${GREETING}, ${name}!`; // "GREETING" will be imported
}
```

**1.1.** In the `src` folder create the `isValidName.js` file. This file should export function `isValidName` by default:

```js
function isValidName(name) {
    return !!name && typeof name === 'string' && name.trim().length > 1;
}
```
After you create it, import this function to `script.js` with the name `isValid`. We use this function in the `sayHelloToUser`. Please, note function names are different in the `isValidName.js` and in `script.js`. It is done on purpose. 

**1.2** In the `src` folder create `constants` folder and add the file `GREETING.js`. This file should export `GREETING` constant:

```js
const GREETING = 'Hello';
```

After you create it, import this constant to `script.js` with the original name.

If you did everything correctly, `sayHelloToUser` will work. You could verify it in the `index.html` file.

2. **Function "formatPrices"**

**2.1** In the `src` folder create the `formatPrices.js` file. This file should export function `formatPrices`:

```js
function formatPrices(prices, currency) {
    const currencySymbol = CURRENCY_SYMBOLS[currency] || '$';

    return prices.map((price) => {
        return formatWithCurrency(price, currencySymbol);
    });
}
```

As you can see, it uses constant(`CURRENCY_SYMBOLS`) and function(`formatWithCurrency`) you need to create and import them.

**2.2** In the `src/constants` folder create a `CURRENCY_SYMBOLS.js` file. This file should export `CURRENCY_SYMBOLS` constant:

```js
const CURRENCY_SYMBOLS = {
    US: '$',
    EUR: '€',
    JPN: '¥',
};
```

After you create it, import this constant to `formatPrices.js` with the original name.

**2.3** In the `src` folder create the `formatWithCurrency.js` file. This file should export the function `formatWithCurrency`:

```js
function formatWithCurrency(price, currencySymbol) {
    return `${price.toFixed(2)}${currencySymbol}`;
}
```

Please, note you should export this function with its name as you did for constants.

After you create it, import this function to the `formatPrices.js`

If you did everything correctly, `formatPrices` will work. You could verify it in the `index.html` file.

### JS Class Creation

You need to create two classes: `User` and `Task` to store the user's data with assigned tasks.

Before we start, in the `src` folder, please, create the `user-data` folder. 

We will put class files to it.

1. **Class "Task"**

Create a file called `Task.js` in the `src/user-data` folder. 
After that create an empty `Task` class.

This file should export `Task` class. 

This class is used for creating tasks assigned to a user. 
Every task object created via `Task` class should have one public property:

- `name` - string, name of a task

**Class implementation requirements:**

- **constructor**: takes one parameter `name`, and assigns its value to the `name` property of the object.

**Usage example:**
```js
let task = new Task('Clean the room');
console.log(task.name); // 'Clean the room'
```

- **"description" setter and getter**. Description of the task we will store in a private property of the object. **By default it should be an empty string**. Here you can find more details on how to create private properties: [Private “#waterLimit”](https://javascript.info/private-protected-properties-methods#private-waterlimit).
    - **"description" getter**: add a getter for `"description"`. Getter should return value from a private `#description` property.

    ```js
    let task = new Task('Clean the room');
    console.log(task.description); // "" - by default it is an empty string
    ```

    - **"description" setter**: add a setter for `"description"`. The setter should update a value in a private `#description` property. It should set it, only if a new value has a `string` type. It should ignore the rest of the types.

    ```js
    let task = new Task('Clean the room');
    task.description = 777; // 777 ignored by setter
    console.log(task.description); // ""
    task.description = 'New Description'; // set new value of a string type
    console.log(task.description); // "New Description"
    ```

Please, don't forget to export `Task` class.

2. **Class "User"**

Create a file called `User.js` in the `src/user-data` folder. 
After that create an empty `User` class.

This file should export `User` class. 

This class is used for creating users objects.
Every user object should have 4 public properties:

- `firstName` - user's first name
- `lastName` - user's last name
- `age` - user's age
- `tasks` - an array of tasks assigned to a user. Every task is an instance of the class `Task` created previously.

**Class implementation requirements:**

- **constructor**: should take 2 parameters: `firstName` and `lastName` and assign their values to `firstName` and `lastName` properties of the object.

**Usage example:**
```js
let user = new User('Stan', 'Jackman');
console.log(user.firstName); // "Stan"
console.log(user.lastName); // "Jackman"
```

Properties `age` and `tasks` should not be specified in the constructor, but should have default values. `age` should be `1`, and `tasks` should be an empty array(`[]`);

```js
let user = new User('Stan', 'Jackman');

console.log(user.age); // 1
console.log(user.tasks); // []
```

Default values should be set as `"Class Fields"`: [Class Fields](https://javascript.info/class#class-fields)

- **"fullName" getter**: add getter for a `"fullName"`. Getter should return a concatenated `firstName` and `lastName` with a space between them. It should be a getter, not a regular public property.
    ```js
    let user = new User('Stan', 'Jackman');

    console.log(user.fullName); // "Stan Jackman"
    ```

- **method "setAge"** - a method for updating `age` property. 
    - It should take 1 parameter: `newAge`: new value to set to `age` property of an object
    - It should update `age` property only if a new value fits the requirements:
        - It is finite
        - It is more than `0`
        - It is a `number` type
    ```js
    let user = new User('Stan', 'Jackman');

    console.log(user.age); // 1
    user.setAge(NaN); // It doesn't work, not a finite value
    console.log(user.age); // 1
    user.setAge(Infinity); // It doesn't work, not a finite value
    console.log(user.age); // 1
    user.setAge(-Infinity); // It doesn't work, not a finite value
    console.log(user.age); // 1
    user.setAge(-100); // It doesn't work, value is less than 0
    console.log(user.age); // 1
    user.setAge(0); // It doesn't work, value is a 0
    console.log(user.age); // 1
    user.setAge('100'); // It doesn't work, value has a string type
    console.log(user.age); // 1

    user.setAge(44); // It sets new value
    console.log(user.age); // 44
    ```
- **method "addTasks"** - a method for adding tasks to a `task` public property.
    - It should take 1 parameter: `tasks`. It is an array of objects created with `Task` class. These tasks should be added to the end of an array stored in `tasks` property.
    - It should add only objects created with `Task` class. If in the array there is an object created with a different constructor, it should be ignored.

    ```js
    let user = new User('Stan', 'Jackman');

    let newTasks1 = [
        new Task('Task1'),
        new Task('Task2'),
    ];
    user.addTasks(newTasks1);
    console.log(user.tasks); // [{ name: 'Task1' }, { name: 'Task2' }];

    let newTasks2 = [
        new Task('Task3'),
    ];
    user.addTasks(newTasks2);
    user.addTasks([{}, {}, {}]); // Should ignore just objects
    console.log(user.tasks); // [{ name: 'Task1' }, { name: 'Task2' }, { name: 'Task3' }];
    ```

- **method "getTasksCount"** - it should return a count of tasks in the `tasks` property.
    ```js
    let user = new User('Stan', 'Jackman');

    let newTasks1 = [
        new Task('Task1'),
        new Task('Task2'),
    ];
    user.addTasks(newTasks1);
    console.log(user.getTasksCount()); // 2
    ```
     

