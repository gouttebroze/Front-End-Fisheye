function photographerTemplate(data) {
    const { name, portrait, id, tagline, title, image, photographerId } = data;

    const picture = `assets/photographers/${portrait}`;

    // renommer car soit photo soit vidéo
    const photo = `assets/FishEye_Photos/Sample-Photos/${name}/${image}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const link = document.createElement( 'a' );
        link.href = '/Front-End-Fisheye/photographer.html?id=' + id;
        img.setAttribute("src", picture)
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
        const headerText = document.createElement( 'p' );
        const img = document.createElement( 'img' );

        headerTitle.textContent = name;
        headerText.textContent = tagline;
        img.setAttribute("src", picture);

        article.appendChild(headerTitle);
        article.appendChild(headerText);
        article.appendChild(img);

        return (article);
    }

    /**
     * fn that represent media list from array (json datas)
     * a link ('a' HTML tag), that open the lightbox, 
     * with an image ('img' HTML tag), a text ('p'),
     * & an "heart" icon ('i')
     * @returns 
     */
    function getUserMediaDOM() {
        const article = document.createElement( 'article' );
        //const img = document.createElement( 'img' );
        const titleMedia = document.createElement( 'p' );     
        const link = document.createElement( 'a' );

        //img.setAttribute("src", photo);
        titleMedia.textContent = title;

        //article.appendChild(img);
        article.appendChild(title);

        return (article);
    }
    
    return { name, picture, photo, getUserCardDOM, getUserHeaderDOM, getUserMediaDOM }
}