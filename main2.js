//Define function to prompt user to set grid size and link it to the Set Size button
let userSize;
let gridSize = 16; //default value

function setSize() {
  userSize = parseInt(prompt("Enter your desired grid size", "Enter a whole number between 1 - 100"));
}

const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener('click', setSize);
