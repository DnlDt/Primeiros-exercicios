function Star(){
    let distancia = Number(document.getElementById("distancia").value.trim())
    document.getElementById("resultado_s").innerHTML = ""
    document.getElementById("resultado_m").innerHTML = ""
    document.getElementById("resultado_h").innerHTML = ""
    document.getElementById("resultado_d").innerHTML = ""
    document.getElementById("resultado_M").innerHTML = ""
    document.getElementById("resultado_a").innerHTML = ""

    luz = 300000
    let minuto, segundos,hora, dia,mes,ano
    segundos = distancia/luz
    document.getElementById("resultado_s").innerHTML = "Tempo esperado:(Segundos)" + segundos
    if(segundos > 60){
        minuto = segundos /60
        document.getElementById("resultado_m").innerHTML = "<br>Tempo esperado(Minutos):" + minuto
        }if(minuto > 60){
            hora = minuto / 60
            document.getElementById("resultado_h").innerHTML = "<br>Tempo esperado(Horas):" + hora 
            }if(hora > 24){
                dia = hora/24
                document.getElementById("resultado_d").innerHTML = "<br>Tempo esperado(Dias):" + dia 
                }if(dia>30){
                    mes = dia / 30
                    document.getElementById("resultado_M").innerHTML = "<br>Tempo esperado(Meses):" + mes 
                    }if(mes>12){
                        ano = mes/12
                        document.getElementById("resultado_a").innerHTML = "<br>Tempo esperado(Anos):" + ano
    }
    }