let resposta = document.getElementById("resultado")
function ganso(){
    let marujos, comida,quantidade_marujo, dias_mais
    faltam_comida = 1.5
    faltam_marujos = 10
    marujos = parseInt(prompt("Quantidade de marujos:")) 
    comida = Number(prompt("Quantidade de comida(KG):"))
    quantidade_marujo = comida /marujos
    if(marujos >=10 && quantidade_marujo >=1.5){
        resposta.innerHTML = "Provisões suficientes. Rumo ao horizonte!"
        if(quantidade_marujo >1.5){
            dias_mais = quantidade_marujo/ 1.5
            resposta.innerHTML += "Você pode ficar mais " + dias_mais + "dias com a comida que sobrou "
        }
    }else{
         resposta.innerHTML = "Algo está errado. Posseidom não quer ninguém no mar hoje."
         if(marujos <10){
            faltam_marujos = faltam_marujos - marujos
            resposta.innerHTML += "<br>Você precisa de mais " + faltam_marujos + "marujos para zarpar"
         }else if(quantidade_marujo <1.5){
            faltam_comida = faltam_comida - quantidade_marujo
            resposta.innerHTML += "<br>Você precisa de mais " + faltam_comida + "KG de comida por marujo para zarpar"
         }
    }
}