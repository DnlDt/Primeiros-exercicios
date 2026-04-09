programa {
  funcao inicio() {
    real item,saldo
    escreva("Preço do item:")
    leia(item)
    escreva("Saldo:")
    leia(saldo)
    se(saldo >= item){
      escreva("Você pode comprar esse item")
    }
    senao
      escreva("Você não pode comprar esse item")
  }
}
