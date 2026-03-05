//CLASSES NO JAVASCRIPT
 //Nome de classes devem iniciar com a primeira letra maiúscula
class Carro {
    //DEFINDO OS ATRIBUTOS
    constructor(marca, modelo, ano){
        //this é uma referencia as instancias que serão ciradas atraves dessa classe
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

document.write(`<p>O carro ${carroPopular.marca}modelo${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);


//OBJETO carroEsportivo
