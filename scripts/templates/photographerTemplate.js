function photographerTemplate(data) {
  const { name, portrait, id, tagline, title, image, photographerId, country, city, likes, video } = data;

  const picture = `assets/photographers/${portrait}`;
  const media = `assets/FishEye_Photos/medias/${photographerId}/${image || video}`;
  const $mediaCardContainer = document.querySelector('.photograph-medias');

  function getUserCardDOM() {
    const article = document.createElement('article');
    const img = document.createElement('img');
    const link = document.createElement('a');
    link.href = '/Front-End-Fisheye/photographer.html?id=' + id;
    img.setAttribute("src", picture);
    const h2 = document.createElement('h2');
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);
    link.appendChild(article);
    return (link);
  }

  /**
   * fn that represent header photographer page
   * with name as 'h1' HTML tag 
   * & text (city, country & tagline) as 'p' HTML tag 
   * @returns 
   */
  function getUserHeaderDOM() {
    const article = document.createElement('article');
    const headerTitle = document.createElement('h1');
    const headerCity = document.createElement('h3')
    const headerCountry = document.createElement('h3');
    const headerText = document.createElement('p');
    const img = document.createElement('img');

    headerTitle.textContent = name;
    headerText.textContent = tagline;
    headerCity.textContent = city;
    headerCountry.textContent = country;
    img.setAttribute("src", picture);

    article.appendChild(headerTitle);
    article.appendChild(headerText);
    article.appendChild(headerCity);
    article.appendChild(headerCountry);
    article.appendChild(img);

    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photograph-wrapper');
    const photographerHeader = `
            <div class="photograph-text">
                <h1>${name}</h1>
                <div class="photographer-localisation">
                    <h3>${city}, ${country}</h3>
                </div>
                <p>${tagline}</p>
            </div>
            <img class="portrait" src="${picture}" alt="${name}" />
        `;
    $wrapper.innerHTML = photographerHeader;

    return ($wrapper);
  }

  const imageElement = `<img class="go-to-lightbox" src="${media}" alt="${title}" width="200px" height="200px" />`;
  const videoElement = `<video class="go-to-lightbox" controls width="250">
                            <source src="${media}" type="video/mp4" />
                          </video>`;

  /**
   * fn that represent media list from array (json datas)
   * a link ('a' HTML tag), that open the lightbox, 
   * with an image ('img' HTML tag), a text ('p'),
   * & an "heart" icon ('i')
   * @returns 
   */
  function getUserMediaDOM() {

    const $cardsMediaWrapper = document.createElement('li');
    $cardsMediaWrapper.classList.add('cards-media-wrapper');

    /* const photographerMedia = `
            <div class="media-card">
                ${image ? imageElement : videoElement}
                <div class="media-text">
                    <h3>${title}</h3>
                    <div class="likes">
                        <p>
                            <span class="likes-count">
                                <img 
                                    class="likes-btn" 
                                    src="assets/icons/heart.svg" 
                                    alt="likes" 
                                />
                                ${likes}
                            </span>
                        </p>
                        
                    </div>
                </div>
            </div>
            
        `; */
    $cardsMediaWrapper.innerHTML = photographerMedia;
    // handleLikeButton();

    return ($cardsMediaWrapper);
  }



  function getUserLightboxDOM() {

    const $arrows = document.querySelectorAll('.arrow');
    //const $slide = document.querySelectorAll('.slide');
    const $lightboxWrapper = document.querySelector('.lightbox');
    const $title = document.querySelector('.lightbox-title');
    const $media = document.querySelector('.media');

    const $lightboxContainer = document.createElement('div');
    //$lightboxContainer.appendChild($lightboxWrapper);
    $lightboxContainer.classList.add('lightbox-container');

    /* const $lightboxMedia = document.createElement( 'div' );
    const $lightboxMediaImage = document.createElement( 'img' );
    // const $lightboxMediaVideo = document.createElement( 'video' );
    $lightboxMedia.classList.add('lightbox-media');
    $lightboxMediaImage.setAttribute('src', media);
    $lightboxMediaImage.setAttribute('class', 'lightbox-media');
    $lightboxMedia.appendChild($lightboxMediaImage);

    const $lightboxTitle = document.createElement( 'h3' );
    $lightboxTitle.classList.add('lightbox-title');
    $lightboxTitle.textContent = title;

    
    $lightboxContainer.appendChild($lightboxTitle);
    //$lightboxMediaWrapper.appendChild($lightboxContainer) */


    /*         const lightboxMedia = `
                <div class="lightbox">           
                    <div class="lightbox-media">
                        
                        <img class="arrow prev lightbox__prev" id="previous-slide" src="assets/icons/ArrowLeft.svg" alt="Previous" />
                        <div>
                            <h3 class="lightbox-title">${title}</h3>
                        </div>
                        <div class="media lightbox__container">
                            ${image ? imageElement : videoElement}
                        </div>               
                        <img class="arrow next lightbox__next" id="next-slide" src="assets/icons/ArrowRight.svg" alt="Next" />
                        <img class="close_lightbox" src="assets/icons/CloseColor.svg" alt="" />
                    </div>
                </div>
            `;
    
            $lightboxContainer.innerHTML = lightboxMedia; */

    console.log(media); // media.src
    console.log(title);


    $arrows.forEach((btn, i) => {
      btn.addEventListener('click', (e) => {

      })
    })

    const arrows = document.querySelectorAll('.arrow');
    const titleSet = document.querySelectorAll('.title-list');

    let state;
    arrows.forEach((arrow, index) => {
      arrow.addEventListener('click', (e) => {
        goToNextSlide(data);
        goToPreviousSlide(data)

      })
    })

    state = {};

    document.querySelector('.close_lightbox').addEventListener('click', closeLightBox);



    return ($lightboxContainer);
  }

  return {
    imageElement,
    videoElement,
    name,
    picture,
    media,
    getUserCardDOM,
    getUserHeaderDOM,
    getUserMediaDOM,
    id,
    photographerId,
  }
}