class Outfit {
  constructor(items) { 
    this.items = items
    Outfit.all.push(this);
  }

  static populateFromAPI() {
    return Outfit.adapter.getAll()
      .then(json => {
        json.forEach(outfitObj => {
          let newOutfit = new Outfit(outfitObj)
          console.log(outfitObj)
          console.log(newOutfit)
        })
      })
  }

  static createNew(outfitItems) {
    let createOutfitItems = outfitItems.map((e)=> Item.find(e))
    let newOutfit = new Outfit( createOutfitItems);
    console.log(newOutfit);
  }
}

Outfit.all = [];
Outfit.adapter = new JSONAPIAdapter('http://localhost:3000/api/v1/outfits')
