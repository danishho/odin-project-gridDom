// Get the container
const container = document.querySelector(".container");


// Call it
defaultGrid();

const cells = document.querySelectorAll(".cell");

// Creates a default grid sized 16x16
function defaultGrid(a= 16, b=16) {
  makeRows(a, b);
}


function customGrid(){

  const gridValue = parseInt(prompt("enter grid size")) ;

  if (gridValue > 200) alert("please type under 200");
  else{
    defaultGrid(gridValue,gridValue);
  }

}

function rgb(){
  const r = Math.floor(Math.random() * 256);
  // Generate a random integer for the green component (0-255)
  const g = Math.floor(Math.random() * 256);
  // Generate a random integer for the blue component (0-255)
  const b = Math.floor(Math.random() * 256);

  // Return the RGB color string
  return `rgb(${r}, ${g}, ${b})`;
}
// Takes (rows, columns) input and makes a grid
function makeRows(rowNum, cellNum) {
  container.innerHTML = "";
  for (let r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    row.classList.add("gridRow");

    for (let c = 0; c < cellNum; c++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      row.appendChild(cell);


    }

    container.appendChild(row);
  }
}

function hover(event){
  console.log("masuk for each");
  if(!event.target.classList.contains("cell") ) return

  if(event.type ===  "mouseenter"){
    const colorRGB = rgb();
    event.target.style.backgroundColor = colorRGB;
  }else if(event.type ===  "mouseout"){

    setTimeout(() =>  {
      event.target.style.backgroundColor = "";
    },500)
    
  }
}

container.addEventListener("mouseenter", hover, true);
container.addEventListener("mouseout", hover, true);



