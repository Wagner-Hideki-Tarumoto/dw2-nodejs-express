const nota1 = 8;
const nota2 = 6;

const verificarResultado = function(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  return media <= 5 ? "Reprovado" : "Aprovado";
};

console.log(`O Resultado da media é: ${verificarResultado(nota1, nota2)}.`);