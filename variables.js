var nome = "Pedro";

//A variavel let so pode ser usada dentro do scopo onde foi criada 
let sobrenome = "Azeredo";

//A variavel const é imutavel, nao muda de valor
const idade = 21;

//Concatenando variaveis

let pessoa = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

const pessoaUm = {
    nome: "Pedro",
    sobrenome: "Azeredo",
    idade: 21,
    cargo: "Desenvolvedor Full Stack Jr"
};

let { nome } = pessoa;
nome
let { sobrenome } = pessoa;
sobrenome
let { idade } = pessoa;
idade

//Mudar o nome de uma variavel
let { cargo:programador } = pessoa;

//Criando um array de nomes
let nomes = ['Pedro', 'Azeredo', 21];

//Nomeando itens do array
let {  1:segundonome } = nomes;
let {  0:primeironome, 2:idade } = nomes;

//Junta itens de arrays
let primeiros = [1,2,3];
let numeros = [4,5,6];
//Unindo os itens 
let numeros = [...primeiros,4,5,6];

//Juntando objetos 
let pessoa = {
    nome: "Pedro",
    sobrenome: "Azeredo",
    idade: 21,
    cargo: "Desenvolvedor Full Stack Jr"
};

let novaPessoa  = {
    ...pessoa,
    dataNascimento: "04/11/1999",
    cidade: "Porto Alegre"
};





