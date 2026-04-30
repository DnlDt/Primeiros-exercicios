let salario, dias,totaldia, semanal
salario = Number(prompt("Salário:"))
dias = Number(prompt("Dias trabalhados"))
totaldia = salario/dias
semanal = totaldia *5
alert("Você recebe " + totaldia + " por dia")
alert("Salário semanal: " + semanal)