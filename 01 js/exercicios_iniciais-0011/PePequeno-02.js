//exercicio 02 - pé pequeno
let preco, quantidade, total
preco = prompt("Preço por cada par de calçado: R$")
preco = Number(preco)
quantidade = prompt("Quantidade de pares trocados:")
quantidade = Number(quantidade)
total = preco *quantidade
alert("A loja vai receber R$" + total + " em vale trocas")
//botando 2 decimais: tofixed(2)
console.log("Valor a receber: R$" + total.toFixed(2))