let idades = [18,20,12,35,14,15,38,88,99]
let precos = []
const produtos = [
  "Arroz Integral", "Feijão Carioca", "Açúcar Refinado", "Café Torrado", "Óleo de Soja",
  "Sal Refinado", "Macarrão Espaguete", "Molho de Tomate", "Farinha de Trigo", "Leite Integral",
  "Manteiga com Sal", "Queijo Mussarela", "Presunto Cozido", "Iogurte Natural", "Creme de Leite",
  "Leite Condensado", "Biscoito Recheado", "Pão de Forma", "Detergente Líquido", "Esponja de Aço",
  "Sabão em Pó", "Amaciante de Roupas", "Desinfetante", "Água Sanitária", "Shampoo Neutro",
  "Condicionador", "Sabonete em Barra", "Creme Dental", "Papel Higiênico", "Desodorante Spray",
  "Azeite de Oliva", "Vinagre de Álcool", "Milho de Pipoca", "Sardinha em Lata", "Atum em Pedaços",
  "Maionese", "Ketchup", "Mostarda", "Gelatina em Pó", "Achocolatado em Pó",
  "Suco de Uva", "Água Mineral", "Refrigerante de Cola", "Sabão em Barra", "Inseticida Spray",
  "Saco de Lixo 50L", "Fósforo", "Vela Branca", "Guardanapo de Papel", "Papel Alumínio"
];
function mostrarprodutos(){
    for(c = 0; c<produtos.length;c++){
        document.getElementById("lista-precos").innerHTML += produtos[c] + "<p class ="produtos">" + produtos[c] + "</p>"
    }
}










function array00(){
    // let i = 0
    // console.log("idade: " + idades[i]);
    

    // console.log("Idade: " + idades[0]);
    // console.log("Idade: " + idades[1]);
    // console.log("Idade: " + idades[2]);
    // console.log("Idade: " + idades[3]);
    // console.log("Idade: " + idades[4]);
    // console.log("Idade: " + idades[5]);

    for(i = 0; i<idades.length;i++){ //enquanto o i for menor que o tamaanho do array 
        console.log("idade: " + idades[i]);

    }
}


function addprecos(){
    let n = Math.ceil(Math.random() * 100)
    precos.push(n)

    // console.log(precos);
    document.getElementById("lista-precos").innerHTML = ""
    for(let i = 0;i<precos.length;i++){
        console.log(precos[i]);
        document.getElementById("lista-precos").innerHTML += precos[i] + " - "
        
    }
}