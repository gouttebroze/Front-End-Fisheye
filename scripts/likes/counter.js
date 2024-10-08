class LikesCounter {
  constructor() {
    this._count = 0;
    this._$likesCount = document.querySelector('.likes-count');
  }

  /**
   * méthode pr incrémenter / décrémenter nbre de likes
   */
  update(action) {
    if (action === 'INC') {
      this._count += 1;
    } else if (action === 'DEC') {
      this._count -= 1;
    } else {
      throw 'Unkown action';
    }
    // et on met à jour le DOM
    this._$likesCount.innerHTML = this._count;
  }
}