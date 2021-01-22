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