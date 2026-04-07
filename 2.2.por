programa {
  funcao inicio() {
    inteiro caminhoesnum, lucro, faturamento, custocaminhao
    escreva("Numero de caminhoes: ")
    leia(caminhoesnum)
    custocaminhao = 450 * caminhoesnum
    faturamento = (90*50) *caminhoesnum
    lucro = faturamento - custocaminhao
    escreva("Você faturou um total de: R$" + faturamento)
    escreva("\nConsiderando que você contratou " + caminhoesnum + " caminhões seu custo total foi de R$" + custocaminhao)
    escreva("\nPortanto seu lucro total foi de R$" + lucro + " Nessa temporada de vendas")
  }
}
