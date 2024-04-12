import { ctx, configValues} from './index';

export let groundVelocity = configValues.initialVelocity;

export let points = 0;
let historicalPoints: any = 0;
let drawPoints: string;

export const managePoints = () => {
    setTimeout(() => {
        points++;
        if ( points % 70 === 0 && groundVelocity < 1.5 * configValues.initialVelocity ) groundVelocity += configValues.initialVelocity * .125;
        managePoints();
    }, 75);
}

export const drawActualPoints = () => {
    drawPoints = (points.toString().length === 1) ? `000${points}` : 
    (points.toString().length === 2) ? `00${points}` :
    (points.toString().length === 3) ? `0${points}` : points.toString();
    ctx.fillText(drawPoints, 540, + 25);
};

export const drawHistoricalPoints = () => {
    historicalPoints = (points > historicalPoints * 1) ? drawPoints : historicalPoints;
    ctx.fillText(historicalPoints, 470, + 25);
};