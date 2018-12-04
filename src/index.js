const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const categoryDiv = document.querySelector('#category-collection')

const categories = new CategoryController()

// console.log(adapter);
let addToy = false

document.addEventListener('DOMContentLoaded', () => {


// CategoryController.getCategoriesFromAPI()
// let all = categories.getCategoriesFromAPI()


renderHTML();

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
