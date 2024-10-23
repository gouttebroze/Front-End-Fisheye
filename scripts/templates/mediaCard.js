/* eslint eqeqeq: "error", curly: "error" */
class MediaTemplate {
  constructor(media) {
    this._media = media;
    this.$mediaWrapper = document.createElement('li');
    this.$mediaWrapper.classList.add('cards-media-wrapper');
    this.$mediaWrapper.setAttribute('tabindex', '0');
    this.multimedia = `assets/FishEye_Photos/medias/${this._media.photographerId}/${this._media.image || this._media.video}`;
  }

  get media() {
    return this._media;
  }

  get likes() {
    return this._media.likes;
  }

  createMediaCard() {
    const imageElement = `<img class="go-to-lightbox" src="${this.multimedia}" alt="${this._media.title}" width="350px" height="300px" />`;
    const videoElement = `<video src="${this.multimedia}" class="go-to-lightbox" controls width="350" height="300"></video>`;
    /* const mediaCard = `
      <div class="media-card">
          ${this._media.image ? imageElement : videoElement}
          <div class="media-card__details">
            <h3>${this._media.title}</h3>
          
        <div class="likes-count">
          <label for="" class="like-label">
            ${this._media.likes}
          </label>
          <input 
            id=""
            name="likes"
            class="like-input" 
            type="checkbox" 
          />
        </div>
      </div>
      </div>
    `; */

    const mediaCard = `
      <div class="media-card">
          <div tabindex="0">
            ${this._media.image ? imageElement : videoElement}
          </div>
          <div class="media-card__details">
            <h3 tabindex="0">${this._media.title}</h3>
          </div>
      </div>
      <div class="media-card__details">
        <div class="likes-count">
          <label for="" class="like-label">
            ${this._media.likes}
          </label>
          <input 
            tabindex="0"
            id=""
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

    console.log(this._media.likes);
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
          totalLikes += 1
        } else {
          this._media.likes -= 1;
          totalLikes -= 1
        }
        $totalLikes.innerHTML = totalLikes
        this.$mediaWrapper.querySelector('label.like-label').innerHTML = this._media.likes;
      })
  }
}