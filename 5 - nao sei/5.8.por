programa {
  funcao inicio() {
    inteiro idade
    escreva("Idade:")
    leia(idade)
    se (idade<16){
      escreva("Você ainda não pode votar porque tem menos de 16")
    }senao se (idade >=16 e idade<=17){
      escreva("Voto facultativo")
    }senao se(idade>=18 e idade <=65) {
      escreva("Voto obrigatorio")
    }senao
      escreva("Voto facultativo")
    }
  }

