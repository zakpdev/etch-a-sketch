
let gridSize;

gridSize = sessionStorage.getItem("userSelection");

//Set the size of the grid
if (gridSize == "" || gridSize == null) {
  gridSize = 64; //default value
} else {
  gridSize = parseInt(gridSize);
}

/*Function to add the user's desired grid size to session storage so that when the page reloads and re-draws
the value persists*/
function setSize() {
  gridSize = prompt("Enter your desired grid size as a whole number between 1 - 100");
  sessionStorage.setItem("userSelection", gridSize);
  location.reload();
}

/*vanilla is pre-selected in the HTML. If it is either deliberately selected by the user or remains untouched
no change occurs otherwise the button clicked by the user prior to refresh is checked*/
if (sessionStorage.getItem("radioSelection") == "vanilla" || sessionStorage.getItem("radioSelection") == null) {
  //do nothing
} else {
  document.getElementById(sessionStorage.getItem("radioSelection")).checked = true;
}

const radioButtons = document.querySelectorAll("input[name = 'flavor']");

radioButtons.forEach(radioButton => {
  radioButton.addEventListener("change", function(){
    sessionStorage.setItem("radioSelection", document.querySelector('input[name=flavor]:checked').id);
    location.reload();
  })
});

const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener('click', setSize);



const gridContainer = document.querySelector(".grid");

const randomColors = document.querySelector("#random-colors");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function createGrid() {
  for (let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    gridContainer.appendChild(rowDiv);
    for (let j = 0; j < gridSize; j++) {
      const gridRow = gridContainer.children[i];
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('column');
      //cellDiv.classList.add('0.0');

      //adds event listener to "color in" the cell when the mouse hovers over it
      cellDiv.addEventListener("mouseover", function() {
        if (sessionStorage.getItem("radioSelection") == "random-colors") {
          //cellDiv.style.opacity = 1.0;
          let r = getRandomIntInclusive(0,255);
          let g = getRandomIntInclusive(0,255);
          let b = getRandomIntInclusive(0, 255);
          cellDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        } else if (sessionStorage.getItem("radioSelection") == "shade-mode"){
          if (cellDiv.style.opacity < 1.0){
            cellDiv.style.opacity += 0.1;
            cellDiv.style.backgroundColor = 'rgb(0,0,0)';
          }          
        }else {
          cellDiv.style.opacity = 1.0;
          cellDiv.style.backgroundColor = "black";
        }                
      });

      gridRow.appendChild(cellDiv);
    }  
  }
}

createGrid();

/* document.querySelector('input[name=flavor]:checked').value */
