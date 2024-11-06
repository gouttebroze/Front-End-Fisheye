/* eslint eqeqeq: "error", curly: "error" */
class MediaTemplate {
  // methode contenant les propriétés d'instances
  constructor(media) {
    this._media = media;
    this.$mediaWrapper = document.createElement('li');
    this.$mediaWrapper.classList.add('cards-media-wrapper');
    this.$mediaWrapper.setAttribute('tabindex', '0');

    // tel une factory, on gére différentes sources de données (images et vidéo), ayant des caractéristiques similaires 
    this.multimedia = `assets/FishEye_Photos/medias/${this._media.photographerId}/${this._media.image || this._media.video}`;
  }

  // "getters" (lecture) permettent l'accès aux proprietes de l'objet
  get media() {
    return this._media;
  }

  get likes() {
    return this._media.likes;
  }

  // méthode pr générer le template d'une carte d'un média de la gallerie
  createMediaCard() {

    const imageElement = `
      <img 
        class="go-to-lightbox" 
        src="${this.multimedia}" 
        alt="${this._media.title}" 
        width="350px" 
        height="300px" 
      />
      `;

    const videoElement = `
      <video 
        src="${this.multimedia}" 
        class="go-to-lightbox" 
        controls 
        width="350" 
        height="300">
      </video>
      `;

    const mediaCard = `
      <div class="media-card">
          <div tabindex="0">
            ${this._media.image ? imageElement : videoElement}
          </div>
          <div class="media-card__details">
            <h3 tabindex="0">${this._media.title}</h3>
          </div>
      </div>
      <div class="media-card__details likes__media">
        <div class="likes-count"">
          <label for="likes ${this._media.id}" class="like-label">
            ${this._media.likes}
          </label>
          <input 
            tabindex="0"
            id="likes ${this._media.id}"
            name="likes"
            class="like-input" 
            type="checkbox" 
          />
        </div>
      </div>
    `;

    this.$mediaWrapper.innerHTML = mediaCard;
    this.$mediaWrapper
      .querySelector(`.like-input`)
      .checked = this._media.userLike;

    this.userLiked();
    this.userLikedOnKeyboard();

    return this.$mediaWrapper;
  }

  userLiked() {
    this.$mediaWrapper
      .querySelector('input[type="checkbox"]')
      .addEventListener('click', (e) => {
        const $totalLikes = document.querySelector('#totalLikes')
        let totalLikes = Number($totalLikes.innerHTML)
        if (e.target.checked) {
          this._media.likes += 1;
          totalLikes += 1;
        } else {
          this._media.likes -= 1;
          totalLikes -= 1;
        }
        $totalLikes.innerHTML = totalLikes;
        this.$mediaWrapper.querySelector('label.like-label').innerHTML = this._media.likes;
      });

  }

  /**
   * navigation clavier
   */
  userLikedOnKeyboard() {
    this.$mediaWrapper
      .querySelector('input[type="checkbox"]')
      .addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const $totalLikes = document.querySelector('#totalLikes')
          let totalLikes = Number($totalLikes.innerHTML)
          console.log(e.target.checked);
          e.target.checked = !e.target.checked
          if (e.target.checked) {
            this._media.likes += 1;
            totalLikes += 1;
          } else {
            this._media.likes -= 1;
            totalLikes -= 1;
          }
          $totalLikes.innerHTML = totalLikes;
          this.$mediaWrapper.querySelector('label.like-label').innerHTML = this._media.likes;
        }
      })
  }
}