class categoryController {
  constructor(){
    this._categories = [],
    this.adapter = new Adapter
  }
    getCategoryFromAPI(){
      return this.adapter.getAll()
        .then(data => console.log(data))
    }
}
