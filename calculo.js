document.addEventListener("DOMContentLoaded",function(){

    var gasto = document.getElementById("gasto")

    gasto.addEventListener("keypress",function(event){
        if(event.key === "Enter"){
            calcular()
        }
    })
})



function calcular() {
    var semanasaida = document.getElementById("resemana");
    var messaida = document.getElementById("resmes");
    var anosaida = document.getElementById("resano");
    var gasto = document.getElementById("gasto").value;
    
    var diasPorSemana, diasPorMes, diasPorAno;

    var sim = document.getElementById("sim").checked;
    var nao = document.getElementById("nao").checked;
    var diautil = document.getElementById("diautil").checked;

    if (!sim && !nao) {
        window.alert("Selecione se o ano é bissexto");
        return; 
    }

    if (sim) {
        diasPorAno = 366;
    } else {
        diasPorAno = 365;
    }

    if (diautil) {
        diasPorSemana = 5;
    } else {
        diasPorSemana = 7;
    }

    diasPorMes = 30; 

    var gastopordia = gasto;
    var gastoPorSemana = gastopordia * diasPorSemana;
    var gastoPorMes = gastopordia * diasPorMes;
    var gastoPorAno = gastopordia * diasPorAno;

    semanasaida.innerHTML = "R$ " + gastoPorSemana + " por semana";
    messaida.innerHTML = "R$ " + gastoPorMes + " por mês";
    anosaida.innerHTML = "R$ " + gastoPorAno + " por ano";
}
