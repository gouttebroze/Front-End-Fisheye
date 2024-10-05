// const urlParams = new URLSearchParams(window.location.search);
// const Id = parseInt(urlParams.get('id'));

let state = {};

async function getPhotographerMedias() {
  const medias = await getMedias();

  return medias
    .filter(media => media.photographerId === Id) // filtre les medias ayant le photographerId = à l'id de l'url
};

let adjustPositionIndex = 0;

async function goToPreviousSlide(currentMedia) {
  const medias = await getPhotographerMedias() 
  let currentMediaIndex = medias.findIndex(media => media.id === currentMedia.id);
  console.log(currentMediaIndex);
  console.log();
  //const currentMediaImage = medias[currentMediaIndex].image;
  const currentMediaTitle = medias[currentMediaIndex].title;
  //const prevMediaImage = medias[currentMediaIndex - 1].image;
  const prevMediaTitle = medias[currentMediaIndex - 1].title;

  console.log(currentMediaTitle, prevMediaTitle);
  
  const slideActive = document.querySelector('.lightbox');
  const slideMediaActive = document.querySelector('.lightbox-media');

  const media = medias[currentMediaIndex];
  const model = photographerTemplate(media); // retourne 1 objet avec title, etc...
  const nextMedia = medias[currentMediaIndex + 1]
  const mediaModel = photographerTemplate(nextMedia)
  const nextMediaElement = nextMedia.image ? mediaModel.imageElement : mediaModel.videoElement;
  console.log();
  console.log();
  console.log(model.media);
  console.log(medias);
  console.log(medias[currentMediaIndex]);
  console.log(medias[currentMediaIndex].title);
}

async function getCurrentIndex(currentMedia) {
  const medias = await getPhotographerMedias() 
  let currentMediaIndex = medias.findIndex(media => media.id === currentMedia.id);
  let slidesCollectionLength = medias.length;
  let slidesCollectionVisible = slidesCollectionLength - currentMediaIndex;
  let nextCurrentIndex = currentMediaIndex + 1;
  let prevCurrentIndex = currentMediaIndex - 1;
  console.log(
    slidesCollectionLength, slidesCollectionVisible, 
    currentMediaIndex, nextCurrentIndex, prevCurrentIndex
  );
  
  return (
    currentMediaIndex, 
    nextCurrentIndex, 
    prevCurrentIndex, 
    slidesCollectionLength, 
    slidesCollectionVisible
  );
}

export async function goToNextSlide(currentMedia) {
  const medias = await getPhotographerMedias() 
  let currentMediaIndex = medias.findIndex(media => media.id === currentMedia.id);

  const slideActive = document.querySelector('.lightbox');
  const slideMediaActive = document.querySelector('.lightbox-media');

  const media = medias[currentMediaIndex];
  const model = photographerTemplate(media); // retourne 1 objet avec title, etc...
  const nextMedia = medias[currentMediaIndex + 1]
  const mediaModel = photographerTemplate(nextMedia)
  const nextMediaElement = nextMedia.image ? mediaModel.imageElement : mediaModel.videoElement;
  
  const mediasList = medias.length;
  console.log(model.media);
  console.log(medias);
  console.log(medias[currentMediaIndex]);
  console.log(medias[currentMediaIndex].title);

  const list = [...medias]
  console.log(list);
  let listTitle = list[currentMediaIndex + 1].title;

  document.querySelector('.lightbox-title').innerHTML = '<ul class="title-list>'
  for (let i = currentMediaIndex; i < medias.length; i++) {
    /* const newTitle = medias[i].title;
    const mediaTitle = document.querySelector('.lightbox-title')
      .innerHTML += `${newTitle}`; */
    
    //let cast = [...newTitle]
    //mediaTitle.appendChild(cast)
    /* console.log(mediaTitle);
    console.log(medias[i].title); */

    i++;
    const mediaTitle = document.querySelector('.lightbox-title');
    const newTitle = medias[currentMediaIndex].title;
    
    const titleList = mediaTitle.innerHTML += 
      `<h3 class="title-list">
        ${newTitle}
      </h3>`;
    console.log(titleList);
    
  }
  
  medias.map((media, i) => {
    console.log(media[state.i]).title;
    
  })

  const nextIndex = currentMediaIndex + 1;
  const prevIndex = currentMediaIndex - 1;

  const mediaTitle = document.querySelector('.lightbox-title');
  const newTitle = medias[currentMediaIndex + 1].title;
  console.log(newTitle);
  // mediaTitle.textContent = newTitle;
  //mediaTitle.innerHTML = `<h3>${newTitle}</h3>`;
  
  // const mediaElement = document.querySelector('.media').firstChild;
  const mediaElement = document.querySelector('.media').firstChild;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = nextMediaElement;
  const element = tempDiv.firstChild;

  slideMediaActive.appendChild(mediaElement)
  mediaElement.style.display = "none"
  slideMediaActive.appendChild(element)

/*   mediaElement.replaceWith(element);
  mediaTitle.replaceWith(newTitle); */
  nextMedia
  console.log("log -> element: ", element);
  console.log("log -> mediaElement: ", mediaElement);
}

async function displayLightboxData(medias, index) {
  
  const $lightbox = document.querySelector("#open_lightbox");
  $main.style.display = "none";
  $lightbox.style.display = "block";
  const lightboxModel = photographerTemplate(medias[index]);
  const userLightboxDOM = lightboxModel.getUserLightboxDOM();
  $lightbox.appendChild(userLightboxDOM);     
  console.log(medias);

}
  
function closeLightBox() {
    $lightbox.style.display = "none";
    $main.style.display = "block";
}

function goToItem(index) {
  let i = getCurrentIndex.currentMediaIndex;
    console.log(i);
  if (index < 0) {
    index = medias.length - getCurrentIndex.slidesCollectionVisible;
    console.log(index);
  } else if (index >= medias.length) {}
  i = index;
}
