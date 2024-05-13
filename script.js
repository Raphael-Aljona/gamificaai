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