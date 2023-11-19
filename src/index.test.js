const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const { readTextFile } = require('../test-utils/readTextFile');

// isValidName
let isValid = null;
let isValidNameModule = null;
try {
    isValidNameModule = require('./isValidName');
    isValid = isValidNameModule.default;
} catch (error) { }

// GREETING constant
let GREETING_Module = null;
let GREETING = null;
try {
    GREETING_Module = require('./constants/GREETING');
    GREETING = GREETING_Module.GREETING;
} catch (error) { }

// sayHelloToUser function
let sayHelloToUser = null;
try {
    const sayHelloToUserModule = require('./script');
    sayHelloToUser = sayHelloToUserModule.default;
} catch (error) { }

// GREETING constant
let CURRENCY_SYMBOLS_Module = null;
let CURRENCY_SYMBOLS = null;
try {
    CURRENCY_SYMBOLS_Module = require('./constants/CURRENCY_SYMBOLS');
    CURRENCY_SYMBOLS = CURRENCY_SYMBOLS_Module.CURRENCY_SYMBOLS;
} catch (error) { }

// formatWithCurrency
let formatWithCurrency = null;
let formatWithCurrencyModule = null;
try {
    formatWithCurrencyModule = require('./formatWithCurrency');
    formatWithCurrency = formatWithCurrencyModule.formatWithCurrency;
} catch (error) { }

// formatPrices
let formatPrices = null;
let formatPricesModule = null;
try {
    formatPricesModule = require('./formatPrices');
    formatPrices = formatPricesModule.formatPrices;
} catch (error) { }

// Task
let Task = null;
let TaskModule = null;
try {
    TaskModule = require('./user-data/Task');
    Task = TaskModule.Task;
} catch (error) { }

// User
let User = null;
let UserModule = null;
try {
    UserModule = require('./user-data/User');
    User = UserModule.User;
} catch (error) { }

