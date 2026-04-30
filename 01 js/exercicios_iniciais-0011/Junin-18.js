function aa(){ 
let qtd_hora, preco_hora, preco_final, lucro
qtd_hora = Number(prompt("Quantidade estimada de horas:"))
preco_hora = 350
preco_final = qtd_hora * preco_hora + 500
lucro = preco_final - 500
alert("Preco cobrado: R$" + preco_final)
alert("Seu lucro total foi de R$" + lucro)
}