
let gridSize;

gridSize = sessionStorage.getItem("userSelection");

if (gridSize == "" || gridSize == null) {
  gridSize = 64; //default value
} else {
  gridSize = parseInt(gridSize);
}

function setSize() {
  gridSize = prompt("Enter your desired grid size as a whole number between 1 - 100");
  sessionStorage.setItem("userSelection", gridSize);
  location.reload();
}

const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener('click', setSize);

const gridContainer = document.querySelector(".grid");

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < gridSize; j++) {
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

createGrid();
