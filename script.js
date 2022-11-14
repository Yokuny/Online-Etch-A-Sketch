let canvaElement = document.getElementById("canva");
let squareSize = 24;
let canvaSize = squareSize * squareSize;
function colorChanger(elementId){
    let theElementHovered = document.getElementById(elementId);
    theElementHovered.style.backgroundColor = `rgb(190, 102, 129)`;

}
for (let index = 0; index < canvaSize; index++) {
    var newDivElement = document.createElement('div');
    newDivElement.className = 'squareProperty';
    newDivElement.style.cssText = `height: ${squareSize}px;`;
    newDivElement.style.cssText += `width: ${squareSize}px;`;
    newDivElement.setAttribute('id', `squareNum${index}`);
    newDivElement.addEventListener('mouseover', function(){
        colorChanger(this.id);
      });

    canvaElement.appendChild(newDivElement);
    

    
}