

const slider = document.querySelector('.banner-slide');
const images = document.querySelectorAll('.banner-img');
const nbImg = images.length;
let title, subtitle;
const dotsContainer = document.querySelector('.dots');
const banner = document.querySelector('#banner');
const slides = document.querySelectorAll('.slide');


async function Carrousel() {
  try {
    const response = await fetch('tableau.json');
    if (!response.ok) throw new Error('Erreur de chargement du fichier JSON');

    const tableau = await response.json();
    console.log(tableau);

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    const titleBox = document.createElement('div');
    titleBox.classList.add('banner-text');

    title = document.createElement('h2');
    title.classList.add('banner-title');

    subtitle = document.createElement('span');
    subtitle.classList.add('banner-subtitle');

    title.appendChild(subtitle);
    titleBox.appendChild(title);
    banner.appendChild(titleBox);


    tableau.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      if (index !== 0) slide.style.display = 'none';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.alt;
      img.classList.add('banner-img');

      slide.appendChild(img);
      slider.appendChild(slide);
    });

    tableau.forEach((item, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('dot_selected');
      dotsContainer.appendChild(dot);
    });

    startCarouselNavigation(tableau);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

function startCarouselNavigation(tableau) {
  const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

  let currentIndex = 0;

  function showSlide(index) {
    title.textContent = tableau[index].titre;
    subtitle.textContent = tableau[index].sousTitre;
    title.appendChild(subtitle);

    slides.forEach((slide, i) => {
      slide.style.display = (i === index) ? 'flex' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('dot_selected', i === index);
    });
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  let autoSlide;
  function startAutoSlide() {
    autoSlide = setInterval(() => {
      nextSlide();
    }, 5000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlide);
  }
  startAutoSlide();
  
  banner.addEventListener('mouseenter', stopAutoSlide);
  banner.addEventListener('mouseleave', startAutoSlide);

  document.querySelector('#left').addEventListener('click', prevSlide);
  document.querySelector('#right').addEventListener('click', nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  showSlide(currentIndex);
}
Carrousel();