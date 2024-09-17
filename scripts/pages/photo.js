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
      
  console.log(data.media); 
  return data.media;   
}

async function displayData(photographers, media) {

  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl.searchParams.get("id")); // return id from current url
  const id = parsedUrl.searchParams.get("id");

  const photographerHeaderSection = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    console.log(photographer.id)
    const photographerModel = photographerTemplate(photographer);
    const userHeaderDOM = photographerModel.getUserHeaderDOM();
    photographerHeaderSection.appendChild(userHeaderDOM);
  })
  
  
  //const mediaSection = document.querySelector('#main');

  // ou créer une div + classe pr les medias ?
  //const mediaBlockElement = document.createElement( 'div' );
  //mediaBlockElement.classList.add('media_section');

  // vise la div précédement créé
  //const mediaSection = document.querySelector('.media_section');
  
  /* media
  .map((m) =>{ 
    console.log(m.photographerId);   
    const mediaModel = photographerTemplate(m);
    const userMediaCardDOM = mediaModel.getUserMediaDOM(m);
    mediaSection.appendChild(userMediaCardDOM);
    console.log(m);   
  }); */
}

async function init() {
  const parsedUrl = new URL(window.location.href);
  console.log(parsedUrl.searchParams.get("id")); // return id from current url
  const id = parsedUrl.searchParams.get("id");
  
  const photographers = await getPhotographers();
  //const media = await getMedias();
  displayData(photographers);
  //displayData(media);
  console.log(photographers);
  //console.log(media);
}

init();