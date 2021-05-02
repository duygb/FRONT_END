
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
// 
// HOANG QUOC DUY 
// DH18DTC
// 18130055


// ***VARIABLE GLOBAL*** 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var gameInterface = document.getElementById("gameInterface");
var playGame = document.getElementById("playGame");
var tutorial = document.getElementById("tutorial");
var mode = document.getElementById("modeGame");

var modeInterface = document.getElementById("modeInterface")
var backMode = document.getElementById("back-mode");
var tutorialInterface = document.getElementById("tutorialInterface");
var joinGame = document.getElementById("joinGame");
var backTutorial = document.getElementById("back-tutorial");

var newGame = document.getElementById("newGame");
var volumnOn = document.getElementById("volumnOn");
var volumnOff = document.getElementById("volumnOff");
var musicOn = document.getElementById("musicOn");
var musicOff = document.getElementById("musicOff");
var chooseMode = document.getElementById("chooseMode");
var exit = document.getElementById("exit");

// var level = document.getElementById("levelGame");
// var chooseLevel = document.getElementById("chooseLevel");
// var backLevel = document.getElementById("back-level");

// var levelone = document.getElementById("btn-one");
// var leveltwo = document.getElementById("btn-two");
// var levelthree = document.getElementById("btn-three");
// var levelfour = document.getElementById("btn-four");
// var levelfive = document.getElementById("btn-five");

var showWin = document.getElementById("win");
var showLose = document.getElementById("lose");
var pWin = document.getElementById("p-win");
var pLose = document.getElementById("p-lose");
var bg = document.getElementById("bg_img");

var useMouse = document.getElementById("mode-mouse");
var useKeyboard = document.getElementById("mode-key");

// var music_bg = document.getElementById("music_bg");
// ***USE KEYBOARD***
useKeyboard.addEventListener("click",function(){
    canvas.style.display = "block";
    gameInterface.style.display = "none";
    newGame.style.display = "block";
    exit.style.display = "block";
    musicOff.style.display  = "block";
    volumnOff.style.display = "block";
    music_bg.play();
    modeInterface.style.display = "none";
    chooseMode.style.display = "block";
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
});

// ***USE MOUSE***
useMouse.addEventListener("click",function(){
    document.addEventListener("mousemove",mouseMove);
    canvas.style.display = "block";
    gameInterface.style.display = "none";
    newGame.style.display = "block";
    exit.style.display = "block";
    musicOff.style.display  = "block";
    volumnOff.style.display = "block";
    chooseMode.style.display = "block";
    music_bg.play();
    modeInterface.style.display = "none";
    document.addEventListener("keydown", function (e) {
        if (e.keyCode == 37)
            leftDirection = false;
        if (e.keyCode == 39)
            rightDirection = false;
        // if(e.keyCode==13)
        //     move = true;
    });
    document.addEventListener("keyup", function (e) {
        if (e.keyCode == 37)
            leftDirection = false;
        if (e.keyCode == 39)
            rightDirection = false;
    });
});


chooseMode.addEventListener("click",function(){
    modeInterface.style.display = "block";
    canvas.style.display = "none";
});


// ***PLAY GAME IN GAME INTERFACE***
playGame.addEventListener("click", function () {
    canvas.style.display = "block";
    gameInterface.style.display = "none";
    newGame.style.display = "block";
    exit.style.display = "block";
    musicOff.style.display  = "block";
    volumnOff.style.display = "block";
    chooseMode.style.display = "block";
    music_bg.play();
    document.addEventListener("mousemove", mouseMove);
    
});

// ***TUTORIAL***
tutorial.addEventListener("click", function () {
    gameInterface.style.display = "none";
    tutorialInterface.style.display = "block";
});

// ***MODE***
mode.addEventListener("click",function(){
    gameInterface.style.display = "none";
    modeInterface.style.display = "block";
});

backMode.addEventListener("click",function(){
    location.reload();
})

// ***PLAY GAME IN TUTORIAL***
joinGame.addEventListener("click", function () {
    canvas.style.display = "block";
    tutorial.style.display = "none";
    newGame.style.display = "block";
    document.addEventListener("mousemove", mouseMove);
    exit.style.display = "block";
    musicOff.style.display = "block";
    volumnOff.style.display = "block";
    chooseMode.style.display = "block";
    music_bg.play();

});

// ***BACK FROM TUTORIAL***
backTutorial.addEventListener("click", function () {
    tutorial.style.display = "none";
    // gameInterface.style.display = "block";
    location.reload();
    // history.back();

});

// ***RELOAD GAME***
newGame.addEventListener("click", function () {
    playAgain();
    showWin.style.display = "none";
    showLose.style.display = "none";
    canvas.style.display = "block";
    pWin.style.display = "none";
    pLose.style.display = "none";
    soundCollisionBrick.volume = 1;
    soundCollisionPaddle.volume = 1;
    soundCollisionWall.volume = 1;
    music_bg.play();
});

