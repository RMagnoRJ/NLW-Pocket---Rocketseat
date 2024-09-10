const { select, input } = require('@inquirer/prompts')

const cadastrando = async  () => {
    const item = await input({message: "Digite o produto: "})
    // chama a função INPUT importada no módulo INQUIRER

    if (item.length == 0){
        console.log("Escreva um item para cadastrar na lista!")
        return
        // Caso necessário podemos chamar a função no RETURN CADASTRANDO() de forma
        // que o user ficasse obrigado a digitar um item para a lista estando preso no
        // return função()
    }
}

const start = async() => {
// ASYNC significa que será ASSÍNCRONO já que, ele terá que AWAIT algumas funções
    while(true) {

        const opcao = await select({
            // chama o SELECT importado no modulo INQUIRER
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar item",
                    value: "cadastrar"
                },
                {
                    name: "Apresentar Lista de Compras",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao) {

            case "cadastrar":
                console.log("\n...CADASTRO...\n")
                await cadastrando()
                //o await avisa para o JS que ele terá que AGUARDAR a execução da função
                break
            
            case "listar":
                console.log("\n...LISTA DE COMPRAS...\n")
                break
            case "sair":
                console.log("\nENCERRANDO...\n")
                return
        }
    }
}
start();