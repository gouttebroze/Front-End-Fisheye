async function displayData(photographers) {
    console.log(photographers)
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    // Récupère les datas des photographes
    const photographers = await getPhotographers();
    console.log(photographers);

    displayData(photographers);
}

init();


/**************************************************************************************
 * 
 **********************************************************************************************/

/* class App {
    constructor() {
        this.$photographersSection = document.querySelector(".photographer_section");
        this.photographersApi = new PhotographerApi('./data/photographers.json');
    }

    async main() {
        console.log(this.photographersApi);
        const photographersData = await this.photographersApi?.getPhotographers();
        console.log(photographersData);

        photographersData?.map(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const Template = new PhotographerTemplate(photographer);
                this.$photographersSection.appendChild(
                    Template.createPhotographerCard()
                );
            });

    }
}


const app = new App();
app.main(); */



