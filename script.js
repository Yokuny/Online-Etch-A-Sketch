
function colorChanger(elementId){
    let theElementHovered = document.getElementById(elementId);
    let stringBackgroundColor = theElementHovered.style.backgroundColor;
    let newColorIntensity;
    if((parseInt(stringBackgroundColor[16])) == 9){
        newColorIntensity = 9;
    }else{
        newColorIntensity = parseInt(stringBackgroundColor[16]) +1;
    }
    let stringBackgroundModified = `rgba(0, 0, 0, 0.${newColorIntensity})`;
    theElementHovered.style.backgroundColor = stringBackgroundModified;
}

function squareGenerate(){
    let canvaElement = document.getElementById("canva");
    let squareAmount = document.getElementById("squareAmount").valueAsNumber;
    canvaElement.innerHTML = '';
    for (let index = 0; index < squareAmount*squareAmount; index++) {
        var newDivElement = document.createElement('div');
        newDivElement.className = 'squareProperty';
        newDivElement.style.cssText = `height: 24px;`;
        newDivElement.style.cssText += `width: 24px;`;
        newDivElement.style.cssText += `background-color: rgba(0, 0, 0, 0.01)`;
    
        newDivElement.setAttribute('id', `squareNum${index}`);
        newDivElement.addEventListener('mouseover', function(){
            colorChanger(this.id);
          });
        canvaElement.appendChild(newDivElement);
    }
}