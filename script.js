let canvaElement = document.getElementById("canva");
let squareSize = 24;
let canvaSize = squareSize * squareSize;
function colorChanger(elementId){
    let theElementHovered = document.getElementById(elementId);
    let stringBackgroundColor = theElementHovered.style.backgroundColor;
    
    console.log(stringBackgroundColor);

}
for (let index = 0; index < canvaSize; index++) {
    var newDivElement = document.createElement('div');
    newDivElement.className = 'squareProperty';
    newDivElement.style.cssText = `height: ${squareSize}px;`;
    newDivElement.style.cssText += `width: ${squareSize}px;`;
    newDivElement.style.cssText += `background-color: rgba(0, 0, 0, 0.0)`;

    newDivElement.setAttribute('id', `squareNum${index}`);
    newDivElement.addEventListener('mouseover', function(){
        colorChanger(this.id);
      });

    canvaElement.appendChild(newDivElement);
    

    
}