var bird = new Image()
var bg = new Image()
var fg = new Image()
var pipeUp = new Image()
var pipeDown = new Image()

bird.src = "images/bird.png"
bg.src = "images/bg.png"
fg.src = "images/fg.png"
pipeUp.src = "images/pipeNorth.png"
pipeDown.src = "images/pipeSouth.png"

var gap = 85
var constant

var bX = 10
var bY = 150

var gravity = 1.5

var score = 0

var fly = new Audio()
var scor = new Audio()

fly.src = "sounds/fly.mp3"
scor.src = "sounds/score.mp3"