
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var size = 0; // Size sketch pad that user can adjust
var totalSquares = 25;
generateGrid(5); //grid displayed when page is opened

document.getElementById("newGrid").addEventListener('click', () => { 
    const gridForm = document.forms.gridSizeForm;//Select grid form element assign to gridForm var
    size = Number(gridForm.elements.size.value);//Convert width form value to number and assign to w
    if (size == "" | isNaN(size) == true) {
        alert("Please enter a size value between 1 and 50!")
    } else if (size > 50) {
        alert("Grid size to large! Max size is 50, please enter a new value") 
        } else {
    totalSquares = size * size;                       //multiple w by h and assign to totalSquares
    deleteGrid(); //run function deleteGrid to clear current grid
    generateGrid(totalSquares); //run function generateGrid using totalSquares as input
    sketchPad.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    sketchPad.style.gridTemplateRows =  'repeat(' + size + ', 1fr)';
    gridForm.elements.size.value = "";
    }
       
    
});


function deleteGrid() { //Deletes current grid elements
    while (sketchPad.firstChild) {
        sketchPad.removeChild(sketchPad.lastChild);
    }
}

function generateGrid() { //function which generates grid from input w and h
for (let i = 0; i < (totalSquares); i++) {
    const newSquare = document.createElement("div"); //Creats square
    newSquare.classList.add('square')
    sketchPad.appendChild(newSquare);  //Add square to sketchpadContainer

}
}









//When user mouses over grid change colour of hovered square

//When user clicks reset clear all coloured squares
