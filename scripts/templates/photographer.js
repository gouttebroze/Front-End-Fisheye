function photographerTemplate(data) {
    const { name, portrait, id, tagline, title, image, photographerId, country, city, likes } = data;

    const picture = `assets/photographers/${portrait}`;
    // media = photo & video // id ou photographerId
    const media = `assets/FishEye_Photos/medias/${id}/${image}`;
    const likesIcon = `assets/icons/heart.svg`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const link = document.createElement( 'a' );
        link.href = '/Front-End-Fisheye/photographer.html?id=' + id;
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        link.appendChild(article);
        return (link);
    }

    /**
     * fn that represent header photographer page
     * with name as 'h1' HTML tag 
     * & text (city, country & tagline) as 'p' HTML tag 
     * @returns 
     */
    function getUserHeaderDOM() {
        const article = document.createElement( 'article' );
        const headerTitle = document.createElement( 'h1' );
        const headerCity = document.createElement( 'h3' )
        const headerCountry = document.createElement( 'h3' );
        const headerText = document.createElement( 'p' );
        const img = document.createElement( 'img' );

        headerTitle.textContent = name;
        headerText.textContent = tagline;
        headerCity.textContent = city;
        headerCountry.textContent = country;
        img.setAttribute("src", picture);

        article.appendChild(headerTitle);
        article.appendChild(headerText);
        article.appendChild(headerCity);
        article.appendChild(headerCountry);
        article.appendChild(img);

        const $wrapper = document.createElement( 'div' );
        $wrapper.classList.add('photograph-wrapper');
        const photographerHeader = `
            <div class="photograph-text">
                <h1>${name}</h1>
                <div class="photographer-localisation">
                    <h3>${city}, ${country}</h3>
                </div>
                <p>${tagline}</p>
            </div>
            <img src="${picture}" alt="${name}" />
        `;
        $wrapper.innerHTML = photographerHeader;

        return ($wrapper);
    }

    /**
     * fn that represent media list from array (json datas)
     * a link ('a' HTML tag), that open the lightbox, 
     * with an image ('img' HTML tag), a text ('p'),
     * & an "heart" icon ('i')
     * @returns 
     */
    function getUserMediaDOM() {
        const $cardsMediaWrapper = document.createElement( 'article' );
        $cardsMediaWrapper.classList.add('cards-media-wrapper');

        const photographerMedia = `
            <div class="media-card>
                <img src="${media}" alt="${title}" />
                <div class="media-text">
                    <h3>${title}</h3>
                    <div class="likes">
                        <p>${likes}</p>
                        <img 
                            class="likes-icon" 
                            src="assets/icons/heart.svg" 
                            alt="likes" 
                        />
                    </div>
                </div>
            </div>
        `;
        $cardsMediaWrapper.innerHTML = photographerMedia;

        return ($cardsMediaWrapper);
    }
    
    return { name, picture, media, getUserCardDOM, getUserHeaderDOM, getUserMediaDOM, id, photographerId }
}