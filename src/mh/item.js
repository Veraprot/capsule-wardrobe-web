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
      return `<li class="category-item">${this.name}  <img class="item-image" src=${this.image}>Times Worn: ${this.times_worn}<button id="item-${this.id}">Donate</button></li>`
    }
}

Item.all = []
