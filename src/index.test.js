const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const { readTextFile } = require("../test-utils/readTextFile");
const { waitBrowserLoadEvent } = require("../test-utils/waitBrowserEvent");
const {
    addFileProtocolToElements,
} = require("../test-utils/addFileProtocolToElements");
const {
    replaceScriptSrcFilePathInString,
} = require("../test-utils/replaceScriptSrcFilePathInString");

describe("Arrays", () => {
    let htmlString;

    let dom;
    let document;

    let virtualConsole;
    let consoleLogListener;

    beforeEach(async () => {
        consoleLogListener = jest.fn();
        virtualConsole = new VirtualConsole();
        // You can listen for other console methods as well https://github.com/jsdom/jsdom#virtual-consoles
        virtualConsole.on("log", consoleLogListener);

        const filePath = path.join(__dirname, "index.html");
        htmlString = await readTextFile(filePath);
        const newHtmlString = replaceScriptSrcFilePathInString(
            htmlString,
            ["script.js"],
            __dirname
        );

        // Create fake DOM
        dom = new JSDOM(newHtmlString, {
            runScripts: "dangerously",
            resources: "usable",
            virtualConsole,
        });
        document = dom.window.document;

        // Replace CSS href with absolute paths
        const linkElements = document.querySelectorAll(
            'link[rel="stylesheet"]'
        );
        addFileProtocolToElements(linkElements, "href", __dirname);
    });

    describe("addNumber", () => {
        it("should add number as first element for given number 8", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 2, 3];
            let number = 8;

            const addNumber = dom.window.addNumber;

            expect(addNumber(arr, number)).toEqual([8, 1, 2, 3]);
        });

        it("should add number to the end of an array for given number -8", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 2, 3];
            let number = -8;

            const addNumber = dom.window.addNumber;

            expect(addNumber(arr, number)).toEqual([1, 2, 3, -8]);
        });

        it("should return original array for given number 0", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 2, 3];
            let number = 0;

            const addNumber = dom.window.addNumber;

            expect(addNumber(arr, number)).toEqual([1, 2, 3]);
        });
    });

    describe("compareArrays", () => {
        it("should return true if the same array is passed as a parameter", async () => {
            await waitBrowserLoadEvent(document);

            const compareArrays = dom.window.compareArrays;

            const arr = [1, 2];
            let result = compareArrays(arr, arr);

            expect(result).toBe(true);
        });

        it("should return false if arrays not equal", async () => {
            await waitBrowserLoadEvent(document);

            const compareArrays = dom.window.compareArrays;
            const result = compareArrays([1, 1], [1, 2]);

            expect(result).toBe(false);
        });

        it("should return true if arrays are equal", async () => {
            await waitBrowserLoadEvent(document);

            const compareArrays = dom.window.compareArrays;
            const result = compareArrays(["Hello", 1, NaN], ["Hello", 1, NaN]);

            expect(result).toBe(true);
        });
    });

    describe("getNumberOfEven", () => {
        it("should return 2 for given input [1,2,3,4]", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 2, 3, 4];

            const getNumberOfEven = dom.window.getNumberOfEven;

            expect(getNumberOfEven(arr)).toBe(2);
        });

        it("should return 0 if the array does not contain even numbers", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 9, 3, -11];

            const getNumberOfEven = dom.window.getNumberOfEven;

            expect(getNumberOfEven(arr)).toBe(0);
        });
    });

    describe("getSubarray", () => {
        it("should return array [1,2,5,8]", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 2, 5, 8, 7, 90];
            let data = 8;

            const getSubarray = dom.window.getSubarray;

            expect(getSubarray(arr, data)).toEqual([1, 2, 5, 8]);
        });

        it("should return [] if element not found", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [1, 2, 5, 8, 7, 90];
            let data = 3;

            const getSubarray = dom.window.getSubarray;

            expect(getSubarray(arr, data)).toEqual([]);
        });

        it('should return array ["d", "ds", "asdx", "r"]', async () => {
            await waitBrowserLoadEvent(document);

            const arr = ["d", "ds", "asdx", "r", "w"];
            let data = "r";

            const getSubarray = dom.window.getSubarray;

            expect(getSubarray(arr, data)).toEqual(["d", "ds", "asdx", "r"]);
        });
    });

    describe("getDuplicateValues", () => {
        it("should return [1,2] for given input [1, 1, 2, 3, 6, 54, 1, 2]", async () => {
            await waitBrowserLoadEvent(document);

            const getDuplicateValues = dom.window.getDuplicateValues;
            const arr = [1, 1, 2, 3, 6, 54, 1, 2];

            expect(getDuplicateValues(arr).sort()).toEqual([1, 2].sort());
        });

        it('should return [true, NaN, "4"] for given input ["4", 4, true, true, NaN, "4", NaN] ', async () => {
            await waitBrowserLoadEvent(document);

            const getDuplicateValues = dom.window.getDuplicateValues;
            const arr = ["4", 4, true, true, NaN, "4", NaN];

            expect(getDuplicateValues(arr).sort()).toEqual([true, NaN, "4"].sort());
        });
    });

    describe("getMaxNumbers", () => {
        it("should return array [1,3]", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [
                [0, 1],
                [-3, 3],
            ];

            const getMaxNumbers = dom.window.getMaxNumbers;

            expect(getMaxNumbers(arr)).toEqual([1, 3]);
        });

        it("should return array [1,Infinity, 20]", async () => {
            await waitBrowserLoadEvent(document);

            const arr = [
                [0, 1],
                [-3, 3, Infinity],
                [10, -8, [20]],
            ];

            const getMaxNumbers = dom.window.getMaxNumbers;

            expect(getMaxNumbers(arr)).toEqual([1, Infinity, 20]);
        });
    });
});
