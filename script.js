
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var w = document.getElementById('width'); //Width of sketch pad that user can adjust
var h = document.getElementById('height'); //Height of sketch pad that user can adjust
var gridSquares = document.getElementsByClassName('squares')
var totalSquares = w * h;
var i;

// create function which generates grid
//  


function deletGrid(totalSquares) { //Deletes current grid elements 
    for (i = totalSquares +1; i > 0; i--) {
        sketchPad.removeChild(sketchPad.firstChild);
}
}

function generateGrid(totalSquares) { //function which generates grid from input w and h
for (i = 0; i < totalSquares; i++) {
    const newSquare = document.createElement("div"); //Creats square
    newSquare.textContent = '1'; //Will delete last, using this to visuallly function
    newSquare.classList.add('square')
    sketchPad.appendChild(newSquare);  //Add square to sketchpadContainer

}
}








//When user mouses over grid change colour of hovered square

//When user clicks reset clear all coloured squares
