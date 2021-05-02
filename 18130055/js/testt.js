
// __________   _________        _________     ____       _____   _______________
// |  ______|   |  ____  \      /  _____  \    |    \     |   |   |____    _____|     
// |  |         |  |   \  \    /  /     \  \   |     \    |   |        |   |
// |  |_______  |  |   /  /    |  |     |  |   |      \   |   |        |   |
// |   ______|  |  |  /  /     |  |     |  |   |       \  |   |        |   |
// |  |         |  |  \  \     |  |     |  |   |   |\   \ |   |        |   |
// |  |         |  |   \  \    |  |     |  |   |   | \   \|   |        |   |
// |  |         |  |    \  \   \  \_____/  /   |   |  \       |        |   |
// |__|         |__|     \__\   \_________/    |___|   \______|        |___|
// 
// __________   _____     ___    _________                                             
// |  _______|  |    \    |  |  |  _____  \                                                                 
// |  |         |     \   |  |  |  |    \  \    
// |  |______   |  |\  \  |  |  |  |     \  \                   
// |   ______|  |  | \  \ |  |  |  |     /  /                           
// |  |         |  |  \  \|  |  |  |    /  /                               
// |  |______   |  |   \     |  |  |___/  /                                                                  
// |_________|  |__|    \____|  |________/                                                        
// 


// ***VARIABLE GLOBAL*** 
var canvastwo = document.getElementById("level2");
var ctxtwo = canvastwo.getContext("2d");

ctxtwo.lineWidth = 3;
canvastwo.style.border = "1px solid #0ff";

//******FUNTION********

// ***VARIABLE PADDLE***
var width_paddletwo = 90;
var height_paddletwo = 15;
var x_paddletwo = (canvas.widthtwo - width_paddletwo) / 2;
var y_paddletwo = canvas.heighttwo - height_paddletwo;
var dx_paddletwo = 5;

// ***DRAW PADDLE
function drawPaddletwo() {
    ctx.beginPath();
    ctx.strokeStyle = "#C0C0C0";
    ctx.stroke();
    ctx.fillStyle = "#FF6600";
    ctx.rect(x_paddletwo, y_paddletwo, width_paddletwo, height_paddletwo);
    ctx.fill();

    ctx.closePath();

}

// ***VARIABLE BALL***
var radius_ball = 10;
var x_ball = canvas.width / 2;
var y_ball = canvas.height - 18;
var dx_ball = 5;
var dy_ball = -5;
var speed_ball = 5;

// ***DRAW BALL
function drawBall() {
    ctx.beginPath();
    ctx.fillStyle = "#00FF00";
    ctx.arc(x_ball, y_ball, radius_ball, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.stroke()
    ctx.closePath();
}

// ***VARIABLE BRICK
var bricks = [];
var padding_x = 25;
var padding_y = 40;
var width_brick = 70;
var height_brick = 20;
var row_brick = 1;
var col_brick = 5;

// ***DRAW BRICK***
function drawBricks() {
    for (row = 0; row < row_brick; row++) {
        for (col = 0; col < col_brick; col++) {

            if (bricks[row][col].status) {
                // ctx.strokeStyle = "#C0C0C0";
                // ctx.fillStroke(bricks[row][col].x,bricks[row][col].y,width_brick,height_brick);
                ctx.fillStyle = "#808000";
                // let array = row * col;
                // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                // if (array == array) {
                //     ctx.fillStyle = "#" + randomColor;
                // }
                ctx.fillRect(bricks[row][col].x, bricks[row][col].y, width_brick, height_brick);
            }
        }
    }
}

// ***CREATE COORDINATES BRICK***
function createCoordinatesBrick() {
    for (row = 0; row < row_brick; row++) {
        bricks[row] = [];
        for (col = 0; col < col_brick; col++) {
            bricks[row][col] = {
                x: padding_x + (width_brick + padding_x) * col,
                y: padding_y + (padding_y + height_brick) * row,
                // x: width_brick * col,
                // y: height_brick * row + padding_y,
                status: true
            }
        }
    }
}
createCoordinatesBrick();

let leftDirection = false;
let rightDirection = false;

// ***MOVE PADDLE***
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37)
        leftDirection = true;
    if (e.keyCode == 39)
        rightDirection = true;
});
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 37)
        leftDirection = false;
    if (e.keyCode == 39)
        rightDirection = false;
});
function movePaddle() {
    if (rightDirection && x_paddle < canvas.width - width_paddle)
        x_paddle += dx_paddle;
    if (leftDirection && x_paddle > 0)
        x_paddle -= dx_paddle;
}



// ***MOVE BALL***
function moveBall() {
    x_ball += dx_ball;
    y_ball += dy_ball;
}


