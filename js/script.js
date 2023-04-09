//Función para aplicar el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función para mostrar el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//deteccion del scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion para aplicar la animación de la barra de habilidades
function efectoHabilidades() {
    var educacion = document.getElementById("educacion");
    var distancia_edu = window.innerHeight - educacion.getBoundingClientRect().top;
    if (distancia_edu >= 300) {
        document.getElementById("utn").classList.add("barra-progreso1");
        document.getElementById("da").classList.add("barra-progreso2");
        document.getElementById("fs").classList.add("barra-progreso3");
    }

}