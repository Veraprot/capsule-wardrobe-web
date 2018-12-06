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
}

Outfit.all = [];
