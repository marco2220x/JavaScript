//Función que indica el evento
function onClick() {
    console.log("hiciste clic");
    }

//Declaraación de la constante donde el objeto es el botón
const button = document.querySelector('#boton');
//Se llama a la función onClick una vez que ocurre un evento en el botón (se da un clic).
button.addEventListener('click',onClick);
