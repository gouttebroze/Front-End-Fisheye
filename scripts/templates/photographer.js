function photographerTemplate(data) {
    const { name, portrait, id } = data;

    const picture = `assets/photographers/${portrait}`;

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

    function getUserHeaderDOM() {}
    
    return { name, picture, getUserCardDOM, getUserHeaderDOM }
}