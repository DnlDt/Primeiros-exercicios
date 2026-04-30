programa {
  funcao inicio() {
    real macas, preco
    escreva("Numero de maçãs:")
    leia(macas)
    se (macas <12){
      preco = 0.30
      preco = preco *macas
      escreva("Total: R$" + preco)
    }senao{
      preco = 0.25
      preco = preco *macas
      escreva("Total: R$" + preco)
    }
  }
}