// ***COLLISION WALL***
function collisionWall() {
    if (x_ball + radius_ball > canvas.width) {
        dx_ball = -dx_ball;
    }


    if (y_ball - radius_ball < 0) {
        dy_ball = -dy_ball;
    }


    if (x_ball - radius_ball < 0) {
        dx_ball = -dx_ball;
    }


    if (y_ball + radius_ball > canvas.height) {
        reset();
        heart--;
        // if(heart<0){
        //     confirm("lose")
        //     playAgain();
        // }
    }

}
// ***RESET WHEN THE BALL FALL
function reset() {
    x_ball = x_paddle + width_paddle / 2;
    y_ball = y_paddle;
    dx_ball = 5;
    dy_ball = -5;

}

// ***COLLISION PADDLE***
function collisionPaddle() {
    if (x_ball < x_paddle + width_paddle
        && x_ball > x_paddle
        && y_ball + radius_ball > y_paddle) {

        let collision = x_ball - (x_paddle + width_paddle / 2);
        collision = collision / (width_paddle / 2);
        let angle = collision * Math.PI / 3;

        dx_ball = speed_ball * Math.sin(angle);
        dy_ball = -speed_ball * Math.cos(angle);
    }

}




// ***COLLISION BRICKS***
function collisionBricks() {
    for (row = 0; row < row_brick; row++) {
        for (col = 0; col < col_brick; col++) {
            let brick = bricks[row][col];
            if (brick.status) {
                if (x_ball + radius_ball > brick.x
                    && x_ball - radius_ball < brick.x + width_brick
                    && y_ball - radius_ball < brick.y + height_brick
                ) {
                    brick.status = false;
                    dy_ball = - dy_ball;
                    score += score_collision;
                    if (score % 100 == 0) {
                        heart++;
                    }
                }
            }
        }
    }
}



// ***LEVEL UP***
function levelUp() {
    let levelCurrent = true;
    for (row = 0; row < row_brick; row++) {
        for (col = 0; col < col_brick; col++) {
            levelCurrent = levelCurrent && !bricks[row][col].status;
        }
    }
    if (levelCurrent) {
        row_brick++;
        createCoordinatesBrick();
        level++;
        speed_ball += 2;
        if (level % 2 == 0) {
            heart++;
        }
        reset();
    }

}
//***VARIABLE SCORE***/
const scoreImg = new Image();
scoreImg.src = "img/score.png";

var score = 0;
var score_collision = 10;

// ***DISPLAY SCORE***
function displayScore() {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "22px jokerman";
    ctx.fillText(score, 45, 30);
    ctx.drawImage(scoreImg, 10, 5, 30, 30);
}



// ***VARIABLE LEVEL***
const levelImg = new Image();
levelImg.src = "img/level.png";

var level = 1;
var max_level = 5;
var x_level = canvas.width / 2;
var y_level = 30;

// ***DISPLAY LEVEL***
function displayLevel() {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "22px jokerman";
    ctx.drawImage(levelImg, canvas.width / 2 - 40, 5, 30, 30);
    ctx.fillText(level, x_level, y_level);
}

// ***VARIABLE HEART***
const heartImg = new Image();
heartImg.src = "img/heart.png";
var heart = 2;
var x_heart = canvas.width - 40;
var y_heart = 30;

// ***DISPLAY HEART***
function displayHeart() {
    ctx.fillStyle = "#fff";
    ctx.font = "22px jokerman";
    ctx.drawImage(heartImg, canvas.width - 75, 5, 30, 30);
    ctx.fillText(heart, x_heart, y_heart);
}

// ***CONDITION WIN***
function coditionWin() {
    if (level > max_level) {
        confirm("YOU WON, SO TALENT -- YOU WORTHY HAVE 10 GIRL FRIEND")
        playAgain();
    }
}

// ***CONDITION LOSE***
function conditionLose() {
    if (heart < 0) {
        confirm("YOU LOSE -- YOU WORTHY FOREVER ALONE")
        playAgain();
    }
}

// ***PLAY AGAIN***
function playAgain() {
    row_brick = 1;
    col_brick = 5;
    score = 0;
    level = 1;
    heart = 2;
    speed_ball = 5;
    createCoordinatesBrick();
}

// ***MOVE MOUSE***
function mouseMove(e) {
    var x_mouse = e.clientX ;
    var y_mouse = e.clientY;
    var x = x_mouse - width_paddle/2;
    if (x_mouse > 0 && x_mouse < canvas.width && y_mouse > 0 && y_mouse < canvas.height) {
        if ( x >= 0 && x <= canvas.width - width_paddle)
            x_paddle = x;

    }
}
document.addEventListener("mousemove", mouseMove, false);


function create() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveBall();
    movePaddle();
    collisionWall();
    collisionPaddle();
    collisionBricks();
    levelUp();


    drawBricks();
    drawBall();
    drawPaddletwo();
    displayScore();
    displayHeart();
    displayLevel();
    coditionWin();
    conditionLose();

}

setInterval(create, 20);
