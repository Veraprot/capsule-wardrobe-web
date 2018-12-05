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
      return `<li>${this.name} <img src=${this.image}> <button data-item-id="${this.id}">Release</button></li>`
    }
}

Item.all = []
