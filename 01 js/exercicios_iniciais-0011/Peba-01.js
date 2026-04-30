// exercicio 01 - peba
let vitorias, empates
let pontos
vitorias = prompt ("Vitórias:")
vitorias = Number(vitorias)
empates = prompt ("Empates:")
empates = Number(empates)
vitorias = vitorias * 3
pontos = vitorias + empates
alert("O total de pontos do seu time no campeonato foi de " + pontos)