
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

      switch (sessionStorage.getItem("radioSelection")) {
        case "vanilla":
          cellDiv.addEventListener("mouseover", function() {
            cellDiv.style.backgroundColor = "black";
          })
          break;
        
        case null:
          cellDiv.addEventListener("mouseover", function() {
            cellDiv.style.backgroundColor = "black";
          })
          break;  

        case "random-colors":
          cellDiv.addEventListener("mouseover", function() {
            let r = getRandomIntInclusive(0,255);
            let g = getRandomIntInclusive(0,255);
            let b = getRandomIntInclusive(0,255);
            cellDiv.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
          })
          break;

        case "shade-mode":
          /* cellDiv.style.backgroundColor = 'rgb(0,0,0)';
          cellDiv.style.opacity = 0.0; */
          cellDiv.addEventListener("mouseover", function() {
            if (+cellDiv.style.opacity < 1.0) {
              cellDiv.style.opacity = +cellDiv.style.opacity + 0.1;
              cellDiv.style.backgroundColor = 'rgba(0,0,0,' + cellDiv.style.opacity + ')';
            }
          })
          break;
      }
      gridRow.appendChild(cellDiv);
    }  
  }
}

createGrid();
