//Game Field
const canvas = document.querySelector("#snake")
const ctx = canvas.getContext("2d")

//Player
const snakeSize = 50
let snakePosX = 0
let snakePosY = canvas.height / 2 - snakeSize / 2
let velocityX = 0
let velocityY = 0



//Gamw loop
function gameLoop(){
    dravStuff()
    moveStuff()

    /***Draw***/
    /***Draw***/
    function  moveStuff(){
        //SNAKEpost + SNAKEspeed
    }
    ctx.fillStyle = "#A69185"
    ctx.fillRect(0,0, canvas.width, canvas.height)

    ctx.fillStyle = green 
        ctx.fillRect(0, canvas.height/2 - snakeSize/2, snakeSize, snakeSize)

        snakePosX = snakePosX + 1

    requestAnimationFrame(gameLoop)
}

gameLoop()