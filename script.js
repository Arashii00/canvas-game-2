var imgObj;
var animate;
function init () {
    imgObj.documentElementById('car_audi');
    imgObj.style.position='relative';
    imgObj.style.left='0px';
}

function moveRight(){
    imgObj.style.left=parseInt(imgObj.style.left) + 5+ 'px';
    animate=setTimeout(moveRight,20);
}
window.onload=init;