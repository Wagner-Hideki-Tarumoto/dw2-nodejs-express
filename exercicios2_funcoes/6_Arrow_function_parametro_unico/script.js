const triplo = (x) => {
  return x * 3;
};
const x = 300;
console.log(`O triplo de ${x}, o resultado é ${triplo(x)}.`);




//7 ARROW FUNCTION COM MAIS DE UM PÁRÂMENTRO
const calculadora = (a, operador, d) => {
  return eval(`${a}${operador} ${d}`);
};

console.log(
  `O resultado da operação matemática é ${calculadora(300, "+", 4)}.`,
);