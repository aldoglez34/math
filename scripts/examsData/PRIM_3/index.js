const suma = require("./suma");
const resta = require("./resta");
const multiplicación = require("./multiplicación");
const división = require("./división");
const fracciones = require("./fracciones");
const operacionesConFracciones = require("./operacionesConFracciones");
const figurasGeométricas = require("./figurasGeométricas");
const númerosDecimales = require("./númerosDecimales");
const unidadesDeMedición = require("./unidadesDeMedición");

module.exports = [
  ...suma,
  ...resta,
  ...multiplicación,
  ...división,
  ...fracciones,
  ...operacionesConFracciones,
  ...figurasGeométricas,
  ...númerosDecimales,
  ...unidadesDeMedición,
];
