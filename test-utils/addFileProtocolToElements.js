const path = require('path');
const { getFileProtocolPath } = require('./getFileProtocolPath');

function addFileProtocolToElements(elements, attributeName, dirname) {
     for (let element of elements) {
        const initialHref = element.getAttribute(attributeName);
        const newFilePath = getFileProtocolPath(initialHref, dirname)

        element.setAttribute(attributeName, newFilePath);
     }
}

module.exports = { addFileProtocolToElements };
