//Menu Hamburguer 
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu(){
    //Se o menu está fechado
    if(window.getComputedStyle(menu).right == "-250px"){
        //Abrir o menu
        menu.style.right = "0"

        //Mostrar icone X
        iconeX.style.display = "inline"

        //Esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "300px"

    }else{
        //Fechar o menu
        menu.style.right = "-250px"

        //Esconder icone X
        iconeX.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }   
}

onresize = () =>{
    if(window.getComputedStyle(menu).right == "-250px"){
        //Mostra icone X
        iconeX.style.display = "none"
    }else{
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}