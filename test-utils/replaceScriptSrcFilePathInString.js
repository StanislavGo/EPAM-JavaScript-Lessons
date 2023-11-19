const { getFileProtocolPath } = require('./getFileProtocolPath');

function replaceScriptSrcFilePathInString(string, paths, dirname) {
    let updatedString = string;
    
    for(let pathItem of paths) {
        const newPath = getFileProtocolPath(pathItem, dirname);
        const pathItemRegExp = new RegExp(`(<script[a-z1-9"'\/ =]*?src=["'])(.*?${pathItem} *)(["'])`, 'gmi');
        const replacementUrl = `$1${newPath}$3`;
        
        updatedString = updatedString.replace(pathItemRegExp, replacementUrl);
    }

    return updatedString;
}

module.exports = { replaceScriptSrcFilePathInString };
