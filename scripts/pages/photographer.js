const lightboxSection = document.querySelector('.lightbox');
const $lightbox = document.querySelector('#open_lightbox');
const $closeLightbox = document.querySelector('.close_button');

// fetch photographer id from current URL
const urlParams = new URLSearchParams(window.location.search);
const Id = parseInt(urlParams.get('id'));

async function displayPhotographerData(photographers) {

  const photographerHeaderSection = document.querySelector(".photograph-header");
  const photographerFooterSection = document.querySelector(".photographer-footer");
  photographers
    .filter(photographer => photographer.id === Id)
    .forEach((photographer) => {
      /* const Template = new MediaTemplate(photographer) */
      const photographerModel = photographerTemplate(photographer);
      const userHeaderDOM = photographerModel.getUserHeaderDOM();
      /* const userFooterDOM = photographerModel.getUserFooterDOM();
      photographerFooterSection.appendChild(userFooterDOM); */
      /* photographerFooterSection.appendChild(Template.getUserFooterDOM());; */
      photographerHeaderSection.appendChild(userHeaderDOM)
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

function handleSortMedias(medias) {

  const $select = document.querySelector('#sorting-listbox')
  $select.addEventListener('change', () => {
    const $mediaSection = document.querySelector('.photograph-medias');
    $mediaSection.innerHTML = '';
    //let sortedMediasGallery = [];
    console.log($select.value);
    switch ($select.value) {
      case "title":
        medias.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "likes":
        medias.sort((a, b) => b.likes - a.likes);
        break;
      case "date":
        medias.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    };
    displayMediaData(medias);
  })
}

function displayPhotographerInfos(medias, photographers) {
  const $photographerFooter = document.querySelector('.photographer-footer');
  let totalLikes = 0;
  medias.filter(media => media.photographerId === Id).forEach(media => {
    totalLikes += media.likes;
  })
  const $likes = document.createElement('span');
  $likes.setAttribute('id', 'totalLikes');
  $likes.innerHTML = totalLikes;
  // $photographerFooter.appendChild($likes);
  const $heartIcon = document.createElement('span');
  $heartIcon.innerHTML = '<i class="fa-solid fa-heart footer-icon" style="color: #000000;"></i>';
  // $photographerFooter.appendChild($heartIcon);
  const $likesContainer = document.createElement('span');
  $likesContainer.classList.add('likes-footer-container');
  $likesContainer.appendChild($likes);
  $likesContainer.appendChild($heartIcon);
  $photographerFooter.appendChild($likesContainer);
  const photographer = photographers.filter(photographer => photographer.id === Id)[0];
  const $price = document.createElement('span');
  $price.classList.add('photographer-footer__price');
  $price.innerHTML = `${photographer.price}€ / jour`;
  $photographerFooter.appendChild($price);
}

async function init() {

  const photographers = await getPhotographers();
  const medias = await getMedias();

  displayPhotographerData(photographers);
  displayMediaData(medias);
  handleSortMedias(medias)
  displayPhotographerInfos(medias, photographers)
  Lightbox.init();
}

init();