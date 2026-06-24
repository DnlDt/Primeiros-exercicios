function mostraraba(aba){
    document.getElementById("1").classList.add("hidden")
    document.getElementById("For").classList.add("hidden")
    document.getElementById("2").classList.add("hidden")

    if(aba == "parteone"){
        document.getElementById("1").classList.remove("hidden")
    }else if(aba == "for"){
        document.getElementById("For").classList.remove("hidden")
    }else if(aba == "partetwo"){
        document.getElementById("2").classList.remove("hidden")
    }
}


function quadrado(){
    let contador = 0
    while(contador <10){
        contador ++
        let quadrado = contador * contador
        alert(contador + "² = " + quadrado)
    }
}
function regressiva(){
    let contador = 10
    while(contador>0){
        alert(contador)
        contador = contador - 1
    }
}
function soma(){
    let total = 0
    let contador = 0 
    while(contador<100){
        contador ++ 
        total = total + contador
    }
    alert(total)
}
function tabuada(){
    let tabu = 0
    let contador = 0 
    while(contador<10){ 
        contador ++
        tabu = 5 * contador
        alert("5X" + contador + " = " + tabu)
    }
}
function tabuada_usuario(){
    let tabu = Number(prompt("Numero da tabuada:")) 
    let resultado = 0
    let contador = 0 
    while(contador<tabu){
        contador ++
        resultado = tabu * contador
        alert(tabu +"X" + contador + " = " + resultado)
    }
}
function impar(){ // 6
    let contador = 0 
    let impar
    while(contador<20){
        contador ++
        if(contador % 2 != 0){
            alert("O numero " + contador + " é impar")
        }
    }
}
function crescente(){
    let contador = 0 
    let contado = 10
    while(contador<10){
        contador ++
        alert(contador)
    }
    while(contado >0){
        contado --
        alert(contado)
    }
}
function fatorial(){ 
    // let n = Number(prompt("Digite um numero:"))
    // let c = n
    // resultado = 0
    // while(c>1){
    //     c--
    //     resultado = n * (c-1)
    // }
    // alert(resultado)
    let n = Number(prompt("Digite um numero:"))
    let c = n-1
    while(c>1){
        c--
        n = n*c
    }
    alert(n)
}

function maluquice(){
    c = 0
    while(c<100){
        c++
        if(c %3 == 0 && c %5 == 0){
            alert( c + "FizzBuzz")
        }else if(c %3 == 0){
            alert( c + "Fizz")
        }else if(c%5 == 0){
            alert(c + "Buzz")
        }else{
          alert(c)
        }
    }
}
function fracao(){ //10 n entendi esquerdo
    c = 0
    total = 0
    while(c<10){
        c++
        total = total + 1 /c
    }
    alert(total)
}

function imparr(){
    n = Number(prompt("Digite um numero para ver qual a quantidade de numeros impares e numeros pares até esse numero"))
    c = 0 
    i = 0
    p = 0
    while(c<n){
        c++
        if(c%2 == 0){
            p++
        }else{
            i++
        }
     }
     alert("A quantidade de numeros pares até o numero " + n + " é de " + p)
     alert("A quantidade de numeros impares até o numero " + n + " é de " + i)
}
function lista(){//estudar
    // 1. Criamos a nossa lista (o armário com as gavetas)
    let lista = [15, 8, 90, 3, 42]; 
    
    // 2. O ponto de partida: o primeiro número (gaveta 0) é o rei provisório
    let maior = lista[0]; 
    let menor = lista[0]; 
    
    // 3. O contador para abrir as gavetas
    let c = 0; 
    
    // O while vai rodar até o 'c' chegar na última gaveta (que é a gaveta 4)
    while(c < 4) { 
        c++; // Avança para a próxima gaveta (gaveta 1, depois 2, 3, 4...)
        
        // Testa se o número da gaveta atual é MAIOR que o nosso rei
        if (lista[c] > maior) {
            maior = lista[c]; // Se for, ele rouba o trono de maior
        }
        
        // Testa se o número da gaveta atual é MENOR que o nosso perdedor
        if (lista[c] < menor) {
            menor = lista[c]; // Se for, ele rouba o lugar de menor
        }
    }
    
    // 4. Mostramos quem sobreviveu nas caixas no final de tudo
    alert("O maior número da lista é: " + maior);
    alert("O menor número da lista é: " + menor);
}

