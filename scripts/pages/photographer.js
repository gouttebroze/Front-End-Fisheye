async function getPhotographers() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
  // console.log(data); 
  return data.photographers;   
}

async function getMedias() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
  // console.log(data.media); 
  return data.media;   
}

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
  });
}

async function init() {
  
  const photographers = await getPhotographers();
  const media = await getMedias();
  displayPhotographerData(photographers);
  displayMediaData(media);
  // console.log(photographers);
  // console.log(media);
}

init();