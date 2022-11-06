function onClick() {
    console.log("hiciste clic");
    }

//Declaramos una constante con el objeto obtenido a travez del dom y mandamos una
//funcion a traves de un listener
const button = document.querySelector('#boton');
button.addEventListener('click',onClick);
