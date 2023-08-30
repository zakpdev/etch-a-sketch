//grab the grid-container div
const gridContainer = document.querySelector(".grid-container");

//function to create the grid. Creates the chosen number of rows first and then fills each with cells
function createGrid() {
  for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
      const gridRow = gridContainer.children[i];
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('column');

      //event listener to "color in" the cell when the mouse hovers over it
      cellDiv.addEventListener("mouseover", function() {
        cellDiv.style.backgroundColor = "black";        
      });

      gridRow.appendChild(cellDiv);
    }  
  }
}

createGrid(); //test call