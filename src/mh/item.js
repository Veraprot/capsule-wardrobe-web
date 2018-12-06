class Item {
  constructor({ id, name, category_id, image , times_worn}){
    this.id = id
    this.name = name
    this.times_worn = times_worn
    this.category_id = category_id
    this.image = image
    Item.all.push(this)
  }
  render() {
      return `<li class="category-item">${this.name}  <img class="item-image" data-id="${this.id}" src=${this.image}>Times Worn: ${this.times_worn}<button data-id="${this.category_id}-${this.id}">Donate</button></li>`
    }
  static find(id) {
    return Item.all.find(e => e.id == id)
  }
  renderOutfit() {
      return `<li class="category-item" id="category${this.category_id}">${this.name}  <img class="item-image" data-id="${this.id}" src=${this.image}></li>`
    }
}

Item.all = []
