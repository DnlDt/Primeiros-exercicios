programa {
  funcao inicio() {
    inteiro idade
    escreva("Idade do cachorro:")
    leia(idade)
    idade = idade * 7
    escreva("Em anos humanos seu cachorro tem " + idade)
    se (idade>=65) {
      escreva("\nVocê já pode se aposentar")
    }
    senao
      escreva("\nSeu cachorro ainda nao pode se aposentar")
  }
}
