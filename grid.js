// Get the container
const container = document.querySelector(".container");

// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16, 16);
}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum, cellNum) {
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

// Call it
defaultGrid();
