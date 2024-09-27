// const urlParams = new URLSearchParams(window.location.search);
// const Id = parseInt(urlParams.get('id'));

async function getPhotographerMedias() {
  const medias = await getMedias();

  return medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
}

async function goToNextSlide(currentMedia) {
  const medias = await getPhotographerMedias() 
  const currentMediaIndex = medias.findIndex(media => media.id === currentMedia.id)
  console.log(currentMediaIndex);
  console.log(medias);
  const nextMedia = medias[currentMediaIndex +1]
  const mediaModel = photographerTemplate(nextMedia)
  const nextMediaElement = nextMedia.image ? mediaModel.imageElement : mediaModel.videoElement;
  const mediaElement = document.querySelector('#previous-slide').nextSibling;

const tempDiv = document.createElement('div');
tempDiv.innerHTML = nextMediaElement;
const element = tempDiv.firstChild;
  mediaElement.replaceWith(element);
  console.log(element, mediaElement);
  
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

/* document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('#next-slide')
    .addEventListener('click', goToNextSlide);

  document
    .querySelector('#previous-slide')
    .addEventListener('click', goToPreviousSlide);

  document
    .querySelector('#next-slide')
    .addEventListener('click', () => {
      console.log('ok next');
    });
    
  document
    .querySelector('#previous-slide')
    .addEventListener('click', () => {
      console.log('ok previous');
    });
}) */