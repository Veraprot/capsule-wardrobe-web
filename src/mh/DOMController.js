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

  static renderAddedItem(newItemObj){
    console.log(this.main);
    debugger
  }

  containerListener() {
    let addToy = false
    this.main.addEventListener('click', (e)=>{
      if(e.target.className === "category-item add-item-container"){
        this.form.dataset.id = e.target.dataset.id
        addToy = !addToy
        if (addToy) {
          this.popUpForm.style.display = 'block'
        }
      } else if (e.target.innerText === "Donate"){
        let deleteItemId = e.target.dataset.id.split("-")[1]
        let deleteCatId = e.target.dataset.id.split("-")[0]
        let foundCategory = Category.find(deleteCatId)
        foundCategory.deleteItem(deleteItemId)
      } else {
        this.popUpForm.style.display = 'none'
        addToy = false
      }
    })
  }


formListener(){
  this.form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let addItemId = (parseInt(e.target.dataset.id))
    let foundCategory = Category.find(addItemId)
    let addedItem = { name: e.target.name.value, image: e.target.image.value, category_id: addItemId};
    foundCategory.addItem(addedItem)

    controller.form.reset()
    controller.popUpForm.style.display = 'none'
  })
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
