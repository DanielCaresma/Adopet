async function listaAnimais() {
    const conexao = await fetch("http://localhost:3000/animais")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

export const conectaApi = {
    listaAnimais
}