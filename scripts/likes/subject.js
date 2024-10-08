class LikesSubject {
  constructor() {
    this._observers = [];
  }

  subscribe(observer) {
    // ajout de l'observer ds le tableau d'observers
    this._observers.push(observer);
  }

  unsubscribe(observer) {
    // inverse de méthode subscribe, pr désabonnement (enlever l'observer du tableau)
    this._observers = this._observers
      .filter(obs => obs !== observer);
  }

  fire(action) {
    this._observers
      .forEach(observer => observer.update(action));
  }

}