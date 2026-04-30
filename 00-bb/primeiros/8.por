programa {
  funcao inicio() {
    real mercadorias = 8750
    real faturamento_ingressos = 8200
    real fatura_venda = 6000
    real lucro = faturamento_ingressos + fatura_venda - mercadorias
    real lucropercentual 
    lucropercentual = (lucro / mercadorias) *100
    escreva("Considerando que você gastou R$" + mercadorias + " para suprimentos/mercadorias")
    escreva("\nVocê obteve um lucro de R$" + lucro)
    escreva("\nSendo " + lucropercentual + "% de lucro")
  }
}
