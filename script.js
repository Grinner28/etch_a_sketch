
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var w = 0; //Width of sketch pad that user can adjust
var h = 0; //Height of sketch pad that user can adjust
var totalSquares = 10;
generateGrid(10); //grid displayed when page is opened

//event listener on newGrid button
document.getElementById("newGrid").addEventListener('click', () => {
    deleteGrid(); //run function deleteGrid to clear current grid
    const gridForm = document.forms.gridSizeForm;//Select grid form element assign to gridForm var
    w = Number(gridForm.elements.width.value);//Convert width form value to number and assign to w
    h = Number(gridForm.elements.height.value);//Convert height form value to number and assign to h
    totalSquares = w * h;                       //multiple w by h and assign to totalSquares
    generateGrid(totalSquares); //run function generateGrid using totalSquares as input 
});


function deleteGrid() { //Deletes current grid elements
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.lastChild);
    }
}

function generateGrid() { //function which generates grid from input w and h
for (let i = 0; i < (totalSquares); i++) {
    const newSquare = document.createElement("div"); //Creats square
    newSquare.textContent = '1'; //Will delete last, using this to visuallly function
    newSquare.classList.add('square')
    sketchPad.appendChild(newSquare);  //Add square to sketchpadContainer

}
}








//When user mouses over grid change colour of hovered square

//When user clicks reset clear all coloured squares
