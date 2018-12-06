const BASE_URL = "http://localhost:3000"
// const TRAINERS_URL = `${BASE_URL}/categories`


document.addEventListener('DOMContentLoaded', () => {
  let outfit = document.getElementById('outfit-collection')

  const controller = new DOMController
  controller.init()
  controller.containerListener()
  controller.formListener()
  const addOutfit = document.getElementById('new-outfit')

})

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
  cellCount++;
  let cell = document.createElement('div');
  cell.className = 'outfit-cell';
  cell.textContent = cellCount;
  return cell;
}
