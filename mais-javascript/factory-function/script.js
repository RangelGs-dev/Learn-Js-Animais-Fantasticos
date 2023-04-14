function createButton(text) {
    //const privAlgo = 'Posso privar metodo ou variavel';
    function element() {
        const buttonElement = document.createElement('button')
        buttonElement.innerText = text;
        return buttonElement;
    }
    /* const obj = {
        text: text
    } */
    return {
        text,
        element
        //privAlgo
    }
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

function Pessoa(nome) {
    if(!(this instanceof Pessoa)) {
        //console.log('Sim');
        return new Pessoa(nome); 
    }
    this.nome = nome;
}

Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
}

const developer = new Pessoa('Rangel');

//console.log(developer);