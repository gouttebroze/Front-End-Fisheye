function photographerTemplate(data) {
  const {
    name, portrait, id, tagline, title,
    image, photographerId, country, city,
    likes, price, video
  } = data;

  const picture = `assets/photographers/${portrait}`;
  const media = `assets/FishEye_Photos/medias/${photographerId}/${image || video}`;

  /**
   * template permettant de générer le HTML d'une carte 
   * de présentation d'un photographe, entouré par un lien vers les médias 
   * de ce photographe.
   * @returns {HTMLElement} $link - balise HTML <a>
   */
  function getUserCardDOM() {
    const $article = document.createElement('article');
    const $img = document.createElement('img');
    const $name = document.createElement('h2');
    const $from = document.createElement('h3')
    const $tagline = document.createElement('p');
    const $price = document.createElement('p');
    const $link = document.createElement('a');

    $article.classList.add('photographer-card');
    $name.classList.add('photographer-card__name');
    $from.classList.add('photographer-card__from');
    $img.classList.add('photographer-card__img');
    $tagline.classList.add('photographer-card__tagline');
    $price.classList.add('photographer-card__price');

    $link.href = '/Front-End-Fisheye/photographer.html?id=' + id;

    $link.setAttribute('aria-label', name);
    $img.setAttribute('src', picture);
    $img.setAttribute('alt', ' ');

    $link.focus();

    $name.textContent = name;
    $from.textContent = `${city}, ${country}`;
    $tagline.textContent = tagline;
    $price.textContent = `${price}€/jour`;
    $article.appendChild($link);
    $link.appendChild($img);
    $link.appendChild($name);

    $article.appendChild($from);
    $article.appendChild($tagline);
    $article.appendChild($price);

    return ($article);
  }

  /**
   * fn that represent header photographer page
   * with name as 'h1' HTML tag 
   * & text (city, country & tagline) as 'p' HTML tag 
   * @returns 
   */
  function getUserHeaderDOM() {

    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photograph-wrapper');
    const photographerHeader = `
            <div class="photograph-text" tabindex="0">
                <h1 tabindex="0">${name}</h1>
                <div class="photographer-localisation">
                    <h3 tabindex="0">${city}, ${country}</h3>
                </div>
                <p tabindex="0">${tagline}</p>
            </div>
            <button 
              tabindex="0"
              aria-label="Contact Me" 
              class="contact_button" 
              onclick="displayModal()">Contactez-moi</button>
            <img class="portrait" src="${picture}" alt="${name}" tabindex="0" />
        `;
    $wrapper.innerHTML = photographerHeader;

    return ($wrapper);
  }

  function getUserFooterDOM() {
    const $footerWrapper = document.createElement('article');
    $footerWrapper.classList.add('.photographer-footer');

    const $photographerFooter = `
        <p>${likes}</p>
        <p>${price}€ / jour</p>
    `;
    $footerWrapper.innerHTML = $photographerFooter;
    return ($footerWrapper);
  }

  const imageElement = `<img class="go-to-lightbox" src="${media}" alt="${title}" width="200px" height="200px" />`;
  const videoElement = `<video class="go-to-lightbox" controls width="250">
                            <source src="${media}" type="video/mp4" />
                        </video>`;


  return {
    imageElement,
    videoElement,
    name,
    picture,
    media,
    getUserCardDOM,
    getUserHeaderDOM,
    getUserFooterDOM,
    id,
    photographerId,
  }
}