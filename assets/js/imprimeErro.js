export default function imprimeErro(campo, mensagem) {
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem
    } else {
        mensagemErro.textContent = ""
    }
}

