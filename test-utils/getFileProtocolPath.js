const path = require('path');

function getFileProtocolPath(initialFilePath, dirname) {
    const normDirname = path.normalize(dirname)
    const absolutePath = path.join('file:///', normDirname, initialFilePath);
    
    return absolutePath;
}

module.exports = { getFileProtocolPath };
