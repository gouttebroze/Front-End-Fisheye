const lightboxSection = document.querySelector('.lightbox');
const $lightbox = document.querySelector('#open_lightbox');
const $closeLightbox = document.querySelector('.close_button');

// récupère les "id" des photographes depuis l'URL courant (fetch photographer id from current URL)
const urlParams = new URLSearchParams(window.location.search);
const Id = parseInt(urlParams.get('id'));

async function displayPhotographerData(photographers) {
  const photographerHeaderSection = document.querySelector(".photograph-header");
  photographers
    .filter(photographer => photographer.id === Id)
    .forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userHeaderDOM = photographerModel.getUserHeaderDOM();
      photographerHeaderSection.appendChild(userHeaderDOM)
    })
}

async function displayMediaData(medias) {
  const $mediaSection = document.querySelector('.photograph-medias');
  medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
    .forEach((media) => {
      const Template = new MediaTemplate(media);
      $mediaSection.appendChild(Template.createMediaCard())
    });

}

function handleSortMedias(medias) {
  const currentFilter = document.querySelector("#current_filter");
  // création d'un MutationObserver (permet d'intercepter les changements du DOM)
  const filterObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      let newGalleryData;
      switch (mutation.type === "childList") {
        case currentFilter.innerText === "Titre":
          newGalleryData = sortByTitle(medias);
          break;
        case currentFilter.innerText === "Popularité":
          newGalleryData = sortByPop(medias);
          break;
        case currentFilter.innerText === "Date":
          newGalleryData = sortByDate(medias);
          break;
        default:
          newGalleryData = sortByTitle(medias);
          break;
      }

      // fn permettant de vider le contenu des médias de la gallery
      dropGallery();

      // génération de la gallery avec en paramètre les médias triés 
      displayMediaData(newGalleryData);

      // classe Lightbox doit être réinitiallisé après chaque trie des medias pr fonctionner
      Lightbox.init();
    }
  });
  // configuration du MutationObserver
  const config = { childList: true, subtree: true };
  filterObserver.observe(currentFilter, config);
}

/**
 * @returns medias triés par popularité
 */
function sortByPop(medias) {
  const mediaOrdered = medias.slice().sort((a, b) => b.likes - a.likes);
  return mediaOrdered;
}

/**
 * @returns medias triés par date
 */
function sortByDate(medias) {
  const mediaOrdered = medias
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return mediaOrdered;
}

/**
 * @returns medias triés par titre
 */
function sortByTitle(medias) {
  const mediaOrdered = medias
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  return mediaOrdered;
}

/**
 * suppression du contenu de la gallery de médias 
 * (avant d'être regénéré avec un nouveau contenu trié)
 */
function dropGallery() {
  const $mediaSection = document.querySelector('.photograph-medias');
  $mediaSection.innerHTML = '';
}

/**
 * affichage du total des "likes" & du tarif journalier
 */
function displayPhotographerInfos(medias, photographers) {
  const $photographerFooter = document.querySelector('.photographer-footer');
  let totalLikes = 0;
  medias.filter(media => media.photographerId === Id).forEach(media => {
    totalLikes += media.likes;
  })
  const $likes = document.createElement('span');
  $likes.setAttribute('id', 'totalLikes');
  $likes.innerHTML = totalLikes;
  const $heartIcon = document.createElement('span');
  $heartIcon.innerHTML = '<i class="fa-solid fa-heart footer-icon" style="color: #000000;"></i>';
  const $likesContainer = document.createElement('span');
  $likesContainer.classList.add('likes-footer-container');
  $likesContainer.appendChild($likes);
  $likesContainer.appendChild($heartIcon);
  $photographerFooter.appendChild($likesContainer);
  const photographer = photographers.filter(photographer => photographer.id === Id)[0];
  const $price = document.createElement('span');
  $price.classList.add('photographer-footer__price');
  $price.innerHTML = `${photographer.price}€ / jour`;
  $photographerFooter.appendChild($price);
}

async function init() {

  const photographers = await getPhotographers();
  const medias = await getMedias();

  displayPhotographerData(photographers);
  displayMediaData(sortByTitle(medias)); // affichage des medias, triés par titre par défaut
  handleSortMedias(medias);
  displayPhotographerInfos(medias, photographers);
  Lightbox.init();
}

init();