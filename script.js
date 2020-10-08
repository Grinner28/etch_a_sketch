
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var w = document.getElementById('width'); //Width of sketch pad that user can adjust
var h = document.getElementById('height'); //Height of sketch pad that user can adjust
var newGrid = document.getElementById('newGrid')

//
// create function which generates grid
function generateGrid(w, h) {
    var i;
    
    for (i = 1; i == (w * h); i++) {//CREATE w*h divs
        const square = document.createElement("DIV");
        square.innerHTML = i;
        sketchPad.appendChild(square);  //Add square to sketchpad grid
                                    

    }
}







//When user mouses over grid change colour of hovered square

//When user clicks reset clear all coloured squares
