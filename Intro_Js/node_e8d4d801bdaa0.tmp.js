const { select, input, checkbox } = require('@inquirer/prompts')

let item = {
    value: 'Tomate',
    quantidade: "5",
    //tipo: "unidade",
    checked: true
}

let listaItem = [ item ]

const cadastrando = async  () => {

    const item = await input({message: "Digite o produto: "})
    // chama a função INPUT importada no módulo INQUIRER

    let quantidade = await input({message: "Digite a quantidade: "})

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

    if (item.length == 0){
        console.log("Escreva um item para cadastrar na lista!")
        return
        // Caso necessário podemos chamar a função no RETURN CADASTRANDO() de forma
        // que o user ficasse obrigado a digitar um item para a lista estando preso no
        // return função()
    } else {
        console.log("Item cadastrado com sucesso!")
    }

    listaItem.push(
        // push = add
        // { produto: produto, quantidade: quantidade, tipo: tipo, carrinho: false }
        { value: item, quantidade: quantidade, checked: false }
    )
}

const listaDeCompras = async () => {

    const respostas = await checkbox({
        message: "SETAS navega entre os itens ESPAÇO marca/desmarca item ENTER confirma produto no carrinho",
        choices: [...listaItem],
        instructions: false,
    })

    if(respostas.length == 0){
        console.log("Nenhum item foi selecionado")
        return
    }

    listaItem.forEach((it) => {
        it.checked = false
    })

    respostas.forEach((resposta) => {
        const item = listaItem.find((it) => {
            return it.value == resposta
        })
       item.checked = true
    })

}

const mostraLista = async () => {

    console.log(listaItem)

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
                    name: "Marcar itens na Lista",
                    value: "marcar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        
        })

        switch(opcao) {

            case "cadastrar":
                //console.log("\n...CADASTRO...\n")
                await cadastrando()
                //o await avisa para o JS que ele terá que AGUARDAR a execução da função
                break
            
            case "listar":
                //console.log("\n...LISTA DE COMPRAS...\n")
                //console.log(listaItem)
                await mostraLista()
                break
            case "marcar":
                    //console.log("\n...LISTA DE COMPRAS...\n")
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