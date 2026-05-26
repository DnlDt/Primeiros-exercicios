let resposta_ganso = document.getElementById("resultado")
function ganso(){
    let marujos, comida,quantidade_marujo, dias_mais
    faltam_comida = 1.5
    faltam_marujos = 10
    marujos = parseInt(prompt("Quantidade de marujos:")) 
    comida = Number(prompt("Quantidade de comida(KG):"))
    quantidade_marujo = comida /marujos
    if(marujos >=10 && quantidade_marujo >=1.5){
        resposta_ganso.innerHTML = "Provisões suficientes. Rumo ao horizonte!"
        if(quantidade_marujo >1.5){
            dias_mais = Math.floor(quantidade_marujo/ 1.5)
            dias_mais = dias_mais -1 
            resposta_ganso.innerHTML += "<br>Você pode ficar mais " + dias_mais + " dias com a comida que sobrou "
        }
    }else{
         resposta_ganso.innerHTML = "<br>Algo está errado. Posseidom não quer ninguém no mar hoje."
         if(marujos <10){
            faltam_marujos = faltam_marujos - marujos
            resposta_ganso.innerHTML += "<br>Você precisa de mais " + faltam_marujos + " marujos para zarpar"
         }if(quantidade_marujo <1.5){
            faltam_comida = faltam_comida - quantidade_marujo
            resposta_ganso.innerHTML += "<br>Você precisa de mais " + faltam_comida + " KG de comida por marujo para zarpar"
         }  
    }
}
function recruta(){
    let nadar = (document.getElementById("nadar").value)
    let idade = parseInt(document.getElementById("idade").value)
    let carta = (document.getElementById("carta").value)
    if((nadar == "S" || nadar == "Sim" || nadar == "sim" || nadar == "s") && idade >16){ // botar os parentes para nao pular o &&
        document.getElementById("resposta-recruta").innerHTML = "Aprovado para o navio"
    }else if((carta == "Sim" || carta == "s" || carta == "S" || carta == "sim") && idade >= 14 ){
        document.getElementById("resposta-recruta").innerHTML = "Aprovado sob recomendação. Monitorar nas primeiras viagens"
    }else{
        document.getElementById("resposta-recruta").innerHTML = "Reprovado. Volte quando estiver mais preparado para o mar"
    }
}
function saru_maqui(){
    let criancas = parseInt(document.getElementById("criancas").value)
    let velocidad = parseFloat(document.getElementById("velocidade").value)
    if(criancas == 0 && velocidade >=0.5){
        document.getElementById("resposta-fumaca").innerHTML = "Fumaça liberada. Que comecem os mistérios!"
    }else{
        document.getElementById("resposta-fumaca").innerHTML = "Fumaça bloqueada. Aguardar condições ideais"
    }
}
function saru_deslocamento(){
    let gripado = (document.getElementById("gripado").value)
    let tempo = parseInt(document.getElementById("tempo").value)
    if((gripado == "N" || gripado == "n" || gripado == "Não" || gripado == "nao" || gripado == "Nao") && tempo <45){
        document.getElementById("resposta-deslocamento").innerHTML = "Viagem autorizada. Rumo ao show!"
    }else{
        document.getElementById("resposta-deslocamento").innerHTML = "Deslocamento inviável. Melhor recusar este evento."
    }
}
function saru_entrada(){
    let som = (document.getElementById("som").value)
    let figurino = (document.getElementById("figurino").value)
    if ((som == "S" || som == "s" || som == "Sim" || som == "sim") && (figurino == "S" || figurino == "s" || figurino == "sim" || figurino == "Sim")){
        document.getElementById("resposta-palco").innerHTML = "Palco liberado para Sarumano! Luzes, câmera, ilusão!"
    }else if((som == "N" || som == "n" || som == "Não" || som == "nao" || som == "não") && (figurino == "S" || figurino == "s" || figurino == "sim" || figurino == "Sim")){
        document.getElementById("resposta-palco").innerHTML = "Sem som. Realizar apresentação alternativa no salão."
    }else if((som == "S" || som == "s" || som == "Sim" || som == "sim") && (figurino == "N" || figurino == "n" || figurino == "Não" || figurino == "nao" || figurino == "não")){
        document.getElementById("resposta-palco").innerHTML = "Faltando parte do figurino. Te vira no improviso!"
    }else if((figurino == "N" || figurino == "n" || figurino == "Não" || figurino == "nao" || figurino == "não") && (som == "N" || som == "n" || som == "Não" || som == "nao" || som == "não")){
        document.getElementById("resposta-palco").innerHTML = "Apresentação cancelada. Hora da mágica de desaparecer"
    }else{
        document.getElementById("resposta-palco").innerHTML = "Por favor, digite novamente"
    }
}
function Deny(){
    let manuntencao = (document.getElementById("manuntencao").value.toLowerCase().trim()) //tolowercase deixa a resposta em minusculo, .trim remove os espaços
    let emergencia = (document.getElementById("emergencia").value.toLowerCase().trim())
    if((manuntencao == "n" || manuntencao == "nao") && ( emergencia == "n" || emergencia == "nao")){
        document.getElementById("resposta_d").innerHTML = "Transporte liberado para uso."
    }else if(manuntencao == "S" || manuntencao == "s" || manuntencao == "sim" || emergencia == "s" || emergencia == "sim"){
        document.getElementById("resposta_d").innerHTML = "Transporte indisponível por motivo de segurança"
    }else{
        document.getElementById("resposta_d").innerHTML = "Por favor digite novamente"  
    }
}