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
        })
      })
  }

  static create(obj) {
    return Category.adapter.post(obj)
      .then(json => {
        console.log(json)

      })
  }

  renderCard() {
    return `<div class="category-container" data-id="${this.id}"><p>${this.name}</p>
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
