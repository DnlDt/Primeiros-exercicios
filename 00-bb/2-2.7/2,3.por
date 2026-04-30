programa {
  funcao inicio() {
    inteiro show, bombas
    real  precobomba = 2.5
    escreva("Numero de show marcados: ")
    leia(show)
    bombas = show * 7
    precobomba = bombas * precobomba
    escreva("Você precisa comprar " + bombas +" bombas de fumaça no total")
    escreva("\nConsiderando que cada bomba seja R$2,50, o custo total vai ser de R$" + precobomba )

  }
}
