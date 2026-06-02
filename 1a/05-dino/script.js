let dinoescolhido = ""
let dinosorteado = ""
function testar(){

    let n = parseInt (Math.random()*10)
    console.log(n)
    dinosorteado = converterparadionossauro(n)
    console.log(dinosorteado);
}
function escolherdino(){
    dinoescolhido = n
    dinosorteado = parseint(Math.random()*10)
    if(dinoescolhido == dinosorteado){
        alert("Ganhou!")
    }
    document.getElementById("outdinoescolhido").innerHTML = converterparadionossauro(dinoescolhido)
    document.getElementById("outdinosorteado").innerHTML = converterparadionossauro(dinosorteado)

}
function converterparadionossauro(n){
    let dino = ""
    if(n == 0){
        dino = "Espinossauro"
    }else if(n == 1){
        dino = "T-rex"
    }else if(n == 2){ 
        dino == "Braquiossauro"
    }else if(n == 3){ 
        dino == "Velocirraptor"
    }else if(n == 4){ 
        dino == "Estegossauro"
    }else if(n == 5){ 
        dino == "Triceratopo"
    }else if(n == 6){ 
        dino == "Anquilossauro"
    }else if(n == 7){ 
        dino == "Parassaurolofo"
    }else if(n == 8){ 
        dino == "Alossauro"
    }else if(n == 9){ 
        dino == "Carnotauro"
    }
    return dino
    // console.log(dino);
}