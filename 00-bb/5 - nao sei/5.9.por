programa {
  funcao inicio() {
    real altura, peso_ideal
    inteiro genero
    escreva("Digite 1 para Feminino")
    escreva("\nDigite 2 para Masculino")
    escreva("\nGenero:")
    leia(genero)
    escreva("Altura(M):")
    leia(altura)
    se (genero == 1){
      peso_ideal = (62.1* altura) - 44.7
      escreva("Seu peso ideal é de " + peso_ideal)
    }senao se(genero == 2){
      peso_ideal = (72.7*altura) - 58
      escreva("Seu peso ideal é de " + peso_ideal)
    }
  }
}
