const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/categories`


document.addEventListener('DOMContentLoaded', () => {
  let outfit = document.getElementById('outfit-creator')

  const controller = new DOMController
  controller.init()
  controller.containerListener()
  controller.formListener()
  const addOutfit = document.getElementById('new-outfit')


  let flkty = new Flickity( '.carousel', {
    initialIndex: 1
  });

  let appendButton = document.querySelector('.button--append');
  appendButton.addEventListener( 'click', function() {
    var cellElems = [ makeCell()];
    flkty.append( cellElems );
  });

  let cellCount = flkty.cells.length;

  function makeCell() {
    if(outfit.innerHTML.trim() !== "") {
      cellCount++;
      let cell = document.createElement('div');
      cell.className = 'outfit-cell';
      console.log(outfit);
      cell.innerHTML =
        Array.from(outfit.getElementsByTagName('img')).map(e => `<img src="${e.src}">`).join('')
      return cell;
    }
    else {
      outfit.innerHTML = "please add some items";
    }
  }
})
