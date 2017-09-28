window.onload = function setTabIndicies() {
  var index = 1;
  for (var i=0; i<9; i++) {
    for (var j=0; j<9; j++) {
      document.getElementById("e"+i+j).setAttribute('tabindex', index);
      index++;
    }
  }
}

function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.childNodes[1];
        clickedItem.focus();
        clickedItem.addEventListener('keydown', addNumber);
    }
    e.stopPropagation();
}

function addNumber(e) {
  var val = e.keyCode;
  if (val>=49 && val<=57) {
    val -= 48;
    e.target.innerHTML = val;
  }
}

function checkNumber(e) {

}

var board = document.getElementById('gameboard');
board.addEventListener("click", doSomething, false);
board.addEventListener("keydown", checkNumber);