// ***WHEN WIN CLICK HERE TO PLAY AGAIN
pWin.addEventListener("click",function(){
    playAgain();
    showWin.style.display = "none";
    showLose.style.display = "none";
    canvas.style.display = "block";
    pWin.style.display = "none";
    pLose.style.display = "none";
    soundCollisionBrick.volume = 1;
    soundCollisionPaddle.volume = 1;
    soundCollisionWall.volume = 1;
    music_bg.play();
});

// ***WHEN LOSE CLICK HERE TO PLAY AGAIN
pLose.addEventListener("click",function(){
    playAgain();
    showWin.style.display = "none";
    showLose.style.display = "none";
    canvas.style.display = "block";
    pWin.style.display = "none";
    pLose.style.display = "none";
    soundCollisionBrick.volume = 1;
    soundCollisionPaddle.volume = 1;
    soundCollisionWall.volume = 1;
    music_bg.volume = 1;
});

//  ***BACK TO MENU***
exit.addEventListener("click", function () {
    location.reload();
});

// ***CHOOSE LEVEL***
// level.addEventListener("click", function () {
//     gameInterface.style.display = "none";
//     chooseLevel.style.display = "block";
// })

// ***BACK FROM LEVEL
// backLevel.addEventListener("click", function () {
//     location.reload();
// });



ctx.lineWidth = 3;
canvas.style.border = "1px solid #0ff";
tutorialInterface.style.border = "1px solid #0ff";
gameInterface.style.border = "1px solid #0ff";
showWin.style.border = "1px solid #0ff";
showLose.style.border = "1px solid #0ff";
modeInterface.style.border = "1px solid #0ff";


//******FUNTION********

// ***VARIABLE PADDLE***
var width_paddle = 90;
var height_paddle = 15;
var x_paddle = (canvas.width - width_paddle) / 2;
var y_paddle = canvas.height - height_paddle;
var dx_paddle = 5;

// ***DRAW PADDLE
function drawPaddle() {
    ctx.beginPath();
    ctx.strokeStyle = "#C0C0C0";
    ctx.stroke();
    ctx.fillStyle = "#FF6600";
    ctx.rect(x_paddle, y_paddle, width_paddle, height_paddle);
    ctx.fill();
    ctx.closePath();

}

// ***VARIABLE BALL***
var radius_ball = 10;
var x_ball = x_paddle + (width_paddle / 2);
var y_ball = canvas.height - 25;
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

                ctx.beginPath();
                ctx.rect(bricks[row][col].x, bricks[row][col].y, width_brick, height_brick);
                if (col % 2 == 0) {
                    ctx.fillStyle = "#808000";
                }
                else {
                    ctx.fillStyle = "#C0C0C0";
                }
                // let array = row * col;
                // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                // if(array == array){
                //     ctx.fillStyle = "#" + randomColor;
                // }else{
                //     ctx.fillStyle = "#ffffff";
                // }
                ctx.fill();
                ctx.closePath();
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

// ***VARIABLE DIRECTION***
let leftDirection = false;
let rightDirection = false;
let move = false;

// ***MOVE PADDLE***

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 37)
        leftDirection = true;
    if (e.keyCode == 39)
        rightDirection = true;
    // if(e.keyCode==13)
    //     move = true;
});
document.addEventListener("keyup", function (e) {
    if (e.keyCode == 37)
        leftDirection = false;
    if (e.keyCode == 39)
        rightDirection = false;
});

//***MOVE PADDLE***
function movePaddle() {
    if (rightDirection == true && x_paddle < canvas.width - width_paddle)
        x_paddle += dx_paddle;
    if (leftDirection == true && x_paddle > 0)
        x_paddle -= dx_paddle;
}

// ***MOVE BALL***
document.addEventListener("keydown", function (e) {
    // if(e.keyCode==13 || e.keyCode == 32)
    if (e.keyCode == 13 || e.keyCode == 32)
        move = true;
});

// ***MOVE BALL***
function moveBall() {
    if (move == true) {
        x_ball += dx_ball;
        y_ball += dy_ball;
    } else {
        reset();
    }

}

// ***RESET WHEN THE BALL FALL
function reset() {
    x_ball = x_paddle + width_paddle / 2;
    y_ball = y_paddle - 10;
    dx_ball = 5;
    dy_ball = -5;


}

