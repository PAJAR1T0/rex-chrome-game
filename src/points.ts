import { ctx, configValues, gameOver, levelSound,} from './index';

export let groundVelocity = configValues.initialVelocity;

export let points = 0;
let historicalPoints: any = 0;
let drawPoints: string;
let hasNewRecord: boolean = false;
let isBlinking: boolean = false;
let blinkCounter: number = 0;


export const resetGroundVelocity = () => {
    groundVelocity = configValues.initialVelocity;
};

export const gameOverPointsLogic = () => {
    if (hasNewRecord) {
        ctx.font = '25px Pixelify Sans';
        ctx.fillStyle = 'gray';
        ctx.fillText('NEW RECORD!', 227, 35);
        localStorage.setItem('record', historicalPoints);
        hasNewRecord = false;
    }
    points = 0;
}

export const loadHistoricalPoints = () => {
    historicalPoints = localStorage.getItem('record');
}

export const managePoints = () => {
    setTimeout(() => {
        points++;
        if ( points % 100 === 0 ) { blinkPoints(), levelSound.play() };
        if ( points % 50 === 0 && groundVelocity < 1.5 * configValues.initialVelocity ) groundVelocity += configValues.initialVelocity * .125;
        if (!gameOver) managePoints();
    }, 100);
}

const blinkPoints = () => {
    setTimeout(() => {
    isBlinking = !isBlinking;
    if (blinkCounter === 5) return blinkCounter = 0;
    blinkCounter++;
    blinkPoints();
    }, 2000/6);
}

export const drawActualPoints = () => {
    if (isBlinking) return;
    drawPoints = (points.toString().length === 1) ? `000${points}` : 
    (points.toString().length === 2) ? `00${points}` :
    (points.toString().length === 3) ? `0${points}` : points.toString();
    ctx.font = '25px Pixelify Sans';
    ctx.fillStyle = 'gray';
    ctx.fillText(drawPoints, 540, + 25);
};

export const drawHistoricalPoints = () => {
    if (points > historicalPoints * 1) {
        historicalPoints = drawPoints;
        hasNewRecord = true;
    }
    historicalPoints = (points > historicalPoints * 1) ? drawPoints : historicalPoints;
    ctx.fillText(historicalPoints, 470, + 25);
};