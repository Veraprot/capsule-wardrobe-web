const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/categories`


document.addEventListener('DOMContentLoaded', () => {
  const controller = new DOMController
  controller.init()
  controller.containerListener()
  controller.formListener()
  // controller.createFlickity()
})
