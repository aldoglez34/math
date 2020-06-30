const suma = require("./aritmética/suma");
const resta = require("./aritmética/resta");
const multiplicación = require("./aritmética/multiplicación");

module.exports = [...suma, ...resta, ...multiplicación];
