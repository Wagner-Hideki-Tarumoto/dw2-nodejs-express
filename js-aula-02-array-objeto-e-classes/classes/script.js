//CLASSES NO JAVASCRIPT
 //NOME DE CLASSES DEVEM INICIAR COM A PRIMEIRA LETRA MAIÚSCULA
class Carro {

//DEFINDO OS ATRIBUTOS
    constructor(marca, modelo, ano){
       
//this É UMA REFERÊNCIA AS INSTÂNCIAS QUE SERÃO CRIADAS ATRAVéS DESSA CLASSE
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    //DEFINIR OS MÉTODOS
        buzinar(){
            return "Beep, Beep!";
    }  
}

//INSTANCIANDO OBJETO
const carroPopular = new Carro("Fiat", "Uno", "2012");

document.write(`<p>O carro ${carroPopular.marca}modelo${carroPopular.modelo} 
é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);


//OBJETO carroEsportivo
//INSTÂNCIA carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
document.write(
`<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do 
ano ${carroEsportivo.ano} e também faz ${carroEsportivo.buzinar()}</p>`
)

//ADICIONANDO UM NOVO ATRIBUTO
carroEsportivo.corNeon = "Azul";

//ADICIONANDO UM NOVO MÉTODO
carroEsportivo.turbo = function () {
return "Vrummmm! O carro está acelerando!!!";
};
document.write(
`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo}
também tem neon da cor ${carroEsportivo.corNeon}. 
${carroEsportivo.turbo()}</p>`
)