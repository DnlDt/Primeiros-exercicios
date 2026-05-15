let caminhao_jare, preco_caminhao, jare, faturamento, custo, lucro
caminhao_jare = Number(prompt("Quantidade de caminhoes:"))
preco_caminhao = 450
jare = 90
quantidade_jare = caminhao_jare * 50
faturamento = quantidade_jare * 90
custo = preco_caminhao * caminhao_jare
lucro = faturamento - custo
alert("Jarés vendidos: " + quantidade_jare)
alert("Faturamento: R$" + faturamento)
alert("custo: R$" + custo)
alert("Lucro: R$" + lucro)
