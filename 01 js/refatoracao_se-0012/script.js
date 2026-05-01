function teletrans(){
    let frete, peso, distancia, volume
    peso = Number(prompt("Peso(KG):"))
    distancia = Number(prompt("Distancia(KM):"))
    volume = Number(prompt("Volume(M3):"))
    frete = 15 +(2*peso) + (0.05*distancia) + (10*volume)
    if(peso > 0 && distancia> 0 && volume >0){
        document.getElementById("resultado").innerHTML = "O total do frete vai ser de R$" +frete.toFixed(2)
    }else{
        document.getElementById("resultado").innerHTML = "Alguns dos valores digitados são menor ou igual a zero, por favor tente novamente"
    }
}



function donabete(){
    let fatu_bruto, premiacoes, gastos, comissoes, lucro,meta_lucro, faltou
    meta_lucro = Number(prompt("Meta de lucro: R$"))
    fatu_bruto = Number(prompt("Faturamento bruto:"))
    premiacoes = Number(prompt("Premiações: "))
    gastos = Number(prompt("gastos em presentes:"))
    comissoes = Number(prompt("Comissões:"))
    lucro = fatu_bruto - premiacoes - gastos - comissoes
    if(lucro >= meta_lucro){ 
        document.getElementById("resultado").innerHTML = "Você atingiu a meta de lucro. Lucro esperado: R$" + lucro.toFixed(2)
    }else{
        faltou = meta_lucro - lucro
        document.getElementById("resultado").innerHTML = "Infelizmente você não atingiu a meta de lucro, faltou R$" + faltou.toFixed(2)
    }
}

function pepequeno(){
    let preco, quantidade, total
    preco = prompt("Preço por cada par de calçado: R$")
    preco = Number(preco)
    quantidade = prompt("Quantidade de pares trocados:")
    quantidade = Number(quantidade)
    if(quantidade>100){
        document.getElementById("resultado").innerHTML = "Entre em contato com o fabricante"
    }else if(preco >0 && quantidade >0){
        total = preco *quantidade
        document.getElementById("resultado").innerHTML = "A loja vai receber R$" + total.toFixed(2) + " em vale trocas"
        console.log("Valor a receber: R$" + total.toFixed(2))
    }
    //botando 2 decimais: tofixed(2)
}
