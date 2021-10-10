var cvs = document.getElementById("canvas")
var ctx = cvs.getContext("2d")
//key down

document.addEventListener("keydown",moveUp)

function moveUp(){
    bY -= 25
    fly.play()
}

// pipe coordinates

var pipe = [];

pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw images

function draw(){
    
    ctx.drawImage(bg,0,0);
    
    
    for(var i = 0; i < pipe.length; i++){
        
        constant = pipeUp.height+gap
        ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y)
        ctx.drawImage(pipeDown,pipe[i].x,pipe[i].y+constant)
             
        pipe[i].x--;
        
        if( pipe[i].x == 125 ){
            pipe.push({
                x : cvs.width,
                y : Math.floor(Math.random()*pipeUp.height)-pipeUp.height
            })
        }
        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeUp.width && (bY <= pipe[i].y + pipeUp.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
            location.reload()
            //play voice
        }
        if(pipe[i].x == 5){
            score++;
            scor.play()
        }
        
        
    }

    ctx.drawImage(fg,0,cvs.height - fg.height)
    
    ctx.drawImage(bird,bX,bY)
    
    bY += gravity;
    
    ctx.fillStyle = "#000"
    ctx.font = "20px Verdana"
    ctx.fillText("Score : "+score,10,cvs.height-20)
    
    requestAnimationFrame(draw)
    
}

draw();