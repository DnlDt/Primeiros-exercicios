programa {
  funcao inicio() {
    real nota1, nota2, nota3, media
    real div = 10
    escreva("Primeira nota: ")
    leia(nota1)
    nota1 = nota1 * 2
    escreva("Segunda nota: ")
    leia(nota2)
    nota2 = nota2 *3
    escreva("Terceira nota: ")
    leia(nota3)
    nota3 = nota3 *5
    media = (nota1 + nota2 + nota3) / div
    escreva("Média ponderada: " + media)
  }
}
