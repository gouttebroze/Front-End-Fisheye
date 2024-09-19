class PhotographerMedia {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._image = media.image;
    this._likes = media.likes;
    this._dates = media.dates;
    this._price = media.price;  
  }

  get id() {
    return this._id;
  }

  get photographerId() {
   return this._photographerId;
  }

  get title() {
   return this._title;
  }

  get image() {
   return `${this._image}`;
  }

  get likes() {
   return this._likes;
  }

  get dates() {
    return this._dates;
  }

  get price() {
    return this._price;
  }
}
