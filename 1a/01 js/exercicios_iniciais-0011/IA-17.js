let num_caractere, custo, total
num_caractere = Number(prompt("Numero de caracteres:"))
custo = Number(prompt("Custo por token:"))
num_caractere = num_caractere + 5
total = (custo * num_caractere) 
alert("Tokens usados: " + num_caractere)
alert("Voce vai precisar de R$" + total + " para rodar o prompt")