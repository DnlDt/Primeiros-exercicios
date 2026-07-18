const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
function mostraraba(aba){
    if(aba === "parteum"){
        document.getElementById("1").classList.remove("hidden")
        document.getElementById("2").classList.add("hidden")
    }else if(aba === "partedois")
        document.getElementById("2").classList.remove("hidden")
        document.getElementById("1").classList.add("hidden")
}

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

function add(){
    const personagens = [
    "Peba",
    "Bilu",
    "Waldisney"
];
    personagens.push("Padre Ernan Buco")
    document.getElementById("resultado").innerHTML = personagens 
}

function adicione(){
    const personagens = [
    "Peba",
    "Bilu",
    "Waldisney"
];
    personagens.unshift("GENéZio", "Kowalski")
    document.getElementById("resultado").innerHTML = personagens
}

function indice(){
    const personagens = [
    "Peba",
    "Bilu",
    "Waldisney",
    "GENéZio"
];
    indicewalt = personagens.indexOf("Waldisney")
    document.getElementById("resultado").innerHTML = indicewalt // o indexof descobre em qual posição tao elemento ta 
}
function verifique(){
    const personagens = [
    "Peba",
    "Bilu",
    "Waldisney",
    "GENéZio"
];
contem = personagens.includes("Heitor tuga")//verifica se heitor tuga está no array acima 
document.getElementById("resultado").innerHTML = contem // false
}

function reverse(){
    const personagens = [
    "Lúcio Fernando",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates"
];
personagens.reverse()
document.getElementById("resultado").innerHTML = personagens
}

function remove(){
    const personagens = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];
personagens.splice(1,1)
document.getElementById("resultado").innerHTML = personagens
}

function addiniciofinal(){
    const personagens = [
    "Tião",
    "Junin",
    "Padre Ernan Buco"
];
personagens.push("Dona Bete")
personagens.unshift("Monica")
document.getElementById("resultado").innerHTML = personagens
}
function removafirstlast(){
    const personagens = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];
personagens.pop()
personagens.shift()
document.getElementById("resultado").innerHTML = personagens
}

function discindice(){
    const personagens = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];
indicegene = personagens.indexOf("GENéZio")
document.getElementById("resultado").innerHTML = indicegene
}

function verify(){
    const personagens = [
    "Rivaldo Jesus",
    "Kowalski",
    "GENéZio",
    "Waldisney"
];
verifiqu = personagens.includes("Capitão Ganso")
document.getElementById("resultado").innerHTML = verifiqu
}
function remover2(){
    const personagens = [
    "Bilu",
    "Mônica",
    "Gill Bates",
    "Junin",
    "Peba"
];
personagens.splice(0,2)
document.getElementById("resultado").innerHTML = personagens
}
function remove3final(){
    const personagens = [
    "Bilu",
    "Mônica",
    "Gill Bates",
    "Junin",
    "Peba"
];
personagens.splice(2,3)
document.getElementById("resultado").innerHTML = personagens
}
function addstartend(){
    const personagens = [
    "Capitão Ganso",
    "Heitor Tuga",
    "Dona Bete"
];
personagens.unshift("Lucio Fernando")
personagens.push("Gill Bates")
document.getElementById("resultado").innerHTML = personagens
}
function inverter(){
    const personagens = [
    "Capitão Ganso",
    "Heitor Tuga",
    "Dona Bete",
    "Gill Bates"
];
personagens.reverse()
document.getElementById("resultado").innerHTML = personagens
}
function verificacao() {
    const personagens = [
        "Padre Ernan Buco",
        "GENéZio",
        "Bilu",
        "Junin"
    ];
    
    const minuscula = personagens.map(p => p.toLowerCase()); //minuscula vai ser a variavel q vai receber a array inteira em minuscula, personagens.map vai pegar um por um e vai jogar dentro da variavel p, q usando a arrow vai executar o p.lowercase, pegando cada personagem e transformando em minuscula, e jogando na variavel minuscula
    
    //Usa a array 'minuscula' para fazer o includes
    const verifiqu = minuscula.includes("bilu");
    
    document.getElementById("resultado").innerHTML = verifiqu;
}

