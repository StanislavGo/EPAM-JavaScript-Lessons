const path = require('path');
const { JSDOM, VirtualConsole } = require('jsdom');

const { waitBrowserLoadEvent } = require('../test-utils/waitBrowserEvent');
const { readTextFile } = require('../test-utils/readTextFile');

// isElementVisible
let isElementVisible = null;
let isElementVisibleModule = null;
try {
    isElementVisibleModule = require('./isElementVisible');
    isElementVisible = isElementVisibleModule.isElementVisible;
} catch (error) { }

// isElementScrolled
let isElementScrolled = null;
let isElementScrolledModule = null;
try {
    isElementScrolledModule = require('./isElementScrolled');
    isElementScrolled = isElementScrolledModule.isElementScrolled;
} catch (error) { }

// getPageData
let getPageData = null;
let getPageDataModule = null;
try {
    getPageDataModule = require('./getPageData');
    getPageData = getPageDataModule.getPageData;
} catch (error) { }

// createToast
let createToast = null;
let createToastModule = null;
try {
    createToastModule = require('./createToast');
    createToast = createToastModule.createToast;
} catch (error) { }

// createBlurredCoverElement
let createBlurredCoverElement = null;
let createBlurredCoverElementModule = null;
try {
    createBlurredCoverElementModule = require('./createBlurredCoverElement');
    createBlurredCoverElement = createBlurredCoverElementModule.createBlurredCoverElement;
} catch (error) { }

