const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const { readTextFile } = require('../test-utils/readTextFile');
const { waitBrowserLoadEvent } = require('../test-utils/waitBrowserEvent');
const { addFileProtocolToElements } = require('../test-utils/addFileProtocolToElements');
const { replaceScriptSrcFilePathInString } = require('../test-utils/replaceScriptSrcFilePathInString');

describe('Object Type', () => {
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
        const newHtmlString = replaceScriptSrcFilePathInString(htmlString, ['script.js'], __dirname);

        // Create fake DOM
        dom = new JSDOM(newHtmlString, {
            runScripts: 'dangerously',
            resources: 'usable',
            virtualConsole,
        });
        document = dom.window.document;

        // Replace CSS href with absolute paths
        const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
        addFileProtocolToElements(linkElements, 'href', __dirname);
    });

    describe('createUser', () => {
        it('should have firstName property', async () => {
            await waitBrowserLoadEvent(document);

            const createUser = dom.window.createUser;
            const user = createUser('Will', 'Smith');

            expect(user.firstName).toBe('Will');
        });

        it('should have lastName property', async () => {
            await waitBrowserLoadEvent(document);

            const createUser = dom.window.createUser;
            const user = createUser('Will', 'Smith');

            expect(user.lastName).toBe('Smith');
        });
    });

    describe('getFullName', () => {
        it('should return a full name', async () => {
            await waitBrowserLoadEvent(document);

            const user = {
                firstName: 'Will',
                lastName: 'Smith',
            };

            const getFullName = dom.window.getFullName;

            expect(getFullName(user)).toBe('Will Smith');
        });

        it('should return an empty string when no user', async () => {
            await waitBrowserLoadEvent(document);

            const getFullName = dom.window.getFullName;

            expect(getFullName()).toBe('');
        });
    });

    describe('getWidth', () => {
        it('should return width when it exists', async () => {
            await waitBrowserLoadEvent(document);

            const params = {
                styling: {
                    sizes: {
                        width: '999px',
                        height: '200px'
                    }
                }
            };

            const getWidth = dom.window.getWidth;

            expect(getWidth(params)).toBe('999px');
        });

        it('should return null when no "sizes" object', async () => {
            await waitBrowserLoadEvent(document);

            const params = {
                styling: {}
            };

            const getWidth = dom.window.getWidth;

            expect(getWidth(params)).toBe(null);
        });

        it('should return null when no "styling" object', async () => {
            await waitBrowserLoadEvent(document);

            const params = {};

            const getWidth = dom.window.getWidth;

            expect(getWidth(params)).toBe(null);
        });
    });

    describe('extendObject', () => {
        let obj;

        beforeEach(() => {
            obj = {
                iam: 'object',
            };
        });

        it('should return new object', async () => {
            await waitBrowserLoadEvent(document);

            const extendObject = dom.window.extendObject;
            const newObj = extendObject(obj, true);

            expect(!!newObj && newObj !== obj).toBe(true);
        });

        it('should add isValid property with true to cloned object', async () => {
            await waitBrowserLoadEvent(document);

            const extendObject = dom.window.extendObject;

            expect(extendObject(obj, true)).toEqual({
                iam: 'object',
                isValid: true,
            });
        });

        it('should add isValid property with false to cloned object', async () => {
            await waitBrowserLoadEvent(document);

            const extendObject = dom.window.extendObject;

            expect(extendObject(obj, false)).toEqual({
                iam: 'object',
                isValid: false,
            });
        });
    });

    describe('sumPrices', () => {
        it('should sum prices from fields', async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: 'Stan',
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });

        it('should ignore Infinity value', async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: 'Stan',
                inf: Infinity,
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });

        it('should ignore -Infinity value', async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: 'Stan',
                inf: -Infinity,
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });

        it('should ignore NaN value', async () => {
            await waitBrowserLoadEvent(document);

            const prices = {
                some: 100,
                other: 222,
                price: 333,
                isValid: true,
                name: 'Stan',
                someNaN: NaN,
            };

            const sumPrices = dom.window.sumPrices;

            expect(sumPrices(prices)).toBe(655);
        });
    });

    describe('createUserWithFullName', () => {
        it('should have firstName property', async () => {
            await waitBrowserLoadEvent(document);

            const createUser = dom.window.createUser;
            const user = createUser('Will', 'Smith');

            expect(user.firstName).toBe('Will');
        });

        it('should have lastName property', async () => {
            await waitBrowserLoadEvent(document);

            const createUser = dom.window.createUser;
            const user = createUser('Will', 'Smith');

            expect(user.lastName).toBe('Smith');
        });

        it('should create object with setFirstName method', async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName('Bill', 'Murray');
            const newFirstName = 'Robert';
            user.setFirstName(newFirstName);

            expect(user.firstName).toBe(newFirstName);
        });

        it('should create object with setLastName method', async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName('Bill', 'Murray');
            const newLastName = 'Downey';
            user.setLastName(newLastName);

            expect(user.lastName).toBe(newLastName);
        });

        it('should create object with getFullName method', async () => {
            await waitBrowserLoadEvent(document);

            const createUserWithFullName = dom.window.createUserWithFullName;
            const user = createUserWithFullName('Bill', 'Murray');

            expect(user.getFullName()).toBe('Bill Murray');
        });
    });
});
