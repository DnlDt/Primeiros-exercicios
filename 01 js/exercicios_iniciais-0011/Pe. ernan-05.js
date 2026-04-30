//exercicio 05 - Pe.ernan buco 
let custos, doacoes, pagamento
custos = Number(prompt("Custos da igreja:"))
doacoes = Number(prompt("Doações recebidas(dia):"))
pagamento = custos - doacoes
alert("Faltam R$" + pagamento + " para pagar os custos")