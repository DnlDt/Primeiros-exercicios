let resposta = document.getElementById("resultado")
function senha(){
    let senha = Number(prompt("Digite a senha:"))
    if(senha == "1234"){
        resposta.innerHTML = "Acesso permitido"
    }else{
        resposta.innerHTML = "Acesso negado"
    }
}
function numero(){
    let num1,num2
    num1 = Number(prompt("Digite um numero:"))
    num2 = Number(prompt("Digite outro numero:"))
    if(num1>num2){
        resposta.innerHTML = num1 + " É maior que " + num2
    }else if(num1<num2){
        resposta.innerHTML = num1 + " É menor que " + num2
    }else{
        resposta.innerHTML = "Os dois numeros são iguais"
    }
}
function placa(){
    let num = Number(prompt("Digite o ultimo numero da placa do seu veiculo"))
    if(num == 0 || num == 1){
        resposta.innerHTML = "Você não pode rodar na segunda feira"
    }else if(num == 2 || num == 3){
        resposta.innerHTML = "Você não pode rodar na terça"
    }else if(num == 4 || num == 5){
        resposta.innerHTML = "Você não pode rodar na quarta"
    }else if(num == 6 || num == 7){
        resposta.innerHTML = "Você não pode rodar na quinta"
    }else if(num == 8 || num == 9){
        resposta.innerHTML = "você não pode rodar na sexta"
    }else{
        resposta.innerHTML = "Por favor tente novamente"
    }
}
function palestra(){
    let palestra = Number(prompt("Digite o numero da palestra(1-5):"))
    resposta.innerHTML = "Palestra de "
    if(palestra == 1){
        resposta.innerHTML += "Animações com scratch, labotario 305, 19h"
    }else if(palestra == 2){
        resposta.innerHTML += "Scratch para gamers, labotaratorio 512, 20h"
    }else if(palestra == 3){
        resposta.innerHTML += "Javascript para leigos, laboratorio 101,19h"
    }else if(palestra == 4){
        resposta.innerHTML += "Tópicos avançados de javascript, laboratorio 305, 20h"
    }else if(palestra == 5){
        resposta.innerHTML += "Vida e carreira, auditorio, 21h"
    }else{
        resposta.innerHTML = "error 404, por favor digite novamente "
    }
}
function media(){
    let media,num1,num2
    num1 = Number(prompt("Digite a primeira nota:"))
    num2 = Number(prompt("Digite a segunda nota"))
    media = (num1 + num2) /2    
    resposta.innerHTML = "Sua nota é de " + media
    if(media >= 7){
        resposta.innerHTML += "<br>Parabéns! Você passou "
    }else{
        resposta.innerHTML += "infelizmente você reprovou"
    }
}
function game(){
    let pontuacao = Number(prompt("Sua pontuação:"))
    if(pontuacao <=10){
        resposta.innerHTML = "Deu ruim"
    }else if(pontuacao>10 && pontuacao <=100){ // && = e || = or
        resposta.innerHTML = "Tá... Você consegue aumentar isso! Consistencia é a chave de tudo!"
    }else if(pontuacao > 100 && pontuacao <=200){
        resposta.innerHTML = "Supimpa!"
    }else if(pontuacao >200){
        resposta.innerHTML = "MITOU!"
     }else{
        resposta.innerHTML = "Pontuação invalida"
        }
}
function uber(){
    let diaria, precodiaria, total_pagar,desconto_25
    diaria = Number(prompt("Numero de diarias:"))
    if(diaria <= 5){ 
        precodiaria = 100
        total_pagar = precodiaria *diaria
    }else if(diaria >=6 && diaria <=10){
        precodiaria = 90
        total_pagar = precodiaria * diaria
    }else{
        precodiaria = 80
        total_pagar = precodiaria * diaria
    }
    desconto_25 = total_pagar *0.25
    total_pagar = total_pagar - desconto_25 + 150
    resposta.innerHTML = "Como você vai ficar " + diaria + "dias você vai pagar um total de R$" + total_pagar
    resposta.innerHTML += "<br>Você iria pagar R$" + precodiaria + "por dia"
    resposta.innerHTML += "<br>Mas a moça da recepção gostou de você e te deu 10% de desconto, e mais 15% de desconto por você ser uber"
    resposta.innerHTML += "<br>Totalizando 25%"
    resposta.innerHTML += "<br>Você também teve que pagar R$150 por danificar materiais"
}