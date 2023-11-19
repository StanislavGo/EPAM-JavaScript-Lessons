const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const { readTextFile } = require('../test-utils/readTextFile');
const { addFileProtocolToElements } = require('../test-utils/addFileProtocolToElements');

const {
    getFullDaysBeforeNewYear,
    formatWithWeekday,
    isValidDate,
    isAfter,
    formatDistanceToNow,
} = require('./script');

describe('JavaScript Date and methods', () => {
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

        // Replace CSS href with absolute paths
        const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
        addFileProtocolToElements(linkElements, 'href', __dirname);
    });

    describe('getFullDaysBeforeNewYear', () => {
        it('should return 4 days for 28th of December', () => {
            expect(getFullDaysBeforeNewYear(28, 12)).toBe(4);
        });

        it('should return 1 day for 31st of December', () => {
            expect(getFullDaysBeforeNewYear(31, 12)).toBe(1);
        });

        it('should return null for no parameters', () => {
            expect(getFullDaysBeforeNewYear()).toBe(null);
        });

        it('should return null for zeros', () => {
            expect(getFullDaysBeforeNewYear(0, 0)).toBe(null);
        });

        it('should return null for negative date', () => {
            expect(getFullDaysBeforeNewYear(-7, 1)).toBe(null);
        });

        it('should return null for negative month', () => {
            expect(getFullDaysBeforeNewYear(1, -7)).toBe(null);
        });

        it('should return null for Infinity date', () => {
            expect(getFullDaysBeforeNewYear(Infinity, 1)).toBe(null);
        });

        it('should return null for Infinity month', () => {
            expect(getFullDaysBeforeNewYear(1, Infinity)).toBe(null);
        });

        it('should return null for -Infinity date', () => {
            expect(getFullDaysBeforeNewYear(-Infinity, 1)).toBe(null);
        });

        it('should return null for -Infinity month', () => {
            expect(getFullDaysBeforeNewYear(1, -Infinity)).toBe(null);
        });

        it('should return null for NaN date', () => {
            expect(getFullDaysBeforeNewYear(NaN, 7)).toBe(null);
        });

        it('should return null for NaN month', () => {
            expect(getFullDaysBeforeNewYear(NaN, 7)).toBe(null);
        });
    });

    describe('formatWithWeekday', () => {
        it('should return formatted date for Monday', () => {
            const date = new Date(2021, 10, 15);

            expect(formatWithWeekday(date))
                .toBe('Monday, 15, November 2021')
        });

        it('should return formatted date for Tuesday', () => {
            const date = new Date(2021, 6, 20);

            expect(formatWithWeekday(date))
                .toBe('Tuesday, 20, July 2021')
        });

        it('should return formatted date for Wednesday', () => {
            const date = new Date(2018, 3, 11);

            expect(formatWithWeekday(date))
                .toBe('Wednesday, 11, April 2018')
        });

        it('should return formatted date for Thursday', () => {
            const date = new Date(2016, 0, 28);

            expect(formatWithWeekday(date))
                .toBe('Thursday, 28, January 2016')
        });

        it('should return formatted date for Friday', () => {
            const date = new Date(2013, 5, 28);

            expect(formatWithWeekday(date))
                .toBe('Friday, 28, June 2013')
        });

        it('should return formatted date for Saturday', () => {
            const date = new Date(2011, 1, 5);

            expect(formatWithWeekday(date))
                .toBe('Saturday, 5, February 2011')
        });

        it('should return formatted date for Sunday', () => {
            const date = new Date(2010, 4, 16);

            expect(formatWithWeekday(date))
                .toBe('Sunday, 16, May 2010');
        });

        it('should return an empty string for null', () => {
            expect(formatWithWeekday(null))
                .toBe('');
        });

        it('should return an empty string for undefined', () => {
            expect(formatWithWeekday())
                .toBe('');
        });
    });

    describe('isValidDate', () => {
        it('should be valid', () => {
            expect(isValidDate(new Date())).toBe(true);
        });

        it('should be invalid for invalid date', () => {
            expect(isValidDate(new Date(undefined))).toBe(false);
        });

        it('should be invalid for null', () => {
            expect(isValidDate(null)).toBe(false);
        });

        it('should be invalid for undefined', () => {
            expect(isValidDate(undefined)).toBe(false);
        });

        it('should be invalid for an empty object', () => {
            expect(isValidDate({})).toBe(false);
        });

        it('should be invalid for a number', () => {
            expect(isValidDate(3333)).toBe(false);
        });

        it('should be invalid for an empty string', () => {
            expect(isValidDate('')).toBe(false);
        });

        it('should be invalid for an empty array', () => {
            expect(isValidDate([])).toBe(false);
        });
    });

    describe('isAfter', () => {
        let date1;
        let date2;

        beforeEach(() => {
            date1 = new Date(2022, 22, 10);
            date2 = new Date(2022, 23, 10);
        });

        it('should mark date as after', () => {
            expect(isAfter(date2, date1)).toBe(true);
        });

        it('should mark date as before', () => {
            expect(isAfter(date1, date2)).toBe(false);
        });

        it('should return false when invalid date', () => {
            expect(isAfter(date1, new Date(undefined))).toBe(false);
        });

        it('should return false when invalid date to compare', () => {
            expect(isAfter(new Date(undefined), date1)).toBe(false);
        });
    });

    describe('formatDistanceToNow', () => {
        it('should format to "less than a minute"', () => {
            const date = new Date(new Date() - 29 * 1000);

            expect(formatDistanceToNow(date))
                .toBe('less than a minute');
        });

        it('should format to "1 minute"', () => {
            const date = new Date(new Date() - 89 * 1000);

            expect(formatDistanceToNow(date))
                .toBe('1 minute');
        });

        it('should format to "34 minutes"', () => {
            const date = new Date(new Date() -  43.3 * 60 * 1000);

            expect(formatDistanceToNow(date))
                .toBe('43 minutes');
        });

        it('should format to "about 1 hour"', () => {
            const date = new Date(new Date() -  89 * 60 * 1000);

            expect(formatDistanceToNow(date))
                .toBe('about 1 hour');
        });

        it('should format to date', () => {
            const date = new Date(2012, 6, 22, 8, 7, 6);

            expect(formatDistanceToNow(date))
                .toBe('22.07.2012 08:07:06');
        });

        it('should return "Date is unknown" when null', () => {
            const date = null;

            expect(formatDistanceToNow(date))
                .toBe('Date is unknown');
        });

        it('should return "Date is unknown" when undefefined', () => {
            expect(formatDistanceToNow())
                .toBe('Date is unknown');
        });
    });
});
