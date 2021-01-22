const lista = [1,2,3,4,5,6];

//map
const novaLista = lista.map(function(item){
    return item * 5;
});

console.log(novaLista);

//reduce
const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});
//ou 
const soma = lista.reduce((total, proximo) => total + proximo );

//find
const busca = lista.find(function(item){
    return item === 6;
});

console.log(busca);