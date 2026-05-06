let resposta = document.getElementById('resultado')
function verificarprovisao(){
    let marujos, comida
    let comidaPorMarujo
    marujos = Number(prompt("Quantidade de marujos:"))
    comida = Number(prompt("Quantidade de comida:"))
    comidaPorMarujo = comida / marujos
    if(marujos >=10 && comidaPorMarujo >=1.5){ //||
        // alert("Vai viajar ")
        document.getElementById("resultado").innerHTML = "Provisões suficientes. Rumo ao horizonte"
    }else{
        // alert("Não rola")
        document.getElementById("resultado").innerHTML = "Algo está errado. Poseidom nao quer alguem no mar hoje"
    }

}
function calcularPrecoBrique(){
    let precoCompra, precovenda
    precoCompra = Number(prompt("Preço de compra:"))
    precovenda = precoCompra * 3
    // para botar casas decimais vai ser sempre na variavel q nem ta em baixo .toFixed(2) para duas casas decimais
    console.log("Preço para venda: R$" +precovenda.toFixed(2))
    if(precoCompra >0 && precovenda >0){ 
    document.getElementById("resultado").innerHTML = "Preco para venda: R$" + precovenda.toFixed(2)
    }
}
function verificarIdade(){
    let idade
    idade = Number(prompt("Digite sua idade:"))
    if(idade>= 18){
        resposta.innerHTML = "Você é maior de idade"
    }else{
        resposta.innerHTML = "Você é menor de idade"
    }
}

function advinharnumero(){
    // let numero = Math.round(Math.random()*10) //0...10
    // let numero = Math.floor(Math.random()*10) //0..9
    let numero = Math.ceil(Math.random()*3) //1..10
    // console.log(numero);
    // numero = numero *10
    // console.log(numero);
    // numero = Math.ceil(numero)
    // console.log(numero)
    let chute = Number(prompt("Chuta ai(1-7):"))
    if(chute == numero){
        resposta.innerHTML = "Acertou"
    }else{
        resposta.innerHTML = "Errou!"
    }
}

function verificardiasemana(){
    let numero, dia 
    numero = Number(prompt("Digita o numero:"))
    if(numero == 1){
        dia = "Domingo"
    }else if(numero == 2){
        dia = "Segunda"
    }else if(numero == 3){
        dia = "Terça"
    }else if(numero ==4){
        dia = "Quarta"
    }else if(numero == 5){
        dia = "Quinta"
    }else if(numero == 6){
        dia = "Sexta"
    }else if(numero == 7){
        dia = "Sábado"
    }else{
        dia = "Número incorreto. Por favor tente novamente"
    }
    document.getElementById("resultado").innerHTML = "Dia escolhido: " + dia
}
function parimpar(){
    let n = Number(prompt("Digite numero:"))
    if(n%2 == 0){
        alert("Par")
    }else if(n%2 == 1){
        alert("Impar")
    }
}