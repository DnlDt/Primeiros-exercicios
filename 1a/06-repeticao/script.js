// let contador = 0
// while(contador <10){
//     alert(contador)
//     contador ++
// } // voltar e testar novamente 
// alert("Não eh menor")



// let peso
// let contador = 0
// peso = Number(prompt("Digite o peso:"))
// if(peso>1.1 || peso<0.9){
//     alert("fora tolerancia do peso ")
// }
// contador ++

let total = 0
let i = 0
while(i < 3){
    i++
    let preco = Number(prompt("Digite o preço do " + i + "° produto"))
    total = total + preco

    document.getElementById("total").innerHTML += i + "° produto: R$" + preco.toFixed(2) + "<br>"
}