let canvaElement = document.getElementById("canva");
let squareSize = 24;
let canvaSize = squareSize * squareSize;
for (let index = 0; index < canvaSize; index++) {
    var newDivElement = document.createElement('div');
    newDivElement.className = 'squareProperty';
    newDivElement.style.cssText = `height: ${squareSize}px;`;
    newDivElement.style.cssText += `width: ${squareSize}px;`;
    canvaElement.appendChild(newDivElement);
}