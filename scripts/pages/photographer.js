class PhotographerPage {
  constructor() {
    this.photographerSection = document.querySelector('.photograph-header');
    this.photographerApi = new PhotographerApi("../../data/photographers.json");

  }

  async init() {
    const photographersData = await this.photographerApi.getPhotographers();
    photographersData.map((photographer) => {
     new j(photographer);
    console.log(photographersData);
    })
  }
}

const photographerPage = new PhotographerPage();
photographerPage.init();