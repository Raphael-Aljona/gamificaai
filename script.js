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

