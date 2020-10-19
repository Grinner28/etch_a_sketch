
//Create a variable for sketch pad area

const sketchPad = document.getElementById('sketchPadContainer')
var size = 0; // Size sketch pad that user can adjust
var totalSquares = 10;
generateGrid(10); //grid displayed when page is opened

//event listener on newGrid button which geneates newGrid based on user input
//Need to ensure grid size is not greater than a max width and max height
//create if statement to check this
// if true return your value x exceeeds the max of y
// if false proceed with generating grid

document.getElementById("newGrid").addEventListener('click', () => {
    deleteGrid(); //run function deleteGrid to clear current grid
    const gridForm = document.forms.gridSizeForm;//Select grid form element assign to gridForm var
    size = Number(gridForm.elements.size.value);//Convert width form value to number and assign to w
    totalSquares = size * size;                       //multiple w by h and assign to totalSquares
    generateGrid(totalSquares); //run function generateGrid using totalSquares as input
    sketchPad.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
    sketchPad.style.gridTemplateRows =  'repeat(' + size + ', 1fr)';
    gridForm.elements.size.value = "";
       
    
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
