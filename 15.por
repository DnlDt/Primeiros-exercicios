programa {
  funcao inicio() {
    real imc,peso,altura
    escreva("Peso:")
    leia(peso)
    escreva("Altura:")
    leia(altura)
    altura = altura * altura
    imc = peso / altura
    escreva(imc)
  }
}
