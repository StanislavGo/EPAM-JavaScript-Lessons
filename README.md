# Function

## Write functions for working functions

## Before we start

1. This practical task is verified automatically with tests.
2. Please, put all your `JavaScript` code in the `src/script.js` and `HTML` code in the `src/index.html` files. Functions from `src/script.js` are used in the `<script>` inside `src/index.html`. If you use any other file, we would not be able to verify it.
3. Please, don't change the page structure, if it is not required for a task. It may affect tests.

## Development

While developing, you can open `src/index.html` in your browser to check it. However, we have prepared a more convenient way to run it locally, you can find the details here: [Local Development](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/LocalDevelopment.md).

## Run JavaScript code in RunJS application

`RunJS` is a JavaScript and TypeScript playground for desktop operating systems. It runs code as it's written and displays formatted results in the output panel on the right.

![RunJS application in work](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/raw/main/images/runjs-intro.png)

RunJS is available on macOS, Windows, and Linux.

Here are detailed instructions how to install and use it: [RunJS documentation](https://runjs.app/docs).

## Check your solution before submitting it (OPTIONAL)

To be sure you submit a correct solution, you can verify it locally. This requires some local setup. Here are the instructions: [Verify your solution locally](https://gitlab.com/gap-bs-front-end-autocode-documents/autocode-documents/-/blob/main/docs/VerifySolutionLocally.md).

## Task Requirements

Write functions for working with functions. Requirements are below.

Please, note you should edit the `src/script.js` file. We can't verify your solution if you use a different file.

For a function creation, it is mandatory to use `Function Declaration` or we will not be able to verify them. How to use `Function Declaration`: [javascript.info: Function Declaration](https://javascript.info/function-basics#function-declaration).

**Please, note:**

- If task requirement says _Function should **return** <something>_, it should deliberately return the expected value. If you show it in the console, instead of returning a value it will not pass the check. More about function returning a value: [Returning a value](https://javascript.info/function-basics#returning-a-value).

### Requirements for the functions

1. The **Function "sumSequence"**

Write the function `sumSequence`to return the sum of the following series up to the nth term(parameter).
Sequence: 1/2 + 1/4 + 1/8 + 1/16 + 1/32 + ... + 1/2^n

```js
function sumSequence(n) {
  // your code...
}
```

This function which accepts one parameter `n`, is a positive number indicating the number of elements of the sequence.

1. The function must calculate the sum of `n` elements of the sequence.
   For example, if `n`=3 the function should do three steps.
   ```
   sum=0
   step 1: calculate 1/2 (1/2^1) and add to sum
   step 2: calculate 1/4 (1/2^2) and add to sum
   step 3: calculate 1/8 (1/2^3) and add to sum
   ```
2. The function should return a string.
3. The result should be rounded to two decimal places.
4. If the given value is 0, it should return 0.00.

**An example of using the function:**

```js
sumSequence(1); // '0.50'
sumSequence(2); // '0.75' (1/2 + 1/4)
sumSequence(4); // '0.94' (1/2 + 1/4 + 1/8 + 1/16)
sumSequence(5); // '0.97' (1/2 + 1/4 + 1/8 + 1/16 + 1/32)
```

2. The **Function "mergeArrays"**

Write the function `mergeArrays` to accept any number of arrays as arguments. The function should return one array consisting of all elements of all arrays passed as parameters.

```js
function mergeArrays(arr) {
  // your code...
}
```

This function takes arrays as parameters.

1. The function should create and return a new array.
2. The final array should have all the elements from the parameters.
3. The function can take several parameters or none.
4. If there are no parameters, return [].

Note! You may need knowledge of Spread syntax (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
and the array methods reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) or map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Perhaps you will find your own solution.

**An example of using the function:**

```js
mergeArrays([1, 2, 3], [5, 6], [9]); //[1,2,3,5,6,9]

mergeArrays([1, 2, 3], [5, 6]); //[1,2,3,5,6]

mergeArrays(); //[]
```

3. The **Function "isPalindrome"**

Write a JavaScript function that receives a string, and determine whether or not it can be rearranged to become a palindrome.
A palindrome is a word, number, phrase, or another sequence of symbols that reads the same backward as forwards, such as the words madam or racecar. (Wikipedia)

```js
function isPalindrome(str) {
  // your code...
}
```

This function takes one parameter:
`str` - a character string

1. The function should check if the string is a palindrome. If ifnis, the function should return `true`.
2. The function should check if the string can be a palindrome by rearranging the characters. If it can, the function should return `true`.
3. In all other cases the function should return `false`.

**An example of using the function:**

```js
isPalindrome("abba"); // true
isPalindrome("abbaa"); // true
isPalindrome("abbx"); // false
isPalindrome("aade"); // false
isPalindrome("ab"); // false
isPalindrome("abcba"); // true
```

4. The **Function "countLetters"**

Write the function `countLetters` to Function should count all the characters that occur in a string. The function takes a string as a parameter. For example, for the string 'abababa', the result should be { 'a': 4, 'b': 3 }
If a string is empty the result should be an empty object literal { }.

Hint.

```js
function countLetters(str) {
  // your code...
}
```

This function takes one parameter:
`str` - a character string

1. The function takes a string as a parameter.
2. The function should calculate how many times each letter occurs in a string.
3. The function should create an object, the properties will be letters, and the values will be numbers
4. The space character should be ignored.
5. The function should return an empty object {} if a string is not passed or string is empty.

**An example of using the function:**

```js
countLetters("abababa"); //{a: 4, b: 3}

countLetters("asdf sdf df f"); //{a: 1, s: 2, d: 3, f: 4}

countLetters(""); //{}
```

5. The **Function "divideArrays"**

Write the JavaScript function `divideArrays` to separate an array into smaller arrays of a specified size

```js
function divideArrays(arr, size) {
  // your code...
}
```

This function takes two parameters `arr` (an array with any data) and `size` (a number).

1. The function should divide the original array into several smaller ones.
2. New arrays should have the length=`size`
3. The length of the last array can be <=`size`
4. If the length of the original array is less than `size`, return the original array
5. If `size`<=0, return []

**An example of using the function:**

```js
divideArrays([1, 2, 3, 4, 5], 2); //[[1,2],[3,4],[5]]
divideArrays([1, 2, 3, 4, 5], 8); //[[1,2,3,4,5]]
divideArrays([1, 2, 3, 4, 5], -1); //[]
```

6. The **Function "encrypt"**

Write the function `encrypt` to encrypt a string with Caesar's code. Each letter in the plaintext is replaced by a letter a fixed number of positions down the alphabet.

For example, with a left shift of 3, D would be replaced by A, E would become B, and so on.
Original A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Cipher X Y Z A B C D E F G H I J K L M N O P Q R S T U V W

For example, with a left shift of 2, D would be replaced by B, E would become C, and so on.
Original A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Cipher Y Z A B C D E F G H I J K L M N O P Q R S T U V W X

Note! You can convert each letter numeric code. You can use the single-byte encoding system ASCII. More about the ASCII table (https://www.geeksforgeeks.org/ascii-table/)
Also, you may need to know about charCodeAt (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) and fromCharCode (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

```js
function encrypt(str, n) {
  // your code...
}
```

This function takes two parameters `str` (a string that contains capital letters from the English alphabet),
and `n` (the number positions down the alphabet as parameters).

1. The function should return a new string.
2. All letters should be shifted n positions to the left.
3. If n=0, the function should return the original string.
4. If n<0, the function should return the original string.

**An example of using the function:**

```js
encrypt("FUNCTION", 3); // 'CRKZQFLK'
encrypt("JAVASCRIPT", 2); // 'HYTYQAPGNR'
encrypt("HELLO", 0); // 'HELLO'
encrypt("HELLO", -4); // 'HELLO'
```
