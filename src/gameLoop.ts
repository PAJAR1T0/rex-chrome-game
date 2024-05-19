import {ctx, canvas, drawCloud, drawGround, obstacleLogic, 
        drawActualPoints, drawHistoricalPoints, expandCanvas, 
        managePoints, drawDinosaur,
        dinosaurInterval, dinosaurPosture, jumpLogic, birdPosture, jump, setGameOver, gameOver,
        resetObstacles,
        resetGroundVelocity, sprites,
        loadHistoricalPoints,
        activeShadows,
        isExpanded} from './index';

let interval: number; 
let inGameLoop: boolean = false;

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
        if (!isExpanded) {
            requestAnimationFrame(gameFrames);
            return;
        }
        if (!inGameLoop) gameLoop();
        return;
    }
    clearInterval(interval);
    inGameLoop = false;
};

const gameLoop = () => {
    inGameLoop = true;
    interval = setInterval(() => {
        gameFrames()
    }, 1000/60)
}


export const newGame = (): void => {
    setGameOver();
    resetObstacles();
    gameFrames();
    resetGroundVelocity();
    managePoints();
}

export const start = (): void  => {
    activeShadows();
    expandCanvas();
    gameFrames();
    dinosaurInterval();
    jump()
    birdPosture()
    loadHistoricalPoints();
    managePoints();
}