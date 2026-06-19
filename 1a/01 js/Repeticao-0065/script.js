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
function fatorial(){ // incompleto
    let fatora = Number(prompt("Numero:"))
    let resultado 
    while(fatora>0){
        p = fatora - 1
        resultado = fatora * p

    }
    alert(resultado)
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
function fracao(){ //10
    c = 0
    total = 0
    while(c<10){
        c++
        total = total + 1 /c
    }
    alert(total)
}

function impar(){
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
function lista(){
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