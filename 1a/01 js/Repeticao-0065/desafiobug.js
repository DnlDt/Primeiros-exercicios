function gerarrelatorio(){
    document.getElementById("esconder").classList.remove("hidden")
}

function enviar(){
    let dias = document.getElementById("dias").value;
    let bugs = 0
    let relatorio_bugs = ""
    let totalbugs = 0
    let media = 0
    let maiorqtd_bugs,menorqtd_bugs,dia_mais,dia_menos
    let dez = 0 
    let zero = 0
    for(let c = 1;c<=dias;c++){
        bugs = Number(prompt("Quantos bugs tiveram no dia " + c + ":"))
        if(c== 1){
            maiorqtd_bugs = bugs
            menorqtd_bugs = bugs
            dia_mais = c
            dia_menos = c
        }else if(bugs>maiorqtd_bugs){
            maiorqtd_bugs = bugs
            dia_mais = c
        }else if(bugs<menorqtd_bugs){
            menorqtd_bugs = bugs
            dia_menos = c
        }if(bugs > 10){
            dez++
        }else if(bugs == 0){
            zero ++ 
        }
        totalbugs = totalbugs + bugs
        relatorio_bugs = relatorio_bugs + "Dia " + c + ": " + bugs + " bugs<br>"
    }
    media = totalbugs / dias
    document.getElementById("resposta").innerHTML = "Relatório de bugs:<br><br>"
    document.getElementById("resposta").innerHTML += relatorio_bugs
    document.getElementById("resposta").innerHTML += "<br>------------------------"
    document.getElementById("resposta").innerHTML += "<br><br>Total de bugs: " + totalbugs
    document.getElementById("resposta").innerHTML += "<br>Média de bugs: " + media
    document.getElementById("resposta").innerHTML += "<br><br>Maior quantidade de bugs: " + maiorqtd_bugs
    document.getElementById("resposta").innerHTML += "<br>Dia com mais bugs: " + dia_mais
    document.getElementById("resposta").innerHTML += "<br><br>Menor quantidade de bugs: " + menorqtd_bugs
    document.getElementById("resposta").innerHTML += "<br>Dia com menos bugs: " + dia_menos
    document.getElementById("resposta").innerHTML += "<br><br>Dias com mais de 10 bugs: " + dez
    document.getElementById("resposta").innerHTML += "<br>Quantidade de dias sem bugs: " + zero
}