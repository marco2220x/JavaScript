function abririRegalo(event) {
    const image = event.currentTarget;
    image.src = "images/giphy.gif";

    const mensaje = document.querySelector('h1');
    mensaje.textContent = 'Felicidades';

    image.removeEventListener('click',abririRegalo);
};
const image = document.querySelector('img');
image.addEventListener('click',abririRegalo);
