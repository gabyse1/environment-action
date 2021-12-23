// Load speakers dynamically
const arrSpeakers = [];
let idSpeaker = 0;

function createObjSpeaker(image, name, experiece, studies) {
  idSpeaker += 1;
  const obj = {
    id: `speaker-${idSpeaker}`,
    image,
    name,
    experiece,
    studies,
    idSpeaker
  };

  arrSpeakers.push(obj);
}

createObjSpeaker('images/vivienne-chon.png', 'Vivienne Chon',
  `Professor of Ecology and Environment at Dartmouth College`,
  `Chon studied Environmental science, and published several investigations`);
createObjSpeaker('images/john-rogers.jpg', 'John Rogers',
  `Director de “Sustainable” en Mexico`,
  `Promueve la producción de biogás en base a residuos sólidos de animales`);
createObjSpeaker('images/haydee-pacheco.jpg', 'Haydee Pacheco',
  `Directora de la ONG “Give a chance” en Perú`,
  `Impulsora del uso de SUTRANE, un sistema natural de depuración de aguas negras`);
createObjSpeaker('images/nora-izza.jpg', 'Nora Izza',
  `Activista medioambiental en Colombia`,
  `Izza es un defensor férreo contra la tala indiscriminada de bosques`);
createObjSpeaker('images/victor-pers.png', 'Victor Pers',
  `Creadora de “Make a chage” en Guatemala`,
  `Proyecto de tratamiento de residuos sólidos en zonas urbanas`);
createObjSpeaker('images/carlos-estrada.jpg', 'Carlos Estrada',
  `Creador de “Un millón de árboles para la vida” en Bolivia`,
  `Iniciativa que busca fomentar la reforestación con especies nativas`);


const speakerCardsBox = document.querySelector('.speaker__cards');

function createSpeakerCards() {
  let cardHtml = '';

  arrSpeakers.forEach((card) => {

    if (card.idSpeaker > 2) cardHtml += `<div class="speaker__card hide-card hide-card-toggle">`;
    else cardHtml += `<div class="speaker__card">`;

    cardHtml += `<figure class="speaker__card-figure figure-center-image">
            <img src="${card.image}" alt="${card.name}'s photo">
          </figure>
          <figcaption class="speaker__card-caption">
            <p class="speaker__card-title">${card.name}</p>
            <p class="speaker__card-supptitle">${card.experiece}</p>
            <p class="speaker__card-description">${card.studies}</p>
          </figcaption>
        </div>`;
  });
  speakerCardsBox.innerHTML = cardHtml;
}

createSpeakerCards();

// Display hiden speaker cards
const speakerButtonMore = document.querySelector('.speakers__button-more');
let speakerToggleActive = false;

const displayAllSpeakers = _ => {
  const hideSpeakerCards = document.querySelectorAll('.hide-card-toggle');
  hideSpeakerCards.forEach((card) => {
    card.classList.toggle('hide-card');
  });

  speakerToggleActive = speakerToggleActive ? false : true;
  if (speakerToggleActive) speakerButtonMore.innerHTML = 'LESS';
  else speakerButtonMore.innerHTML = 'MORE';
}
speakerButtonMore.addEventListener('click', displayAllSpeakers);
