programa {
  funcao inicio() {
    real valor_total, valordiaria, desconto10
    real desconto15, multa=15,valorbruto
    inteiro dias
    escreva("Dias:")
    leia(dias)
    se (dias <=5){
      valordiaria = 100
    }senao se(dias>=6 e dias <=10){
      valordiaria = 90
    }senao se (dias>=11){ 
      valordiaria = 80
    }
    valorbruto = dias *valordiaria
    desconto10 = valorbruto *0.1
    desconto15 = valorbruto *0.15
    valor_total = valorbruto - desconto10 - desconto15 + multa
    escreva("Valor bruto: R$" + valorbruto)
    escreva("\nDesconto 1: R$" + desconto10)
    escreva("\nDesconto 2: R$" + desconto15)
    escreva("\nMulta: R$" +multa)
    escreva("\n")
    escreva("Total a pagar R$" + valor_total)
  }
}
