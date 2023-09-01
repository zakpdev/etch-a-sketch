//grab the grid-container div
const gridContainer = document.querySelector(".grid-container");

/* Launch a prompt for the user's desired grid size when the button is clicked 
and convert the return to an integer. Note: Input validation is out of scrope */
/* const sizeButton = querySelector("#size-button");

sizeButton.addEventListener("click", prompt("Enter the number of squares per side (Max 100)", "Please Enter a Whole Number Between 1 and 100"));

 */


//function to create the grid. Creates the chosen number of rows first and then fills each with cells
function createGrid() {
  for (let i = 0; i < 64; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < 64; j++) {
      const gridRow = gridContainer.children[i];
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('column');

      //adds event listener to "color in" the cell when the mouse hovers over it
      cellDiv.addEventListener("mouseover", function() {
        cellDiv.style.backgroundColor = "black";        
      });

      gridRow.appendChild(cellDiv);
    }  
  }
}

createGrid(); //test call