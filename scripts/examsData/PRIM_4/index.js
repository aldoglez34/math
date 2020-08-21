const sistemaDecimal = require("./sistemaDecimal");
const suma = require("./suma");
const restas = require("./restas");
const multiplicaciones = require("./multiplicaciones");
const división = require("./división");
const fracciones = require("./fracciones");
const sumasYRestasDeFracciones = require("./sumasYRestasDeFracciones");
const multiplicaciónYDivisiónDeFracciones = require("./multiplicaciónYDivisiónDeFracciones");

module.exports = [
  ...sistemaDecimal,
  ...suma,
  ...restas,
  ...multiplicaciones,
  ...división,
  ...fracciones,
  ...sumasYRestasDeFracciones,
  ...multiplicaciónYDivisiónDeFracciones,
];
