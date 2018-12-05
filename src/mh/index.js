const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/categories`


document.addEventListener('DOMContentLoaded', () => {
  const controller = new DOMController
  const form = new DOMController
  controller.init()

  controller.main.addEventListener('click', (e)=>{
    console.log(e.target.className)
    if(e.target.className === "category-item add-item-container"){
      console.log("TODO: FORM POPUP", e);
    }
  })

  console.log();





})
