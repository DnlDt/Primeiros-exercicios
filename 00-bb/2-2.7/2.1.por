programa {
  funcao inicio() {
    inteiro vitorias, empates, pontos
    escreva("Vitórias: ")
    leia (vitorias)
    vitorias = vitorias *3
    escreva("Empates: ")
    leia(empates)
    pontos = vitorias + empates
    escreva("O seu time tem um total de " + pontos)
  }
}
