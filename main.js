/* Create a webpage with a 16x16 grid of square divs

Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

You need to make the divs appear as a grid (versus just one on each line). This is a perfect opportunity to apply what you have learned about flexbox.

Be careful with borders and margins, as they can adjust the size of the squares! */

//create a row, fill it with 16 columns then repeat

//grab the grid container div
const gridContainer = document.querySelector(".grid-container");

//function to create the grid
function createGrid() {
  //const cellDiv = document.createElement('div');
  for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < 16; j++) {
      const gridRow = gridContainer.children[i];
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('column');
      gridRow.appendChild(cellDiv);
    }    
    //gridContainer.appendChild(document.createElement('div'));
  }
}

createGrid();



/* const gridContainer = document.querySelector(".grid-container");

console.log(gridContainer.children);

function createRow() {
  const newRow = document.createElement('div');
  newRow.classList.add('grid-row');
  gridContainer.appendChild(newRow);
} */

/* function createColumn(i) {
  const gridRow = gridContainer.children[i];
  const newColumn = document.createElement('div');
  newColumn.classList.add('cell');
  gridRow.appendChild(newColumn);
} */

/* createRow();

createColumn(0); */

/* for (let i = 0; i < 16; i++) {
  createRow();
  for (let j = 0; j <16; j++) {
    createColumn(i);
  }
} */










/* const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++){
  gridContainer.appendChild(document.createElement('div'));
  
}; */
