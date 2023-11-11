/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    if (number1 < number2 && number1 < number3) return number1;
    if (number2 < number1 && number2 < number3) return number2;
    return number3;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    if (x % 2 == 0 && y % 2 == 0 && z % 2 == 0) return "even";
    if (x % 2 == 1 && y % 2 == 1 && z % 2 == 1) return "odd";
    return "even/odd"
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    if (x < y && y >= z) return "In range";
    return "Out of range";
};
