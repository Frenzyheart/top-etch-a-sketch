document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#container');
  const clearBtn = document.querySelector('#clear');

  let setupGrid = (columns) => {
    let columnSetup = "";
    for (i = 0; i < columns * columns; i++) {
      let tempNode = document.createElement('div');
      tempNode.className = 'grid-item';
      tempNode.id = i;
      tempNode.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black';
      });
      container.appendChild(tempNode);
    }

    for (j = 0; j < columns; j++) {
      columnSetup += "auto";
      if (j !== columns - 1) columnSetup += " ";
    }

    container.style.gridTemplateColumns = columnSetup;
  }

  clearBtn.addEventListener('click', () => {
    let columns = parseInt(prompt("How many squares per side would you like?", "16"));

    while (columns > 100) {
      columns = parseInt(prompt("Grid cannot be bigger than 100 x 100, please enter a smaller number.", "16"));
    }

    container.textContent = '';

    setupGrid(columns);
  });

  setupGrid(16);
});