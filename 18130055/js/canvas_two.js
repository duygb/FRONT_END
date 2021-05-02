var canvas_two = document.getElementById("leveltwo");
var ctx_two = canvas_two.getContext("2d");

canvas_two.style.border = "1px solid #0ff"

var width_paddle2 = 90;
var height_paddle2 = 15;
var x_paddle2 = (canvas_two.width - width_paddle2) / 2;
var y_paddle2 = canvas_two.height - height_paddle2;
var dx_paddle2 = 5;

function drawPaddle2() {
    ctx.beginPath();
    ctx.strokeStyle = "#C0C0C0";
    ctx.stroke();
    ctx.fillStyle = "#C0C0C0";
    ctx.rect(x_paddle2, y_paddle2, width_paddle2, height_paddle2);
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx2.clearRect(0,0,canvas_two.width,canvas_two.height);
    drawPaddle2();
}
setInterval(draw,20);