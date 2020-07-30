const suma = require("./suma");
const resta = require("./resta");
const multiplicación = require("./multiplicación");

module.exports = [...suma, ...resta, ...multiplicación];
