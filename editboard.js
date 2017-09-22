function doSomething(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.childNodes[1];
        clickedItem.addEventListener('keydown', addNumber);

    }
    e.stopPropagation();
}

function addNumber(e) {
  clickedCoords = [clickedItem.id[1], clickedItem.id[2]];
  console.log(e.type);
}

var theParent = document.getElementById('gameboard');
theParent.addEventListener("click", doSomething, false);
