const currentFilter = document.querySelector("#current_filter");
const dropdownContent = document.querySelector(".dropdown_content");
const btnDrop = document.querySelector(".btn_drop");

const btnSortPop = document.querySelector(".sort-by-pop");
const btnSortDate = document.querySelector(".sort-by-date");
const btnSortTitle = document.querySelector(".sort-by-title");

/**
 * fn permettant de réordonner la listes des items
 * liste transformée en tableau & ordonnée par ces index
 */
function reorderList(selectedItem) {
  const items = Array.from(dropdownContent.children);
  const selectedItemIndex = items.findIndex((item) =>
    item.contains(selectedItem)
  );

  // Suppression des items sélectionnés depuis leurs positions courantes
  const [selectedLi] = items.splice(selectedItemIndex, 1);

  // ajout des items sélectionnés au début de la liste
  dropdownContent.insertBefore(selectedLi, dropdownContent.firstChild);
}

// écouteurs d'évenements sur chaques btn
btnSortPop.addEventListener("click", function () {
  currentFilter.innerHTML = "Popularité";
  reorderList(btnSortPop);
  if (btnDrop.style.zIndex === "-10") {
    btnDrop.style.zIndex = "100";
  }
});

btnSortDate.addEventListener("click", function () {
  currentFilter.innerHTML = "Date";
  reorderList(btnSortDate);
  if (btnDrop.style.zIndex === "-10") {
    btnDrop.style.zIndex = "100";
  }
});

btnSortTitle.addEventListener("click", function () {
  currentFilter.innerHTML = "Titre";
  reorderList(btnSortTitle);
  if (btnDrop.style.zIndex === "-10") {
    btnDrop.style.zIndex = "100";
  }
});


/**
 * navigation au clavier
 */

/**
 * ajout attribut "tabindex" à -1 empeche le btn d'être atteint avec la navigation clavier 
 * (ms l'élément pt toujours capturer le focus)
 */
btnDrop.setAttribute("tabindex", "-1");

btnSortPop.addEventListener("focus", function () {
  btnDrop.style.zIndex = "-10";
});
btnSortPop.addEventListener("blur", function () {
  btnDrop.style.zIndex = "100";
});

btnSortDate.addEventListener("focus", function () {
  btnDrop.style.zIndex = "-10";
});
btnSortDate.addEventListener("blur", function () {
  btnDrop.style.zIndex = "100";
});

btnSortTitle.addEventListener("focus", function () {
  btnDrop.style.zIndex = "-10";
});
btnSortTitle.addEventListener("blur", function () {
  btnDrop.style.zIndex = "100";
});