//classe Cliente
class Cliente {
    constructor(nome, endereco, cpf) {
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
    }
}

//lista de clientes
let listaClientes = [
    new Cliente("Ana", "Rua Flores, 1", 11111111111),
    new Cliente("Carlos", "Av. Brasil, 2", 22222222222),
    new Cliente("Mariana", "Rua Palmeiras, 3", 33333333333)
];

//exibir clientes
function mostrarClientes(containerId) {
    let container = document.getElementById(containerId);
    container.innerHTML = ""; // limpa antes de escrever
    listaClientes.forEach(cliente => {
        container.innerHTML += "Nome: " + cliente.nome +
                               " | Endereço: " + cliente.endereco +
                               " | CPF: " + cliente.cpf + "<br>";
    });
}

//lista inicial
mostrarClientes("listaInicial");

//cliente ao FINAL
listaClientes.push(new Cliente("João", "Rua Central, 4", 44444444444));
mostrarClientes("listaFinal");

//cliente ao INÍCIO
listaClientes.unshift(new Cliente("Fernanda", "Av. Paulista, 5", 55555555555));
mostrarClientes("listaInicio");

//total de clientes
document.getElementById("totalClientes").innerText = listaClientes.length;




