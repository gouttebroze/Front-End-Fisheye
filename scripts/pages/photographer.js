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

  medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
    .forEach((media) => {
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
}

init();