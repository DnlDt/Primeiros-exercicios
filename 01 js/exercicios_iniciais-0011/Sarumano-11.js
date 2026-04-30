let shows, bombas,preco_bomba
shows = Number(prompt("número de shows marcados:"))
preco_bomba = Number(prompt("Preço unitario da bomba:"))
bombas = shows*7
preco_bomba = bombas * preco_bomba
alert("Você vai precisar de " + bombas+ " bombas no total")
alert("Custo total: " + preco_bomba)