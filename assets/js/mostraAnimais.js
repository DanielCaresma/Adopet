import { conectaApi } from "./conectaApi.js"

const animais = document.querySelector("[data-animais]")

function constroiCard(imagem, nome, idade, porte, personalidade, cidade) {
  const animal = document.createElement("div")
  animal.classList = "card-animal"

  animal.innerHTML = `
    <img src="${imagem}" alt="Imagem de ${nome}" class="animal__imagem">
    <div class="animal__ficha">
        <h2 class="animal__nome">${nome}</h2>
        <p class="animal__info">${idade}</p>
        <p class="animal__info">Porte ${porte}}</p>
        <p class="animal__info">${personalidade}</p>
        <p class="animal__cidade">${cidade}</p>
        <a href="./contato.html" class="animal__contato"><img src="./assets/img/icone-mensagem.svg" alt="Falar com responsável" class="animal__contato__icone">Falar com responsável</a>
    </div>
  `

  return animal
}

async function listaAnimais() {
  const listaApi = await conectaApi.listaAnimais()

  listaApi.forEach(elemento => animais.appendChild(
    constroiCard(elemento.imagem, elemento.nome, elemento.idade, elemento.porte, elemento.personalidade, elemento.cidade)
  ));
}

listaAnimais()