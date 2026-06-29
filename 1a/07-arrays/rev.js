function rodarfor(){
    for(let i = 0; i<50;i++)    {
        console.log(i)
    }
    }



function rodarwhile(){
    let i = 0
    while(i <50){
        i++
        console.log(i)
    }
}

function rodardowhile(){
    let i = 0
    do{ //sempre vai repetir pelo menos uma vez e depois verificar oq o while diz 
        console.log(i)
        i++
    }while(i<50)
}

function exemplodowhile(){
    let idade
    do{
        idade = Number(prompt("Digite sua idade:"))
    }while(idade < 18)
    alert("Você entrou no sistema")
}

function exemplodowhilelimitado(){
    let tentativas = 3 
    let idade 
    do{ // o do primeira executa o bloco para depois testar o while
        idade = Number(prompt("Digite sua idade:"))
        console.log(tentativas)
        tentativas --
    }while(idade <18 && tentativas>0) 
}