// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir



let dinos = []

function salvarDados(){ // nao tem botao para essa funcao, entao nós ativamos ela chamando ela em toda função

    localStorage.setItem('dinos', JSON.stringify(dinos)) 
    // O localStorage é a "memória de longo prazo" do navegador. Se você fechar a aba ou desligar o PC, os dados continuam lá.
    // imagine que o localSto]
    // ]rage é um grande armário de gavetas.
    // O setItem é a ação de guardar algo em uma gaveta específica, que fica salvo no navegador, mesmo que recarregue a pagina
    // Ele sempre pede duas coisas (separadas por vírgula): setItem('nome_da_gaveta', valor_que_vai_dentro).
    // No caso, 'dinos' é a etiqueta que você colou na gaveta (a chave/key).
    // O JSON.stringify transforma tudo q ta na variavel dinos em linguagem json pq o localstorage só aceita texto puro, ela nao sabe oq é uma array ou um objeto


}

function carregarDados(){
    dinos = JSON.parse(localStorage.getItem('dinos'))|| []
    // Json.parse ele pega oq foi transformado em linguagem json e transforma de volta em js 
    //o getitem seria basicamente para buscar o item 'dinos' que foi guardado la em cima e trazer para a variavel dinos, mas antes disso o json.parse transforma esse item em linguagem js dnv
    // O || [] serve somente se o 'dinos' for nulo(se nao tiver nada dentro), se ele for nulo, a variavel dino vai receber [] (uma lista vazia) para nao bugar e continuar a rodar o programa

}

function cadastrarDino() {

    carregarDados() // carrega os dados q estão salvos no localstorage, se nao tiver nada no localstorage, nao vai carregar nada 

    const novoDino = { // esse {} é um objeto, ele serve para organizar uma informação dizendo exatamente oq ela é 

        id: Date.now(), // cria um id aleatorio contando os milissegundos de uma data de 1900 e pouco
        nome: document.getElementById('input-nome').value, // Oq está antes do : se chama propriedade, elas ficam dentro do novodino(objeto), elas servem para organizar e agrupar as informações fazendo elas nao ficarem soltas
        altura: Number(document.getElementById("input-altura").value),
        cor: document.getElementById("input-cor").value,
        custo: Number(document.getElementById("input-custo").value),
    }
    // pense nas propriedades como pequenas variaveis dentro de uma variavel maior
    //O : seria como o = quando for declara uma variavel, entao por exemplo, o nome seria igual nome = document.getElementById('input-nome').value

    dinos.push(novoDino)//o push vai jogar essas informações do jeito q estão, todas juntas no array dinos, mas vai mostrar ela separadamente, a cada vez q da o push cria um novo elemento

    console.log(dinos);
    limparFormulario()
    mostrarTodos()
    salvarDados()

}

function limparFormulario() {//limpa tudo oq o usuario tinha digitado
    document.getElementById('input-nome').value = ''//todos esses vão retirar oq a pessoa tinha escrito no formulario, seja o nome,altura etc... alterando o valor diretamente
    document.getElementById('input-altura').value = ''
    document.getElementById('input-cor').value = ''
    document.getElementById('input-custo').value = ''
    document.getElementById('input-id').value = ''

    document.getElementById('input-nome').focus()// faz a area de digitação voltar para a primeira q no caso seria o nome
}

function mostrarTodos(){
    document.getElementById('painel-dinos').innerHTML = '' //apaga tudo q tava anteriormente

    for(let i=0; i<dinos.length; i++){ // dinos.length seria a QUANTIDADE de elementos do array, nao o numero de posições. por exemplo se uma array tem 3 elementos q seria o dinos.length, a posição dele só iria até 2, pq as posições começam a contar em 0 já a quantidade começa a contar em 1, por isso usamos o < em vez do <=
        document.getElementById('painel-dinos').innerHTML += // essas crases fazem com q se possa criar com html aq. usamos o += pq se usassemos o = ele substituiria o elemento anterior pelo novo 
        `<div class="card-dino"> 
            <h2>${dinos[i].nome}</h2> 
            <p>Altura: ${dinos[i].altura}</p>
            <p>Cor: ${dinos[i].cor}</p>
            <p>Custo: ${dinos[i].custo}</p>
            <p>${dinos[i].id}</p>
        </div>
        ` // Botando dinos[i](dinos[0] por exemplo) pega a caixa inteira (o objeto com todas as propriedades daquele elemento). Quando você bota o .você abre a caixa e bota a informação q vc quer pegar, por exemplo o nome
        // Se você não colocasse o ${}, a tela do usuário iria mostrar literalmente a palavra escrita 'dinos[i].nome' ao invés de mostrar o valor da variavel 
    }
}


function testar() {
    
    // window.location.href = 'teste.html'

    carregarDados()

    localStorage.setItem('teste', 45)

    let testeDeLeitura = localStorage.getItem('teste')
    console.log(testeDeLeitura);
    

    dinos = [
        {
            id: 1718324500001,
            nome: "Rex",
            altura: 6.1,
            cor: "#8B4513", // Marrom
            custo: 150000
        },
        {
            id: 1718324500002,
            nome: "Velo",
            altura: 2.0,
            cor: "#2E8B57", // Verde escuro
            custo: 85000
        },
        {
            id: 1718324500003,
            nome: "Trike",
            altura: 3.0,
            cor: "#708090", // Cinza
            custo: 120000
        },
        {
            id: 1718324500004,
            nome: "Braqui",
            altura: 13.0,
            cor: "#556B2F", // Verde oliva
            custo: 250000
        },
        {
            id: 1718324500005,
            nome: "Ptero",
            altura: 1.5,
            cor: "#4682B4", // Azul aço
            custo: 95000
        }
    ]

    console.log(dinos);

}

function pesquisar(){// vai buscar o nome q o usuario digitar
    let nomeProcurado = document.getElementById('input-nome').value // vai pegar o nome q o usuario digitar

    for(let i = 0; i<dinos.length; i++){//vai fazer do 0 até o fim da array
        if(nomeProcurado == dinos[i].nome ){// vai verificar se o nome q o usuario digitou ta em alguma parte da array
            document.getElementById('input-altura').value = dinos[i].altura // nós conseguimos alterar o valor de um elemento fazendo ao contrario, primeiro pegando o id dele, depois botando o .value e dai botamos o valor novo dele
            document.getElementById('input-cor').value = dinos[i].cor //nesse caso vai aparecer na caixinha do formulario os novos valores, claro se o nome for verdadeiro
            document.getElementById('input-custo').value = dinos[i].custo
            document.getElementById('input-id').value = dinos[i].id
        }
        
    }

}



function salvarDino(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == dinos[i].id ){
            dinos[i].altura = document.getElementById('input-altura').value 
            dinos[i].cor = document.getElementById('input-cor').value 
            dinos[i].custo = document.getElementById('input-custo').value 
            dinos[i].id = document.getElementById('input-id').value 
        }
    }
    mostrarTodos()
    limparFormulario()
    salvarDados()
}


function excluirDino(){
    let id = Number(document.getElementById('input-id').value)

    for(let i = 0; i<dinos.length; i++){
        if(id == dinos[i].id ){
            console.log(dinos[i]);
            dinos.splice(i, 1)
            console.log(i);
        }
    }
    mostrarTodos()
    limparFormulario()
    salvarDados()
}