// ***COLLISION WALL***
function collisionWall() {
    if (x_ball + radius_ball > canvas.width) {
        dx_ball = -dx_ball;
        soundCollisionWall.play();
    }


    if (y_ball - radius_ball < 0) {
        dy_ball = -dy_ball;
        soundCollisionWall.play();
    }


    if (x_ball - radius_ball < 0) {
        dx_ball = -dx_ball;
        soundCollisionWall.play();
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

        soundCollisionPaddle.play();
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
                    && y_ball - radius_ball < brick.y + height_brick) {
                    brick.status = false;
                    dy_ball = - dy_ball;
                    score += score_collision;
                    soundCollisionBrick.play();
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
        // if(level>max_level){
        //     win.play();

       
        //     showWin.style.display = "block";
            
            
        // }
        
        row_brick++;
        createCoordinatesBrick();
        level++;
        throughLevel.play();
        // if(level==2){
        //     row_brick++;
        //     if(col % 2 ==0){
        //         bricks.status = false;
        //     }
        // }
        speed_ball += 2;
        heart++;
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
var x_heart = canvas.width - 30;
var y_heart = 30;

// ***DISPLAY HEART***
function displayHeart() {
    ctx.fillStyle = "#fff";
    ctx.font = "22px jokerman";
    ctx.drawImage(heartImg, canvas.width - 70, 5, 30, 30);
    ctx.fillText(heart, x_heart, y_heart);
}

function showwwin(){
    showWin.style.display = "block";

}

// ***SHOW WIN***
function showYouWin(){
    showWin.style.display = "block";
    canvas.style.display = "none";
    soundCollisionBrick.volume = 0;
    soundCollisionPaddle.volume = 0;
    soundCollisionWall.volume = 0;
    bg.style.display = "block";
    pWin.style.display = "block";
    music_bg.volume=0;
   
}
// ***CONDITION WIN***
function coditionWin() {
    if (level > max_level) {
        showYouWin();
        win.play();
        pause = true;
        
        // showwwin();
        // confirm("YOU WON, DO YOU WANT TO PLAY AGAIN??")
        // playAgain();

    }
}
// ***SHOW LOSE***
function showYouLose(){
    showLose.style.display = "block";
    canvas.style.display = "none";
    soundCollisionBrick.volume = 0;
    soundCollisionPaddle.volume = 0;
    soundCollisionWall.volume = 0;
    bg.style.display = "block";
    pLose.style.display = "block";
    music_bg.volume=0;
  

}

// ***CONDITION LOSE***
function conditionLose() {
    if (heart < 0) {
        showYouLose();
        lose.play();
        
        
    }
}

// ***PLAY AGAIN WHEN WIN OR LOSE***
function playAgain() {
    row_brick = 1;
    col_brick = 5;
    score = 0;
    level = 1;
    heart = 2;
    speed_ball = 5;

    reset();
    createCoordinatesBrick();
}

// ***MOVE MOUSE***
function mouseMove(e) {
    var x_mouse = e.clientX ;
    var y_mouse = e.clientY;

    if (x_mouse > 0 && x_mouse < canvas.width && y_mouse > 0 && y_mouse < canvas.height) {
       
        if (x_mouse - width_paddle / 2 >= 0 && x_mouse - width_paddle / 2 <= canvas.width - width_paddle)
            x_paddle = x_mouse - width_paddle / 2;

    }
}
// document.addEventListener("mousemove", mouseMove);

// ***SOUND***/////////////////////////

// ***SOUND BRICK***
const soundCollisionBrick = new Audio();
soundCollisionBrick.src = "mp3/collision_bricks.mp3";

// ***SOUND LOSE***
const lose = new Audio();
lose.src = "mp3/SOUND EFFECTS FOR VIDEO/FAIL.mp3";

// ***SOUND COLLISION PADDLE***
const soundCollisionPaddle = new Audio();
soundCollisionPaddle.src = "mp3/SOUND EFFECTS FOR VIDEO/TOMAHAWK HITMARKER.mp3";

// ***SOUND COLLISION WALL***
const soundCollisionWall = new Audio();
soundCollisionWall.src = "mp3/collisionWall.mp3";

// ***SOUND WIN***
const win = new Audio();
win.src = "mp3/win.mp3";

// ***SOUND MUSIC***

const music_bg = new Audio();
music_bg.src = "mp3/ThisGirlKungsVsCookinOn3Burners-KungsCookinOn3Burners-5256886.mp3";

// ***THROUGH LEVEL***
const throughLevel = new Audio();
throughLevel.src = "mp3/SOUND EFFECTS FOR VIDEO/SWOOSH #2.mp3";

// ***SOUND MOVE***
// ***SOUND OFF***
volumnOff.addEventListener("click", function () {
    soundCollisionBrick.volume = 0;
    soundCollisionPaddle.volume = 0;
    soundCollisionWall.volume = 0;
    volumnOn.style.display = "block";
    volumnOff.style.display = "none";
});

// ***SOUND ON***
volumnOn.addEventListener("click",function(){
    soundCollisionBrick.volume = 1;
    soundCollisionPaddle.volume = 1;
    soundCollisionWall.volume = 1;
    volumnOn.style.display = "none";
    volumnOff.style.display = "block";
});

// ***MUSIC OFF***
musicOff.addEventListener("click",function(){
    music_bg.volume = 0;
    musicOn.style.display = "block";
    musicOff.style.display = "none";
});

// ***MUSIC ON***
musicOn.addEventListener("click",function(){
    music_bg.volume = 1;
    musicOn.style.display = "none";
    musicOff.style.display = "block";
});


function create() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    moveBall();
    movePaddle();
    collisionWall();
    collisionPaddle();
    collisionBricks();
    levelUp();


    coditionWin();
    conditionLose(); 
    drawBricks();
    drawBall();
    drawPaddle();
    displayScore();
    displayHeart();
    displayLevel();
    displayExit();
   
   
}

    setInterval(create, 20);
    
