import { sprites } from '../env/sprites';
import {ctx, canvas, drawCloud, drawGround, obstacleLogic, 
        drawActualPoints, drawHistoricalPoints, expandCanvas, 
        managePoints, drawDinosaur,
        dinosaurInterval, dinosaurPosture, jumpLogic, birdPosture, jump} from './index';


const gameFrames = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround(sprites.ground);
    drawCloud(sprites.cloud);
    obstacleLogic();
    jumpLogic();
    const dinoPosture = dinosaurPosture();
    const sprite = sprites[dinoPosture];
    drawDinosaur(sprite);
    drawActualPoints();
    drawHistoricalPoints();
    requestAnimationFrame(gameFrames);
};

export const start = () => {
    requestAnimationFrame(gameFrames);
    dinosaurInterval();
    jump()
    birdPosture()
    expandCanvas();
    managePoints();
}



