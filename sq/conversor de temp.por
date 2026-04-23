programa {
  funcao inicio() {
    real celsius, fah
    escreva("Temperatura(C):")
    leia(celsius)
    fah = celsius *1.8 + 32
    escreva("A temperatura atual é de " +fah)
    se (fah>68){
      escreva("\nAlerta: Supertemperatura identificada, se hidrate")
    
    }
  }
}
