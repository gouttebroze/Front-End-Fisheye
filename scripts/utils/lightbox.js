async function displayLightboxData(medias) {
  
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

function goToNextSlide() {

  state.index++;

  if (state.index) {}

}

function goToPreviousSlide() {

}

function displayLightBox() {
  $lightbox.style.display = "block";
  $main.style.display = "none";
}

function closeLightBox() {
    $lightbox.style.display = "none";
    $main.style.display = "block";
}