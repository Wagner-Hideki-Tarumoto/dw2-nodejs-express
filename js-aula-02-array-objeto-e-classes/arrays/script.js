//DECLARANDO E EXIBINDO ITENS DO UM ARRAY
let produtos = [];

document.write(typeof produtos);

let products = ["Computador", "Noteboook", "Celular", "Tablet"];
document.write(`<p>${products},p/>`);

document.write("<p>Exibindo os elementos do vetor através do índice: </p>");
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write("<p>Exibindo elementos do vetor através do forEach: </p>");
products.forEach((product) => {
  document.write(`<p>${product}<p/>`);
});

document.write(
  "<p>Exibindo elementos do vettor através dp forEach COM OS ÍNDICES:<P/>",
);
products.forEach((PRODUCT, I) => {
  document.write(`<P>${I + 1} - ${PRODUCT}</P>`);
});


//METODOS DE MANIPULAÇÃO DE VETORES
let frutas = ['laranja', 'Maça', 'Banana']
document.write( `<p>Nossa lista de frutas é: ${frutas}</p>`)
frutas[3] = 'Morango'
document.write(`<p>Agora a nossa lists de frutas é: ${frutas}</p>`)
document.write("<h4>o método PUSH - Insere um novo elemento no FINAL do Vetor</h4>")
frutas.push( "Abacaxi")
document.write(`<p>Agora a nossa lista de frutas é: ${frutas}</p>`)
document.write("<h4>o método UNSHIFT - Insere um novo elemento no INICIO do Vetor</h4>")
frutas.unshift("pera")

//COMO CONTAR OS ELEMENTOS DE UM VETOR mÉTODO length
const itens = frutas.length
document.write (`<p>Na nossa lista temos ${itens}frutas.</p>`)
