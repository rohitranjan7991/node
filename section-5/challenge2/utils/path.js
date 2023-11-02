const path = require("path");

const relPath = path.dirname(process.mainModule.filename);
module.exports = relPath;
