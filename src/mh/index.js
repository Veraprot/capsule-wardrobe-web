const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/categories`


document.addEventListener('DOMContentLoaded', () => {
  let outfit = document.getElementById('outfit-collection')

  const controller = new DOMController
  controller.init()
  controller.containerListener()
  controller.formListener()
  controller.renderOutfit()
  const addOutfit = document.getElementById('new-outfit')

})
