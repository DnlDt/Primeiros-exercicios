const diasdasemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'] // Usamos o const quando queremos guardar um valor em uma variável e temos certeza de que não vamos mudar o valor dessa variável direto depois.
const frutas = ['banana', 'maçã', 'uva']
const amigo = ['Alice', 'Bob', 'Charlie']
const amigo1 = ['Dave', 'Eva', 'Frank']

frutas.push("morango")
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
    pares.splice(2,1, ("12")) //va na variavel pares e a partir do da posição 2 (q é 6), delete 1 elemento, (o elemento 6), e substitua o 6 por "12"
    document.getElementById("resultado").innerHTML = pares
}

function frt(){
    frutas.splice(1,1) // va na variavel frutas na posição 1(maçã) e remove 1 elemento a partir dessa possivel.
    document.getElementById("resultado").innerHTML = frutas   
}

function juntar() {
    // 1. Pegamos a lista 'amigo1' e mandamos o forEach passar por ela
    amigo1.forEach((nome) => {
        
        // 2. A cada volta, a variável 'nome' carrega um amigo solto.
        // O push pega esse nome solto e joga no fim do array 'amigo'.
        amigo.push(nome);
        
    });

    // 3. Depois que o forEach terminar de rodar as 3 vezes, 
    // a gente mostra o resultado final na tela.
    document.getElementById("resultado").innerHTML = amigo;
}