class Api {
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then(res => res.json())
      .then(res => res.data)
      .catch(err => console.log('error', err));
  }
}

class PhotographerApi extends Api {
  constructor(url) {
    // mot-clé 'super' permet d'appeler / accéder aux prop. définies sur l'objet parent
    super(url); 
  }

  async getPhotographes() {
    return await this.get(); // methode 'get' (de l'objet Api, retourne les données requêtées avec la méthode 'fetch'
  } 
}