function medialista(){
    let lista = [3,102,302,23,63];
    let media = 0 
    let c = 0 
    while(c<5){
        media = media + lista[c]
        c++
    }
    media = media/5
    alert("A média é de " + media)
}

function primo(){ // IA nao entnedi
    // 1. Pegamos o número que o usuário quer testar
    let num = Number(prompt("Digite um número para saber se ele é primo:"));
    
    // 2. Criamos o nosso "testador de números" começando em 2
    let divisor = 2; 
    
    // 3. A nossa testemunha. Começa valendo true (acreditamos que é primo)
    let ePrimo = true; 
    
    // 4. O while vai testar todos os números do 2 até chegar perto do número digitado
    while (divisor < num) {
        
        // Se o número dividir por algum divisor do meio do caminho com resto zero...
        if (num % divisor == 0) {
            ePrimo = false; // A testemunha descobre que ele NÃO é primo!
        }
        
        divisor++; // Avança para testar o próximo número (3, depois 4, 5...)
    }
    
    // 5. Fora do while, olhamos o que sobrou na nossa variável testemunha
    if (ePrimo == true) {
        alert("O número " + num + " é PRIMO! 🎉");
    } else {
        alert("O número " + num + " NÃO é primo. ❌");
    }
}






//Exercicios do for


function first(){
    let soma = 0
    for(let i = 1; i<=10; i++){
        soma +=i
    }
    alert("A soma total é de " + soma)
}
function tabuada(){
    n = Number(prompt("Digite um numero para ver a tabuada "))
    let resultado = 0 
    for(let c =0;c<=10; c++){
        resultado = n*c
        alert(n + "X" + c + " = " + resultado)
    }
}
function cuadrado(){
    let quadrado = 0 
    for(let c = 1; c <= 10 ;c++){
        quadrado = c*c
        alert(c + "² = " + quadrado)
    }
}
function js(){
    let palavra = "Javascript"
    for(let c = 0; c<=9; c++){
        alert(palavra[c])
    }
}
function multiply(){
    for(c = 1; c <=30; c++){
        if(c % 3 == 0){
            alert(c + " é divisivel por 3")
        }
    }
}

function aste(){
    let linha = ""; 
        for (let c = 1; c <= 10; c++) {
        linha = linha + "*"; 
    }
    alert(linha); 
}

function pari(){
    let soma =0 
    for(c = 0; c<=20; c +=2){
        soma = soma +c
    }
    alert(soma)
}

function fifty(){
    for(let c = 0; c<=50; c+=5){
        alert(c)
    }
}

function ola(){
    let ola = "Olá"
    for(c = 0; c<8; c++){
        alert(ola)
    }
}

function impa(){
    let soma = 0
    for(let c = 1; c<=15; c +=2){
        soma += c
    }
    alert(soma)
}


function sequencia(){
    let n = "" 
    for(let c = 1; c<=5; c++){
        n = n + c
        alert(n)
    }
}

function fato(){
    n = 5
    for(c = 4; c>=1; c--){
        n = n *c
    }
    alert(n)
}

function word(){
    palavra = prompt("Palavra:")
    o = 0
    for(c = 0; c < palavra.length; c++){ // o length faz as letras da palavra q o usuario digitar como numero. por exemplo, se o usuario digitar ovo palavra[0] =   palavra[1] = v e assim vai, por isso botamos o laço de repetição para fazer isso automaticamente e verificar se alguma das letras é a letra O
        if(palavra[c] == "o" || palavra[c] == "O"){
            o++
        }      
    }
    alert(palavra + " tem " + o + " letras O")
}