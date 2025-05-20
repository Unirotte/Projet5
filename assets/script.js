
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const slider = document.querySelector('.banner-slide');
const nbImg = slider.childElementCount;
const dots = document.querySelectorAll('.dot');
const texte = [
	{ titre: "Impressions tous formats", sousTitre:"en boutique et en ligne" },
	{ titre: "Tirages haute définition grand format", sousTitre:"pour vos bureaux et events" },
	{ titre: "Grand choix de couleurs", sousTitre:"de CMJN aux pantones" },
	{ titre: "Autocollants", sousTitre:"avec découpe laser sur mesure" }
]

const textePrincipal = document.querySelector('.arrow p');
const texteSecondaire = document.querySelector('.arrow p span');

let i = 0;

right.addEventListener('click', () => {
	if(i < nbImg - 1)
		i++;
	else
		i = 0;
	console.log(i);
	slider.style.transform = 'translateX(-' + (i * 100) + 'vw)';
	updateDots(i);
	updateTexte(i);
});

left.addEventListener('click', () => {
	if(i > 0)
	i--;
else
	i = nbImg - 1;
	console.log(i);
	slider.style.transform = 'translateX(-' + (i * 100) + 'vw)';
	updateDots(i);
	updateTexte(i);
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