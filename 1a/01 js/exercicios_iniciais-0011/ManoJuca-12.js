let salario, luz, agua, moradia, internet, gasolina, streamings, telefone, outros
salario = Number(prompt("Salario:"))
alert("Coloque os valores a serem pagos desse mês:")
luz = Number(prompt("Luz:"))
agua = Number(prompt("Água:"))
moradia = Number(prompt("Aluguel:"))
internet = Number(prompt("Internet:"))
gasolina = Number(prompt("Gasolina:"))
streamings = Number(prompt("Streamings:"))
telefone = Number(prompt("Telefone:"))
outros = Number(prompt("Outros:"))
salario = salario - luz - agua - moradia - internet - gasolina - streamings - telefone - outros
alert("No total do mês sobrou R$" + salario)
