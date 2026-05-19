let cont = 0
let total = 0
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
