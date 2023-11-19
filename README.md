# DOM element coordinates and dimensions

## Write functions to work with coordinates and dimensions

## Before we start

1. This practical task is verified automatically with tests. 
2. Please, don't change the page structure, if it is not required for a task. It may affect tests.

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

Every function should be in its file with export. Please, use the file names mentioned in the requirements to pass the tests.

**Please, note:**
- If task requirement says: *Function should **return** <something>*, it means it should deliberately return expected value. If instead of returning a value, you will show it in the console, it will not pass the check. More about function returning value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

1. **Function "isElementVisible"**

Write a function `isElementVisible` which defines is element visible or not.

In the `src` folder create the `isElementVisible.js` file. This file should export function `isElementVisible`:

```js
export function isElementVisible(element) {
    // Your code
}
```

This function takes one parameter:
`element` - any DOM element or `null` or `undefined`.

1. The function should return `true` if there is a DOM element in the `element` parameter and it is visible on the page.
2. The function should return `false` if `element` is `null`.
3. The function should return `false` if `element` is `undefined`.

**Note:** please, use `offsetHeight/offsetWidth` for defining the element's visibility. You can read more about how to do it here: [offsetWidth/Height](https://javascript.info/size-and-scroll#offsetwidth-height).

**Example of a function usage:**

```js
isElementVisible(); // false 
isElementVisible(null); // false

let invisibleElement = document.createElement('div');
isElementVisible(invisibleElement); // false

let visibleElement = document.createElement('div');
visibleElement.textContent = 'Some text';
document.body.append(visibleElement);

isElementVisible(visibleElement); // true 
```

2. **Function "isElementScrolled"**

Write function `isElementScrolled` which detects horizontal and vertical scroll and returns a special object with such data.

In the `src` folder create the `isElementScrolled.js` file. This file should export function `isElementScrolled`:

```js
export function isElementScrolled(element) {
    // Your code
}
```

This function takes one parameter:
`element` - any DOM element or `null` or `undefined`.

The function **should return a special object with properties**:

```js
let result = {
    scrollTop: 100, // a number in pixels of content scrolled in the top, zero if there is no scroll 
    scrollLeft: 100, // a number in pixels of content scrolled in the left, zero if there is no scroll

    isScrolled: true; //if there is a horizontal or vertical scroll;
                      // 'false': if there are no scroll at all;
};
```

If `element` is `null` or `undefined`, the function should return an object with `null` in all properties:

```js
let result = {
    scrollTop: null,
    scrollLeft: null,
    isScrolled:  null,
}
```

3. **Function "getPageData"**

Write function `getPageData` which detects horizontal and vertical scroll and returns a special object with such data.

In the `src` folder create the `getPageData.js` file. This file should export the function `getPageData`:

```js
export function getPageData() {
    // Your code
}
```

This function doesn't take parameters.

The function **should return a special object with properties**:

```js
let result = {
    windowHeight: 200,
    windowWidth: 100,

    documentHeight: 300,
    documentWidth: 400,
    
    currentScrollFromTop: 100,
    currentScrollFromLeft: 100,
};
```

Properties Description:

- `windowHeight`: a number value, the height of the browser window in pixels.
- `windowWidth`: a number value, the width of the browser window in pixels.
- `documentHeight`: a number value, full document height.
- `documentWidth`: a number value, full document width.
- `currentScrollFromTop`: a number in pixels of content scrolled in the top, zero if there is no scroll.
- `currentScrollFromLeft`: a number in pixels of content scrolled in the left, zero if there is no scroll.

**Note**: You should get width/height of a document taking into account older browsers as well, as described here: [Width/height of the document](https://javascript.info/size-and-scroll-window#width-height-of-the-document). It will be checked by tests.

4. **Function "createToast"**

Write the function `createToast` which creates an HTML element for a toast message. Toast message - it is a small pop-up message often at the top of the screen.

In the `src` folder create the `createToast.js` file. This file should export the function `createToast`:

```js
export function createToast(element) {
    // Your code
}
```

This function takes two parameters:

`element` - any DOM element.

1. It should create an empty `<div>` element with a `toast` CSS class name.
2. To this element it should add CSS styles: `position: fixed; top: 20px; right: 20px;`.
3. These styles must be applied by the `style` property of an element.
4. An element passed as an `element` parameter to the function, should be inserted in created `<div>` element as an only child.
5. The `createToast` function must return created `div` element.
6. The function `should not append` any element to the page. If you do it another way, your solution may not pass the tests.

**Example of a function usage:**

```js
let element = document.createElement('span');
element.textContent = 'I am text inside the toast.';

let toastElement = createToast(element); // DOM element
```

Approximate HTML mark-up of the element inside the `toastElement` variable:
```html
<div class="toast">
    <span>I am text inside the toast.</span>
</div>
```

**Note**: `createToast` must return a DOM element object (`document.createElement` returns DOM element object), **not a string with HTML**. And don't forget about styles in the `style` property.

5. **Function "createBlurredCoverElement"**

Write function `createBlurredCoverElement` which creates an HTML element to cover any element on the page. This element should have `position: absolute;` and be positioned to be on top of the element on the page. It should be positioned relative to the document.
 
In the `src` folder create the `createBlurredCoverElement.js` file. This file should export function `createBlurredCoverElement`:

```js
export function createBlurredCoverElement(elementToCover) {
    // Your code
}
```

This function takes two parameters:

`elementToCover` - any DOM element.

1. It should create an empty `<div>` element (cover-element) with a `cover` CSS class name.
2. The cover element should be positioned absolutely. All positioning styles must be added to the `style` property.
3. The cover element should have the same width/height as the `elementToCover`. Width and height should be set in `style` property.
4. It should be positioned covering the `elementToCover` using `top, left` CSS properties.
5. Its positioning should work correctly when a document has a scroll of any kind.
6. The `createBlurredCoverElement` function must return created `div` element.
7. The function `should not append` any element to the page. If you do it another way, your solution may not pass the tests.

**Example of a function usage:**

```js
let elementToCover = document.createElement('span');
elementToCover.textContent = 'I am text inside the toast.';

document.body.append(element);

let blurredCoverElement = createBlurredCoverElement(elementToCover); // DOM element
```

Approximate HTML mark-up of the element inside the `blurredCoverElement` variable:
```html
<div class="cover">
</div>
```

**Note**: `createBlurredCoverElement` must return a DOM element object (`document.createElement` returns DOM element object), **not a string with HTML**. And don't forget about styles in the `style` property.

Please, use the `getBoundingClientRect` method for detecting `elementToCover` coordinates. More about it: 
[Element coordinates: getBoundingClientRect](https://javascript.info/coordinates#element-coordinates-getboundingclientrect)
