"use strict"; // Mode strict du JavaScript

let state; // objet contenant état du slider

let currentIndex = 0;

async function getPhotographerMedias() {
  const medias = await getMedias();

  return medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
}

async function displayLightboxData(medias, index) {
  
  $lightbox.style.display = "block";
  $main.style.display = "none";

      const lightboxModel = photographerTemplate(medias[index]);
      const userLightboxDOM = lightboxModel.getUserLightboxDOM();
      lightboxSection.appendChild(userLightboxDOM);     
  console.log(medias);
  console.log(Array.isArray(medias));
}

function closeLightBox() {
    $lightbox.style.display = "none";
    $main.style.display = "block";
}

async function goToNextSlide(currentMedia) {
  const medias = await getPhotographerMedias();
  const currentMediaIndex = medias.findIndex(media => media.id === currentMedia.id);

  console.log("tableau des médias: ", medias);
  console.log("retourne l'image du média ayant l'index courant: ", medias[currentMediaIndex].image);  // ok, fetch media image or video using current index
  console.log("retourne le title du média ayant l'index courant: ", medias[currentMediaIndex].title); // ok to media title 

  let nextSliderItem = medias[currentIndex + 1];
  let nextItem = medias[currentMediaIndex + 1];

  console.log("currentMediaIndex : ", currentMediaIndex);
  console.log("currentIndex ===> itération + 1 : ", currentIndex); // ok, itére de 1 à chaque clique

  console.log("nextSliderItem", nextSliderItem);
  console.log("nextItem : ", nextItem);
  
  
}

/* function goToNextSlide() {
  state.index++;

  refreshSlider();
} */

function goToPreviousSlide() {
  state.index--;
  refreshSlider();
}



async function refreshSlider() {
  var sliderMedia;
  var sliderTitle;

  /* const medias = await getPhotographerMedias();
  const currentMediaIndex = medias.findIndex(media => media.id === currentMedia.id);

  console.log(currentMediaIndex);
  console.log(medias); */
  sliderMedia = document.querySelector('#slider .lightbox-media');
  sliderTitle = document.querySelector('.media-title');

  /* sliderImage.src = slides[state.index].image;
  sliderLegend.textContent = slides[state.index].legend;

  sliderMedia = medias[state.index].image;
  sliderTitle.textContent = medias[state.index].sliderTitle; */
}

state = {};
state.index = 0;
console.log("ok ok ok...");