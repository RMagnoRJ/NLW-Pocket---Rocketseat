const { select, input, checkbox } = require('@inquirer/prompts')

let item = {
    value: 'Tomate',
    //quantidade: "5",
    //tipo: "unidade",
    carrinho: true
}

let listaItem = [ item ]

const cadastrando = async  () => {

    const produto = await input({message: "Digite o produto: "})
    // chama a função INPUT importada no módulo INQUIRER

    /* let quantidade = "0"

    let tipo = "0"

    const opc = await input({message: "\n[1] Líquido (l) \n[2] Peso (kg) \n[3] Unidade \n> "})

    if (opc == 1){
        quantidade = await input({message: "Digite o volume (litro): "})
        tipo = " litro"
        // chama a função INPUT importada no módulo INQUIRER
    } else if (opc == 2){
        quantidade = await input({message: "Digite o peso (kg): "})
        tipo = " kg"
        // chama a função INPUT importada no módulo INQUIRER
    } else {
        quantidade = await input({message: "Digite a quantidade: "})
        tipo = " un"
        // chama a função INPUT importada no módulo INQUIRER
    }
    */
    if (produto.length == 0){
        console.log("\nEscreva um item para cadastrar na lista!\n")
        return
        // Caso necessário podemos chamar a função no RETURN CADASTRANDO() de forma
        // que o user ficasse obrigado a digitar um item para a lista estando preso no
        // return função()
    } else {
        console.log("\nItem cadastrado com sucesso!\n")
    }

    listaItem.push(
        // push = add
        // { produto: produto, quantidade: quantidade, tipo: tipo, carrinho: false }
        { value: produto, carrinho: false }
    )
}

const listaDeCompras = async () => {

    const respostas = await checkbox({
        message: "SETAS navega entre os itens ESPAÇO marca/desmarca item ENTER confirma produto no carrinho",
        choices: [...listaItem],
        instructions: false
    })

    if(respostas.length == 0){
        console.log("\nNenhum item foi selecionado\n")
        return
    }

    listaItem.forEach((it) => {
        it.carrinho = false
    })

    respostas.forEach((resposta) => {
        const item = listaItem.find((it) => {
            return it.value == resposta
        })
       item.carrinho = true
    })

}

const start = async() => {
// ASYNC significa que será ASSÍNCRONO já que, ele terá que AWAIT algumas funções
    while(true) {

        const opcao = await select({
            // chama o SELECT importado no modulo INQUIRER
            message: "\n\n***** Menu *****\n\n>",
            choices: [
                {
                    name: ">> Cadastrar item",
                    value: "cadastrar"
                },
                {
                    name: ">> Apresentar Lista de Compras",
                    value: "listar"
                },
                {
                    name: ">> Sair",
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
                //console.log(listaItem)
                await listaDeCompras()
                break
            case "sair":
                console.log("\nENCERRANDO...\n")
                return
        }
    }
}
start();