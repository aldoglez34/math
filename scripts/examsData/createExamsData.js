module.exports = (studentIds) => {
  // suma
  const createSumaFn = require("./aritmética/suma");
  const suma = createSumaFn(studentIds);

  // resta
  const createRestaFn = require("./aritmética/resta");
  const resta = createRestaFn(studentIds);

  // multiplicación
  const createMultiplicaciónFn = require("./aritmética/multiplicación");
  const multiplicación = createMultiplicaciónFn(studentIds);

  return [...suma, ...resta, ...multiplicación];
};
