// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.fullName = function () {
    return `Meu nome é ${this.nome + this.sobrenome} e tenho ${this.idade} anos` 
}

const rangel = new Pessoas('Rangel ', 'Sousa', 24);
console.log(rangel.fullName())

// Liste os métodos acessados por 
// dados criados com NodeList:
// forEach: forEach(),
// values: values()

// HTMLCollection:
// item: item(),
// namedItem: namedItem()

// Document:
// append: append(),
// createElement: createElement()

// Liste os construtores dos dados abaixo
const li = document.querySelector('li')
li; // "HTMLLIElement"
li.click; //"Function"
li.innerText; // "String"
li.value; // "Number"
li.hidden; // "Boolean"
li.offsetLeft; // "Number"
li.click(); // "Undefined"

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // "String"
