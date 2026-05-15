let faturamento_bruto, premiacoes, presentes, comissoes,lucro 
faturamento_bruto = Number(prompt("Faturamento bruto:"))
premiacoes = Number(prompt("gastos em Premiações:"))
presentes = Number(prompt("Gastos em Presentes:"))
comissoes = Number(prompt("Total pago em comissões:"))
lucro = faturamento_bruto - premiacoes - presentes - comissoes
alert("Você teve um lucro total de R$" + lucro)
