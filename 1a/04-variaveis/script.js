let cont = 0
let total = 0
let totalrolado = 0
let contd2 = 0
let contd4 = 0

function resetar(){
    totalrolado = 0
    document.getElementById("outputultima").innerHTML = ""
    document.getElementById("outputtotal").innerHTML = 0
    document.getElementById("historico").innerHTML = ""
}
function rolardado(numero){
    let dado = Math.ceil(Math.random()*numero)
    document.getElementById("historico").innerHTML += "<span>d" + numero + ": " + dado + "</span>"
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}






function rolard2(){
    let dado = Math.ceil(Math.random()*2)
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}
function rolard4(){
    let dado = Math.ceil(Math.random()*4)
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}
function rolard6(){
    let dado = Math.ceil(Math.random()*6)
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}
function rolard10(){
    let dado = Math.ceil(Math.random()*10)
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}
function rolard12(){
    let dado = Math.ceil(Math.random()*12)
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}
function rolard20(){
    let dado = Math.ceil(Math.random()*20)
    document.getElementById("outputultima").innerHTML = dado
    totalrolado += dado
    document.getElementById("outputtotal").innerHTML = totalrolado
}












function registrarvenda(){
    let valor = Number(document.getElementById("inputVenda").value)
    console.log(valor)
    total = total + valor
    document.getElementById("p-totalVendido").innerHTML = "Total de vendas: R$" + total.toFixed(2)
    document.getElementById("listaVendas").innerHTML += "R$" + valor.toFixed(2) + "<br>"
    document.getElementById("inputVenda").value = ""
    document.getElementById("inputVenda").focus()
}  





function incrementarcontagem(){
    cont = cont + 1
    document.getElementById("p-contagem").innerHTML = cont
}
function decrementarcontagem(){
   cont--
   document.getElementById('p-contagem').innerHTML = cont
}
function somar10(){
    cont = cont + 10
    document.getElementById('p-contagem').innerHTML = cont
}
function somar2(){
    cont = cont + 2
    document.getElementById("p-contagem").innerHTML = cont
}
function zero(){
    cont = 0
    document.getElementById("p-contagem").innerHTML = cont
}
function sub10(){
    cont = cont -10
    document.getElementById("p-contagem").innerHTML = cont
}
let global = "Sou uma variavel global"
// function funcao1(){
//     let local = "Sou uma variavel local *()*"
//     console.log(global)
//     console.log(local);
// }

