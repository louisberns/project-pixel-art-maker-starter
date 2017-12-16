//Handful of variables to use
const $pixelCanvas = document.getElementById("pixel-canvas");
const $inputHeight = document.getElementById("input_height");
const $inputWidth = document.getElementById("input_width");
const $pixelSize = document.getElementById("pixel-size");
const $colorPicker = document.getElementById("color-picker");
const $items = document.getElementsByClassName("canvas-row");


//Remove all previous content on canvas
const clearCanvas = () => {return $pixelCanvas.innerHTML = "";};

// When size is submitted by the user, call makeGrid()
function makeGrid({width = $inputWidth.value, height = $inputHeight.value, size = $pixelSize.value} = {}) {
  console.log(`You have a width of ${width} and a height of ${height}`);
  let w = `${width}`;
  let h = `${height}`;

  //Clear previous content on canvas
  clearCanvas();

  //Print cols and rows in the canvas, flex-box nesting
  for (let col = 0; col < w; col++) {
    let colHTML = `<div class='canvas-col' id='col-${col}'></div>`;
    $pixelCanvas.innerHTML += colHTML;
    let c = document.getElementById(`col-${col}`);
    for (let row = 0; row < h; row++) {
      let rowHTML = `<div class='canvas-row item-closed item-${size}' id='row-${row}${col}'></div>`;
      c.innerHTML += rowHTML;
    }
  }

  //Fire animation for open items and make them clickable
  openItems();
  clickItems();

  return true;
}

//Change class to open, firing the animation
function openItems() {
  Array.from($items).forEach((i) => {
    return i.classList = i.classList.value.replace("closed", "open");
  });
}

let p = undefined;
function paintItem({item, background = $colorPicker.value}) {
  console.log(item);
  p = item;
  item.target.style.background = `${background}`;
}

//Make items clickable in order to color items
function clickItems() {
  Array.from($items).forEach((i) => {
    i.addEventListener("click", (item) => {
      paintItem({item: item});
    });
  });
}
