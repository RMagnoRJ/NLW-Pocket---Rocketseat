const { select, input, checkbox } = require('@inquirer/prompts')

const fs = require("fs").promises

let listaItem 

const carregarCompras = async () => {

    try{
        const dados = await fs.readFile("compras.json", "utf-8")
        listaItem = JSON.parse(dados)
    }
    catch(erro){
        listaItem = []
    }
}

const salvarCompras = async () => {

    await fs.writeFile("compras.json", JSON.stringify(listaItem, null, 2))
}

const cadastrando = async  () => {

    const item = await input({message: "Digite o produto: "})
    // chama a função INPUT importada no módulo INQUIRER

    if (item.length == 0){
        console.log("Nenhuma entrada registrada!")
        return
        // Caso necessário podemos chamar a função no RETURN CADASTRANDO() de forma
        // que o user ficasse obrigado a digitar um item para a lista estando preso no
        // return função()
    } 

    let quantidade = "0"

    let tipo = "0"

    const opc = await input({message: "\n[1] Líquido (litro) \n[2] Peso (kg) \n[3] Unidade \n> "})

    if (opc == 1){
        quantidade = await input({message: "Digite o volume (litro): "})
        tipo = " litro"
        console.log("\n--------------------")
        console.log("   Item cadastrado \n    com sucesso!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
    } else if (opc == 2){
        quantidade = await input({message: "Digite o peso (kg): "})
        tipo = " kg"
        console.log("\n--------------------")
        console.log("   Item cadastrado \n    com sucesso!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
    } else {
        quantidade = await input({message: "Digite a quantidade: "})
        tipo = " unidade"
        console.log("\n--------------------")
        console.log("   Item cadastrado \n    com sucesso!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
    }

    listaItem.push(
        // push = add
        { value: item, quantidade: quantidade, tipo: tipo, checked: false }
    )
}

const listaDeCompras = async () => {

    if(listaItem == 0){
        console.log("\n--------------------")
        console.log("0 itens encontrados!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
        return
    }

    const respostas = await checkbox({
        message: "\n[SETAS] navega entre os itens \n[ESPAÇO] marca/desmarca item \n[ENTER] retorna ao MENU\n",
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
    
    let total = 0
    console.log("\n--------------------")

    if (listaItem.length == 0 || listaItem == null){
        console.log("# Nenhum registro \n encontrado!")
        console.log("--------------------")
    }

    
    for (let i = 0 ; i < listaItem.length; i++){
        total++
        console.log("# " + listaItem[i].value.toUpperCase())
        console.log("  "+ listaItem[i].quantidade + " " + listaItem[i].tipo)
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------")
       
    }
  
    console.log("### TOTAL " + total + " item")
    console.log("--------------------")
    const cont = await input({message: "[ENTER] Avançar > "})
    console.log("--------------------\n")

}

const itensComprados = async () => {

    const comprados = listaItem.filter((item) => {
        return item.checked == true
    })

    if (comprados.length == 0){
        console.log("\n--------------------")
        console.log("0 itens encontrados!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
        return
    }

    await select ({
        message: "\n# " + (comprados.length - 1) + " itens comprados\n\n[ENTER] retorna ao MENU\n",
        choices: [...comprados]
    })
}

const faltaComprar = async () => {
    const faltaComprar = listaItem.filter((item) => {
        return item.checked == false
    })

    if (faltaComprar.length == 0){
        console.log("\n--------------------")
        console.log("0 itens encontrados!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
        return
    } else {
        await select ({
            message: "\nRestam # " + faltaComprar.length + " itens\n\n[ENTER] retorna ao MENU\n",
            choices: [...faltaComprar]
        })
    }
}

const excluir = async () => {

    if(listaItem == 0){
        console.log("\n--------------------")
        console.log("0 itens encontrados!")
        console.log("--------------------")
        const cont = await input({message: "[ENTER] Avançar > "})
        console.log("--------------------\n")
        return
    }

    const itensExcluidos = listaItem.map((item) => {
        return {value: item.value, checked: false}
    })

    const itensAdeletar = await checkbox({
        message: "\n[SETAS] navega entre os itens \n[ESPAÇO] marca item para excluir\n[ENTER] retorna ao MENU\n",
        choices: [...itensExcluidos],
        instructions: false,
    })

    if(itensAdeletar.length == 0){
        console.log("Nenhum item selecionado!")
        return
    }

    itensAdeletar.forEach((itemDeletado) => {
        listaItem = listaItem.filter((itemFiltrado) => {
            return itemFiltrado.value != itemDeletado
        })
    })

    console.log("\n--------------------")
    console.log("Item excluído \ncom sucesso!!")
    console.log("--------------------")
    const cont = await input({message: "[ENTER] Avançar > "})
    console.log("--------------------\n")

}

const limparConsole = () => {
    console.clear();
}

const start = async() => {
// ASYNC significa que será ASSÍNCRONO já que, ele terá que AWAIT algumas funções
    await carregarCompras()
    
    while(true) {

        limparConsole()
        await salvarCompras()

        const opcao = await select({
            // chama o SELECT importado no modulo INQUIRER
            message: "\n***** MENU *****\n\n>",
            choices: [
                {
                    name: "Cadastrar item",
                    value: "cadastrar"
                },
                {
                    name: "Excluir item",
                    value: "excluir"
                },
                {
                    name: "Falta comprar",
                    value: "comprar"
                },
                {
                    name: "Itens comprados",
                    value: "comprados"
                },
                {
                    name: "Check itens",
                    value: "marcar"
                },
                {
                    name: "Histórico de Compras",
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
                
                await cadastrando()
                //o await avisa para o JS que ele terá que AGUARDAR a execução da função
                break

            case "excluir":
                
                await excluir()
                break
            
            case "listar":
                
                await mostraLista()
                break

            case "comprar":
                
                await faltaComprar()
                break

            case "marcar":
                
                await listaDeCompras()
                break

            case "comprados":
                
                await itensComprados()
                break

            case "sair":
                console.log("\nENCERRANDO...\n")
                return
        }
    }
}
start();