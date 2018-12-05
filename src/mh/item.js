class Item {
  constructor({ id, name, category_id, image }){
    this.id = id
    this.name = name
    this.category_id = category_id
    this.image = image
    Item.all.push(this)
    console.log(Item.all);
  }
  render() {
      return `<li class="category-item">${this.name} <img class="item-image" src=${this.image}></li>`
    }
}

Item.all = []
