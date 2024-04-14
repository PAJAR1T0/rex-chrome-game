import {ctx, canvas, drawCloud, drawGround, obstacleLogic, 
        drawActualPoints, drawHistoricalPoints, expandCanvas, 
        managePoints, drawDinosaur,
        dinosaurInterval, dinosaurPosture, jumpLogic, birdPosture, jump, setGameOver, gameOver,
        resetObstacles,
        resetGroundVelocity, sprites,
        loadHistoricalPoints,
        activeShadows} from './index';


const gameFrames = () => {
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGround(sprites.ground);
        drawCloud(sprites.cloud);
        drawActualPoints();
        drawHistoricalPoints();
        obstacleLogic();
        jumpLogic();
        const dinoPosture = dinosaurPosture();
        const sprite = sprites[dinoPosture];
        drawDinosaur(sprite);
        return requestAnimationFrame(gameFrames);
    }
};

export const newGame = () => {
    setGameOver();
    resetObstacles();
    gameFrames();
    resetGroundVelocity();
    managePoints();
}

export const start = () => {
    activeShadows();
    requestAnimationFrame(gameFrames);
    dinosaurInterval();
    jump()
    birdPosture()
    expandCanvas();
    loadHistoricalPoints();
    managePoints();
}



