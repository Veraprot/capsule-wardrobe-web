class CategoryController {
  constructor(){
    this._categories = [],
    this.adapter = new Adapter
  }
  getCategoriesFromAPI(){
    return this.adapter.getAll()
      .then(data => {
        data.forEach(category => {
          this._categories.push(new Category(category.id, category.name, category.items))
        })
        console.log(this._categories);
      })
  }
}
