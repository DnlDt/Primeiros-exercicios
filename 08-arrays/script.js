let idades = [22,33,32]

let produtos = ["Meia", "Pá de corte", "Suco de manga", "Leite"]
let precos = [665.9999, 777,12,4]

function verprodutos(){
    for(let i =0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById("listaprodutos").innerHTML += "<p>" + j + "°: " + produtos[i] + "</p>"
    }
}

function verprodutoscompreco(){
    for(let i =0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById("listaprodutos").innerHTML += "<p>" + j + "°: " + produtos[i] + " R$ "+ precos[i].toFixed(2).replace(".", ",") + "</p>"
    }
}

function remover(){
    for(let i =0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById("listaprodutos").innerHTML += "<p>" + j + "°: " + produtos[i] + " R$ "+ precos[i].toFixed(2).replace(".", ",") + "</p>"
    }
}

