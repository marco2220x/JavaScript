function abririRegalo(event){
    const image = event.currentTarget;
    image.src = "images/giphy.gif";
    image.removeEventListener('click',abririRegalo);
};
const image = document.querySelector('img');
image.addEventListener('click',abririRegalo);
