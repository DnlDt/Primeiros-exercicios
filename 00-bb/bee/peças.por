programa {
  funcao inicio() {
    inteiro codigo_peca1,codigo_peca2
    real quantidade_peca1, quantidade_peca2, preco_peca1, preco_peca2, totalpeca1,total
    escreva("Código da peça:")
    leia(codigo_peca1)
    escreva("Quantidade de peças que vai levar:")
    leia(quantidade_peca1)
    escreva("Valor unitario da peça:")
    leia(preco_peca1)
    totalpeca1 = quantidade_peca1 * preco_peca1
    escreva("\nO total da primeira pela é de " + totalpeca1)
    escreva("\n")
    escreva("\nCodigo da segunda peça:")
    leia(codigo_peca2)
    escreva("Quantidade da segunda peça:")
    leia(quantidade_peca2)
    escreva("Valor unitario da segunda peça:")
    leia(preco_peca2)
    preco_peca2 = quantidade_peca2 * preco_peca2
    total = totalpeca1 + preco_peca2
    escreva(total)
  }
}
