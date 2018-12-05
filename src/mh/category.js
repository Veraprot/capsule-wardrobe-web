class Category {
  constructor({ id, name, items }) {
    this.id = id
    this.name = name
    this.items = items.map(item => new Item(item))
    Category.all.push(this)

    this.addItem = this.addItem.bind(this)
  }

  addItem(item) {
    let newItem = new Item(item)
    this.items.push(newItem)
  }

  static populateFromAPI() {
    return Category.adapter.getAll()
      .then(json => {
        json.forEach(categoryObj => {
          let newCategory = new Category(categoryObj)
          console.log(newCategory);
          // this.items.push(categoryObj.items);
          // categoryObj.items.forEach(catObj => {
          //   new Item(catObj)
          // })
        })
      })
  }
  renderCard() {
    console.log(this);
    return `<div class="card" data-id="${this.id}"><p>${this.name}</p>
            <ul>
            <div id="container">${this.renderItems()}<div>
            </ul>
            </div>`
  }
  renderItems() {
    console.log("IM HERE", this);
    return this.items.map(i => i.render()).join("")
  }

}
  Category.all = []
  Category.adapter = new JSONAPIAdapter('http://localhost:3000/api/v1/categories')
