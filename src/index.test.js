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

describe("Object Type", () => {
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

    describe("sumSequence", () => {
        it("should return 0.94 for given input 4", async () => {
            await waitBrowserLoadEvent(document);

            const sumSequence = dom.window.sumSequence;

            expect(sumSequence(4)).toBe("0.94");
        });

        it("should return 0.98 for given input 6", async () => {
            await waitBrowserLoadEvent(document);

            const sumSequence = dom.window.sumSequence;

            expect(sumSequence(6)).toBe("0.98");
        });
    });

    describe("mergeArrays", () => {
        it("should return array [1, 2, 3, 5, 6, 9] for given input ([1,2,3],[5,6],[9])", async () => {
            await waitBrowserLoadEvent(document);

            const mergeArrays = dom.window.mergeArrays;
            const arr1 = [1, 2, 3];
            const arr2 = [5, 6];
            const arr3 = [9];

            const merge = mergeArrays(arr1, arr2, arr3);

            expect(merge).toEqual([1, 2, 3, 5, 6, 9]);
        });

        it("should return array [1, 2, 3, 5, 6] for given input ([1,2,3],[5,6])", async () => {
            await waitBrowserLoadEvent(document);

            const mergeArrays = dom.window.mergeArrays;
            const arr1 = [1, 2, 3];
            const arr2 = [5, 6];

            const merge = mergeArrays(arr1, arr2);

            expect(merge).toEqual([1, 2, 3, 5, 6]);
        });

        it("should return array []", async () => {
            await waitBrowserLoadEvent(document);

            const mergeArrays = dom.window.mergeArrays;

            const merge = mergeArrays();

            expect(merge).toEqual([]);
        });
    });

    describe("isPalindrome", () => {
        it("should return true for given input 'abab'", async () => {
            await waitBrowserLoadEvent(document);

            const isPalindrome = dom.window.isPalindrome;
            expect(isPalindrome("abab")).toBe(true);
        });

        it("should return true for given input 'ababa'", async () => {
            await waitBrowserLoadEvent(document);

            const isPalindrome = dom.window.isPalindrome;
            expect(isPalindrome("ababa")).toBe(true);
        });

        it("should return false for given input 'ab'", async () => {
            await waitBrowserLoadEvent(document);

            const isPalindrome = dom.window.isPalindrome;

            expect(isPalindrome("ab")).toBe(false);
        });
        it("should return false for given input 'abc'", async () => {
            await waitBrowserLoadEvent(document);

            const isPalindrome = dom.window.isPalindrome;

            expect(isPalindrome("abc")).toBe(false);
        });
    });

    describe("countLetters", () => {
        it("should return object {a: 4, b: 3} for given input 'abababa'", async () => {
            await waitBrowserLoadEvent(document);

            const countLetters = dom.window.countLetters;

            expect(countLetters("abababa")).toEqual({ a: 4, b: 3 });
        });

        it("should return object {a: 1, s: 2, d: 3, f: 4} for given input 'asdf sdf df f'", async () => {
            await waitBrowserLoadEvent(document);

            const countLetters = dom.window.countLetters;

            expect(countLetters("asdf sdf df f")).toEqual({
                a: 1,
                s: 2,
                d: 3,
                f: 4,
            });
        });

        it("should return object {} for given input ''", async () => {
            await waitBrowserLoadEvent(document);

            const countLetters = dom.window.countLetters;

            expect(countLetters("")).toEqual({});
        });
    });

    describe("divideArrays", () => {
        it("should return array [[1,2],[3,4],[5]] for given input ([1, 2, 3, 4, 5], 2)", async () => {
            await waitBrowserLoadEvent(document);

            const divideArrays = dom.window.divideArrays;
            const arr = [1, 2, 3, 4, 5];
            const size = 2;

            expect(divideArrays(arr, size)).toEqual([[1, 2], [3, 4], [5]]);
        });

        it("should return array [[1,2,3,4,5]] for given input ([1, 2, 3, 4, 5], 8)", async () => {
            await waitBrowserLoadEvent(document);

            const divideArrays = dom.window.divideArrays;
            const arr = [1, 2, 3, 4, 5];
            const size = 8;

            expect(divideArrays(arr, size)).toEqual([[1, 2, 3, 4, 5]]);
        });

        it("should return [] for given input ([1, 2, 3, 4, 5], -1)", async () => {
            await waitBrowserLoadEvent(document);

            const divideArrays = dom.window.divideArrays;
            const arr = [1, 2, 3, 4, 5];
            const size = -1;

            expect(divideArrays(arr, size)).toEqual([]);
        });
    });

    describe("encrypt", () => {
        it("should return CRKQFLK for given input ('FUNCTION', 3)", async () => {
            await waitBrowserLoadEvent(document);

            const encrypt = dom.window.encrypt;
            expect(encrypt("FUNCTION", 3)).toBe("CRKZQFLK");
        });

        it("should return HYTYQAPNR for given input ('JAVASCRIPT',2)", async () => {
            await waitBrowserLoadEvent(document);

            const encrypt = dom.window.encrypt;
            expect(encrypt("JAVASCRIPT", 2)).toBe("HYTYQAPGNR");
        });

        it("should return HELLO for given input ('HELLO', 0)", async () => {
            await waitBrowserLoadEvent(document);

            const encrypt = dom.window.encrypt;

            expect(encrypt("HELLO", 0)).toBe("HELLO");
        });
        it("should return HELLO for given input ('HELLO', -4)", async () => {
            await waitBrowserLoadEvent(document);

            const encrypt = dom.window.encrypt;

            expect(encrypt("HELLO", -4)).toBe("HELLO");
        });
    });
});
