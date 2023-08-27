/* Create a webpage with a 16x16 grid of square divs

Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!

It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

You need to make the divs appear as a grid (versus just one on each line). This is a perfect opportunity to apply what you have learned about flexbox.

Be careful with borders and margins, as they can adjust the size of the squares! */

//create a row, fill it with 16 columns then repeat

const gridContainer = document.querySelector(".grid-container");

function createRow() {
  const newRow = document.createElement('div');
  newRow.classList.add('.grid-row');
  gridContainer.appendChild(newRow);
}

createRow();










/* const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++){
  gridContainer.appendChild(document.createElement('div'));
  
}; */
