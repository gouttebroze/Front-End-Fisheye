class Photographer {
  constructor(data, likes) {
    this._name = data.name;
    this._city = data.city;
    this._country = data.country;
    this._tagline = data.tagline;
    this._price = data.price;
    this._portrait = data.portrait;
    this._id = data.id;
    this._allMediasLikes = likes;
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

  /*   get allMediasLikes() {
      let $allMediasLIkes = document.querySelectorAll('.like-label');
      let allLikesNumber = 0;
      $allMediasLIkes.forEach((like) => {
        let like = Number(like.textContent)
        allLikesNumber += like
      })
      return allLikesNumber;
    } */

}
