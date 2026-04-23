programa {
  funcao inicio() {
    inteiro pf = 40
    inteiro pj = 33
    real tpf = 12
    real tpj = 42
    real vpf = 2350
    real vpj = 8900
    inteiro qtr = pf +pj
    inteiro ttt = tpf + tpj
    inteiro vtr = vpf + vpj
    real media_por_relatorio_pf = vpf / pf
    real media_por_relatorio_pj = vpj /pj
    real mtg_pf = tpf /pf
    real mtg_pj = tpj / pj
    escreva("A quantidade total de relatórios é de " + qtr)
    escreva("\nTempo total trabalhado: " + ttt)
    escreva("\nO valor total recebido foi de " + vtr)
    
    escreva("\n")
    escreva("\nVocê recebeu R$" + media_por_relatorio_pf + " por relatório PF feito ")
    escreva("\nVocê recebeu R$" + media_por_relatorio_pj + " por relatório PJ feito ")

    escreva("\n")
    escreva("\nA média de tempo gasto para of relatórios PF foi de " +mtg_pf +" já a de PJ foi de " + mtg_pj)

  }
}