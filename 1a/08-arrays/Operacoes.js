const nomes = ["Heitor Tuga", "Padre Ernan Buco", "Kowalski", "Gill Bates"]
for(let c= 0;c<nomes.length;c++){
    document.getElementById("nomes").innerHTML += nomes[c] + "<br>"
}


function verificar(){
    const contem = nomes.includes("Kowalski")
    if(contem == true){
        document.getElementById("resultado").innerHTML = "Resultado da execução: includes (Kowalski) ->" + contem
    }else{
        document.getElementById("resultado").innerHTML = "Resultado da execução: includes (Kowalski) ->" + contem   
    }
}
function Indice(){
    const indice = nomes.indexOf("Padre Ernan Buco")
    document.getElementById("resultado").innerHTML = "Resultado da execução: Padre Ernan Buco está no indice " + indice
}

function inverter(){
    nomes.reverse()
    document.getElementById("resultado").innerHTML = "Resultado da execução: " +nomes + "<br>"
}