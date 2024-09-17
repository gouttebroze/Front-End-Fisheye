class Photographer {
  constructor(photographers) {
    this._name = photographers.name;
    this._city = photographers.city;
    this._country = photographers.country;
    this._tagline = photographers.tagline;
    this._price = photographers.price;
    this._portrait = photographers.portrait;
    this._id = photographers.id; 
  }

  get name() {
    return this._name;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get tagline() {
    return this._tagline;
  }

  get price() {
    return this._price;
  }

  get portrait() {
    return `FishEye_Photos/Sample Photos/Photographers ID Photos/${this._portrait}`;
  }
}

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