function padre(){
    const personagens = [
    "Padre Ernan Buco",
    "GENéZio",
    "Bilu",
    "Junin"
];
indic = personagens.indexOf("Padre Ernan Buco")
document.getElementById("resultado").innerHTML = indic
}
function monicacap(){
    const personagens = [
    "Lúcio Fernando",
    "Rivaldo Jesus",
    "Mônica",
    "Capitão Ganso",
    "Gill Bates",
    "Junin"
];
personagens.splice(2,2)
document.getElementById("resultado").innerHTML = personagens
}
function operacoes(){
    const personagens = [
    "Tião",
    "Peba",
    "Waldisney"
];
personagens.push("Bilu")
personagens.unshift("Dona Bete")
personagens.pop()
personagens.reverse()
document.getElementById("resultado").innerHTML = personagens 
}
function operacoes2(){
    const personagens = [
    "Gill Bates",
    "Kowalski",
    "GENéZio",
    "Padre Ernan Buco",
    "Heitor Tuga"
];
const contemkowal = personagens.includes("Kowalski")
const indic = personagens.indexOf("Padre Ernan Buco")
personagens.splice(2,1)
personagens.reverse()
document.getElementById("resultado").innerHTML = "Contem kowalski? " + contemkowal + "<br>" + "Indice do padre:" + indic + "<br>" + personagens
}

//bateria 68.2
function first(){
    const pessoas = ["Dona Bete", "Junin", "Gael", "Mônika", "Gill Bates"];
    pessoas.push("Capitão Ganso")
    veri = pessoas.includes("Mônika")
    document.getElementById("r").innerHTML = pessoas + "<br>" + "Inclui monika?     " + veri
}
function empresas(){
    const empresas = [
  "Macrohard",
  "Hotel Téo",
  "Pizza Ruth",
  "HD Cimentos",
  "Navegano",
  "Roller Store",
  "Be a Bar",
  "Indra",
  "Acarajéssica",
  "Reciclaudio"
];
empresas.shift()
const ind = empresas.indexOf("HD Cimentos")
document.getElementById("r").innerHTML = empresas + "<br>" + "A empresa HD cimentos está no indice " + ind
}
function addremove(){
    const pessoas = ["Kowalski", "Heitor Tuga", "Bilu", "Rita Aline", "Caio Pontes", "PeBa"];
    pessoas.unshift("Frei Dimão")
    pessoas.pop()
    document.getElementById("r").innerHTML = pessoas
}
function removaverify(){
    const empresas = [
  "Telles Transportes",
  "Rede Eco",
  "Pousada Ada",
  "Resort Orth",
  "Bergamota",
  "Amazonia",
  "Coxão do Santinho",
  "Casa de Pastel",
  "Rango Star",
  "Alibebe",
  "Ed Som",
  "Gê Estantes"
];
empresas.splice(5,1)
const inclui = empresas.includes("Amazonia")
document.getElementById("r").innerHTML = inclui
}
function invertadescubra(){
    const pessoas = [
  "Márcia",
  "Mano Juca",
  "Lúcio Fernando",
  "Roque",
  "Yasmina",
  "Waldisney",
  "Lady Murphy"
];
pessoas.reverse()
const posi = pessoas.indexOf("Roque")
document.getElementById("r").innerHTML = pessoas + "<br>" + "Roque está na posição " + posi
}
function addinverse(){
    const empresas = [
  "Harry Plotter",
  "Albergue Berg",
  "Camping Pim",
  "Ron Bernardo Pet Shop",
  "Visionery",
  "Armando Guerra",
  "Plumas de Avalon",
  "Romero Brique",
  "Meia Meia Meia",
  "Taberna Periódica",
  "Tião Megastore",
  "Milhion Pamonharia",
  "Templo de Salmão"
];
empresas.push("Banda Jota Qwert")
empresas.unshift("Rock In Reels")//ushift para mandar um elemento para o inicio shift para tirar um elemento no inicio 
empresas.reverse()
document.getElementById("r").innerHTML = empresas
}
function random(){
    const pessoas = [
  "Guilherme Portões",
  "Jeferson Bezerra",
  "Pe. Ernan Buco",
  "Ron Roni",
  "Seu Bernardo",
  "Luiza",
  "Van Grogue",
  "Rosa Negra"
];
pessoas.splice(Math.random)
}