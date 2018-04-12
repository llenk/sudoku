function setTabIndicies() {
  let index = 1;
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      document.getElementById("e"+i+j).tabIndex = index;
      index++;
    }
  }
  
}

function pickBox(e) {
  let clickedItem = e.target;
  if (e.target.className == 'd') {
    clickedItem = clickedItem.firstElementChild;
  }
  if (previouslyClickedItem != clickedItem && previouslyClickedItem.parentElement.style.background != "lightgreen") {
    previouslyClickedItem.parentElement.style.background = 'white';
  }
  clickedItem.parentElement.style.background = '#fffca7';
  clickedItem.focus();
  clickedItem.addEventListener('keydown', addNumber);
  e.stopPropagation();
  previouslyClickedItem = clickedItem;
}

function addNumber(e) {
  let val = e.keyCode;
  if (val>=49 && val<=57) {
    val -= 48;
    $(e.target).html(val);
    if (!solving) {
      let clickedItem = e.target;
      if (e.target.className == 'd') {
        clickedItem = clickedItem.firstElementChild;
      }
      clickedItem.parentElement.style.background = 'lightgreen';
    }
  }
}

function inputProblem() {
  solving = false;
}

function solveProblem() {
  solving = true;
}

// the below doesn't actually check if it's right
// function solved(board) {
//   let isSolvedBool = true;
//   for (let i=0; i<9; i++) {
//     for (let j=0; j<9; j++) {
//       if ($('#e'+i+j).html() ==  "") {
//         isSolvedBool = false;
//       }
//     }
//   }
//   return isSolvedBool;
// }

let previouslyClickedItem; // is there a way to do this without making this a global variable?
let solving = true;
$(document).ready( function() {
  let board = document.getElementById('gameboard');
  setTabIndicies();
  previouslyClickedItem = document.getElementById('e00'); //just set an initial value here
  board.addEventListener("click", pickBox, true);
  $('#input').on('click', inputProblem);
  $('#solve').on('click', solveProblem);
});

