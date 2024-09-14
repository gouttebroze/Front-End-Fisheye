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
 * fetch media datas by photographer id
 */
async function getMedias() {
  const response = await fetch('./data/photographers.json')
  const data = await response.json()
      
  console.log(data); 
  return data.media;   
}

async function displayData(photographers, media) {

  const photographerHeaderSection = document.querySelector(".photograph-header");

  const photographerModel = photographerTemplate(photographers);
  const userHeaderDOM = photographerModel.getUserHeaderDOM();
  photographerHeaderSection.appendChild(userHeaderDOM);
  
  const mediaSection = document.querySelector('#main');
  // ou créer une div + classe pr les medias ?
  //const mediaBlockElement = document.createElement( 'div' );
  //mediaBlockElement.classList.add('media_section');

  // vise la div précédement créé
  //const mediaSection = document.querySelector('.media_section');
  
  media.forEach((med) => {
    const mediaModel = photographerTemplate(med);
    const userMediaCardDOM = mediaModel.getUserMediaDOM(med);
    mediaSection.appendChild(userMediaCardDOM);
    console.log(med);
    
  });
}

async function init() {
  const photographers = await getPhotographers();
  const media = await getMedias();
  displayData(photographers);
  displayData(media);
  console.log(photographers);
  console.log(media);
}

init();