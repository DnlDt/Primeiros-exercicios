function começar(start){
    if(start == "comeca"){
        document.getElementById("esconda").classList.remove("hidden")
    }
}
function enviar(){
    let dias = document.getElementById("dias").value;
    let tarefas = 0
    tarefastotais = 0 
    let relatorio = ""
    dias = parseInt(dias)
    for(let c = 1; c<=dias;c++){
        tarefas = Number(prompt("Quantas tarefas foram concluidas no dia " + c)) // Usamos ${c} para o texto mudar dinamicamente: "Dia 1", "Dia 2"...
        tarefastotais = tarefastotais + tarefas
        relatorio = relatorio + "Dia " + c + ": " + tarefas + " Tarefa(s) concluida(s)<br>"
    }
    document.getElementById("resultado").innerHTML = relatorio 
}