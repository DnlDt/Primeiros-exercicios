programa {
  funcao inicio() {
    real nota1,nota2, media
    escreva("Primeira nota:")
    leia(nota1)
    escreva("Segunda nota:")
    leia(nota2)
    media = (nota1 + nota2) /2
    se(media>=7){
      escreva("Parabéns! Você passou de ano")
    }
    senao { 
      escreva("Infelizmente você reprovou")
    }
  }
}
