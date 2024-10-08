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
  const $mediaSection = document.querySelector('.photograph-medias');

  const likesSub = new LikesSubject();
  const likesCount = new LikesCounter();
  likesSub.subscribe(likesCount);

  medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
    .forEach((media) => {
      /* const mediaModel = photographerTemplate(media, likesSub);
      const userMediaCardDOM = mediaModel.getUserMediaDOM();
      mediaSection.appendChild(userMediaCardDOM);
      console.log(media);
      console.log(media.image);
      console.log(Array.isArray(medias)); */

      const Template = new MediaTemplate(media);
      $mediaSection.appendChild(Template.createMediaCard())
    });

}

async function init() {

  const photographers = await getPhotographers();
  const medias = await getMedias();

  displayPhotographerData(photographers);
  displayMediaData(medias);
  Lightbox.init();

  /* const mediasSelection = document.querySelectorAll('.cards-media-wrapper');
  mediasSelection.forEach((li, index) => {
    li.addEventListener('click', () => {
      displayLightboxData(medias.filter(media => media.photographerId === Id), index);
      console.log(medias);
      
    });
  }) */


}

init();