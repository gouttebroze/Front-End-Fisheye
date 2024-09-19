/**
 * fetch photographer datas by id
 */
// l'id doit correspondre & on ne doit fetch que les datas du photographe ayant l'id correspondant
async function getPhotographers() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
  console.log(data); 
  return data.photographers;   
}

/**
 * fetch media datas
 */
async function getMedias() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
      
  console.log(data.media); 
  return data.media;   
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
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
  const mediaSection = document.querySelector('.photograph-header');

  medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
    .forEach((media) => { 
    console.log(media.photographerId);   
    const mediaModel = photographerTemplate(media);
    const userMediaCardDOM = mediaModel.getUserMediaDOM();
    mediaSection.appendChild(userMediaCardDOM);
    console.log(media);   
  });
}

async function init() {
  
  const photographers = await getPhotographers();
  const media = await getMedias();
  displayPhotographerData(photographers);
  displayMediaData(media);
  console.log(photographers);
  console.log(media);
}

init();