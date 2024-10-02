/* class Slider {

  constructor(element, options = {}) {
    console.log("hey oh let's go!");
    this.element = element;
    this.options = Object.assign({}, {
      slidesToScroll: 1,
      slidesVisible: 1
    }, options);

    // this.children = element.children; //  "children" de type "NodeList"
    this.element = [].slice.call(element.children);
    this.currentItem = 0;

    let $root = this.createDivWithClass('lightbox');
    let $container = this.createDivWithClass('lightbox__container');
    $root.appendChild($container); // on insère le container ds la div racine
    this.element.appendChild($root); // ajout de cet el. (div "root" avec classe "lightbox") ds notre el. "options"

    this.children.forEach(child => {
      $container.appendChild(child);
    });

  }

  createNavigation() {
    let nextElementButton = this.createDivWithClass('lightbox__next');
    let previousElementButton = this.createDivWithClass('lightbox__previous');
    
    this.$root.appendChild(nextElementButton);
    this.$root.appendChild(previousElementButton);

    // comportement (lance methode next() au click)
    // this ne fera pas référence à l'élément cliqué ms fera réf. à la classe Slider
    nextElementButton.addEventListener('click', this.next.bind(this));
    previousElementButton.addEventListener('click', this.prev.bind(this));
  }

  next() {
    this.goToItem(this.currentItem = this.options.slidesToScroll)
  }

  prev() {
    this.goToItem(this.currentItem - this.options.slidesToScroll)
  }

  goToItem(index) {

  }

  createDivWithClass(className) {
    let $div = document.createElement( 'div' );
    $div.setAttribute('class', className); // on passe la classe passée en paramètre
    return $div;
  }
}
 */