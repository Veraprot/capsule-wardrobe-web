class Outfit {
  constructor({ items}) { /*id,*/
    // this.id = id
    this.items = items
    Outfit.all.push(this);
  }

  static createNew(outfitItems) {
    let createOutfitItems = outfitItems.map((e)=> Item.find(e))
    let newOutfit = new Outfit({items: createOutfitItems});
    // return Outfit.adapter.postOutfit(createOutfitItems)
    //   .then(data => {
    //     console.log(data);
      }

  // generateId() {
  //   this.id = Outfit.all.indexOf(this) + 1;
  // }
}

Outfit.all = [];
Outfit.adapter = new JSONAPIAdapter('http://localhost:3000/api/v1/outfits')
