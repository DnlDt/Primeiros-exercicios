programa {
  funcao inicio() {
    inteiro prompt = 5
    inteiro caractere, custo, custo_total
    escreva("Quantidade de caracteres do prompt:")
    leia(caractere)
    escreva("Custo por caractere: ")
    leia(custo)
    custo_total = custo * (caractere + prompt)
    escreva("Quantidade total de tokens: ")
    escreva("\nO custo total para escrever " + caractere + " caracteres é de " + custo_total)
  }
}