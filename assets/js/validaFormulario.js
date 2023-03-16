import confirmaSenha from "./confirmaSenha.js"

const camposDoFormulario = document.querySelectorAll("[required]")
const fromulario = document.querySelector("[data-formulario]")



const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'tooLong',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
    },
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio',
        tooShort: "A senha deve conter no mínimo 6 caracteres",
        patternMismatch: "A senha deve conter pelo menos um número, uma letra e um caracter especial",
    },
    confirmaSenha: {
        valueMissing: 'Confirme sua senha para finalizar o cadastro',
        customError: 'Este campo não corresponde a senha criada anteriormente'
    }
}


fromulario.addEventListener("submit", e => {
    e.preventDefault()

    const novoUsuario = {
        email: e.target.elements["email"].value,
        nome: e.target.elements["nome"].value,
        senha: e.target.elements["senha"].value,
    }

    if(JSON.parse(localStorage.getItem('usuarios')) != null) {
        let usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.push(novoUsuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
    } else {
        let usuarios = []
        usuarios.push(novoUsuario)
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
    }

    window.location.href = '../login.html'
})

camposDoFormulario.forEach(campo => {
    campo.addEventListener("blur", () => verificaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

function verificaCampo(campo) {
    let mensagem = ""
    campo.setCustomValidity('')

    if (campo.name == "confirmaSenha" && CompositionEvent.value != "") {
        confirmaSenha(campo)
    }

    tiposDeErro.forEach(erro => {

        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
        }
    })

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro')
    const validadorDeInput = campo.checkValidity()

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem
    } else {
        mensagemErro.textContent = ""
    }
}

