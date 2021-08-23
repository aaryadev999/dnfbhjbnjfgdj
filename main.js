

canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var colour = "Green";
var cWidth = screen.width-70;
var cHeight= screen.height-300;
if(cWidth<992){
    document.getElementById("myCanvas").width=cWidth;
    document.getElementById("myCanvas").height=cHeight;
    document.body.style.overflow="hidden";
}
var widthline = 5;
var xand,yand;
canvas.addEventListener("touchStart",my_touchStart);

function my_touchStart(e){
    colour = document.getElementById("colourstuff").value;
    widthline = document.getElementById("with").value;
    xand=e.touches[0].clientX-canvas.offsetLeft;
    yand=e.touches[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchMove",my_touchMove);

function my_touchMove(e){
    currentPositionOfX= e.touches[0].clientX-canvas.offsetLeft;
    currentPositionOfY= e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle= colour;
        ctx.lineWidth= widthline;
        console.log(xand,yand);
        ctx.moveTo(xand,yand);
        ctx.lineTo(currentPositionOfX, currentPositionOfY);
        ctx.stroke();

    xand=currentPositionOfX;
    yand=currentPositionOfY;
}


function buton(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}