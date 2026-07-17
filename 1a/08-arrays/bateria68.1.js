const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
function bill(){
    personagens.push("Gill Bates")
    document.getElementById("resultado").innerHTML = personagens
}
function addinicio(){
    personagens.unshift("Dona bete")
    document.getElementById("resultado").innerHTML = personagens
}
function remover(){
    personagens.pop()
    document.getElementById("resultado").innerHTML = personagens
}
function removeprimeiro(){
    personagens.shift()
    document.getElementById("resultado").innerHTML = personagens
}
function removerganso(){
    for(let c = 0;c < personagens.length;c++){
        if(personagens[c] == "Capitão Ganso"){
            personagens.splice(c,1);
            break;
        }
    }
    document.getElementById("resultado").innerHTML = personagens
}

function junin(){
    personagens.push("Junin")
    document.getElementById("resultado").innerHTML = personagens
}
function remova(){
    const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];
    personagens.splice(2,2)
    document.getElementById("resultado").innerHTML = personagens
}