let gramas, preco, kilos
preco = Number(preco)
gramas = Number(prompt("Quantidade de ração(G):"))
kilos = gramas/1000
preco = kilos *10
alert("Como você vai querer " + gramas + " O preço será de R$" +preco)