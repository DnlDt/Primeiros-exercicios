const diasdasemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'] // Usamos o const quando queremos guardar um valor em uma variável e temos certeza de que não vamos mudar o valor dessa variável direto depois.
const frutas = ['banana', 'maçã', 'uva']
function inverter(){
    diasdasemana.reverse("Segunda","Domingo") // reverse troca a posição dos elementos um com o outro, por exemplo, nessa linha, segunda[0] vai trocar de lugar com doming[6] no caso só trocariam de lugar
    document.getElementById("resultado").innerHTML = diasdasemana
}

function add(){
    diasdasemana.push("Feriado")
    document.getElementById("resultado").innerHTML = diasdasemana
}
function remove(){
    diasdasemana.pop()
    document.getElementById("resultado").innerHTML = diasdasemana
}

function num(){
    const pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    pares.splice(2,1, ("12"))
    document.getElementById("resultado").innerHTML = pares
}

function frt(){
    frutas.push("monrago")
    document.getElementById("resultado").innerHTML = frutas   
}
