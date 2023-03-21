const telefone = document.querySelector('#telefone')

telefone.addEventListener('keypress', evento => {
    let inputLength = telefone.value.length

    if (!checkChar(evento)) {
        evento.preventDefault()
    }else if (inputLength == 0) {
        telefone.value += '('
    }else if (inputLength == 3) {
        telefone.value += ') '
    }else if (inputLength == 10 && telefone.value[5] == 9) {
        telefone.value += '-'
    }

    

})

function checkChar(evento) {
    const caractere = String.fromCharCode(evento.keyCode)
    const pattern = "[0-9]"

    if (caractere.match(pattern)) {
        return true
    }
}