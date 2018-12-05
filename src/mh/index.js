const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/categories`


document.addEventListener('DOMContentLoaded', () => {
  const controller = new DOMController
  controller.init()


  let addToy = false
  controller.main.addEventListener('click', (e)=>{
    if(e.target.className === "category-item add-item-container"){
      controller.form.dataset.id = e.target.dataset.id
      addToy = !addToy
        if (addToy) {
          controller.popUpForm.style.display = 'block'
        }
    } else {
      controller.popUpForm.style.display = 'none'
    }
  })

  controller.form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let addItemId = (parseInt(e.target.dataset.id))
    let foundCategory = Category.find(addItemId)
    let addedItem = { name: e.target.name.value, image: e.target.image.value, category_id: addItemId};
    foundCategory.addItem(addedItem)

    controller.form.reset()
    controller.popUpForm.style.display = 'none'
  })




})
