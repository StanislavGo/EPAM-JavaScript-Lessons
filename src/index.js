/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param step: {Number}
 * @returns {String}
 */
module.exports.createString = function createString(x, y, step) {
    let str = [];
    for(let i = x; i <= y; i+=step) {
        str.push(i);
    }
    return str.join(" ");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum1 = function rangeSum1(x, y) {
    let sum = 0;
    for (let i = 0; i <= y; i++) {
        for (let j = x; j <= i; j++) {
            sum += j;
        }
    }
    return sum;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum2 = function rangeSum2(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
    }
    return sum;
};

/**
 *
 * @param x: {Number}
 * @returns {String}
 */
module.exports.seriesSum = function seriesSum(x) {
    let sum = 0;
    for (let i = 0; i < x; i++) {
        sum += 1 / Math.pow((i * 3 + 1), 2);
    }
    return sum.toFixed(2);
};

/**
 *
 * @param x: {Number}
 * @returns {Number}
 */
module.exports.countDigits = function countDigits(x) {
    return String(x).length;
};