
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('.banner-slide');
const images = document.querySelectorAll('.banner-img');
const nbImg = images.length;
const dots = document.querySelectorAll('.dot');

const texte = [
    { titre: "Impressions tous formats", sousTitre: "en boutique et en ligne" },
    { titre: "Tirages haute définition grand format", sousTitre: "pour vos bureaux et events" },
    { titre: "Grand choix de couleurs", sousTitre: "de CMJN aux pantones" },
    { titre: "Autocollants", sousTitre: "avec découpe laser sur mesure" }
];

const textePrincipal = document.querySelector('.arrow p');
const texteSecondaire = document.querySelector('.arrow p span');

let i = 0;
let intervalId;

function showImage(index) {
    images.forEach((img, j) => {
        img.classList.toggle('active', j === index);
    });

  
    updateDots(index);
    updateTexte(index);
}

right.addEventListener('click', () => {
    i = (i + 1) % nbImg;
    showImage(i);
});

left.addEventListener('click', () => {
    i = (i - 1 + nbImg) % nbImg;
    showImage(i);
});


function updateDots(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('dot_selected', i === index);
    });
}

function updateTexte(index) {
    textePrincipal.firstChild.textContent = texte[index].titre + ' ';
    texteSecondaire.textContent = texte[index].sousTitre;
}

showImage(i); 


