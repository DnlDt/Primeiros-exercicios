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
function fracao(){
    c= 0 
    let total = 0 
    while(c<10){
        c++
        total = total + (1/c)
    }
    alert(total)
}