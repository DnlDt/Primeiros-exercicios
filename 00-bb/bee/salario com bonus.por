programa {
  funcao inicio() {
    caracter nome
    real salario, vendas, total
    escreva("Nome:")
    leia(nome)
    escreva("Salário fixo:")
    leia(salario)
    escreva("Vendas efetuadas no mês:")
    leia(vendas)
    total = salario + (vendas * 0.15)
    escreva(nome + ", seu salário total desse més é de " + total)
  }
}
