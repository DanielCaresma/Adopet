import imprimeErro from "./imprimeErro.js"

const formulario = document.querySelector("[data-formulario]")
const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach(campo => {
    campo.addEventListener("blur", () => validaLogin(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

formulario.addEventListener('submit', e => {
    e.preventDefault()

    window.location.href = "../animais.html"
})

function validaLogin(campo) {
    let mensagem = ''
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))


    // SE usuarios.find retorna NULL deve entrar na condição
    if (campo.name == "email" && !(usuarios.find(usuario => usuario.email == campo.value))) {
        campo.setCustomValidity('Email não cadastrado')
        mensagem = 'Email não cadastrado'
    }

    if (campo.name == "senha") {
        const email = formulario.elements["email"].value
        const usuario = usuarios.find(usuario => usuario.email == email)

        if (usuario.senha != campo.value) {
            campo.setCustomValidity('Senha inválida')
            mensagem = 'Senha inválida'
        }
    }

    imprimeErro(campo, mensagem)
}


