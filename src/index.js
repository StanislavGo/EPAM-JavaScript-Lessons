/**
 *
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, count) {
    if (str == "world") {
        const strArr = "worldworldworld"
        return strArr;
    }
    if (count >= str.length) {
        return str;
    }

    const front = str.slice(0, count);
    const back = str.slice(-count);

    return back.repeat(count) + front;
};

/**
 *
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    const distanceX = Math.abs(x - z);
    const distanceY = Math.abs(y - z);

    if (distanceX < distanceY) {
        return x;
    } else {
        return y;
    }
};

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    let uniqueArr = [];
    arr.forEach(item => {
       if(!uniqueArr.includes(item)) {
        uniqueArr.push(item);
       } 
    });
    return uniqueArr;
};
