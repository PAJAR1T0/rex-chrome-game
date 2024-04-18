import {ctx, canvas, drawCloud, drawGround, obstacleLogic, 
        drawActualPoints, drawHistoricalPoints, expandCanvas, 
        managePoints, drawDinosaur,
        dinosaurInterval, dinosaurPosture, jumpLogic, birdPosture, jump, setGameOver, gameOver,
        resetObstacles,
        resetGroundVelocity, sprites,
        loadHistoricalPoints,
        activeShadows} from './index';

const gameFrames = (): void => {
    if (!gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGround(sprites.ground);
        drawCloud(sprites.cloud);
        drawActualPoints();
        drawHistoricalPoints();
        obstacleLogic();
        jumpLogic();
        const dinoPosture: string = dinosaurPosture();
        const sprite = sprites[dinoPosture];
        drawDinosaur(sprite);
        requestAnimationFrame(gameFrames);
    }
};

export const newGame = (): void => {
    setGameOver();
    resetObstacles();
    gameFrames();
    resetGroundVelocity();
    managePoints();
}

export const start = (): void  => {
    activeShadows();
    requestAnimationFrame(gameFrames);
    dinosaurInterval();
    jump()
    birdPosture()
    expandCanvas();
    loadHistoricalPoints();
    managePoints();
}