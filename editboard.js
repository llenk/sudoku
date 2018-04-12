window.onload = function setTabIndicies() {
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
  if (previouslyClickedItem != clickedItem) {
    previouslyClickedItem.parentElement.style.background = 'white';
  }
  clickedItem.parentElement.style.background = 'yellow';
  clickedItem.focus();
  clickedItem.addEventListener('keydown', addNumber);
  e.stopPropagation();
  previouslyClickedItem = clickedItem;
}

function addNumber(e) {
  let val = e.keyCode;
  if (val>=49 && val<=57) {
    val -= 48;
    e.target.innerHTML = val;
  }
}

function checkNumber(e) {

}

let previouslyClickedItem;

$(document).ready( function() {
  let board = document.getElementById('gameboard');
  previouslyClickedItem = document.getElementById('e00'); //just set an initial value here
  board.addEventListener("click", pickBox, true);
  board.addEventListener("keydown", checkNumber);
});

