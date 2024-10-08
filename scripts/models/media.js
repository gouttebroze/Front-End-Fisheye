class PhotographerMedia {
  constructor(data) {
    this._id = data.id;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._image = data.image;
    this._likes = data.likes;
    this._dates = data.dates;
    this._price = data.price;
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
