programa {
  funcao inicio() {
    real id, horas,valor_hora, salario

    escreva("Escreva sua ID:")
    leia(id)
    escreva("Horas trabalhadas:")
    leia(horas)
    escreva("Valor recebido por hora:")
    leia(valor_hora)
    salario = horas * valor_hora
    escreva("Sua ID é " + id)
    escreva("Seu salário vai ser de " + salario)

  }
}
