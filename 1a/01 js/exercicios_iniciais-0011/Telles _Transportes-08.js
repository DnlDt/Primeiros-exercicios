let frete, peso, distancia, volume
frete = Number(frete)
peso = Number(prompt("Peso:"))
distancia = Number(prompt("Distancia(KM):"))
volume = Number(prompt("Volume(M3): "))
frete = 15 +(2*peso) + (0.05*distancia) + (10*volume)
alert("O total do frete vai ser de R$" + frete)