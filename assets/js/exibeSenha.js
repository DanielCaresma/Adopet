const eye = document.querySelectorAll("[data-eye]")

eye.forEach(eye => {

    eye.addEventListener('click', event => {
        eye = event.target
        const inputSenha = eye.parentNode.querySelector('[data-senha]')

        if (inputSenha.type == "password") {
            inputSenha.type = "text"
            eye.classList.value = "fa-solid fa-eye icon-eye--hiden"
            console.log(event.target)
        } else {
            inputSenha.type = "password"
            eye.classList.value = "fa-solid fa-eye-slash icon-eye"
            console.log(eye.classList)
        }
        
    })

    // <i class="fa-solid fa-eye"></i>
})

