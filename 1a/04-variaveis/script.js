let cont = 0
function incrementarcontagem(){
    cont = cont + 1
    document.getElementById("p-contagem").innerHTML = cont


}






let global = "Sou uma variavel global"
function funcao1(){
    let local = "Sou uma variavel local trlste D:"
    console.log(global)
    console.log(local);
}
function funcao2(){
    console.log(global);
    // console.log(local);
}
funcao1()
funcao2()