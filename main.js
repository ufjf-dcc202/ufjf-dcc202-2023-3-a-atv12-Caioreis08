import { getEstoque, limpaEstoque, transacaoNoEstoque } from "./estoque"

document.entrada.addEventListener('submit', leFormulario)

const olJoao = document.querySelector("#joao")
const olMaria = document.querySelector("#maria")

atualizaTela()

function leFormulario(event){
    event.preventDefault()

    const fruta = document.entrada.fruta.value
    const quantidade = document.entrada.quantidade.valueAsNumber
    const origem = document.entrada.origem.value
    const destino = document.entrada.destino.value

    console.log(`solicitado: ${origem} doa ${quantidade} ${fruta} para ${destino}`)

    transacaoNoEstoque(origem, destino, fruta, quantidade)
    atualizaTela()
}