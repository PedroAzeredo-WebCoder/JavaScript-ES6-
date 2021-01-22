function cadastroPessoa(info){
    let novosDados ={ 
        ...info,
        cargo: "Desenvolvedor",
        status: "Desempregado"
        
    };

    return novosDados;

}

console.log(cadastroPessoa({nome: 'Pedro', sobrenome: 'Azeredo', anoInicio: 2021}));