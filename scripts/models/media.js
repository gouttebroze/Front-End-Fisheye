class PhotographerMedia {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._video = data.video;
    this._likes = data.likes;
    this._userLike = false;
    this._dates = data.dates;
    this._price = data.price;
    // this._mediaType = data.image || data.video;
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

  get userLike() {
    return this._userLike;
  }

  get dates() {
    return this._dates;
  }

  get price() {
    return this._price;
  }

  /*   get mediaType() {
      return this._mediaType.hasOwnProperty('.jpg') ? this._image : this._video;
    } */

  set likes(value) {
    this._likes = value;
    this._userLike = !this._userLike;
  }
}
