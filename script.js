
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var w = document.getElementById('width'); //Width of sketch pad that user can adjust
var h = document.getElementById('height'); //Height of sketch pad that user can adjust
var gridSquares = document.getElementsByClassName('squares')
var i;
generateGrid(10); //grid displayed when page is opened

//event listener on newGrid button
//run function deleteGrid to clear current grid
//submit width to w var on click
//submit height to h var on click
//convert w to integer
//convert h to integer
//run function to generateGrid using 


function deleteGrid() { //Deletes current grid elements
    for (i = (document.getElementsByClassName('square').length +1); i > 0; i--) {
        sketchPad.removeChild(sketchPad.firstChild);
}
}

function generateGrid() { //function which generates grid from input w and h
for (i = 0; i < (10); i++) {
    const newSquare = document.createElement("div"); //Creats square
    newSquare.textContent = '1'; //Will delete last, using this to visuallly function
    newSquare.classList.add('square')
    sketchPad.appendChild(newSquare);  //Add square to sketchpadContainer

}
}








//When user mouses over grid change colour of hovered square

//When user clicks reset clear all coloured squares
