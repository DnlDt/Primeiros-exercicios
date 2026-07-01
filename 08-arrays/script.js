const diasdasemana =  ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
const copiasemana = []
function inverterarray(){
    while(diasdasemana.length > 0){
        let removido = diasdasemana.pop()
        copiasemana.push(removido)
    }
    console.log(diasdasemana);
    console.log(copiasemana);
    
}
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
    document.getElementById("listaprodutos").innerHTML = ""
    for(let i =0; i<produtos.length; i++){
        let j = i + 1
        document.getElementById("listaprodutos").innerHTML += "<p>" + j + "°: " + produtos[i] + " R$ "+ precos[i].toFixed(2).replace(".", ",") + "</p>"
    }
}

function remover(){
    precos.pop() //remove o preço
    //  o pop serve para remover o ultimo item da lista  
    produtos.pop() // remove o produto
    verprodutoscompreco() // atualiza a lista na tela 
}

function aumentar(){
    for(let i=0; i<precos.length; i++){
        precos[i] = precos[i]*4
    }
    verprodutoscompreco()
}
function adicionar(){
    let preco, produto

    do{
        produto = prompt("Produto:")
    }while(produto.trim() == "")
    
    do{
        preco = Number(prompt("Preço:"))
    }while(preco <=0)

    produtos.push(produto)
    precos.push(preco)
    verprodutoscompreco()
}