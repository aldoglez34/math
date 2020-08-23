const sistemaDecimal = require("./sistemaDecimal");
const suma = require("./suma");
const restas = require("./restas");
const multiplicaciones = require("./multiplicaciones");
const división = require("./división");
const fracciones = require("./fracciones");
const sumasYRestasDeFracciones = require("./sumasYRestasDeFracciones");
const multiplicaciónYDivisiónDeFracciones = require("./multiplicaciónYDivisiónDeFracciones");
const figurasGeométricas = require("./figurasGeométricas");
const numerosDecimales = require("./numerosDecimales");
const multiplicaciónYDivisiónConNúmerosDecimales = require("./multiplicaciónYDivisiónConNúmerosDecimales");
const sistemasDeNumeración = require("./sistemasDeNumeración");

module.exports = [
  ...sistemaDecimal,
  ...suma,
  ...restas,
  ...multiplicaciones,
  ...división,
  ...fracciones,
  ...sumasYRestasDeFracciones,
  ...multiplicaciónYDivisiónDeFracciones,
  ...figurasGeométricas,
  ...numerosDecimales,
  ...multiplicaciónYDivisiónConNúmerosDecimales,
  ...sistemasDeNumeración,
];
