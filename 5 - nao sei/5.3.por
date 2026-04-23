programa {
  funcao inicio() {
    inteiro numero_placa
    escreva("Ultimo numero da placa do seu veiculo:")
    leia(numero_placa)
    se (numero_placa == 0 ou numero_placa ==1) {
      escreva("Como sua placa tem o final " + numero_placa + " Você não pode andar de carro segunda-feira")
    }senao se(numero_placa == 2 ou numero_placa == 3){
      escreva("Como sua placa tem o final " + numero_placa + " Você não pode andar de carro terça-feira")
    }senao se(numero_placa == 4 ou numero_placa == 5){
      escreva("Como sua placa tem o final " + numero_placa + " Você não pode andar de carro quarta-feira")
    }senao se(numero_placa == 6 ou numero_placa == 7){
      escreva("Como sua placa tem o final " + numero_placa + " Você não pode andar de carro quinta-feira")
    }senao se(numero_placa == 8 ou numero_placa == 9){
      escreva("Como sua placa tem o final " + numero_placa + " Você não pode andar de carro sexta-feira")
    }
    }
    }
 
