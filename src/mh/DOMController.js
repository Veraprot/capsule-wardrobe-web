class DOMController {
  constructor() {
    this.main = document.getElementById('category-collection')
    this.form = document.getElementById('capsule-form')
    this.popUpForm = document.getElementById('pop-up-container')
  }

  init() {
    Category.populateFromAPI()
      .then(() => {this.render()})
  }

  render() {
      this.main.innerHTML = Category.all.map(t => t.renderCard()).join('');
    }



}
