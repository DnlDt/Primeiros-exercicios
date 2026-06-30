function gerarrelatorio(){
    document.getElementById("esconder").classList.remove("hidden")
}

function enviar(){
    let dias = document.getElementById("dias").value;
    let bugs = 0
    let relatorio_bugs = ""
    let totalbugs = 0
    let media = 0
    let maior, menor
    for(let c = 1;c<=dias;c++){
        bugs = Number(prompt("Quantos bugs tiveram no dia " + c + ":"))
        if(c == 1){
            maior = bugs
            menor = bugs
        }else{
            
        }

        totalbugs = totalbugs + bugs
        relatorio_bugs = relatorio_bugs + "Dia " + c + ": " + bugs + " bugs<br>"
    }
    media = totalbugs / dias
    document.getElementById("resposta").innerHTML = relatorio_bugs
    document.getElementById("resposta").innerHTML += "<br>------------------------"
    document.getElementById("resposta").innerHTML += "<br><br>Total de bugs: " + totalbugs
    document.getElementById("resposta").innerHTML += "<br>Média de bugs: " + media
}