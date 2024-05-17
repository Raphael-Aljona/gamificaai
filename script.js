let menu = document.getElementById('menu')
let iconeBarras = document.getElementById ("icone-barras")
let iconeX = document.querySelector ("#icone-x")

function abrirFecharMenu (){

    // Se o menu está fechado
    if (menu.classList.contains("menu-fechado")) {
        // fechar menu
        menu.classList.remove("menu-fechado")
        // Mostrar o icone X
        iconeX.style.display = "inline"
        // Esconder o icone barras
        iconeBarras.style.display = "none"

    }else {
        // abrir menu
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }


}

window.onresize = () => {
    menu.classList.remove ("menu-fechado")
    iconeX.style.display ("inline")
    iconeBarras.style.display ("none")
}

// Funçao carrosel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideAtual = 0

let numeroSlides = slides.length

let banner = document.querySelector('.banner')

banner.classList.add (slides[slideAtual])

const mostrarProximoSlide = () => {
    // Remove slide anterior
    banner.classList.remove (slides[slideAtual])

    if (slideAtual <numeroSlides -1) {
        slideAtual ++
    }else (slideAtual = 0)
    
    // Renderiza o slide atual
    banner.classList.add (slides[slideAtual])

}
const mostrarSlideAnterior = () => {
    banner.classList.remove (slides[slideAtual])

    if (slideAtual >0) {
        slideAtual --
    }else (slideAtual = numeroSlides - 1)

    banner.classList.add (slides[slideAtual])
}   


const selecionarSlide = (indiceSlide) => {
    slides.forEach( slide => banner.classList.remove(slide))

    slideAtual = indiceSlide

    banner.classList.add (slides[indiceSlide])
}

let listaCases = [] 

const renderizarCases = () => {
    let elementoLista = document.getElementById ("lista-cards")

    // Template strings
    let template = ""

    listaCases.forEach (cardCase =>{
        template += `<div class="card">
            <img src="${cardCase.imagem}" alt="">
            <p>${cardCase.descricao}</p>
            <button>Ver mais</button>
        </div>`
    })

    elementoLista.innerHTML = template
}

const carregarCases = () => {
    fetch("http://localhost:3000/cases")
    .then ( (resposta) => resposta.json())
    .then ( (dados) => {
        listaCases = dados
        renderizarCases ()
    })
}

// funcao formulario

const solicitarOrcamento = (event) => {
    // Pegar valores dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-textarea").value

    // Organizar objeto com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }


    // Enviar requisicao para a api
    // método HTTP POST - Create -> cadastrar ou criar
    fetch ("http://localhost:3000/solicitacoes", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(dadosForm)
    })
    .then (resposta => {
        console.log (resposta)
        // Limpar os campos
        document.querySelector ("#contato form").reset()

        // Mostrar alert com msg de sucesso
        alert("Solicitação cadastrada")
    })
    .catch (erro => {console.error(erro)

        console.error(erro)
        alert("Erro desconhecido")

    })

    event.preventDefault()


        // Limpar os campos
        // Mostra alert com msg de sucesso
}