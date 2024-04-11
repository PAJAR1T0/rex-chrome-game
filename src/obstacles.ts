import { configValues, points, groundVelocity, sprites, sprite, ctx } from "./index";


let obstacleType: any;
let obstacle: any;
let obstacleInitialX: any;
let obstacleActualX: any;
let isDrawingObstacle = false;
let birdPosition = 'birdDown';

export const obstacleLogic = () => {
    if (!isDrawingObstacle) {
        let obstacleChoose;
        obstacleChoose = ( points > 100) ? configValues.obstacles[Math.floor(Math.random() * configValues.obstacles.length)] : 'cactus';
        if (obstacleChoose === 'cactus') return drawCactusLogic();
        isDrawingObstacle = true;
        return drawBirdLogic();
    }

    if ( obstacleActualX > -90 ) {
        drawObstacle(obstacle, obstacleType);
        return obstacleActualX -= groundVelocity;
    }

    isDrawingObstacle = false;
    obstacleInitialX = 600 + (Math.floor(Math.random() * 100));
    obstacleActualX = obstacleInitialX;
}

const drawCactusLogic = () => {
    isDrawingObstacle = true;
    obstacleType = configValues.cactusTypes[Math.floor(Math.random() * configValues.cactusTypes.length)];
    obstacle = sprites[obstacleType];
}

const drawBirdLogic = () => {
    setTimeout(()=>{
    birdPosition = (birdPosition === 'birdDown') ? 'birdUp' : 'birdDown' ;
    obstacle = sprites[birdPosition];

    if (isDrawingObstacle) drawBirdLogic();
    }, 700);
}

const drawObstacle = ({h,w,x,y}: {h: number, w: number, x: number, y: number}, type?: string) => {
    const drawY = (type === 'cactus' || type === 'cactusDoubleB') ?  161 - h : 155 - h;
    ctx.drawImage(sprite, x, y, w, h, obstacleActualX, drawY, w  * .8 , h *.8 );
}