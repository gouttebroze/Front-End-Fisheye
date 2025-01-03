class Lightbox {

  static init() {
    const links = document.querySelectorAll('.media-card');
    const gallery = Array.from(links).map((link) => link.querySelector('.go-to-lightbox').getAttribute('src'));
    console.log(links);

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const mediaSrc = e.currentTarget.querySelector('.go-to-lightbox').getAttribute('src');
        new Lightbox(mediaSrc, gallery);
      });
      link.addEventListener("keyup", (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const mediaSrc = e.currentTarget.querySelector('.go-to-lightbox').getAttribute('src');
          new Lightbox(mediaSrc, gallery);
        } else {
          return;
        }
      });
    });
  }
  /**
   * @param {string} url URL de l'img
   * @param {string[]} images chemins des images de la lightbox
   * @param {string} alt texte de l'img
   */
  constructor(url, gallery, alt) {
    const $sliderWrapper = document.querySelector('#open_lightbox');
    $main.style.display = "none";
    $header.style.display = "none";
    $sliderWrapper.style.display = "block";
    this.element = this.buildDOM(url, alt); // construction du DOM à partir de l'URL
    this.gallery = gallery;
    this.loadImage(url, alt, gallery);
    this.onKeyUp = this.onKeyUp.bind(this); // pr éviter le rechargement de l'appel à la fn
    $sliderWrapper.appendChild(this.element); // ajout de l'element, la lightbox, au body 
    document.addEventListener('keyup', this.onKeyUp);
  }

  loadImage(url, alt) {
    console.log(url)
    const isImage = url.includes('.jpg');
    if (isImage) {
      this.url = null;
      this.alt = alt;
      const image = new Image();

      // image.setAttribut("alt", "Lilac breasted roller");
      const container = this.element.querySelector('.lightbox-container')
      const title = document.createElement('h3');
      title.setAttribute("tabindex", "O");
      title.innerHTML += this.addTitle(url);
      // on vide le container de l'img actuel avant de charger la nouvelle image
      container.innerHTML = '';
      image.onload = () => {
        console.log('chargé');
        container.appendChild(image);
        container.appendChild(title);
        this.url = url;
      }
      image.src = url;
      image.alt = this.addTitle(url);
    } else {

      /**
       * créer 1 element source avec attribut src ds video
       * (là on ne créé qu'1 élement video avec src sans element source)
       */
      this.url = null;
      this.alt = alt;
      const $video = document.createElement('video');
      $video.controls = true;
      $video.width = 480;
      const $source = document.createElement('source');
      $source.setAttribute('type', 'video/mp4');
      $video.appendChild($source);
      const container = this.element.querySelector('.lightbox-container')
      const title = document.createElement('h3');
      title.innerHTML += this.addTitle(url);
      // on vide le container de l'img actuel avant de charger la nouvelle image
      container.innerHTML = '';
      console.log('chargé');
      this.url = url;
      $source.src = url;
      $source.alt = this.addTitle(url);
      container.appendChild($video);
      container.appendChild(title);
    }
  }

  addTitle(url) {
    const splitedUrl = url.split("/");
    const string = splitedUrl[splitedUrl.length - 1].split(".")[0];
    const title = string.replaceAll("_", " ");
    return title;
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e 
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add('hide');
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element)
    }, 500);
    $main.style.display = "block";
    $header.style.display = "block";
    document.removeEventListener('keyup', this.onKeyUp);
  }

  /**
   * @param {KeyboardEvent} e 
   */
  onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close(e)
    } else if (e.key === 'ArrowRight') {
      this.next(e)
    } else if (e.key === 'ArrowLeft') {
      this.prev(e)
    }
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e 
   */
  next(e) {
    e.preventDefault();
    // pr obtenir l'index, on cherche ds le tableau d'images (gallery)
    let i = this.gallery.findIndex(image => image === this.url);
    if (i === this.gallery.length - 1) {
      i = -1
    }
    this.loadImage(this.gallery[i + 1]); // on incrémente pr trouver le prochain item
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e 
   */
  prev(e) {
    e.preventDefault();
    // si i = 0, il faut lui passer la derniere image
    let i = this.gallery.findIndex(image => image === this.url);
    if (i === 0) {
      i = this.gallery.length
    }
    this.loadImage(this.gallery[i - 1]);
  }

  /**
   * @param {string} url URL de l'img
   * @returns {HTMLElement}
   */
  buildDOM() { // permet de travailler sur 1 el. HTML
    const $dom = document.createElement('div');
    $dom.classList.add('lightbox-wrapper');
    $dom.innerHTML = `
      <div class="lightbox" tabindex="0">
        <div class="lightbox-media">  
          
            <img 
              tabindex="0"
              class="arrow prev-lightbox media2" 
              id="previous-slide" 
              src="assets/icons/ArrowLeft.svg" 
              alt="Previous image" 
            />       
            <div class="lightbox-container media3" tabindex="0">
            </div>
            <div class="grid-last-col">
              <img 
                tabindex="0"
                class="close-lightbox media1" 
                src="assets/icons/CloseColor.svg" 
                alt="Close dialog"
              />
              <img 
                tabindex="0"
                class="arrow next-lightbox media4" 
                id="next-slide" 
                src="assets/icons/ArrowRight.svg" 
                alt="Next image" 
              />
            </div>  
          </div>      
      </div>
    `;
    $dom
      .querySelector('.close-lightbox')
      .addEventListener('click', this.close.bind(this));
    $dom
      .querySelector('.next-lightbox')
      .addEventListener('click', this.next.bind(this));
    $dom
      .querySelector('.prev-lightbox')
      .addEventListener('click', this.prev.bind(this))
    return $dom;
  }
}