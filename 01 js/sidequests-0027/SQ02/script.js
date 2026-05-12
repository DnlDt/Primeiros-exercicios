let resposta = document.getElementById("resultado")
function idade(){
    let idade
    let mensagem = ""
    idade = Number(prompt("Idade:"))
    if(idade>=18){
        mensagem = "Você é maior de idade"
    }else if(idade<18)
        mensagem = "Você é menor de idade"
    resposta.innerHTML = mensagem
}
function advivinha(){
    let numero = Math.ceil(Math.random()*10) // math random gera um numero entre 0 e e 0.999.  *10 pra multiplicar. Math ceil arredonda o num pra cima. exemplo: 5.4 vira 6
    let chute = Number(prompt("Chuta ai (1-10):"))
    console.log(numero)
    if (chute == numero){
        resposta.innerHTML = "Acertou"
    }else
        resposta.innerHTML = "Errou"
}
function diasemana(){
    let numero = Number(prompt("Digite um numero para descobrir o dia:"))
    if (numero == 1){
        resposta.innerHTML = "Dia escolhido: Domingo"
    }else if(numero == 2){
        resposta.innerHTML = "Dia escolhido: Segunda"
    }else if (numero == 3){
        resposta.innerHTML = "Dia escolhido: Terça"
    }else if(numero == 4){
        resposta.innerHTML = "Dia escolhido: Quarta"
    }else if(numero == 5){
        resposta.innerHTML = "Dia escolhido: Quinta"
    }else if(numero == 6){
        resposta.innerHTML = "Dia escolhido: Sexta"
    }else if(numero == 7){
        resposta.innerHTML = "Dia escolhido: Sábado"
    }else
        resposta.innerHTML = "Numero incorreto, por favor tente novamente"
}
function numeropar(){
    let numero
    numero = Number(prompt("Digite para ver se é par ou impar:"))
    if(numero % 2 == 0){
        resposta.innerHTML = "O numero é par"
    }else{
        resposta.innerHTML = "O numero é impar"
    }

}
function calc(){
    let num1,num2,resultado,opera
    num1 = Number(prompt("Digite um numero:"))
    num2 = Number(prompt("Digite outro numero:"))
    opera = prompt("Digite uma operação: A para adição, M para multiplicação, D para divisão, S para subtração")
    if(opera == "A" || opera == "a"){
        resultado = num1 + num2
        resposta.innerHTML = "O resultado é " + resultado
    }else if(opera ==="M" || opera ==="m"){
        resultado = num1 * num2
        resposta.innerHTML = "O resultado é " + resultado
    }else if(opera == "D" || opera == "d"){ 
        resultado = num1 / num2
        resposta.innerHTML = "O resultado é " + resultado
    }else if(opera == "S" || opera == "s"){
        resultado = num1 - num2
        resposta.innerHTML = "O resultado é " + resultado
    }else{
        resposta.innerHTML = "Por favor digite novamente"
    }
}
function nota(){
    let nota
    nota = Number(prompt("DIgite sua nota(0-100):"))
    if(nota>= 81.1){
        resposta.innerHTML = "Sua classificação é de A"
    }else if(nota>= 61.8){
        resposta.innerHTML = "Sua classificação é de B"
    }else if(nota>=41.6){
        resposta.innerHTML = "Sua classificação é de C"
    }else if(nota>=21.4){
        resposta.innerHTML = "Sua classificação é de D"
    }else if(nota >=0.2){
        resposta.innerHTML = "Sua classificação é de E"
    }else{
        resposta.innerHTML = "Sua classificação é menor que E"
    }
}
function comp(){
    let num1,num2
    num1 = Number(prompt("Digite o primeiro numero:"))
    num2 = Number(prompt("Digite o segundo numero:"))
    if(num1 > num2){
        resposta.innerHTML = num1 + " é maior que " + num2
    }else if(num2>num1){
        resposta.innerHTML = num2 + " é maior que " + num1
    }else{
        resposta.innerHTML = "Os dois numeros são iguais"
    }
}
function secret(){
    let senha
    senha = prompt("Digite a senha:")
    if(senha == "abracadabra"){
        resposta.innerHTML = "Parabéns! Você acertou a senha e agora vai ganhar 1 milhao de kwanzas!"
    }else{
        resposta.innerHTML = "Senha incorreta"
    }
}
function ano(){
    let ano
    ano = Number(prompt("Digite um ano:"))
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 ==0){
        resposta.innerHTML = ano + "É um ano bissexto"
    }else{
        resposta.innerHTML = ano + "Não é um ano bissexto"
    }
}
function compra(){
    let preco,saldo
    preco = Number(prompt("Preço do item:"))
    saldo = Number(prompt("Saldo bancario:"))
    if(preco > saldo){
        resposta.innerHTML = "Você não pode comprar esse item"
    }else if(saldo>=preco){
        resposta.innerHTML = "Você pode comprar esse item"
    }
}
function cachorro(){
    let idade,ano_humano
    idade = Number(prompt("Idade do cachorro em anos caninos:"))
    ano_humano = idade * 7
    resposta.innerHTML = "Seu cachorro tem " + ano_humano + " anos"
    if(ano_humano>=65){
        resposta.innerHTML += "<br>O dog ja pode se aposentar"
    }else{
        resposta.innerHTML += "<br>O dog ainda não pode se aposentar"
    }
}
function votacao(){
    let idade
    idade = Number(prompt("Idade:"))
    if(idade >=16){
        resposta.innerHTML = "Você ja pode votar"
    }else{
        resposta.innerHTML = "Você ainda nao pode votar"
    }
}
function imc(){
    let peso, altura,imc
    peso = Number(prompt("Peso:"))
    altura = Number(prompt("Altura:"))
    imc = peso /altura^2
    resposta.innerHTML = "Seu IMC é de " + imc
    if(imc<25){
        resposta.innerHTML += "Seu IMC é menor que 25"
    }else
        resposta.innerHTML += "Seu IMC é maior que 25"
}
function conversor(){
    let celsius, fah
    celsius = Number(prompt("Digite a temperatura em celsius: "))
    fah = celsius * 9/5 + 32
    resposta.innerHTML = "A temperatura total em fahreint é de " + fah
    if(fah >68){
        resposta.innerHTML += "<br>ALERTA! temperatura extremamente QUENTE"
    }
}
function mes(){
    let mes
    mes = prompt("Mês:")
    if(mes == "janeiro"){
        resposta.innerHTML = "Janeiro tem 31 dias"
    }else if(mes == "fevereiro"){ 
        resposta.innerHTML = "Fevereiro tem 28 dias"
    }else if(mes == "março" || mes == "marco"){
        resposta.innerHTML = "Março tem 31 dias"
    }else if(mes == "abril"){
        resposta.innerHTML = "Abril tem 30 dias"
    }else if(mes == "maio"){
        resposta.innerHTML = "Maio tem 31 dias"
    }else if(mes == "junho"){
        resposta.innerHTML = "Junho tem 30 dias "
    }else if(mes == "julho"){
        resposta.innerHTML = "Julho tem 31 dias"
    }else if(mes == "agosto"){
        resposta.innerHTML = "Agosto tem 31 dias "
    }else if(mes == "setembro"){
        resposta.innerHTML = "Setembro tem 30 dias "
    }else if(mes == "outubro"){
        resposta.innerHTML = "outubro tem 31 dias"
    }else if(mes == "novembro"){
        resposta.innerHTML = "Novembro tem 30 dias"
    }else if(mes == "dezembro"){
        resposta.innerHTML = "Dexembro tem 31 dias"
    }else{
        resposta.innerHTML = "Digite novamente "
    }
}   