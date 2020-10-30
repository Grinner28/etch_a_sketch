
const sketchPad = document.getElementById('sketchPadContainer')
var size = 0; // Size sketch pad that user can adjust
var totalSquares = 100;
generateGrid(100); //grid displayed when page is opened
const reset = document.getElementById('reset')
const randomColor = document.getElementById('randomColor')
var colorIsRandom = 0;


document.getElementById("newGrid").addEventListener('click', () => {
    const gridForm = document.forms.gridSizeForm;//Select grid form element assign to gridForm var
    size = Number(gridForm.elements.size.value);//Convert width form value to number and assign to w
    if (size == "" | isNaN(size) == true) {
        alert("Please enter a size value between 1 and 50!")
    } else if (size > 50) {
        alert("Grid size to large! Max size is 50, please enter a new value")
    } else {
        totalSquares = size * size;//multiple w by h and assign to totalSquares
        deleteGrid(); //run function deleteGrid to clear current grid
        generateGrid(totalSquares); //run function generateGrid using totalSquares as input
        sketchPad.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
        sketchPad.style.gridTemplateRows = 'repeat(' + size + ', 1fr)';
        gridForm.elements.size.value = "";
    };
});

reset.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach((squares) => {
        squares.style.backgroundColor = 'white';
    });
});

randomColor.addEventListener('click', () => {
    if (colorIsRandom == 0) {
        randomColor.style.backgroundColor = 'Green'
        return colorIsRandom = 1;
    } else {
        randomColor.style.backgroundColor = '';
        return colorIsRandom = 0;
    }
});


function deleteGrid() { //Deletes current grid elements
        while (sketchPad.firstChild) {
            sketchPad.removeChild(sketchPad.lastChild);
        }
    }

function generateGrid() { //function which generates grid from input
        for (let i = 0; i < (totalSquares); i++) {
            const newSquare = document.createElement("div"); //Creats square
            newSquare.className = 'square';
            sketchPad.appendChild(newSquare);  //Add square to sketchpadContainer
            const squares = document.querySelectorAll('.square');
            squares.forEach((squares) => {
                squares.addEventListener('mouseover', () => { //onmouse over event listener to square
                if (colorIsRandom == 1) {
                    squares.style.backgroundColor = randomiseColor()
                }  else
                    squares.style.backgroundColor = document.getElementById('colorSelector').value

                })
            });
        }
    };

function randomiseColor() {
    var r = randomNumber();  // Call random Number function and assign  to r
    var g = randomNumber(); // Repeat and assign to g
    var b = randomNumber(); // Repeat and assign b
    var rgbColor = r + "," + g + "," + b; // Concate r g b and assign to randomRBG
    return 'rgb(' + rgbColor + ')'; //return rbg;
}

function randomNumber() {
    return Math.round(Math.random() * (256 - 0) + 0);
}