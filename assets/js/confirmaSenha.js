export default function confirmaSenha(campo) {
    const senha = document.querySelector("[data-senha]").value
    const senhaReptida = campo.value
    
    if (!(senha == senhaReptida)){
        campo.setCustomValidity('Este campo não corresponde a senha criada anteriormente!')
    }    
}

