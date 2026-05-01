let chance, numero_celular
numero_celular = Number(prompt("Numero de vezes no celular: "))
chance = (0.1/(1+500*numero_celular)) * 100
alert("% de chance de sucesso: " + chance)