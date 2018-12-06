class DOMController {
  constructor() {
    this.main = document.getElementById('category-collection')
    this.form = document.getElementById('capsule-form')
    this.outfit = document.getElementById('outfit-creator')
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

  containerListener() {
    let selectedCatIds = []
    this.main.addEventListener('click', (e)=> {
      if(e.target.className === "category-item add-item-container"){
        this.form.dataset.id = e.target.dataset.id
        this.popUpForm.style.display = 'block'
      } else if (e.target.innerText === "Donate"){
          this.donateItem();
      } else if (e.target.className === "item-image" ){
        let selectedItemId = e.target.dataset.id
        let foundItem = Item.find(selectedItemId)
        if (selectedCatIds.includes(foundItem.category_id)) {
          console.log("already added", selectedCatIds);
          // debugger
        } else {
          selectedCatIds.push(foundItem.category_id)
          this.outfit.innerHTML += foundItem.renderOutfit()
        }    ///// RESET selectedCatIds ONCE APPENDED
      }
    })

    this.popUpForm.addEventListener('click', e => {
      this.closeForm(e.target.id)
    })
  }



  donateItem() {
    let deleteItemId = e.target.dataset.id.split("-")[1]
    let deleteCatId = e.target.dataset.id.split("-")[0]
    let foundCategory = Category.find(deleteCatId)
    foundCategory.deleteItem(deleteItemId)
      .then(() => {
        this.render()
      })
  }

  closeForm(elementId) {
    if(elementId === "pop-up-container" || elementId === "close-form" ) {
      this.popUpForm.style.display = 'none'
    }
  }


  formListener(){
    this.form.addEventListener('submit', (e) =>{
      e.preventDefault();

      let addItemId = (parseInt(e.target.dataset.id))
      let foundCategory = Category.find(addItemId)
      let addedItem = { name: e.target.name.value, image: e.target.image.value, category_id: addItemId};
      foundCategory.addItem(addedItem)
        .then(() => {
          this.render()
        })
      this.form.reset()
      this.popUpForm.style.display = 'none'
    })
  }

}
