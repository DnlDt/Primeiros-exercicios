function garçom(){
    let salario = Number(document.getElementById("salario").value.trim())
    let emprestimo = Number(document.getElementById("emprestimo").value.trim())
    let num_pres = Number(document.getElementById("num_pres").value.trim())
    let trinta, parcela 
    trinta = salario * 0.3
    parcela = 
    if(salario <=0 || emprestimo <=0 || num_pres <=0){
        document.getElementById("resultado").innerHTML = "Por favor, digite novamente"
    }else if(emprestimo <=trinta){
        document.getElementById("resultado").innerHTML = "O emprestimo pode ser concedido"
    }else{
        document.getElementById("resultado").innerHTML = "O emprestimo não pode ser concedio"
    }
}