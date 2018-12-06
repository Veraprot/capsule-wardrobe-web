class Category {
  constructor({ id, name, items }) {
    this.id = id
    this.name = name
    this.items = items.map(item => new Item(item))
    Category.all.push(this)

    this.addItem = this.addItem.bind(this)
  }

  addItem(item) {
    return Category.adapter.postItem(item)
    .then(data => {
      let newItem = new Item(data);
      this.items.push(newItem)
      let index = Category.all.indexOf(this)
      Category.all.splice(index,1,this)
      return Category.all
    })
  }

  deleteItem(itemId) {
    let updatedArr = this.items.filter ((e) => e.id != itemId)
    this.items = updatedArr
    let index = Category.all.indexOf(this)
    Category.all.splice(index,1,this)
    return Category.adapter.delete(itemId, this.id)
  }

  static populateFromAPI() {
    return Category.adapter.getAll()
      .then(json => {
        json.forEach(categoryObj => {
          let newCategory = new Category(categoryObj)
        })
      })
  }

  static create(obj) {
    return Category.adapter.post(obj)
      .then(json => {
        console.log(json)

      })
  }

  static find(id) {
    return Category.all.find(c => c.id == id)
  }

  renderCard() {
    return `<div class="category-container" data-id="${this.id}"><h1 class="category-header">${this.name}</h1>
              <ul class="category-inner-container">
                 ${this.renderItems()}
                 <li class="category-item add-item-container" data-id="${this.id}">+</li>
              </ul>
            </div>`
  }
  renderItems() {
    return this.items.map(i => i.render()).join("")
  }

}
  Category.all = []
  Category.adapter = new JSONAPIAdapter('http://localhost:3000/api/v1/categories')
