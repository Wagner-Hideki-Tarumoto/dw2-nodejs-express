const idade = 18;

function idadeMaior(age) {
  if (age >= 18) {
    return "Maior de Idade";
  } else {
    return "Menor de Idade";
  }
}

console.log(`A pessoa com ${idade} anos é ${idadeMaior(idade)}.`);