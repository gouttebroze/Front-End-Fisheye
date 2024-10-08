class MediaTemplate {
  constructor(media, LikedSubject) {
    this._media = media;
    this.LikedSubject = LikedSubject;
    this.$mediaWrapper = document.createElement('li');
    this.$mediaWrapper.classList.add('cards-media-wrapper');
    this.multimedia = `assets/FishEye_Photos/medias/${this._media.photographerId}/${this._media.image || this._media.video}`;
  }

  get media() {
    return this._media;
  }

  createMediaCard() {
    const imageElement = `<img class="go-to-lightbox" src="${this.multimedia}" alt="${this._media.title}" width="200px" height="200px" />`;
    const videoElement = `<video class="go-to-lightbox" controls width="250">
                            <source src="${this.multimedia}" type="video/mp4" />
                          </video>`;
    const mediaCard = `
        <div class="media-card">
            ${this._media.image ? imageElement : videoElement}
            <div class="media-text">
                <h3>${this._media.title}</h3>
                <div class="likes">
                    <p>
                        <span class="likes-count">
                            <img 
                                class="likes-btn" 
                                src="assets/icons/heart.svg" 
                                alt="likes" 
                            />
                            ${this._media.likes}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    `;
    this.$mediaWrapper.innerHTML = mediaCard;

    return this.$mediaWrapper;
  }
}