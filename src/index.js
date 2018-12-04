const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const categories = new CategoryController()
let all = categories.getCategoriesFromAPI()
// console.log(adapter);
let addToy = false

document.addEventListener('DOMContentLoaded', () => {

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
      // submit listener here
    } else {
      toyForm.style.display = 'none'
    }
  })


})
