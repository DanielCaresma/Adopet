import imprimeErro from "./imprimeErro.js"

const formulario = document.querySelector("[data-formulario]")
const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach(campo => {
    campo.addEventListener("blur", () => validaLogin(campo))
})

function validaLogin(campo) {
    let mensagem = ''
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))

    if(campo.name == "email" && !(usuarios.find(usuario => usuario.email == campo.value))) {
            campo.setCustomValidity('Email não cadastrado')
            mensagem = 'Email não cadastrado'
            imprimeErro(campo, mensagem)
    }
    
    if(campo.name == "senha"){
        
    }  
}


