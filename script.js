
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var w = document.getElementById('width'); //Width of sketch pad that user can adjust
var h = document.getElementById('height'); //Height of sketch pad that user can adjust
var gridSquares = document.getElementsByClassName('squares')
var squares= w*h;
//
// create function which generates grid
function generateGrid(squares) {
function deletGrid {
    




 }


} // delete old grid before creating new grid    
    var i;
    for (i=0; i < 5; i++) {//CREATE w*h divs//
        const square = document.createElement("div");
        square.textContent = '1';
        square.classList.add('square')
        sketchPad.appendChild(square);  //Add square to sketchpad grid
         
    }
}







//When user mouses over grid change colour of hovered square

//When user clicks reset clear all coloured squares
