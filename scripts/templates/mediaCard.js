class MediaTemplate {
  constructor(media,) {
    this._media = media;
    this._media.likes = media.likes;
    this.$mediaWrapper = document.createElement('li');
    this.$mediaWrapper.classList.add('cards-media-wrapper');
    this.multimedia = `assets/FishEye_Photos/medias/${this._media.photographerId}/${this._media.image || this._media.video}`;
    const likesCollection = Array.from(document.querySelectorAll('.likes-number'));
    this.totalLikes = 0;
    this.totalLikes += this._media.likes;
    console.log(this._media.likes, this.totalLikes);
  }

  get likes() {
    return this._media.likes;
  }

  get media() {
    return this._media;
  }

  createMediaCard() {
    const imageElement = `<img class="go-to-lightbox" src="${this.multimedia}" alt="${this._media.title}" width="350px" height="300px" />`;
    const videoElement = `<video class="go-to-lightbox" controls width="250">
                            <source src="${this.multimedia}" type="video/mp4" />
                          </video>`;
    const mediaCard = `
        <div class="media-card">
            ${this._media.image ? imageElement : videoElement}
            <div class="media-text">
                <h3>${this._media.title}</h3>
                
                <div class="likes-count">
                  <label id="like-${this._media.id}" for="like-${this._media.id}-input" class="like-label">${this._media.likes}</label>
                  <input id="like-${this._media.id}-input" aria-label="${this._media.likes} j'aimes" class="like-input" type="checkbox" />
                </div>
            </div>
        </div>
    `;
    /*     <i class="fa-regular fa-heart likes-btn likes-count" style="color: #901C1C;"></i>
                        <span class="likes-number">${this._media.likes}</span>
        <button class=""></button>  
        
        <p class="likes">
                    <i class="fa-solid fa-heart likes-btn likes-count" style="color: #901C1C;"></i>
                    <span class="likes-number">${this._media.likes}</span>
                    
                </p>
                */
    this.$mediaWrapper.innerHTML = mediaCard;
    this.$mediaWrapper.querySelector(`#like-${this._media.id}-input`).checked = this._media.userLike;
    this.userLiked();
    return this.$mediaWrapper;
  }

  userLiked() {
    this.$mediaWrapper
      .querySelector('input[type="checkbox"]')
      .addEventListener('click', (e) => {
        if (e.target.checked) {
          this._media.likes += 1;
        } else {
          this._media.likes -= 1;
        }
        this.$mediaWrapper.querySelector('label.like-label').innerHTML = this._media.likes;
        this.$mediaWrapper.querySelector('input.like-input');
      })
  }

}