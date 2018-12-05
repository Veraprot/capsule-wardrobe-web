class DOMController {
  constructor() {
    this.main = document.getElementById('category-collection')
    this.outfit = document.getElementById('outfit-list')
    this.form = document.getElementById('capsule-form')
    this.popUpForm = document.getElementById('pop-up-container')
  }

  init() {
    Category.populateFromAPI()
      .then(() => {
        this.render()
      })
  }

  render() {
      this.main.innerHTML = Category.all.map(t => t.renderCard()).join('');
    }


  createOutfit() {
    Outfit.createNew();    
    this.outfit.innerHTML += Outfit.all[Outfit.all.length - 1].renderOutfitCard()
  }

  activateOutfit(outfit) {
      console.log(outfit)
      outfit.id = 'active'
  }
}
