function abririRegalo(){
    const image = document.querySelector('img');
    image.src = "./giphy.gif";
    image.removeEventListener('click',abririRegalo);
};
const image = document.querySelector('img');
image.addEventListener('click',abririRegalo);
