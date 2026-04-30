let gasto, faturamento_ingressos, faturamento_venda,lucro, lucro_percentual
gasto = Number(prompt("Gasto com suprimentos/mercadorias:"))
faturamento_ingressos = Number(prompt("Faturamento em venda de ingressos:"))
faturamento_venda = Number(prompt("Faturamento em venda de itens:"))
lucro = faturamento_ingressos + faturamento_venda - gasto
lucro_percentual = (lucro/gasto) *100
alert("O seu lucro total foi de " + lucro)
alert("Seu lucro percentual foi de " + lucro_percentual + "%")