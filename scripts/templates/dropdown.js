class Dropdown {
  constructor() {

  }

  get html() {
    return `<div class="c-dropdown">
              <label for="sorting-listbox">Trier par</label>
              <select class="c-dropdown--sr-only sr-only" id="sorting-listbox">
                <option value="date">Date</option>
                <option value="likes">Popularité</option>
                <option value="title">Titre</option>
              </select>
              <div class="c-dropdown--custom__wrapper" aria-hidden="true">
                <div class="c-dropdown--custom">
                </div>
              </div>
            </div>`;
  }
}