describe('DOM element coordinates and dimensions', () => {
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

    describe('isElementVisible.js', () => {
        it('should create isElementVisible.js file', () => {
            expect(isElementVisibleModule).not.toBeNull();
        });

        it('should return false when null', () => {
            expect(isElementVisible(null)).toBe(false);
        });

        it('should return false when undefined', () => {
            expect(isElementVisible()).toBe(false);
        });

        it('should return true when element has height', () => {
            const element = {
                offsetHeight: 100,
                offsetWidth: 0,
            };

            expect(isElementVisible(element)).toBe(true);
        });

        it('should return true when element has width', () => {
            const element = {
                offsetHeight: 0,
                offsetWidth: 100,
            };

            expect(isElementVisible(element)).toBe(true);
        });
    });

    describe('isElementScrolled.js', () => {
        let element;
        
        beforeEach(() => {
            element = {
                scrollLeft: 777,
                scrollTop: 111,
            };
        });

        it('should create isElementScrolled.js file', () => {
            expect(isElementScrolledModule).not.toBeNull();
        });

        it('should return a default object when null', () => {
            expect(isElementScrolled(null)).toStrictEqual({
                isScrolled: null,
                scrollLeft: null,
                scrollTop: null,
            });
        });

        it('should return a default object when undefined', () => {
            expect(isElementScrolled()).toStrictEqual({
                isScrolled: null,
                scrollLeft: null,
                scrollTop: null,
            });
        });

        it('should return get scroll left from element', () => {
            expect(isElementScrolled(element)).toStrictEqual(expect.objectContaining({
                scrollLeft: 777,
            }));
        });

        it('should return get scroll top from element', () => {
            expect(isElementScrolled(element)).toStrictEqual(expect.objectContaining({
                scrollTop: 111,
            }));
        });

        it('should be marked as scrolled', () => {
            expect(isElementScrolled(element)).toStrictEqual(expect.objectContaining({
                isScrolled: true,
            }));
        });

        it('should be marked as not scrolled', () => {
            const notScrolledElement = {
                scrollLeft: 0,
                scrollTop: 0,
            };

            expect(isElementScrolled(notScrolledElement)).toStrictEqual(expect.objectContaining({
                isScrolled: false,
            }));
        });
    });

    describe('getPageData', () => {
        let documentBodyMock;
        let documentElementMock;
        let documentMock;
        let windowMock;

        beforeEach(() => {
            documentElementMock = {
                scrollHeight: 111,
                offsetHeight: 111,
                clientHeight: 111,

                scrollWidth: 222,
                offsetWidth: 222,
                clientWidth: 222,
            };

            documentBodyMock = {
                scrollHeight: 111,
                offsetHeight: 111,
                clientHeight: 111,

                scrollWidth: 222,
                offsetWidth: 222,
                clientWidth: 222,
            };
            
            documentMock = {
                documentElement: documentElementMock,
                body: documentBodyMock,
            };
            
            windowMock = {
                document: documentMock,
                pageXOffset: 1000,
                pageYOffset: 2000,
                scrollX: 1000,
                scrollY: 2000,
            };

            global.window = windowMock;
            global.document = documentMock;

            global.pageXOffset = windowMock.pageXOffset;
            global.pageYOffset = windowMock.pageYOffset;
        });

        it('should create getPageData.js file', () => {
            expect(getPageDataModule).not.toBeNull();
        });
        
        it('should return correct windowHeight', () => {
            expect(getPageData()).toEqual(expect.objectContaining({
                windowHeight: 111,
            }));
        });

        it('should return correct windowWidth', () => {
            expect(getPageData()).toEqual(expect.objectContaining({
                windowWidth: 222,
            }));
        });

        it('should return correct scroll from top', () => {
            expect(getPageData()).toEqual(expect.objectContaining({
                currentScrollFromTop: 2000,
            }));
        });

        it('should return correct scroll from left', () => {
            expect(getPageData()).toEqual(expect.objectContaining({
                currentScrollFromLeft: 1000,
            }));
        });

        describe('document dimensions', () => {
            it('should take document height from documentElement when it is bigger', () => {
                documentElementMock.clientHeight = 112;
                documentElementMock.offsetHeight = 112;
                documentElementMock.scrollHeight = 112;

                expect(getPageData()).toEqual(expect.objectContaining({
                    documentHeight: 112,
                }));
            });

            it('should take document height from body when it is bigger', () => {
                documentBodyMock.clientHeight = 113;
                documentBodyMock.offsetHeight = 113;
                documentBodyMock.scrollHeight = 113;

                expect(getPageData()).toEqual(expect.objectContaining({
                    documentHeight: 113,
                }));
            });

            it('should take document width from documentElement when it is bigger', () => {
                documentElementMock.clientWidth = 223;
                documentElementMock.offsetWidth = 223;
                documentElementMock.scrollWidth = 223;

                expect(getPageData()).toEqual(expect.objectContaining({
                    documentWidth: 223,
                }));
            });

            it('should take document height from body when it is bigger', () => {
                documentBodyMock.clientWidth = 224;
                documentBodyMock.offsetWidth = 224;
                documentBodyMock.scrollWidth = 224;

                expect(getPageData()).toEqual(expect.objectContaining({
                    documentWidth: 224,
                }));
            });
        });
    });

    describe('createToast', () => {
        let element;
        let toast;

        beforeEach(() => {
            global.document = document;
            global.window = {
                document,
            };

            element = document.createElement('span');
            element.textContent = 'I am toast text';

            toast = createToast(element);
        });

        it('should create createToast.js file', () => {
            expect(createToastModule).not.toBeNull();
        });
        
        it('should create a <div> element', () => {
            expect(toast.tagName).toBe('DIV')
        });

        it('should add "toast" class name to a <div> element', () => {
            expect(toast.classList.contains('toast')).toBe(true)
        });

        it('should add styles for position fixed', () => {
            expect(toast.style).toEqual(expect.objectContaining({
                position: 'fixed',
                top: '20px',
                right: '20px',
            }));
        });

        it('should insert element as an only child', () => {
            let elementInside = toast.firstElementChild;

            expect(elementInside).toEqual(element);
        });

        it('toast should not be inserted to the page', async () => {
            await waitBrowserLoadEvent(document);

            const createdElement = createToast(element);
            let toastOnThePagedocument = document.querySelector('.toast');
            
            const isNotOnThePage = !!createdElement && 
                toastOnThePagedocument === null;

            expect(isNotOnThePage).toBe(true);
        });
    });

    describe('createBlurredCoverElement', () => {
        let element;
        let getBoundingClientRect;

        let pageYOffset;
        let pageXOffset;

        let clientRect;
        let blurredCoverElement;

        beforeEach(() => {
            pageYOffset = 0;
            pageXOffset = 0;

            global.document = document;
            global.window = {
                document,
                pageXOffset,
                pageYOffset,
                scrollX: pageXOffset,
                scrollY: pageYOffset,
            };

            element = document.createElement('div');
            element.textContent = 'I am element to cover';

            clientRect = {
                top: 10,
                left: 20,
                bottom: 110,
                right: 220,
                height: 100,
                width: 200,
            };

            getBoundingClientRect = jest.fn();
            getBoundingClientRect.mockReturnValue(clientRect);

            element.getBoundingClientRect = getBoundingClientRect;

            blurredCoverElement = createBlurredCoverElement(element);
        });

        it('should create createBlurredCoverElement.js file', () => {
            expect(createBlurredCoverElementModule).not.toBeNull();
        });
        
        it('should create a <div> element', () => {
            expect(blurredCoverElement.tagName).toBe('DIV')
        });

        it('should add "cover" class name to a <div> element', () => {
            expect(blurredCoverElement.classList.contains('cover')).toBe(true)
        });

        it('blur cover element should have an absolute positioning', () => {
            expect(blurredCoverElement.style).toEqual(expect.objectContaining({
                position: 'absolute',
            }));
        });

        it('blur cover element should have the same width/height as original element', () => {
            let blurredCoverElement = createBlurredCoverElement(element);
            
            expect(blurredCoverElement.style).toEqual(expect.objectContaining({
                width: '200px',
                height: '100px',
            }));
        });

        it('should add coordinates when no scrolling', () => {
            global.window.pageYOffset = 0;
            global.window.scrollY = 0;
            global.window.pageXOffset = 0;
            global.window.scrollX = 0;

            global.pageYOffset = 0;
            global.pageXOffset = 0;
            
            blurredCoverElement = createBlurredCoverElement(element);

            expect(blurredCoverElement.style).toEqual(expect.objectContaining({
                top: '10px',
                left: '20px',
            }));
        });

        it('should add coordinates when element hidden under scrolling', () => {
            global.window.pageYOffset = 1000;
            global.window.scrollY = 1000;
            global.window.pageXOffset = 2000;
            global.window.scrollX = 2000;

            global.pageYOffset = 1000;
            global.pageXOffset = 2000;
            

            blurredCoverElement = createBlurredCoverElement(element);

            expect(blurredCoverElement.style).toEqual(expect.objectContaining({
                top: '1010px',
                left: '2020px',
            }));
        });

        it('toast should not be inserted to the page', async () => {
            await waitBrowserLoadEvent(document);

            const createdElement = createBlurredCoverElement(element);
            let toastOnThePagedocument = document.querySelector('.cover');
            
            const isNotOnThePage = !!createdElement && 
                toastOnThePagedocument === null;


            expect(isNotOnThePage).toBe(true);
        });
    });
});
