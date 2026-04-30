function calcularPrecoBrique(){
    let precoCompra, precovenda
    precoCompra = Number(prompt("Preço de compra:"))
    precovenda = precoCompra * 3
    // para botar casas decimais vai ser sempre na variavel q nem ta em baixo .toFixed(2) para duas casas decimais
    console.log("Preço para venda: R$" +precovenda.toFixed(2))
    alert("Preço para venda: R$" +precovenda.toFixed(2))
    document.getElementById("resultado").innerHTML = "Preco para venda: R$" + precovenda.toFixed(2)

}
