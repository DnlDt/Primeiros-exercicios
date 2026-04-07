programa {
  funcao inicio() {
    inteiro dias
    real salario
    escreva("Digite seu salario: ")
    leia(salario)
    escreva("Quantos dias trabalhou no mes: ")
    leia(dias)
    salario = salario /dias
    escreva("Você ganha R$" + salario + " diariamente")
  }
}
