import { configValues, points, groundVelocity, sprites, sprite, ctx, checkColition, obstacleInterface, spriteInterface } from "./index";

let birdLastType: string;
let lastObstacle: string;
let obstacleInitialX: number|null;

let initialObstacles: obstacleInterface[] = [
    {type: 'cactus', x: 0, y: 0, w: 0, h: 0, initialX: 1000, obstacleActualX: 0, drawY : 0, obstacleHeight: 0, obstacleWidth: 0, isDrawingObstacle: false, isDrawingBird: false, baseY: 0},
    {type: 'cactus', x: 0, y: 0, w: 0, h: 0, initialX: 700, obstacleActualX: 0, drawY : 0, obstacleHeight: 0, obstacleWidth: 0, isDrawingObstacle: false, isDrawingBird: false, baseY: 0},
]

let obstacles: obstacleInterface[] = structuredClone(initialObstacles);

export const resetObstacles = () => {
    obstacles = structuredClone(initialObstacles);
    obstacleInitialX = null;
}

const obstaclesLogic = (index: number) => {
    if (obstacles[index].isDrawingObstacle === false) {
        obstacles[index].isDrawingObstacle = true;
        setObstacle(index);
        obstacleInitialX = (!obstacleInitialX) ? obstacles[index].initialX :
                                                ( index === 0) ? obstacles[1].obstacleActualX + (350 + Math.floor(Math.random() * 200)) 
                                                               : obstacles[0].obstacleActualX + (350 + Math.floor(Math.random() * 200));
        obstacles[index].obstacleActualX = obstacleInitialX;
        return;
    }
    
    checkColition(obstacles[index]);

    if ( obstacles[index].obstacleActualX > -90 ) {
        drawObstacle(obstacles[index]);
        obstacles[index].obstacleActualX -= groundVelocity;
        return;
    }
    
    obstacles[index].isDrawingBird = false;
    obstacles[index].isDrawingObstacle = false;
}

export const obstacleLogic = () => {
    for (let index = 0; index < obstacles.length; index++) {
        obstaclesLogic(index);
    }
}

const setObstacle = (index: number) => {
    let obstacleChoose: string = ( points > 200) ? configValues.obstacles[(Math.floor(Math.random() * configValues.obstacles.length))] : 'cactus';
    obstacleChoose = (lastObstacle === 'bird' ) ? 'cactus' : obstacleChoose;
    lastObstacle = obstacleChoose;

    return (obstacleChoose === 'cactus') ? drawCactusLogic(index) : BirdLogic(index);
}

const drawCactusLogic = (index: number) => {
    let cactusType: string = configValues.cactusTypes[Math.floor(Math.random() * configValues.cactusTypes.length)];
    let obstacle: spriteInterface = sprites[cactusType];
    obstacles[index].type = cactusType;
    setObstacleChors(index, obstacle, cactusType);
    obstacles[index].drawY = (cactusType === 'cactus' || cactusType === 'cactusDoubleB') ?  161 - obstacle.h : 155 - obstacle.h;
}

const setObstacleChors = (index: number, obstacle: spriteInterface, type: string) => {
    obstacles[index].w = obstacle.w;
    obstacles[index].h = obstacle.h;
    obstacles[index].x = obstacle.x;
    obstacles[index].y = obstacle.y;
    let multiply: number = (type === 'birdDown' || type === 'birdUp') ? .5 : .8;
    obstacles[index].obstacleHeight = obstacle.h * multiply;
    obstacles[index].obstacleWidth = obstacle.w * multiply;
}

const BirdLogic = (index: number) => {
    obstacles[index].isDrawingBird = true;
    let birdType: number = Math.floor(Math.random() * 2);
    obstacles[index].baseY = (birdType === 0) ? 70 : 90;
    drawBirdLogic(index);
}

const drawBirdLogic = (index: number) => {
    birdLastType = (birdLastType === 'birdDown') ? 'birdUp' : 'birdDown';
    let obstacle: spriteInterface = sprites[birdLastType];
    obstacles[index].type = birdLastType;
    setObstacleChors(index, obstacle, birdLastType);
    obstacles[index].drawY = (birdLastType === 'birdUp') ?  obstacles[index].baseY : obstacles[index].baseY + 10;
}

export const birdPosture = () => {
    setInterval(()=>{
    for (let index = 0; index < obstacles.length; index++) {
        if (obstacles[index].isDrawingBird === true) {
            drawBirdLogic(index);
        }
    }
    }, 150);
}

const drawObstacle = ({x, y, w, h, obstacleActualX, drawY, obstacleHeight, obstacleWidth}: spriteInterface & {obstacleActualX: number, drawY: number, obstacleHeight: number, obstacleWidth: number}) => {
    ctx.drawImage(sprite, x, y, w, h, obstacleActualX, drawY, obstacleWidth , obstacleHeight);
}