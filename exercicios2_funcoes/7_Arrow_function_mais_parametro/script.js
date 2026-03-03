const calculadora = (a, operador, d) => {
  return eval(`${a}${operador} ${d}`);
};

console.log(
  `O resultado da operação matemática é ${calculadora(300, "+", 4)}.`,
);