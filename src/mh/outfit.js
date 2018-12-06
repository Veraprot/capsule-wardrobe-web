class Outfit {
  constructor() {
    this._items = [];
    Outfit.all.push(this);
  }

  static createNew() {
    let newOutfit = new Outfit();
    newOutfit.generateId()
  }

  generateId() {
    this.id = Outfit.all.indexOf(this) + 1;
  }

  //dfgbgg
  renderOutfitCard() {
    return `<div class="outfit-container" id="active" data-id=${this.id}>
                 ${this.renderItems()}
            </div>`
  }

  renderFlickityCard() {
    return `<div class="outfit-cell">...</div>`
  }

  activateOutfit(outfit) {
    outfit.classList.all('active');
  }

  renderItems() {
    return this._items.map(i => i.render()).join("")
  }
}

Outfit.all = [];
