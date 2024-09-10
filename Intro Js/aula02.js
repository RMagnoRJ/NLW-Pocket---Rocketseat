// (a) While (true)  = o laço while true é interrompido com um return ou break
// (b) operadores:  ( = ) atribuição
//                  ( == ) compara se dois valores são iguais
//                  ( === ) compara se dois valores são iguais e do mesmo tipo

console.log("\n----------- CONTA10() -----------------------\n");

const conta10 = () => {
    let num = 1

    while (num <= 10){
        console.log(num)
        num++
    }
}

conta10();

console.log("\n----------- SOMA10() -----------------------\n");

const soma10 = () => {
    let num = 1
    let soma = 0

    while (num <= 10){
        soma = soma + num
        console.log(soma)
        num++
    }
}

soma10();

console.log("\n----------- TABUADA() -----------------------\n");

const tabuada = (numero) => {

    let cont = 1

    while(cont <= 10){
        console.log(numero + " x " + cont + " = " + (numero * cont))
        cont++
    }
}

tabuada(2);

console.log("\n----------- TABUADA PAR() -----------------------\n");

const tabuadaPar = (numero) => {

    let cont = 1

    while(cont <= 10){

        if(cont % 2 == 0){
            console.log(numero + " x " + cont + " = " + (numero * cont))
        }
        cont++
    }
}

tabuadaPar(5);

// (c) .gitignore = Quando queremos que o github ignore arquivos ou pastas, basta criar um 
//                  arquivo na pasta principal do projeto chamado .gitignore e escrever
//                  no arquivo a pasta, ou, caminho da pasta desejada. Neste caso, estamos
//                  ignorando a pasta NODE_MODULES, código no arquivo:
//                  node_modules/

