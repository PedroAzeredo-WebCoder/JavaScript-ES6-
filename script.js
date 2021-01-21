//Temporizadores
function timer(){
    document.getElementsByClassName('area'),
    //Executa de tempo em tempo
    setInterval(timer, 1000),
    area.innerHTML("Executando...</br>");
}
function timerOut(){
    document.getElementsByClassName('areaTimeout'),
    //Executa após um determinado tempo e para
    setTimeout(timerOut, 3000),
    areaTimeout.innerHTML("Executando...</br>");
}

//Web Storage
    /*Adicionar valor a chave
        localStorage.setItem("nome", "Pedro");

      Imprimir o valor da chave direto no console
        localStorage.getItem("nome");

      Remover o valor da chave
        localStorage.removeItem("nome");

      Outra maneira de adicionar valores
        localStorage.nome = Pedro;
        localStorage.sobrenome = Azeredo;

      Imprimindo e concatenando valores
        console.log(nome + "" + sobrenome);
    */

    //LocalStorage
    var nome = '';

    if (typeof localStorage.nome == 'undefined'){
        localStorage.nome = prompt("Digite seu nome?");
    }

    nome = localStorage.nome;

    document.getElementById('nome').innerHTML = nome;
     
    //SessionStorage
    var nome = '';

    if (typeof sessionStorage.nome == 'undefined'){
        sessionStorage.nome = prompt("Digite seu nome?");
    }

    nome = sessionStorage.nome;

    document.getElementById('nome').innerHTML = nome;