const lightboxSection = document.querySelector('.lightbox');
const $lightbox = document.querySelector('#open_lightbox');
const $closeLightbox = document.querySelector('.close_button');

// fetch photographer id from current URL
const urlParams = new URLSearchParams(window.location.search);
const Id = parseInt(urlParams.get('id'));

async function displayPhotographerData(photographers) {
  
  const photographerHeaderSection = document.querySelector(".photograph-header");
  
  photographers
    .filter(photographer => photographer.id === Id)
    .forEach((photographer) => {
      const photographerModel = photographerTemplate(photographer);
      const userHeaderDOM = photographerModel.getUserHeaderDOM();
      photographerHeaderSection.appendChild(userHeaderDOM);
  })
}

async function displayMediaData(medias) {
  const mediaSection = document.querySelector('.photograph-medias');

  medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
    .forEach((media) => { 
      const mediaModel = photographerTemplate(media);
      const userMediaCardDOM = mediaModel.getUserMediaDOM();
      mediaSection.appendChild(userMediaCardDOM);
      console.log(media);
      console.log(media.image);
      console.log(Array.isArray(medias));
  });
  
}

/* async function displayLightboxData(medias) {
  
  $lightbox.style.display = "block";
  $main.style.display = "none";

  medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
    .map((media) => { 
      const lightboxModel = photographerTemplate(media);
      const userLightboxDOM = lightboxModel.getUserLightboxDOM();
      lightboxSection.appendChild(userLightboxDOM);     
    })
  console.log(medias);
}

function closeLightBox() {
    $lightbox.style.display = "none";
    $main.style.display = "block";
} */

/* function goToNextSlide() {

  state.index++;

  if (state.index) {}

}

function goToPreviousSlide() {

}





/* function mediaEventListeners(medias) {
  medias
    .filter(media => media.photographerId === Id).map((media, index) => {
    document
    .querySelector('.go-to-lightbox')
    .addEventListener('click', () => {
      displayLightboxData(media[index])
    });
  })
} */



/*********************************************** */
/*********************************************** */
/************ --- Test lightbox --- ************ */
/*********************************************** */
/*********************************************** */


async function init() {
  
  const photographers = await getPhotographers();
  const medias = await getMedias();

  displayPhotographerData(photographers);
  displayMediaData(medias);

  

  const mediasSelection = document.querySelectorAll('.cards-media-wrapper');
  mediasSelection.forEach((li, index) => {
    li.addEventListener('click', () => {
      displayLightboxData(medias.filter(media => media.photographerId === Id), index);
      console.log(medias);
      
    });
  })

  // attendre le chargement du DOM


}

init();