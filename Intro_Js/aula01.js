// (a) comentário
// (b) console.log = apresenta o resultado no console! Lembrando que, o fato de estar visível no console
// não significa que será apresentado na tela!
// (c) execute current file .js = F8
console.log("Hello world!");
// (d) tipos de dados = 
//     String : texto
//     Number : numeros
// (e) declaração de variavel = let var = conteúdo (no js não há necessidade de declarar o tipo da variável, 
//                                                 uma vez que o próprio js - tipagem fraca - consegue identificar 
//                                                 o tipo de dado utilizado automaticamente)
let texto = "isto é uma string";
let palavra = "a";
let numero = 2;
let real = 2.6;
console.log(texto);
console.log(numero);
console.log(numero+real);
console.log(palavra+palavra+palavra+palavra);
// (f) CONSTANTE = const variavel = conteudo
// (g) array = let var = ["conteudo"]
let vetor = ["array", "list", 22, 33.8];
console.log(vetor[0].charAt(0).toUpperCase() + vetor[0].slice(1,) + " " + vetor[1].toUpperCase());
console.log(vetor[0] + "s com dados diversos : " + vetor[2] + " + " + vetor[3] + " = " + (vetor[2] + vetor[3]) )
// (h) Objeto (dicionário) = let objeto {
//                                       chave : "valor"
//                                       } 
let pessoa1 = {
    
    nome : "Pedro",
    idade : 18,
    cidade : "Rio de Janeiro", 
    ativo : true
}

let pessoa2 = {
        nome : "Marcos",
        idade : 37,
        cidade : "São Paulo", 
        ativo : false
}

// (i) lista de objetos = let variavel = [ obj1, obj2 ]

let cadastro = [pessoa1, pessoa2]

console.log("\n----------- FOR PESSOA 1 -----------------------\n");

for (let item in pessoa1){
    console.log(item + " : " + pessoa1[item])     
}

console.log("\n----------- FOR PESSOA 2 -----------------------\n");

for (let item in pessoa2){
    console.log(item + " : " + pessoa2[item])     
}

console.log("\n----------- CADASTRO.Length -----------------------\n");

for (let i = 0; i < cadastro.length; i++){
    
    if (i == 0){
        console.log("**************************");
    }
    for (let item in cadastro[i]){
        console.log("   " +  item + " : " + cadastro[i][item] + " ")
    }
    console.log("**************************");
}

/* (j) método (função) = método está dentro de um objeto, enquanto a função está fora.

                        (parametro) => { corpo da função }

                        const soma = (a, b) => {
                        return a + b;
                        };

                        sintaxe tradicional:

                        function soma (a, b) {
                            return a + b;
                        }

*/

console.log("\n----------- JOGADOR1 info( ) -----------------------\n");

let jogador1 = {
    titulo1 : "Championship Junior",
    titulo2 : "Championship Mid Level",
    titulo3 : "Championship Senior",
    titulo4 : "Championship Master",
    info : (info) => {
        console.log(info)
    },
    full : () => {
        let cont = 0;

        for (item in jogador1){
            if (cont < 4){
                console.log(item + " : " + jogador1[item])
            }
            cont = cont + 1;
        }
    }
}

jogador1.info(jogador1.titulo1);

console.log("\n----------- JOGADOR1 FULL -----------------------\n");

jogador1.full();


console.log("\n----------- PLAYER1 SOMA() -----------------------\n");

let player1 = {
    jogo1 : 12,
    jogo2 : 5,
    jogo3 : 6,
    jogo4 : 19,
    jogo51 : 23,
}

function soma (){

    let tot = 0;
    for (chave in player1){
        tot = tot + player1[chave]
    }
    console.log("Total de pontos = " + tot)
    }

soma();






