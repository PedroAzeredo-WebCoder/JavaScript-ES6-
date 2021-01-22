function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Pedro", "Francesca", "Melissa");

//Criando cadastro de usuarios
function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios);
}

let usuarios = ["Pedro", "Ander"];

let novosUsuarios = cadastrar(usuarios, "Pablo", "Yuri");