describe('JS Classes and Modules', () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        // You can listen for other console methods as well https://github.com/jsdom/jsdom#virtual-consoles
        virtualConsole.on('log', consoleLogListener);

        const filePath = path.join(__dirname, 'index.html');
        htmlString = await readTextFile(filePath);

        // Create fake DOM
        dom = new JSDOM(htmlString, {
            runScripts: 'dangerously',
            resources: 'usable',
            virtualConsole,
        });
        document = dom.window.document;
    });

    describe('JS Modules', () => {
        describe('isValidName.js', () => {
            it('should create isValidName.js file', () => {
                expect(isValidNameModule).not.toBeNull();
            });

            it('should return true/false', () => {
                expect(isValid('SomeName')).toBe(true);
                expect(isValid(null)).toBe(false);
            });
        });

        describe('GREETING.js', () => {
            it('should create GREETING.js file', () => {
                expect(GREETING_Module).not.toBeNull();
            });

            it('should export GREETING constant', () => {
                expect(GREETING).toBe('Hello');
            });
        });

        describe('sayHelloToUser function', () => {
            it('should return a user greeting', () => {
                expect(sayHelloToUser('Bob')).toBe('Hello, Bob!');
                expect(sayHelloToUser('')).toBe('Invalid name');
            });
        });

        describe('formatPrices', () => {
            describe('CURRENCY_SYMBOLS.js', () => {
                it('should create CURRENCY_SYMBOLS.js file', () => {
                    expect(CURRENCY_SYMBOLS_Module).not.toBeNull();
                });

                it('should export CURRENCY_SYMBOLS constant', () => {
                    expect(CURRENCY_SYMBOLS).toStrictEqual({
                        US: '$',
                        EUR: '€',
                        JPN: '¥',
                    });
                });
            });

            describe('formatWithCurrency.js', () => {
                it('should create formatWithCurrency.js file', () => {
                    expect(formatWithCurrencyModule).not.toBeNull();
                });

                it('should format number with currency', () => {
                    expect(formatWithCurrency(5, '¥')).toBe(`5.00¥`);
                });
            });

            describe('formatPrices function', () => {
                it('should create formatPrices.js file', () => {
                    expect(formatPricesModule).not.toBeNull();
                });

                it('should format prices', () => {
                    const prices = [10, 20, 44];
                    const expectedResult = ['10.00€', '20.00€', '44.00€']

                    expect(formatPrices(prices, 'EUR'))
                        .toStrictEqual(expectedResult);
                });
            });
        });
    });

    describe('JS Classes', () => {
        describe('Task.js', () => {
            let name;
            let task;

            beforeEach(() => {
                name = 'Task Name';
                task = new Task(name);
            });

            it('should create Task.js file', () => {
                expect(TaskModule).not.toBeNull();
            });

            it('should add name property in constructor', () => {
                expect(task.name).toBe(name);
            });

            it('should set an empty string to a description property by default', () => {
                expect(task.description).toBe('');
            });

            it('should have getter', () => {
                const propertyDescriptor = Object
                    .getOwnPropertyDescriptor(Task.prototype, 'description');

                expect(propertyDescriptor.get instanceof Function).toBe(true);
            });

            it('should have setter', () => {
                const propertyDescriptor = Object
                    .getOwnPropertyDescriptor(Task.prototype, 'description');

                expect(propertyDescriptor.set instanceof Function).toBe(true);
            });

            it('should set string value to description', () => {
                const newDescription = 'newDescription';
                task.description = newDescription;

                expect(task.description).toBe(newDescription);
            });

            it('should set nothing to description when not string value', () => {
                const newDescription = 'newDescription';
                task.description = newDescription;

                task.description = 777;

                expect(task.description).toBe(newDescription);
            });
        });

        describe('User.js', () => {
            let firstName;
            let lastName;

            let user;

            beforeEach(() => {
                firstName = 'My firstName';
                lastName = 'My lastName';

                user = new User(firstName, lastName)
            });

            it('should create User.js file', () => {
                expect(UserModule).not.toBeNull();
            });

            describe('constructor', () => {
                it('should add firstName in constructor', () => {
                    expect(user.firstName).toBe(firstName);
                });

                it('should add lastName in constructor', () => {
                    expect(user.lastName).toBe(lastName);
                });

                it('should set default value for an age property', () => {
                    expect(user.age).toBe(1);
                });

                it('should set default value for a tasks property', () => {
                    expect(user.tasks).toStrictEqual([]);
                });
            });

            describe('fullName getter', () => {
                it('should have getter', () => {
                    const propertyDescriptor = Object
                        .getOwnPropertyDescriptor(User.prototype, 'fullName');

                    expect(propertyDescriptor.get instanceof Function).toBe(true);
                });

                it('should return a full name of a user', () => {
                    expect(user.fullName).toBe(`${user.firstName} ${user.lastName}`);
                });
            });

            describe('setAge method', () => {
                it('should not set NaN as an age', () => {
                    user.setAge(NaN);

                    expect(user.age).toBe(1);
                });

                it('should not set Infinity as an age', () => {
                    user.setAge(Infinity);

                    expect(user.age).toBe(1);
                });

                it('should not set -Infinity as an age', () => {
                    user.setAge(Infinity);

                    expect(user.age).toBe(1);
                });

                it('should not set a negative number as an age', () => {
                    user.setAge(-100);

                    expect(user.age).toBe(1);
                });

                it('should set a positive number as an age', () => {
                    user.setAge(77);

                    expect(user.age).toBe(77);
                });
            });

            describe('addTasks method', () => {
                let tasks1;
                let tasks2;

                beforeEach(() => {
                    tasks1 = [
                        new Task('Task1'),
                        new Task('Task2'),
                        new Task('Task3'),
                    ];

                    tasks2 = [
                        new Task('Task4'),
                        new Task('Task5'),
                    ];
                });

                it('should add tasks when they are empty', () => {
                    const expectedResult = [
                        new Task('Task1'),
                        new Task('Task2'),
                        new Task('Task3'),
                    ];
                    
                    user.addTasks(tasks1);
                    
                    expect(user.tasks).toStrictEqual(expectedResult);
                });

                it('should add tasks when there are some already', () => {
                    user.addTasks(tasks2);
                    user.addTasks(tasks1);
                    
                    const expectedResult = [
                        new Task('Task4'),
                        new Task('Task5'),
                        new Task('Task1'),
                        new Task('Task2'),
                        new Task('Task3'),
                    ];
                    
                    expect(user.tasks).toStrictEqual(expectedResult);
                });

                it('should not add task if it is not Task instance', () => {
                    const expectedResult = [
                    ];
                    
                    user.addTasks([new User('', '')]);

                    expect(user.tasks).toStrictEqual(expectedResult);
                });

                it('should add to tasks only instances of Task', () => {
                    const expectedResult = [
                        new Task('Task1'),
                        new Task('Task2'),
                        new Task('Task3'),
                        new Task('Task4'),
                        new Task('Task5'),
                    ];
                    
                    const tasks = [...tasks1, new Error, [], ...tasks2];

                    user.addTasks(tasks);

                    expect(user.tasks).toStrictEqual(expectedResult);
                });
            });

            describe('getTasksCount method', () => {
                let tasks;

                beforeEach(() => {
                    tasks = [
                        new Task('Task1'),
                        new Task('Task2'),
                        new Task('Task3'),
                    ];
                });

                it('should return 0 by default', () => {
                    expect(user.getTasksCount()).toBe(0);
                });

                it('should return tasks count', () => {
                    user.addTasks(tasks);

                    expect(user.getTasksCount()).toBe(3);
                });
            });
        });
    });

});
