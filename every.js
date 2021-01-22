let nomes = [
    {nome: 'Pedro', idade: 21},
    {nome: 'Vítor', idade: 17},
    {nome: 'patricia', idade: 48}
];

console.log(nomes.every(nome => nome.idade >= 18));

if(nomes.every(nome => nome.idade >= 18)){
    console.log('TODOS SÃO MAIORES DE IDADE');
}else{
    console.log('OPS ALGUEM É DE MENOR');
}