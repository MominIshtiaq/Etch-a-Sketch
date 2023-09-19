function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.computedStyleMap.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.computedStyleMap.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  if (input > 2 || input <= 100) {
    populateBoard(input);
  } else {
    console.log("too many squares to render");
  }
}

populateBoard(16);
