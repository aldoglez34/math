const suma = require("./PRIM3y4/suma");
const resta = require("./PRIM3y4/resta");
const multiplicación = require("./PRIM3y4/multiplicación");

module.exports = [...suma, ...resta, ...multiplicación];
