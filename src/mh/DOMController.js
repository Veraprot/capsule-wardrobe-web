class DOMController {
  constructor() {
    this.main = document.getElementById('category-collection')
    this.form = document.getElementById('capsule-form')
    this.outfit = document.getElementById('outfit-creator')
    this.addOutfit = document.getElementById('new-outfit')
    this.appendButton = document.querySelector('.button--append');
    this.popUpForm = document.getElementById('pop-up-container')
  }

  init() {
    Category.populateFromAPI()
      .then(() => {
        this.render()
      })
    Outfit.populateFromAPI()
      .then(() => {
        this.createFlickity()
      })
  }

  render() {
      this.main.innerHTML = Category.all.map(t => t.renderCard()).join('');
    }

  containerListener() {
    let selectedCatIds = {}
    this.main.addEventListener('click', (e)=> {
      if(e.target.className === "category-item add-item-container"){
        this.form.dataset.id = e.target.dataset.id
        this.popUpForm.style.display = 'block'
      } else if (e.target.innerText === "Donate"){
          this.donateItem(e);
      } else if (e.target.className === "item-image" ){
        let selectedItemId = e.target.dataset.id
        let foundItem = Item.find(selectedItemId)
        if (selectedCatIds[foundItem.category_id] === undefined) {
          selectedCatIds[foundItem.category_id] = foundItem
          this.outfit.innerHTML=""
          for (let catId in selectedCatIds) {
            this.outfit.innerHTML += selectedCatIds[catId].renderOutfit()
          }
        } else {
          selectedCatIds[foundItem.category_id] = foundItem
          this.outfit.innerHTML=""
          for (let catId in selectedCatIds) {
            this.outfit.innerHTML += selectedCatIds[catId].renderOutfit()
          }
        }
        this.outfit.addEventListener('click', (e) => {
          if(e.target.className === "button-class") {
            let dropCatId = e.target.dataset.id
            this.outfitDropCategory(dropCatId, selectedCatIds)
          }
        })
      }
    })

    this.popUpForm.addEventListener('click', e => {
      this.closeForm(e.target.id)
    })
  }

  outfitDropCategory(dropCatId, selectedCatIds) {
    delete selectedCatIds[dropCatId]
    this.outfit.innerHTML=""
    for (let catId in selectedCatIds) {
      this.outfit.innerHTML += selectedCatIds[catId].renderOutfit()
    }
  }

  donateItem(e) {
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

  createCell(flkty) {
    let cellElems = [this.makeCell()]
    flkty.append( cellElems );
  }

  makeCell(cellCount) {
    if(this.outfit.innerHTML.trim() !== "") {
      cellCount++;
      let cell = document.createElement('div');
      cell.className = 'outfit-cell';
      let outfitItems = Array.from(this.outfit.getElementsByClassName('item-image')).map(e => e.dataset.id)

      Outfit.createNew(outfitItems)
      cell.innerHTML =
        Array.from(this.outfit.getElementsByTagName('img')).map(e => `<img src="${e.src}">`).join('')
      return cell;
    }
    else {
      this.outfit.innerHTML = "please add some items";
    }
  }

  createFlickity() {
    let flkty = new Flickity( '.carousel', {
      initialIndex: 1
    });
    let cellCount = flkty.cells.length;
    this.appendButton.addEventListener( 'click', () => {
      this.createCell(flkty)
    });
    this.makeCell(cellCount)
  }
}
