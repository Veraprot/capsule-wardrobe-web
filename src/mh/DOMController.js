class DOMController {
  constructor() {
    this.main = document.getElementById('category-collection')
    // this.main.addEventListener('click', this.handleMainClick.bind(this))
  }

  init() {
    Category.populateFromAPI()
      .then(() => {this.render()})
  }

  render() {
      this.main.innerHTML = Category.all.map(t => t.renderCard()).join('')
    }

}
